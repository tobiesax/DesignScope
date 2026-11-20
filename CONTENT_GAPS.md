# CONTENT_GAPS.md

Tracks facts, assets and content we don't have yet. Per `CLAUDE.md` rule 1: if content is
missing, the section stays hidden rather than filled with a placeholder. This file must be
empty (or every remaining gap explicitly accepted by Stephen) before launch — see
`BUILD_PLAN.md` Week 5.

Source: `HANDOFF.md` section 10, plus anything found while building.

## 2026-11-20 Compliance & CRM-readiness pass (A2P 10DLC + GoHighLevel)

Tobi supplied a "Design Scope — Compliance & CRM-Ready Build Spec" PDF. It describes
design-scope-chi.vercel.app as "Vite/React" — that's wrong (it's this Astro repo; the URL is
confirmed as the same project's own temporary preview, listed above under "Infrastructure"),
but the compliance substance applies regardless of framework, so every task was implemented
against this actual codebase rather than assumed React components. What changed:

- **Consent proof capture** (the spec's main ask): `src/lib/lead.ts`'s `submitLead()` now
  attaches `sms_consent_text` (the exact checkbox wording, `business.ts` `smsConsentText`),
  `consent_timestamp` (ISO, set at submit) and `source_url` to every lead, regardless of
  whether consent was ticked — that's the proof-of-consent record a carrier would ask for.
  `src/pages/api/lead.ts` forwards all three to the GHL webhook.
- **Every phone-collecting form now has the same unticked consent checkbox**, via a new
  shared `src/components/shared/ConsentCheckbox.astro`: EnquiryForm, BookingModal (previously
  had none at all — `sms_consent` was hardcoded `false`), CommercialQuoteForm and
  CallbackForm (both previously had none either, by design, before this compliance need
  existed). The checkbox never blocks submission.
- **First/last name split**, plus an optional "Project address" field, added to EnquiryForm
  and BookingModal's details step.
- **Budget bands centralized**: `business.ts` now exports `budgetBands`, used by both
  EnquiryForm and BookingModal. They previously had two different inline arrays despite a
  comment claiming they matched (Under $15k/$30k/$60k vs Under $25k/$50k/$100k) — picked the
  wider BookingModal set as canonical since neither is confirmed real. Still needs Stephen's
  sign-off on the real bands.
- **`/terms/` page created** (`src/pages/terms/index.astro`), content from the spec verbatim.
  `[DATE OF PUBLISHING]` and `[MAIN BUSINESS NUMBER]` are kept as literal bracketed
  placeholders, not filled with `business.ts`'s values — the spec's own "still to confirm"
  list flags the main business number's ownership as unconfirmed (is (860) 264-5275 Design
  Scope's own number, or leased through Hibu?), so CLAUDE.md rule 1 says don't guess there.
- **`/privacy/` updated**: added the "no mobile information shared" sentence (word for word),
  a Service providers paragraph, a Cookies paragraph, a Your choices paragraph, and a
  `[DATE OF PUBLISHING]` line — same placeholder reasoning as Terms.
- **Footer**: added a Terms link next to Privacy.
- **HIC number confirmed**: `business.hicRegistrationNumber` was `null` (a prior
  CONTENT_GAPS.md "TODO: get from Stephen"); the spec's own "Confirmed business facts" table
  gives `HIC.0645972`, so this is now filled in everywhere it was previously showing
  "HIC # (to add)" / "CT HIC reg. # (to add)" (footer, contact page, the credentials strip).
  Also fixed a display bug while in there: the footer/contact composition was
  `CT HIC reg. #${hicRegistrationNumber}`, which with the real value reads "CT HIC reg.
  #HIC.0645972" (doubled "HIC") — changed to `CT ${hicRegistrationNumber}`.
- **Hours standardized** to the spec's exact wording ("Monday–Friday, 9:00 am–5:00 pm" /
  "Weekends by appointment only.") in `business.ts` — every page already composed from these
  two fields, so this was a two-line fix, not a per-page one.
- **Offers disclosure**: added the STOP/HELP/Terms/Privacy line under the "Text START" offer
  copy in `Offers.astro`.
- **Sample reviews**: the spec assumes these are still placeholder and asks to hide them
  behind a flag — not needed, since `reviews.ts` already carries 6 real curated Google
  reviews (2026-11-17 pass, see the reviews-related note elsewhere in this file).
- **GHL webhook**: deliberately did NOT adopt the spec's `VITE_GHL_WEBHOOK_URL` (a
  client-exposed env var) — that would leak the webhook URL to every visitor's browser,
  letting anyone bypass the honeypot/time-to-submit checks and post fake leads straight to
  the CRM. Kept the existing, more secure pattern: the webhook URL stays server-side in
  `/api/lead.ts` as `GHL_INBOUND_WEBHOOK_URL` (already an open item above under
  "Infrastructure"), and only the payload shape was extended.
- Confirmed clean, no changes needed: no hard-coded `vercel.app` links anywhere in `src/`; no
  raw phone numbers hard-coded outside `business.ts`.

