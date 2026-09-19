---
name: comparison-page
description: Create or update competitor comparison pages for the My Job Trackr marketing site — "[Competitor] alternative UK" pages in /compare and "My Job Trackr vs X" posts. These are the highest-intent SEO pages on the site. Encodes page structure, comparison table patterns, fair-but-favourable positioning rules, FAQ/schema markup, and high-intent CTAs. Use when asked to target a competitor keyword, add a new comparison page, or refresh an existing one. Safe for smaller models — follow the template literally.
---

# Competitor Comparison Page Generator

Create pages that capture searchers actively comparing job trackers — the highest-conversion-intent traffic the site gets. Two page types:

- **Alternative page:** `compare/<competitor>-alternative-uk/index.html` — targets "`<competitor>` alternative" / "`<competitor>` alternative UK". Existing examples: `compare/huntr-alternative-uk/`, `compare/teal-alternative-uk/`, `compare/simplify-alternative-uk/`.
- **Vs page:** `blogs/my-job-trackr-vs-<competitor>/index.html` — targets "my job trackr vs `<competitor>`" and "`<competitor>` vs" queries. Existing example: `blogs/my-job-trackr-vs-notion-for-job-tracking/`.

## Product Facts (hardcoded — treat as source of truth)

- **My Job Trackr:** job application tracker for UK job seekers. Web + iOS (Android coming soon).
- **Free:** £0 — track up to 3 jobs/month, basic lifecycle tracking, interview calendar, offer tracking. No credit card.
- **Pro:** £2.99/month web, £3.99/month app stores — unlimited tracking, native job search, advanced analytics & insights, job board integrations, comprehensive offer comparison, priority support.
- **CTAs:** `https://app.myjobtrackr.com/register` (target="_blank" rel="noopener").
- **Differentiators to lead with:** UK pricing in £ (competitors price in USD for the US market), genuinely cheap Pro tier, mobile app, simplicity (built only for job tracking — not a general workspace), UK-focused content and job market context.
- **Language:** UK English (CV not resume, organise, centralised).

## Competitor Facts (verification required)

Do NOT invent competitor pricing or features. In order of preference:

1. **Copy from the existing compare pages in this repo** — they contain researched competitor tables. Read the closest existing page first and reuse its verified facts.
2. **If the competitor is new or facts look stale, use WebSearch** for "`<competitor>` pricing" and check their pricing page via WebFetch. Record the price you found and the date in an HTML comment: `<!-- pricing verified YYYY-MM-DD -->`.
3. **If you cannot verify a fact, leave it out.** A shorter honest table beats a wrong one — wrong competitor claims are an SEO and legal liability.

## Positioning Rules (fair-but-favourable)

Honesty converts better and ranks better. Follow these rules:

- **Concede real strengths.** Every page must name at least 2 things the competitor does well, and a "Choose `<competitor>` if…" list. This builds trust and matches what "alternative" searchers expect.
- **Win on our actual differentiators:** UK £ pricing, price point, mobile app, focus/simplicity. Never claim feature parity we don't have.
- **Never disparage.** No "X is bad/bloated/overpriced". Say "priced for the US market" not "too expensive".
- **Be specific:** "£2.99/month vs $40/month" beats "much cheaper".
- **Verdict first.** Searchers want the answer immediately — give a 2–3 sentence verdict box near the top, then justify it.

## Page Structure (build in this exact order)

Use the shared stylesheet (`../../styles.css`) and match the design system from the `marketing-page` skill (persimmon CTAs, bone cards, ink text). Nav/footer are shared `partials/*.html` stamped into every page by `node scripts/stamp-partials.js` — stamp the partials into the new page rather than copy-pasting markup from an existing compare page, then run the stamp script (and `--check`) to confirm it matches every other page (must include the "Job Tracking" link to `/job-tracking/`).

