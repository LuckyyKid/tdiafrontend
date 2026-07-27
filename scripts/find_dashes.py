"""Report every em-dash (U+2014) occurrence in a JSON i18n file with context,
distinguishing paired (parenthetical, grammatical) from standalone (ungrammatical style).

A dash is "paired" when the same string contains a matching second dash — usually
a parenthetical aside like "X — Y — Z". A standalone dash bracketed by nothing
matching is likely an English-style emphasis dash that should be replaced by
comma, colon, or period.
"""
import json
import sys
from pathlib import Path

DASH = "\u2014"


def walk(node, path):
    if isinstance(node, dict):
        for k, v in node.items():
            yield from walk(v, path + [k])
    elif isinstance(node, list):
        for i, v in enumerate(node):
            yield from walk(v, path + [str(i)])
    elif isinstance(node, str):
        if DASH in node:
            yield path, node


def classify(s):
    """Classify each dash: paired or standalone. Returns list of (idx, kind)."""
    idxs = [i for i, c in enumerate(s) if c == DASH]
    kinds = ["standalone"] * len(idxs)
    used = [False] * len(idxs)
    for a in range(len(idxs)):
        if used[a]:
            continue
        for b in range(a + 1, len(idxs)):
            if used[b]:
                continue
            gap = s[idxs[a] + 1 : idxs[b]]
            if len(gap) <= 80 and "." not in gap and "?" not in gap and "!" not in gap:
                kinds[a] = "paired"
                kinds[b] = "paired"
                used[a] = True
                used[b] = True
                break
    return list(zip(idxs, kinds))


def main(path):
    data = json.load(open(path, encoding="utf-8"))
    total = paired = standalone = 0
    for keypath, s in walk(data, []):
        marks = classify(s)
        for idx, kind in marks:
            total += 1
            if kind == "paired":
                paired += 1
            else:
                standalone += 1
                start = max(0, idx - 30)
                end = min(len(s), idx + 30)
                snippet = s[start:end].replace("\n", " ")
                print(f"{'.'.join(keypath)} :: ...{snippet}...")
    print(f"\nTOTAL: {total}  PAIRED: {paired}  STANDALONE: {standalone}")


if __name__ == "__main__":
    main(sys.argv[1])
