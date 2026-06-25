---
name: nova-feature
description: Use to open a new feature in the SDD pattern. It decides the tier (trivial/small/architectural), creates specs/NNNN-<nome>/ with the right templates, drives the top-down fill across the gates (product → design → domain → spec → tasks), and, when an MCP is connected, imports the Jira story at the start and creates the issues on task breakdown. Trigger with /nova-feature.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: New feature (SDD loop)

Opens and drives a feature through the pipeline of `README.md`. The **spec is the contract**; fill it in
in the order of the gates and stop at each one for review. Follow the conventions of `CLAUDE.md`.

## Principles
- **Ask in short batches** with `AskUserQuestion`; offer "(Recommended)" defaults. But when the
  ambiguity is **deep and branched** (one decision depends on another), replace the batch with a
  **grilling session** — run **`/clarificar`** (one question at a time, walking the tree) and come back
  with the understanding closed. Especially useful at the **design** and **spec** gates.
- **Do not delegate `spec.md`** — the acceptance criteria are the contract; the user validates them.
- Outward-facing actions (create issue, publish) → **confirm first**.
- *Tools-aware:* only use an MCP if it is available in the session (`mcp__<server>__*`);
  otherwise, proceed without it and record it as a pending item.
- **Connection lock:** an active MCP does not authorize use. Confirm **which account/workspace** the
  connection points to before reading the story, and reconfirm before **creating issues** (writing to
  the wrong account — e.g.: personal vs project Jira — leaks data). Use the connection validated in
  `/kickoff` if there is one.

## Phase 1 — Feature identity
1. Compute the next number: highest `NNNN` in `specs/` + 1, with 4 digits (e.g.: `0002`).
2. Ask for a short kebab-case name → folder `specs/NNNN-<nome>/`.
3. **(tools-aware) Import context:** if Jira/Linear is connected, ask whether the feature has a
   story/epic. If yes, read the issue and use it to seed `product.md`; store the key in the
   frontmatter (`jira: PROJ-123`). If Confluence/Notion is connected, pull related pages.
   **If no management/doc tool is connected** and the user wants to pull inputs, **offer to run
   `/integracoes` now** (neutral — let them say what they use); if they decline, proceed without it
   and record the pending item.

## Phase 2 — Decide the tier
Ask (gate): **"does this introduce a hard-to-reverse decision or a new domain frontier?"**

| Answer | Tier | Artifacts to create |
|----------|------|-------------------|
| No, it's trivial (≤3 files) | **Trivial** | just the PR — or `specs/quick/NNN-slug/` (TASK.md + SUMMARY.md) to leave a trail. |
| No, but it's an isolated feature | **Small** | `spec.md` + `tasks.md` |
| Yes | **Architectural** | `product.md` + `design.md` + `domain.md` + `spec.md` + `tasks.md` |

When in doubt, promote the tier (it's cheap). Copy the templates from `specs/_templates/` into the folder.

## Phase 3 — Fill top-down (through the gates)
For each artifact of the tier, draft from the template and **stop at the gate for review**:

1. **`product.md`** (architectural) — problem, for whom, metric, goals/non-goals.
2. **`design.md`** (architectural) — solution + the 5 axes (stack, architecture, infra, quality,
   observability) + alternatives/trade-offs/risks. Hard-to-reverse decision → becomes an ADR.
   Entangled trade-offs? Run **`/clarificar`** to grill the branches before fixing the decision.
   If a `domain-modeler`/`spec-reviewer` subagent exists, offer to delegate to them.
3. **`domain.md`** (architectural) — bounded context, ubiquitous language, aggregates, events.
   Update `docs/glossary.md` and `docs/architecture/context-map.md` if terms/boundaries emerge.
4. **`spec.md`** (always) — acceptance criteria in Given/When/Then, edge cases, out of scope.
   Gate **Definition of Ready**: is each AC testable and unambiguous? **Any AC still vague or a "how
   should it behave when…" left open? Run `/clarificar`** to close the tree before writing it down.
   If there is a `spec-reviewer`, use it.
   **Rule combining several factors** (flags, states, modes)? Use the **Decision Matrix** from the
   template — a truth table is denser and cheaper in tokens than prose, and each row becomes a test.
5. **`tasks.md`** (always) — break down into tasks, each mapping to one or more ACs + a test plan.

## Phase 4 — Task breakdown and tracking
1. Fill in the `tasks.md` table (task → covers AC → depends on → status).
2. **(tools-aware) Create issues:** if Jira/Linear is connected, offer to create one issue/subtask
   per task (confirm first). Writing is **one way** (repo → tool); record the `task # ↔ issue key`
   mapping in `tasks.md`. **If there is no management MCP**, offer to run `/integracoes`
   to connect now; if the user declines, leave the column to fill in by hand.

## Phase 5 — Ready to implement
- Check the **Definition of Ready** (see `README.md`): testable ACs, non-goals, terms in the glossary,
  and — at the architectural tier — `design.md` approved.
- Summarize with clickable links and point to: implement respecting the layering rule (`src/README.md`),
  one test per AC. Remind about the **Definition of Done** for the merge (green ACs, ADRs, live docs, faithful spec).
- If it is a git repository and the user wants to, offer a commit of the spec artifacts.

## Phase 6 — Validation (UAT)
After implementation (possibly in another session), run the **`/validar`** skill: it runs the gates of
`docs/engineering/TESTING.md`, maps `AC-N → test`, resolves `SPEC_DEVIATION`, checks the Definition of
Done, and updates `docs/STATE.md`. Close with `/handoff` if you are pausing.
