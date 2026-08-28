#!/usr/bin/env bash
# =====================================================================
# install.sh — Install Claude-BugHunter bundle
#
# Copies all bundled content into ~/.claude/:
#   - skills/*       → ~/.claude/skills/
#   - commands/*.md  → ~/.claude/commands/
#   - scripts/hunt.sh → ~/.claude/scripts/hunt.sh + sourced from shell rc
#
# Idempotent: safe to re-run. Existing skills/commands with the same
# name are backed up before overwrite.
# Requires: bash.
# =====================================================================

set -e

REPO_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
SKILLS_DEST="$HOME/.claude/skills"
COMMANDS_DEST="$HOME/.claude/commands"
SCRIPTS_DEST="$HOME/.claude/scripts"

mkdir -p "$SKILLS_DEST" "$COMMANDS_DEST" "$SCRIPTS_DEST"

echo "Installing Claude-BugHunter bundle from $REPO_DIR"
echo ""

# === Install skills ===
echo "Skills →  $SKILLS_DEST"
for skill_dir in "$REPO_DIR/skills"/*/; do
  skill_name="$(basename "$skill_dir")"
  if [ -d "$SKILLS_DEST/$skill_name" ] && [ ! -L "$SKILLS_DEST/$skill_name" ]; then
    backup_name="${skill_name}.backup-$(date +%Y%m%d-%H%M%S)"
    mv "$SKILLS_DEST/$skill_name" "$SKILLS_DEST/$backup_name"
    echo "  ↺ Backed up existing $skill_name → $backup_name"
  fi
  cp -r "$skill_dir" "$SKILLS_DEST/$skill_name"
  echo "  ✓ Installed skill: $skill_name"
done

echo ""

# === Install commands ===
if [ -d "$REPO_DIR/commands" ]; then
  echo "Commands →  $COMMANDS_DEST"
  for cmd_file in "$REPO_DIR/commands"/*.md; do
    [ -e "$cmd_file" ] || continue
    cmd_name="$(basename "$cmd_file")"
    if [ -f "$COMMANDS_DEST/$cmd_name" ] && [ ! -L "$COMMANDS_DEST/$cmd_name" ]; then
      backup_name="${cmd_name%.md}.backup-$(date +%Y%m%d-%H%M%S).md"
      mv "$COMMANDS_DEST/$cmd_name" "$COMMANDS_DEST/$backup_name"
      echo "  ↺ Backed up existing $cmd_name → $backup_name"
    fi
    cp "$cmd_file" "$COMMANDS_DEST/$cmd_name"
    echo "  ✓ Installed command: /${cmd_name%.md}"
  done
  echo ""
fi

# === Install hunt shell command ===
cp "$REPO_DIR/scripts/hunt.sh" "$SCRIPTS_DEST/hunt.sh"
chmod +x "$SCRIPTS_DEST/hunt.sh"
echo "  ✓ Installed hunt shell command at $SCRIPTS_DEST/hunt.sh"

# Detect shell rc file
SHELL_RC=""
if [ -n "${ZDOTDIR:-}" ] && [ -f "$ZDOTDIR/.zshrc" ]; then
  SHELL_RC="$ZDOTDIR/.zshrc"
elif [ -f "$HOME/.zshrc" ]; then
  SHELL_RC="$HOME/.zshrc"
elif [ -f "$HOME/.bashrc" ]; then
  SHELL_RC="$HOME/.bashrc"
fi

if [ -n "$SHELL_RC" ]; then
  if grep -q "claude/scripts/hunt.sh" "$SHELL_RC" 2>/dev/null; then
    echo "  ✓ hunt.sh already sourced from $SHELL_RC"
  else
    echo "" >> "$SHELL_RC"
    echo "# Bug-bounty engagement scaffolding (bug-bounty-claude-skills)" >> "$SHELL_RC"
    echo "source ~/.claude/scripts/hunt.sh" >> "$SHELL_RC"
    echo "  ✓ Added 'source ~/.claude/scripts/hunt.sh' to $SHELL_RC"
  fi
else
  echo "  ⚠ Could not detect shell rc file. Manually add this line to your shell startup:"
  echo "       source ~/.claude/scripts/hunt.sh"
fi

# Make it available in the current shell too
# shellcheck disable=SC1091
source "$SCRIPTS_DEST/hunt.sh" 2>/dev/null || true

echo ""
echo "============================================"
echo "✓ Install complete"
echo "============================================"
echo ""
echo "Skills installed at:   $SKILLS_DEST"
echo "Commands installed at: $COMMANDS_DEST"
echo "Shell command at:      $SCRIPTS_DEST/hunt.sh"
echo ""
echo "Next: open a new terminal (or 'source $SHELL_RC') and try:"
echo "    hunt acme-test"
echo ""
echo "Optional — refresh vendored upstream skills:"
echo "    ./scripts/install-community-skills.sh"
