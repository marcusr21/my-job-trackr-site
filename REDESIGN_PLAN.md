# My Job Trackr Marketing Site — Full Redesign: Implementation Spec

**Repo:** `/Users/marcusrowland/Projects/my-job-trackr-site` (static HTML/CSS/JS, no build, GitHub Pages via CNAME → myjobtrackr.com)
**Reference repo (read-only):** `/Users/marcusrowland/Projects/job-trackr` (the Laravel app — source of the design system)
**Branch:** all work on `redesign-v2` (create from `main`; `main` stays deployable). Commit per phase minimum.
**Deploy:** NOT on merge — Marcus merges/deploys the day the app's `JOB_TRACKR_V2` flag flips. Your job ends at a review-ready branch.

This spec is self-contained. Every decision below was made and locked by Marcus (interviewed 2026-07-10) and validated against the repo by an architecture review. Do not relitigate decisions; do check facts against the repo before each edit (line numbers cited were correct as of 2026-07-10).

---

## 0. Mission & context

The site (23 HTML pages) sells My Job Trackr — a UK job-application tracker at app.myjobtrackr.com. Free plan: track 3 jobs/month, no credit card. Pro: £2.99/month web, £3.99/month via app stores. Success metrics: CTA clicks/signups and SEO rankings.

The site currently wears a generic blue/Inter template look. The app is mid-way through an approved V2 rebrand (persimmon/bone/ink palette, Geist type, "warm coach" voice — spec in `~/Projects/job-trackr/REDESIGN_PLAN.md` §2, tokens in `~/Projects/job-trackr/resources/css/app.css`). This redesign aligns the site with that system, adds modern marketing patterns and scroll-driven motion, and rewrites display copy — while changing **zero URLs, zero schema meaning, zero ranking body copy**.

Anti-"AI-slop" mandate: warm-cream + terracotta is a known generic-AI palette cluster. The palette is locked (brand), so distinctiveness MUST come from: the Stage Spine signature motif, CSS-built product vignettes, self-hosted Geist (not a serif display face), mono-numeral details, and disciplined restraint (persimmon on ≤2 elements per section).

## 1. Hard constraints — violating any of these is a failed implementation

