# /blast-radius

## When to use

A small-looking diff that might break something elsewhere, or before shipping a change you do not fully trust.

## Example prompt

```text
/blast-radius what could break if we change the default timeout here?
```

## What you get back

Downstream impact analysis plus one fact proven by running code (not asserted) that limits the blast radius.

## Skill file

Local: [blast-radius/SKILL.md](../../blast-radius/SKILL.md)

Upstream (pstack 0.15.5): [blast-radius/SKILL.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/skills/blast-radius/SKILL.md)
