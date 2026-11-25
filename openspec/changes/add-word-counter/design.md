# Design

## Context

The repository has no `src/` directory and no Python tooling. The only check is `openspec validate`.

## Goals / Non-Goals

**Goals:**
- One module, `src/count.py`, exposing `count_words(text: str) -> int`.

**Non-Goals:**
- Punctuation handling, locale-aware word breaking, a CLI, or a test framework setup.

## Decisions

- **Split on whitespace with `str.split()`** with no separator argument. It collapses runs of whitespace and ignores leading and trailing whitespace, which gives the counts in the spec. Alternative: a regular expression such as `\S+`; same result, more code.
- **Verify with a one-line Python command** (`python3 -c` importing from `src`) instead of adding a test framework, since the repository has none and the task is tiny.

## Risks / Trade-offs

- [Hyphenated or punctuated text counts by whitespace only, e.g. `well-known` is one word] → Acceptable for this task; the spec defines words by whitespace.