Still open, per the spec's own "still to confirm with the client" list — do not guess at any
of these:

- [ ] Exact legal name spelling against the IRS letter (currently "Design Scope LLC" in
      `business.ts`, unconfirmed against that specific document)
- [ ] Whether (860) 264-5275 and (860) 773-0801 are Design Scope's own numbers or leased
      through Hibu — `business.ts` now has a `// TODO: confirm ownership before launch`
      comment on both
- [ ] Final budget bands (see above)
- [ ] Date of publishing for `/terms/` and `/privacy/` — both currently show
      `[DATE OF PUBLISHING]`
- [ ] `VITE_GHL_WEBHOOK_URL` was in the spec but isn't used — see "GHL webhook" above; the
      real open item is still `GHL_INBOUND_WEBHOOK_URL` under "Infrastructure"

## 2026-11-13 copywriting lift (client review follow-up)

The client reviewed the build and asked us to lift most of the copywriting from the current
live site (designscopellc.com) to match each corresponding new-site page, using HANDOFF.md
section 5's own old→new URL map. Done by fetching every live page directly via curl (not
WebFetch, which enforces a ~125-character verbatim-quote limit) and stripping the HTML with a
local script, then splicing the real text into the matching `src/data/*.ts` fields and page
copy. Updated: home hero/why-us/FAQs/offers, Kitchens/Bathrooms/Home renovations hero+intro+
included lists, the Showroom hero, the About intro, the Remodeling hub card blurbs, the Areas
hub intro, both real blog posts' full body text, and `business.ts`'s brand/membership lists.
Notes and remaining gaps from this pass:

- Supplier brand list and KBIS membership are now **confirmed** (no longer a gap) — the live
  site's own `/about` page has a structured "Brands" (~29 items) and "Associations" listing
  that resolves both open items below. Logo files are still needed from Stephen.
- The live site's own `/kitchen-remodeling` and `/bathroom-remodeling` FAQ sections are
  themselves unfinished Hibu placeholder text ("Title or Question" / "Describe the item..."),
  not real content — so `remodelFaqs` (used on both pages) is still our own grounded Q&A, not
  a lift from those two pages specifically. The dedicated `/faqs/` page's FAQs, however, now
  use the live `/faqs` page's real six-question set verbatim (`src/data/home.ts` `faqs`).
- The live homepage's offer headline ("10% Off Kitchen Cabinet Costs") contradicts every
  instance of its own body copy (which says 10% off the first project generally, not cabinets
  specifically) on every page that repeats it. Kept the body's broader, consistent scope
  rather than the narrower, self-contradicting headline.
