# Skills (Cursor & Claude Code)

Skills in this folder are designed to work for **both Cursor and Claude Code**. Place here any skill that you want to reuse across both tools so a single definition serves both.

**See also:** [cursor/README.md](../README.md) | [commands/](../commands/) | [product-management/no-vibe-coding.md](../product-management/no-vibe-coding.md)

## What goes here

- Agent skills that apply to Cursor and Claude Code (e.g. create-rule, create-skill, update-settings)
- Shared workflows or prompts that both editors can invoke
- One skill file = one capability; keep skills focused and reusable

## Available Skills

| Skill | Description |
|-------|-------------|
| **Workflow** | |
| `brainstorming` | Design refinement before implementation; Socratic questions, 2-3 approaches, design doc |
| `writing-plans` | Implementation plans with bite-sized tasks (2-5 min each), exact paths, TDD |
| `executing-plans` | Load plan, execute tasks with checkpoints, finish with merge/PR options |
| `finishing-a-development-branch` | Verify tests → present merge/PR/keep/discard options → execute choice |
| **Quality** | |
| `test-driven-development` | RED-GREEN-REFACTOR; write failing test first, watch it fail, minimal code |
| `systematic-debugging` | 4-phase root cause process before any fix |
| `verification-before-completion` | Evidence before claims; run verification before declaring success |
| `receiving-code-review` | Technical rigor when responding to feedback; verify before implementing |
| **Infrastructure** | |
| `using-git-worktrees` | Isolated workspaces for feature work; safety verification, clean baseline |
| **Design & Docs** | |
| `frontend-design` | Distinctive frontend interfaces; bold aesthetic, avoid generic AI look |
| `web-design-guidelines` | Audit UI against Vercel Web Interface Guidelines (fetch live rules + review files) — from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| `update-changelog` | Update CHANGELOG.md with notable changes since last release |
| **React / Next.js** | |
| `react-best-practices` | Vercel performance rules quick reference (69 rules); full examples in upstream `rules/` — from [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |
| **Meta** | |
| `autoresearch` | Research and evaluation workflows |

## Usage

- **Cursor**: Skills are typically loaded from `.cursor/skills/` or referenced in rules; link or copy from this folder as needed.
- **Claude Code**: Use the same skill files in your Claude Code skills path.

Keep skill files in English, with a clear description and when to use them.
