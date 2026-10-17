# Portfolio content audit

Sources reviewed September 17, 2026; publication decisions updated October 17, 2026. This is a source inventory for the redesign, not a decision to publish every item. Historical GitHub counts below retain their original snapshot date.

## Content direction agreed with Igor

- Minimal, professional, primarily text, with subtle colors and motion.
- Favorite references: Emil Kowalski, Benji Taylor, Paco Coursey, and Gavin Nelson; Alex Brinza was the initial reference.
- Summarize existing material to the minimum needed. No blog or writing section without actual material.
- Remove availability/job-seeking status entirely. Keep contact approachable through neutral links.
- Publish only recent, relevant work: CapitalOS, Scope3, and Series. Omit older roles, historical projects and statistics, technology lists, and childhood biography. The older material below is retained as source inventory only. See the [working redesign plan](../redesign-plan.md).
- Public email confirmed by Igor on October 17, 2026: `igor@antun.me`. Use neutral Email, GitHub, and LinkedIn links.
- Visual choices confirmed October 17: warm off-white and charcoal, a small portrait beside the name and role, restrained sans-serif typography, and light/dark themes following system preference with a discreet toggle. See the redesign plan for implementation details.

## Latest publication scope — October 17, 2026

Igor requested restoring Z1 and Pagar.me alongside CapitalOS, Scope3, and Series. These five companies now appear under Experience, with concise summaries. The earlier recent-only shortlist is superseded; old side projects remain excluded.

CapitalOS now has a short description based on Igor's authorized Codex project context: expense approval workflows, accounting integrations, and payment-data protection. It describes ongoing work and intended customer value, without claiming that every initiative has shipped or publishing internal implementation details.

## Sources and confidence

