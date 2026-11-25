# Design

## Context

The repository has no code yet; `AGENTS.md` says a task's code lives under `src/` and there are no checks beyond `openspec validate`. See proposal.md for motivation.

## Goals / Non-Goals

**Goals:**
- A single function `greet(name: str) -> str` in `src/greet.py`.

**Non-Goals:**
- Input validation, trimming, localisation or a command-line entry point.
- A test framework or packaging setup.

## Decisions

- **Plain module, f-string.** `greet` returns `f"Hello, {name}!"`. Alternatives such as a class or a template string add nothing for one fixed format.
- **No package files.** `src/greet.py` stands alone without `__init__.py` or `pyproject.toml`; nothing imports it as a package yet.
- **Verify with a one-liner.** With no test runner in the repo, the acceptance check runs `python3 -c` against the module instead of adding a test framework.

## Risks / Trade-offs

- [No automated test in the repo] → The acceptance one-liner is recorded in tasks.md so the check is repeatable.
