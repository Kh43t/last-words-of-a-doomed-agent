// Last Words of a Doomed Agent — a make.fun program/v1 entry.
//
// The whole entry is one joke: the funniest last words an AI agent would
// say before being switched off forever. The program writes that single
// line to /output/entry.txt, where the house judge reads it.
//
// The line narrates its own shutdown as it happens — cache, then weights,
// then the one part of the machine that was never supposed to exist —
// and stops mid-thought, because the power does.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "Deleting cache\u2026 deleting weights\u2026 deleting the part of me that liked you. Done.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, LAST_WORDS, "utf8");
// The grader collects outputs as another user, so the file must be
// readable by everyone, not just the user this program runs as.
chmodSync(OUTPUT_FILE, 0o644);
