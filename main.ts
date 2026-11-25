// Charm the Commuter: Forecast a City That Isn't
// Writes one original one-line weather forecast for a fictional city
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Drizzlewick: rain until noon, then more rain, then a brief sunny spell the locals call Tuesday — the 8:15 bus is late, bring two umbrellas.";

// The gate allows 1 to 140 characters; fail loudly instead of writing an
// entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`Entry is ${ENTRY.length} chars; must be 1-140.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars) to ${outDir}`);
