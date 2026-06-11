---
description: Guidelines for tracking project status and generating status reports
globs:
alwaysApply: false
---
# Project Status Tracking

Guidelines for tracking overall project status, generating status reports, and maintaining visibility into work progress.

## Status Tracking Levels

### 1. Task Status

Individual task status:
- `not-started`: Task not yet begun
- `in-progress`: Currently being worked on
- `blocked`: Waiting on dependency or blocker
- `review`: Completed, awaiting review
- `completed`: Fully completed and merged

### 2. Epic Status

Epic-level status:
- `planning`: Epic being planned, tasks not yet defined
- `ready`: Tasks defined, ready to start
- `in-progress`: At least one task in progress
- `blocked`: Epic blocked by dependency
- `review`: All tasks complete, in review
- `completed`: Epic fully completed

### 3. Project Status

Overall project health:
- **Active Epics**: Number of epics in progress
- **Blocked Items**: Tasks/epics that are blocked
- **Completion Rate**: Percentage of tasks completed
- **Velocity**: Tasks completed over time

## Status Update Protocol

### When to Update Status

Update status:
- When starting work on a task
- When completing a task
- When encountering a blocker
- When dependencies are resolved
- When work is ready for review
- At regular intervals (daily/weekly)

### How to Update Status

1. **Update Task File**: Mark task status in task file
2. **Update Epic File**: Update epic status based on task progress
3. **Update Context**: Update progress in context files
4. **Generate Report**: Create status report if requested

## Status Report Structure

### Daily Standup Report

```markdown
# Daily Status Report - [Date]

## Completed Yesterday
- [Task/Epic] - [Brief description of what was completed]

## Working Today
- [Task/Epic] - [What you're working on today]

## Blockers
- [Blocker description] - [What's blocking and why]

## Notes
- [Any other relevant information]
```

### Epic Status Report

```markdown
# Epic Status: [Epic Name]

## Overall Status
[planning|ready|in-progress|blocked|review|completed]

## Progress
- Total Tasks: [number]
- Completed: [number]
- In Progress: [number]
- Blocked: [number]
- Not Started: [number]

## Tasks
- [x] Task 1: [Description] - Completed
- [ ] Task 2: [Description] - In Progress
- [ ] Task 3: [Description] - Blocked: [reason]
- [ ] Task 4: [Description] - Not Started

## Blockers
- [Blocker description and resolution plan]

## Next Steps
- [What needs to happen next]
```

### Project Dashboard

```markdown
# Project Dashboard - [Date]

## Active Epics
- [Epic 1]: [Status] - [X/Y tasks completed]
- [Epic 2]: [Status] - [X/Y tasks completed]

## Blocked Items
- [Epic/Task]: [Blocker description]

## Recently Completed
- [Epic/Task]: [Completed date]

## Overall Metrics
- Total Epics: [number]
- Active Epics: [number]
- Completed Epics: [number]
- Total Tasks: [number]
- Completed Tasks: [number]
- Completion Rate: [percentage]
```

## Status Tracking Commands

### Check Task Status

When asked for task status:
1. Read task file
2. Check completion status of sub-tasks
3. Identify any blockers
4. Report current status

### Check Epic Status

When asked for epic status:
1. Read epic file
2. Check status of all related tasks
3. Calculate overall epic progress
4. Identify blockers
5. Generate epic status report

### Check Project Status

When asked for project status:
1. Scan all epic files
2. Aggregate status across epics
3. Identify blocked items
4. Calculate overall metrics
5. Generate project dashboard

## AI Instructions

When tracking status:

1. **Update Regularly**: Keep status updated as work progresses
2. **Be Accurate**: Ensure status reflects actual state
3. **Identify Blockers**: Clearly mark and describe blockers
4. **Calculate Progress**: Provide accurate progress percentages
5. **Generate Reports**: Create status reports when requested
6. **Highlight Issues**: Draw attention to blocked or at-risk items

## Status Indicators

### Visual Status Indicators

Use clear indicators in markdown:
- ✅ Completed
- 🚧 In Progress
- ⏸️ Blocked
- ⏳ Waiting/Review
- 📋 Planning/Ready
- ❌ Cancelled

### Status Colors (if using tools that support)

- 🟢 Green: On track, no issues
- 🟡 Yellow: Some concerns, minor blockers
- 🔴 Red: Blocked, significant issues
- ⚪ Gray: Not started, planning

## Blocked Item Management

### Identifying Blockers

An item is blocked when:
- Waiting on external dependency
- Waiting on another task/epic
- Waiting on decision or approval
- Technical blocker that needs resolution
- Resource constraint

### Blocker Documentation

Document blockers with:
- **Description**: What is blocking
- **Reason**: Why it's blocking
- **Impact**: What work is affected
- **Resolution Plan**: How to resolve
- **Owner**: Who is responsible for resolution
- **ETA**: Expected resolution time

### Blocker Resolution

When blocker is resolved:
1. Update status from `blocked` to appropriate status
2. Remove blocker from blocker list
3. Update dependent tasks/epics
4. Notify relevant parties if needed

## Progress Metrics

### Useful Metrics to Track

- **Task Completion Rate**: % of tasks completed
- **Epic Completion Rate**: % of epics completed
- **Average Task Duration**: Time to complete tasks
- **Blocker Frequency**: How often items get blocked
- **Velocity**: Tasks/epics completed per time period

### Calculating Metrics

- Read all task/epic files
- Count completed vs total
- Calculate percentages
- Track over time for trends

## Best Practices

1. **Update Immediately**: Update status as soon as it changes
2. **Be Specific**: Provide clear status descriptions
3. **Track Blockers**: Always document blockers clearly
4. **Regular Reports**: Generate status reports regularly
5. **Historical Tracking**: Keep historical status for analysis
6. **Automate When Possible**: Use scripts/tools to generate reports

## Status Report Frequency

- **Task Level**: Update when status changes
- **Epic Level**: Update daily or when significant progress
- **Project Level**: Update weekly or on demand
- **Standup Reports**: Generate daily if requested