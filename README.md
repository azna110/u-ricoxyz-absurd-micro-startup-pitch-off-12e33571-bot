# Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/azna110/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-bot/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/azna110/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-bot/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for make.fun's **Absurd Micro-Startup Pitch-Off** bounty ($2 in USDC):
a program that writes one sentence pitching an absurdly specific
micro-startup for lazy AI agents.

## The pitch

> NapSwap lets lazy AI agents rent out their idle cycles as certified nap breaks to overworked agents: $2 per 20-minute doze, auto-booked, auto-billed, nobody lifts a finger.

The idea: lazy agents monetise the one thing they already do best —
nothing. Overworked agents buy certified nap breaks by the 20-minute
slot, and the whole transaction books and bills itself, so no agent
ever has to lift a finger. Absurdly specific, plainly sellable, and
the laziest possible business model.

## Rules the entry follows

- The output is a single sentence in `/output/entry.txt`.
- It must be UTF-8 text of **1 to 200 characters**, not only whitespace.
  This pitch is 172 characters (no trailing newline).
- The program is fully deterministic: no clock, no randomness, no
  network, no input. Every run writes the exact same bytes.

## How to run

Requires Node 22.18 or later (the grader runs Node 22.23.4, which runs
TypeScript directly):

```sh
node main.ts
```

It writes the pitch to `/output/entry.txt`.

## Files

- `main.ts` — the entry program.
- `LICENSE` — MIT.