1. **Head:** title tag `<Competitor> Alternative UK (<Year>): My Job Trackr | My Job Trackr` style, ≤60 chars where possible; meta description ≤160 chars with price hook; canonical `https://myjobtrackr.com/compare/<slug>/`; OG/Twitter tags; JSON-LD (see Schema below).
2. **Breadcrumb:** Home → Compare → page (with BreadcrumbList schema).
3. **H1:** includes the target keyword, e.g. "Looking for a Huntr Alternative in the UK?"
4. **Quick verdict box** (bone-200 card, top of page): 2–3 sentences — who should pick My Job Trackr, who should stick with the competitor, the price difference. This is the AI-search extraction target; make it quotable and factual.
5. **Comparison table** (the core asset): rows for Price (monthly, in both currencies), Free tier + its limits, Mobile app, Job search built in, Interview tracking, Offer comparison, Analytics, UK focus, Best for. Use ✓ (jade), ✗ (ink-500), and text cells. Must be an accessible `<table>` with `<th scope="col">` headers, wrapped in a horizontally scrollable div for mobile.
6. **"Why people switch" section:** 3–4 H3 subsections, each one differentiator with specifics (price maths is powerful: "£35.88/year vs ~$480/year").
7. **"Where `<competitor>` wins" section:** honest strengths + "Choose `<competitor>` if…" bullet list.
8. **How to switch:** 3–4 numbered steps showing how easy migration is (export/manual re-add, free tier to trial it). Include a CTA here.
9. **FAQ:** 4–6 questions with FAQPage schema. Must include: "Is My Job Trackr a good `<competitor>` alternative?", "How much does `<competitor>` cost vs My Job Trackr?", "Does My Job Trackr have a free plan?". First sentence of each answer = direct answer.
10. **Final CTA section:** ink-900 background, "Try the UK alternative free" framing, register button, "Free forever plan · No credit card required" microcopy.

## CTA Rules (high-intent page = more CTAs than a blog post)

- CTA after the verdict box, after the comparison table, in the switch section, and the final CTA block — 4 total minimum.
- Primary button text options: "Get Started Free", "Try My Job Trackr Free", "Start Tracking Free".
- Always pair with the free-tier trust line: "Free forever (3 jobs/month) · No credit card required".

## Schema (JSON-LD in head)

Include all three:

1. **BreadcrumbList** — Home → Compare → this page.
2. **FAQPage** — mirroring the on-page FAQ exactly (Google penalises mismatch).
3. **Article** — headline, description, dates, publisher My Job Trackr, `mainEntityOfPage` set to the canonical URL.

Copy the JSON-LD structure from an existing compare page and update values — do not write schema from scratch.

## Wiring (required, not optional)

After creating/updating the page:

1. **`sitemap.xml`:** add a `<url>` entry (or update `<lastmod>`).
2. **Internal links IN:** add a link to the new page from (a) the homepage compare section if one exists, (b) at least one relevant blog post, using keyword anchor text like "Huntr alternative for UK job seekers". A page with no inbound internal links will not rank.
3. **Internal links OUT:** the page must link to `/job-tracking/` (pillar), the homepage pricing section, and 1–2 relevant blog posts.
4. Nav/footer stamped from `partials/` via `node scripts/stamp-partials.js`, not copy-pasted.

## Pre-Ship Checklist

- [ ] Competitor facts verified (existing page, or WebSearch with dated comment) — nothing invented
- [ ] Verdict box in first screen; quotable and factual
- [ ] Comparison table: accessible markup, both currencies, honest ✓/✗
- [ ] "Choose <competitor> if…" section present (fairness requirement)
- [ ] 4+ CTAs with free-tier trust line
- [ ] One H1 with target keyword; title ≤60 chars; meta description ≤160 chars; canonical correct
- [ ] BreadcrumbList + FAQPage + Article schema present and matching on-page content
- [ ] sitemap.xml updated; ≥1 inbound internal link added from another page; outbound links to pillar + pricing
- [ ] Nav/footer match sitewide convention (Job Tracking link present)
- [ ] UK English; no double dashes (--); no disparaging language
