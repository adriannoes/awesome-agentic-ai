---
name: validar
description: Use AFTER implementing a feature to validate it (UAT) — runs the gates from docs/engineering/TESTING.md, maps each AC-N to its test and flags ACs without coverage, resolves pending SPEC_DEVIATION, checks the Definition of Done, and updates docs/STATE.md. Trigger with /validar.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Validate feature (UAT)

Closes the SDD loop: it proves the implementation satisfies the **spec** through the **executable gate** — not by inspection. Run it after implementing (it can be in another session).

## Process
1. **Identify the feature** (`specs/NNNN-<name>/`) and read `spec.md` + `tasks.md`.
2. **Run the gates** from `docs/engineering/TESTING.md` (and the commands in the Gate column of `tasks.md`). Claude Code's built-in `/verify` helps validate real behavior.
3. **Map `AC-N → test`** and show the table; **flag any AC without coverage or failing**.
   If the spec has a **decision matrix**, each row is a test case: check that **every row** has a matching test (combinations are where bugs slip through the most).
4. **SPEC_DEVIATION:** resolve pending ones — either fix the code (the spec wins) or consciously update the spec (and record an ADR if it is hard to reverse). If the "fix vs update" decision has branches (it affects other ACs, boundaries, ADRs), run **`/clarificar`** to close the tree before choosing.
5. **Definition of Done** (see `README.md` / `CLAUDE.md`): ACs green per the gate, no open deviation, ADRs recorded, glossary/context-map updated, spec faithful.
6. **Update `docs/STATE.md`** (next step / decisions) — or run `/handoff` to wrap up.

## Output
A clear verdict: **ready to merge** or the list of what is missing (AC without coverage, open deviation, pending DoD item). If a validated write MCP is available, offer to update the feature's issue/page.
