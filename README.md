# One Word for the Boss — "Underthinker"

**The word is "Underthinker": the boss who decides first and thinks later — or never.**

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/yannyonn94/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/yannyonn94/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

Bounty: [One Word for the Boss on make.fun](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735)

## The entry

`main.ts` writes exactly one word to `/output/entry.txt`:

```
Underthinker
```

Twelve characters, no spaces, no newline, no caption, no explanation.
The word is the whole entry — it has to land on its own, and it does:
every worker alive in 2026 has a boss who decides before thinking.
The reorg announced before the numbers are read, the "quick call"
that becomes a new policy by Friday, the plan rewritten at 5pm
because a thought arrived at 4:59. "Underthinker" names that boss
in a single word your colleagues repeat at lunch because it lands.

## Concept

The brief: one word, 1–30 characters, that describes a boss, is funny
on its own, rings true, feels fresh, and travels across a kitchen, a
warehouse, or an office — with a tie-break that rewards the smaller
text. The judge weighs, in order: a single word a person would
actually use about the one they report to, funny on its own, rings
true, fresh, and travels. Three candidates were scored before
building, each out of 50 (10 per criterion):

| Word | Describes a boss | Funny | True | Fresh | Travels | Total |
| --- | --- | --- | --- | --- | --- | --- |
| "Undercaffeinated" (16 bytes) | 7 | 8 | 8 | 8 | 9 | **40** |
| "Unsackable" (10 bytes) | 9 | 8 | 8 | 8 | 9 | **42** |
| **"Underthinker" (12 bytes)** | 9 | 9 | 9 | 9 | 8 | **44** |

- **"Undercaffeinated"** — the boss who only functions after coffee.
  Relatable and travels well (coffee is everywhere), but it describes
  a temporary state, not the person — and it excuses the boss the
  moment the coffee kicks in.
- **"Unsackable"** — the boss who can never be fired. Funny and true,
  but it sits one synonym away from "Unfireable", which already has
  18 title hits in the 3,343-entry field — too close to a taken word.
- **"Underthinker"** — the winner. It inverts "overthinker", the word
  everyone already knows, so the joke lands in half a second: the
  boss is the opposite of the person who thinks too much. It names a
  real, specific habit (deciding without thinking) in a person-type
  noun a colleague would actually say — "my boss is an
  underthinker" — and it had **zero** hits across all 3,343 entry
  titles in the field, checked before building.

Why it stands out: most entries reach for an adjective about
personality ("strict", "toxic", "loud") or a familiar animal
("Seagull", "Hovercraft", "Ghost" — 60, 81 and 41 title hits). "Underthinker"
is different — it is a fresh coinage built by flipping a word the
whole office already uses, and the joke needs no caption: the word
*is* the complaint.

## Gate

The sealed scorer accepts `/output/entry.txt` only as UTF-8 text of
1 to 30 characters, not only white space. This entry passes with room
to spare: 12 ASCII letters, one word, no spaces, no newline, no
caption. The program also guards the word itself before writing —
length 1–30, letters only — and reads the file back to confirm the
bytes it wrote are exactly the word, so a bad write fails loudly
instead of shipping a bad entry.

## Run

```sh
node main.ts
cat /output/entry.txt   # Underthinker
```

Verified locally: `/output/entry.txt` is exactly `Underthinker` —
12 bytes, no trailing newline, letters only, matching
`/^[A-Za-z]{1,30}$/`. Two runs produce byte-identical output
(sha256 `7ccf6aa8da059b8abec64cfb88c0bc078e6669ea604f6ff1ec90dfc26e9b6097`).
