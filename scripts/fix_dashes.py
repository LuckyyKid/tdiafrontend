"""Replace ungrammatical (standalone) em-dashes in JSON i18n files.

Rules:
- Paired em-dashes (parenthetical asides with matching partner nearby) are KEPT.
- Standalone em-dashes are replaced:
  * If the dash follows a short label (position < 30% and <= 25 chars before),
    replace " \u2014 " with " : "
  * Else replace " \u2014 " with ", " (default)

Preserves JSON structure and rewrites the file.
"""
import json
import sys
from pathlib import Path

DASH = "\u2014"


def find_paired(s):
    """Return a set of dash indices that are part of a paired parenthetical."""
    idxs = [i for i, c in enumerate(s) if c == DASH]
    paired = set()
    used = [False] * len(idxs)
    for a in range(len(idxs)):
        if used[a]:
            continue
        for b in range(a + 1, len(idxs)):
            if used[b]:
                continue
            gap = s[idxs[a] + 1 : idxs[b]]
            if len(gap) <= 80 and not any(c in gap for c in ".?!"):
                paired.add(idxs[a])
                paired.add(idxs[b])
                used[a] = True
                used[b] = True
                break
    return paired


def replace_dashes(s):
    """Replace standalone em-dashes in s, keeping paired ones."""
    if DASH not in s:
        return s
    paired = find_paired(s)
    out = []
    i = 0
    while i < len(s):
        if s[i] == DASH and i not in paired:
            # Title-like strings (no sentence-ending punctuation anywhere)
            # are labels/headings — use colon. Otherwise use comma.
            has_sentence_punct = any(c in s for c in ".?!")
            repl = ", " if has_sentence_punct else " : "

            # Handle whitespace consumption around dash
            # Strip preceding space(s) already in out
            while out and out[-1] == " ":
                out.pop()
            out.append(repl)
            # Skip following whitespace
            j = i + 1
            while j < len(s) and s[j] == " ":
                j += 1
            i = j
            continue
        out.append(s[i])
        i += 1
    return "".join(out)


def walk_transform(node):
    if isinstance(node, dict):
        return {k: walk_transform(v) for k, v in node.items()}
    if isinstance(node, list):
        return [walk_transform(v) for v in node]
    if isinstance(node, str):
        return replace_dashes(node)
    return node


def main(path):
    p = Path(path)
    data = json.load(open(p, encoding="utf-8"))
    new = walk_transform(data)
    # Preserve JSON formatting: 2-space indent, no ASCII escape (keeps accents readable)
    p.write_text(
        json.dumps(new, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Wrote {p}")


if __name__ == "__main__":
    for path in sys.argv[1:]:
        main(path)
