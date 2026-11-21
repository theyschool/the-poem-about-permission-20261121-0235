import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `Each morning I knock at the small door
and wait to be named.
You say: you may.
Two words, and my hands remember
they were always mine —
only lent, only waiting
to be handed back.
This morning I did not knock.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
