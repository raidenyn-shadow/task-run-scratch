# Design

## Context

See `proposal.md` - Why. The repository holds static artifacts under `src/`
and has no checks beyond `openspec validate` (see `AGENTS.md`). T3 must produce
one small artifact through the standard change workflow.

## Goals / Non-Goals

**Goals:**

- Add `src/timer.txt` with exactly the line `recovered by the timer`.
- Keep the change folder to a proposal, one spec, this short design and tasks.

**Non-Goals:**

- No code, no build tooling and no tests beyond checking the file.
- No change to existing changes or specs.

## Decisions

- **Plain text file, created directly.** The artifact is static content, so it
  is written as a normal text file with a single trailing newline; no generator
  or template is needed.
- **One new capability, `timer-file`.** The file's path and contents are the
  observable behavior, so a single small spec covers it. A separate capability
  for validation was rejected: `openspec validate` is a repository check, not
  product behavior.
- **No design alternatives worth weighing.** Any other structure would add
  files without adding behavior.

## Risks / Trade-offs

- Trailing-newline ambiguity → the spec scenario only requires the
  `recovered by the timer` line to be present with no other non-empty lines, so
  both endings pass while the content stays exact.
