import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const canonical = `${(process.env.SITE_URL || "https://igorantun.com").replace(/\/$/, "")}/`;
const html = await readFile("dist/index.html", "utf8");
const read = (path) => readFile(`dist/${path}`, "utf8");
const [robots, sitemapIndex, sitemap, preview, notFound] = await Promise.all([
  read("robots.txt"),
  read("sitemap-index.xml"),
  read("sitemap-0.xml"),
  read("preview/index.html"),
  read("404.html"),
]);

assert(html.includes('<html lang="en">'));
assert.equal([...html.matchAll(/<h1\b/g)].length, 1);
assert(!html.includes("noindex"), "The portfolio must remain indexable");
assert(html.includes(`rel="canonical" href="${canonical}"`));
assert(html.includes(`property="og:url" content="${canonical}"`));
assert(html.includes('content="max-image-preview:large"'));

const blocks = [
  ...html.matchAll(
    /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  ),
];
assert.equal(blocks.length, 1, "Expected one structured-data graph");
const schema = JSON.parse(blocks[0][1]);
assert.equal(schema["@context"], "https://schema.org");
const website = schema["@graph"].find((item) => item["@type"] === "WebSite");
const page = schema["@graph"].find((item) => item["@type"] === "ProfilePage");
assert.equal(page.url, canonical);
assert.equal(website.url, canonical);
assert.equal(page.isPartOf["@id"], website["@id"]);
const person = page.mainEntity;
assert.equal(person["@type"], "Person");
assert.equal(person["@id"], website.publisher["@id"]);
assert.equal(person.url, canonical);
assert(html.includes(`<h1>${person.name}</h1>`));
assert(html.includes(person.jobTitle));
assert(html.includes(person.worksFor.name));
for (const url of person.sameAs) {
  assert.equal(new URL(url).protocol, "https:");
  assert(
    html.includes(`href="${url}"`),
    "Identity links must match visible links",
  );
}
assert.equal(person.image, `${canonical}images/profile-social.webp`);
const portrait = await sharp("dist/images/profile-social.webp").metadata();
assert(portrait.width * portrait.height >= 50000);
const socialImage = await sharp("dist/opengraph-image.png").metadata();
assert.equal(socialImage.width, 1200);
assert.equal(socialImage.height, 630);

assert(robots.includes("User-agent: *\nAllow: /"));
assert(robots.includes(`Sitemap: ${canonical}sitemap-index.xml`));
assert(!robots.includes("Disallow:"), "Keep noindex pages crawlable");
assert(sitemapIndex.includes(`<loc>${canonical}sitemap-0.xml</loc>`));
assert.deepEqual(
  [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]),
  [canonical],
);

for (const utilityPage of [preview, notFound]) {
  assert(utilityPage.includes('name="robots" content="noindex, follow"'));
  assert(!utilityPage.includes('rel="canonical"'));
  assert(!utilityPage.includes('type="application/ld+json"'));
}
console.log(
  "SEO verified: indexability, canonical, identity graph, images, sitemap, and utility pages.",
);
