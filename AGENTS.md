# AGENTS.md

Orientation for a coding agent opened on **awesome-agentic-ai**.

This repository is a **knowledge hub**, not an application. People connect an agent here to apply vendored skills and to study papers, textbooks, notebooks, and reports. There is no app to boot, no package to install for the hub itself, and no test suite for the PDFs.

## Start here

| Need | Open |
|------|------|
| Human map and persona paths | [README.md](README.md) · [docs/paths/](docs/paths/) |
| Verified counts | [docs/stats.md](docs/stats.md) |
| Skill index | [cursor-claude-codex/skills/README.md](cursor-claude-codex/skills/README.md) |
| Paper catalog | [papers/README.md](papers/README.md) |
| How to add content | [CONTRIBUTING.md](CONTRIBUTING.md) |

If a number in prose disagrees with the tree, regenerate counts and trust the script:

```bash
./bin/count-hub-stats.sh
```

**Snapshot (2026-09-27):** 342 agent skills · 107 papers (11 themes) · 201 notebooks · 9 textbooks · 18 industry reports · 97 curated GitHub projects · 14 prompt snapshots · 21 n8n templates · 8 slash commands · 21 coding rules · 33 upstream sources · 36 OpenClaw agents · 5,380 OpenClaw skills (index snapshot).

## Use a skill

Skills live under [cursor-claude-codex/skills/](cursor-claude-codex/skills/). Each capability is a folder with a `SKILL.md`.

1. Find the skill in the [skills index](cursor-claude-codex/skills/README.md), or search for `SKILL.md`.
2. **Read that `SKILL.md` in full** before acting on the user's task. The `description` in the frontmatter says when it applies.
3. Follow that file. Do not substitute a summary from the index.
4. A nested `AGENTS.md` or `CLAUDE.md` inside a skill package applies **only to that package**. This file governs the hub.
5. Do not edit a vendored skill unless the user asked to refresh, fix, or adapt that skill. Keep upstream attribution and license notes.
6. Refresh procedure: [cursor-claude-codex/MAINTENANCE.md](cursor-claude-codex/MAINTENANCE.md).

When this repo is the workspace, the skill files are already on disk. Read them from `cursor-claude-codex/skills/`. Copy or symlink into another project's `.cursor/skills/`, `~/.claude/skills/`, or `~/.agents/skills/` only when the user wants those skills in a **different** project. Platform notes: [cursor-claude-codex/README.md](cursor-claude-codex/README.md).

Related, not skills: slash commands in [cursor-claude-codex/commands/](cursor-claude-codex/commands/), stack rules in [cursor-claude-codex/coding/](cursor-claude-codex/coding/), patterns in [cursor-claude-codex/references/agentic-patterns.md](cursor-claude-codex/references/agentic-patterns.md).

## Study the materials

Match the request to a folder. Prefer the local file over a web summary when a PDF or notebook is in the tree.

| Intent | Start |
|--------|--------|
| Research papers | [papers/README.md](papers/README.md) — theme folders underneath |
| Open models, open-source AI, Nathan Lambert's reading list | [papers/open-models/](papers/open-models/) (PDFs + link-only essays) |
| Frontier model reports (Kimi, DeepSeek, LLaMA, …) | [papers/models-and-training/](papers/models-and-training/) |
| Agents, harnesses, skills, evals of code | [papers/agents-and-engineering/](papers/agents-and-engineering/) |
| Textbooks | [learning/README.md](learning/README.md) |
| Notebooks (from-scratch LLMs, alignment, Karpathy) | [research/README.md](research/README.md) · [docs/paths/learners.md](docs/paths/learners.md) |
| Industry reports | [reports/README.md](reports/README.md) |
| System-prompt snapshots | [prompt-engineering/README.md](prompt-engineering/README.md) |
| Evals | [cursor-claude-codex/references/awesome-evals/](cursor-claude-codex/references/awesome-evals/) |
| Projects to watch | [nice-projects/README.md](nice-projects/README.md) — **links only** |
| OpenClaw agents and skill index | [openclaw/README.md](openclaw/README.md) — snapshot, separate from Cursor/Claude/Codex skills |
| n8n workflows | [n8n-templates/](n8n-templates/) |

When you summarize a paper, name the local PDF path and the arXiv id from [papers/README.md](papers/README.md). Do not paste long excerpts from textbooks or papers.

## Change the hub

- Write docs, READMEs, and changelog entries in **English**.
- Commit only when the user asks. Use [Conventional Commits](https://www.conventionalcommits.org/). One functional change per commit.
- After adding a paper, skill, or catalog entry: update the area README, cross-links, [docs/stats.md](docs/stats.md), the counts in [README.md](README.md), and [CHANGELOG.md](CHANGELOG.md) under `[Unreleased]`. Then run `./bin/count-hub-stats.sh`.
- Do not commit secrets, tokens, or credentials.
- A new GitHub release is for a significant content batch (new theme, or on the order of 10–15 papers), not for a typo. Versioning and release steps are described in [CHANGELOG.md](CHANGELOG.md) and the release notes of prior tags (`v1.x.x`).

## Do not

- Treat [nice-projects/](nice-projects/) or [docs/ecosystem.md](docs/ecosystem.md) as code that lives in this clone.
- Restyle or “clean up” third-party `SKILL.md` trees (OpenClaw index, cybersecurity skills, notebooks) unless that was the task.
- Invent counts, star counts, or arXiv ids.
- Confuse the **342** Cursor / Claude / Codex skills with the **5,380** OpenClaw skills. They are different catalogs.
