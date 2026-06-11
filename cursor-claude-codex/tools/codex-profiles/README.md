# codex-profiles (vendored)

**Source:** [Ducksss/codex-profiles](https://github.com/Ducksss/codex-profiles)  
**License:** MIT — see [LICENSE](./LICENSE)  
**Vendored:** 2026-06-10 @ v0.2.0 (`72aa473`)  
**Maintainer:** upstream — report bugs and feature requests on the [upstream repo](https://github.com/Ducksss/codex-profiles/issues)

Switch Codex CLI and Desktop accounts with isolated `CODEX_HOME` directories. Each profile keeps auth, config, sessions, connectors, plugins, caches, and logs separate — without copying `auth.json` between accounts.

Included in [awesome-vibe-coding](https://github.com/adriannoes/awesome-vibe-coding) for discoverability alongside [Codex-compatible skills](../../skills/). **Active development stays upstream.**

## Install (recommended — canonical)

```bash
npm install -g codex-profile
# or
brew install Ducksss/tap/codex-profile
```

The npm package is `codex-profile` (singular). It installs both `codex-profile` and `codex-profiles` commands.

## Install from this vendored tree

Useful when you cloned this hub and want a local install without npm:

```bash
cd cursor-claude-codex/tools/codex-profiles
make install
# installs to ~/.local/bin/codex-profile — ensure ~/.local/bin is on PATH
codex-profile doctor
```

## Quick start

```bash
codex-profile init personal
codex-profile init work
codex-profile login personal
codex-profile login work

codex-profile cli personal
codex-profile cli work exec "review this repo"
```

macOS Desktop (single active profile):

```bash
codex-profile app personal ~/Dev/my-project
```

## Pair with hub skills

1. Copy skills from [cursor-claude-codex/skills/](../../skills/) into `~/.agents/skills/` per profile home.
2. Use `codex-profile clone-config` to copy safe non-secret files (`AGENTS.md`, `config.toml`, …) between profiles — see [UPSTREAM-README.md](./UPSTREAM-README.md#clone-safe-config).
3. Skills that reference Claude Code tools (`Task`, `TodoWrite`) — use [codex-tools.md](../../skills/using-superpowers/references/codex-tools.md) for Codex equivalents.

## What's vendored here

| Path | Purpose |
|------|---------|
| `bin/codex-profile` | Main CLI |
| `Makefile` | `make install`, `make test` |
| `test/` | Upstream test suite |
| `package.json` | Version pin |
| `UPSTREAM-README.md` | Full upstream documentation |

Not mirrored: GitHub Pages (`docs/`), media, CI workflows — see upstream for those.

## Refresh from upstream

```bash
git clone --depth 1 https://github.com/Ducksss/codex-profiles.git /tmp/codex-profiles-src
rsync -a --exclude='.git' --exclude='docs' --exclude='media' --exclude='.github' \
  /tmp/codex-profiles-src/bin /tmp/codex-profiles-src/LICENSE /tmp/codex-profiles-src/Makefile \
  /tmp/codex-profiles-src/package.json /tmp/codex-profiles-src/test \
  cursor-claude-codex/tools/codex-profiles/
cp /tmp/codex-profiles-src/README.md cursor-claude-codex/tools/codex-profiles/UPSTREAM-README.md
# Update vendored date + commit in this README
```

See [MAINTENANCE.md](../../MAINTENANCE.md).

## Full documentation

[UPSTREAM-README.md](./UPSTREAM-README.md) · [Project page](https://ducksss.github.io/codex-profiles/)
