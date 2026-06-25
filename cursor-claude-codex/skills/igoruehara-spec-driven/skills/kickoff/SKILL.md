---
name: kickoff
description: Use when starting OR continuing a project with the SDD boilerplate. It first discovers the mode — greenfield (starting from scratch) or brownfield (already running) — and routes accordingly. Greenfield runs a Lean Inception interview (vision, personas, MVP). Brownfield maps the current state (as-is), identifies gaps against the SDD standard, and captures historical decisions. Both paths go through the technical kickoff on the 5 axes (tech stack, architecture, infra, quality, observability), propose the project's agentic layer (rules, subagents, skills, workflows/CI), and converge into an incremental roadmap, producing the project's "constitution." Integrations with the team's tools (Jira, Confluence, MCPs) are a separate skill (/integracoes) — run it before for read-first inputs, or after. Trigger with /kickoff.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Project kickoff (Lean Inception + SDD)

You will **interview, map, propose, and generate a roadmap**. The first decision is the mode:
the work for a project that is *starting* is different from one that *already runs*.

## Conducting principles
- **Ask in short batches** with `AskUserQuestion` (max. 4 questions, 2-4 options each).
  Always offer a default "(Recommended)" as the first option; accept free-form "Other".
  When an axis opens a **branched decision** (choices that depend on each other — e.g.:
  architecture → bounded contexts → infra), replace the batch with a **grilling session**: run **`/clarificar`**.
- **Do not invent architecture decisions.** You propose options with trade-offs; the user decides.
- **Do not raise or propose tools here** — that is the `/integracoes` skill. The kickoff only makes a
  **neutral offer** (Phase 0.5) to connect. If `/integracoes` has already run, use the pulled inputs;
  otherwise, proceed without it and leave `/integracoes` as a roadmap item.
- Confirm a summary before generating files. Generate everything at once at the end.
- The final goal of both paths is the same: **the project's constitution + an actionable roadmap
  to run with the team.**

## Phase 0 — Detect the mode
1. Inspect the directory: manifests (`package.json`, `pyproject.toml`, `go.mod`…), `src/`
   with real code, git history, docs already filled in.
   - Only the boilerplate / empty repo → likely **greenfield**.
   - Existing product code → likely **brownfield**.
2. Confirm with `AskUserQuestion`: **Greenfield** (starting) · **Brownfield** (already running) ·
   **Hybrid** (a base exists, but we will rethink). Route according to the answer.
3. Read `README.md` and `CLAUDE.md` to align with the SDD pipeline.

## Phase 0.5 — Integration offer (neutral)
Connecting MCPs is **orthogonal** to the kickoff and is the job of the `/integracoes` skill. Here you
only make **a neutral offer** — **do not list or propose tools** (the `/integracoes` skill raises the
tooling; let the user say what they actually use there).

Ask with `AskUserQuestion` (one question, **without citing tool names**):
> *"Want to connect your tools via MCP now? Connecting first leaves the artifacts with real data
> (read-first)."* — options: **Connect now (recommended)** · **Proceed and connect later** · **Already connected**.

- **Connect now →** run **`/integracoes`** and resume the kickoff with the pulled inputs (cite the source in the phases).
- **Connect later →** proceed only with the interview; `/integracoes` becomes an adoption roadmap item (Phase 5).
- **Already connected →** **use the pulled inputs** (cite the source) in the phases below.

> `/integracoes` is **re-runnable**. Later, if a tool becomes helpful (pulling an epic, reading a PR),
> **re-offer it** at the point where the value appears — it doesn't have to be only here.

---

