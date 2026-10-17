import { siteUrl } from "../config/deployment";

export function GET() {
  const sitemap = new URL("sitemap-index.xml", siteUrl).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
