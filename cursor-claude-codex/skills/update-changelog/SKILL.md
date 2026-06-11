---
name: update-changelog
description: Read before updating changelogs — update CHANGELOG.md with notable changes since last release
---

# Update Changelog

**Source:** [mitsuhiko/agent-stuff](https://github.com/mitsuhiko/agent-stuff) (Apache-2.0)

Update the repository changelog with changes between the last release and current version (`main`) not yet incorporated. Use `CHANGELOG.md` or `CHANGELOG` if missing.

## Process

### 1. Determine baseline version

If no baseline provided, use most recent git tag:
```bash
git describe --tags --abbrev=0
```

### 2. Find commits

```bash
git log <baseline-version>..HEAD
```

### 3. Update changelog

Read existing changelog. Add changes to "Unreleased" section only. If none exists, add at top in same style as existing entries.

## Content Guidelines

- Focus on **notable changes** that affect users (features, fixes, breaking changes)
- Mention pull requests (`#NUMBER`) when available
- Ignore insignificant changes (typos, internal refactoring, minor docs)
- Group related changes together
- Order: breaking changes first, then features, then fixes

## Style Guidelines

- Valid markdown syntax
- Start each entry with past-tense verb or descriptive phrase
- Keep entries concise but descriptive
- Use bullet points
- Format code references with backticks

## Example Format

```markdown
## Unreleased

* Added multi-key support to the `|sort` filter. #827
* Fix `not undefined` with strict undefined behavior. #838

## 2.13.0

* Added support for free threading Python. #841
```

## Good vs. Bad

**Good:** "Fixed an issue with the TypeScript SDK which caused an incorrect config for CJS."

**Bad:** "Fixed bug" (too vague), "Updated dependencies" (insignificant unless security)

## Notes

- Append to existing "Unreleased" section rather than replacing
- Preserve existing changelog style
- When in doubt, err on the side of including
