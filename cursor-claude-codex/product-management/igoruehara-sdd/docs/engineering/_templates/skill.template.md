---
name: <skill-name>
description: <when to use, in third person, with clear triggers. E.g.: "Use to open a new feature in the SDD pattern, choosing the tier and copying the templates." Trigger with /<name>.>
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: <title>

<Objective in 1-2 sentences.>

## Process
1. <step — use AskUserQuestion for user decisions>
2. <step>

## Outputs
- <files/effects the skill produces>

## Rules
- Confirm before outward-facing actions (publishing, creating an issue, configuring an MCP).
- Follow the `README.md` pipeline and the `CLAUDE.md` conventions.
- *Tools-aware* skills (depend on an MCP) check `mcp__<server>__*` and degrade gracefully if absent.

<!-- Template in skill format (target dialect: name + description, no alwaysApply).
     Copy to .claude/skills/<name>/SKILL.md. Here in _templates/ it is not loaded as a skill. -->
