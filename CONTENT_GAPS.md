# CONTENT_GAPS.md

Tracks facts, assets and content we don't have yet. Per `CLAUDE.md` rule 1: if content is
missing, the section stays hidden rather than filled with a placeholder. This file must be
empty (or every remaining gap explicitly accepted by Stephen) before launch — see
`BUILD_PLAN.md` Week 5.

Source: `HANDOFF.md` section 10, plus anything found while building.

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

- [ ] Logo source file (original vector SVG/AI/EPS) — have a 1920w PNG from Hibu
- [ ] Brand colours and fonts, if any already in use
- [ ] 15–30 project photos, before-and-after pairs, tagged with town and project type
- [ ] 5–10 showroom photos (exterior with signage, displays, brands)
- [ ] Team photo for About
- [ ] Supplier/membership logos
- [ ] Real reviews to feature (current reviews page has none — only brand logos)

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

- [ ] GitHub repo created for this project — once pushed, switch `keystatic.config.ts`
      storage from `{ kind: 'local' }` to `{ kind: 'github', repo: 'owner/repo-name' }`
      and set up the Keystatic GitHub App / OAuth credentials
- [ ] `GHL_INBOUND_WEBHOOK_URL`, `PUBLIC_GTM_ID`, `PUBLIC_GHL_BOOKING_URL` env vars (HANDOFF.md section 7)
