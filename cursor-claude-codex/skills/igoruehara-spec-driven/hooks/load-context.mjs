#!/usr/bin/env node
// Translation note: Originally authored in Portuguese (pt-BR) by Igor Uehara
// (igoruehara/spec-driven, MIT). Translated to English by this hub to keep the repository
// language consistent. Code logic unchanged; only comments and user-facing stdout prose translated.
// SessionStart hook — injects the SDD base context (alwaysApply: true docs) at the start of a session.
// This script's stdout is added to the Claude Code context.
// Runs from the project root; reads only what exists (in the raw scaffold, only the STATE).

import { readFileSync, existsSync } from "node:fs";

// "alwaysApply: true" docs — the base context for every session.
const BASE = [
  "docs/STATE.md",
  "docs/product/vision.md",
  "docs/product/roadmap.md",
];

let out = "# SDD base context (loaded at SessionStart)\n";
out += "> These are the `alwaysApply: true` docs. The rest are on demand — pull them by `description`.\n";

let any = false;
for (const f of BASE) {
  if (existsSync(f)) {
    out += `\n===== ${f} =====\n${readFileSync(f, "utf8").trim()}\n`;
    any = true;
  }
}

// Hint about the active spec (the STATE points to it; the agent reads it on demand).
out += "\n> Active feature spec: see \"In progress\" in the STATE and read `specs/NNNN-*/spec.md`.\n";

if (any) process.stdout.write(out);
