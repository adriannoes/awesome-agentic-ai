# Contributing

This repo is a knowledge hub for AI-assisted development — rules, skills, prompts and resources for Product Builders learning to code with AI.

## What to Contribute

- **cursor-claude-codex/** — Skills, commands, tools, best practices, coding rules (Cursor + Claude Code + Codex)
- **prompt-engineering/** — Tested prompts for AI agents
- **n8n-templates/** — Workflow automation templates
- **research/** — Jupyter notebooks and experiments
- **learning/**, **papers/** — Learning materials and research papers
- **nice-projects/** — Curated GitHub projects to watch (**link-only**; update count in [docs/stats.md](docs/stats.md))
- **research/labml-annotated-papers/** — Link-only pointer pages (no vendoring of large upstream trees)

## How to Contribute

1. Fork, branch (`feature/your-contribution`), make changes
2. **Commit** — [Conventional Commits](https://www.conventionalcommits.org/), one functional change per commit:
   - `feat: add diagrams command`
   - `docs: update writing-plans skill`
   - `fix: typo in README`
3. Push and open a Pull Request

## Upstream refreshes

Vendored skills and snapshots should stay attributed and diffed — not blind-copied. Use [cursor-claude-codex/references/upstream-repos-catalog.md](cursor-claude-codex/references/upstream-repos-catalog.md) for sources and pins; preserve licenses and upstream README snapshots in each package.

**Link-only catalog entries** (no clone in tree): add a row to the catalog summary table + a `##` section, an entry in [nice-projects/README.md](nice-projects/README.md) when it is a “project to watch,” cross-links in [docs/ecosystem.md](docs/ecosystem.md) and persona paths when relevant, and a line under `[Unreleased]` in [CHANGELOG.md](CHANGELOG.md).

When catalog size changes, update [docs/stats.md](docs/stats.md) (skills, nice-projects, **65**-row upstream catalog) and the headline counts in [README.md](README.md) so they match the tree. Agents working in this repo should follow [AGENTS.md](AGENTS.md).

## Guidelines

- **Rules & prompts** — Tested, clear use cases, follow existing format
- **Templates** — Functional, include setup instructions
- **Content** — Relevant, high-quality, properly formatted
- **Secrets** — Do not commit API keys, tokens, or credentials (docs-only repo, but still worth stating)

## Questions

[Open a Discussion](https://github.com/adriannoes/awesome-agentic-ai/discussions) or reach out.
