---
name: marketing-page
description: Build or redesign pages on the My Job Trackr marketing site (myjobtrackr.com) using the encoded brand design system (persimmon/bone/ink, Geist) and modern marketing-site patterns, while preserving all SEO (schema, meta tags, canonical URLs, heading hierarchy) and conversion elements. Use for any visual redesign, new page, new section, or layout change on this site. Contains the full design token set, component recipes, section patterns, and a mandatory pre-ship checklist. Safe for smaller models — follow the steps literally.
---

# Marketing Page Builder & Redesign

Build and redesign pages on the My Job Trackr marketing site. This skill encodes every design decision — do NOT invent your own colours, fonts, or component styles. Follow the recipes.

## Product Facts (hardcoded — treat as source of truth)

- **Product:** My Job Trackr — job application tracker for UK job seekers.
- **Marketing site:** https://myjobtrackr.com (this repo — static HTML/CSS/JS, no build step).
- **App:** https://app.myjobtrackr.com — CTAs link to `/register` (sign up) and `/login`. Always `target="_blank" rel="noopener"`.
- **Platforms:** Web + iOS (App Store). Android coming soon.
- **Free plan:** £0. Track up to 3 jobs/month, basic job lifecycle tracking, interview calendar, offer tracking. No credit card required.
- **Pro plan:** £2.99/month on web, £3.99/month via app stores. Unlimited job tracking, native job search, advanced analytics & insights, job board integrations, comprehensive offer comparison, priority support. Cancel anytime.
- **Positioning:** UK-priced, mobile-first, simpler than US competitors (Huntr, Teal, Simplify).
- **Language:** UK English (organise, centralised, CV not resume).

## Process (follow in order)

