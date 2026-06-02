import { glob } from "node:fs/promises";
import { readFile, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import subsetFont from "subset-font";

const DIST = "dist";
const FONTS_DIR = join(DIST, "fonts");

const BASELINE = new Set<string>();

// ASCII characters
for (let cp = 0x20; cp <= 0x7e; cp++) {
  BASELINE.add(String.fromCodePoint(cp));
}

async function collectCodepoints(): Promise<Set<string>> {
  const chars = new Set<string>(BASELINE);
  for await (const file of glob(`${DIST}/**/*.html`)) {
    const html = await readFile(file, "utf8");
    for (const c of html) {
      chars.add(c);
    }
  }

  return chars;
}

async function subsetOne(path: string, text: string): Promise<void> {
  const before = await readFile(path);
  const after = await subsetFont(before, text, { targetFormat: "woff2" });
  await writeFile(path, after);
  const pct = ((1 - after.length / before.length) * 100).toFixed(1);
  console.log(`  ${path}: ${before.length} → ${after.length} bytes (-${pct}%)`);
}

const chars = await collectCodepoints();
const text = [...chars].join("");
console.log(`subsetting fonts to ${chars.size} unique codepoints`);

const fonts: string[] = [];
for await (const f of glob(`${FONTS_DIR}/*.woff2`)) fonts.push(f);
await Promise.all(fonts.map((f) => subsetOne(f, text)));

for await (const f of glob(`${FONTS_DIR}/*.age`)) {
  await unlink(f);
  console.log(`  removed ${f}`);
}
