# CONTENT_GAPS.md

Tracks facts, assets and content we don't have yet. Per `CLAUDE.md` rule 1: if content is
missing, the section stays hidden rather than filled with a placeholder. This file must be
empty (or every remaining gap explicitly accepted by Stephen) before launch — see
`BUILD_PLAN.md` Week 5.

Source: `HANDOFF.md` section 10, plus anything found while building.

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
by Stephen either. Verify them (or get his own ranges) before launch. The handoff also shows
a $/mo financing figure next to each range; that's deliberately dropped here, since
financing is Phase 2 and not wired up (BUILD_PLAN.md) — a monthly number with no real
financing product behind it would misrepresent what's on offer.

## Business facts

- [ ] HIC registration number
- [ ] Confirm weekend hours / appointment policy and same-day availability wording
- [ ] Stephen's surname and a short bio for the About page
- [ ] Exact wording of the offers (10% new customer, 5% military) — current site's headline and body text conflict
- [ ] Full supplier brand list + logo files (have: TOTO, Hansgrohe, Wellborn, Brizo, Delta)
- [ ] Confirm KBIS membership
- [ ] Google Business Profile review link
- [ ] Budget bands for the enquiry form (HANDOFF.md section 7)
- [ ] Confirm the final 3 town pages (proposed: Bloomfield, West Hartford, Windsor)

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
      Real whole-home-renovation photos still need to come directly from Stephen
- [ ] Restoration (hub, fire & smoke, water damage) has no real photos at all — not even a
      scraped single, since the live site's fire-and-smoke-damage-restoration and
      water-damage-restoration pages have no gallery images to scrape (confirmed by
      fetching them directly). All three restoration pages currently reuse the one
      approved mockup restoration image at larger size (`src/data/restoration.ts`)
- [ ] Before-and-after pairs specifically (have singles only so far) — check if the live site
      has any, otherwise need these directly from Stephen
- [ ] 5–10 showroom photos (exterior with signage, displays, brands)
- [ ] Team photo for About
- [x] Supplier/membership logos — found on the live site while scraping project photos
      (~29 brand logos incl. TOTO, Hansgrohe, Wellborn Forest, Brizo, Delta, Franke, Robern,
      Schluter Systems, MSI, Fabuwood + more; membership logos for HBRA, Bloomfield Chamber,
      KBIS). Not yet pulled into the project — the confirmed-5 list in `business.ts` and the
      supplier marquee are unchanged for now; worth a follow-up pass
- [ ] Real reviews to feature (current reviews page has none — only brand logos). The home
      page's review carousel (`ReviewCarousel.astro` / `src/data/reviews.ts`) and `/reviews/`
      both need real quotes before launch — see the note near the top of this file
- [ ] Verify or drop the "A+ BBB rating" and "Best of Houzz 2024" trust badges (re-added per
      the design handoff, see the note near the top of this file) — not in HANDOFF.md, not
      confirmed anywhere; don't ship without Stephen confirming they're real
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
- [ ] Single project pages (`/projects/[id]/`) show only the title, category, town (if known)
      and the one real photo — no scope, no narrative, no before/after pair, because that
      data doesn't exist yet. No before/after slider has been built for individual projects;
      the home page's slider still uses mockup photos (see "Before-and-after pairs" below)
- [ ] None of the 3 built town pages (`/areas/bloomfield/`, `/areas/west-hartford/`,
      `/areas/windsor/`) have a real, town-tagged project to show — the local-proof gallery
      section is empty on all three until photos are tagged with a town
- [ ] `/areas/simsbury/` and `/areas/avon/` don't exist yet. The design handoff builds all 5
      of CLAUDE.md's candidate towns (business.ts `townPages` was expanded from 3 to 5 to
      match it), and the footer/home service-area band already link to all 5 — but only the
      original 3 have a page built. Confirm the 3-vs-5 town scope with Stephen (it changes
      the BUILD_PLAN.md Week 4 scope) and build the remaining 2 pages either way
- [ ] The 2 blog posts were migrated with the same title, slug, date and author as the live
      site, but the body text is rewritten in our own words, not copied — the extraction tool
      used to pull the live pages declined to reproduce their text verbatim (copyright), so
      `src/data/blog-posts.ts` covers the same structure and facts in original phrasing
      instead. Not wired into Keystatic yet (see "Infrastructure" below)
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

- [ ] Re-crawl designscopellc.com and check Search Console's indexed pages against
      `vercel.json`'s redirect list — it was drafted from HANDOFF.md section 5 only, not a
      live crawl (BUILD_PLAN.md Week 1)
- [ ] Baseline SEO: indexed pages, top queries (Search Console), current Lighthouse scores

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
- [ ] `GHL_INBOUND_WEBHOOK_URL`, `PUBLIC_GTM_ID`, `PUBLIC_GHL_BOOKING_URL` env vars (HANDOFF.md section 7)
