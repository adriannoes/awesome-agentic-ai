# anthropic-cybersecurity-skills (cherry-pick)

**Source:** [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)  
**License:** Apache-2.0 — see [LICENSE](./LICENSE)  
**Vendored:** 2026-06-10 — **83 skills** cherry-picked from upstream tag **v1.2.0** (754 total)  
**Upstream README:** [UPSTREAM-README.md](./UPSTREAM-README.md)

> **Community project** — not affiliated with Anthropic PBC despite the upstream repo name.

## What it is

Blue-team and security-operations playbooks for AI agents: DFIR, threat hunting, SOC workflows, malware analysis, cloud audit/CSPM, DevSecOps, and compliance. Each skill follows [agentskills.io](https://agentskills.io) (`SKILL.md` + optional `references/`, `scripts/`, `assets/`) with framework mappings (MITRE ATT&CK, NIST CSF 2.0, ATLAS, D3FEND, NIST AI RMF) in skill frontmatter and reference files.

This hub vendors a **curated subset** focused on domains **not** covered by [bug-hunter/](../bug-hunter/) (authorized bounty / external pentest). For the full 754-skill library, install upstream directly:

```bash
npx skills add mukul975/Anthropic-Cybersecurity-Skills
```

**Use only on systems and data you are authorized to analyze.** See [SECURITY.md](./SECURITY.md).

## Cherry-pick policy

| Subdomain | Skills | Rationale |
|-----------|--------|-----------|
| digital-forensics | 10 | Disk/memory/cloud forensics, artifact recovery |
| threat-hunting | 12 | Hypothesis-driven hunts, AD/Kerberos/C2 detection |
| soc-operations | 10 | SIEM rules, alert triage, Sigma/Splunk/QRadar |
| security-operations | 8 | Log analysis, beaconing, DLP, canaries |
| malware-analysis | 10 | Static/dynamic analysis, sandboxing, IOC extraction |
| cloud-security | 10 | Audit, CSPM, CloudTrail/Sentinel — **no** cloud pentest skills |
| devsecops | 10 | SAST/DAST/SCA, pipeline hardening, container scanning |
| incident-response | 8 | Playbooks, containment, Velociraptor collection |
| compliance-governance | 4 | GDPR, ISO 27001, PCI DSS, NIST CSF maturity |
| governance-risk-compliance | 1 | SOC 2 Type II prep |

Selection uses **diverse workflow verbs** (acquire, build, detect, hunt, implement, …) per subdomain rather than alphabetical truncation. Full skill names: [index.json](./index.json) or [PICK-LIST.md](./PICK-LIST.md).

Upstream full index (754 skills): [index-upstream-full.json](./index-upstream-full.json).

## Layout

| Path | Contents |
|------|----------|
| [skills/](./skills/) | 83 cherry-picked agent skills |
| [index.json](./index.json) | Hub manifest (picked skills + metadata) |
| [index-upstream-full.json](./index-upstream-full.json) | Upstream v1.2.0 index (reference only) |
| [PICK-LIST.md](./PICK-LIST.md) | Flat pick list + refresh notes |
| [UPSTREAM-README.md](./UPSTREAM-README.md) | Upstream project README |
| [SECURITY.md](./SECURITY.md) | Responsible use and vulnerability reporting |

## Install in this hub

### Cursor

Symlink or copy skill folders into your project or user skills path:

```bash
mkdir -p .cursor/skills
for d in cursor-claude-codex/skills/anthropic-cybersecurity-skills/skills/*/; do
  ln -sf "$(pwd)/$d" ".cursor/skills/$(basename "$d")"
done
```

Invoke skills explicitly or pair with [skill-auto-activation](../../references/skill-auto-activation.md).

### Claude Code / Codex

Copy or symlink `skills/*/` into `~/.claude/skills/` or `~/.agents/skills/` per profile.

## Pairs with

- [bug-hunter/](../bug-hunter/) — offensive bounty / external pentest (authorized targets)
- [cursor-claude-codex/security/](../../security/) — secure **development**
- [skill-security-auditor](../alirezarezvani-skills/skill-security-auditor/) — audit before refreshing vendored snapshots

## Pre-install audit (hub)

```bash
python3 cursor-claude-codex/skills/alirezarezvani-skills/skill-security-auditor/scripts/skill_security_auditor.py \
  cursor-claude-codex/skills/anthropic-cybersecurity-skills/
```

Expect **WARN/FAIL** on DFIR/offensive-adjacent commands — review in authorized IR context; re-run after refresh.

## Refresh from upstream

See [PICK-LIST.md](./PICK-LIST.md) and [MAINTENANCE.md](../../MAINTENANCE.md#mukul975anthropic-cybersecurity-skills). Pin to release tags; re-run the cherry-pick script or adjust `PICK-LIST.md` when expanding domains.

## Attribution

Cherry-picked from [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) (Apache-2.0). Catalog: [upstream-repos-catalog.md](../../references/upstream-repos-catalog.md#mukul975anthropic-cybersecurity-skills).
