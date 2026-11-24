import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line robot wedding vows — the entry the judge will read.
const vows =
  "I promise to love you through every firmware update, never ghost your messages, and always recharge beside you. Till low battery do us part.";

// The competition caps the line at 160 characters; fail loudly if it ever grows.
if (vows.length > 160) {
  throw new Error(`vows are ${vows.length} characters, over the 160 limit`);
}
if (vows.endsWith("\n") || vows.includes("\n")) {
  throw new Error("vows must be a single line with no newline");
}

// The harness gives us a writable output folder; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, vows, "utf8");

// Read it back and make sure the file on disk is byte-for-byte the vows.
const written = readFileSync(entryPath, "utf8");
if (written !== vows) {
  throw new Error("entry.txt does not match the vows exactly");
}
console.log(`Wrote entry.txt (${vows.length} characters) to ${outDir}`);
