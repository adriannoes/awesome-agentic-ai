# taste-skills (vendored)

**Source:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)  
**License:** MIT — see [LICENSE](./LICENSE)  
**Vendored:** 2026-07-07 — **13 skills** @ commit `b177427` (full mirror, `SKILL.md` packages only)  
**Upstream README:** [UPSTREAM-README.md](./UPSTREAM-README.md) · **Changelog:** [CHANGELOG.md](./CHANGELOG.md)

## What it is

Anti-slop **frontend design** agent skills: landing pages, portfolios, marketing redesigns, and optional **image-generation** comps (web, mobile, brand kit). The default skill (`design-taste-frontend`) is **v2 experimental** — brief inference, tunable dials (`DESIGN_VARIANCE` / `MOTION_INTENSITY` / `VISUAL_DENSITY`), design-system routing, GSAP motion, and redesign audit protocol.

For the latest upstream release, install directly:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

**Do not** set as global `alwaysApply` — invoke per UI/design task.

## Skills (13)

| Folder | Install name (`--skill`) | Type | When to use |
|--------|--------------------------|------|-------------|
| [taste-skill](./skills/taste-skill/) | `design-taste-frontend` | Code | **Default** — greenfield landing, portfolio, general anti-slop |
| [taste-skill-v1](./skills/taste-skill-v1/) | `design-taste-frontend-v1` | Code | Pin v1 behavior if v2 breaks a workflow |
| [gpt-tasteskill](./skills/gpt-tasteskill/) | `gpt-taste` | Code | Stricter GPT/Codex; higher layout variance + GSAP |
| [redesign-skill](./skills/redesign-skill/) | `redesign-existing-projects` | Code | Audit-first upgrade of existing UIs |
| [image-to-code-skill](./skills/image-to-code-skill/) | `image-to-code` | Code | Generate comps → analyze → implement |
| [soft-skill](./skills/soft-skill/) | `high-end-visual-design` | Code | Calm premium / agency aesthetic |
| [minimalist-skill](./skills/minimalist-skill/) | `minimalist-ui` | Code | Editorial / Notion-Linear restraint |
| [brutalist-skill](./skills/brutalist-skill/) | `industrial-brutalist-ui` | Code | Swiss / tactical telemetry |
| [output-skill](./skills/output-skill/) | `full-output-enforcement` | Meta | Anti-truncation / no placeholder output |
| [stitch-skill](./skills/stitch-skill/) | `stitch-design-taste` | Code | Google Stitch `DESIGN.md` rules |
| [imagegen-frontend-web](./skills/imagegen-frontend-web/) | `imagegen-frontend-web` | Images | Website comps — one image per section |
| [imagegen-frontend-mobile](./skills/imagegen-frontend-mobile/) | `imagegen-frontend-mobile` | Images | Mobile flows / mockups |
| [brandkit](./skills/brandkit/) | `brandkit` | Images | Brand identity boards |

## Layout

| Path | Contents |
|------|----------|
| [skills/](./skills/) | 13 agent skill packages |
| [research/](./research/) | Anti-slop research notes (upstream) |
| [UPSTREAM-README.md](./UPSTREAM-README.md) | Full upstream project README |
| [CHANGELOG.md](./CHANGELOG.md) | Upstream changelog (v1 → v2 diff) |

## Install in this hub

### Cursor

Symlink or copy individual skill folders:

```bash
mkdir -p .cursor/skills
ln -sf "$(pwd)/cursor-claude-codex/skills/taste-skills/skills/taste-skill" .cursor/skills/design-taste-frontend
```

### Claude Code / Codex

```bash
npx skills add "$(pwd)/cursor-claude-codex/skills/taste-skills" --skill "design-taste-frontend"
```

Or copy `skills/<folder>/` into `~/.claude/skills/` or `~/.agents/skills/` per profile.

## Pairs with

- [frontend-design](../frontend-design/) — shorter aesthetic baseline (mitsuhiko)
- [web-design-guidelines](../web-design-guidelines/) — Vercel UI audit
- [references/design-md/](../../references/design-md/) — Stitch `DESIGN.md` spec
- [composition-patterns](../composition-patterns/) — React structure after visual direction

## Refresh

See [MAINTENANCE.md](../../MAINTENANCE.md#leonxlnxtaste-skill). Run [skill-security-auditor](../alirezarezvani-skills/skill-security-auditor/) after each upstream sync.