- The live `/stephen_author` page has much more elaborate copy about Stephen than
  `business.ts` currently carries — a formal internship program and a structured local
  high-school trade-training initiative, on top of the already-confirmed facts (25+ years,
  Master's in Interior Design, co-founded 2016). Those two specific program claims were **not**
  lifted into the About page: they read as generic Hibu SEO-template embellishment rather than
  something to assert as fact sight-unseen. Confirm with Stephen whether either program
  actually exists before adding it anywhere.
- The live `/gallery`, `/reviews` and `/blog` index pages have almost no real body copy to
  lift (mostly just category links and teaser cards) — left those pages as they were.
- `/commercial/`, `/showroom/`'s category tiles, the restoration pages' risk/process lists,
  the contact page and the town pages (`/areas/[town]/`) were already grounded in facts
  fetched from the live site in an earlier pass and are close to its wording already — not
  re-touched in this pass beyond what's listed above.
- Found (not in the current sitemap, but still live) a second real blog post at
  `/how-to-plan-and-budget-for-professional-bathroom-remodeling-services` — already planned
  for in HANDOFF.md's redirect map; now has its real body text too.

Design now follows the approved GrowthOS design handoff
(`GrowthOS Proposal Design/design_handoff_design_scope_website/`) pixel-close — layout,
colour tokens, copy and components — at Tobi's explicit request ("build it exactly as it is
in the design brief, we will replace with clients real photos later"). This supersedes the
earlier, looser hi-fi mockup pass. Its own image files (hero slideshow, path cards,
before/after pair, showroom, category tiles, restoration scenarios, project photos) are
wired in temporarily — see `src/data/mockup-images.ts` and `src/assets/mockup-temp/`. The
handoff's own README flags several of these as "AI-generated stand-ins"; none are real
Design Scope photos. None of this ships at launch — swap `mockup-images.ts`'s imports for
Stephen's real photos and delete `mockup-temp/` before Week 5 QA.

The "A+ BBB rating" and "Best of Houzz 2024" trust badges are back (`TrustBadges.astro`,
`business.credentials`) — the handoff's own trust-badge row includes them, so they're shown
now to match it exactly. They remain **unconfirmed** (not in HANDOFF.md). Don't ship without
Stephen confirming both are real, and swap the plain icon placeholders for the official
BBB/Houzz/Wellborn Forest member badge artwork once confirmed.

The home page's review carousel (`src/components/home/ReviewCarousel.astro`,
`src/data/reviews.ts`) is the same kind of temporary content — 6 sample reviews with specific
towns and job types, taken directly from the design handoff's own placeholder data (its
README lists these as "samples" needing client confirmation), not real customers. CLAUDE.md
rule 2 says never invent reviews, so this must not ship. Replace `reviews.ts`'s
`sampleReviews` and `sampleAggregateRating` with real Google reviews (collected with
Stephen's OK) before Week 5 QA, same deadline as the mockup photos. `/reviews/` has the same
gap — see below.

Kitchens' and Bathrooms' "Typical investment" price ranges (`src/data/services.ts`
`included`/`ranges`) are the design handoff's own figures — not invented, but not confirmed
by Stephen either. Verify them (or get his own ranges) before launch. The handoff's $/mo
financing figure next to each range is now shown too (`src/data/finance.ts`, at Tobi's
request — an earlier pass had dropped it), paired with a visible "financing example, not an
offer" line: no lending partner is wired up yet (BUILD_PLAN.md), so an unqualified monthly
number would misrepresent what's on offer. Swap for Stephen's real ranges (and wire up
actual financing, or drop the $/mo line) before launch.

The cost estimator and style quiz on `/remodeling/kitchens/` and `/remodeling/bathrooms/`
(`CostEstimator.astro`, `StyleQuiz.astro`) are Phase 2 pieces per the design handoff's own
README/SCOPE, built now at Tobi's explicit request rather than left out. The estimator's
"$X/mo" figure is shown too, same disclaimer treatment as the ranges above.

## 2026-11-17 ScrollHero prototype (alternative homepage hero)

Built a second homepage hero, `ScrollHero.astro`, alongside the original (`Hero.astro` is
untouched) — a scroll-driven desktop experience (GSAP ScrollTrigger scrub, 400vh sticky stage,
slow zoom + crossfade across 4 photos) with a plain timed crossfade on mobile, a one-time
session-scoped intro (reusing the real animated logo clip from `/about/`), and a reduced-motion
fallback. Toggle between the two: `PUBLIC_HERO_VARIANT=scroll` env var for the site-wide default,
or `/?hero=scroll` / `/?hero=classic` to override per visit — see `src/data/feature-flags.ts` and
`src/pages/index.astro`. Making the query param actually work required opting the homepage out of
static prerendering (`export const prerender = false`), so it's now a Vercel on-demand function
like `/api/lead` rather than a prebuilt static file — everything else on the site is unaffected.
New dependency: `gsap` (added to `package.json` — asked for by name in the brief, "Use GSAP
ScrollTrigger with scrub", so not treated as needing separate sign-off per CLAUDE.md's "ask
before a new dependency" rule).

Photos (`public/hero/01..04.webp`, converted from four files Tobi named directly out of a fuller
25-page live-site crawl, `designscope-photos/` outside this repo — see the entry below):

1. **Welcome** — the showroom building's own real exterior, with its "DESIGN SCOPE" sign and a
   "NOW OPEN" banner. This resolves a real gap: when building the About page (2026-11-17, earlier
   the same day) a full crawl of 6 individual live pages found no exterior/entrance photo
   anywhere, so that page ended up using an animated logo treatment instead of a photo. This
   fuller 25-page crawl turned one up — worth considering as the About page's photo too.
2. **Design** — the real showroom interior (matches the confirmed Wellborn Forest cabinetry
   branding).
3. **Build** — **this is a problem, flagging clearly**: this exact file
   (`residential-services-gallery-02-b7e10809.jpg`) is the same photo already identified and
   rejected elsewhere in this project (see "2026-11-17 Real photos added..." below, and the
   original note near the top of this file) as generic stock new-construction photography (a
   Tyvek-wrapped house under construction) — not a Design Scope job. Used here anyway since it
   was named explicitly for this comparison prototype, but **don't ship it** — swap for a real
   Design Scope renovation-in-progress photo, or drop to 3 slides, before this goes anywhere near
   the client or production.
4. **Walkthrough** — a real finished kitchen project photo.

## 2026-11-18 Kitchens gallery + /projects/ real data (pilot of a bigger rollout)

Tobi asked for a proper gallery on every service page (not just the existing 3-4-photo "Recent
work" teaser), feeding the same real photos into `/projects/`, with `/projects/` itself grouped
by category. Agreed approach (his choice, of 3 options each): a grid-with-lightbox gallery
(`src/components/shared/PhotoGallery.astro`, new, reusable — click a thumbnail, it opens
full-size with prev/next/close, keyboard nav too); `/projects/` keeps its existing filter UI
(search/category/town — already built, just swap in real data) rather than switching to static
grouped sections; and build it on **Kitchens first**, review, then roll out to the other 4
categories (Bathrooms, Commercial, Home renovations, Restoration) next.

Kitchens is done as the pilot:

- Pulled 4 more real photos from the live site's own `/gallery` page ("Kitchen Designs" category)
  — confirmed, by matching details across shots (same gray glossy cabinetry, black bar stools, a
  "COFFEE TIME" shelf sign, a wine fridge, a Roomba), that these are the SAME real open-concept
  kitchen/bar project as the already-used `kitchen1`/`kitchen3`, just more angles of it, not new
  projects. `kitchenGalleryPhotos` (`project-images.ts`) is a curated 9-photo set spanning that
  project plus two other distinct real kitchens (`kitchen5`, `kitchen6`/`kitchen-hero`) — not 9
  different jobs.
- `/remodeling/kitchens/`'s old 4-photo `ServiceGallery` teaser is replaced with the full
  `PhotoGallery`, all 9 photos, linking to `/projects/?cat=Kitchens`.
- `/projects/` no longer shows its 5 fake "Kitchens" case studies (invented towns/budgets/
  narratives, per the note below) — real Kitchens cards use the same 9 photos instead, opening
  the same lightbox pattern (no real brief/scope/products exists yet to give them an actual
  `/projects/[id]/` detail page, so they're a button, not a link). The other 10 fake case studies
  (Bathrooms, Commercial, Whole home, Restoration) are untouched for now — next in the rollout.
  The category filter now also reads `?cat=` from the URL on load, so the Kitchens page's "View
  all projects" link lands pre-filtered.

Not done yet, same pattern to repeat per category: vet more real photos from the fuller crawl for
Bathrooms/Commercial/Home renovations (Restoration still only has the 1 real photo noted below —
there may just not be more to find for it), add each category's own `PhotoGallery` section to its
page, and replace that category's fake `case-studies.ts` entries on `/projects/` the same way.

## 2026-11-17 Real photos added for Home renovations and Restoration

Ran a fuller crawl of designscopellc.com (`download-designscope-photos.mjs`, saved to a sibling
`designscope-photos/` folder outside this repo, with an `index.csv` mapping every file to its
source page) covering all 25 known live pages, not just the handful fetched individually in
earlier passes. 154 photos total. Reviewed the new ones for authenticity the same way as the
existing real kitchen/bathroom/commercial sets (CLAUDE.md rule 2) and added two categories that
were previously placeholder-only:

- **Home renovations** (`project-images.ts` `home-reno-1..4`, `homeRenovationProjects`): four
  interior photos from the live site's own `/residential-services` page (finished basements, an
  open living/dining renovation) — **moderate, not full, confidence** these are real: each shows
  a specific non-generic personal detail (a handwritten door sign, a religious macrame wall
  hanging) that stock libraries don't typically include, but unlike the kitchen/bathroom/
  commercial sets there's no cross-check of the same room from multiple angles to fully confirm.
  This is a **different, separate image set** from the `/gallery` page's hash-suffixed
  "residential-services-gallery" photos already rejected as generic stock (roof/exterior/
  tract-house shots) — that rejection still stands and is unaffected. The page's own hero photo
  (a glossy staged European-style apartment) and a 3D-rendered kitchen on the same page were
  both excluded as clearly not real photos. Replaces the mockup photo in `homeRenovations.heroImage`
  (services.ts) and the single invented-town "Simsbury" placeholder project in `home.ts`
  `mockProjects` — Home renovations no longer has an invented town anywhere.
- **Restoration** (`project-images.ts` `restoration-rebuild-1`): one photo from the live site's
  `/commercial-restorations` page — **high confidence** real, because it and several other
  photos across both the `/commercial-renovations` and `/commercial-restorations` pages (plus a
  hero image shared by both) show the exact same building under construction and finished (same
  pendant lights, same glass-walled offices, same EXIT signage, same exposed ceiling), confirming
  one real, extensively documented commercial rebuild. Used only for `DryOutToRebuild.astro`'s
  AFTER slot, replacing the earlier Tobi-supplied stand-in — still not literally the same job as
  the BEFORE photo (which is residential and still has no real equivalent — see below), so the
  section's caption now reads "Representative before and after — not the same job" instead of
  the previous, inaccurate "A real restoration, before and after". Deliberately **not** used for
  the hub's fire/water/mold/storm category tabs themselves, since a commercial office photo
  would misrepresent those residential-damage-specific categories.

Still open: no real **residential** fire/water/mold/storm damage "before" photo exists anywhere
on the live site (confirmed again in this fuller crawl) — `DryOutToRebuild.astro`'s BEFORE slot
and all four `hubServices` category images are still mockups/stand-ins. The rest of the fresh
154-photo crawl (gallery/, 00-sitewide/, etc.) wasn't otherwise gone through — it mostly
duplicates photos already confirmed real or already rejected as stock in earlier passes.

## 2026-11-17 AI Room Visualizer prototype

Built the static, clickable prototype of the AI Room Visualizer described in the "Design Scope —
AI Room Visualizer" plan doc (a Claude Docs page, not tracked in this repo), per its section 16
("styled prototype first") and section 17 ("updated flow: snap, compare three options, visit the
showroom"), using a client-supplied mockup image for layout reference only. No API calls, no
backend — entirely client-side, styled with the site's existing design system, behind
`VISUALIZER_ENABLED` (`src/data/feature-flags.ts`, currently `true`).

What it is and isn't:

- New `/visualize/` page: upload/snap a photo (read client-side only, via
  `URL.createObjectURL` — never sent anywhere, since there's no backend) → pick Kitchen or
  Bathroom → "your 3 options" (Refresh / Full remodel / Open-plan, or the bathroom equivalents)
  → pick one → a result screen that opens the **real** booking modal, pre-filled with the room
  and "At the showroom".
- The "3 options" are **not** an AI render of the visitor's own photo — there's no image-editing
  API wired up. They reuse the same real Design Scope project photos and the same "Typical
  investment" tiers already shown on `/remodeling/kitchens/` and `/remodeling/bathrooms/`
  (`src/data/services.ts`), paired up by what each photo actually shows. Labelled on-page as
  examples, with "AI concept for inspiration only" per the plan's own honesty rule.
- The plan's "10% off your cabinet order when you visit" tie-in is flagged in the plan doc itself
  as unconfirmed with Stephen — not shown as a new offer here. The result screen instead reuses
  the already-confirmed `business.offers.newCustomer` line.
- No "Email me this design" button (plan section 4) and no fake specific time-slot buttons (the
  plan's mockup shows "10:00 AM / 1:00 PM / 3:00 PM") — both would be dead or dishonest without a
  backend. "Book my showroom visit" opens the site's real, already-built booking modal instead,
  which has its own honest "times shown are placeholders" handling.
- New homepage band directly below the hero (plan section 12's top-priority placement — the About
  preview now sits one slot lower), a lighter inline teaser on `/remodeling/kitchens/` and
  `/remodeling/bathrooms/` right after Typical Investment, and a "Visualize your room" nav link
  with a "New" tag. Not added to the showroom page or the 5 town pages (also listed in the plan
  as "supporting spots") — kept this pass to the primary placements; the `VisualizerBand`
  component is reusable if those are wanted later.
- This is explicitly a pitch prototype, not committed scope — the plan doc frames the real build
  (API-backed, Vercel Blob storage, n8n automation) as a **paid add-on outside the current $3k
  project**, pending Stephen's sign-off. Nothing here calls an external API or stores any data.

## 2026-11-16 certifications and payment methods added

Added two real, confirmed items from the live site's own `/about` structured data that weren't
on the new site anywhere yet: the "Warmup Certified Installer" and "Schluter Systems Certified
Installer" certifications (added to `business.credentials`, shown in `TrustBadges.astro`
alongside the still-unconfirmed BBB/Houzz badges), and the full "Payment Options" list (Visa,
MasterCard, American Express, Discover, PayPal, Apple Pay, Google Pay, Samsung Pay, Zelle,
Cash, Check, Invoice, Financing) as `business.paymentMethods`, shown as a chip row on
`/contact/`. Both lifted verbatim from the live listing, not invented.

## Business facts

- [ ] HIC registration number
- [ ] Confirm weekend hours / appointment policy and same-day availability wording
- [ ] Stephen's surname and a short bio for the About page
- [x] Exact wording of the offers (10% new customer, 5% military) — resolved 2026-11-13, see
      the copywriting-lift note above
- [x] Full supplier brand list — resolved 2026-11-13 from the live site's own `/about`
      structured data (`business.ts` `showroomBrands`); logo files still needed from Stephen
- [x] Confirm KBIS membership — resolved 2026-11-13, confirmed on the live site's own `/about`
      structured data
- [ ] Google Business Profile review link
- [ ] Budget bands for the enquiry form (HANDOFF.md section 7)
- [ ] Confirm the final 3 town pages (proposed: Bloomfield, West Hartford, Windsor)
- [ ] EIN / Tax ID and exact legal business classification (LLC) for GoHighLevel's A2P 10DLC
      brand registration — needed before Stephen can submit it (BUILD_PLAN.md Week 1 `[ops]`)

## Assets

- [ ] Logo source file (original vector SVG/AI/EPS) — despite the filename, the Hibu asset
      actually serves at 200×80px (`src/assets/logo.png`), too low-res for a crisp header;
      need the original vector or a high-res export from Stephen
- [x] Brand colours — confirmed against the approved proposal's hi-fi mockup: orange
      `#ff5f00`/`#c24400` plus dark/light neutrals, and red `#e8192c` reserved only for
      restoration/emergency accents (never general chrome). Tokens live in
      `src/styles/global.css` (`brand`/`brand-dark`/`urgent`/`ink`/`paper`/etc. — CLAUDE.md
      names two brand hues `brand-primary`/`brand-accent`, but only one exists; named to match
      their actual roles instead)
- [x] Fonts — matched to the approved mockup: Montserrat, one family for headings and body
      (weights 300–900), self-hosted via `@fontsource-variable/montserrat`. Supersedes
      CLAUDE.md "Brand"'s generic "one serif + one sans" guidance, now that an approved
      design exists to follow instead
- [x] Kitchens (4) and Bathrooms (6) project photos — REAL, scraped from the live site's own
      `/kitchen-remodeling` and `/bathroom-remodeling` pages at Tobi's request (genuine
      completed Design Scope jobs, not placeholders). See `src/data/project-images.ts` and
      `src/assets/projects/`. No town is known per photo (the live site doesn't tag them) —
      don't invent one; `town` is omitted rather than guessed. Two kitchen-gallery images (a
      laundry nook, a home bar area) were excluded as miscategorised on the live site.
- [ ] `/remodeling/kitchens/` and `/remodeling/bathrooms/` hero photos were swapped (at
      Tobi's request) for two images he supplied directly (`src/assets/mockup-temp/subway-
tile-kitchen.png`, `spa-bathroom.png`, via `mockup-images.ts`), replacing the real
      scraped `kitchen-hero`/`bathroom-hero` photos above (still defined in
      `project-images.ts`, just no longer referenced). Both supplied images appear to be
      AI-enhanced/upscaled versions of the _same two rooms_ as the real photos they replaced
      (same subway tile kitchen, same glass-shower bathroom) — generic filenames
      ("Bright Blue-Gray Subway Tile Kitchen.png"), not a camera original, so treat as
      unconfirmed/enhanced rather than a straight real photo until Stephen confirms. Swap for
      his real (unenhanced) photos before launch, same as everything else in this file.
- [ ] The gallery's first kitchen photo ("White kitchen with reflective island", `kitchen1`)
      and first bathroom photo ("Tub and double-sink vanity", `bathroom1`) were likewise
      swapped for enhanced versions Tobi supplied directly — same room in each case (verified
      side by side: same light fixture/cabinetry for the kitchen, same mirror/tub/vanity for
      the bathroom), not a fresh scrape. Same unconfirmed/enhanced caveat as the hero photos
      above; swap for Stephen's real unenhanced originals before launch.
- [ ] `ThreeDDesignBlock.astro`'s "3D render · image needed" slot (Kitchens/Bathrooms pages)
      previously had no image at all, per CLAUDE.md rule 1 — now filled with a hand-drawn/
      rendered-style sketch Tobi supplied. Still not an actual 3D render of a real Design
      Scope project; swap for a genuine render (or a real one from the design software used
      at the client's own 3D-design step) before launch.
- [x] Commercial (5) project photos — REAL, scraped from the live site's own `/gallery` page
      (the "commercial-services-gallery-\*" image set) at Tobi's request. Checked for
      authenticity before use: internally consistent (the same few real spaces — two break
      rooms, a conference room — shot from multiple angles, with specific non-stock details
      like branded vending machines and a handwritten "dishwasher out of order" sign). See
      `src/data/project-images.ts` and `src/assets/projects/commercial/`. No town known (the
      live site doesn't tag it), so `town` is omitted — the mockup's "Hartford" was invented
      and is now dropped along with the mockup photo
- [ ] Home renovations still uses the Claude-generated mockup photo (`mockup-temp/`) — the
      live site's own "residential-services-gallery" image set was checked the same way and
      **failed**: it's generic stock photography (a European-style tile roof, a new-build
      tract house, a glossy staged apartment interior — none of it reads as genuine Design
      Scope work, unlike the commercial and kitchen/bathroom sets), so none of it was used.
- [ ] Showroom virtual tour video — the design handoff's "Virtual tour" section (Phase 2)
      describes a pre-recorded "3-minute video tour of every display" with a clickable play
      button and a timestamp badge. No such video exists, so built the section (at Tobi's
      request) using only the half that's real right now: a live video walkthrough with a
      designer (already a working option in the booking modal's "where" step). The thumbnail
      and copy were adjusted to not claim a recorded tour exists — clicking the photo/play
      button opens the real booking flow preset to "Video call" instead of playing a video.
      Once Stephen records an actual tour video, add it back as a true playable clip.
      Real whole-home-renovation photos still need to come directly from Stephen
- [ ] Restoration (hub, fire & smoke, water damage) has no real photos at all — not even a
      scraped single, since the live site's fire-and-smoke-damage-restoration and
      water-damage-restoration pages have no gallery images to scrape (confirmed by
      fetching them directly). Each page now uses its own design-handoff scenario image
      (`res-fire.png`, `res-storm.png`, `res-mold.png`, `restoration.jpg`) instead of one
      generic photo reused three times, but none are real (`src/data/restoration.ts`,
      `hubServices`). The hub's "Dry-out to rebuild" section's "after" slot now shows a
      rebuilt-space stand-in Tobi supplied (`dry-out-after` in `mockup-images.ts`), replacing
      the "After photo needed" placeholder — still not a real Design Scope project, and not
      the same room as the "before" photo (CLAUDE.md rule 1 — no fake before/after implied),
      just a representative pair. Swap for a real rebuilt-room photo before launch
- [ ] Restoration's "~60 min" typical-arrival stat (`RestorationStats.astro`) is the design
      handoff's own placeholder figure, not a real operational number — confirm Hartford
      County's actual typical arrival time with Stephen before launch; this is a concrete
      claim homeowners could rely on, not just cosmetic copy
- [ ] Restoration's "within 10 minutes" callback commitment (the hero's "Can't talk?" link,
      `CallbackForm.astro`'s subcopy and confirmation) is also the handoff's own figure, same
      caveat as the arrival stat above — confirm the real SLA with Stephen before launch.
      The confirmation screen's claim that "a text confirmation is on its way" was dropped
      (no SMS integration exists to send one), but the 10-minute figure itself was kept to
      match the handoff exactly
- [ ] Before-and-after pairs specifically (have singles only so far) — check if the live site
      has any, otherwise need these directly from Stephen
- [ ] 5–10 showroom photos (exterior with signage, displays, brands)
- [ ] Team photo for About
- [ ] A real photo of the Design Scope building/entrance/showroom signage with
      the logo on a wall, for the About page's side image — confirmed not to
      exist anywhere on the live site (re-crawled 2026-11-17: home, /about,
      /stephen_author, /gallery, /reviews, /showroom-store all checked, see
      the 2026-11-16 note above for the full image inventory). Client doesn't
      want to use Stephen's own photo either, so at the client's choice the
      About page currently shows a large logo treatment on a dark panel
      instead — swap for a real exterior/entrance photo if one is ever taken
- [x] Supplier/membership logos — found on the live site while scraping project photos
      (~29 brand logos incl. TOTO, Hansgrohe, Wellborn Forest, Brizo, Delta, Franke, Robern,
      Schluter Systems, MSI, Fabuwood + more; membership logos for HBRA, Bloomfield Chamber,
      KBIS). Not yet pulled into the project as actual logo files — `business.ts` now also
      has `showroomBrands`, a 20-name list from the design handoff's own BRANDS array, shown
      as text chips on `/showroom/` ("On display") and in each product category's brand
      line; still unconfirmed, same as the original confirmed-5 `supplierBrands` list
- [ ] The showroom hero's "30+ brands" claim (design handoff) was dropped — we can't confirm
      a specific count, only the unconfirmed `showroomBrands` list above. Confirm the real
      brand count (or drop the claim entirely) with Stephen
- [ ] Real reviews to feature (current reviews page has none — only brand logos). The home
      page's review carousel (`ReviewCarousel.astro` / `src/data/reviews.ts`) and `/reviews/`
      both need real quotes before launch — see the note near the top of this file
- [ ] Verify or drop the "A+ BBB rating" and "Best of Houzz 2024" trust badges (re-added per
      the design handoff, see the note near the top of this file) — not in HANDOFF.md, not
      confirmed anywhere; don't ship without Stephen confirming they're real
- [ ] `/commercial/`'s client proof section (6 "Client logo" placeholder tiles, 2 quotes
      marked "· sample") is the design handoff's own placeholder content, same temporary
      treatment as the reviews above — replace with real client logos (with permission) and
      real quotes before launch. Its case study link currently points to `/projects/`
      rather than a specific case study page, since that template doesn't exist yet
      (tracked as a follow-up)
- [ ] `/commercial/`'s "Service agreements" section (Essentials/Property/Portfolio plans) is
      a Phase 2 piece in the design handoff, built at Tobi's request so Stephen can decide
      whether to keep it — its own prices ($299/mo, $599/mo, Custom) are the handoff's exact
      draft figures, explicitly labelled "draft placeholders for the client to confirm" in
      both the handoff and on the page itself. Not real pricing until Stephen sets it; remove
      the section entirely if he doesn't want to offer service agreements at all
- [ ] Stephen hasn't reviewed any service-page copy yet. `/remodeling/kitchens/` and
      `/remodeling/bathrooms/` headline, subcopy and intro paragraphs (`src/data/services.ts`)
      are written from confirmed business.ts facts, not invented, but are unreviewed marketing
      copy, not his words — flag for approval alongside the (now real) galleries, and ask him
      to confirm which town each photo is actually from
- [ ] The rest of Week 3's pages (home renovations, restoration × 3, commercial, showroom,
      about, offers, contact, privacy, book, projects index + single, reviews, areas hub + 3
      towns, FAQs, blog index + 2 posts) are all unreviewed marketing copy too, grounded only
      in confirmed business.ts facts and (for restoration/commercial/showroom/home renovations)
      facts fetched directly from the live site's own service pages — never invented, but
      never seen by Stephen either
- [ ] `/projects/` and every `/projects/[id]/` case study now use the design handoff's own
      15-project PROJECTS data (`src/data/case-studies.ts`) — full brief/what-we-did/result
      narratives, products, a "sample review" quote, timelines and (for `kitchen-bloomfield`)
      a real before/after pair. None of this is real: it's the handoff's own placeholder
      content (its README lists "project details and photos" as something to confirm with
      the client), not grounded in any actual Design Scope job. Replace with Stephen's real
      15+ projects — photos, before/afters, scope, cost, products and real reviews — before
      launch; this is one of the bigger remaining content gaps
- [x] Town pages expanded from 3 to all 5 (`/areas/simsbury/`, `/areas/avon/` added) and
      rebuilt to the design handoff's town template exactly — hero with a stats row, local
      projects, a 3-up band (remodeling / restoration / showroom), other-town links. Confirm
      the 3-vs-5 scope with Stephen (see "Business facts" above)
- [ ] None of the 5 town pages have a real, town-tagged project to show. Each now falls back
      to the handoff's placeholder case studies (`src/data/case-studies.ts`) that happen to
      share the town's name, same honesty caveat as that file — not real local proof yet.
      Each town page's intro copy (home styles/eras per town) and drive time from the
      showroom are also the handoff's own, unconfirmed — verify with Stephen
- [ ] `/areas/simsbury/` and `/areas/avon/` don't exist yet. The design handoff builds all 5
      of CLAUDE.md's candidate towns (business.ts `townPages` was expanded from 3 to 5 to
      match it), and the footer/home service-area band already link to all 5 — but only the
      original 3 have a page built. Confirm the 3-vs-5 town scope with Stephen (it changes
      the BUILD_PLAN.md Week 4 scope) and build the remaining 2 pages either way
- [x] The 2 original blog posts are migrated with the same title, slug, date, author and body
      text as the live site — resolved 2026-11-13, see the copywriting-lift note above. Still
      not wired into Keystatic yet (see "Infrastructure" below)
- [ ] 5 more blog posts added at Tobi's request, to seed organic/keyword SEO traffic: the
      design handoff's blog mockup showed these same 5 titles/categories/excerpts as example
      cards with no article behind them ("Water damage: what to do in the first hour",
      "Quartz vs granite", "Aging in place: 7 bathroom upgrades", "Does homeowners insurance
      cover mold?", "Planning a spring kitchen"). Written as general, accurate homeowner
      advice — no invented Design Scope-specific stats, equipment or certifications — but
      they're not Stephen-authored or fact-checked against how Design Scope actually works,
      and they reuse the same temporary mockup images as everything else in this file. Have
      Stephen review for accuracy/voice and swap in real photos before launch
- [ ] `/reviews/` is now built but honestly has no reviews yet — it points to Google/Yelp
      instead of showing anything invented. Swap in real review content once collected
- [ ] `/book/` has no live GoHighLevel calendar embed yet (`PUBLIC_GHL_BOOKING_URL` isn't
      set) — it falls back to a call/text prompt

## Access

- [ ] Domain registrar
- [ ] Hibu account (and contract notice period / domain ownership)
- [ ] Google Business Profile
- [ ] Search Console / GA4
- [ ] Social accounts

## SEO

- [x] Re-crawl designscopellc.com — fetched its actual `/sitemap.xml` (BUILD_PLAN.md Week 5)
      and found ~126 auto-generated local-SEO pages (`/sap/kitchen-remodeling/{town}`,
      `/sap/bathroom-remodeling-companies/{town}`) plus 2 duplicate homepage variants
      (`/cat-landing`, `/core-page`) that HANDOFF.md section 5's original redirect map
      (drafted from the handoff doc only, not a crawl) had completely missed. All now in
      `vercel.json`. Still can't check this against Search Console's actual indexed-pages
      list — no access to that account yet (CONTENT_GAPS.md "Access")
- [ ] Baseline SEO: indexed pages, top queries (Search Console), current Lighthouse scores
      of the _live_ site (designscopellc.com) — blocked on Search Console access, same as
      above. The new site's own Lighthouse scores are recorded in BUILD_PLAN.md Week 5

## Infrastructure

- [x] GitHub repo created: https://github.com/tobiesax/DesignScope — `keystatic.config.ts`
      now points its production storage there
- [ ] Vercel project created in Design Scope's account, connected to the GitHub repo — a
      temporary preview is live at https://design-scope-chi.vercel.app/ under Tobi's personal
      Vercel account (kinslerperry-8328) so the client can see progress; move to Design
      Scope's own account once Stephen creates it (HANDOFF.md section 2's ownership promise)
- [ ] Keystatic GitHub OAuth App (for the admin UI login in production) — create at
      https://github.com/settings/developers under Design Scope's GitHub account, then set
      `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET` and `KEYSTATIC_SECRET`
      (a random string) in Vercel. Callback URL: `https://<production-domain>/api/keystatic/github/oauth/callback`
- [ ] `GHL_INBOUND_WEBHOOK_URL`, `PUBLIC_GTM_ID`, `PUBLIC_GHL_BOOKING_URL` env vars (HANDOFF.md
      section 7). `/api/lead` (BUILD_PLAN.md Week 4) is built and tested against all three
      being unset — it fails closed with a clear message rather than a fake success — so
      lead capture and the GTM container will start working the moment these are set in
      Vercel, no code change needed
