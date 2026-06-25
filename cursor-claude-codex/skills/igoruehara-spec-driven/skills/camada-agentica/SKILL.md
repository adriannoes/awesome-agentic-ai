---
name: camada-agentica
description: Use to propose and generate the project's agentic layer — rules (CLAUDE.md, settings.json), subagents (.claude/agents), skills (.claude/skills), and workflows/CI — tuned to the stack, tools, process, and domain. Proposes with justification and generates only what is approved. It is called by /kickoff and also runs standalone as the project evolves or new tools arrive. Trigger with /camada-agentica.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Project agentic layer

Tunes the layer that lets humans and agents **operate the pipeline**. Principle: **propose with justification (which input motivates each item), generate only what is approved.** Reference: `docs/engineering/agentic-layer.md`.

## Gather the context
Stack and quality gates (`CLAUDE.md`, ADRs), tools (`integrations.md`), process (Scrum/Kanban), and domain (`context-map.md`, `glossary.md`). This is what decides which artifacts make sense.

## Propose (do not generate without OK)
- **Rules:** adjustments to `CLAUDE.md` per stack; `.claude/settings.json` with an allowlist of the stack's common commands and hooks. ⚠️ Permissions/hooks are sensitive — confirm **each one**.
- **Agents (subagents)** in `.claude/agents/<name>.md` (use `docs/engineering/_templates/subagent.template.md`):
  e.g. `spec-reviewer` (DoR gate), `domain-modeler`, `adr-writer`, `<stack>-tester`.
- **Skills** in `.claude/skills/<name>/` (use `docs/engineering/_templates/skill.template.md`): according to the tools, `/spec-to-jira`, `/publicar-confluence` (tools-aware).
- **Workflows:** hooks in `settings.json` (lint/test on `Stop`). For **CI/CD** (pipeline gates) delegate to the `/setup-ci` skill; for the **PR/MR gate**, to `/revisar-pr`.

## Rules
- Each proposal cites the **input** that motivates it (e.g. Python stack → `pytest-tester` + allowlist).
- Unapproved items become **adoption roadmap items** (suggest `/roadmap`).
- Map each artifact in `docs/engineering/agentic-layer.md`.
