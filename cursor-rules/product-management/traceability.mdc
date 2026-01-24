---
description: Guidelines for maintaining full traceability from requirements to implementation
globs:
alwaysApply: false
---
# Traceability

Guidelines for maintaining complete traceability from initial requirements through to deployed code.

## Traceability Chain

Maintain clear links at every stage:

```
PRD → Epic → Task → Issue (optional) → Code → Commit → Deployment
```

Each link should be:
- **Explicit**: Clearly documented and linked
- **Bidirectional**: Can trace forward and backward
- **Complete**: No broken links in the chain
- **Auditable**: Can verify the chain at any point

## Traceability Elements

### 1. PRD to Epic

**Link**: Epic file references PRD file
```markdown
## Related PRD
- `prd-[feature-name].md`
```

**Verification**: Can find all epics related to a PRD

### 2. Epic to Task

**Link**: Epic file lists related tasks
```markdown
## Tasks
- [ ] Task 1: [Description] → `tasks-[name].md`
- [ ] Task 2: [Description] → `tasks-[name].md`
```

**Verification**: Can find all tasks for an epic

### 3. Task to Implementation

**Link**: Task file lists relevant files
```markdown
## Relevant Files
- `path/to/file.ts` - [Description of changes]
```

**Verification**: Can find all code changes for a task

### 4. Implementation to Commit

**Link**: Commit messages reference task/epic
```markdown
feat(epic-name): implement user authentication

Related to: Task 1.0 from epic-user-authentication
Implements: PRD requirement FR-3
```

**Verification**: Can find commits for a task/epic

### 5. Commit to Deployment

**Link**: Deployment records reference commits
- CI/CD pipelines link commits to deployments
- Release notes reference epic/task completion

**Verification**: Can find when code was deployed

## Traceability Documentation

### In PRD Files

```markdown
# PRD: [Feature Name]

## Implementation Status
- Epic: `epic-[name].md`
- Status: [planning|in-progress|completed]
- Related Tasks: [List of task files]
```

### In Epic Files

```markdown
# Epic: [Epic Name]

## Related PRD
- `prd-[feature-name].md`

## Tasks
- [ ] Task 1 → `tasks-[name].md`
- [ ] Task 2 → `tasks-[name].md`

## Implementation
- Commits: [List of relevant commit SHAs]
- Files: [List of modified files]
```

### In Task Files

```markdown
# Tasks: [Task Name]

## Related Epic
- `epic-[name].md`

## Related PRD
- `prd-[feature-name].md`

## Relevant Files
- `path/to/file.ts` - [Description]

## Commits
- [Commit SHA] - [Brief description]
```

### In Commit Messages

Use conventional commits with epic/task references:

```bash
feat(epic-name): implement feature component

- Implements task 1.0 from tasks-feature-name.md
- Related to epic-feature-name.md
- Addresses PRD requirement FR-5

Files changed:
- src/components/Feature.tsx
- src/utils/feature-helpers.ts
```

## Traceability Commands

### Finding Related Work

**From PRD to Implementation:**
1. Read PRD file
2. Find referenced epic file
3. Find tasks in epic file
4. Find implementation files in task files
5. Find commits referencing task/epic

**From Code to Requirements:**
1. Find file in task files
2. Find task file
3. Find epic file
4. Find PRD file
5. Understand original requirement

**From Commit to Requirements:**
1. Read commit message
2. Find referenced task/epic
3. Follow chain back to PRD

## AI Instructions

When maintaining traceability:

1. **Link Explicitly**: Always create explicit links between related documents
2. **Update Links**: Keep links updated as work progresses
3. **Reference in Commits**: Include epic/task references in commit messages
4. **Document Changes**: Update traceability when files are created/modified
5. **Verify Chain**: Periodically verify traceability chain is complete
6. **Fix Broken Links**: Immediately fix any broken links discovered

## Traceability Benefits

### For Development

- **Understand Context**: Quickly understand why code exists
- **Find Related Work**: Easily find all related implementation
- **Track Progress**: See what's been done and what remains
- **Avoid Duplication**: Know if something was already implemented

### For Review

- **Verify Requirements**: Ensure code meets original requirements
- **Check Completeness**: Verify all requirements are addressed
- **Understand Scope**: See full scope of changes
- **Review Decisions**: Understand decisions made during implementation

### For Maintenance

- **Understand History**: Know why code was written
- **Find Related Code**: Quickly find all related code
- **Update Consistently**: Update all related code when requirements change
- **Document Changes**: Track how requirements evolved

## Traceability Checklist

When completing work, verify:

- [ ] PRD references epic (if applicable)
- [ ] Epic references PRD and lists tasks
- [ ] Tasks reference epic and list files
- [ ] Files are listed in task files
- [ ] Commits reference task/epic
- [ ] All links are bidirectional where possible
- [ ] No broken links exist
- [ ] Status is updated in all relevant files

## Best Practices

1. **Link Early**: Create links as soon as related documents exist
2. **Link Often**: Update links as work progresses
3. **Link Explicitly**: Use clear, explicit references
4. **Verify Regularly**: Check traceability chain periodically
5. **Fix Immediately**: Fix broken links as soon as discovered
6. **Document Changes**: Update traceability when requirements change

## Example: Complete Traceability Chain

```
PRD: prd-user-authentication.md
  ↓
Epic: epic-user-authentication.md (references PRD)
  ↓
Task: tasks-user-auth.md (references epic)
  ↓
Files: 
  - src/auth/service.ts
  - src/auth/api.ts
  - src/auth/components/Login.tsx
  ↓
Commits:
  - abc123: feat(auth): implement authentication service
  - def456: feat(auth): add API endpoints
  - ghi789: feat(auth): create login UI component
  ↓
Deployment: v1.2.0 (includes commits abc123, def456, ghi789)
```

Each step is explicitly linked and can be traced in both directions.