import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://igorantun.com",
  base: process.env.BASE_PATH || "/",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(?:preview\/|404(?:\.html)?\/?)$/.test(new URL(page).pathname),
    }),
  ],
  build: { inlineStylesheets: "never" },
});
