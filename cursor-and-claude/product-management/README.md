# Product Management Rules

Rules for managing software products using spec-driven development, inspired by [Claude Code PM (ccpm)](https://github.com/automazeio/ccpm).

**See also:** [cursor-and-claude/README.md](../README.md) | [no-vibe-coding.md](./no-vibe-coding.md) | [skills/](../skills/)

## Important: Cursor vs Claude Code

**For Cursor (use these 3 rules):**
- `create-prd.md` - Create Product Requirements Documents
- `generate-tasks.md` - Generate task lists from PRDs
- `task-list-development.md` - Execute tasks with proper protocol

**For Claude Code (reference only):**
- `epic-management.md`
- `parallel-execution.md`
- `context-preservation.md`
- `traceability.md`
- `project-status-tracking.md`

## Cursor Rules

### create-prd.md
Creates PRDs from user prompts.

**Process:**
1. User provides feature description
2. AI asks clarifying questions (problem, user, functionality, stories, criteria, scope, data, design, edge cases)
3. AI generates structured PRD
4. Saves to `/tasks/prd-[feature-name].md`

**Key Sections:** Introduction, Goals, User Stories, Functional Requirements, Non-Goals, Success Metrics

**Note:** AI must NOT start implementing after creating PRD.

### generate-tasks.md
Generates task lists from PRDs.

**Process:**
1. User points to PRD file
2. AI analyzes PRD
3. **Phase 1:** Generate high-level parent tasks (~5), wait for "Go"
4. **Phase 2:** Generate detailed sub-tasks
5. Identify relevant files (including tests)
6. Save to `/tasks/tasks-[prd-file-name].md`

**Output Format:**
```markdown
## Relevant Files
- `path/to/file.ts` - Description

## Tasks
- [ ] 1.0 Parent Task
  - [ ] 1.1 Sub-task
```

### process-task-list.md
Guidelines for executing tasks (automatically applied).

**Rules:**
- One sub-task at a time (wait for user approval: "yes" or "y")
- Mark `[ ]` → `[x]` when completing sub-task
- Mark parent task `[x]` when all sub-tasks are done
- Update "Relevant Files" section as you work
- Stop after each sub-task for approval

## Quick Start

1. **Create PRD:** "Use create-prd.md to create a PRD for [feature]"
2. **Generate Tasks:** "Use generate-tasks.md from prd-[name].md"
3. **Execute:** "Start working on tasks-[name].md" (process-task-list.md applies automatically)

## Workflow

```
PRD → Tasks → Execute (one sub-task at a time with approval)
```

## File Structure

```
/tasks/
  prd-[feature-name].md
  tasks-[feature-name].md
```

## References

- [Claude Code PM (ccpm)](https://github.com/automazeio/ccpm)
