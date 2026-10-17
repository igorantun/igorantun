import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "");
const siteUrl = process.env.SITE_URL || "https://igorantun.com";
const html = await readFile("dist/index.html", "utf8");
const preview = await readFile("dist/preview/index.html", "utf8");

assert(!html.includes("/_next/"), "Unexpected legacy framework asset");
assert(!html.includes("/_vercel/"), "Vercel endpoints cannot run on Pages");
const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
assert.equal(canonical?.replace(/\/$/, ""), siteUrl.replace(/\/$/, ""));
assert(html.includes(`${siteUrl.replace(/\/$/, "")}/opengraph-image.png`));
assert(preview.includes(`0;url=${basePath}/opengraph-image.png`));

// Verify every local asset referenced by the generated HTML.
const assets = new Set();
for (const tag of html.matchAll(/<(?:script|link|img)\b[^>]*>/g)) {
  for (const [, url] of tag[0].matchAll(/(?:src|href)="(\/[^"\s]*)"/g)) {
    assert(url.startsWith(`${basePath}/`), `Missing base path: ${url}`);
    const pathname = new URL(url, "https://static.invalid").pathname;
    const file = `dist${decodeURIComponent(pathname.slice(basePath.length))}`;
    assert((await stat(file)).isFile(), `Missing static asset: ${file}`);
    assets.add(file);
  }
}

const png = await readFile("dist/opengraph-image.png");
assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
await stat("dist/404.html");
await stat("dist/.nojekyll");
console.log(
  `Static export verified: ${assets.size} assets, base ${basePath || "/"}`,
);
