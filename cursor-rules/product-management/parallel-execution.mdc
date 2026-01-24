---
description: Guidelines for identifying and managing parallelizable tasks
globs:
alwaysApply: false
---
# Parallel Execution Analysis

Guidelines for identifying tasks that can be executed in parallel and managing concurrent development work.

## Core Principle

**One issue/task ≠ One developer/agent**

A single task often contains multiple independent work streams that can be executed simultaneously, dramatically reducing implementation time.

## When to Analyze for Parallelization

Analyze tasks for parallelization when:
- A task involves multiple distinct components (UI, API, database, tests)
- A task spans multiple files or modules
- A task has clear separation of concerns
- A task can be broken into independent sub-workstreams

## Parallelization Patterns

### Pattern 1: Layer Separation
A single feature task can split into:
- **Database Layer**: Tables, migrations, models
- **Service Layer**: Business logic, validations
- **API Layer**: Endpoints, middleware, routing
- **UI Layer**: Components, forms, views
- **Test Layer**: Unit tests, integration tests

### Pattern 2: Feature Components
A feature can split into:
- **Core Logic**: Main functionality
- **UI Components**: User interface elements
- **API Integration**: Backend communication
- **State Management**: Data flow and state
- **Documentation**: User guides, API docs

### Pattern 3: Independent Modules
When tasks involve:
- Separate modules with no dependencies
- Different file types (config, code, tests)
- Independent features within a larger scope

## Task Analysis Process

When analyzing a task for parallelization:

1. **Identify Work Streams**: Break the task into distinct work areas
2. **Check Dependencies**: Identify which streams depend on others
3. **Mark Parallelizable**: Tag sub-tasks that can run concurrently
4. **Document Dependencies**: Clearly note any required ordering
5. **Coordinate Points**: Identify where streams need to merge

## Task Marking Convention

In task lists, mark parallelizable items:

```markdown
## Tasks

- [ ] 1.0 Implement User Authentication
  - [ ] 1.1 Database schema and migrations [parallel: true]
  - [ ] 1.2 Service layer and business logic [parallel: true, depends: 1.1]
  - [ ] 1.3 API endpoints [parallel: true, depends: 1.2]
  - [ ] 1.4 UI components [parallel: true, depends: 1.2]
  - [ ] 1.5 Test suite [parallel: true, depends: 1.3, 1.4]
```

## Parallel Execution Guidelines

### Safe Parallel Execution

Tasks can run in parallel when:
- They modify different files
- They have no shared state dependencies
- They can be tested independently
- They don't conflict in git

### Sequential Execution Required

Tasks must run sequentially when:
- One task's output is another's input
- Shared database schema changes
- Breaking API changes
- Shared configuration files

## Context Management

When executing parallel work:

1. **Maintain Separate Context**: Each parallel stream maintains its own context
2. **Avoid Context Pollution**: Don't mix implementation details in main conversation
3. **Coordinate Through Code**: Use git commits to coordinate between streams
4. **Clean Merges**: Ensure parallel work merges cleanly

## AI Instructions

When working with parallelizable tasks:

1. **Analyze First**: Before starting, identify parallelization opportunities
2. **Mark Clearly**: Use `[parallel: true]` tags in task lists
3. **Respect Dependencies**: Never start a dependent task before its prerequisite
4. **Coordinate Work**: Use git commits to signal completion of parallel streams
5. **Merge Carefully**: Ensure parallel work integrates correctly
6. **Update Status**: Keep task lists updated as parallel work completes

## Benefits

- **Faster Delivery**: Multiple work streams complete simultaneously
- **Better Context**: Main conversation stays strategic, not cluttered with implementation details
- **Reduced Blocking**: Less waiting on sequential dependencies
- **Higher Throughput**: More work completed in the same time period

## Example: Authentication Feature

**Traditional Approach:**
```
Task: Implement authentication
  → Database (2 hours)
  → Service layer (2 hours)
  → API endpoints (2 hours)
  → UI components (2 hours)
  → Tests (2 hours)
Total: 10 hours sequential
```

**Parallel Approach:**
```
Task: Implement authentication
  → Stream 1: Database + Service (4 hours) [parallel]
  → Stream 2: API endpoints (2 hours) [parallel, depends: Stream 1]
  → Stream 3: UI components (2 hours) [parallel, depends: Stream 1]
  → Stream 4: Tests (2 hours) [parallel, depends: Stream 2, 3]
Total: ~6 hours with parallelization
```

## Velocity Impact

Parallel execution can provide:
- **3-5x faster** for well-structured tasks
- **2-3x faster** for moderately structured tasks
- **Minimal benefit** for tightly coupled, sequential tasks

The key is identifying the right tasks to parallelize.