1. **Read the target file(s)** and `styles.css` before changing anything. The design tokens, component classes (`.v2-*`), and motion engine already exist in `styles.css` from the V2 redesign — do not redefine them, reuse them.
2. **Shared chrome (nav, footer, head assets, analytics, CTA bands) lives in `partials/*.html`** and is stamped into every page by `scripts/stamp-partials.js`. If you need to change nav/footer/CTA band content, edit the partial and run `node scripts/stamp-partials.js` — never hand-edit the stamped content directly in a page (it's wrapped in `<!-- partial:name -->` / `<!-- /partial:name -->` markers).
3. **Apply the section patterns** below — rebuild layout and styling while keeping content, links, and SEO elements intact (see Non-Negotiables). Any section that would have used an app screenshot should use a **vignette** instead — see Vignettes below. Real screenshots are not used in the current design.
4. **Run the checklist** at the bottom before declaring done.

## Design Tokens

These match the Job Trackr app's V2 design system (source: `~/Projects/job-trackr/resources/css/app.css`). Add to `styles.css` as CSS custom properties:

```css
:root {
    /* Brand — Persimmon (CTAs and actions ONLY) */
    --persimmon-50:  #FFF1EE;
    --persimmon-100: #FFD9D2;
    --persimmon-300: #F89589;
    --persimmon-500: #F25A4A;  /* primary signal */
    --persimmon-700: #DD3D2C;  /* hover state */
    --persimmon-900: #8F2418;

    /* Warm neutrals — Bone */
    --bone-50:  #FFFBF5;
    --bone-100: #FAF6F0;  /* default page background */
    --bone-200: #F0EAE1;  /* card background */
    --bone-300: #E2DACE;  /* borders, dividers */

    /* Ink — text */
    --ink-500: #5A4B3F;  /* secondary text */
    --ink-700: #2C231B;
    --ink-900: #18120E;  /* primary text, dark sections */

    /* Status — never persimmon for status */
    --jade-100: #DAF1E6;
    --jade-500: #0F8C5F;   /* wins, positive stats, checkmarks */
    --amber-100: #F6E9CF;
    --amber-500: #C68A2E;  /* in-flight, "coming soon" */

    /* Shape */
    --radius-sm: 8px;
    --radius-md: 16px;   /* buttons, inputs */
    --radius-lg: 24px;   /* cards */
    --radius-pill: 9999px;

    /* Type */
    --font-display: 'Geist', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Geist', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

**Fonts:** Geist + JetBrains Mono are **self-hosted** (`public/fonts/geist/`, `public/fonts/jetbrains-mono/`), declared via `@font-face` with `font-display: swap` at the top of `styles.css`. There is no Google Fonts link anywhere on the site — never add one. If a page's `<head>` is missing the font preload tags that every other page has (`partials/head-assets.html`), that's drift — fix it by re-running the stamp script, not by adding a CDN link.

**Type scale (px):** 12 / 14 / 16 (body) / 20 / 28 / 40 / 56 (hero desktop). Body is 16px with 1.5 line-height. Hero H1: 40px mobile, 56px desktop, weight 700, tight line-height (1.05–1.1), letter-spacing -0.02em.

## Component Recipes (exact rules — do not improvise)

Use the existing classes below (all defined in `styles.css`) rather than writing new ad hoc CSS for these patterns.

- **Primary button (`.v2-btn-primary`):** persimmon-500 background, **white text** (`#ffffff`) — this was corrected during the redesign after an earlier ink-on-persimmon draft failed contrast; white is the shipped, correct recipe. Radius-md, 600 weight, min 48px tall. Hover: persimmon-700 background.
- **Ghost/secondary button:** transparent background, 1px solid ink-900 border, ink-900 text, same radius.
- **Card (`.v2-card` / `.v2-card-interactive`):** bone-200 background, radius-lg (24px), 1px solid bone-300 border. **No drop shadows anywhere on cards.**
- **Stat numerals** (user counts, prices, percentages): `font-family: var(--font-mono); font-variant-numeric: tabular-nums;`
- **Status/check icons:** jade-500 (`.status-jade`) for checkmarks and wins; amber-500 for "coming soon". Never persimmon.
- **Persimmon discipline:** persimmon appears ONLY on CTAs, links-as-actions, and one small accent per section (badge, underline, icon). If a section has more than two persimmon elements, remove some.
- **Dark sections** (final CTA, footer): ink-900 background, bone-100 text, persimmon-500 primary button with white text.
- **Page background:** wrap each page's content in `.v2-page-wrap` (bone-100 base); alternate sections may use bone-50 or white `#FFFFFF` for contrast rhythm. Never use the old `bg-gradient`/`min-h-screen` wrapper classes — they were purged along with the rest of the legacy CSS.
- **Stage Spine (`.v2-spine`):** the signature progress motif — past stages are solid ink-900 dots, the current stage is a persimmon-500 dot with a pulse halo, future stages are ghost bone-300 dots. Stages are a variable-length list (not a fixed 4-step enum) — never hardcode 4 stages. The current dot stays persimmon even at a terminal/"done" stage; there's no separate jade "completed" state.

## Section Pattern Library (modern marketing-site layout)

Use these patterns when building or redesigning pages, top to bottom:

1. **Sticky nav:** translucent bone-100 with `backdrop-filter: blur(12px)`, 1px bone-300 bottom border on scroll. Logo left; links centre/right (must include "Job Tracking" → `/job-tracking/`, Blog, Compare, Pricing); ONE primary button ("Get Started Free") right. Login as a plain text link.
2. **Hero:** oversized display headline (benefit + primary keyword), one-sentence subhead (≤25 words), primary CTA + ghost CTA side by side, then a trust strip line: `✅ Free forever (3 jobs/month) · ✅ No credit card required · ✅ Pro from £2.99/month`. Centre-aligned, max-width 720px for text.
3. **Hero vignette:** a product vignette (e.g. `.vg-board`) directly under/beside the hero, in a rounded (radius-lg) frame with 1px bone-300 border. See Vignettes below — do not use a screenshot.
4. **Social proof bar:** thin band with stats in mono numerals (applications tracked, users) or press/rating mentions. Keep factual — no invented numbers; reuse numbers already on the site.
5. **Features as bento grid:** mixed-size card grid (one 2-col hero card + smaller cards) instead of uniform 3-up. Each card: small persimmon or jade icon, H3, 2-sentence description. Keep existing feature copy and keywords.
6. **Alternating deep-dive sections:** vignette left / copy right, then flipped. One per major feature.
7. **Stat band:** ink-900 background strip with 3–4 big mono numerals in bone-100.
8. **Pricing:** two cards, Pro highlighted with 1px persimmon-500 border + "Most Popular" pill badge (persimmon-100 bg, persimmon-900 text). Keep exact plan facts from Product Facts above. App-store price as a small note under the web price.
9. **FAQ:** keep all existing FAQ content and schema markup exactly; restyle as bordered rows or accordion.
10. **Final CTA:** full-width ink-900 section, big bone-100 headline, primary button, "No credit card required" microcopy.
11. **Footer:** ink-900, multi-column (Product / Compare / Blog / Legal), must include "Job Tracking" link to `/job-tracking/`. Bone-300 text at 80% opacity, bone-100 headings.
12. **Motion:** keep/extend the existing IntersectionObserver fade-ins in `script.js`. Transitions ≤300ms, `transform`/`opacity` only. Respect `prefers-reduced-motion`.

## Vignettes (pure CSS/HTML — replace all product screenshots)

The site does not use real app screenshots for product imagery. Instead it uses **vignettes**: hand-built CSS/HTML mockups of app UI (kanban board, quick-add form, calendar, offers list, applications list). Reference implementations live in `preview/components.html` — read it before building a new one.

- Existing vignette classes: `.vg-board`, `.vg-quickadd`, `.vg-calendar`, `.vg-offers`, `.vg-list`.
- Reuse an existing vignette wherever the content fits rather than inventing a new one. Only build a new vignette shell if none of the existing ones represent the feature being illustrated.
- Content inside vignettes uses realistic UK examples (Monzo, BBC, NHS-style employers; £ salaries) — never real user data, never placeholder Lorem Ipsum.
- Vignettes are markup, not images — no `alt` text, `width`/`height`, or `loading` attributes needed. They participate in the reveal/motion engine like any other section content.
- `preview/components.html` itself carries `<meta name="robots" content="noindex">` and is excluded from `sitemap.xml` — don't add it to the sitemap or remove the noindex tag.

## Site Conventions

- Pages live at `<section>/<slug>/index.html` (e.g. `blogs/…`, `compare/…`, `job-tracking/`). URLs never change.
- Subdirectory pages reference the shared stylesheet as `../../styles.css` (or `../styles.css` at one level). There is ONE shared stylesheet — never create per-page CSS files; add new classes to `styles.css`.
- Nav, footer, head assets, analytics snippet, and CTA bands are shared partials (`partials/*.html`) stamped into every page by `node scripts/stamp-partials.js`. To change any of them, edit the partial and re-run the stamp script — do not hand-edit the stamped block in individual pages, and do not diverge nav/footer content page-by-page.
- Images: WebP preferred, explicit width/height, `loading="lazy"` below the fold, keyword-rich alt text. (This applies to non-vignette imagery — logos, OG cards, badges — not to vignettes, which are markup.)

## Non-Negotiables (SEO & tracking — breaking these is a failed task)

1. **Never delete or restructure** JSON-LD `<script type="application/ld+json">` blocks, FAQ microdata (`itemscope`/`itemprop`), canonical links, meta/OG/Twitter tags, or the GA4 `gtag.js` snippet (measurement ID `G-2GHGPQTN4Y`, in `partials/analytics.html`). You may update their VALUES when content changes. There is no Hotjar on this site — don't add it or reference it.
2. **Exactly one H1 per page**, containing the page's primary keyword. Preserve logical H1→H2→H3 hierarchy.
3. **Never rename files, directories, or anchor IDs** (`#features`, `#pricing` etc. are linked from other pages).
4. **Keep every existing internal link** (especially the sitewide "Job Tracking" link) and all app CTAs (`app.myjobtrackr.com/register|/login`).
5. **Keep all body copy and keywords** unless the task is explicitly a copy rewrite — redesign means layout/styling, not content loss.
6. **UK English. No double dashes (--) in copy. No emoji in body copy** (the ✅ trust strip is the one exception).
7. Update `sitemap.xml` `<lastmod>` for any page materially changed; add `<url>` entries for new pages.

## Pre-Ship Checklist (run every time)

- [ ] No new page-level CSS created; new styles added to `styles.css` using existing tokens/`.v2-*` classes
- [ ] Primary buttons: `.v2-btn-primary` (persimmon-500 bg + white text), 48px min tap target
- [ ] Cards: `.v2-card`/`.v2-card-interactive` (bone-200 + bone-300 border + 24px radius, no shadows)
- [ ] One H1; heading hierarchy intact; all schema/meta/canonical/GA4 untouched or value-updated only; no Hotjar references
- [ ] Nav/footer/CTA bands changed only via `partials/` + `node scripts/stamp-partials.js` (run `--check` to confirm no drift); Job Tracking link present
- [ ] All non-vignette images have alt text + explicit dimensions; below-fold images lazy-load
- [ ] Product imagery uses vignettes (`.vg-*`), not screenshots
- [ ] CTAs to `app.myjobtrackr.com/register` present in nav, hero, pricing, and final CTA, each with `data-cta-location` for GA4 tracking
- [ ] Trust strip / "No credit card required" microcopy near primary CTAs
- [ ] Mobile: no horizontal scroll at 375px, 16px min font, stacked sections
- [ ] Motion respects `prefers-reduced-motion`; reveal/stagger classes used consistently with existing sections
- [ ] `sitemap.xml` updated
- [ ] UK English throughout; no double dashes

## Voice ("Warm coach" — matches the app)

Second person ("you", "your"). Encouraging but factual — no hype words ("revolutionary"), no exclamation marks except genuine win moments. Acknowledge that job hunting is stressful. Short fragments are fine ("Free forever. No card needed."). State facts with numbers ("£2.99/month", "3 jobs/month") rather than vague claims.
