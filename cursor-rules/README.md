# Cursor & Claude Rules

Organized rules for Cursor and Claude Code software development.

## Directory Structure

```
cursor-rules/
├── best-practices/      # Code quality, clean code, documentation
├── coding/              # Python, TypeScript, Tailwind
├── product-management/  # PRD, tasks, workflow (3 rules for Cursor, 5 for Claude Code)
└── security/           # Secure development practices
```

## Maintenance & Updates

We track external repositories to keep these rules up-to-date.
See `MAINTENANCE.md` for the list of sources.
To check for updates, run:
```bash
python scripts/check_updates.py
```
*(Note: `scripts/` and `MAINTENANCE.md` are gitignored)*

### External Sources
- **GitHub Repositories**: 9 repositories tracked (see `MAINTENANCE.md`)
- **cursor.directory**: 10 high-quality rules integrated from the community directory

## Categories

### 📋 [Product Management](./product-management/)
Spec-driven development workflow:
- **Core Workflow:** `no-vibe-coding.mdc` (Spec-Driven Development)
- **User Stories:** `user-stories.mdc` (INVEST, Gherkin)
- **3 rules for Cursor:** `create-prd.mdc`, `generate-tasks.mdc`, `process-task-list.mdc`
- **5 rules for Claude Code:** `epic-management.mdc`, `parallel-execution.mdc`, `context-preservation.mdc`, `traceability.mdc`, `project-status-tracking.mdc`

**See**: [Product Management README](./product-management/README.md)

### 💻 [Coding](./coding/)
Language and framework-specific rules:
- **Containerization:** `docker-best-practices.mdc`
- **ORM:** `prisma-orm.mdc` (Prisma ORM best practices)
- **Testing:** `playwright-testing.mdc` (E2E testing with Playwright)
- **Backend Frameworks:**
  - `nestjs-clean.mdc` (NestJS with clean architecture)
  - `django-rest-api.mdc` (Django REST API development)
  - `laravel-php.mdc` (Laravel PHP framework)
  - `fastapi-enhanced.mdc` (Enhanced FastAPI patterns)
- **Frontend Frameworks:**
  - `nextjs-typescript.mdc` (Next.js App Router with TypeScript)
  - `shopify-theme.mdc` (Shopify theme development)
- **Languages:**
  - Python (general, FastAPI, AI-friendly)
  - `typescript-guidelines.mdc` (Comprehensive TypeScript guidelines)
  - TypeScript/JavaScript
  - Tailwind CSS

### ✨ [Best Practices](./best-practices/)
Universal best practices:
- **System Personas:** `system-prompts.mdc` (Architect, Plan Mode, Tech Lead)
- **Accessibility:** `accessibility.mdc` (WCAG guidelines, a11y best practices)
- Code quality guidelines
- Clean code principles
- Documentation standards

### 🔒 [Security](./security/)
Secure development practices:
- **Audit:** `anthropic-security-audit.mdc` (Official Anthropic Prompt)
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
