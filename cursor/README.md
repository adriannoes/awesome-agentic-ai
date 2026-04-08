# Cursor & Claude Code Skills

Organized rules and skills for Cursor and Claude Code software development.

## Directory Structure

```
cursor/
├── skills/             # Skills for both Cursor and Claude Code (shared)
├── commands/           # Cursor slash commands (copy to .cursor/commands to use)
├── best-practices/     # Code quality, clean code, documentation
├── coding/             # Python, TypeScript, Tailwind
├── product-management/ # PRD, tasks, workflow (3 rules for Cursor, 5 for Claude Code)
├── security/          # Secure development practices
└── references/        # Reference docs (agentic patterns, etc.)
```

## External Sources
- **GitHub Repositories**: 16+ sources integrated (skills, commands, best practices)
- **cursor.directory**: 10 high-quality rules from the community directory

**Project overview:** See [main README](../README.md) · [OpenClaw ecosystem](../openclaw/README.md)

## Categories

### 🎯 [Skills](./skills/)
Skills that work for both **Cursor** and **Claude Code**:
- **Workflow:** brainstorming, writing-plans, executing-plans, finishing-a-development-branch
- **Quality:** test-driven-development, systematic-debugging, verification-before-completion, receiving-code-review
- **Infrastructure:** using-git-worktrees
- **Design & Docs:** frontend-design, update-changelog
- **Meta:** create-rule, create-skill, update-settings, autoresearch

**See**: [Skills README](./skills/README.md)

### ⚡ [Commands](./commands/)
Cursor slash commands. Type `/` in Cursor chat to use. Copy to `.cursor/commands/` or symlink:
- **Review:** code-review, final-review, run-all-tests-and-fix
- **Workflow:** clarify-task, git-commit, deslop, security-audit, diagrams

**See**: [Commands README](./commands/README.md)

### 📋 [Product Management](./product-management/)
Spec-driven development workflow:
- **Core Workflow:** [no-vibe-coding.md](./product-management/no-vibe-coding.md) (Spec-Driven Development)
- **User Stories:** user-stories.md (INVEST, Gherkin)
- **3 rules for Cursor:** create-prd.md, generate-tasks.md, process-task-list.md
- **5 rules for Claude Code:** epic-management.md, parallel-execution.md, context-preservation.md, traceability.md, project-status-tracking.md

**See**: [Product Management README](./product-management/README.md)

### 💻 [Coding](./coding/)
Language and framework-specific rules:
- **Containerization:** docker-best-practices.md
- **ORM:** prisma-orm.md (Prisma ORM best practices)
- **Testing:** playwright-testing.md (E2E testing with Playwright)
- **Backend Frameworks:** nestjs-clean.md, django-rest-api.md, laravel-php.md, fastapi-enhanced.md
- **Frontend Frameworks:** nextjs-typescript.md, shopify-theme.md
- **Languages:** Python, typescript-guidelines.md, TypeScript/JavaScript, Tailwind CSS

### ✨ [Best Practices](./best-practices/)
Universal best practices:
- **System Personas:** [system-prompts.md](./best-practices/system-prompts.md) (Architect, Plan Mode, Tech Lead)
- **LLM Guidelines:** [karpathy-guidelines.md](./best-practices/karpathy-guidelines.md) (Think before coding, simplicity, surgical changes, goal-driven execution)
- **Accessibility:** accessibility.md (WCAG guidelines, a11y best practices)
- Code quality guidelines
- Clean code principles
- Documentation standards

### 🔒 [Security](./security/)
Secure development practices:
- **Audit:** anthropic-security-audit.md (Official Anthropic Prompt)
- Universal security principles (always applied)
- Language-specific security (Python, C/C++)
- Technology-specific security (SQL, MCP)

### 📚 [References](./references/)
Reference documentation:
- **Agentic Patterns:** [agentic-patterns.md](./references/agentic-patterns.md) (Plan-then-execute, sub-agent spawning, etc.)
- **Upstream catalog:** [upstream-repos-catalog.md](./references/upstream-repos-catalog.md) (explored external repos: Vercel agent-skills, code-review-graph, awesome-design-md, claude-md hooks, Claw, prompt research, HumanLayer, Harness)

**See**: [References README](./references/README.md)

## Usage

**Automatic:** Rules apply based on file globs (e.g., `**/*.py`) or `alwaysApply: true`

**Manual:** Mention the rule in conversation:
```
"Use create-prd.md to create a PRD for user authentication"
"Follow secure-dev-python.md for this Python code"
```

## Rule File Format

```yaml
---
description: Brief description
globs: **/*.py  # File patterns (optional)
alwaysApply: false  # Always apply (optional)
---
# Rule Content
```

## Credits & Sources

Content integrated from the following repositories (adapted for our use, no runtime dependency):

| Source | License | What we integrated |
|--------|---------|--------------------|
| [obra/superpowers](https://github.com/obra/superpowers) | MIT | brainstorming, test-driven-development, systematic-debugging, writing-plans, executing-plans, finishing-a-development-branch, verification-before-completion, receiving-code-review, using-git-worktrees |
| [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills) | MIT | karpathy-guidelines.md (LLM coding guidelines) |
| [hamzafer/cursor-commands](https://github.com/hamzafer/cursor-commands) | MIT | code-review, run-all-tests-and-fix, clarify-task, deslop, security-audit, diagrams commands |
| [patyearone/final-review-gist](https://gist.github.com/patyearone/c9a091b97e756f5ed361f7514d88ef0b) | — | final-review command (PR review with parallel agents) |
| [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) | Apache-2.0 | git-commit command, frontend-design, update-changelog skills |
| [nibzard/awesome-agentic-patterns](https://github.com/nibzard/awesome-agentic-patterns) | Apache-2.0 | references/agentic-patterns.md |
| [JohnCrickett/ai-assisted-engineering](https://github.com/JohnCrickett/ai-assisted-engineering) | — | AGENTS.md reference |
| [sickn33/antigravity-awesome-skills](https://github.com/sickn33/antigravity-awesome-skills) | MIT | Previously integrated |

Additional upstream projects (catalog): [upstream-repos-catalog.md](./references/upstream-repos-catalog.md).
