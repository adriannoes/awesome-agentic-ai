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

**Link-only catalog entries** (no clone in tree): follow the **cross-doc checklist** in [AGENTS.md](AGENTS.md#change-the-hub) (same steps for vendored upstream pins when counts or discovery text change).

When catalog size changes, recount from the tree (`grep -cE '^- \\*\\*\\[' nice-projects/README.md` for projects; upstream summary table rows in [upstream-repos-catalog.md](cursor-claude-codex/references/upstream-repos-catalog.md)), then sync [docs/stats.md](docs/stats.md), [README.md](README.md), [AGENTS.md](AGENTS.md) snapshot, [docs/about.md](docs/about.md), [nice-projects/README.md](nice-projects/README.md) intro line, and [cursor-claude-codex/README.md](cursor-claude-codex/README.md) if it cites the nice-projects total. Agents working in this repo should follow [AGENTS.md](AGENTS.md).

## Guidelines

- **Rules & prompts** — Tested, clear use cases, follow existing format
- **Templates** — Functional, include setup instructions
- **Content** — Relevant, high-quality, properly formatted
- **Secrets** — Do not commit API keys, tokens, or credentials (docs-only repo, but still worth stating)

## Questions

[Open a Discussion](https://github.com/adriannoes/awesome-agentic-ai/discussions) or reach out.
