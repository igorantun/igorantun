> Historical design plan and implementation notes. For the current Astro setup, see [deployment.md](deployment.md).

# Portfolio redesign — working plan

Updated October 17, 2026. Initial implementation is underway, following the September content audit and redesign discussion. This document records the agreed scope and the design details to review in the first local composition.

## Current revision — October 17, 2026

The green/amber accent experiment was rejected. Restore the neutral palette, remove the name underline and colored section marker, and use a small Brazilian flag beside the name. The flag reuses the previous site's SVG.

The section heading is **Experience**, with CapitalOS, Scope3, Series, Z1, and Pagar.me. Z1 combines June 2020–June 2023 into one entry showing progression from Senior Software Engineer to Technical Lead. Earlier recent-only restrictions below describe the first version and are superseded by this revision.

All footer links retain `target="_blank"` and `rel="noopener noreferrer"`. Email follows the visitor's configured email handler. Typecheck and lint pass after this revision; desktop and mobile rendering checked.

## Purpose

A concise personal website that communicates who Igor is, what he does now, and the recent work that gives that introduction substance. It should feel composed, current, personal, and easy to read.

The user liked Emil Kowalski, Benji Taylor, Paco Coursey, and Gavin Nelson most. Use the typography, restraint, spacing, and clarity identified in the [reference research](research/portfolio-references.md), adapted to Igor's actual content. The [content audit](research/content-audit.md) is an evidence inventory, not a publication checklist.

## Agreed constraints

- Ground-up visual and content redesign; the old layout does not constrain the new one.
- Minimal, professional, mostly text, with subtle colors and animation.
- Recent work only. Old side projects, their statistics, early career history, childhood biography, and exhaustive technology lists do not belong in the initial version.
- No blog, writing, case-study, or project section without suitable current material.
- No availability status or hiring language. Contact remains approachable and neutral.
- English copy, following the current site, unless Igor requests otherwise.

## Initial page

One narrow, left-aligned column, centered within the viewport, with three groups. No separate navigation is needed for this amount of content. Aim for roughly 120–180 visible words; content and readable spacing determine page height, not a forced one-screen layout.

### 1. Identity and introduction

Name, professional title, and two short sentences. Current company appears naturally in the introduction. Draft copy:

> Igor Antun
>
> Senior Software Engineer
>
> I build products and the systems behind them. Currently at CapitalOS, with a background in financial infrastructure and, more recently, AI advertising platforms.

The second sentence refers to career experience, not a claim about CapitalOS's specific product or Igor's undisclosed work there. Revise for a more personal voice during copy review. Do not invent a current-role accomplishment to fill space.

### 2. Recent work

Three plain text entries, newest first. Each includes company, title, dates, and at most one short descriptive sentence. No cards, logos, skill chips, or performance counters in this first direction.

| Company | Role and dates | Draft supporting line |
| --- | --- | --- |
| CapitalOS | Senior Software Engineer · Jun 2026–present | Omit until Igor supplies a description; the entry is complete without it. |
| Scope3 | Senior Software Engineer · Jan 2025–Jan 2026 | Built platform features for AI advertising, including brand standards, media quality controls, and campaign reporting. |
| Series | Senior Software Engineer · Aug 2023–Apr 2024 | Built product features and integrated banking services into core financial systems. |

Use the label “Recent work,” which does not imply a complete employment history. Retain accurate month-level dates in the content source. Start with month/year displayed; shorten only if the visual review supports it.

Z1 is omitted from the first composition. A single historical mention can be reconsidered if Igor wants to emphasize that part of his background. Earlier roles remain available through LinkedIn.

### 3. Contact

Simple text links: Email, GitHub, LinkedIn. No form, scheduling widget, invitation to hire, or availability badge. Igor confirmed `igor@antun.me` on October 17, 2026; use it for the Email link.

## Agreed visual direction

Igor confirmed the palette, portrait treatment, both themes, and restrained sans-serif typography on October 17, 2026. Exact sizes and spacing below are starting values to tune in the rendered composition.

- Column around 600px wide; desktop top spacing around 112px, mobile around 56px; 24px mobile gutters.
- Warm off-white surface with charcoal primary text and readable gray secondary text; no decorative accent color initially. Provide a complementary dark theme with equally readable contrast.
- Restrained sans-serif typography throughout. Body around 16px with a 1.6 line height; name around 24px, medium weight; dates around 14px. Choose the actual font by comparing the real copy at these sizes.
- A small portrait beside the name and role, using the existing profile image.
- About 48–64px between groups and 24–32px between work entries. Avoid oversized empty sections and an oversized hero headline.
- Dates align to the right on wide screens and move beneath the role on narrow screens. Use wrapping rather than truncation.
- Links are recognizable at rest and gain a subtle underline or color change on interaction. Keyboard focus remains clearly visible.
- Both themes follow the system preference by default, with a discreet toggle for an explicit choice.

