# AGENTS.md

Scratch repository for proving the `project-conductor` loop. Nothing here ships.

## Process

1. A task is started on the branch the conductor named. Open no other branch.
2. Plan with an OpenSpec change opened by `openspec-ff-change`, with the task as its input. Keep the change small: a proposal, one spec, a short design and tasks.
3. Implement with `openspec-apply-change` from the change folder.
4. Open a draft pull request that closes the issue. Commits and the PR title follow Conventional Commits.

The code of a task lives under `src/`. There are no checks beyond `openspec validate`.
