# Git Commit

## Overview

Create a git commit for the current changes using Conventional Commits-style format.

**Source:** [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0)

## Format

`<type>(<scope>): <summary>`

- **type** (required): `feat` for new features, `fix` for bug fixes. Other common types: `docs`, `refactor`, `chore`, `test`, `perf`.
- **scope** (optional): Short noun in parentheses for the affected area (e.g., `api`, `parser`, `ui`).
- **summary** (required): Short, imperative, ≤ 72 chars, no trailing period.

## Rules

- Body is optional. If needed, add a blank line after the subject and write short paragraphs.
- Do NOT include breaking-change markers or footers.
- Do NOT add sign-offs.
- Only commit; do NOT push unless explicitly requested.
- If unclear whether a file should be included, ask the user which files to commit.

## Steps

1. Review `git status` and `git diff` to understand current changes
2. (Optional) Run `git log -n 50 --pretty=format:%s` to see commonly used scopes
3. If ambiguous extra files exist, ask the user for clarification before committing
4. Stage only the intended files
5. Run `git commit -m "<type>(<scope>): <summary>"` (and `-m "<body>"` if needed)
