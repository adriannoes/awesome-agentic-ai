# Cursor Commands

Slash-command prompts for Cursor IDE. Type `/` in Cursor chat to list available commands.

**See also:** [cursor-claude-codex/README.md](../README.md) | [skills/](../skills/)

## Usage

Cursor reads commands from `.cursor/commands/` at the project root. To use these commands:

```bash
# Option 1: Symlink (recommended)
ln -sfn cursor-claude-codex/commands .cursor/commands

# Option 2: Copy
mkdir -p .cursor && cp -r cursor-claude-codex/commands .cursor/

# Option 3: Manual — create .cursor/commands/ and copy the .md files you need
```

## Available Commands

| Command | Description |
|---------|-------------|
| `code-review.md` | Comprehensive code review checklist |
| `run-all-tests-and-fix.md` | Execute full test suite and fix failures |
| `final-review.md` | Comprehensive PR review with parallel agents |
| `clarify-task.md` | Break down ambiguous tasks into clear steps |
| `git-commit.md` | Create Conventional Commits-style commits |
| `deslop.md` | Remove AI-generated slop (extra comments, defensive checks, etc.) |
| `security-audit.md` | Dependency, code, and infrastructure security review |
| `diagrams.md` | Generate Mermaid diagrams (flowchart, sequence, class, ER, state) |

## Bug-hunter slash commands

Offensive-security commands (`/recon`, `/hunt`, `/triage`, `/report`, …) live inside the vendored bundle, not in this folder:

- [../skills/bug-hunter/commands/](../skills/bug-hunter/commands/) — copy `*.md` into `.cursor/commands/` when needed
- See [../skills/bug-hunter/README.md](../skills/bug-hunter/README.md)

## Sources

- [hamzafer/cursor-commands](https://github.com/hamzafer/cursor-commands) (MIT) — upstream now ships 32 commands; we vendor 6 of them here (`code-review`, `run-all-tests-and-fix`, `clarify-task`, `deslop`, `security-audit`, `diagrams`). Browse upstream for the rest (`overview`, `roadmap`, `address-github-pr-comments`, `light-review-existing-diffs`, `generate-pr-description`, `fix-compile-errors`, …).
- [patyearone/final-review-gist](https://gist.github.com/patyearone/c9a091b97e756f5ed361f7514d88ef0b) — `final-review`
- [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0) — `git-commit` (upstream moved it to `skills/commit/SKILL.md`; we keep it as a Cursor slash command here)
