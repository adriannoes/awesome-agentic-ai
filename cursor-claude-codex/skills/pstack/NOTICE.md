# NOTICE

This folder is a **vendored snapshot** of the [pstack](https://github.com/cursor/plugins/tree/main/pstack) Cursor plugin, plus **hub-authored usage guides** in `guide/`.

## Original work

- **pstack** by Lauren Tan, Copyright (c) 2026 Lauren Tan, MIT License.
- Upstream: https://github.com/cursor/plugins/tree/main/pstack
- Pinned version: **0.15.5**
- Pinned commit: `adf3218ca2f5b9971eedc07a76bef22df7701539`

## What is vendored here

- All **47** `SKILL.md` packages under this folder (24 command skills + 23 `principle-*` skills), including `poteto-mode` playbooks, references, and scripts.
- **Agents:** `agents/poteto-agent.md`, `agents/comment-sicko.md`.

## What is hub-authored

- `README.md` (package index)
- Everything under `guide/` (command usage pages and indexes)
- This `NOTICE.md`

Hub-authored text is documentation for [awesome-agentic-ai](https://github.com/adriannoes/awesome-agentic-ai). It is not reviewed or endorsed by Lauren Tan or Cursor.

## Not included

- Official guide images under upstream `docs/guide/images/`
- `automations/benny/` (referenced by pstack but not bundled in this snapshot)
- `cursor-team-kit` skills (`/deslop`, `control-cli`, `control-ui`) — install that plugin separately when pstack references them

## Refresh

Follow [cursor-claude-codex/MAINTENANCE.md](../../MAINTENANCE.md): diff against the pinned upstream commit, preserve attribution, update this NOTICE and `guide/` when commands change.