1. **URLs never change.** No file/directory renames. Anchor ids `#features`, `#pricing` are linked from other pages' navs — keep them.
2. **Schema survives.** Every `<script type="application/ld+json">` block and every microdata `itemscope/itemprop` attribute keeps its content. Permitted value updates are ONLY those listed in §9 "Deliberate value updates".
3. **One H1 per page**, logical H2/H3 hierarchy preserved.
4. **Body copy is untouchable:** article text, FAQ answers, feature descriptions' sentences, "What is job tracking?" copy. Only *display copy* may be rewritten (see §6).
5. **All internal links preserved** (especially the sitewide Job Tracking → `/job-tracking/` link) and all app CTAs (`https://app.myjobtrackr.com/register|/login`, `target="_blank" rel="noopener"`).
6. **GA4 stays:** gtag `G-2GHGPQTN4Y`. There is NO Hotjar on this site (the repo's CLAUDE.md wrongly claims there is — you will fix CLAUDE.md in Phase 5).
7. **Canonicals, OG/Twitter structure, hreflang (en-GB on index + job-tracking), `llms.txt` link, robots.txt, CNAME: untouched** (og:image VALUES change per §9).
8. **UK English. No double dashes (--) in copy. No emoji in body copy** (the ✅ trust-strip glyphs are the one exception).
9. **All motion behind `prefers-reduced-motion: reduce`** — every animation must resolve to a complete, correct static state. No JS animation libraries; vanilla CSS + IntersectionObserver only.
10. **Accessibility floor:** WCAG AA contrast (see button caveat §3.3), visible `:focus-visible` rings, 48×48px tap targets on mobile, semantic HTML, keyboard-reachable accordions.

## 2. Page inventory (verified: 23 pages = sitemap.xml's 23 URLs)

- `index.html` (homepage)
- `blogs/index.html` + **15** post dirs `blogs/*/index.html`
- `compare/{huntr,teal,simplify}-alternative-uk/index.html` (3)
- `job-tracking/index.html` (SEO pillar)
- `privacy.html`, `terms.html`

Known existing bugs to fix en route: privacy/terms navs are missing the Job Tracking link (fixed automatically by stamped nav); ~25 inline `style=""` attributes; duplicated platform-section CSS blocks in styles.css (~747–798 and ~1324–1405); script.js missing entirely from `blogs/index.html`, all 3 compare pages, privacy, terms.

## 3. Design system (copy exactly — do not invent values)

### 3.1 Tokens — paste as the top of the new `styles.css`

```css
:root {
    /* Brand — Persimmon (CTAs/actions ONLY) */
    --persimmon-50:#FFF1EE; --persimmon-100:#FFD9D2; --persimmon-300:#F89589;
    --persimmon-500:#F25A4A; --persimmon-700:#DD3D2C; --persimmon-900:#8F2418;
    /* Warm neutrals — Bone */
    --bone-50:#FFFBF5; --bone-100:#FAF6F0; /* page bg */
    --bone-200:#F0EAE1; /* cards */ --bone-300:#E2DACE; /* borders */
    /* Ink — text */
    --ink-500:#5A4B3F; --ink-700:#2C231B; --ink-900:#18120E;
    /* Status — never persimmon for status */
    --jade-100:#DAF1E6; --jade-500:#0F8C5F; --amber-100:#F6E9CF; --amber-500:#C68A2E;
    /* Shape */
    --radius-sm:8px; --radius-md:16px; --radius-lg:24px; --radius-pill:9999px;
    /* Type scale: 12/14/16/20/28/40/56px */
    --text-2xs:.75rem; --text-xs:.875rem; --text-sm:1rem; --text-md:1.25rem;
    --text-lg:1.75rem; --text-xl:2.5rem; --text-2xl:3.5rem;
    --font-display:'Geist',ui-sans-serif,system-ui,sans-serif;
    --font-body:'Geist',ui-sans-serif,system-ui,sans-serif;
    --font-mono:'JetBrains Mono',ui-monospace,monospace;
    --ease:cubic-bezier(0.4,0,0.2,1);
}
```

### 3.2 Fonts (self-hosted — no Google Fonts anywhere when done)

Copy from `~/Projects/job-trackr/resources/fonts/` (verified present): `geist/Geist-{Regular,Medium,SemiBold,Bold}.woff2`, `jetbrains-mono/JetBrainsMono-{Regular,Medium,SemiBold}.woff2` → `public/fonts/`. `@font-face` weights 400/500/600/700 (Geist) and 400/500/600 (JBMono), all `font-display: swap`. Preload only Geist Regular + SemiBold in the head partial. Remove every `fonts.googleapis.com` / Inter reference sitewide.

### 3.3 Component recipes (match the app's shipped components)

- **Primary button:** persimmon-500 bg, **white** text ≥16px semibold, hover persimmon-700, active persimmon-900, `focus-visible` 2px persimmon ring + 2px offset, radius-md, min-height 48px (mobile tap). ⚠️ White-on-persimmon-500 ≈ 3:1 — passes AA only as large/bold text; if Lighthouse a11y flags it, darken bg to persimmon-700 (never change text colour or relitigate).
- **Ghost button:** transparent bg, 1px solid ink-900 border, ink-900 text, hover bone-200 bg, same radius/focus pattern (ink ring).
- **Card:** bone-200 bg, 1px solid bone-300 border, radius-lg (24px). **No box-shadows anywhere.** Hover (interactive cards only): border-color ink-500 + `translateY(-2px)`, 150ms.
- **Eyebrow/section-header:** uppercase, 12px, semibold, `letter-spacing:.1em`, ink-500, with a hairline bone-300 rule.
- **Stat numerals:** `font-family:var(--font-mono); font-variant-numeric:tabular-nums;`
- **Status glyphs:** jade-500 checkmarks/wins; amber-500 "coming soon"; ink-500 ✗. Never persimmon.
- **Dark sections** (stat band, final CTA, footer): ink-900 bg, bone-100 text, links bone-300 at 80% opacity → bone-100 hover; primary button unchanged (persimmon).
- **Persimmon discipline:** 90% of any screen is bone+ink. Persimmon ONLY on: primary CTAs, spine current-dot, progress fills, one hot-flag accent per section max.
- **Body:** bone-100 page bg, ink-900 text 16px/1.5; secondary text ink-500. Section rhythm alternates bone-100 / bone-50 / white `#FFFFFF` sparingly; content max-width 1200px; article measure 68ch.
- **Type:** H1 hero 40px mobile / 56px desktop, Geist Bold, line-height 1.05–1.1, `letter-spacing:-0.02em`. Section H2s 28–40px.

### 3.4 Stage Spine (signature motif — the app's `<x-v2.stage-spine>`)

Stages: Interested · Applied · Interview · Offer. Dots on a connector line:
- Past: solid ink-900 dot (12px), connector ink-900.
- Current: persimmon-500 dot with `spine-pulse` keyframe: scale 1→1.15→1, opacity 1→0.7→1, 2s infinite ease-in-out (app source: `~/Projects/job-trackr/resources/css/app.css:164-167`).
- Future: 2px bone-300 border ghost dot on bone-100, connector bone-300.
- Variants to build: `.spine` horizontal w/ labels; `.spine.-vertical` (desktop rail); `.spine.-compact` (no labels, inline in list rows/table rows); final "Offer" completion state lights jade-500.

Used as: homepage journey scroll-progress; section divider accents; compare-table row markers; blog category markers; final-CTA completion moment.

## 4. Architecture: partials + stamp script (no build step)

### 4.1 Partials (`partials/` — new directory)

| File | Contents | Notes |
|---|---|---|
| `nav.html` | Sticky nav: logo (`/public/img/logo-128.webp` w/ png fallback ≤20KB — generate in Phase 0), links Features `/#features`, Pricing `/#pricing`, Blog `/blogs/`, Job Tracking `/job-tracking/`; Login as text link; ONE primary button "Get started free" → register | Translucent bone-100 + `backdrop-filter:blur(12px)`, bone-300 bottom hairline when `.­-scrolled`, `z-index:60` |
| `footer.html` | ink-900 multi-column (Product / Compare / Blog / Get the app / Legal), Job Tracking link, store badges, **ends with `<script src="/script.js" defer></script>`** | 6 pages currently load no script.js — the footer partial fixes that |
| `head-assets.html` | font preloads, `/styles.css`, favicon set, `site.webmanifest` | Replaces the contiguous block at `index.html:275-286` (verified contiguous; canonical/OG/schema are outside it and stay per-page) |
| `analytics.html` | GA4 gtag `G-2GHGPQTN4Y` | Stamping sitewide ADDS GA4 to privacy/terms (they have none today) — deliberate |
| `cta-band.html` | Dark final-CTA: ink-900, headline "Ready when you are.", primary CTA, store badges, "Free forever (3 jobs/month) · No credit card required" | Replaces gradient-blue CTA blocks on blogs/compare |
| `sticky-cta.html` | Mobile-only bottom bar (§5.3) | |

**All URLs/paths inside partials are root-relative** (`/styles.css`, `/public/...`, `/job-tracking/`). This ends file:// viewing — local dev is `python3 -m http.server` (update CLAUDE.md accordingly, Phase 5). Page-internal nav links may remain absolute `https://myjobtrackr.com/...` as they are today.

### 4.2 Marker syntax + stamp script

In every page: `<!-- partial:nav --> …stamped content… <!-- /partial:nav -->`.

`scripts/stamp-partials.js` — dependency-free Node:
- Recursively finds `*.html` (skip `node_modules/`, `partials/`, `preview/`).
- For each marker pair found, replaces interior with current partial content. Idempotent (re-running changes nothing).
- `--check`: exits 1 listing any page whose marked regions differ from partials (drift detector).
- Workflow rule (document in CLAUDE.md): *edit the partial → run the script → never hand-edit between markers.*

## 5. Motion spec

Global: transitions 150ms `var(--ease)` for colour/border/transform/opacity; micro-interactions 150–350ms. ONE `@media (prefers-reduced-motion: reduce)` block at the end of styles.css disables all keyframes/reveals (elements visible, final states shown, counters render final values).

### 5.1 Reveal engine (all pages)
`.reveal` elements start `opacity:0; translateY(16px)`; IntersectionObserver (threshold .1, rootMargin -50px) adds `.in` → transition to visible, 500ms. Stagger children via `transition-delay` steps of 80ms (`.reveal-stagger > *`). Pure CSS classes — no JS inline styles (replaces the current inline-style approach in script.js).

### 5.2 Scroll-driven (progressive enhancement)
Inside `@supports (animation-timeline: view())`: journey-spine fill + subtle vignette parallax use `animation-timeline: view()`. Everywhere else (Safari/Firefox baseline): IO toggles per-beat classes on the spine — the fallback IS the baseline experience; parallax simply absent.

### 5.3 Mobile sticky CTA bar (all pages, ≤768px)
Fixed bottom bar: "Get started free" primary + compact App Store/Google Play inline-SVG icon links + dismiss ✕. Appears after scrolling past hero (IO on a hero sentinel; transform-only slide-in → no CLS; no slide under reduced-motion, still shown). Requirements: add `viewport-fit=cover` to the viewport meta sitewide (else `env(safe-area-inset-bottom)` resolves to 0 on iOS); pad with `env(safe-area-inset-bottom)`; add body bottom padding while visible so footer links are never covered; z-index 70 (above nav's 60). Dismissal persists for the session (sessionStorage).

### 5.4 Hero board loop (homepage)
`.vg-board`: 4 stage columns (bone cards + eyebrow labels). One persimmon-flagged job card travels Interested → Applied → Interview → Offer on a ~14s infinite keyframe timeline (dwell ~2.5s per stage, ~1s slides — use keyframe percentages). During Interview beat a `.toast` fades in: "Interview booked — Tuesday". Offer beat: jade tick. Reduced-motion: animation off, board shows the Offer end-state.

### 5.5 Count-up stats
`[data-countup]` numbers (mono font) count 0→value over ~1.2s when scrolled into view, once. ~20 lines JS. Reduced-motion or no-JS: final value in markup from the start (progressive enhancement: JS starts from 0 only when animating).

### 5.6 GA4 CTA events
`script.js` binds `gtag('event','cta_click',{cta_location, cta_target})` on: nav CTA, hero CTAs + store badges, pricing CTAs, cta-band, sticky bar. This is the measurement behind "success = clicks" and the H1-risk monitoring (§10).

## 6. Copy bank ("warm coach" voice — from the app's REDESIGN_PLAN.md §2.5)

Rules: second person; encouraging but factual; acknowledges job-hunt stress; no exclamation marks except genuine win moments; fragments OK; numbers over vagueness. UK English (organise, centralised, CV).

Only **display copy** is rewritten: heroes, section headlines/eyebrows, CTAs, button labels, microcopy, toast strings. Body paragraphs / FAQ answers / article text: byte-for-byte untouched.

| Surface | Copy (use verbatim unless context forces otherwise) |
|---|---|
| Homepage H1 | "Track every job. Land the right one." |
| Homepage subhead (carries the keyword the old H1 had) | "My Job Trackr is the job application tracker built for UK job seekers — organise every application, interview and offer in one place." |
| Trust strip | "✅ Free forever (3 jobs/month) · ✅ No credit card required · ✅ Pro from £2.99/month" |
| Primary CTA | "Get started free" |
| Journey beat 1 (Interested) | "Add your first one — momentum starts here." |
| Journey beat 2 (Applied) | "Every application, accounted for." |
| Journey beat 3 (Interview) | "Never miss the moment that matters." |
| Journey beat 4 (Offer) | "You've got an offer. Take a breath." |
| Final CTA headline | "Ready when you are." |
| 404 | "That page has moved on. On to the next." + Go home CTA |
| Toast (hero board) | "Interview booked — Tuesday" |

Note: current homepage H1 is "Job Tracking Made Simple" (`index.html:330`). The exact phrase "job tracking" moves to the subhead; title tag, meta description, and schema are unchanged. Deliberate, reviewed tradeoff — monitored post-launch (§10).

## 7. Product vignettes (pure HTML/CSS — replace ALL legacy screenshots)

The 9 legacy PNGs in `public/img/app/` show the old blue UI and are removed from **`<img>` usage** (files stay on disk; og:image handling is §9). Build these five reusable vignettes (develop in `preview/components.html`, then transplant):

1. `.vg-board` — hero dashboard board (§5.4).
2. `.vg-quickadd` — QuickAdd card: URL pill "pastes" in, title/company/location fields type-fill, save button pulses once. Loopable keyframes.
3. `.vg-calendar` — interview week strip: 7 day cells, one highlighted, event chip with mono time ("Tue 14:00 · Interview — Monzo").
4. `.vg-offers` — two compact offer cards side-by-side, mono salaries, one jade "Best match" tag.
5. `.vg-list` — 3 application rows, each with `.spine.-compact`, one row persimmon hot-flagged.

All content inside vignettes uses realistic UK examples (Monzo, BBC, NHS-style employers; £ salaries). `preview/components.html` gets `<meta name="robots" content="noindex">`, stays OUT of sitemap.xml, and do **NOT** add a robots.txt Disallow for it (that would prevent crawlers seeing the noindex).

## 8. Per-page specs

### 8.1 Homepage (`index.html`) — consolidate current 14 sections → 12

| # | Section | Spec |
|---|---|---|
| 1 | Nav | stamped partial |
| 2 | Hero (375px-first) | H1 + subhead + primary CTA + **App Store & Google Play badges directly beneath** (≥48px targets) + trust strip; `.vg-board` below, slightly overlapping section 3. Full CTA cluster above the fold at 375px. Badges: self-host official SVGs → `public/img/badges/` (current ones are hotlinked from `tools.applemediaservices.com` / `play.google.com` — `index.html:349,356`; reuse the existing link URLs) |
| 3 | "What is job tracking?" | existing copy verbatim, editorial restyle (eyebrow + 68ch), pillar link intact |
| 4 | Bento features (`#features`) | merge current 3 solution cards + 6 feature cards → one 6-cell bento: one 2-col cell with `.vg-list`, two cells with `.vg-quickadd` / `.vg-calendar`, remaining cells icon+H3+existing descriptions. All H3 keyword text preserved |
| 5 | Journey (scroll story; replaces screenshots grid + benefits demo) | Sticky spine rail (vertical left ≥1024px; horizontal top strip mobile) + 4 alternating beats pairing copy-bank headlines with vignettes: Interested/`.vg-quickadd` → Applied/`.vg-list` → Interview/`.vg-calendar` → Offer/`.vg-offers`. Spine fills per beat (§5.2) |
| 6 | Stat band | ink-900, 3–4 `[data-countup]` mono numerals — ONLY numbers already published on the site; never invent |
| 7 | Testimonials | existing 3 quotes, bone cards |
| 8 | Pricing (`#pricing`) | 2 cards; Pro: 1px persimmon-500 border + "Most Popular" pill (persimmon-100 bg / persimmon-900 text); app-store price small note; CTA on BOTH cards; facts unchanged; kill inline styles |
| 9 | Compare links | 3 cards → compare pages (internal links preserved), restyled |
| 10 | FAQ | all 16 Q&As verbatim, `<details>/<summary>` accordions, chevron rotate. **Carry every `itemscope`/`itemprop` onto the new elements** AND add the missing `itemscope itemtype="https://schema.org/FAQPage"` wrapper (current Question microdata is orphaned — no parent scope, e.g. `index.html:908`; adding the wrapper is a strict improvement). JSON-LD FAQ block untouched |
| 11 | Final CTA | `cta-band` partial variant with full spine completing, Offer dot jade (platform section folds in here; badges also in footer) |
| 12 | Footer | stamped partial |

### 8.2 Blog post template (15 pages; exemplar first: `blogs/what-is-job-tracking/index.html`)
Stamped nav/footer; hero = breadcrumb + mini-spine category marker + H1 + meta/byline; article restyled (68ch, 18px reading size, styled h2/h3/lists/blockquotes/links); gradient-blue CTA block → stamped `cta-band`; FAQ microdata rule as §8.1.10; article text/links/schema untouched. Perfect the exemplar, screenshot-verify, then replicate to the other 14.

### 8.3 Blog index — card grid on bone, tag pills, links unchanged.

### 8.4 Compare template (3 pages; exemplar: huntr)
Verdict box → bone-200 card with 3px persimmon-500 left accent; table restyled (jade ✓ / ink-500 ✗, `.spine.-compact` row accents, scrollable wrapper, `<th scope>` kept); body/FAQ/schema untouched; `cta-band`.

### 8.5 `job-tracking/index.html` (pillar) — homepage-lite: hero + spine + restyled sections; vignettes replace any screenshots.

### 8.6 `privacy.html` / `terms.html`
Stamped nav/footer (fixes missing Job Tracking link); legal type styling. **Remove privacy.html's Hotjar disclosures (`privacy.html:279-280, 346-349, 434`)** — they describe tracking that doesn't exist — and ensure GA4 is disclosed (GA4 is newly stamped onto these pages). ⚠️ Flag the legal-copy diff explicitly in the PR description for Marcus's review.

### 8.7 New `404.html`
Branded (GH Pages auto-serves it): copy-bank 404 line, nav/footer stamped, mini-spine, NOT in sitemap.

## 9. Deliberate value updates (the ONLY permitted schema/meta changes)

1. **og:image / twitter:image / blog Article JSON-LD `image`** → new `/public/img/og-card.png` (1200×630: bone bg, logo, "Track every job. Land the right one.", spine motif — create in Phase 0). Today all point at the legacy blue screenshot `public/img/app/job-dashboard-2.png` (e.g. `index.html:29,38`) — without this, every social share shows the old UI forever.
2. **FAQ microdata restructure** per §8.1.10 (values identical, structure improved).
3. **GA4 added to privacy/terms**; **privacy.html Hotjar text removed** (§8.6).
4. **`sitemap.xml` `<lastmod>`** on all 23 pages — at ship time (end of Phase 5), not before.
5. **viewport meta** gains `viewport-fit=cover` sitewide (§5.3).
Everything else in `<head>`/schema: byte-identical. Organization/publisher logo JSON-LD keeps pointing at `public/img/my-job-trackr-logo-colour.png` (file stays on disk).

## 10. Phases (execute in order; commit per phase; acceptance criteria = gate)

### Phase 0 — Foundation
Branch; fonts (§3.2); logo-128 assets; badges (§8.1.2); og-card (§9.1); NEW `styles.css` (tokens → @font-face → reset/base → components → vignette shells → motion blocks; template layers stay open through Phase 3); partials + `scripts/stamp-partials.js`; `script.js` rewrite (<180 lines: smooth scroll, nav-scrolled, reveal engine, countup, spine fallback, sticky bar, GA4 events).
✅ Gate: stamp script runs idempotently on all 23 pages + markers inserted; `--check` passes; homepage renders unbroken (even if unstyled-ish) via `python3 -m http.server`.

### Phase 1 — Vignettes + spine in `preview/components.html`
Build all 5 vignettes + all spine variants + buttons/cards/eyebrow demos in one noindex preview page.
✅ Gate: browser screenshots at 375/1440 of every component; hero board loop and reduced-motion end-state verified.

### Phase 2 — Homepage rebuild per §8.1.
✅ Gate: 375px first — CTA cluster above fold, no horizontal scroll; all `#features`/`#pricing` anchors work; FAQ microdata carried; JSON-LD diff clean; screenshots 375/768/1440.

### Phase 3 — Rollout (22 remaining pages + 404)
Exemplar blog post → replicate ×14; blog index; exemplar compare → ×2; pillar; legal ×2; `404.html`; og-card refs sitewide; inline-style elimination; legacy `<img>` removal; display-copy pass; viewport-fit; stamp everything.
✅ Gate: `--check` passes; per-template screenshots; grep gates (§11.2) pass.

### Phase 4 — Motion polish
Journey spine scroll-fill end-to-end (`@supports` split verified); stagger reveals; hover micro-interactions; parallax (enhanced browsers only); full reduced-motion audit.
✅ Gate: DevTools reduced-motion emulation: every element visible, correct final states, zero animation.

### Phase 5 — QA + docs
Run §11 verification; fix findings; update `CLAUDE.md` (no Hotjar; GA4 `G-2GHGPQTN4Y`; delete "simply open index.html" — root-relative paths require a server; document partials workflow + design system); update `.claude/skills/marketing-page/SKILL.md` (white-on-persimmon button recipe, partials workflow, vignette library, no Hotjar, self-hosted fonts), touch up `comparison-page` + `seo-blog-post` skills' template references; bump sitemap lastmod (all 23); write PR description flagging the privacy.html legal diff.
✅ Gate: everything in §11 green; PR open from `redesign-v2`.

## 11. Verification (all must pass)

1. `node scripts/stamp-partials.js --check` → clean on 23 pages + 404.html.
2. Greps return empty (allow-listed exceptions documented inline):
   - `grep -rn '#2563eb\|#1d4ed8' *.html blogs compare job-tracking styles.css`
   - `grep -rn 'fonts.googleapis\|Inter' — all pages + css`
   - `grep -rn 'hotjar\|hjid' — everywhere including CLAUDE.md`
   - `grep -rn '<img[^>]*img/app/' — img tags only` (og:image/JSON-LD values are deliberately updated, not grepped)
   - `grep -rn 'style="' *.html …` → only allow-listed survivors
3. **Schema value diff:** script extracts every JSON-LD block + microdata property values per page, before vs after → identical except §9 items. (Raw byte-diff is wrong by design — FAQ markup restructures.)
4. Local server + browser (Claude-in-Chrome): **375px pass first** (hero cluster above fold, sticky bar show/dismiss/safe-area, thumb targets, no horizontal scroll), then 768/1440; hero loop; journey spine fill; FAQ accordions; store badge links; zero console errors; every CTA resolves; reduced-motion pass.
5. `npx lighthouse` on homepage + 1 blog + 1 compare (mobile): Perf ≥90, SEO = 100, A11y ≥95, CLS <0.1, LCP <2.5s.
6. Sitemap: 23 lastmods bumped; preview + 404 absent.

## 12. Risks & mitigations

- **White on persimmon-500 ≈ 3:1** — ≥16px semibold button text; escalate bg to persimmon-700 if flagged. Locked to match the app.
- **H1 keyword shift** ("Job Tracking Made Simple" → brand line) — keyword subhead + unchanged title/meta/schema; GA4 cta_click + Search Console watched 4 weeks post-launch.
- **AI-default palette adjacency** — countered per §0; if a section reads generic, add spine/mono detail, don't add persimmon.
- **15 mechanical blog edits** — exemplar-first; stamp `--check` catches drift; verify one random replica against exemplar structurally.
- **`animation-timeline` support** — IO fallback is the baseline; scroll-driven is enhancement-only inside `@supports`.
- **Launch timing** — do not merge to main; Marcus deploys at app V2 cutover.

## 13. Addendum (2026-08-23) — Real screenshots supersede pure-CSS vignettes; two spec facts corrected

Decision made by Marcus after this spec was locked: **§7's "CSS/HTML-only, no real screenshots" rule is overridden.** Real screenshots of the live V2 app (captured via browser automation against the local Sail dev instance at `localhost:8000`, logged in as Marcus's dev account) are now in scope as source material for the marketing site's product imagery, alongside or instead of the pure-CSS vignettes originally spec'd. Store-listing screenshots also exist separately at `~/Projects/job-trackr/public/store-assets/v2/screenshots/`.

**Reference screenshots live in this repo at `_design-reference/app-screenshots/`** (underscore-prefixed so GitHub Pages/Jekyll excludes it from the published site — this repo has no `.nojekyll`, so default Jekyll processing drops any `_`-prefixed directory from build output; do not rename this folder without adding a `.nojekyll` exclusion or moving it out of the Pages doc root first). Inventory, each mapped to its §7 vignette slot:

| File | Vignette slot | What it shows |
|---|---|---|
| `01-applications-list.jpg` | `.vg-list` | Real `.spine.-compact` dot-line rows on the `/jobs` list — matches §3.4 |
| `02-add-job-empty.jpg`, `03-add-job-typing.jpg` | `.vg-quickadd` | Real "Paste a URL or type a company name" flow at `/jobs/add` |
| `04-job-detail-spine-top.jpg`, `05-job-detail-events.jpg` | full spine + partial `.vg-calendar` | Job detail page: horizontal spine, interview stage actions, event timeline |
| `07-offer-made.jpg` | `.vg-offers` | Offer stage: "You've got an offer. Take a breath — then add the details." + Accept/Decline/Negotiating |
| `08-offer-accepted.jpg` | `.vg-offers` completion state | 5-stage spine ending at Accepted |
| `06-offer-filter-no-results.jpg` | — | Discarded/reference only (filter UI glitch, not a usable asset) |

No real dashboard-board (`.vg-board`) file is in this folder yet beyond what was screenshotted inline in chat — recapture at Phase 1 if a saved file is needed.

**Two facts this real-app pass corrects in the sections above — resolve before Phase 1 vignette-building starts:**

1. **§3.4 stage list is wrong.** The spec assumes a fixed 4-stage spine (*Interested · Applied · Interview · Offer*). The real app supports **variable-length, custom-named stages per application** — observed spines were `Interested → Applied → Assessment Centre → Offer` (4 stages) and `Interested → Applied → Telephone → Offer → Accepted` (5 stages), with sub-labels like "Round 1". The copy bank's journey beat 3 ("Interview") and any homepage spine mockup need to either use a generic/illustrative stage name or accept that the real spine is not a fixed enum. This also affects §5.4's hero board loop and §8.1 journey section, which assume the same fixed 4 stages.
2. **§3.4's jade completion-state claim is wrong.** The spec says "final 'Offer' completion state lights jade-500." In the real app, the current-stage dot stays **persimmon** even at the terminal "Accepted" stage — there is no jade celebratory/completion glow anywhere in the observed flow. Any homepage/final-CTA spine mockup showing a jade Offer dot (§8.1 section 11) should be corrected to persimmon, or this needs an explicit product-side change request if jade-on-completion is still wanted.

Not yet verified in the real app (still open, not blocking): a dedicated calendar week-grid (`.vg-calendar` as spec'd doesn't appear to exist — interviews live in the job-detail timeline plus an "Add to calendar" export button instead); the `/search` route returned a blank page on this dev build.
