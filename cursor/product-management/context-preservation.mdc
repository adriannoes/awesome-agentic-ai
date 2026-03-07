---
description: Guidelines for preserving project context and avoiding context loss
globs:
alwaysApply: false
---
# Context Preservation

Guidelines for maintaining project context across sessions, epics, and tasks to avoid losing important information.

## The Problem

Without proper context management:
- Important decisions are forgotten
- Project state is lost between sessions
- Implementation details pollute main conversations
- Context windows fill with unnecessary information
- Work gets duplicated or conflicts occur

## Context Storage Strategy

### 1. Epic-Level Context

Store epic-specific context in:
- **Epic files**: `epic-[name].md` contains high-level context
- **Context directory**: `.claude/context/[epic-name]/` for detailed context
- **Decision log**: Track important decisions per epic

### 2. Task-Level Context

Store task-specific context in:
- **Task files**: `tasks-[name].md` contains task requirements
- **Implementation notes**: Within task files as work progresses
- **File references**: Links to relevant code files

### 3. Project-Level Context

Store project-wide context in:
- **CLAUDE.md**: Repository structure, conventions, patterns
- **README.md**: Project overview and setup
- **Documentation**: Architecture decisions, design patterns

## Context File Structure

```
.claude/
  context/
    [epic-name]/
      requirements.md      # Epic requirements and goals
      decisions.md          # Important decisions made
      architecture.md       # Technical architecture notes
      dependencies.md       # External dependencies
      progress.md           # Current progress and status
```

## Context Loading Protocol

### Before Starting Work

1. **Load Epic Context**: Read epic file and related context
2. **Load Task Context**: Read task file and requirements
3. **Load Related Context**: Review related PRD and decisions
4. **Check Dependencies**: Understand what work depends on this

### During Work

1. **Update Progress**: Keep task files updated with progress
2. **Document Decisions**: Record important decisions in context files
3. **Note Dependencies**: Document any new dependencies discovered
4. **Track Changes**: Update relevant files section as work progresses

### After Completing Work

1. **Finalize Context**: Ensure all context is properly documented
2. **Update Status**: Mark tasks as complete in epic files
3. **Archive Context**: Move completed epic context to archive if needed
4. **Sync Documentation**: Update any relevant documentation

## Context Preservation Rules

### Rule 1: Epic Context Isolation

Each epic maintains its own context directory. This prevents:
- Context pollution between different features
- Unnecessary information in main conversations
- Confusion about which context applies

### Rule 2: Incremental Updates

Update context files incrementally as work progresses:
- Don't wait until the end to document
- Update context after each significant milestone
- Keep context files current and accurate

### Rule 3: Decision Documentation

Document important decisions immediately:
- Architecture choices
- Design patterns selected
- Trade-offs considered
- Rationale for decisions

### Rule 4: Dependency Tracking

Maintain clear dependency documentation:
- What this work depends on
- What depends on this work
- External dependencies
- Blocking issues

## Context File Templates

### Epic Context Template

```markdown
# Context: [Epic Name]

## Requirements
[Key requirements and goals]

## Architecture
[Technical architecture decisions]

## Decisions
- [Date] Decision: [What was decided]
  - Rationale: [Why]
  - Impact: [What this affects]

## Dependencies
- Internal: [Other epics/tasks]
- External: [Libraries, services, APIs]

## Progress
- Started: [Date]
- Current Phase: [Phase name]
- Next Steps: [What's next]
```

### Task Context Template

```markdown
# Task: [Task Name]

## Requirements
[Specific requirements for this task]

## Implementation Notes
[Notes about implementation approach]

## Files Modified
- `path/to/file.ts` - [What was changed and why]

## Decisions
- [Decision made during implementation]

## Blockers
- [Any blockers or dependencies]
```

## AI Instructions

When preserving context:

1. **Create Context Files**: Set up context structure when starting an epic
2. **Update Regularly**: Keep context files updated as work progresses
3. **Document Decisions**: Record important decisions immediately
4. **Load Context First**: Always load relevant context before starting work
5. **Maintain Separation**: Keep epic contexts isolated from each other
6. **Archive Completed**: Move completed epic context to archive when done

## Benefits

- **No Context Loss**: Important information preserved across sessions
- **Faster Onboarding**: New work can quickly understand context
- **Better Decisions**: Historical context informs future decisions
- **Reduced Duplication**: Avoid re-solving already-solved problems
- **Clear Traceability**: Full history of decisions and rationale

## Context vs Implementation

**Context Files**: Strategic, high-level, decisions, architecture
**Implementation Files**: Code, tests, configuration, detailed logic

Keep them separate:
- Context files are for understanding and planning
- Implementation files are for doing the work
- Don't pollute context with implementation details
- Don't lose strategic context in code comments

## Best Practices

1. **Start with Context**: Always load context before starting work
2. **Update as You Go**: Don't defer context updates
3. **Be Specific**: Include enough detail to be useful later
4. **Link Related**: Reference related context files and documents
5. **Review Regularly**: Periodically review and clean up context files