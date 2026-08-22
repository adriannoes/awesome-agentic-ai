#!/usr/bin/env bash
# Count hub resources from the repo tree. Used to verify docs/stats.md and README copy.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

count_skills() {
  find cursor-claude-codex/skills -name 'SKILL.md' | wc -l | tr -d ' '
}

count_commands() {
  find cursor-claude-codex/commands -maxdepth 1 -name '*.md' ! -name 'README.md' 2>/dev/null | wc -l | tr -d ' '
}

count_coding_rules() {
  find cursor-claude-codex/coding -name '*.md' 2>/dev/null | wc -l | tr -d ' '
}

count_notebooks() {
  find research -name '*.ipynb' | wc -l | tr -d ' '
}

count_papers() {
  find papers -name '*.pdf' | wc -l | tr -d ' '
}

count_reports() {
  find reports -name '*.pdf' | wc -l | tr -d ' '
}

count_textbooks() {
  find learning -maxdepth 1 -name '*.pdf' | wc -l | tr -d ' '
}

count_n8n() {
  find n8n-templates -name '*.json' 2>/dev/null | wc -l | tr -d ' '
}

count_prompts() {
  find prompt-engineering/prompts -type f 2>/dev/null | wc -l | tr -d ' '
}

count_nice_projects() {
  grep -c '^\-\s*\*\*\[' nice-projects/README.md || true
}

skills=$(count_skills)
commands=$(count_commands)
coding=$(count_coding_rules)
notebooks=$(count_notebooks)
papers=$(count_papers)
reports=$(count_reports)
textbooks=$(count_textbooks)
n8n=$(count_n8n)
prompts=$(count_prompts)
projects=$(count_nice_projects)

echo "Hub stats ($(date +%Y-%m-%d))"
echo "  Agent skills (SKILL.md):     $skills"
echo "  Cursor slash commands:       $commands"
echo "  Coding rules:                $coding"
echo "  Jupyter notebooks:           $notebooks"
echo "  Research papers (PDF):       $papers"
echo "  Industry reports (PDF):      $reports"
echo "  Textbooks (PDF):             $textbooks"
echo "  n8n templates (JSON):        $n8n"
echo "  System prompt snapshots:     $prompts"
echo "  nice-projects README bullets: $projects"
echo ""
echo "One-liner (README):"
echo "**What's inside:** **${skills}** agent skills · **${commands}** slash commands · **${coding}** coding rules · **${notebooks}** Jupyter notebooks · **${papers}** research papers · **${reports}** industry reports · **${textbooks}** textbooks · **${n8n}** n8n templates · **${prompts}** system prompts · **36** OpenClaw agents · **5,380** OpenClaw skills · **${projects}** curated GitHub projects."
