---
name: auditar
description: Use to audit the conformance of the SDD pipeline — runs the structural validator (frontmatter, links, specs) and checks what requires judgment (AC→test→commit traceability, DoD, orphan specs, live docs up to date). Reports violations with the file. Trigger with /auditar.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Audit the SDD pipeline

Checks whether the project follows the pipeline standard. Two layers: **structural** (script, deterministic)
and **semantic** (agent judgment).

## 1. Structural check (deterministic)
Run the validators and report the output:
```
node scripts/audit-esteira.mjs .
node scripts/validate-mermaid.mjs .
```
The first covers: frontmatter present + correct dialect (`alwaysApply` in docs; `name`+`description`
in skills), broken relative links, and every `specs/NNNN-*/` with a `spec.md`. The second validates
the Mermaid blocks (type, quotes, delimiters). Exit ≠ 0 on either = failure.

## 2. Semantic check (judgment)
The script does not catch everything. Also verify:
- **Traceability:** each `AC-N` in the spec appears in `tasks.md` ("Covers AC" column) and has a test?
- **Orphan specs:** features in `specs/` with no corresponding PR/implementation, or stalled for a while
  (cross-check with `STATE.md`).
- **Live docs:** do the glossary and `context-map.md` reflect the current terms/boundaries? Do ADRs cover
  the hard-to-reverse decisions already made?
- **Pending DoD:** features marked as done with an open `SPEC_DEVIATION` or an AC without a test.
- **`alwaysApply` frontmatter:** what is foundational is `true`; the rest `false` with a `description` that says when to pull it.

## Output
List the violations by file, separating **structural** (fix now) from **semantic** (review).
Offer to fix the trivial ones (frontmatter, links). Do not invent conformance — report what you found.

> This skill is the human/agent counterpart of the CI gate (`/setup-ci` runs the same script).
