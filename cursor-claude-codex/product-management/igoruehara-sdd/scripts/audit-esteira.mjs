#!/usr/bin/env node
// Translation note: Originally authored in Portuguese (pt-BR) by Igor Uehara
// (igoruehara/spec-driven, MIT). Translated to English by this hub to keep the repository
// language consistent. Code logic unchanged; only comments and stdout strings translated.
// SDD pipeline audit — validates structure, frontmatter, links, and specs.
// Usage: node scripts/audit-esteira.mjs [dir]   (default: ".")
// Exits with code 1 on any violation (serves as a gate in CI and in /auditar).

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve, extname } from "node:path";

const ROOT = resolve(process.argv[2] || ".");
// Dirs of CLI-generated views (non-Claude clients) — they are artifacts derived from the canonical
// source (.claude/CLAUDE.md), not the source; auditing the source is enough and avoids false positives.
const IGNORE_DIRS = new Set([
  "node_modules", ".git", ".spec-driven",
  ".agents", ".cursor", ".gemini", ".windsurf",
]);
const NO_FRONTMATTER_OK = new Set(["RELEASING.md", "CHANGELOG.md"]);
// Generated instructions files (outside their own dir) that are also derived views.
const isGenerated = (f) => {
  const r = relative(ROOT, f).replace(/\\/g, "/");
  return r === "AGENTS.md" || r === "GEMINI.md" ||
    r === ".github/copilot-instructions.md" || r.startsWith(".github/prompts/");
};
const errors = [];
const err = (file, msg) => errors.push(`${relative(ROOT, file) || file}: ${msg}`);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (IGNORE_DIRS.has(name) || name.startsWith(".tmp")) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (extname(full) === ".md") out.push(full);
  }
  return out;
}

function parseFrontmatter(text) {
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = text.slice(3, end).trim();
  const keys = {};
  for (const line of block.split("\n")) {
    const m = line.match(/^([A-Za-z_][\w-]*)\s*:/);
    if (m) keys[m[1]] = line.slice(m[0].length).trim();
  }
  return keys;
}

const isSkillDialect = (f) =>
  f.replace(/\\/g, "/").includes("/.claude/skills/") ||
  /(?:^|\/)(skill|subagent)\.template\.md$/.test(f.replace(/\\/g, "/"));

const files = walk(ROOT).filter((f) => !isGenerated(f));

// 1) Frontmatter + dialect
for (const f of files) {
  if (NO_FRONTMATTER_OK.has(f.split(/[\\/]/).pop())) continue;
  const text = readFileSync(f, "utf8");
  const fm = parseFrontmatter(text);
  if (!fm) { err(f, "no frontmatter"); continue; }
  if (!fm.name) err(f, "frontmatter missing `name`");
  if (!fm.description) err(f, "frontmatter missing `description`");
  if (isSkillDialect(f)) {
    if ("alwaysApply" in fm) err(f, "skill dialect must not have `alwaysApply`");
  } else {
    if (!("alwaysApply" in fm)) err(f, "doc missing `alwaysApply`");
    else if (!/^(true|false)$/.test(fm.alwaysApply)) err(f, `invalid alwaysApply: ${fm.alwaysApply}`);
  }
}

// 2) Broken relative links
const linkRe = /\]\(([^)]+)\)/g;
for (const f of files) {
  const text = readFileSync(f, "utf8");
  let m;
  while ((m = linkRe.exec(text))) {
    let target = m[1].trim();
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    if (/[<>]|XXXX|NNNN|\s/.test(target)) continue; // placeholders
    target = target.split("#")[0];
    if (!target) continue;
    if (!existsSync(resolve(dirname(f), target))) err(f, `broken link → ${target}`);
  }
}

// 3) Every specs/NNNN-* folder needs a spec.md
const specsDir = join(ROOT, "specs");
if (existsSync(specsDir)) {
  for (const name of readdirSync(specsDir)) {
    if (/^\d{4}-/.test(name) && !existsSync(join(specsDir, name, "spec.md")))
      err(join(specsDir, name), "feature missing `spec.md`");
  }
}

// Report
if (errors.length) {
  console.error(`\n✗ Pipeline audit: ${errors.length} problem(s)\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error("");
  process.exit(1);
} else {
  console.log(`✓ Pipeline audit: ${files.length} docs OK (frontmatter, links, specs).`);
}