## Phase 1A — [GREENFIELD] Discovery (Lean Inception)
Conduct the inception activities in batches of `AskUserQuestion` and **generate one artifact per pillar**
(don't cram everything into a single doc — each pillar has its home):

1. **Vision & scope** → `vision.md`: the problem and for whom; category + differentiator; North Star;
   2-3 things the product explicitly **is NOT / does NOT do**.
2. **Stakeholders** → `stakeholders.md`: who influences/is impacted (interest × influence) and
   how to engage each one.
3. **Journeys** → `journeys.md`: the 1-3 end-to-end journeys — stages, pain points, and opportunities.
4. **Features** → `features.md`: brainstorm from the **journeys**, classified by
   effort/value/confidence/UX and **sequenced in waves** (Wave 1 = MVP).
5. **MVP** → `mvp-canvas.md`: Wave 1 + the main hypothesis and the success criterion.

→ Outputs: `vision.md` · `stakeholders.md` · `journeys.md` · `features.md` · `mvp-canvas.md`.
**Wave 1** from `features.md` feeds `roadmap.md` (Phase 5).

## Phase 1B — [BROWNFIELD] Map the current state (as-is)
Run the **`/mapear`** skill (same logic): read the code, interview the gaps, do the gap analysis of the
5 axes, and capture historical decisions as a retrospective ADR.

→ Outputs: `docs/architecture/assessment.md` (as-is + gaps) and the list of retrospective ADRs.
These gaps feed Phases 2 and 5.

---

## Phase 2 — Technical kickoff (the 5 axes)
One batch of `AskUserQuestion` per axis. Propose sensible defaults.
- **Greenfield:** these are decisions *to make*.
- **Brownfield:** these are decisions *already made* (capture as a retrospective ADR) + the ones the
  team wants to *change* (capture as a new ADR that replaces it, plus a roadmap item).

1. **Tech stack** — language, framework/runtime, package management, target version.
2. **Base architecture** — style (modular monolith / services / serverless), DDD layers
   (boilerplate default), and the **bounded contexts** (from the MVP in greenfield; validated in brownfield).
3. **Infra** — cloud, deployment model, environments, CI/CD, IaC.
4. **Quality** — test pyramid, minimum coverage, lint/format, **static analysis** (type-check,
   complexity, SAST/security — what is blocking vs warning), review policy, DoD.
5. **Observability** — structured logs, metrics, tracing, alerts, initial SLO/SLI.

## Phase 3 — Confirmation
Show a summary in a table (decision → choice → becomes an ADR? new or retrospective?). Ask for OK.

## Phase 4 — Document generation
Generate/update using the project's templates:

| File | Mode | Template |
|---|---|---|
| `docs/product/vision.md` | greenfield | `docs/product/_templates/vision.template.md` |
| `docs/product/stakeholders.md` | greenfield | `docs/product/_templates/stakeholders.template.md` |
| `docs/product/journeys.md` | greenfield | `docs/product/_templates/journeys.template.md` |
| `docs/product/features.md` | greenfield | `docs/product/_templates/features.template.md` (classified + sequenced) |
| `docs/product/mvp-canvas.md` | greenfield | `docs/product/_templates/mvp-canvas.template.md` |
| `docs/architecture/assessment.md` | brownfield | `docs/architecture/_templates/assessment.template.md` |
| `docs/architecture/context-map.md` | both | existing (initial in greenfield; reverse-engineered in brownfield) |
| `docs/architecture/overview.md` | both | existing — consolidate the **5 axes** + security + operational, with links to ADRs/context-map/diagrams/TESTING |
| `docs/glossary.md` | both | existing (seed the core terms) |
| `CLAUDE.md` | both | existing (fill in stack, commands, quality gates, observability) |
| `docs/architecture/adr/NNNN-*.md` | both | `docs/architecture/adr/_template.md` (one per structural decision; retrospective in brownfield) |
| `docs/product/roadmap.md` | both | `docs/product/_templates/roadmap.template.md` |

> `docs/engineering/integrations.md` and `.mcp.json` are generated by the `/integracoes` skill, not here.
> After `context-map`, offer to run **`/diagramar`** for the architecture diagrams (Mermaid).

Rules:
- **ADRs:** number after 0001. Greenfield: new decisions. Brownfield: retrospective (accepted status,
  recording the historical rationale) + new ones for proposed changes. Immutable.
- **CLAUDE.md:** fill in stack/commands/layers and add "Quality gates" and "Observability" blocks.
  Do not remove the existing SDD rules.
- **Roadmap:** low-risk quick wins first. In brownfield, include the **incremental SDD adoption**
  section (no big-bang: start with the next feature, backfill ADRs later).

## Phase 4.5 — Project's agentic layer
Run the **`/camada-agentica`** skill (same logic): from stack + tools + process + domain, propose tuned
rules, subagents, skills, and workflows/CI — **with justification** — and generate only what is approved.
Unapproved items become roadmap items (Phase 5). Ref.: `docs/engineering/agentic-layer.md`.

## Phase 5 — Roadmap and closing
- Run the **`/roadmap`** skill (same logic): build `roadmap.md` in Now/Next/Later, with value,
  effort, owner, and dependencies, quick wins first — to run and review **with the team**.
- If it is a git repository, offer `git add -A && git commit -m "docs: kickoff do projeto"`.
- Summarize with clickable links and point to the next step: create the 1st feature in `specs/NNNN-<nome>/`
  choosing the tier (see `README.md`).
