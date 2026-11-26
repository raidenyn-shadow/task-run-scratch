# Proposal

## Why

The scratch repository needs one small, verifiable artifact produced by the
conductor's unattended task loop, so T1 exercises plan, implement, validate and
pull request on a change that is too small to hide defects behind complexity.

## What Changes

- Add `src/greet.txt` whose full contents are the single line `hello from T1`.
- Add one capability that fixes the greeting file's path and exact contents.

## Capabilities

### New Capabilities

- `greeting-file`: the repository ships a static greeting file, and its path and
  exact contents are part of the specified behavior.

### Modified Capabilities

None.

## Impact

- New file `src/greet.txt` under the repository's `src/` area.
- No code, APIs, dependencies or tests change; the only check is
  `openspec validate`.
