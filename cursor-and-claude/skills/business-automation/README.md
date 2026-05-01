# Business Automation skills

**Source:** [jeremylongshore/claude-code-plugins-plus-skills](https://github.com/jeremylongshore/claude-code-plugins-plus-skills) · originally `skills/19-business-automation/`
**License:** MIT — Jeremy Longshore <jeremy@intentsolutions.io>
**Scope:** 25 agent skills for workflow automation, spreadsheets, messaging, and document generation.

## Honest assessment

These are **breadth-first starting-point skills**, not deep opinionated playbooks. Each `SKILL.md` follows the same template (Overview / When to Use / Instructions / Examples / Prerequisites / Error Handling / Resources) and relies on Claude's general knowledge of the target tool rather than shipping its own playbook.

They are most useful as:
- **Trigger shims** — naming conventions that help skill auto-activation fire on the right prompts (pair with [cursor-and-claude/references/skill-auto-activation.md](../../references/skill-auto-activation.md))
- **A coverage checklist** — a menu of 25 automation outputs you might not have considered
- **A starting point** — fork and deepen individual SKILL.md files when you actually use them

Natural companion: our [n8n-templates/](../../../n8n-templates/) folder ships 23 runnable n8n workflows; [n8n-workflow-generator](./n8n-workflow-generator/SKILL.md) here is the Claude-side prompt helper to design new ones.

## Skills (25)

### Workflow platforms

- [n8n-workflow-generator](./n8n-workflow-generator/SKILL.md) — pairs with our [n8n-templates/](../../../n8n-templates/)
- [zapier-integration-helper](./zapier-integration-helper/SKILL.md)
- [make-scenario-creator](./make-scenario-creator/SKILL.md)
- [approval-workflow-generator](./approval-workflow-generator/SKILL.md)

### Messaging & notifications

- [slack-bot-creator](./slack-bot-creator/SKILL.md)
- [discord-bot-generator](./discord-bot-generator/SKILL.md)
- [teams-webhook-sender](./teams-webhook-sender/SKILL.md)
- [notification-dispatcher](./notification-dispatcher/SKILL.md)

### Email

- [email-parser](./email-parser/SKILL.md)
- [email-template-generator](./email-template-generator/SKILL.md)

### Spreadsheets

- [excel-formula-generator](./excel-formula-generator/SKILL.md)
- [excel-macro-creator](./excel-macro-creator/SKILL.md)
- [google-sheets-automation](./google-sheets-automation/SKILL.md)
- [csv-processor](./csv-processor/SKILL.md)

### Documents

- [pdf-generator](./pdf-generator/SKILL.md)
- [pdf-parser](./pdf-parser/SKILL.md)
- [document-merger](./document-merger/SKILL.md)
- [invoice-generator](./invoice-generator/SKILL.md)
- [report-generator](./report-generator/SKILL.md)
- [batch-file-processor](./batch-file-processor/SKILL.md)

### Scheduling & forms

- [calendar-event-creator](./calendar-event-creator/SKILL.md)
- [meeting-scheduler-helper](./meeting-scheduler-helper/SKILL.md)
- [reminder-system-creator](./reminder-system-creator/SKILL.md)
- [form-builder-helper](./form-builder-helper/SKILL.md)
- [survey-creator](./survey-creator/SKILL.md)

## Installation (upstream)

If you'd rather install from the source marketplace than use our vendored copy:

```bash
/plugin marketplace add jeremylongshore/claude-code-plugins
```

## Attribution

Vendored as-is from upstream on 2026-04-21. Original category name: `19-business-automation`. See [cursor-and-claude/references/upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#jeremylongshoreclaude-code-plugins-plus-skills) for the full catalog entry.
