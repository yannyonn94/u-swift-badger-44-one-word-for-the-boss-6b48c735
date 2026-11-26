import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word for the Boss — make.fun bounty
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is exactly one word: "Underthinker".
// The boss who decides first and thinks later — or never. The
// reorg announced before the numbers are read, the "quick call"
// that becomes a new policy, the plan rewritten at 5pm because
// a thought arrived at 4:59. No phrase, no caption, no
// explanation. The word stands on its own.
const WORD = "Underthinker";

// Gate: the entry must be 1-30 characters, a single word, no spaces.
// "Underthinker" is 12 characters — short, which also helps the
// tie-break (smaller text wins an exact tie on Judge win rate).
// Letters only: a hyphen, digit or punctuation would make the judge
// read it as something other than one clean word.
if (
  WORD.length < 1 ||
  WORD.length > 30 ||
  /\s/.test(WORD) ||
  !/^[A-Za-z]+$/.test(WORD)
) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Verify the write: what the grader reads must be byte-identical
// to the word above, with no trailing newline or extra bytes.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error(
    `Entry mismatch: wrote ${JSON.stringify(written)}, expected ${JSON.stringify(WORD)}`,
  );
}
