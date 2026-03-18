---
description: Reference guide for built-in and custom Claude Code CLI commands.
globs: **/*
alwaysApply: false
---
# Claude Code Command Reference

## Built-in Commands

| Command | Purpose |
|---------|---------|
| `/init` | Initialize project with `CLAUDE.md`. |
| `/help` | Get usage help. |
| `/compact` | Compact conversation history to save context. |
| `/clear` | Clear conversation history. |
| `/cost` | Show token usage statistics. |
| `/doctor` | Check installation health. |
| `/bug` | Report bugs to Anthropic. |
| `/config` | View/modify configuration. |
| `/login` / `/logout` | Manage Anthropic account session. |
| `/model` | Switch AI model (e.g., Opus vs Sonnet). |
| `/pr_comments` | View GitHub PR comments. |
| `/review` | Request code review. |
| `/mcp` | Manage MCP servers. |

## Custom Commands (Slash Commands)
Create custom commands in `.claude/commands/*.md`.

### Example: `/optimize`
File: `.claude/commands/optimize.md`
```markdown
Analyze this code for performance issues and suggest optimizations.
Focus on:
- Time complexity (Big O)
- Memory usage
- Database query efficiency
- Render cycles (React)
```

### Example: `/pr`
File: `.claude/commands/pr.md`
```markdown
Create a new branch, commit changes, and submit a PR.
1. Create branch based on changes.
2. Format code.
3. Split into logical atomic commits.
4. Push and create PR with summary.
```

## Best Practices
- **Namespace commands**: Use directories like `.claude/commands/git/` for organization.
- **Clear instructions**: Write commands as system prompts.
- **Parametrization**: Commands can accept additional context from the chat.
