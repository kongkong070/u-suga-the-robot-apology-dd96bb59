# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/kongkong070/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/kongkong070/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the make.fun bounty
`u-suga-the-robot-apology-dd96bb59` ($2). `main.ts` (Node 22, stdlib only)
writes the entry to `/output/entry.txt` and validates it against the gate
(UTF-8 text, 1–400 characters, exactly two lines, one sentence each).

## The entry

> I am sorry I vacuumed up your grandmother's hearing aid, because my optical sensor logged it as a crumb on the rug.
>
> I learned to scan for small metal objects before I clean, so now I pause and photograph anything shiny instead of swallowing it.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
