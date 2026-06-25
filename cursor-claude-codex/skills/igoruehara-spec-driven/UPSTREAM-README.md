---
name: README
description: SDD pipeline manual. Consult it to understand the flow and tiers.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# SDD Boilerplate — Spec-Driven Development

A project pattern for high-performance teams. It combines **Technical Design Docs (RFC)**,
**Domain-Driven Design (DDD)** and **Spec-Driven Development (SDD)** into a single repeatable
pipeline — to start or continue any project.

## The concepts in 30 seconds

> Mind the acronyms: here **TDD** = *Technical Design Doc* (not Test-Driven), and
> **DDD** = *Domain-Driven Design* (not "design driven"). Each practice solves a different
> part — they **compose**, they don't compete.

- **DDD — Domain-Driven Design** (Eric Evans): model the software from the **business domain**,
  with a **ubiquitous language** (same terms in business, spec, and code) and explicit boundaries
  (**bounded contexts**). Answers: *what is the model of the business?*

- **Lean Inception** (Paulo Caroli): a lean **discovery** workshop to align team and business and
  define the **MVP** — product vision, personas, journeys, and features sequenced by value × effort.
  Answers: *what to build first and why?*

- **TDD — Technical Design Doc / RFC** (Google, Amazon, Oxide culture): a **design document
  written before coding** something risky — context, alternatives considered, trade-offs, risks,
  and rollout. Think before implementing. Answers: *how, at the system level?*

- **SDD — Spec-Driven Development**: the **specification is the source of truth**. The implementation
  (human **or** AI agent) derives from a spec with testable acceptance criteria. The spec is, at the
  same time, the contract, the test oracle, and the agent prompt. Answers: *what is the contract and
  how do I verify it was fulfilled?*

This boilerplate's pipeline chains all of it: **Lean Inception** (discover) →
**DDD** (model) → **TDD/RFC** (design) → **SDD** (specify and implement).

---

> **Core principle:** the **spec is the contract**, the **ADR is the memory**, the rest is scaffolding.
> When the code diverges from the spec, either the code is wrong, or the spec is updated
> consciously. Documentation doesn't rot because it *governs*, it doesn't *describe*.

---

## Each artifact answers a question

| Artifact        | Question                                         | Practice root           |
|-----------------|---------------------------------------------------|-------------------------|
| `product.md`    | **Why** and **for whom**? Success metrics         | Amazon Working Backwards|
| `design.md`     | **How** at the system level? Alternatives/risks   | Google design docs / RFC|
| `domain.md`     | What is the business **language** and **model**?  | Strategic + tactical DDD|
| `spec.md`       | What is the **testable contract**? (source of truth) | Spec-Driven Development |
| `tasks.md`      | What is the **decomposition** and the plan?       | Planning                |
| `docs/architecture/adr/*`    | **Why** did we decide X? (durable, immutable)   | ADR (Nygard)            |

---

## The pipeline

```
Problem/Intent
   │  gate: is it worth it?  ──────────────────────────►  product.md
   │  gate: async design review (RFC)  ─────────────────►  design.md
   │  gate: ubiquitous language agreed  ────────────────►  domain.md
   │  gate: testable acceptance criteria (DoR)  ────────►  spec.md
   │                                                       tasks.md
   ▼  implementation (human + AI agent)
   │  gate: verification against the spec (DoD)
   ▼  ADR + living docs updated
```

---

## Ceremony tiers (don't bureaucratize)

The question that defines the tier: **"does this introduce a hard-to-reverse decision
or a new domain boundary?"**

| Tier             | When                                            | Required artifacts                          |
|------------------|-------------------------------------------------|---------------------------------------------|
| **Trivial**      | ≤3 files, no decision (local bugfix/refactor)   | just the PR — or `specs/quick/NNN-slug/` to leave a trail |
| **Small**        | isolated feature, <10 tasks, no architectural decision | `spec.md` + `tasks.md`                  |
| **Architectural**| new bounded context, hard-to-reverse decision, external integration, risk | full pipeline + `design.md` in formal review + ADR |

> Promote a tier when in doubt; it's cheap. The cost is in discovering late that something was architectural.
>
> **Dynamic scaling:** complexity determines depth, not a fixed pipeline.
> Even in the Trivial/Small tier, **list the atomic steps before coding**; if it exceeds ~5
> steps or a complex dependency appears, **stop and promote the tier** (create/expand the `tasks.md`).

---

## How to start (or resume) a project — `/kickoff`

Run **`/kickoff`** in Claude Code. The skill first discovers the **mode** and routes:

- **Greenfield (starting fresh):** a **Lean Inception** interview (vision, personas, MVP) → generates
  `vision.md` and `mvp-canvas.md`.
- **Brownfield (already running):** **maps the current state** (as-is), runs a gap analysis vs. the
  SDD pattern, and captures historical decisions → generates `assessment.md` + retroactive ADRs.

