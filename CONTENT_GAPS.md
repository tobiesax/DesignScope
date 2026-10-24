# CONTENT_GAPS.md

Tracks facts, assets and content we don't have yet. Per `CLAUDE.md` rule 1: if content is
missing, the section stays hidden rather than filled with a placeholder. This file must be
empty (or every remaining gap explicitly accepted by Stephen) before launch — see
`BUILD_PLAN.md` Week 5.

Source: `HANDOFF.md` section 10, plus anything found while building.

Design is now following the approved GrowthOS proposal's hi-fi website mockup (layout,
copy tone, colour system). Its photos (hero, 4 path cards, before/after pair, showroom, 6
project cards) are wired into the live prototype temporarily, at Tobi's request, so the
build is visible while real assets are pending — see `src/data/mockup-images.ts` and
`src/assets/mockup-temp/`. They are Claude-generated pitch-deck placeholders, not real
Design Scope photos, and the "A+ BBB rating" / "Best of Houzz 2024" badges were dropped
entirely (unverified). None of this ships at launch — swap `mockup-images.ts`'s imports for
Stephen's real photos and delete `mockup-temp/` before Week 5 QA.

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
- [ ] 15–30 project photos, before-and-after pairs, tagged with town and project type
- [ ] 5–10 showroom photos (exterior with signage, displays, brands)
- [ ] Team photo for About
- [ ] Supplier/membership logos
- [ ] Real reviews to feature (current reviews page has none — only brand logos; the mockup's
      review cards are sample/placeholder text, not real quotes)
- [ ] Verify or drop the "A+ BBB rating" and "Best of Houzz 2024" trust badges shown in the
      mockup's hero trust strip — not in HANDOFF.md, not confirmed anywhere; don't ship
      without Stephen confirming they're real
- [ ] Stephen hasn't reviewed any service-page copy yet. `/remodeling/kitchens/` headline,
      subcopy and intro paragraph (`src/data/services.ts`) are written from confirmed
      business.ts facts, not invented, but are unreviewed marketing copy, not his words —
      flag for approval alongside the gallery (only 2 real-category photos exist in the
      temp mockup set for Kitchens; thin until real project photos arrive)

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
