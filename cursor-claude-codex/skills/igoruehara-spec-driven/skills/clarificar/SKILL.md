---
name: clarificar
description: Use for a GRILLING SESSION — a relentless interview that turns diffuse intent into shared understanding before building. It walks the decision tree ONE question at a time, resolving dependencies between choices, always with a recommended answer; it explores the codebase/docs instead of asking when the answer already exists. Ideal at the spec gate (testable ACs / Definition of Ready) and the design gate (hard-to-reverse decision). It produces an understanding summary that feeds product.md/design.md/spec.md. Called by /nova-feature, /kickoff, /roadmap, and /validar, or trigger directly with /clarificar.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Clarify (plan/spec grilling)

A relentless interview to **sharpen a plan, a spec, or a design** before building. The target is
**shared understanding**: no ambiguity that turns into rework or `SPEC_DEVIATION` later.
Inspired by the *grilling* technique — adapted to the pipeline's vocabulary (testable ACs, tier,
hard-to-reverse decision → ADR, ubiquitous language).

> **When to use this and not "short batches":** the rest of the pipeline asks in **batches**
> (`AskUserQuestion`) for **independent** choices. The grilling is the opposite and the complement:
> for a **decision tree with dependencies**, where answer 3 only makes sense after answers 1 and 2.
> Use when the ambiguity is **deep and branched**, not when the options are orthogonal.

## Principles (the engine)
- **One question at a time.** Ask the question, **wait for the answer**, and only then the next one.
  Several questions at once confuse and prevent each answer from refining the next.
- **Walk the tree.** Each answer opens/closes branches. Resolve **dependencies in order**: don't ask
  "how" before "whether", nor the detail before the boundary.
- **Always propose a recommended answer.** Don't interrogate in a vacuum — for each question give your
  recommendation with the rationale (in `AskUserQuestion`, the first option carries "(Recommended)").
- **Explore before asking.** If the answer is in the **codebase, the docs (`specs/`, `docs/`, ADRs,
  glossary) or a connected reference MCP**, find it yourself — only ask what requires a human decision.
  (This is the *knowledge verification* of `CLAUDE.md`.) Never invent: explicit uncertainty > confident guess.
- **Dig down to the testable.** A vague answer ("fast", "secure", "several") **does not close the
  branch** — refine it until it becomes a verifiable criterion (a number, a concrete case, Given/When/Then).

## Process
1. **Frame the target.** State in 1-2 lines what is being grilled (this feature / this design /
   this priority) and what will count as "understood enough to proceed".
2. **Raise the open branches.** From the existing material, mentally list the open decisions and the
   ambiguities. Prioritize the **highest impact / hardest to reverse**.
3. **Grill, one branch at a time.** For each point: explore first; if a decision remains, ask **one**
   thing with the recommendation; integrate the answer; let it open the next branches. Repeat.
4. **Stop when the tree closes** — no open branches that change what will be built. Don't extend for
   sport; once the user and you agree on the scope, end it.

## Output — the understanding becomes an artifact
The grilling **doesn't end in chat**: consolidate the result to feed the pipeline.
- **Understanding summary:** closed decisions, non-goals that emerged, assumptions, and risks.
- **Direct to the right destination** according to what was clarified:
  - became an **acceptance criterion** → `spec.md` (Given/When/Then; multi-factor rule → Decision Matrix);
  - became a **hard-to-reverse decision** → becomes an **ADR** (`docs/architecture/adr/`);
  - became a **business term** → `docs/glossary.md` / `domain.md`;
  - **left open on purpose** → `docs/STATE.md` (with the trigger to reconsider).
- Point to the next step of whoever called you (fill in the gate, resume `/nova-feature`, etc.).
