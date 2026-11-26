# Proposal

## Why

The scratch repository has no greeting helper, and task #29 asks for one as the first
of two independent features. Shipping the greeting alone gives a small, coherent change
whose behavior can be specified and verified without waiting for the rest.

## What Changes

- Add `src/greet.js`, exporting `greet(name)` that returns `Hello, <name>!`.
- Cover the greeting behavior with a spec scenario that the implementation satisfies.
- Keep the word counter (`countWords`) out of this change: task #29 is intentionally
  over the size limit, so that part is moved to a follow-up task (see the pull request's
  "Work discovered").

## Capabilities

### New Capabilities

- `greeting`: formatting a greeting for a supplied name.

### Modified Capabilities

None.

## Impact

- New file `src/greet.js`; no existing code, dependencies or APIs change.
- No test framework is added; behavior is checked with a one-off Node run and
  `openspec validate`.
