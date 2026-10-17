# Astro migration: size, performance, and parity

Measured locally on October 17, 2026. Before: Next.js 16.4.2 / React 19.3.1 static export. After: Astro 7.4.0 static output. Both builds use the same content, font, portrait, CSS design, and animation timings.

## Page weight

| Measurement | Before | After |
| --- | ---: | ---: |
| Total page payload | 237.95 KiB | 95.55 KiB |
| JavaScript code, including inline scripts, uncompressed | 482.37 KiB | 0.96 KiB |
| External JavaScript, gzip | 139.66 KiB | 0 KiB |
| HTML, gzip | 5.39 KiB | 2.74 KiB |
| CSS, gzip | 2.02 KiB | 1.94 KiB |
| Initial document and asset requests | 11 | 5 |

Total payload decreased **59.8%**. JavaScript code decreased **99.8%**.

Payload is calculated from production files: gzip for HTML/CSS/JS and original bytes for the already-compressed WOFF2 font, WebP portrait, and favicon. Each requested asset is counted once. HTTP headers, the social card (not loaded on the portfolio), and the old `nomodule` legacy bundle are excluded. Inline scripts are already included in HTML; they are not added again to total weight. The font remains 69,492 bytes, the portrait 8,156 bytes, and the favicon 15,406 bytes.

The authored theme code is in a separate readable TypeScript file. Astro automatically embeds its small processed script in the production HTML. No manual minification or custom bundling was introduced. The only handwritten inline script restores a saved theme before first paint.

## Actual browser timings

Five alternating navigations per build, using the same running browser, machine, viewport, and static server implementation. Medians in milliseconds from navigation start:

| Measurement | Before | After |
| --- | ---: | ---: |
| Load event complete | 37.9 | 25.9 |
| DOMContentLoaded complete | 24.7 | 24.4 |
| Theme button enabled | 38.5 | 20.4 |
| First paint | 60 | 60 |

The load event completed about **32% sooner**, and the theme control became available about **47% sooner**. DOM readiness and first paint were effectively unchanged. The absolute changes are small on localhost; the strongest demonstrated gain is removing unnecessary download and execution overhead.

### Conditions and limits

- Codex in-app Chromium browser, user agent reporting Chrome 155, macOS; 1280 × 1000 CSS-pixel viewport. Every retained sample reported document visibility as `visible`.
- Both production outputs served on localhost by the same Node HTTP process, on separate ports, with identical gzip and `Cache-Control: no-store` behavior. The browser process remained warm. This is not a cold-device or empty-JavaScript-code-cache test.
- A temporary, identical test-only head script recorded Navigation Timing, Paint Timing, PerformanceObserver entries, and a MutationObserver timestamp when the disabled theme button became enabled. It collected results 1.5 seconds after the load event. This instrumentation is absent from the delivered site and the size measurements.
- No CPU or network throttling. These results do not predict a specific mobile or GitHub Pages loading time.
- FCP and LCP were not consistently emitted by the embedded browser, including when visibility reported `visible`. They are deliberately omitted. First paint is **not** FCP and does not prove when all text became visible. No Lighthouse score, field Core Web Vitals, or real-device performance claim is made.
- Repeat runs fluctuate. These are five-sample local lab measurements, not a statistical guarantee.

Raw retained sizes and timing samples: [astro-migration-results.json](astro-migration-results.json).

## Design and behavior verification

- Full-page light-mode screenshots at desktop (1280px) and mobile (390px) widths matched pixel for pixel.
- Settled dark-mode screenshots matched outside the theme button's hover/focus region, which differed because of the test interaction state.
- The portfolio CSS and profile content were moved without changing their values or wording. The exact font, portrait output, and social card were preserved.
- Browser checks covered keyboard theme toggling, persistence after reload, synchronization across open tabs, footer targets, and the repository-path social preview redirect.
- Theme behavior tests cover live system changes, saved overrides, cross-tab storage events, cleared/invalid preferences, and blocked storage.
- Accessibility lint, Astro/TypeScript diagnostics, formatting, theme tests, and production export checks passed.
- Root and `/igorantun/` builds passed; the latter was also served at its actual prefix and inspected in the browser. CSS, font, portrait, and social card loaded successfully.
- SEO title, description, canonical URL, Open Graph and Twitter metadata remain in the initial HTML. The preview and 404 pages are noindex.
- Dependencies and code no longer contain Next.js, React, next-themes, or their framework configuration. Historical research/design notes remain explicitly labeled as historical.

The automated deployment workflow now uploads `dist/`. Live GitHub Actions execution, deployment, and a full physical-device/browser matrix were outside this local verification.
