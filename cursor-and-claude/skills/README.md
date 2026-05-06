# Skills (Cursor & Claude Code)

Skills in this folder are designed to work for **both Cursor and Claude Code**. Place here any skill that you want to reuse across both tools so a single definition serves both.

**See also:** [cursor-and-claude/README.md](../README.md) | [commands/](../commands/) | [product-management/no-vibe-coding.md](../product-management/no-vibe-coding.md)

## What goes here

- Agent skills that apply to Cursor and Claude Code (e.g. create-rule, create-skill, update-settings)
- Shared workflows or prompts that both editors can invoke
- One skill file = one capability; keep skills focused and reusable

## Skills index

### Workflow & planning

| Skill | Description | Source |
|-------|-------------|--------|
| `brainstorming` | Design refinement before implementation; Socratic questions, 2-3 approaches, design doc | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `writing-plans` | Implementation plans with bite-sized tasks (2-5 min each), exact paths, TDD | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `executing-plans` | Load plan, execute tasks with checkpoints, finish with merge/PR options | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `finishing-a-development-branch` | Verify tests → present merge/PR/keep/discard options → execute choice | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |

### Quality & review

| Skill | Description | Source |
|-------|-------------|--------|
| `test-driven-development` | RED-GREEN-REFACTOR; write failing test first, watch it fail, minimal code | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `systematic-debugging` | 4-phase root cause process before any fix | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `verification-before-completion` | Evidence before claims; run verification before declaring success | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `receiving-code-review` | Technical rigor when responding to feedback; verify before implementing | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `requesting-code-review` | How to ask for review well — paired with receiving-code-review | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |

### Multi-agent orchestration

| Skill | Description | Source |
|-------|-------------|--------|
| `dispatching-parallel-agents` | When to fan out 2+ independent tasks to concurrent agents; context construction per agent | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `subagent-driven-development` | Full subagent workflow with spec, implementer, and code-quality reviewer prompts | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `harness` | ⚠️ Korean-language meta-skill for generating agent teams and skills for a domain | [revfactory/harness](https://github.com/revfactory/harness) (Apache-2.0) |

### Infrastructure

| Skill | Description | Source |
|-------|-------------|--------|
| `using-git-worktrees` | Isolated workspaces for feature work; safety verification, clean baseline | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |

### Design & docs

| Skill | Description | Source |
|-------|-------------|--------|
| `frontend-design` | Distinctive frontend interfaces; bold aesthetic, avoid generic AI look | [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0) |
| `web-design-guidelines` | Audit UI against Vercel Web Interface Guidelines (summary; fetches live rules) | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
| `update-changelog` | Update CHANGELOG.md with notable changes since last release | [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0) |

### React / Next.js (Vercel skills)

| Skill | Description | Source |
|-------|-------------|--------|
| `react-best-practices` | Vercel performance rules quick reference (69 rules); full examples in upstream `rules/` | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
| `composition-patterns` | React composition that scales: compound components, render props, context providers (React 19 API aware) | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
| `react-view-transitions` | View Transition API usage with React and Next.js | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
| `react-native-skills` | React Native / Expo guidance | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |

### Vercel platform

| Skill | Description | Source |
|-------|-------------|--------|
| `deploy-to-vercel` | Claimable deployments from agent chats | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
| `vercel-cli-with-tokens` | Using the Vercel CLI with tokens from an agent context | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |

### Meta

| Skill | Description | Source |
|-------|-------------|--------|
| `autoresearch` | Research and evaluation workflows | [karpathy/autoresearch](https://github.com/karpathy/autoresearch) |
| `writing-skills` | How to write new skills well — Anthropic best practices, persuasion principles, subagent-tested examples | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `using-superpowers` | How to use the superpowers skill collection effectively | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |

## Curated category folders (vendored from upstream)

Subfolders that group multiple related skills from a single upstream source. Each has its own README with attribution and an honest quality note.

| Folder | Skills | Source | Description |
|--------|--------|--------|-------------|
| [matt-pocock/](./matt-pocock/) | 13 | [mattpocock/skills](https://github.com/mattpocock/skills) (MIT, ~54k ★) | "Skills for real engineers." Grilling sessions, ubiquitous-language ADRs, triage state machine, zoom-out. Matt's flagship is `grill-with-docs`. |
| [visual-content/](./visual-content/) | 25 | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) (MIT) | Mermaid, D2, PlantUML, charts, architecture & journey diagrams. Breadth-first; pair with [skill-auto-activation](../references/skill-auto-activation.md). |
| [business-automation/](./business-automation/) | 25 | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) (MIT) | n8n, Zapier, Slack, email, spreadsheets, PDFs, forms. Breadth-first; pair with [skill-auto-activation](../references/skill-auto-activation.md). |

For Jeremy's **20 total categories** (devops, security, frontend/backend, ML, data, AWS/GCP, APIs, docs, enterprise), see the upstream repo; we vendored the two most complementary to our existing content.

## Attribution & licenses

All skills here are vendored from their upstream repositories. The license of each is noted in the Source column above. Skill files retain their original frontmatter where license/author info was present. Full catalog entries for each upstream repo: [cursor-and-claude/references/upstream-repos-catalog.md](../references/upstream-repos-catalog.md).

When vendoring a new skill: add it to this README with the source and license, preserve the original SKILL.md content, and extend the catalog entry.

## Usage

- **Cursor**: Skills are typically loaded from `.cursor-and-claude/skills/` or referenced in rules; link or copy from this folder as needed.
- **Claude Code**: Use the same skill files in your Claude Code skills path.

Keep skill files in English, with a clear description and when to use them.
