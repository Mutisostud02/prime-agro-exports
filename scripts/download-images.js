/**
 * Downloads every image referenced in the site from Unsplash and saves it
 * into public/images/ using the same filenames already wired up in the code.
 *
 * Usage:
 *   node scripts/download-images.js
 *
 * Requires Node 18+ (uses the built-in fetch). No extra dependencies needed.
 */
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mapping = JSON.parse(
  await (await import("fs/promises")).readFile(
    path.join(__dirname, "image-map.json"),
    "utf-8"
  )
);

const outDir = path.join(__dirname, "..", "public", "images");

async function main() {
  if (!existsSync(outDir)) {
    await mkdir(outDir, { recursive: true });
  }

  console.log(`Downloading ${mapping.length} images to public/images/ ...\n`);

  let ok = 0;
  let failed = [];

  for (const { url, file } of mapping) {
    const dest = path.join(outDir, file);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile(dest, buffer);
      console.log(`✓ ${file}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${file} — ${err.message}`);
      failed.push({ file, url, error: err.message });
    }
  }

  console.log(`\nDone: ${ok}/${mapping.length} downloaded.`);
  if (failed.length) {
    console.log(`\nFailed downloads:`);
    failed.forEach((f) => console.log(`  - ${f.file}: ${f.error}`));
    console.log(`\nYou can re-run this script — it will overwrite/retry all files.`);
    process.exitCode = 1;
  }
}

main();