## Motion and interaction

Introduce the three groups with a very small vertical movement and fade, around 180–240ms per group and no more than roughly 400ms overall. Hover/focus transitions should be around 120–160ms. These are proposed values to tune in a real browser.

Content remains visible if animation or JavaScript fails. Respect reduced-motion preferences, avoid repeated animation on scrolling, and keep text immediately readable. Native scrolling and normal links are sufficient for the page.

## Build approach

Use the existing repository and deployment integration. Rebuild the presentation from scratch within its Next.js/TypeScript foundation; the current framework version is 14.2.22, so review official upgrade guidance and dependency support before implementation and choose a supported target then.

- Render the content as static/server-rendered HTML with minimal client behavior.
- Keep profile text, the three work entries, and contact URLs together in one small typed content module. No CMS or live GitHub requests are needed.
- Replace the current sidebar, colored sections, cards, chip collections, fonts, and scroll wrapper with semantic HTML and a small set of styles.
- Remove presentation components, packages, and assets made unused by the replacement after checking all imports and routes. Do not delete the source research or content audit.
- Keep existing analytics behavior unless deliberately changed; do not add services for the redesign.
- Update metadata and create a matching social preview with the final identity and role. Review the old `/preview` route and raster assets as part of that replacement.
- Keep canonical site identity and functional external links. Verify company URLs before turning company names into links.

## Work sequence and review points

1. **Settle the content and visual direction.** Recent-work scope and public email are confirmed. CapitalOS description remains optional; keep it absent unless Igor supplies one. Review the concise introduction and supporting copy in the rendered composition.
2. **Build the first local composition.** Implement the complete short page at mobile and desktop sizes, with polished typography and spacing. Present real browser screenshots and a local preview for feedback.
3. **Refine and finish.** Apply feedback, tune restrained motion, remove obsolete presentation code, and produce the matching social preview.
4. **Verify and hand off.** Check a production build, TypeScript/lint as supported by the chosen setup, links, console errors, keyboard access, reduced motion, contrast, and responsive layout. Provide final screenshots and a concise change report. Deployment is a later explicit action.

## Completion criteria

- CapitalOS, Scope3, and Series are accurate and concise; no old projects or availability messaging appears on the page or social preview.
- The page remains comfortable at 360px, 390px, 768px, and 1440px widths and at 200% zoom, without clipping or horizontal scrolling.
- Text and links meet WCAG AA contrast, headings and landmarks are semantic, and every interaction works by keyboard.
- Reduced motion eliminates movement; content and contact links work without client JavaScript.
- Production build and relevant checks pass; real browser review shows no runtime errors.
- Igor has reviewed the actual rendered result before publication.


## Initial version verification — October 17, 2026

Implemented by three subagents (content, design, foundation) and integrated/reviewed by the main agent. The page uses Geist, the existing portrait, three recent roles, confirmed contact links, system-default light/dark themes, a persistent manual toggle, CSS entrance/link transitions, and a matching generated social preview. Superseded components, styling dependencies, icons, logos, and old social previews were removed. The GitHub profile README remains separate from website presentation.

- Next.js 16.4.2 / React 19.3.1; production build, TypeScript and ESLint pass. Routes are statically prerendered.
- Browser inspected at 360, 390, 768 and 1440px widths: no horizontal overflow. Desktop light/dark and mobile screenshots captured.
- Keyboard focus through contact links and theme button, Enter activation, and theme persistence after reload verified. Browser console showed no errors or warnings.
- Body text contrast: light secondary 5.14:1; dark secondary 6.90:1. Both exceed WCAG AA.
- Prerendered HTML includes the content and contact links. Reduced-motion and no-JavaScript fallback behavior reviewed in source; browser media emulation, JavaScript-disabled mode and explicit 200% zoom were not exercised in this pass.
- Production dependency audit reports zero vulnerabilities. Five development-only audit entries remain in Next's lint dependency chain (`eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces@3.0.3`, GHSA-vfj7-8cjw-p6xm). No patched braces version was available at install time; no forced incompatible downgrade was applied. ESLint 9 remains required by the current lint plugins' declared peer support.
- No commit, push or deployment performed. Use Node 20.9+ and `npm run dev` to run locally; `npm run build`, `npm run typecheck` and `npm run lint` reproduce the checks.
