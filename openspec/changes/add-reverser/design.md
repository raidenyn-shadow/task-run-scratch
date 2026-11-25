# Design

## Context

The repository has no string utilities yet; this change adds the first one.
See proposal.md for motivation and specs/reverse/spec.md for the requirement.

## Goals / Non-Goals

**Goals:**
- One pure function `reverse(text)` in `src/rev.py`.
- Reverse by code point, keeping the module dependency-free.

**Non-Goals:**
- Grapheme-aware reversal (combining marks, emoji sequences).
- Input validation, error handling, a CLI or packaging.

## Decisions

- Reverse with a slice, `text[::-1]`, rather than a loop or
  `reversed()` + `"".join()`. The slice is direct, works on any sliceable
  sequence, and matches the implementation named in tasks.md.
- Keep the function total and side-effect free, like the repository's other
  helpers.

## Risks / Trade-offs

- Per-code-point reversal can move combining marks → accepted; the spec's
  scenario and the task cover plain characters only.
