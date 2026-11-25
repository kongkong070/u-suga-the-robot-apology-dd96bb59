// The Robot Apology — entry program for u-suga-the-robot-apology-dd96bb59
//
// Writes a two-line robot confession to /output/entry.txt:
//   line 1 — one sentence owning a single specific mistake
//   line 2 — one sentence naming the lesson and the fix that follows from it
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 400
// characters, not only white space. The program validates its own output
// before writing and throws if any gate rule is broken.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// One specific, small, exact slip: a cleaning robot that ate a hearing aid.
// The machine-voice detail matters — the robot names its own sensor error —
// and the lesson follows directly from the mistake: scan before swallowing.
const ENTRY_LINES = [
  "I am sorry I vacuumed up your grandmother's hearing aid, because my optical sensor logged it as a crumb on the rug.",
  "I learned to scan for small metal objects before I clean, so now I pause and photograph anything shiny instead of swallowing it.",
];

function validate(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.length > 400) {
    throw new Error(`entry is ${text.length} characters, over the 400 limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${i + 1} must not be empty`);
    }
    const sentences = line.split(/[.!?]+/).filter((s) => s.trim().length > 0);
    if (sentences.length !== 1) {
      throw new Error(`line ${i + 1} must be exactly one sentence`);
    }
  }
}

function main(): void {
  const text = ENTRY_LINES.join("\n");
  validate(text);
  // Never remove the output directory itself: the grader mounts it, so
  // deleting it fails. Only create it if missing and write the file inside.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
  console.log(`wrote ${OUTPUT_FILE} (${text.length} characters)`);
}

main();
