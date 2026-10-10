# Emil Kowalski skills (vendored)

**Source:** [emilkowalski/skills](https://github.com/emilkowalski/skills)  
**License:** MIT (see [LICENSE](./LICENSE)) — © Emil Kowalski  
**Vendored:** 2026-10-04 — **14** skills @ upstream `main` commit `e8a175d`  
**Install upstream:** `npx skills@latest add emilkowalski/skills`

## Why these matter

Emil's skills encode **design engineering** taste: animation easing, duration, property choice, mobile-native fixes, library picks (Sonner, etc.), and strict animation review — the “agents with taste” layer on top of generic UI generation. They complement [taste-skills/](../taste-skills/) (anti-slop marketing/landing aesthetics), [impeccable/](../impeccable/) (craft detector), [web-design-guidelines/](../web-design-guidelines/) (Vercel audit), and [react-best-practices/](../react-best-practices/) (React perf rules).

**Flagship:** `emil-design-eng` — philosophy + practical UI polish. **Animation stack:** `animate` → `review-animations` / `improve-animations` / `find-animation-opportunities` / `animation-vocabulary`. **Mobile:** `animate-expo`, `mobile-native`. **Resilience:** `break-ui` (worst-case data). **Libraries:** `pick-ui-library`, `ask-sonner`.

## Hub evaluation (2026-10-04)

| Criterion | Verdict |
|-----------|---------|
| License | ✅ MIT — vendoring allowed with attribution |
| Cursor / Claude / Codex | ✅ agentskills.io `SKILL.md`; listed on [skills.sh](https://skills.sh/b/emilkowalski/skills) |
| Quality | ✅ Domain expertise (Vercel/Linear); references, recipes, audit templates per skill |
| Community signal | ✅ ~43k ★ upstream |
| Security | ✅ Markdown-only packages (no bundled executables in skill folders) |
| Overlap with hub | ⚠️ Overlaps `prototype` with [matt-pocock/engineering/prototype](../matt-pocock/engineering/prototype/SKILL.md) — different goals (UI variants vs logic/UI split); keep both |
| Scope | ⚠️ Web animation + mobile-native + Swift — pick the skill that matches the surface |

## Skills (14)

| Folder | Skill name | Focus |
|--------|------------|--------|
| [emil-design-eng](./skills/emil-design-eng/SKILL.md) | `emil-design-eng` | Core design-engineering philosophy + UI polish |
| [animate](./skills/animate/SKILL.md) | `animate` | Build motion from scratch (curve, duration, properties) |
| [animate-expo](./skills/animate-expo/SKILL.md) | `animate-expo` | React Native / Expo motion (gestures, sheets, haptics) |
| [review-animations](./skills/review-animations/SKILL.md) | `review-animations` | Strict animation review ([STANDARDS.md](./skills/review-animations/STANDARDS.md)) |
| [improve-animations](./skills/improve-animations/SKILL.md) | `improve-animations` | Codebase animation audit + prioritized plans |
| [find-animation-opportunities](./skills/find-animation-opportunities/SKILL.md) | `find-animation-opportunities` | Where motion helps (and where it does not) |
| [animation-vocabulary](./skills/animation-vocabulary/SKILL.md) | `animation-vocabulary` | Precise motion vocabulary for prompts |
| [apple-design](./skills/apple-design/SKILL.md) | `apple-design` | Apple HIG / WWDC motion principles for the web |
| [mobile-native](./skills/mobile-native/SKILL.md) | `mobile-native` | Web apps that feel native on phones |
| [pick-ui-library](./skills/pick-ui-library/SKILL.md) | `pick-ui-library` | Trusted library picks vs hand-rolled UI |
| [prototype](./skills/prototype/SKILL.md) | `prototype` | Multiple UI variants with a switcher |
| [break-ui](./skills/break-ui/SKILL.md) | `break-ui` | Stress-test UI with edge-case data |
| [ask-sonner](./skills/ask-sonner/SKILL.md) | `ask-sonner` | Sonner toast library guide |
| [write-swift](./skills/write-swift/SKILL.md) | `write-swift` | Modern Swift (concurrency, testing, performance) |

Also vendored: [performance-cheatsheet.md](./performance-cheatsheet.md) (reference, not a skill). Upstream README: [UPSTREAM-README.md](./UPSTREAM-README.md).

## Refresh

Shallow clone upstream, `rsync` `skills/` into this folder, refresh `LICENSE`, `performance-cheatsheet.md`, and `UPSTREAM-README.md`; pin commit in this README. See [MAINTENANCE.md](../../MAINTENANCE.md).
