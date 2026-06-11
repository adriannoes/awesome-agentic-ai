# Contributing

This repo is a knowledge hub for AI-assisted development — rules, skills, prompts and resources for Product Builders learning to code with AI.

## What to Contribute

- **cursor-claude-codex/** — Skills, commands, tools, best practices, coding rules (Cursor + Claude Code + Codex)
- **prompt-engineering/** — Tested prompts for AI agents
- **n8n-templates/** — Workflow automation templates
- **research/** — Jupyter notebooks and experiments
- **learning/**, **papers/** — Learning materials and research papers

## How to Contribute

1. Fork, branch (`feature/your-contribution`), make changes
2. **Commit** — [Conventional Commits](https://www.conventionalcommits.org/), one functional change per commit:
   - `feat: add diagrams command`
   - `docs: update writing-plans skill`
   - `fix: typo in README`
3. Push and open a Pull Request

## Upstream refreshes

Vendored skills and snapshots should stay attributed and diffed — not blind-copied. See [cursor-claude-codex/MAINTENANCE.md](cursor-claude-codex/MAINTENANCE.md) and [cursor-claude-codex/references/upstream-repos-catalog.md](cursor-claude-codex/references/upstream-repos-catalog.md).

Before updating README skill counts, run:

```bash
chmod +x scripts/count-skills.sh   # once
./scripts/count-skills.sh
```

That prints `SKILL.md` totals and the **curated subtotal** used for marketing copy.

## Guidelines

- **Rules & prompts** — Tested, clear use cases, follow existing format
- **Templates** — Functional, include setup instructions
- **Content** — Relevant, high-quality, properly formatted
- **Secrets** — Do not commit API keys, tokens, or credentials (docs-only repo, but still worth stating)

## Questions

[Open a Discussion](https://github.com/adriannoes/awesome-vibe-coding/discussions) or reach out.
