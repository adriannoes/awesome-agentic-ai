---
name: integrations
description: Team tools and MCPs. Pull when integrating Jira/Confluence/cloud.
alwaysApply: false
---

> **Translation note:** Originally authored in Portuguese (pt-BR) by Igor Uehara ([igoruehara/spec-driven](https://github.com/igoruehara/spec-driven), MIT). Translated to English by this hub to keep the repository language consistent. Original content unchanged in meaning; see the upstream repo for the pt-BR source.

# Integrations and MCPs — <project name>

> Tools the team already uses and the **MCP servers** proposed to connect them to Claude Code,
> helping to **run, document, and integrate** without leaving the flow. Generated at kickoff.

## Team tools
| Category          | Tool                  | Process / observation            |
|--------------------|-----------------------|----------------------------------|
| Project management | <Jira/Trello/Linear>  | <Scrum / Kanban / Waterfall>     |
| Documentation      | <Confluence/Notion/Evernote> | <where the living docs live> |
| Code & CI          | <GitHub/GitLab/Bitbucket> | <PR/MR flow>                  |
| Cloud              | <AWS/GCP/Azure>       | <regions, accounts>              |
| Observability      | <Datadog/Sentry/Grafana> | <where alerts land>           |
| Communication      | <Slack/Teams>         | <alerts/incidents channel>       |

## Proposed MCPs
> Verify the current name/availability of each server in the official docs before configuring.
> **Account/workspace** is the validated destination of the connection — confirm it is the project's (not the personal one).

| Tool              | MCP server (proposed)         | Account/workspace (validated) | What it enables                     | Status   |
|-------------------|-------------------------------|-------------------------------|-------------------------------------|----------|
| Jira / Confluence | Atlassian (official)          | <project workspace>           | read/create issues and pages; sync  | proposed |
| Notion            | Notion (official)             | <business, not personal>      | publish vision/roadmap; search docs | proposed |
| GitHub            | GitHub (official)             | <org/repo>                    | PRs, issues, code review, releases  | proposed |
| GitLab            | GitLab (official/community)   | <group/project>               | MRs, issues, pipelines              | proposed |
| AWS               | AWS Labs MCP                  | <account/profile>             | query resources, costs, docs        | proposed |
| GCP               | Google Cloud MCP / Toolbox    | <project>                     | resources, data                     | proposed |
| Azure             | Azure MCP (official)          | <subscription>                | resources, deploy                    | proposed |
| Sentry / Datadog  | Sentry / Datadog MCP          | <org>                         | errors, metrics, alerts in context  | proposed |
| Slack             | Slack MCP                     | <workspace/channel>           | notify status/alerts to the team    | proposed |
| Libs / APIs       | Context7 MCP                  | (public)                      | lib lookup in the knowledge check (`CLAUDE.md`) | proposed |

## How to connect (summary)
- **Project-scoped:** `.mcp.json` at the repo root — shareable with the team. **No secrets.**
- **Secrets:** via environment variable or `claude mcp add`. **Never** commit tokens.
- Remote/hosted servers (`type: http`) usually use OAuth; local ones use `command`+`args`.

## Flows this unlocks
- Approved spec in `specs/NNNN/` → opens/updates an issue in Jira/Linear.
- `vision.md` / `roadmap.md` → publishes/updates in Notion/Confluence.
- New ADR → comments on the GitHub/GitLab PR.
- Observability alert → summary in Slack with a link to the feature/spec.
