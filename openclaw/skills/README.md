# OpenClaw Skills Index

Index of OpenClaw skills from community sources. Skills extend OpenClaw capabilities for external services, automation, and specialized tasks.

**See also:** [../README.md](../README.md) (OpenClaw overview) · [categories/](./categories/) (skills by category)

## Sources

| Source | Link | Skills | Notes |
|--------|------|--------|-------|
| **Awesome OpenClaw Skills** | [VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 5,400+ | Curated, filtered (spam/duplicates/malicious removed), categorized |
| **Official Skills Archive** | [openclaw/skills](https://github.com/openclaw/skills) | 13,000+ | Raw backup from clawhub.com; structure: `skills/<owner>/<skill-name>/` |

## Categories (VoltAgent)

Skills organized by category. Each links to the full list in the VoltAgent repo:

| Category | Count | Link |
|----------|-------|------|
| Git & GitHub | 170 | [git-and-github](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/git-and-github.md) |
| Coding Agents & IDEs | 1,222 | [coding-agents-and-ides](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/coding-agents-and-ides.md) |
| Browser & Automation | 335 | [browser-and-automation](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/browser-and-automation.md) |
| Web & Frontend Development | 938 | [web-and-frontend-development](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/web-and-frontend-development.md) |
| DevOps & Cloud | 409 | [devops-and-cloud](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/devops-and-cloud.md) |
| Image & Video Generation | 169 | [image-and-video-generation](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/image-and-video-generation.md) |
| Apple Apps & Services | 44 | [apple-apps-and-services](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/apple-apps-and-services.md) |
| Search & Research | 352 | [search-and-research](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/search-and-research.md) |
| Clawdbot Tools | 37 | [clawdbot-tools](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/clawdbot-tools.md) |
| CLI Utilities | 186 | [cli-utilities](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/cli-utilities.md) |
| Marketing & Sales | 105 | [marketing-and-sales](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/marketing-and-sales.md) |
| Productivity & Tasks | 206 | [productivity-and-tasks](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/productivity-and-tasks.md) |
| AI & LLMs | 197 | [ai-and-llms](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/ai-and-llms.md) |
| Data & Analytics | 28 | [data-and-analytics](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/data-and-analytics.md) |
| Communication | 149 | [communication](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/communication.md) |
| Speech & Transcription | 45 | [speech-and-transcription](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/speech-and-transcription.md) |
| Smart Home & IoT | 43 | [smart-home-and-iot](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/smart-home-and-iot.md) |
| Shopping & E-commerce | 55 | [shopping-and-e-commerce](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/shopping-and-e-commerce.md) |
| Calendar & Scheduling | 65 | [calendar-and-scheduling](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/calendar-and-scheduling.md) |
| Media & Streaming | 85 | [media-and-streaming](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/media-and-streaming.md) |
| PDF & Documents | 111 | [pdf-and-documents](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/pdf-and-documents.md) |
| Notes & PKM | 71 | [notes-and-pkm](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/notes-and-pkm.md) |
| Self-Hosted & Automation | 33 | [self-hosted-and-automation](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/self-hosted-and-automation.md) |
| iOS & macOS Development | 29 | [ios-and-macos-development](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/ios-and-macos-development.md) |
| Security & Passwords | 54 | [security-and-passwords](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/security-and-passwords.md) |
| Transportation | 110 | [transportation](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/transportation.md) |
| Personal Development | 51 | [personal-development](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/personal-development.md) |
| Health & Fitness | 88 | [health-and-fitness](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/health-and-fitness.md) |
| Moltbook | 29 | [moltbook](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/moltbook.md) |
| Gaming | 36 | [gaming](https://github.com/VoltAgent/awesome-openclaw-skills/blob/main/categories/gaming.md) |

## Installation

### ClawHub CLI (recommended)

```bash
clawhub install <skill-slug>
```

### Manual

Copy the skill folder to:

- **Global**: `~/.openclaw/skills/`
- **Workspace**: `<project>/skills/`

### Alternative

Paste the skill's GitHub link into your assistant's chat and ask it to use it. The assistant will handle setup automatically.

## Archive Structure

Skills are organized as `skills/<owner>/<skill-name>/`. Browse at:

- [GitHub: openclaw/skills/skills](https://github.com/openclaw/skills/tree/main/skills)
- [ClawHub](https://clawhub.ai) — discovery and VirusTotal scanning

## Security

- Skills are **curated, not audited**
- Review source code before installing
- Check [ClawHub](https://clawhub.ai) for VirusTotal reports
- Recommended: [Snyk Skill Security Scanner](https://github.com/snyk/agent-scan), [Agent Trust Hub](https://ai.gendigital.com/agent-trust-hub)
