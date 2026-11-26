// Funniest Autocorrect Fail — make.fun entry (u-zeroxfive-funniest-autocorrect-fail-ddf82154)
// Writes the one-line entry to output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const line = "I texted my boss 'I'm resigning to follow my dreams' and autocorrect sent 'I'm resigning to follow my memes' — HR called it the most honest resignation letter ever.";

const out = "output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(line);
