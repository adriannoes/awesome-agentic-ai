# Cursor, Claude Code & Codex

Organized rules, skills, and tools for AI-assisted software development across **Cursor**, **Claude Code**, and **Codex**.

> **Renamed (2026-06):** this folder was `cursor-and-claude/`. Update local symlinks: `ln -sfn cursor-claude-codex/commands .cursor/commands`.

## Directory Structure

```
cursor-claude-codex/
├── skills/             # Agent skills (Cursor, Claude Code, Codex)
├── commands/           # Cursor slash commands (copy to .cursor/commands/)
├── tools/              # Developer CLIs (e.g. codex-profiles)
├── best-practices/     # Code quality, agentic clean code, documentation
├── coding/             # Python, TypeScript, Tailwind
├── product-management/ # PRD, tasks, workflow
├── security/           # Secure development practices
└── references/         # Agentic patterns, upstream catalog
```

## Platform quick start

| Platform | Skills | Rules / context | Commands & tools |
|----------|--------|-----------------|------------------|
| **Cursor** | Link or copy from [skills/](./skills/) | `.cursor/rules/` or rule files | [commands/](./commands/) — type `/` in chat |
| **Claude Code** | `~/.claude/skills/` or project skills | `CLAUDE.md` + [hooks](./best-practices/hooks-guide.md) | — |
| **Codex** | `~/.agents/skills/` | `AGENTS.md` in project | [codex-profiles](./tools/codex-profiles/) for multi-account `CODEX_HOME` |

Skills written for Claude Code often work on Codex with minimal changes. When a skill references `Task`, `TodoWrite`, or `Skill` tools, see [skills/using-superpowers/references/codex-tools.md](./skills/using-superpowers/references/codex-tools.md).

**Project overview:** [main README](../README.md) · [OpenClaw ecosystem](../openclaw/README.md)

## Categories

### 🎯 [Skills](./skills/)
Workflow, quality, E2E, security testing, React/Next.js, and meta skills shared across agents.

**See**: [Skills README](./skills/README.md)

### 🛠 [Tools](./tools/)
Developer utilities (not agent skills):

- **[codex-profiles](./tools/codex-profiles/)** — isolated Codex CLI/Desktop profiles per account ([Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles))

### ⚡ [Commands](./commands/)
**Cursor only.** Slash commands — copy to `.cursor/commands/` or symlink:

```bash
ln -sfn cursor-claude-codex/commands .cursor/commands
```

**See**: [Commands README](./commands/README.md)

### 📋 [Product Management](./product-management/)
Spec-driven development — [README](./product-management/README.md)

### 💻 [Coding](./coding/)
Language and framework-specific rules.

### ✨ [Best Practices](./best-practices/)
Agent clean code, Karpathy guidelines, MCP, hooks, accessibility.

### 🔒 [Security](./security/)
Secure development practices:
- **Audit:** anthropic-security-audit.md (Official Anthropic Prompt)
- Universal security principles (always applied)
- Language-specific security (Python, C/C++)
- Technology-specific security (SQL, MCP)

### 📚 [References](./references/)
[agentic-patterns.md](./references/agentic-patterns.md) · [upstream-repos-catalog.md](./references/upstream-repos-catalog.md)

## Usage

**Automatic:** Rules apply based on file globs or `alwaysApply: true`

**Manual:** Mention the rule in conversation.

## Rule File Format

```yaml
---
description: Brief description
globs: **/*.py
alwaysApply: false
---
# Rule Content
```

## Credits & Sources

Content integrated from the following repositories (adapted for our use, no runtime dependency):

| Source | License | What we integrated |
|--------|---------|--------------------|
| [obra/superpowers](https://github.com/obra/superpowers) | MIT | brainstorming, test-driven-development, systematic-debugging, writing-plans, executing-plans, finishing-a-development-branch, verification-before-completion, receiving-code-review, using-git-worktrees |
| [Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles) | MIT | [tools/codex-profiles/](./tools/codex-profiles/) CLI snapshot |
| [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | MIT | karpathy-guidelines.md (LLM coding guidelines) |
| [hamzafer/cursor-commands](https://github.com/hamzafer/cursor-commands) | MIT | code-review, run-all-tests-and-fix, clarify-task, deslop, security-audit, diagrams commands |
| [patyearone/final-review-gist](https://gist.github.com/patyearone/c9a091b97e756f5ed361f7514d88ef0b) | — | final-review command (PR review with parallel agents) |
| [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) | Apache-2.0 | git-commit command, frontend-design, update-changelog skills |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | Apache-2.0 | references/agentic-patterns.md |
| [JohnCrickett/ai-assisted-engineering](https://github.com/JohnCrickett/ai-assisted-engineering) | — | AGENTS.md reference |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | MIT | Previously integrated |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | MIT | `web-design-guidelines`, `react-best-practices` skills ([skills README](./skills/README.md)); React `rules/*.md` and `AGENTS.md` remain upstream |

Additional upstream projects (catalog): [upstream-repos-catalog.md](./references/upstream-repos-catalog.md).
