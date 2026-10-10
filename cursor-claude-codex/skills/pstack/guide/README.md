# pstack usage guide

Short, task-oriented pages for each pstack command. For the full skill text, read the vendored `SKILL.md` in the parent folder or install the plugin in Cursor.

## Start here

1. **Install the plugin** (recommended for daily use):

   ```text
   /add-plugin pstack
   ```

2. **Configure models** — run [`/setup-pstack`](./commands/setup-pstack.md) once. It writes `~/.cursor/rules/pstack-models.mdc` with your reasoning budget and per-role model choices.

3. **Route work** — start non-trivial tasks with [`/poteto-mode`](./commands/poteto-mode.md). Describe the goal and how you will know it is done; the skill picks a playbook and calls other skills as steps fire.

## If you only remember one prompt

```text
/poteto-mode the export writes duplicate rows when a retry lands mid-run. repro first, then fix and verify.
```

You do not need to name a playbook or list skills. "repro first" and a checkable outcome are enough routing signal.

## Guide map

| Section | What it covers |
|---|---|
| [Commands](./commands/) | **24** slash commands — when to use, example prompt, expected output |
| [Playbooks](./playbooks.md) | **23** playbooks that `/poteto-mode` matches automatically |
| [Principles](./principles.md) | **23** `principle-*` skills — redirect an agent mid-task by name |
| [Agents](./agents.md) | `poteto-agent` and Comment Sicko subagents |

## Reading order

Read this page and [setup-pstack](./commands/setup-pstack.md) first, then [poteto-mode](./commands/poteto-mode.md). After that, each command page stands alone.

The upstream [pstack guide](https://github.com/cursor/plugins/tree/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/docs/guide) walks through a first real task end to end (10 chapters). This hub guide is a lighter index focused on **which command to reach for**.

## Not covered here

- **`cursor-team-kit`** — `/deslop`, `control-cli`, and `control-ui` ship in a separate plugin. Install it alongside pstack when those skills are referenced.
- **`benny` automation pack** — referenced by pstack but not vendored in this folder. See upstream [automations/benny](https://github.com/cursor/plugins/tree/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/automations/benny).

## Attribution

Vendored from [pstack 0.15.5](https://github.com/cursor/plugins/tree/main/pstack) (Lauren Tan, MIT). Hub-authored guide text only — see [NOTICE.md](../NOTICE.md).
