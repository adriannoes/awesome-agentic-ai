---
name: integracoes
description: Use to survey the team's tools (Jira, Confluence, Notion, GitHub, cloud, observability), connect the MCPs securely, pull read inputs, and define the write flows (repo → tool). It generates docs/engineering/integrations.md and, if approved, .mcp.json, and registers the validated MCPs in the routing (the "Connected tools (MCP)" block of CLAUDE.md + tools-aware skills). Run BEFORE /kickoff to feed the artifacts with real data (read-first), or AFTER, once the tooling is known. Re-runnable. Trigger with /integracoes.
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Skill: Team integrations and MCPs

This skill is **orthogonal to the kickoff** — you don't always know the tooling when starting the
project. Run it when you do. It is **idempotent**: re-running updates `docs/engineering/integrations.md`.

**When to run:**
- **Before `/kickoff` (ideal):** the read MCPs feed `vision`/`assessment`/`context-map`
  with real data (read-first).
- **After, at any time:** when the tooling became known, or to set up writing.
  If the kickoff already ran and you pull new inputs here, **offer to enrich** the existing artifacts
  (context-map, glossary, assessment), citing the source.

## Principles
- **Connection lock (MCP):** an already-active connection does **not** authorize use. Always confirm
  **which account/workspace** it points to before reading — and reconfirm before **any write**. Using
  the wrong account (e.g.: personal Notion instead of business) reads the wrong context and, on write,
  **leaks project data** outside the work context.
- Outward-facing actions (connect, publish, create issue) → **confirm first**.
- *Tools-aware:* only use an MCP available in the session (`mcp__<server>__*`); otherwise, document it and proceed.

## Phase 1 — Survey the team's tools
Batches of `AskUserQuestion`:
- **Management and process:** Jira / Trello / Linear / Azure DevOps (+ **Scrum / Kanban / Waterfall**).
- **Documentation:** Confluence / Notion / Evernote / Google Docs.
- **Code and CI:** GitHub / GitLab / Bitbucket. **Cloud:** AWS / GCP / Azure.
- **Observability and communication:** Datadog / Sentry / Grafana; Slack / Teams.
- **Libs/APIs:** Context7 (lookup in the knowledge verification of `CLAUDE.md`).

## Phase 2 — Read connection (read-first) + safety lock
For the read tools (Confluence, Jira, Notion, GitHub, cloud), check whether the MCP is already
available in the session (`mcp__<server>__*`):
- **Already connected → ⚠️ safety lock, do NOT use directly.** It may point to the wrong account.
  1. **Identify the account/workspace** (if the MCP exposes it — e.g.: fetch the current workspace/user)
     and show it to the user. If it can't be verified, treat it as **unconfirmed**.
  2. Ask (`AskUserQuestion`): **use this connection** (workspace X) · **reconnect / switch account**
     (personal → business) · **use another tool** · **skip this source**.
  3. Only proceed after explicit confirmation. Record the account/workspace in `integrations.md`.
- **Not connected** → ask whether to connect. ⚠️ Adding a new MCP (`.mcp.json` /
  `claude mcp add`) usually **only takes effect after reconnecting the session**. Offer:
  - **(a)** connect now → reopen the session → run `/integracoes` (or `/kickoff`) again; or
  - **(b)** proceed without connecting → becomes an adoption roadmap item. Document in `integrations.md`.

**Pull the available inputs** (only from already-connected and validated MCPs) and cite the source (link/ID):
- Confluence / Notion: business decisions, vision, domain, architecture.
- Jira / Linear: epics, current roadmap, open stories.
- GitHub / cloud: code and infra context (as-is).

## Phase 3 — Write plan (write-side)
1. **Map each tool to the MCP server** (table in `docs/engineering/_templates/integrations.template.md`).
   Verify the name/availability in the official docs — do not invent package names.
2. **Define the write flows and when they fire** — rule: **read early, write at the gate**:
   - "Approved" gate of vision/design/spec/roadmap → publish to Confluence/Notion.
   - Breakdown of `tasks.md` → create issues/subtasks in Jira/Linear.
   - New ADR → comment on the GitHub/GitLab PR. Event (approved/merged) → Slack/Teams.
   - Writing is always **repo → tool** (one way); store the back-reference key (`jira:`, `confluence:`).
   - ⚠️ **Before the first write**, reconfirm the destination account/workspace (same lock).
3. **Scaffolding (confirm first).** If approved, generate `.mcp.json` at the root with placeholders,
   **no secrets** (tokens via env / `claude mcp add`). Do not commit credentials.

## Phase 4 — Generate/update `docs/engineering/integrations.md`
From `docs/engineering/_templates/integrations.template.md`: tools, MCPs, validated account/workspace,
read/write flows, and status. If the kickoff already ran and you pulled new inputs, offer to enrich
`context-map.md` / `glossary.md` / `assessment.md` with what you found (citing the source).

## Phase 5 — Register in the routing (rules + skills)
A validated connection **is not enough**: the rest of the pipeline needs to **know** it exists and who
uses it.
1. **CLAUDE.md (rules):** update the **"Connected tools (MCP)"** block with the validated servers —
   `mcp__<server>__*`, account/workspace, and which skills consume each one. Since `CLAUDE.md` is
   `alwaysApply: true`, every session now carries this routing.
2. **Skills (routing):** confirm that the tools-aware skills point to the right MCPs —
   `/nova-feature` (Jira/Linear/Confluence/Notion), `/revisar-pr` (GitHub/GitLab), `/publicar-*`
   (Confluence/Notion). Do not duplicate logic: the skills check `mcp__<server>__*` at runtime.
3. **Agentic layer:** if the new tools call for new artifacts (`/spec-to-jira` skill, subagent,
   publish hook), **delegate to `/camada-agentica`** (proposes with justification, generates only
   what is approved). Unapproved items become adoption roadmap items.

## Closing
- Summarize with clickable links and list the MCPs that entered the routing (`CLAUDE.md`).
- Next step: if `/kickoff` hasn't run yet, suggest running it now (with the read MCPs already
  connected, the artifacts come out with real data). Otherwise, point to `/nova-feature`. If you
  registered new tools, consider `/camada-agentica` to tune the pipeline to them.
