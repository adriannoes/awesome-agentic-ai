# igoruehara/spec-driven — SDD templates & tooling (vendored, translated pt-BR → en)

**Source:** [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven)
**License:** MIT — © Igor Uehara (see the skills folder [LICENSE](../../skills/igoruehara-spec-driven/LICENSE))
**Vendored:** 2026-06-25 — spec/product/architecture templates + worked example + audit scripts + CI workflow, mirrored from upstream `template/` @ `@igoruehara/spec-driven@0.1.9`
**Translation:** The upstream templates, docs, worked example, script comments, and CI workflow were originally authored in **Portuguese (pt-BR)**. This hub **translated them to English** to keep the repository language consistent. Meaning and structure are preserved; the pt-BR source is available upstream. Full credit to the author, **Igor Uehara**.

## What it is

The non-skill half of [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven): the **templates, docs scaffold, audit scripts, and CI workflow** that the 15 SDD skills (vendored at [cursor-claude-codex/skills/igoruehara-spec-driven/](../../skills/igoruehara-spec-driven/)) operate on. Together they form a repeatable Spec-Driven Development pipeline: Lean Inception → DDD → Technical Design Docs → SDD.

## Layout

| Path | Contents |
|------|----------|
| [specs/_templates/](./specs/_templates/) | 5 spec templates: `spec`, `design`, `domain`, `product`, `tasks` (`.template.md`) |
| [specs/quick/_template/](./specs/quick/_template/) | Quick-spec templates: `SUMMARY`, `TASK` |
| [specs/0001-exemplo-cota-de-uso/](./specs/0001-exemplo-cota-de-uso/) | Worked end-to-end example (cota de uso) — `spec`, `design`, `domain`, `product`, `tasks` |
| [docs/product/_templates/](./docs/product/_templates/) | 6 product-doc templates: `vision`, `stakeholders`, `journeys`, `features`, `mvp-canvas`, `roadmap` |
| [docs/architecture/](./docs/architecture/) | `overview.md`, `context-map.md`, `diagrams.md`, `adr/` (ADR template), `_templates/assessment.template.md` |
| [docs/engineering/](./docs/engineering/) | `TESTING.md`, `metrics.md`, `agentic-layer.md`, `_templates/` (`integrations`, `skill`, `subagent`) |
| [docs/STATE.md](./docs/STATE.md) | Project state tracker (the `alwaysApply: true` doc the SessionStart hook loads) |
| [docs/glossary.md](./docs/glossary.md) | Ubiquitous-language glossary (DDD) |
| [scripts/](./scripts/) | 3 audit `.mjs` scripts: `audit-esteira.mjs`, `eval-spec-fidelity.mjs`, `validate-mermaid.mjs` |
| [.github/workflows/esteira.yml](./.github/workflows/esteira.yml) | The "esteira" CI workflow that runs the audit scripts |

## How the skills use these templates

The 15 skills in [cursor-claude-codex/skills/igoruehara-spec-driven/](../../skills/igoruehara-spec-driven/) read and write these files. For example, `kickoff` generates `docs/product/vision.md` + `docs/product/roadmap.md` from the templates; `nova-feature` starts a new `specs/NNNN-<feature>/` from `specs/_templates/`; `auditar` runs `scripts/audit-esteira.mjs`; `setup-ci` wires `.github/workflows/esteira.yml`.

## Install upstream (alternative)

Prefer the upstream scaffold to get the full pipeline (bin, generated views for Cursor/Codex/Copilot/Gemini/Windsurf, examples):

```bash
npx @igoruehara/spec-driven@latest
```

## Pairs with

- [cursor-claude-codex/skills/igoruehara-spec-driven/](../../skills/igoruehara-spec-driven/) — the 15 SDD skills (translated pt-BR → en)
- [cursor-claude-codex/product-management/no-vibe-coding.md](../no-vibe-coding.md) — our hub's SDD overview
- [cursor-claude-codex/product-management/create-prd.md](../create-prd.md) · [generate-tasks.md](../generate-tasks.md) — our hub's PRD/task generation docs

## Attribution

Vendored from [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven) (MIT), authored by **Igor Uehara** (`igoruehara` on GitHub). The original upstream templates/docs/scripts are in Portuguese (pt-BR); this hub translated the prose to English to keep the repository language consistent, preserving the original meaning, structure, and template placeholders. The worked example `specs/0001-exemplo-cota-de-uso/` directory name is kept in Portuguese (it's a path). See the skills folder [LICENSE](../../skills/igoruehara-spec-driven/LICENSE) for the full MIT text.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#igorueharaspec-driven).
