# Skills (Cursor, Claude Code & Codex)

Skills in this folder are designed to work for **both Cursor and Claude Code**. Place here any skill that you want to reuse across both tools so a single definition serves both.

**See also:** [cursor-claude-codex/README.md](../README.md) | [commands/](../commands/) | [product-management/no-vibe-coding.md](../product-management/no-vibe-coding.md)

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
| `writing-guidelines` | Review docs/prose against Vercel's Writing Guidelines (summary; fetches live rules via WebFetch) | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |
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
| `vercel-optimize` | Observability-first Vercel cost & performance optimization audit (metrics → deterministic gates → ranked, cited recommendations). Added 2026-06-25. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) (MIT) |

### Meta

| Skill | Description | Source |
|-------|-------------|--------|
| `autoresearch` | Research and evaluation workflows | [karpathy/autoresearch](https://github.com/karpathy/autoresearch) |
| `writing-skills` | How to write new skills well — Anthropic best practices, persuasion principles, subagent-tested examples | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |
| `using-superpowers` | How to use the superpowers skill collection effectively | [obra/superpowers](https://github.com/obra/superpowers) (MIT) |

### Research & loops

| Skill | Description | Source |
|-------|-------------|--------|
| `research-paper-writing` | Section-by-section ML/CV/NLP research-paper rewrite (abstract → introduction → method → experiments → conclusion + self-review). Pairs with `autoresearch`. | [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) (MIT) |
| `forward-future-loop-library` | Discover/find/audit/adapt/design bounded AI-agent loops (Observe→Choose→Act→Verify→Record→Repeat-or-stop). 69-loop live catalog linked. | [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) (MIT) |

## Curated category folders (vendored from upstream)

Subfolders that group multiple related skills from a single upstream source. Each has its own README with attribution and an honest quality note.

| Folder | Skills | Source | Description |
|--------|--------|--------|-------------|
| [anthropic-cybersecurity-skills/](./anthropic-cybersecurity-skills/) | 109 | [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (Apache-2.0) | Cherry-picked blue-team / SOC / DFIR / DevSecOps / AI-security / supply-chain / hardware-firmware playbooks (subset of 817 upstream @ v1.3.0). Pairs with bug-hunter for offense vs defense. |
| [bug-hunter/](./bug-hunter/) | 51 | [xiaolai/Claude-BugHunter](https://github.com/xiaolai/Claude-BugHunter) (MIT) | Authorized bug bounty & external pentest: 24+ `hunt-*` classes, enterprise identity chains, triage/reporting. |
| [visual-content/](./visual-content/) | 25 | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) (MIT) | Mermaid, D2, PlantUML, charts, architecture & journey diagrams. Breadth-first; pair with [skill-auto-activation](../references/skill-auto-activation.md). |
| [business-automation/](./business-automation/) | 25 | [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) (MIT) | n8n, Zapier, Slack, email, spreadsheets, PDFs, forms. Breadth-first; pair with [skill-auto-activation](../references/skill-auto-activation.md). |
| [matt-pocock/](./matt-pocock/) | 20 | [mattpocock/skills](https://github.com/mattpocock/skills) (MIT, ~54k ★) | "Skills for real engineers." Grilling sessions, deep-module design vocabulary, triage state machine, domain-modeling, handoff, ask-matt. Matt's flagship is `grill-with-docs`. |
| [igoruehara-spec-driven/](./igoruehara-spec-driven/) | 15 | [igoruehara/spec-driven](https://github.com/igoruehara/spec-driven) (MIT) | Spec-Driven Development pipeline (Lean Inception → DDD → TDD → SDD). Upstream pt-BR, translated to English by this hub. 15 skills + SessionStart hook + templates at [product-management/igoruehara-sdd/](../product-management/igoruehara-sdd/). |
| [taste-skills/](./taste-skills/) | 13 | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT) | Anti-slop frontend design + optional image-generation comps for web/mobile/brand kits. |
| [alirezarezvani-skills/](./alirezarezvani-skills/) | 11 | [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (MIT) | Skill supply-chain audit + Playwright/E2E depth (`playwright-pro`). |
| [research-paper-writing/](./research-paper-writing/) | 1 | [Master-cai/Research-Paper-Writing-Skills](https://github.com/Master-cai/Research-Paper-Writing-Skills) (MIT, ~4.3k ★) | Section-by-section ML/CV/NLP research-paper rewrite workflow, curated from Prof. Peng Sida's notes. |
| [forward-future-loop-library/](./forward-future-loop-library/) | 1 | [Forward-Future/loop-library](https://github.com/Forward-Future/loop-library) (MIT, ~1.6k ★) | Discover/find/audit/adapt/design bounded AI-agent loops; 69-loop live catalog linked. |

**Total:** 29 top-level skills + 269 in category folders = **298** `SKILL.md` packages. For Jeremy's other **18 categories** (devops, security, frontend/backend, ML, data, AWS/GCP, APIs, docs, enterprise), see the upstream repo.

## Attribution & licenses

All skills here are vendored from their upstream repositories. The license of each is noted in the Source column above. Skill files retain their original frontmatter where license/author info was present. Full catalog entries for each upstream repo: [cursor-claude-codex/references/upstream-repos-catalog.md](../references/upstream-repos-catalog.md).

When vendoring a new skill: add it to this README with the source and license, preserve the original SKILL.md content, and extend the catalog entry.

## Usage

- **Cursor**: Skills load from `.cursor/skills/` or project rules; link or copy from this folder as needed.
- **Claude Code**: `~/.claude/skills/` or project skills path.
- **Codex**: `~/.agents/skills/` per profile — pair with [codex-profiles](../tools/codex-profiles/) for multi-account setups.

Keep skill files in English, with a clear description and when to use them.
