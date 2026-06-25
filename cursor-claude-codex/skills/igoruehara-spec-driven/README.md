# igoruehara/spec-driven — SDD skills (vendored, translated pt-BR → en)

**Source:** [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven)
**License:** MIT — see [LICENSE](./LICENSE) — © Igor Uehara
**Vendored:** 2026-06-25 — 15 Claude Code skills + SessionStart hook + settings, mirrored from upstream `template/.claude/` @ `@igoruehara/spec-driven@0.1.9`
**Translation:** The upstream skill bodies, `CLAUDE.md`, `UPSTREAM-README.md`, and hook comments were originally authored in **Portuguese (pt-BR)**. This hub **translated them to English** to keep the repository language consistent. Meaning is preserved; the pt-BR source is available upstream. Full credit to the author, **Igor Uehara**.

> **Note on skill slugs:** The skill folder names and frontmatter `name:` fields are kept in their original Portuguese form (`kickoff`, `integracoes`, `mapear`, `diagramar`, `camada-agentica`, `nova-feature`, `clarificar`, `validar`, `revisar-pr`, `roadmap`, `setup-ci`, `metricas`, `auditar`, `evals`, `handoff`) and slash-command references between skills (`/kickoff`, `/integracoes`, …) are kept verbatim, because the skills route to each other by those slugs — translating them would break internal navigation. Only the prose was translated.

## What it is

An `npx`-scaffoldable Spec-Driven Development pipeline for AI agents (Claude Code canonical, with generated views for Codex/Cursor/Copilot/Gemini/Windsurf). It chains product discovery → domain modeling → technical design → spec → implementation, with skills, templates, quality gates, and session continuity.

The companion **templates, specs, and docs** are vendored separately at [cursor-claude-codex/product-management/igoruehara-sdd/](../../product-management/igoruehara-sdd/) — pair the skills (this folder) with those templates when bootstrapping a project.

## Skills (15)

| Skill | What it does |
|-------|--------------|
| `kickoff` | Inicia/continua um projeto: detecta greenfield vs brownfield, conduz Lean Inception (visão, personas, MVP) ou mapeia as-is, propõe camada agêntica + roadmap |
| `integracoes` | Conecta ferramentas do time (Jira, Confluence, MCPs) para insumos read-first |
| `mapear` | Mapeia o estado atual do código/domain, identifica gaps vs o padrão SDD |
| `diagramar` | Gera diagramas (context map, arquitetura, fluxos) |
| `roadmap` | Constrói roadmap incremental a partir do kickoff/mapeamento |
| `camada-agentica` | Propõe a camada agêntica do projeto: rules, subagents, skills, workflows/CI |
| `nova-feature` | Inicia uma nova feature no padrão SDD (spec → design → tasks) |
| `clarificar` | Sabatina para decisões ramificadas (escolhas que dependem umas das outras) |
| `validar` | Valida spec/design contra质量 gates antes de implementar |
| `revisar-pr` | Revisa PR contra a spec e os docs de arquitetura |
| `setup-ci` | Configura a esteira CI (`.github/workflows/esteira.yml`) |
| `metricas` | Define/mede métricas de entrega e qualidade |
| `auditar` | Audita a conformidade do projeto com o padrão SDD |
| `evals` | Roda evals de fidelidade da spec (`eval-spec-fidelity.mjs`) |
| `handoff` | Produz handoff documentado para o time/continuidade |

## Layout

| Path | Contents |
|------|----------|
| [skills/](./skills/) | 15 SKILL.md packages (one per skill above) |
| [hooks/load-context.mjs](./hooks/load-context.mjs) | SessionStart hook — injects the SDD base context (STATE.md, vision.md, roadmap.md) into the session. Read-only (`readFileSync` + `existsSync`); no shell, no network, no writes |
| [settings.json](./settings.json) | Claude Code hook registration (SessionStart → `node .claude/hooks/load-context.mjs`) |
| [CLAUDE.md](./CLAUDE.md) | Project conventions for the SDD pipeline (`alwaysApply: true`) |
| [UPSTREAM-README.md](./UPSTREAM-README.md) | Upstream template README (the SDD manual) |
| [LICENSE](./LICENSE) | MIT license |

## Install in this hub

### Claude Code (canonical)

The skills are written for Claude Code. Copy or symlink `skills/*/` into `~/.claude/skills/` (or the project skills path), and wire the SessionStart hook if you want auto-loaded base context:

```bash
# skills
for d in cursor-claude-codex/skills/igoruehara-spec-driven/skills/*/; do
  ln -sf "$(pwd)/$d" "$HOME/.claude/skills/$(basename "$d")"
done
```

### Cursor / Codex

Skills written for Claude Code often work on Cursor/Codex with minimal changes. When a skill references `AskUserQuestion`, `TodoWrite`, or `Skill` tools, see [skills/using-superpowers/references/codex-tools.md](../using-superpowers/references/codex-tools.md) for tool-name mapping.

## Install upstream (alternative)

Prefer the upstream scaffold to get the full pipeline (bin, generated views for multiple agents, examples):

```bash
npx @igoruehara/spec-driven@latest
```

## Pairs with

- [cursor-claude-codex/product-management/igoruehara-sdd/](../../product-management/igoruehara-sdd/) — spec/product/architecture templates + worked example + audit scripts
- [cursor-claude-codex/product-management/no-vibe-coding.md](../../product-management/no-vibe-coding.md) — our hub's SDD overview
- [brainstorming](../brainstorming/) · [writing-plans](../writing-plans/) · [executing-plans](../executing-plans/) — obra/superpowers SDD skills (English-first)

## Attribution

Vendored from [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven) (MIT), authored by **Igor Uehara** (`igoruehara` on GitHub), npm `@igoruehara/spec-driven`. The original upstream content is in Portuguese (pt-BR); this hub translated the prose to English to keep the repository language consistent, preserving the original meaning and the author's structure. Skill slugs and inter-skill slash-command references were kept in Portuguese to avoid breaking internal routing. The upstream LICENSE is preserved verbatim; the pt-BR source remains available at the upstream repo.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#igorueharaspec-driven).
