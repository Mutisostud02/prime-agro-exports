/**
 * Regenerates public/sitemap.xml from src/data/seoRoutes.js.
 * Runs automatically after every `npm run build` (see package.json "postbuild"),
 * so the sitemap can never drift out of sync with the route list.
 *
 * Usage:
 *   node scripts/generate-sitemap.js
 */
import { writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { SEO_ROUTES } from "../src/data/seoRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.primeagroexportsltd.com";
const outFile = path.join(__dirname, "..", "public", "sitemap.xml");

function buildUrlEntry({ path: routePath, changefreq, priority }) {
  const loc = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    "  </url>",
  ].join("\n");
}

async function main() {
  const body = SEO_ROUTES.map(buildUrlEntry).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  await writeFile(outFile, xml, "utf-8");
  console.log(`Sitemap written to public/sitemap.xml with ${SEO_ROUTES.length} URLs.`);
}

main();
