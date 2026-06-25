---
name: evals
description: Use to evaluate how faithfully the implementation matches the spec — runs the eval that checks whether each AC-N is covered by a task and referenced in a test, counts SPEC_DEVIATION and reports a score per feature. Trigger with /evals.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Spec→code fidelity evals

Measures whether **what was built reflects the spec** — the quality metric of the agent's output.
Two layers: deterministic (script) and judgment.

## 1. Deterministic layer
```
node scripts/eval-spec-fidelity.mjs .
```
Reports, per feature: total ACs, **covered by a task**, **referenced in test/code**, and
open **SPEC_DEVIATION**. Fails (exit 1) if any AC has no task — broken traceability.
Reference in test is a warning until the feature is implemented.

## 2. Judgment layer (the script does not catch this)
- Does the test for each `AC-N` actually exercise the **Given/When/Then** — or does it just cite the ID in an empty test?
- Does the implementation cover the **edge cases** and respect the spec's **"Out of scope"**?
- Do the open `SPEC_DEVIATION` items have a resolution (fix the code **or** update the spec/ADR)?

## Output
Score per feature + the gaps. It complements `/validar` (UAT for a single feature) with a
**portfolio fidelity** view. The same eval runs in CI (`esteira.yml`) — here it is the judgment counterpart.
