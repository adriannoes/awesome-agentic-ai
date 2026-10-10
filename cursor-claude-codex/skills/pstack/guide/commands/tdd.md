# /tdd

## When to use

Fixing a bug with an obvious cheap local test path, or when you explicitly ask for a failing test first.

## Example prompt

```text
/tdd the cancel endpoint returns 500 when the run id is missing — write the failing test first.
```

## What you get back

RED-GREEN flow: failing test, minimal fix, refactor. Skips when the test path is unclear or expensive.

## Skill file

Local: [tdd/SKILL.md](../../tdd/SKILL.md)

Upstream (pstack 0.15.5): [tdd/SKILL.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/skills/tdd/SKILL.md)
