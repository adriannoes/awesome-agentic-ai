---
description: Guide for Model Context Protocol (MCP) server integration.
globs: **/*
alwaysApply: false
---
# Model Context Protocol (MCP) Guide

MCP standardizes how AI agents connect to external data and tools.

## Core Concepts
- **Host**: The AI application (Claude Code, Cursor).
- **Client**: The connector (mcp-cli).
- **Server**: The tool provider (Postgres, GitHub, Brave).

## Installation (Claude Code)
MCP servers are configured per-directory in `~/.claude.json`.

```bash
# Add a server
claude mcp add <server-name> <command>

# Example: Playwright (Browser Automation)
claude mcp add playwright npx -y @playwright/mcp@latest
```

## Common Servers
- **Filesystem**: Read/write local files (Built-in).
- **Postgres**: Read-only database access.
- **GitHub**: Search repos, read issues (Official).
- **Brave Search**: Web search.
- **Puppeteer/Playwright**: Browser automation.

## Usage
Once installed, simply ask Claude:
"Use playwright to go to example.com and take a screenshot."

## Troubleshooting
- Check status: `/mcp` command.
- Logs: `~/.claude/mcp.log`.
- Restart: `claude mcp restart <server-name>`.

## Security
- **Sandboxing**: MCP servers run locally.
- **Permissions**: You must explicitly approve tool use.
- **Read-Only**: Prefer read-only database users for MCP.
