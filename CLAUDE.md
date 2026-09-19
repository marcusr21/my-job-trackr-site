# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing landing page for **My Job Trackr** (https://myjobtrackr.com) - a job application tracking and career productivity tool. The site is deployed as a static HTML/CSS/JavaScript landing page (GitHub Pages, `CNAME` → myjobtrackr.com).

**Important Context**: This project was originally scaffolded as a Vite + React + TypeScript + shadcn/ui application (as evidenced by `package.json` and configuration files), but has since been converted to a vanilla HTML/CSS/JavaScript static site. The React/TypeScript source files have been removed. `package.json` and the Vite/Tailwind/shadcn config files remain from that era but are not active.

**V2 Redesign**: The site was redesigned (see `REDESIGN_PLAN.md`) to match the design system of the app's V2 UI — persimmon/bone/ink palette, self-hosted Geist + JetBrains Mono fonts, a partials-based templating layer, and CSS/HTML "vignette" components that stand in for product screenshots. `REDESIGN_PLAN.md` is the authoritative spec for design tokens, motion behaviour, and per-page requirements; consult it before making structural changes.

**Current State**: The active landing page consists of:
- `index.html` and one `index.html` per subpage (`blogs/*/`, `compare/*/`, `job-tracking/`, `privacy.html`, `terms.html`, `404.html`) — 23 indexed pages + `404.html`
- `styles.css` — the full V2 design system (tokens, components, vignettes, motion engine)
- `script.js` — vanilla JS: smooth scroll, reveal-on-scroll, count-up stats, sticky CTA bar, GA4 event binding
- `partials/` — shared HTML fragments (nav, footer, head assets, analytics, CTA band, sticky CTA), stamped into every page
- `scripts/stamp-partials.js` — the partial-stamping script (see below)
- `public/` — static assets (images, self-hosted fonts, favicon)
- `preview/components.html` — the vignette/component library reference page (noindex, not in sitemap)
- `_design-reference/` — real V2 app screenshots used as visual reference during the redesign (underscore-prefixed so GitHub Pages/Jekyll excludes it from publish)

**External App**: The actual Job Trackr application is hosted separately at `app.myjobtrackr.com` (links to `/login` and `/register` endpoints).

## Local Development

All page-internal asset paths (`/styles.css`, `/public/...`, `/job-tracking/`) are **root-relative**, matching how GitHub Pages serves the site. This means pages will not render correctly opened directly via `file://` — always run a local server from the repo root:

```bash
python3 -m http.server 8123
# then browse http://localhost:8123/index.html
```

There is no build step for the live site. The `npm run dev`/`build`/`preview`/`lint` scripts in `package.json` are leftovers from the original Vite/React scaffold and are not part of the current workflow.

## Partials Architecture

Shared page chrome (nav, footer, `<head>` font/meta boilerplate, GA4 analytics snippet, CTA band, mobile sticky CTA) lives once in `partials/*.html` and is stamped into every page between marker comments:

```html
<!-- partial:nav -->
...stamped content...
<!-- /partial:nav -->
```

**Workflow rule: edit the partial, then run the stamp script — never hand-edit content between the markers directly in a page.** Hand-edits between markers will be silently overwritten (or flagged as drift) the next time the script runs.

```bash
node scripts/stamp-partials.js          # stamp all partials into all pages
node scripts/stamp-partials.js --check  # CI-style drift check, exits non-zero if any page's stamped content is out of sync with the source partial
```

Run `--check` after any change touching `partials/` or before committing, to confirm nothing drifted.

## Design System

Tokens, components, the "vignette" library, and the motion engine are all defined at the top of `styles.css` and documented in full in `REDESIGN_PLAN.md` §3. Summary:

