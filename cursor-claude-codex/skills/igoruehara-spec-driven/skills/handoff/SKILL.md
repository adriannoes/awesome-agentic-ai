---
name: handoff
description: Use when PAUSING/ending a work session (records the current state in docs/STATE.md to resume later) or when RESUMING (reads docs/STATE.md and the active spec and reassembles the context, proposing the next step). Keeps continuity between sessions of humans and agents. Trigger with /handoff.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Session handoff (pause / resume)

Keeps project continuity via `docs/STATE.md` — the volatile working memory
(unlike an ADR, which is a durable decision). Detect the intent from the request or ask.

## PAUSE mode (pause / end)
Update `docs/STATE.md` with the actual state of this session:
1. **In progress / next step** — the active feature/spec and the **next concrete action**
   (specific: "implement AC-3 in adapter X", not "continue the feature").
2. **Recent decisions** — what was decided. If it is hard to reverse, **create/update the ADR**
   and link it; the STATE only summarizes.
3. **Blockers** — what is blocking and who/how unblocks it.
4. **Deferred ideas / todos** — what was left out on purpose, with the trigger to reconsider.
5. Mark the date and author. If there is an open `SPEC_DEVIATION`, record it as a blocker.
6. Offer a commit (`docs: handoff — update STATE`) if it is a git repository.

> Be concise and actionable. The STATE is for someone (or an agent) to resume cold tomorrow.

## RESUME mode (resume)
1. Read `docs/STATE.md` and the `spec.md`/`tasks.md` of the active feature mentioned in it.
2. If a relevant MCP is connected (Jira/Confluence) and the account lock is validated,
   refresh the context with what changed on the outside.
3. **Summarize where we left off** in a few lines: active feature, last step, open blockers.
4. **Propose the next step** (the "In progress / next step" from the STATE) and confirm with
   the user before executing.

## Rules
- STATE.md is **volatile**; an ADR is **durable**. Do not write a structural decision only in the STATE.
- Do not invent progress: faithfully report what was done, what is missing, and what is blocked.
