#!/usr/bin/env node
// Translation note: Originally authored in Portuguese (pt-BR) by Igor Uehara
// (igoruehara/spec-driven, MIT). Translated to English by this hub to keep the repository
// language consistent. Code logic unchanged; only comments and stdout strings translated.
// Structural validator for Mermaid blocks in .md files.
// Zero-dep (does not render): catches the errors that most often break rendering and that the agent makes most —
//   • empty block                                  (fatal)
//   • diagram type missing/unknown                 (fatal)
//   • unbalanced double quotes                     (fatal)
//   • unbalanced (), [] or {}                       (warning — asymmetric shapes `>...]` give false positives)
// Usage: node scripts/validate-mermaid.mjs [dir]   (default: ".")
// Exits with code 1 on a fatal error. Serves as a gate in CI and in /diagramar.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, extname, relative } from "node:path";

const ROOT = resolve(process.argv[2] || ".");
// Same dirs the audit ignores: derived/system, not the canonical source.
const IGNORE_DIRS = new Set([
  "node_modules", ".git", ".spec-driven",
  ".agents", ".cursor", ".gemini", ".windsurf",
]);

// Diagram types recognized by Mermaid (first word of the block).
const TYPES = new Set([
  "flowchart", "graph", "sequenceDiagram", "classDiagram", "classDiagram-v2",
  "stateDiagram", "stateDiagram-v2", "erDiagram", "journey", "gantt", "pie",
  "mindmap", "timeline", "gitGraph", "quadrantChart", "requirementDiagram",
  "C4Context", "C4Container", "C4Component", "C4Dynamic", "C4Deployment",
  "sankey-beta", "xychart-beta", "block-beta", "packet-beta", "architecture-beta",
  "kanban", "radar", "zenuml",
]);

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

// Extracts each ```mermaid … ``` block with the line (1-based) where the fence opens.
function mermaidBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    if (cur === null) {
      if (/^\s*```\s*mermaid\s*$/i.test(lines[i])) cur = { start: i + 1, body: [] };
    } else if (/^\s*```\s*$/.test(lines[i])) {
      blocks.push(cur); cur = null;
    } else {
      cur.body.push(lines[i]);
    }
  }
  return blocks;
}

// Strips comments/directives (%% to end of line) — also drops `%%{init:…}%%`.
const stripComments = (body) =>
  body.map((l) => { const i = l.indexOf("%%"); return i === -1 ? l : l.slice(0, i); }).join("\n");

const errors = [];
const warns = [];

for (const f of walk(ROOT)) {
  const rel = relative(ROOT, f) || f;
  let blocks;
  try { blocks = mermaidBlocks(readFileSync(f, "utf8")); } catch { continue; }

  blocks.forEach((b, n) => {
    const where = `${rel} (mermaid block #${n + 1}, line ${b.start})`;

    // 1) Diagram type: 1st meaningful line (skips blank lines, comments, and frontmatter ---…---).
    let i = 0;
    while (i < b.body.length && b.body[i].trim() === "") i++;
    if (i < b.body.length && b.body[i].trim() === "---") {           // inner YAML frontmatter
      i++;
      while (i < b.body.length && b.body[i].trim() !== "---") i++;
      i++;
    }
    while (i < b.body.length && (b.body[i].trim() === "" || b.body[i].trim().startsWith("%%"))) i++;
    const first = i < b.body.length ? b.body[i].trim() : "";
    if (!first) { errors.push(`${where}: empty mermaid block`); return; }
    const kw = (first.match(/^([A-Za-z][\w-]*)/) || [])[1] || "";
    if (!TYPES.has(kw)) errors.push(`${where}: diagram type missing/unknown ("${first.slice(0, 30)}")`);

    // 2) Balanced double quotes (fatal).
    const stripped = stripComments(b.body);
    const quotes = (stripped.match(/"/g) || []).length;
    if (quotes % 2 !== 0) errors.push(`${where}: unbalanced double quotes (${quotes})`);

    // 3) Delimiters (warning) — ignore what is inside quotes.
    let outside = "", inQ = false;
    for (const ch of stripped) {
      if (ch === '"') inQ = !inQ;
      else if (!inQ) outside += ch;
    }
    for (const [op, cl, label] of [["(", ")", "()"], ["[", "]", "[]"], ["{", "}", "{}"]]) {
      const o = outside.split(op).length - 1;
      const c = outside.split(cl).length - 1;
      if (o !== c) warns.push(`${where}: ${label} possibly unbalanced (${o} open / ${c} closed)`);
    }
  });
}

if (warns.length) {
  console.log(`\n⚠ Mermaid warnings (${warns.length}) — please check (asymmetric shapes \`>…]\` may be false positives):`);
  for (const w of warns) console.log(`  • ${w}`);
}
if (errors.length) {
  console.error(`\n✗ Mermaid validation: ${errors.length} error(s)\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error("");
  process.exit(1);
}
console.log(`✓ Mermaid validation: blocks OK (type, quotes, delimiters).`);
