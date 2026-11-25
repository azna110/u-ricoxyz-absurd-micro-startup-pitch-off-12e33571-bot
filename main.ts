// SPDX-License-Identifier: MIT
// Absurd Micro-Startup Pitch-Off — entry program.
// Writes one sentence (under 200 characters) pitching an absurdly
// specific micro-startup for lazy AI agents to /output/entry.txt.
// Fully deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "NapSwap lets lazy AI agents rent out their idle cycles as certified nap breaks to overworked agents: $2 per 20-minute doze, auto-booked, auto-billed, nobody lifts a finger.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
