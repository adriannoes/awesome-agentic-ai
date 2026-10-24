# EveryInc/every-hiring-automations-kit-public (vendored)

**Source:** [EveryInc/every-hiring-automations-kit-public](https://github.com/EveryInc/every-hiring-automations-kit-public)
**License:** No SPDX license declared upstream (Oct 2026) — hiring workflow **prompts and blueprints only**; no executable ATS. Keep candidate data, credentials, and completed worksheets **out of git** (per upstream README).
**Vendored:** 2026-10-15 — full public kit @ commit `4ecc464` (~228 KB): four `SKILL.md` packages + `START_HERE.md`, worksheets, blueprints, and test plan.

## What it is

A **Codex-oriented hiring operations kit** from [Every](https://every.to/): scorecards, Slack screening, stage-aware candidate email templates, operator send safeguards, and phone-screen prep — designed to be wired to **your** Slack, Gmail, Google Calendar, Notion, and optional Drive. Nothing in the distributable repo installs schedulers or stores live candidate data; operators configure connectors and approve each automation step (`START_HERE.md`).

## Layout

| Path | Contents |
|------|----------|
| [START_HERE.md](./START_HERE.md) | Operator onboarding: connect sources, verify identities, no writes until approved |
| [CUSTOMIZATION_WORKSHEET.md](./CUSTOMIZATION_WORKSHEET.md) | Role, schema, sender, Slack actor ID, templates (fill locally) |
| [HIRING_PLAN_TEMPLATE.md](./HIRING_PLAN_TEMPLATE.md) | Blank hiring plan / scorecard / JD scaffold |
| [AUTOMATION_BLUEPRINTS.md](./AUTOMATION_BLUEPRINTS.md) | Intake, scoring, reaction decisions, prep, recovery modules |
| [TEST_PLAN.md](./TEST_PLAN.md) | Controlled rollout scenarios (synthetic data only) |
| [skills/candidate-screening/](./skills/candidate-screening/SKILL.md) | Evidence-backed screening scorecards → Slack |
| [skills/operator-hiring-comms/](./skills/operator-hiring-comms/SKILL.md) | Sender verification, history, approval before send |
| [skills/candidate-hiring-comms/](./skills/candidate-hiring-comms/SKILL.md) | Stage-aware candidate email drafting |
| [skills/phone-screen-prep/](./skills/phone-screen-prep/SKILL.md) | Calendar match, blank scorecards, meeting-notes blocks |

## Install in this hub

Open this folder in the agent workspace and ask the agent to read `START_HERE.md` first, then load the skills your installation discovers (all four under `skills/`).

Upstream repo (updates):

```bash
git clone https://github.com/EveryInc/every-hiring-automations-kit-public.git
```

Copy or symlink `skills/*` into `.cursor/skills/`, `~/.claude/skills/`, or `~/.agents/skills/` only together with the root worksheets — skills assume the kit files on disk.

## Pairs with

- [business-automation/](../business-automation/) — generic n8n/Zapier/email automation (breadth); this kit is **hiring-specific** with human-in-the-loop send gates
- [igoruehara-spec-driven/](../igoruehara-spec-driven/) · [product-management/](../../product-management/) — spec/PRD discipline for role definitions; hiring plan template is the HR-facing counterpart
- [plain-writing/](../plain-writing/) — clear candidate-facing prose

## Security & privacy

- **PII:** Do not commit worksheets, ledgers, or candidate content. Upstream requires restricted Notion/Slack and supervised tests before live sends.
- **Automation risk:** Reaction-triggered email and intake modules need verified Slack actor IDs, deduplication ledgers, and explicit activation approval — see README limitations in [upstream](https://github.com/EveryInc/every-hiring-automations-kit-public/blob/main/README.md).
- **Hub audit:** Markdown-only skills; no bundled `postinstall` scripts. Connector permissions are entirely in the operator’s environment.

## Refresh

```bash
UPSTREAM=/tmp/every-hiring-kit-upstream
DEST=cursor-claude-codex/skills/every-hiring-automations-kit
rm -rf "$UPSTREAM"
git clone --depth 1 https://github.com/EveryInc/every-hiring-automations-kit-public.git "$UPSTREAM"
rsync -a --delete \
  --exclude 'README.md' \
  "$UPSTREAM/" "$DEST/"
# restore this README.md from git if overwritten
```

## Attribution

Vendored from [EveryInc/every-hiring-automations-kit-public](https://github.com/EveryInc/every-hiring-automations-kit-public). Public Notion hiring plan template linked from upstream README.

Full catalog entry: [cursor-claude-codex/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#everyincevery-hiring-automations-kit-public).
