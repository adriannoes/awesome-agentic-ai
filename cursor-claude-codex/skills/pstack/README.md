# pstack (vendored)

**Source:** [cursor/plugins — pstack](https://github.com/cursor/plugins/tree/main/pstack)  
**Author:** Lauren Tan ([@poteto](https://x.com/poteto))  
**License:** MIT (see [LICENSE](./LICENSE))  
**Vendored:** pstack **0.15.5** @ commit `adf3218ca2f5b9971eedc07a76bef22df7701539`  
**Hub guide:** [guide/](./guide/) — usage pages for each command (hub-authored)

## What pstack is

Rigorous agent workflows for shipping less but higher-quality code. `/poteto-mode` picks from 23 playbooks, routes to specialized skills (how, why, architect, arena, interrogate, tdd, …), and applies 23 engineering principles by name.

**Install in Cursor (recommended):**

```bash
/add-plugin pstack
```

Then run `/setup-pstack` once and use `/poteto-mode` for non-trivial work.

## What this folder contains

| Content | Count | Notes |
|---|---:|---|
| Command skills | 24 | Invoked as `/poteto-mode`, `/how`, `/why`, … |
| Principle skills | 23 | `principle-*` — referenced by name mid-task |
| Playbooks | 23 | Under `poteto-mode/playbooks/` — matched by `/poteto-mode` |
| Agents | 2 | `poteto-agent`, Comment Sicko |
| Usage guide | 24 pages | [guide/commands/](./guide/commands/) — **not** `SKILL.md`; hub-authored |

**Total:** 47 `SKILL.md` packages in this folder.

## Important: copying vs installing

Copying a `SKILL.md` from this folder into another project **does not** give you:

- The `poteto-agent` and Comment Sicko subagents ([agents/](./agents/))
- The model configuration rule from `/setup-pstack` (`~/.cursor/rules/pstack-models.mdc`)
- Plugin-only integrations (`cursor-team-kit`, `benny` automations)

For the full experience, install the plugin. Use this folder to **read**, **study**, and **link** from the hub.

## Quick start (two steps)

1. [`/setup-pstack`](./setup-pstack/SKILL.md) — pick reasoning budget and models per role.
2. [`/poteto-mode`](./poteto-mode/SKILL.md) — describe the goal; let it pick the playbook.

Full walkthrough: [guide/README.md](./guide/README.md).

## Command index

| Command | Use it when | Guide |
|---|---|---|
| `/poteto-mode` | Default entry for rigorous engineering | [guide/commands/poteto-mode.md](./guide/commands/poteto-mode.md) |
| `/how` | How does X work? placement / layering | [guide/commands/how.md](./guide/commands/how.md) |
| `/why` | Why was it built this way? cited rationale | [guide/commands/why.md](./guide/commands/why.md) |
| `/recall` | Catch up on recent work on a topic | [guide/commands/recall.md](./guide/commands/recall.md) |
| `/blast-radius` | What else could this change break? | [guide/commands/blast-radius.md](./guide/commands/blast-radius.md) |
| `/architect` | Settle types and module shape before code | [guide/commands/architect.md](./guide/commands/architect.md) |
| `/arena` | Parallel candidates, pick base, graft best parts | [guide/commands/arena.md](./guide/commands/arena.md) |
| `/swarm` | Parallel workers, one aggregated report | [guide/commands/swarm.md](./guide/commands/swarm.md) |
| `/interrogate` | Multi-model adversarial review of a diff | [guide/commands/interrogate.md](./guide/commands/interrogate.md) |
| `/automate-me` | Draft your personal `-mode` skill | [guide/commands/automate-me.md](./guide/commands/automate-me.md) |
| `/make-bot-ui` | Webhook Grok Bot dashboard + Tailscale | [guide/commands/make-bot-ui.md](./guide/commands/make-bot-ui.md) |
| `/setup-pstack` | Configure models per role | [guide/commands/setup-pstack.md](./guide/commands/setup-pstack.md) |
| `/reflect` | Capture learnings as skill edits | [guide/commands/reflect.md](./guide/commands/reflect.md) |
| `/teach` | Understand a change (how + why woven) | [guide/commands/teach.md](./guide/commands/teach.md) |
| `/tdd` | Failing test first when path is cheap | [guide/commands/tdd.md](./guide/commands/tdd.md) |
| `/no-comments` | Comment Sicko + strip before review | [guide/commands/no-comments.md](./guide/commands/no-comments.md) |
| `/typescript-best-practices` | Reading or editing `.ts` / `.tsx` | [guide/commands/typescript-best-practices.md](./guide/commands/typescript-best-practices.md) |
| `/figure-it-out` | No playbook fits — design an auditable one | [guide/commands/figure-it-out.md](./guide/commands/figure-it-out.md) |
| `/show-me-your-work` | Decision trail TSV for long runs | [guide/commands/show-me-your-work.md](./guide/commands/show-me-your-work.md) |
| `/create-verification-skill` | Generate project-local verify skill | [guide/commands/create-verification-skill.md](./guide/commands/create-verification-skill.md) |
| `/maintain-verification-skill` | Audit verify skill vs live app | [guide/commands/maintain-verification-skill.md](./guide/commands/maintain-verification-skill.md) |
| `/unslop` | Remove AI tells from writing | [guide/commands/unslop.md](./guide/commands/unslop.md) |
| `/bro` | Restate last message in plain language | [guide/commands/bro.md](./guide/commands/bro.md) |
| `/technical-writing` | Docs, RFCs, PRs, commits to layered standard | [guide/commands/technical-writing.md](./guide/commands/technical-writing.md) |

Also see: [guide/playbooks.md](./guide/playbooks.md) · [guide/principles.md](./guide/principles.md) · [guide/agents.md](./guide/agents.md)

## Not vendored here

- Official guide images (`docs/guide/images/`)
- `automations/benny/` automation pack
- `cursor-team-kit` skills (`/deslop`, `control-cli`, `control-ui`) — install that plugin separately

## Refresh

Follow [cursor-claude-codex/MAINTENANCE.md](../../MAINTENANCE.md). Diff against the pinned upstream commit; update [NOTICE.md](./NOTICE.md) and [guide/](./guide/) when commands change.

## Related

- Upstream README: [pstack on GitHub](https://github.com/cursor/plugins/tree/main/pstack)
- Unofficial Korean guide (book): [pstack-guide-ko](https://github.com/jayjongcheolpark/pstack-guide-ko)
- Catalog entry: [upstream-repos-catalog.md](../../references/upstream-repos-catalog.md)
