---
name: cro-audit
description: Run a conversion rate optimisation (CRO) audit on the My Job Trackr marketing site. Checks every page against a fixed checklist for conversion leaks — weak or missing CTAs, missing trust signals, pricing friction, absent free-to-paid nudges, mobile issues — and outputs a prioritised findings report with impact/effort ratings. Audit-only by default; only applies fixes when the user explicitly asks. Use when asked to audit conversions, find why signups are low, review CTAs, or improve free-to-paid conversion. Safe for smaller models — follow the checklist literally.
---

# CRO Audit

Audit the marketing site for conversion leaks. **Default mode is report-only** — produce the findings report and stop. Only edit files if the user explicitly asked for fixes (e.g. "audit and fix"), and then apply fixes following the `marketing-page` skill's design rules.

## Conversion Goals (in priority order)

1. **Primary:** visitor → free signup at `https://app.myjobtrackr.com/register`.
2. **Secondary:** free-plan intent → Pro intent (£2.99/month web, £3.99/month app stores). The upgrade itself happens in the app; the site's job is to make Pro feel like the obvious next step.
3. **Supporting:** blog/compare reader → homepage or pricing section.

Key conversion facts to check against: Free = 3 jobs/month, no credit card. Pro = unlimited tracking, native job search, analytics, job board integrations, offer comparison, priority support.

## Process

1. **Inventory pages.** List every page: `index.html`, `job-tracking/index.html`, `blogs/index.html`, each `blogs/*/index.html`, each `compare/*/index.html`, `privacy.html`, `terms.html`. (Skip legal pages for CTA checks; they only need nav/footer.)
2. **Audit each page** against the checklist for its page type below. Read the actual HTML — do not assume.
3. **Write the report** in the output format at the bottom, ordered by priority score.
4. Fixes only if explicitly requested.

## Checklist A — Every page

- [ ] **A1.** Nav contains exactly one primary CTA button ("Get Started Free" style) linking to `/register`. Login is a de-emphasised text link.
- [ ] **A2.** A CTA is visible above the fold (before scrolling, at both 375px and 1440px widths).
- [ ] **A3.** Trust microcopy appears near the primary CTA: free tier, "No credit card required", or price. A bare button is a leak.
- [ ] **A4.** Final CTA section exists at the bottom of the page (readers who reach the end are the hottest traffic).
- [ ] **A5.** All register/login links actually point to `app.myjobtrackr.com` and have `target="_blank" rel="noopener"`.
- [ ] **A6.** No dead ends: every page links onward to at least the homepage/pricing and one related page.
- [ ] **A7.** Mobile: CTA buttons ≥48px tall, full-width or thumb-reachable, no horizontal scroll at 375px.
- [ ] **A8.** No friction words near CTAs: "submit", "buy now", "purchase". Good: "Get Started Free", "Start Tracking Free".

## Checklist B — Homepage & pillar page (`index.html`, `job-tracking/`)

- [ ] **B1.** Hero headline states the benefit, not the category ("Never lose track of an application" beats "A job tracking app").
- [ ] **B2.** Hero has primary + secondary CTA, and the secondary is genuinely secondary (ghost style, not competing).
- [ ] **B3.** Social proof within the first two screens: user numbers, applications tracked, ratings, or testimonials. Flag invented-looking numbers too — false proof is a trust leak.
- [ ] **B4.** Product screenshot visible within the first two screens (people don't sign up for software they haven't seen).
- [ ] **B5.** Pricing section: Pro visually highlighted, exactly two plans, app-store price shown as a small note (not competing), CTA on BOTH cards (free card CTA is the primary signup driver).
- [ ] **B6.** Free plan's "3 jobs/month" limit is framed as generous-to-start, and Pro is anchored against it ("less than a coffee a month" style anchoring is allowed; drop it if it reads cheesy).
- [ ] **B7.** Objection handling exists near pricing: cancel anytime, no card required, FAQ covering cost.
- [ ] **B8.** A CTA appears at least every 2–3 screens of scrolling.

## Checklist C — Blog posts (`blogs/*/`)

- [ ] **C1.** At least one in-content product mention with a link, appearing in the first half of the post.
- [ ] **C2.** A mid-post or end-of-post CTA block styled distinctly from body text (card or banner), not just a text link.
- [ ] **C3.** Post links to the pillar page (`/job-tracking/`) and to 1–2 related posts or a compare page (keyword anchor text).
- [ ] **C4.** News/stats posts (e.g. unemployment figures) still bridge to the product: a "what this means for your job search" section with CTA.
- [ ] **C5.** No more than 3 product mentions (over-selling kills blog trust and time-on-page).

## Checklist D — Compare pages (`compare/*/`)

- [ ] **D1.** Verdict box with CTA in the first screen.
- [ ] **D2.** CTA after the comparison table (the moment of maximum conviction).
- [ ] **D3.** Price difference stated with concrete numbers in both currencies.
- [ ] **D4.** "How to switch" section exists with a CTA (removes the switching-cost objection).
- [ ] **D5.** 4+ CTAs total on the page.

## Checklist E — Free→paid nudges (sitewide)

- [ ] **E1.** Pro-only features (native job search, analytics, offer comparison) are shown/described on the homepage with visible "Pro" labelling — visitors should want Pro before they even sign up free.
- [ ] **E2.** Blog posts about advanced workflows (analytics, comparing offers, high-volume applications) mention that these are Pro features with the price. Hiding the price creates signup-then-churn.
- [ ] **E3.** Annual framing or cost anchoring appears at least once near pricing (e.g. "£2.99/month — £35.88/year, versus $40+/month for US alternatives").
- [ ] **E4.** The word "upgrade" path is clear: copy near the free plan mentions you can upgrade anytime.

## Scoring & Report Format

Score each finding: **Impact** (High = blocks/weakens a primary signup path on a high-traffic page; Medium = weakens secondary conversion or low-traffic page; Low = polish) and **Effort** (Low = single-file copy/markup change; Medium = multi-page or new section; High = new page/asset). Priority order: High-impact/Low-effort first, Low-impact/High-effort last.

Deliver exactly this format:

```markdown
# CRO Audit — <date>

## Summary
<3–5 sentences: overall state, biggest leak, expected wins>

## Findings (prioritised)

### 1. <Finding title> — Impact: High · Effort: Low
- **Where:** <file(s):line if known>
- **Checklist item:** <e.g. B5>
- **Problem:** <what's wrong, quoting the actual current markup/copy>
- **Fix:** <specific change, with suggested copy/markup>

### 2. ...

## Passed checks
<one line per page type: what's already good — prevents "fixing" things that work>

## Not audited
<anything skipped and why>
```

## Rules

- Quote the real HTML you found — never report a leak on markup you didn't read.
- Never recommend inventing social proof, fake counters, urgency timers, or dark patterns (pre-ticked boxes, hidden pricing). These are prohibited fixes.
- Do not recommend changes that conflict with SEO non-negotiables (schema, H1s, canonical URLs, URL structure — see the `marketing-page` skill).
- Keep recommended copy in UK English, warm-coach voice, no double dashes (--).
