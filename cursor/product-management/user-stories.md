---
description: Standardize user story creation with INVEST criteria and Gherkin syntax.
globs: **/*.md
alwaysApply: false
---
# User Story Standards

> "As a <role>, I want <feature>, so that <benefit>."

## Core Structure
Every user story must follow this format:

### Title
`[US-001] Short Description`

### Narrative
- **As a** [user role]
- **I want** [action/feature]
- **So that** [value/benefit]

### Acceptance Criteria (Gherkin)
Use the Given-When-Then format for clarity and testability.

```gherkin
Scenario: Successful login
  Given the user is on the login page
  When they enter valid credentials
  Then they should be redirected to the dashboard
```

## INVEST Criteria
Ensure stories meet the INVEST principle:
- **I**ndependent: Can be developed separately.
- **N**egotiable: Open to discussion.
- **V**aluable: Delivers value to the user.
- **E**stimable: Can be sized.
- **S**mall: Fit in a sprint.
- **T**estable: Clear acceptance criteria.

## Definition of Done (DoD)
- [ ] Acceptance criteria met
- [ ] Tests passed (Unit & Integration)
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] UI/UX verified
