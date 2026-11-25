# Proposal

## Why

Issue #16 asks for a small word counter under `src/`, so the conductor loop has a concrete task to plan and implement. The repository has no code yet.

## What Changes

- Add `src/count.py` with a function `count_words(text)` that returns the number of words in `text`.
- A word is a run of non-whitespace characters, so `count_words('a b c')` returns 3.

## Capabilities

### New Capabilities

- `word-count`: counting the words in a piece of text.

### Modified Capabilities

None.

## Impact

- New file `src/count.py`. No dependencies beyond the Python standard library. No existing code changes.