Both go through the **technical kickoff on 5 axes** (tech stack, architecture, infra, quality,
observability) and **converge into an incremental `roadmap.md`** to implement with the team.
The generated constitution: a filled `CLAUDE.md`, `context-map.md`, `glossary.md`, ADRs, and the roadmap.
It also proposes the project's **agentic layer** — rules, subagents, skills, and workflows/CI tuned
to the stack (see [docs/engineering/agentic-layer.md](docs/engineering/agentic-layer.md)).

> Before: copy the boilerplate into the project folder and run `git init`. The skill lives in
> `.claude/skills/kickoff/` and travels along with the boilerplate.

### Team tools — separate skill `/integracoes`
Surveying the tooling (Jira, Confluence, Notion, GitHub, cloud…) and connecting MCPs is **orthogonal**
to the kickoff — you can start the boilerplate **without knowing the tools yet**. Run
**`/integracoes`** when you do: **before `/kickoff`** (ideal — read MCPs feed the artifacts with
real data) or **after**. It generates `integrations.md` and, if approved, `.mcp.json`,
with the **account/workspace lock** (prevents using personal Notion instead of the business one), and
**registers the validated MCPs in routing** (the "Connected tools (MCP)" block of `CLAUDE.md` + skills).

You don't need to remember to run it: **`/kickoff` makes a neutral offer** to connect during
discovery (without proposing a tool — you say what you use), and the skills **re-offer `/integracoes`**
at the point where the value appears — `/nova-feature` during task breakdown (management), `/revisar-pr`
when reading the PR/MR (git host). Declined at the start? The skill **remains available to run later**,
it's re-runnable.

## How to start a new feature — `/nova-feature`

Run **`/nova-feature`**. The skill decides the tier, creates `specs/NNNN-<name>/` with the right
templates, drives the filling through the gates, and — if a connected MCP exists — imports the Jira
story at the start and creates the issues during task breakdown.

What it does (and what you'd do by hand without it):

1. Creates the `specs/NNNN-short-name/` folder (sequential numbering, chronological order).
2. Copies from `specs/_templates/` only the artifacts required by the tier.
3. Fills top-down in the pipeline order (product → design → domain → spec → tasks),
   stopping at each gate for review.
4. Implement. The acceptance criteria in `spec.md` are the test oracle **and** the agent prompt.
5. At the end: record relevant decisions as ADRs in `docs/architecture/adr/`, update `docs/glossary.md`
   and `docs/architecture/context-map.md` if the language/boundaries changed.

See `specs/0001-exemplo-cota-de-uso/` for a filled example.

## Definition of Ready (DoR) — before implementing
- [ ] `spec.md` has testable acceptance criteria (Given/When/Then)
- [ ] Explicit non-goals
- [ ] Ubiquitous language for new terms in `domain.md`/glossary
- [ ] Architectural tier: `design.md` approved

## Definition of Done (DoD) — before merge
- [ ] All acceptance criteria green **by the executable gate** (not by inspection)
- [ ] No pending `SPEC_DEVIATION`
- [ ] ADRs recorded for hard-to-reverse decisions
- [ ] Glossary and context-map updated if they changed
- [ ] Spec reflects what was actually built (or divergence documented)
- [ ] `docs/STATE.md` updated (next step / decisions)

## Continuity between sessions — `docs/STATE.md` and `/handoff`
The pipeline has **two kinds of memory**: the **ADR** is durable and immutable (the *why* of a
decision); the **`docs/STATE.md`** is volatile (the *where we stopped*: active feature, next step,
blockers, todos). When pausing or resuming work, run **`/handoff`** — it writes/reads the STATE
so anyone (or any agent) can continue from where the other stopped.

---

## Structure

```
boilerplate_sdd/
├── README.md                  # this manual
├── CLAUDE.md                  # conventions the AI agent must follow
├── .claude/skills/            # kickoff·map·roadmap·agentic-layer·integracoes
│                              # nova-feature·clarify·validate·review-pr·setup-ci·handoff
├── specs/
│   ├── _templates/            # the 5 pipeline templates
│   ├── quick/                 # quick mode: trivial tasks with a light trail
│   └── 0001-exemplo-cota-de-uso/  # filled example
├── docs/                      # grouped by concern (stable names, not numbered)
│   ├── glossary.md            # global ubiquitous language (appendix)
│   ├── STATE.md               # working memory (volatile) — continuity
│   ├── product/               # vision · mvp-canvas · roadmap
│   ├── architecture/          # context-map · assessment · adr/ (immutable decisions)
│   └── engineering/           # TESTING · integrations · agentic-layer (+ _templates)
└── src/                       # DDD layered structure (see src/README.md)
```

## To go deeper
- DDD: Vlad Khononov, *Learning DDD*; Vaughn Vernon, *Implementing DDD*
- Design docs: "Design Docs at Google"; RFC processes from Oxide/Rust
- Architecture: C4 model (Simon Brown), arc42, ADR (Michael Nygard)
- Working backwards: Amazon PR-FAQ
- Spec-driven + AI: GitHub Spec Kit, Amazon Kiro, tlc-spec-driven (Tech Leads Club)
