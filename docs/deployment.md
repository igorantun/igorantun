# GitHub Pages deployment

The portfolio uses Astro's static output. `dist/` contains HTML, CSS, a small theme script, fonts, and images; no application server or hosting adapter is needed. All content is in the initial HTML.

## Development

Use Node.js 22.23.2 or a newer supported LTS release, then `npm ci`.

- `npm run dev` starts Astro's development server.
- `npm run check` runs ESLint (including accessibility rules), Astro/TypeScript diagnostics, theme behavior tests, formatting, the production build, and static-asset checks.
- `npm start` serves `dist/` at `http://127.0.0.1:3000`.
- `PORT=3001 npm start` serves a different port.

Edit text and employment history in `src/config/profile.ts`, layout in `src/pages/index.astro`, and design in `src/styles/globals.css`. The theme script preserves the existing `theme` storage key, follows the system until manually overridden, and synchronizes across tabs. CSS handles the animations and reduced-motion preference.

The original portrait stays in `assets/profile.jpg`; the build generates its optimized WebP. The exact Geist variable font is self-hosted in `src/assets/fonts/`, with its license. `public/opengraph-image.png` is the static social card. Its editable artwork is `assets/social-card.html`, using the original portrait and site font. When changing its copy or layout, open the artwork in a browser, let the font and portrait load, and export at exactly 1200 × 630 pixels as PNG. The artwork is not shipped with the website. Keeping the output as a static asset avoids an image-generation framework for a rarely changing card. Metadata still comes from the profile configuration. `/preview/` opens the card using an HTML refresh with a fallback link, including without JavaScript.

## Enable GitHub Pages

1. In **Settings → Pages**, choose **GitHub Actions** as the source.
2. For `igorantun.com`, configure the custom domain, verification, DNS, and HTTPS separately to avoid interrupting the current site.
3. Push approved changes to `main`, or manually run **Deploy portfolio to GitHub Pages** on `main`.

The workflow reads the public site URL and base path from Pages settings, runs all checks, and uploads `dist/`. Only the deployment job has deployment permissions; no personal access token is needed.

## Root domains and repository paths

| Setting | Custom domain | Repository site |
| --- | --- | --- |
| `SITE_URL` | `https://igorantun.com` | `https://igorantun.github.io/igorantun` |
| `BASE_PATH` | empty | `/igorantun` |

Local builds default to the custom domain. To verify a repository-path build:

```sh
BASE_PATH=/igorantun SITE_URL=https://igorantun.github.io/igorantun npm run build
```

Serve this build mounted at `/igorantun/`. Run `npm run build` without those variables afterward to restore the root build. Both variables are public build configuration.

Keep the output static: no request-time APIs or server-only functionality. The build verifies asset paths, canonical and social URLs, the preview redirect, PNG signature, and 404 page. There is no analytics service.

References: [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) and [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Search indexing

The home page includes `WebSite` and `ProfilePage`/`Person` JSON-LD, generated from the visible profile data. It uses the canonical site URL and links to the published GitHub and LinkedIn profiles. A 512px version of the existing portrait is generated for structured data; the page continues loading only the small portrait. Preview and error pages have their own titles, are `noindex, follow`, and do not claim the homepage as their canonical URL.

Astro's official sitemap integration generates `sitemap-index.xml` and `sitemap-0.xml`, excluding utility pages. `robots.txt` allows crawling and points to the sitemap. The build checks metadata, structured-data relationships, images, sitemap URLs, and utility-page indexing rules for both deployment layouts. No artificial modification dates, keyword tags, or fabricated content are emitted.

After the production deployment:

1. Confirm HTTPS and the preferred domain redirect, and check that unknown URLs return a real HTTP 404. These are hosting behaviors, not HTML metadata.
2. Verify the production property in Google Search Console, submit `/sitemap-index.xml`, and use URL Inspection to check the rendered homepage and request indexing.
3. Run Google's Rich Results Test against the public URL and review subsequent indexing and Core Web Vitals reports. Local structural tests do not establish Google's indexing or rich-result eligibility.

For a repository-path deployment, submit the full `/igorantun/sitemap-index.xml` URL directly. Crawlers read robots rules only from the origin's `/robots.txt`; a file under `/igorantun/` cannot control origin-wide crawling. Site-name display in Google also applies to domain/subdomain roots, not subdirectories. The custom-domain deployment avoids both limitations.

References: [Google profile-page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [site names](https://developers.google.com/search/docs/appearance/site-names), [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), and [robots.txt scope](https://developers.google.com/search/docs/crawling-indexing/robots/intro).
