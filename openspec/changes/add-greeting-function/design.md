# Design

## Context

See `proposal.md` for motivation. The repository has no `src/` or test framework, and
`AGENTS.md` puts task code under `src/` with `openspec validate` as the only check.
Node.js is available in the worktree.

## Goals / Non-Goals

**Goals:**

- One small module with a pure, easily checked function.
- Behavior matching the `greeting` spec exactly.

**Non-Goals:**

- The word counter (`countWords`); it moves to a follow-up task.
- Adding a test framework or a build step.

## Decisions

- **Plain CommonJS module** (`module.exports = { greet }`) because there is no
  `package.json`, so Node treats files as CommonJS without extra configuration.
  Alternatives: an ES module (needs `package.json` or `.mjs`), or a TypeScript build
  (adds tooling the repository does not have).
- **Verification with a one-off Node run** of the spec scenario plus `openspec validate`.
  Alternatives: adding a test runner, which is out of scope for this task.

## Risks / Trade-offs

- [No automated regression test for the greeting] → the scenario is stated in the spec and
  checked once by hand; a test setup can be added when the repository grows one.
