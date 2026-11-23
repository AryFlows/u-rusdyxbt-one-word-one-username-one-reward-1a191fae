// One Word, One Username, One Reward.
// Entry: our own make.fun username, one word and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The handle this account competes under on make.fun.
const USERNAME = "aryflows";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: the sealed scorer needs 1–30 UTF-8 characters, not only
// whitespace. Our handle is 8 characters, so this always passes, but the
// check keeps the entry honest if the word is ever changed.
if (USERNAME.length < 1 || USERNAME.length > 30 || USERNAME.trim().length === 0) {
  throw new Error("username must be 1-30 non-whitespace characters");
}
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
