# Proposal

## Why

The scratch repository proves the conductor's timer recovery path: a task that
waits for a timer wake instead of a webhook must still produce one small,
verifiable artifact through the standard change workflow.

## What Changes

- Add `src/timer.txt` whose full contents are the single line
  `recovered by the timer`.
- Add one capability that fixes the timer file's path and exact contents.

## Capabilities

### New Capabilities

- `timer-file`: the repository ships a static timer file, and its path and exact
  contents are part of the specified behavior.

### Modified Capabilities

None.

## Impact

- New file `src/timer.txt` under the repository's `src/` area.
- No code, APIs, dependencies or tests change; the only check is
  `openspec validate`.
