#!/usr/bin/env bash
# Print SKILL.md totals for cursor-claude-codex/skills (marketing subtotal).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
total=$(find "$ROOT/cursor-claude-codex/skills" -name 'SKILL.md' | wc -l | tr -d ' ')
echo "SKILL.md packages: $total"
