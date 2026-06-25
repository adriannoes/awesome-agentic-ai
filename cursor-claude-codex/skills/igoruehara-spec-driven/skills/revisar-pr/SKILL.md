---
name: revisar-pr
description: Use to review a PR/MR against the SDD standard — it checks process conformance: an approved spec for the change, each AC-N with a green test, no open SPEC_DEVIATION, ADRs for irreversible decisions, glossary/context-map updated, and the DoD met. Posts the result as a comment on the PR/MR via the GitHub/GitLab MCP (if connected). Complements the harness /code-review (which hunts for bugs). Trigger with /revisar-pr.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Review PR/MR (SDD conformance gate)

It checks the **process**, not the bugs. For bugs/quality, use the harness `/code-review` — this skill verifies that the change respects the SDD pipeline before merging. The two complement each other.

## Identify the target
- The PR/MR (number/branch) and the corresponding `specs/NNNN-<name>/` feature.
- If the GitHub/GitLab MCP is connected (validated account — see `/integracoes`), read the diff and metadata through the MCP. **If there is no git host MCP**, offer to run `/integracoes` to connect (it enables reading metadata and posting the verdict on the PR/MR); if declined, proceed with the local diff (`git diff <base>...HEAD`).

## SDD conformance checklist
- [ ] **Spec exists and is approved** for the change's scope (correct tier for the size/risk).
- [ ] **Traceability:** every touched `AC-N` has a test; the diff includes the tests covering the ACs.
- [ ] **Green gates:** the commands in `docs/engineering/TESTING.md` pass (or CI is green).
- [ ] **No `SPEC_DEVIATION`** open without resolution.
- [ ] **ADRs** recorded for hard-to-reverse decisions introduced in the PR.
- [ ] **Living docs:** glossary/context-map updated if the language/boundaries changed.
- [ ] **Scope:** nothing from the spec's "Out of scope" was implemented; the change is cohesive (one purpose).
- [ ] **STATE.md** updated, if the next step changed.

## Verdict
- A clear result: **approve** or **changes requested** (list of what is missing, with a link to spec/AC).
- If the GitHub/GitLab MCP is connected and validated, **offer to post** it as a comment on the PR/MR
  (outward-facing — confirm first; reconfirm account/workspace, see `/integracoes`).
- Suggest running `/code-review` (harness) for the bug/quality layer.
