# OpenClaw Ecosystem

Reference index for [OpenClaw](https://github.com/openclaw/openclaw) — a locally-running AI assistant that operates directly on your machine. Skills extend its capabilities for external services, automation, and specialized tasks.

**See also:** [README.md](../README.md) (project overview) · [cursor-claude-codex/README.md](../cursor-claude-codex/README.md) (Cursor, Claude Code & Codex) · [skills/README.md](./skills/README.md) (skills index)

## Vendored upstream indexes

To survive upstream changes or deletions, we keep local snapshots of the two community indexes this folder depends on:

| Index | Local snapshot | Upstream |
|-------|----------------|----------|
| Derivatives (35+ OpenClaw-inspired agents) | [awesome-claws/](./awesome-claws/) | [machinae/awesome-claws](https://github.com/machinae/awesome-claws) (MIT) |
| Curated skills (5,400+ organized in 30 categories) | [awesome-openclaw-skills/](./awesome-openclaw-skills/) | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) (MIT) |

For the **latest** index, read upstream. For a **stable reference**, read our local copy. The derivatives table and skills index below are compiled from these snapshots.

**Refresh cadence:** Re-sync both snapshots quarterly (see [cursor-claude-codex/MAINTENANCE.md](../cursor-claude-codex/MAINTENANCE.md)). After `rsync`, spot-check category file counts in [awesome-openclaw-skills/categories/](./awesome-openclaw-skills/categories/) against upstream `README.md`.

## OpenClaw Derivatives

Curated list from [machinae/awesome-claws](https://github.com/machinae/awesome-claws) ([local snapshot](./awesome-claws/UPSTREAM-README.md)). AI agents inspired by OpenClaw:

| Project | Language | Description |
|---------|-----------|-------------|
| [OpenClaw](https://github.com/openclaw/openclaw) | TypeScript | Original full-featured assistant: multi-agent routing, voice wake, live canvas, 15+ messaging channels |
| [PicoClaw](https://github.com/sipeed/picoclaw) | Go | Ultra-efficient for low-cost hardware, single-binary deploy, old Android support |
| [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw) | Rust | Trait-driven, zero-overhead AI infrastructure, swappable core |
| [nanobot](https://github.com/HKUDS/nanobot) | Python | Ultra-lightweight, research workflows, one-click deploy, MCP, agent social networking |
| [TinyClaw](https://github.com/TinyAGI/tinyclaw) | Shell/TypeScript | Multi-agent, multi-team, multi-channel, chain execution, isolated workspaces |
| [NanoClaw](https://github.com/qwibitai/nanoclaw) | TypeScript | Lightweight container-sandboxed, simple to extend via skills |
| [Moltis](https://github.com/moltis-org/moltis) | Rust | Personal AI gateway, single-binary, multi-provider LLM, long-term memory, MCP |
| [TrinityClaw](https://github.com/TrinityClaw/trinity-claw) | Python | Self-hosted local-only: web automation, memory, code execution, email, calendar |
| [IronClaw](https://github.com/nearai/ironclaw) | Rust | Privacy and security focus, local encrypted data, layered defenses |
| [NullClaw](https://github.com/nullclaw/nullclaw) | Zig | Fully autonomous, tiny binaries, low memory, highly portable |
| [MimiClaw](https://github.com/memovai/mimiclaw) | C | Pocket assistant for ESP32-S3, no OS, low power, local-first memory |
| [HermitClaw](https://github.com/brendanhogan/hermitclaw) | Python | Tiny autonomous creature in a folder, continuous research and reports |
| [AstrBot](https://github.com/AstrBotDevs/AstrBot) | Python | Agentic IM chatbot, broad platform support, LLM integrations, plugins |
| [ZeptoClaw](https://github.com/qhkm/zeptoclaw) | Rust | ~4MB binary, 7-layer security, one-command OpenClaw migration |
| [BabyClaw](https://github.com/yogesharc/babyclaw) | JavaScript | Lightweight single-file, Claude Agent SDK, Telegram, voice, cron |
| [safeclaw](https://github.com/princezuda/safeclaw) | Python | Safe text/voice without LLM, preserves core assistant capabilities |
| [droidclaw](https://github.com/unitedbyai/droidclaw) | TypeScript | Android workflows, lightweight, mobile-first automation |
| [Flowly AI](https://github.com/Nocetic/flowlyai) | TypeScript | Flow-oriented framework, composing agent workflows, tool-driven execution |
| [shrew](https://github.com/Masmedeam/shrew) | Rust | Compact autonomous runtime, speed, minimal resources, extensible behavior |
| [zclaw](https://github.com/tnm/zclaw) | C | Smallest possible AI assistant for ESP32 |
| [Clawlet](https://github.com/Kxrbx/Clawlet) | Python | Lightweight framework, identity awareness, 2-minute setup |
| [subzeroclaw](https://github.com/jmlago/subzeroclaw) | C | Skill-driven agentic daemon for edge hardware |
| [Autobot](https://github.com/crystal-autobot/autobot) | Crystal | Kernel-enforced sandboxing, multi-provider LLM, voice, vision, MCP |
| [moxxy](https://github.com/moxxy-ai/moxxy) | Rust | Self-hosted multi-agent AI framework |
| [Microclaw](https://github.com/microclaw/microclaw) | Rust | Agentic assistant for chat surfaces, inspired by nanoclaw |
| [troublemaker](https://github.com/tinyfatco/troublemaker) | TypeScript | Multi-platform AI agent runtime |
| [LettaBot](https://github.com/letta-ai/lettabot) | TypeScript | Persistent memory across Telegram, Slack, WhatsApp, Signal |
| [picobot](https://github.com/louisho5/picobot) | Go | Lightweight self-hosted bot, single binary |
| [AngelClaw](https://github.com/Abdur-rahmaanJ/angel-claw) | Python | Lean, compatible, research concepts |
| [SupaClaw](https://github.com/vincenzodomina/supaclaw) | TypeScript | Built on Supabase, self-host or use Supabase account |
| [pickle-bot](https://github.com/czl9707/pickle-bot) | Python | Lightweight self-hosted personal AI assistant |
| [OpenCrabs](https://github.com/adolfousier/opencrabs) | Rust | Self-improving autonomous agent, multi-channel, tool use, TUI, cron |
| [OpenFang](https://github.com/RightNow-AI/openfang) | Rust | Open-source Agent OS, 137K LOC, 14 crates, 1,767+ tests |
| [ClawDroid](https://github.com/KarakuriAgent/clawdroid) | Go/Kotlin | PicoClaw fork, native Android app, chat UI, voice mode |
| [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Python/TypeScript | Self-improving, autonomous skill creation, subagent delegation |
| [Atombot](https://github.com/daegwang/atombot) | Python | Atomic-lightweight (~500 LOC), multi-provider, Telegram, reminders |

## Skills Sources

| Source | Skills | Vendored here? | Description |
|--------|--------|----------------|-------------|
| [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 5,400+ | ✅ [awesome-openclaw-skills/](./awesome-openclaw-skills/) | Curated, filtered, categorized from ClawHub registry |
| [openclaw/skills](https://github.com/openclaw/skills) | 13,000+ | ❌ upstream only (~1 GB archive, not vendored) | Official archive from clawhub.com; structure: `skills/<owner>/<skill-name>/` |

**See**: [skills/README.md](./skills/README.md) for category index and installation; [skills/categories/](./skills/categories/) for category links (now pointing to local snapshots).

## Installation

### ClawHub CLI

```bash
clawhub install <skill-slug>
```

### Manual

Copy skill folder to:

| Location | Path |
|---------|------|
| Global | `~/.openclaw/skills/` |
| Workspace | `<project>/skills/` |

Priority: Workspace > Local > Bundled

## Security Notice

Skills are **curated, not audited**. Review source code before installing. OpenClaw has VirusTotal partnership — check ClawHub for security reports.

## Credits

- [machinae/awesome-claws](https://github.com/machinae/awesome-claws) — derivatives list (MIT) — vendored at [awesome-claws/](./awesome-claws/)
- [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) — curated skills index (MIT) — vendored at [awesome-openclaw-skills/](./awesome-openclaw-skills/)
- [openclaw/skills](https://github.com/openclaw/skills) — official skills archive (MIT) — reference only (1 GB upstream)
