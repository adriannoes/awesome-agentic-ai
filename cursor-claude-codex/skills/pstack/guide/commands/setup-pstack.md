# /setup-pstack

## When to use

First-time setup or when you want to change which models pstack uses per role and reasoning budget.

## Example prompt

```text
/setup-pstack
```

## What you get back

Writes `~/.cursor/rules/pstack-models.mdc` — an always-applied rule mapping roles (feature, judgment, arena panels, etc.) to your available models.

## Skill file

Local: [setup-pstack/SKILL.md](../../setup-pstack/SKILL.md)

Upstream (pstack 0.15.5): [setup-pstack/SKILL.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/skills/setup-pstack/SKILL.md)