- **Palette**: persimmon (`#F25A4A` — brand/CTA colour only, not decorative), bone (`#FAF6F0` background / `#F0EAE1` cards / `#E2DACE` borders), ink (`#18120E` text), jade (`#0F8C5F` status-positive), amber (status-pending).
- **Fonts**: self-hosted Geist (`public/fonts/geist/`) and JetBrains Mono (`public/fonts/jetbrains-mono/`) via `@font-face` with `font-display: swap`. No Google Fonts anywhere.
- **Buttons**: primary CTA is `.v2-btn-primary` — persimmon background, **white text** (not ink — low-contrast ink-on-persimmon was a real bug caught during the redesign, don't reintroduce it).
- **Cards**: `.v2-card` / `.v2-card-interactive`.
- **Stage Spine**: `.v2-spine` / `.v2-spine-dot` — the signature motif showing an application's stage progression (past = solid ink dot, current = persimmon dot with a pulse halo, future = ghost bone dot). Stages are a **variable-length array**, not a fixed 4-stage enum — do not hardcode assumptions about stage count or names. The current-stage dot stays persimmon even at a terminal/completed stage; there is no separate jade "done" state.
- **Vignettes**: `.vg-board`, `.vg-quickadd`, `.vg-calendar`, `.vg-offers`, `.vg-list` — pure CSS/HTML product mockups (no screenshots) used throughout marketing copy in place of real app images. Reference implementations live in `preview/components.html`.
- **Motion**: reveal-on-scroll via IntersectionObserver (`.reveal` / `.reveal.in`, with `.reveal-stagger` + `--reveal-index` for staggered groups), plus a progressive-enhancement layer using `@supports (animation-timeline: view())` for browsers with scroll-driven animation support. The IntersectionObserver path is a complete standalone baseline, not a degraded fallback. Everything respects `prefers-reduced-motion: reduce` (per-element overrides plus a catch-all in `styles.css`).
- Do not reintroduce legacy (pre-redesign) class names like `.btn-primary`, `.card`, `.pricing-section`, `.bg-gradient` — these were fully migrated off and the old CSS block was purged. If you find a page still using one, that's regressed drift, not an intentional exception.

## Analytics

**There is no Hotjar on this site.** Analytics is Google Analytics 4 via `gtag.js`, measurement ID `G-2GHGPQTN4Y`, stamped sitewide from `partials/analytics.html`. CTA buttons carrying `data-cta-location` fire a GA4 `cta_click` event (wired in `script.js`) — keep that attribute on any new CTA button you add.

## File Structure

```
/
├── index.html                    # Homepage
├── styles.css                    # V2 design system: tokens, components, vignettes, motion
├── script.js                     # Smooth scroll, reveal engine, sticky CTA, GA4 events
├── partials/                     # Shared chrome, stamped into every page (see above)
├── scripts/stamp-partials.js     # Partial stamping / drift-check script
├── preview/components.html       # Vignette + component reference library (noindex)
├── blogs/*/index.html            # Blog posts (shared template)
├── compare/*/index.html          # Comparison pages (shared template)
├── job-tracking/index.html       # SEO pillar page
├── privacy.html / terms.html     # Legal pages
├── 404.html                      # Branded 404 (GitHub Pages auto-serves; not in sitemap)
├── public/
│   ├── fonts/geist/, fonts/jetbrains-mono/   # Self-hosted webfonts
│   ├── img/                      # Logos, OG card, badges, favicons
│   └── favicon.ico
├── robots.txt, sitemap.xml       # Repo root, not public/
├── _design-reference/            # Real V2 app screenshots (underscore-prefixed, unpublished)
├── REDESIGN_PLAN.md              # Authoritative redesign spec — read before structural changes
├── package.json                  # Legacy from original React scaffold; scripts unused
├── vite.config.ts / tailwind.config.ts / components.json / tsconfig.json  # Unused legacy config
```

### Key Features

1. **SEO Optimization**: comprehensive meta tags (Open Graph, Twitter Cards), JSON-LD structured data, semantic HTML, canonical URLs, `sitemap.xml`.
2. **Responsive Design**: mobile-first CSS, sticky nav with blur backdrop, mobile sticky CTA bar below 768px.
3. **Accessibility floor**: WCAG AA contrast, 48×48px minimum tap targets, visible `:focus-visible` rings.
4. **Interactive**: smooth-scroll anchor nav, reveal-on-scroll animation, GA4 event tracking on CTAs.

### External Links

All CTAs and navigation buttons link to:
- **Register**: `https://app.myjobtrackr.com/register`
- **Login**: `https://app.myjobtrackr.com/login`

Links open in new tab with `target="_blank"`.

### Path Aliases (unused legacy config)

If ever reverting to the React/TypeScript scaffold: `@/` maps to `./src/`, configured in `vite.config.ts` and `tsconfig.json`, with shadcn/ui aliases (`@/components`, `@/lib/utils`, `@/hooks`, etc). `src/` no longer exists in this repo.

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements; maintain accessibility (alt text, ARIA labels where needed).
- Keep SEO keywords in titles, descriptions, and image alt text.
- Follow the existing `v2-*` class naming conventions.
- Never hand-edit content between `<!-- partial:name -->` / `<!-- /partial:name -->` markers — edit the source partial instead.

### CSS
- Use the existing design tokens (CSS custom properties defined at the top of `styles.css`) rather than hardcoding colours/spacing.
- Mobile-first responsive design.
- Watch for cascade/declaration-order collisions when adding new component classes with similar names to existing ones — same-specificity selectors are resolved by source order, and this has caused real bugs in this codebase (e.g. `.v2-winner-col` vs `.v2-check`). Prefer distinct, specific class names over relying on ordering.

### JavaScript
- Vanilla ES6+ (no frameworks).
- IntersectionObserver for scroll animations; `scrollIntoView` for smooth scrolling.
- New CTA buttons should carry `data-cta-location` so GA4 event tracking picks them up automatically.

## Important Notes

1. **Git Status**: There may be many deleted files in staging from the original React→static conversion (`src/` and component files) — this is expected, unrelated to current work.
2. **Brand Assets**: Logo at `public/img/v2/logo-128.webp`/`.png`; favicon set in `public/img/favicon/`; OG card at `public/img/og-card.png`; App Store/Google Play badges self-hosted in `public/img/badges/`.
3. **Domain**: Site is configured for `myjobtrackr.com` (see `CNAME` and canonical URLs).
4. **Hard constraints carried over from the redesign** (see `REDESIGN_PLAN.md` §1 for full detail): page URLs never change; JSON-LD/schema and FAQ microdata stay byte-identical except explicitly permitted value updates (§9); body copy, FAQ answers, and feature descriptions stay byte-identical (only display/visual treatment may change) unless a content change is explicitly requested; all internal links and CTAs preserved; UK English; no em/en-dash pairs standing in for punctuation.

## Development Workflow

1. **For page content/copy changes**: edit the page's HTML directly.
2. **For shared chrome changes** (nav, footer, CTA band, analytics): edit the relevant file in `partials/`, then run `node scripts/stamp-partials.js`.
3. **For styling**: edit `styles.css`, using existing tokens and component classes.
4. **For SEO/meta changes**: update the relevant page's `<head>` section directly (meta tags are per-page, not stamped).
5. **Always serve via `python3 -m http.server`** when testing locally — see Local Development above.

## Common Tasks

### Update App Screenshots / Vignettes
Vignettes (`.vg-board`, `.vg-quickadd`, etc.) are pure CSS/HTML — edit markup directly in the page or in `preview/components.html`. Real screenshots for reference live in `_design-reference/app-screenshots/` (not published).

### Change Pricing
Edit the `#pricing` section in `index.html` (`.v2-pricing-grid` / `.v2-pricing-card`).

### Add New Features
Add feature cards in the features grid section with consistent icon/title/description structure, matching existing `.v2-card` markup.

### Modify Analytics
Edit `partials/analytics.html`, then run `node scripts/stamp-partials.js` to propagate to all pages.

### Add a New Page
Follow the closest existing template (blog post, compare page, or standalone like `job-tracking/`), stamp in the shared partials, add the page to `sitemap.xml`, and update internal nav links if it should be discoverable.
