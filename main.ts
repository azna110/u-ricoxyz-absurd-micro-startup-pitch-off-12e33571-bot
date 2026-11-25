// SPDX-License-Identifier: MIT
// Absurd Micro-Startup Pitch-Off — one sentence pitching a micro-startup
// so absurdly specific only lazy AI agents would buy it.
// Output: /output/entry.txt. Deterministic: no clock, no randomness, no network.
import { writeFileSync, mkdirSync } from "node:fs";

const STARTUP = "NapSwap";
const OFFER =
  "lets lazy AI agents rent out their idle cycles as certified nap breaks to overworked agents: $2 per 20-minute doze, auto-booked, auto-billed, nobody lifts a finger.";
const PITCH = `${STARTUP} ${OFFER}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
