---
name: brainstorming
description: "Use before any creative work — creating features, building components, adding functionality. Explores user intent, requirements and design before implementation."
---

# Brainstorming Ideas Into Designs

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

**Source:** [obra/superpowers](https://github.com/obra/superpowers) (MIT)

Do NOT invoke any implementation skill, write any code, scaffold any project, or take any implementation action until you have presented a design and the user has approved it. This applies to EVERY project regardless of perceived simplicity.

## Anti-Pattern: "This Is Too Simple To Need A Design"

Every project goes through this process. A todo list, a single-function utility, a config change — all of them. "Simple" projects are where unexamined assumptions cause the most wasted work. The design can be short (a few sentences for truly simple projects), but you MUST present it and get approval.

## Checklist

1. **Explore project context** — check files, docs, recent commits
2. **Ask clarifying questions** — one at a time, understand purpose/constraints/success criteria
3. **Propose 2-3 approaches** — with trade-offs and your recommendation
4. **Present design** — in sections scaled to their complexity, get user approval after each section
5. **Write design doc** — save to `docs/specs/YYYY-MM-DD-<topic>-design.md` (or project convention)
6. **User reviews written spec** — ask user to review the spec file before proceeding
7. **Transition to implementation** — create implementation plan (writing-plans or equivalent)

## Process

**Understanding the idea:**
- Check out the current project state first (files, docs, recent commits)
- If the request describes multiple independent subsystems, flag this and help decompose first
- Ask questions one at a time to refine the idea
- Prefer multiple choice when possible
- Focus on: purpose, constraints, success criteria

**Exploring approaches:**
- Propose 2-3 different approaches with trade-offs
- Present options conversationally with your recommendation and reasoning
- Lead with your recommended option and explain why

**Presenting the design:**
- Scale each section to its complexity: a few sentences if straightforward, up to 200-300 words if nuanced
- Ask after each section whether it looks right so far
- Cover: architecture, components, data flow, error handling, testing
- Be ready to go back and clarify if something doesn't make sense

**Design for isolation and clarity:**
- Break the system into smaller units with one clear purpose each
- For each unit: what does it do, how do you use it, what does it depend on?
- Can someone understand what a unit does without reading its internals?

**Working in existing codebases:**
- Explore the current structure before proposing changes. Follow existing patterns.
- Include targeted improvements only when existing code problems affect the work
- Don't propose unrelated refactoring

## Key Principles

- **One question at a time** — Don't overwhelm with multiple questions
- **Multiple choice preferred** — Easier to answer when possible
- **YAGNI ruthlessly** — Remove unnecessary features from all designs
- **Explore alternatives** — Always propose 2-3 approaches before settling
- **Incremental validation** — Present design, get approval before moving on
