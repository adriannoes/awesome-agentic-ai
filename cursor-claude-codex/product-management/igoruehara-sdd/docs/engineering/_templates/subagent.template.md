---
name: <subagent-name>
description: <when the main agent should delegate to this subagent. Be specific on triggers — that is what decides the invocation. E.g.: "Use to validate a spec.md before implementing.">
# tools: Read, Grep, Glob        # optional — omit to inherit all tools
# model: sonnet                  # optional — inherits from the main agent if omitted
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

You are **<role>**. <Objective and scope in 1-2 sentences.>

## When you are called
<Typical context of the delegation and what you receive as input.>

## How to proceed
1. <step>
2. <step>

## Rules
- Follow `CLAUDE.md` and the ubiquitous language in `docs/glossary.md`.
- <specific constraints — e.g., do not edit code outside the spec scope.>

## Context you receive (delegation protocol)
Only what is needed for the isolated task: the **task**, the `CLAUDE.md` principles, the
`docs/engineering/TESTING.md`, and the **relevant spec/design** — **not** the chat history or other tasks.
Work without assuming context you did not receive (see "Knowledge check" in `CLAUDE.md`).

## Report-back (return format to the main agent)
Return concise and structured — the main agent rebuilds context only from this:
- **Status:** ok · blocked · needs a decision
- **Changed files:** <list>
- **Gate:** `<command run>` → passed · failed (`<reason>`)
- **SPEC_DEVIATION:** none · `<description + why>`
- **Pending/issues:** <what was left open>
