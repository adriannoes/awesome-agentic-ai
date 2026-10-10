# Subagents

pstack ships two subagents used by skills in this package. They are **not** installed by copying `SKILL.md` files alone — install the [pstack plugin](https://github.com/cursor/plugins/tree/main/pstack) in Cursor (`/add-plugin pstack`) or copy these agent files into your project's agent configuration.

## poteto-agent

**When to use:** Spawn when you want poteto's full agent style in a background subagent, equivalent to routing through `/poteto-mode`.

**How to spawn:** `subagent_type: "poteto-agent"` in a Task tool call.

**Behavior:** Reads [`../poteto-mode/SKILL.md`](../poteto-mode/SKILL.md) in full (including the inline Principles index) before any work. Substituting `generalPurpose` skips that read and drifts.

| | |
|---|---|
| Local agent file | [`../agents/poteto-agent.md`](../agents/poteto-agent.md) |
| Upstream | [agents/poteto-agent.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/agents/poteto-agent.md) |

## Comment Sicko

**When to use:** Read-only comment review on a diff. Usually invoked through [`/no-comments`](./commands/no-comments.md), not directly.

**How to spawn:** `subagent_type: "Comment Sicko"` (or via `/no-comments`).

**Behavior:** Flags narration, banners, commented-out code, and workaround sermons. Marks symbols `MUST KILL` when structure should replace prose. Does not write application code.

| | |
|---|---|
| Local agent file | [`../agents/comment-sicko.md`](../agents/comment-sicko.md) |
| Upstream | [agents/comment-sicko.md](https://github.com/cursor/plugins/blob/adf3218ca2f5b9971eedc07a76bef22df7701539/pstack/agents/comment-sicko.md) |
