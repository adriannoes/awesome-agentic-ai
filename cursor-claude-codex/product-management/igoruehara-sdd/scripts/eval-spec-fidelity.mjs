#!/usr/bin/env node
// Translation note: Originally authored in Portuguese (pt-BR) by Igor Uehara
// (igoruehara/spec-driven, MIT). Translated to English by this hub to keep the repository
// language consistent. Code logic unchanged; only comments and stdout strings translated.
// Spec→implementation fidelity eval.
// For each specs/NNNN-*: extracts the ACs from the spec, checks coverage by task (tasks.md) and
// reference in code/test (token AC-N), and counts open SPEC_DEVIATION.
// Fails (exit 1) if any AC is not covered by ANY task (broken traceability).
// Reference in test is a WARNING until the feature is implemented.
// Usage: node scripts/eval-spec-fidelity.mjs [dir]

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve, extname } from "node:path";

const ROOT = resolve(process.argv[2] || ".");
const SKIP = new Set(["node_modules", ".git", ".claude", "specs", "docs", "scripts"]);
const CODE_EXT = new Set([".js",".mjs",".cjs",".ts",".tsx",".jsx",".py",".go",".java",".rb",".php",".cs",".rs",".kt",".swift",".sql",".feature",".test"]);

function walkCode(dir) {
  const out = [];
  for (const n of readdirSync(dir)) {
    if (SKIP.has(n) || n.startsWith(".tmp")) continue;
    const f = join(dir, n);
    if (statSync(f).isDirectory()) out.push(...walkCode(f));
    else if (CODE_EXT.has(extname(f))) out.push(f);
  }
  return out;
}

const acTokens = (s) => new Set(s.match(/AC-\d+/g) || []);

const specsDir = join(ROOT, "specs");
if (!existsSync(specsDir)) { console.log("No specs/ — nothing to evaluate."); process.exit(0); }

let codeBlob = "";
try { for (const f of walkCode(ROOT)) codeBlob += "\n" + readFileSync(f, "utf8"); } catch {}
const codeACs = acTokens(codeBlob);
const deviations = (codeBlob.match(/SPEC_DEVIATION/g) || []).length;

let hardFail = 0;
const rows = [];
for (const name of readdirSync(specsDir)) {
  if (!/^\d{4}-/.test(name)) continue;
  const dir = join(specsDir, name);
  if (!existsSync(join(dir, "spec.md"))) continue;
  const acs = [...acTokens(readFileSync(join(dir, "spec.md"), "utf8"))].sort();
  if (!acs.length) continue;
  const taskACs = existsSync(join(dir, "tasks.md")) ? acTokens(readFileSync(join(dir, "tasks.md"), "utf8")) : new Set();
  const uncovered = acs.filter((ac) => !taskACs.has(ac));
  const noTest = acs.filter((ac) => !codeACs.has(ac));
  hardFail += uncovered.length;
  rows.push({ name, acs, byTask: acs.length - uncovered.length, byTest: acs.length - noTest.length, uncovered, noTest });
}

console.log("\nSpec→implementation fidelity eval\n");
for (const r of rows) {
  console.log(`  ${r.name}`);
  console.log(`    AC: ${r.acs.length} · by task: ${r.byTask}/${r.acs.length} · in code/test: ${r.byTest}/${r.acs.length}`);
  if (r.uncovered.length) console.log(`    ✗ AC without a task (traceability): ${r.uncovered.join(", ")}`);
  if (r.noTest.length) console.log(`    ⚠ AC without test reference: ${r.noTest.join(", ")}`);
}
console.log(`\n  SPEC_DEVIATION open in code: ${deviations}`);

if (hardFail) {
  console.error(`\n✗ ${hardFail} AC without task coverage — broken traceability.\n`);
  process.exit(1);
}
console.log(`\n✓ Spec→task traceability OK (test reference is a warning until implemented).\n`);