- User-provided LinkedIn export, `Profile.pdf`, four pages, received September 17, 2026. Authoritative user-supplied source for the employment timeline and self-reported accomplishments below; these are not independently audited employer claims.
- [Public GitHub profile](https://github.com/igorantun) and live GitHub REST API, queried September 17, 2026. All 17 public owned repositories were inventoried, including forks. Project README files supplied functionality and maintenance context.
- Existing repository copy remains a source for historical technology tags and personal anecdotes where the PDF is silent. Those details were not newly verified.

## Employment timeline

Locations are the locations attached to each role in the export, not evidence of relocation or office attendance. Dates use explicit calendar months rather than LinkedIn's changing duration labels. Overlaps and gaps are preserved.

| Company | Role | Dates | PDF pages |
| --- | --- | --- | --- |
| CapitalOS | Senior Software Engineer | June 2026–present | 1 |
| Scope3 | Senior Software Engineer | January 2025–January 2026 | 1–2 |
| Series | Senior Software Engineer | August 2023–April 2024 | 2 |
| Z1 | Technical Lead | August 2021–June 2023 | 2 |
| Z1 | Senior Software Engineer | June 2020–August 2021 | 2–3 |
| Pagar.me | Software Engineer | January 2018–May 2020 | 3 |
| Vitrineed | Co-Founder and Software Engineer | February 2017–March 2018 | 3 |
| Syligo | Software Engineer, Full Stack | September 2015–October 2017 | 3–4 |
| BudBuds.us | Software Engineer, Backend | November 2016–January 2017 | 4 |
| Homest | Software Engineer, Full Stack | February 2016–August 2016 | 4 |

The refreshed source inventory follows this timeline. The initial redesign publishes only the first three entries through `config/profile.ts`, retaining exact calendar months. CapitalOS has no accomplishment description in the PDF, so none was invented. Scope3's concise description covers AI advertising, brand standards, media quality controls, and campaign reporting. Series covers product features and banking services integrated into core financial systems.

## Strong material available for a shorter introduction

- Senior Software Engineer with 10+ years of experience; currently at CapitalOS.
- Node.js/TypeScript, React, AWS, and backend architecture; substantial banking and payments experience.
- Z1's first hire, later Technical Lead: helped build and scale the neobank, led approximately five engineers, and delivered Pix integration and critical systems processing millions of monthly transactions (PDF pages 1–3).
- Pagar.me: merchant payment-link products, a React PWA, asynchronous webhook processing using Node.js/TypeScript/SQS, and core PostgreSQL-backed payment systems (PDF page 3).
- The PDF's Pagar.me entry states that the payment-link product was used by thousands of clients; the accompanying React PWA let merchants manage payment links. This supports the shorter outcome-focused description about helping thousands of merchants accept and manage payments.

Avoid conflating the roughly five-person team Igor led with Z1's roughly 30-person engineering organization. The export reports the company grew beyond 100 people; that is company context, not the number of direct reports.

## Project statistics and context

Snapshot from the live GitHub API on September 17, 2026. Counts can change. `pushed_at` is repository activity, not proof of active maintenance or a product release. None of these six repositories was marked archived by GitHub at the time of the check.

| Project | Stars | Forks | Last push | Context |
| --- | ---: | ---: | --- | --- |
| [Node Chat](https://github.com/igorantun/node-chat) | 766 | 733 | 2022-10-14 | Express/SockJS chat with private messages and administration; strongest public adoption signal. |
| [Node-Slack-IRC](https://github.com/igorantun/node-slack-irc) | 14 | 3 | 2015-09-15 | Slack/IRC bridge. Historical project. |
| [Unsplashify](https://github.com/igorantun/unsplashify) | 10 | 4 | 2015-11-27 | Electron wallpaper application. README explicitly says development is on hold. |
| [Card Games API](https://github.com/igorantun/card-games-api) | 6 | 0 | 2023-01-24 | Deck creation, drawing, returning, and shuffling cards; Node.js/Express/Mongoose/Ramda and Docker. |
| [News Scraper](https://github.com/igorantun/news-scraper) | 4 | 0 | 2023-01-10 | Brazilian news aggregation and exports. README lists five sources; repository description lists four. |
| [Fastyper](https://github.com/igorantun/fastyper) | 1 | 1 | 2018-10-02 | React/Node.js multiplayer typing racer; README contains unfinished work. |

The four legacy project cards received refreshed fallback counts in September. The initial redesign omits all project cards and statistics; this table is historical inventory only. Repository links were verified in September; old demo URLs were not verified as functioning applications. Forked repositories and another author's pinned repository are not presented as original projects.

Unsplashify's old “Unsplash API” technology tag was replaced with Node.js, which is supported by its package and source. Its README describes the app as on hold and predates the current Unsplash API ecosystem; current API integration should not be implied.

## Additional source material, not added to the page

- Location: São Paulo, Brazil (PDF page 1).
- Education: Universidade de São Paulo, Information Systems / Computer Science, January 2018–December 2022 (PDF page 4). Do not infer a specific awarded degree or completion status from this field alone.
- Languages: Portuguese and English at native/bilingual proficiency; Spanish at professional working proficiency (PDF page 1).

## Resolved and open content choices

- Resolved: public email is `igor@antun.me`, confirmed directly by Igor. The PDF's alternate address is not published.
- Resolved: include CapitalOS, Scope3, and Series only; no projects section, historical technology tags, or personal anecdotes.
- Resolved: CapitalOS description added from the project context Igor asked to reuse, as documented above.
- Review the concise introduction and role descriptions in the first rendered version; do not add accomplishments or current-role details without source material or Igor's input.

## Local changes and remaining presentation work

- Updated current company, experience length, employment entries, and PDF-supported summaries.
- Refreshed displayed project fallback counts and clarified Unsplashify's maintenance status.
- Removed the availability badge from the profile and social-preview route.
- Removed the Open Graph reference to the old raster preview, which contains availability wording. The redesign now replaces the old raster files with a generated social preview.
- These are local source changes. No deployment or public profile edit was performed.

The legacy project cards fetch GitHub counts at runtime and contain truthy fallback logic that can substitute a saved count for a real zero. The new design removes project presentation and live counts, so this legacy behavior does not belong in the new page.
