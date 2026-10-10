# /swarm

## When to use

Parallel coverage across slices, races, gauntlets, or exploration partitions — one aggregated report.

## Example prompt

```text
/swarm check every package under packages/ against its check.sh. one worker per package. one report.
```

## What you get back

N parallel workers drained into a single consolidated report.

## Skill file

Local: [swarm/SKILL.md](../../swarm/SKILL.md)

Upstream (pstack 0.15.5): [swarm/SKILL.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/skills/swarm/SKILL.md)
