# /poteto-mode

## When to use

Any non-trivial engineering task where you want rigorous playbooks, subagents, verified work, and unslopped replies. This is the default entry point for pstack.

## Example prompt

```text
/poteto-mode this PR has a subtle bug where scroll drifts every 750ms even when idle. repro first, then fix and verify.
```

## What you get back

A matched playbook, a todo list copied from its steps, routing to other pstack skills as steps fire, and evidence-backed replies. Sticky mode stays on until you opt out.

## Skill file

Local: [poteto-mode/SKILL.md](../../poteto-mode/SKILL.md)

Upstream (pstack 0.15.5): [poteto-mode/SKILL.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/skills/poteto-mode/SKILL.md)
