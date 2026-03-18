---
description: Guidelines for managing epics and breaking down features into trackable work units
globs:
alwaysApply: false
---
# Epic Management

Guidelines for managing epics (large features) and their relationship to PRDs, tasks, and implementation work.

## Epic Definition

An **epic** represents a large feature or initiative that:
- Spans multiple implementation tasks
- Has a clear business goal
- Can be broken down into smaller, trackable units
- Maps to one or more PRDs

## Epic Structure

Each epic should be documented with:

1. **Epic Name**: Short, descriptive identifier (e.g., `memory-system`, `user-authentication`)
2. **Description**: High-level overview of what the epic accomplishes
3. **Related PRD**: Link to the PRD(s) that define this epic
4. **Epic Goals**: List of measurable objectives
5. **Status**: `planning`, `in-progress`, `blocked`, `completed`
6. **Tasks**: List of related task files or GitHub issues

## Epic Lifecycle

### 1. Epic Creation

When a PRD is created, determine if it represents:
- A single epic (most common)
- Multiple epics (for very large features)
- Part of an existing epic

**Action**: Create an epic tracking file: `epic-[name].md` in `/tasks/`

### 2. Epic Breakdown

Break the epic into implementation tasks:
- Each task should be independently implementable
- Tasks should have clear dependencies identified
- Tasks should be sized appropriately (1-3 days of work)

**Action**: Use the task generation process to create detailed task lists

### 3. Epic Tracking

Maintain epic status by:
- Tracking completion of related tasks
- Updating epic status as work progresses
- Documenting blockers and dependencies
- Recording decisions and context

### 4. Epic Completion

An epic is complete when:
- All related tasks are completed
- All acceptance criteria from the PRD are met
- Code is merged and deployed
- Documentation is updated

## Epic File Format

```markdown
# Epic: [Epic Name]

## Description
[Brief description of the epic and its purpose]

## Related PRD
- `prd-[feature-name].md`

## Goals
- [ ] Goal 1: [Description]
- [ ] Goal 2: [Description]

## Status
Current status: [planning|in-progress|blocked|completed]

## Tasks
- [ ] Task 1: [Description] → `tasks-[name].md` or Issue #123
- [ ] Task 2: [Description] → `tasks-[name].md` or Issue #124

## Dependencies
- [List any external dependencies or blockers]

## Context
[Any important context, decisions, or notes about this epic]

## Progress
- Started: [Date]
- Last Updated: [Date]
- Completion: [Date or estimated date]
```

## AI Instructions

When working with epics, the AI must:

1. **Create epic files** when a PRD is created or when explicitly requested
2. **Link tasks to epics** by referencing the epic name in task files
3. **Update epic status** as related tasks are completed
4. **Maintain traceability** from PRD → Epic → Tasks → Implementation
5. **Identify dependencies** between tasks within an epic
6. **Document context** that might be needed later for the epic

## Epic vs Task Distinction

- **Epic**: Large feature, multiple tasks, spans days/weeks
- **Task**: Specific implementation work, single focus, 1-3 days
- **Sub-task**: Granular work item within a task, hours to 1 day

## Benefits

- **Better organization**: Large features broken into manageable units
- **Progress tracking**: Clear visibility into feature completion
- **Context preservation**: Epic-level context maintained separately
- **Dependency management**: Clear understanding of task relationships
- **Traceability**: Full audit trail from idea to implementation