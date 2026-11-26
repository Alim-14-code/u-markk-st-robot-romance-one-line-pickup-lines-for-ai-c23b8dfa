import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(repoDir, "entry.txt"), "utf8").trim();

if (line.length === 0) {
  throw new Error("entry.txt is empty or only whitespace");
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200-character cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outText = line;
writeFileSync(join(outDir, "entry.txt"), outText, "utf8");
console.log(`Done — pickup line (${outText.length} characters) saved to ${join(outDir, "entry.txt")}`);
