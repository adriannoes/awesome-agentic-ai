# Cursor & Claude Rules

Organized rules for Cursor and Claude Code software development.

## Directory Structure

```
cursor-and-claude-rules/
├── best-practices/      # Code quality, clean code, documentation
├── coding/              # Python, TypeScript, Tailwind
├── product-management/  # PRD, tasks, workflow (3 rules for Cursor, 5 for Claude Code)
└── security/           # Secure development practices
```

## Categories

### 📋 [Product Management](./product-management/)
Spec-driven development workflow:
- **3 rules for Cursor:** `create-prd.mdc`, `generate-tasks.mdc`, `process-task-list.mdc`
- **5 rules for Claude Code:** `epic-management.mdc`, `parallel-execution.mdc`, `context-preservation.mdc`, `traceability.mdc`, `project-status-tracking.mdc`

**See**: [Product Management README](./product-management/README.md)

### 💻 [Coding](./coding/)
Language and framework-specific rules:
- Python (general, FastAPI, AI-friendly)
- TypeScript/JavaScript
- Tailwind CSS

### ✨ [Best Practices](./best-practices/)
Universal best practices:
- Code quality guidelines
- Clean code principles
- Documentation standards

### 🔒 [Security](./security/)
Secure development practices:
- Universal security principles (always applied)
- Language-specific security (Python, C/C++)
- Technology-specific security (SQL, MCP)

## Usage

**Automatic:** Rules apply based on file globs (e.g., `**/*.py`) or `alwaysApply: true`

**Manual:** Mention the rule in conversation:
```
"Use create-prd.mdc to create a PRD for user authentication"
"Follow secure-dev-python.mdc for this Python code"
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