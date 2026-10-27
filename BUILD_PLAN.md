# BUILD_PLAN.md — Design Scope GrowthOS

Full Option B scope, 7 weeks from the kickoff call. Tasks marked **[repo]** are done in this codebase with Claude Code. Tasks marked **[CRM]**, **[n8n]** or **[ops]** happen outside the repo but are tracked here so nothing slips.

Milestones: **website live at the end of week 5 ($750 due)** and **system handover at the end of week 7 ($750 due)**.

---

## Week 1: Discovery and foundations

**Kickoff call (60 min) — get from Stephen:**

- [ ] HIC registration number, opening hours, confirmed town list (3 town pages)
- [ ] Access: domain registrar, Hibu account, Google Business Profile, GA4/Search Console, social accounts
- [ ] Hibu agreement (plan the cut-over around its notice period)
- [ ] 15–30 best project photos, before-and-after pairs where possible, with town and project type for each
- [ ] Reviews he's happy to feature, and his Google review link
- [ ] Consultation and showroom availability (for the booking calendar)
- [ ] AI receptionist rules: what it may answer, what counts as an emergency, when it must hand over to him
- [ ] Baseline numbers: enquiries per month, missed calls, consultations booked, estimates won

**Build:**

- [ ] **[ops]** Create the Vercel and GitHub accounts in Design Scope's name; add QuietWorks as a member
- [ ] **[ops]** Stephen creates the GoHighLevel Starter account (his card) and invites QuietWorks as admin; decide whether to port or forward the main line to LC Phone
- [ ] **[ops]** Start A2P 10DLC brand and campaign registration **now**. Approval can take 1–3 weeks and blocks all texting.
- [ ] **[repo]** Scaffold Astro + Tailwind + Keystatic; set up `src/data/business.ts`, `CONTENT_GAPS.md`, ESLint/Prettier and a Vercel preview deploy
- [ ] **[repo]** Crawl the current designscopellc.com: list every URL, save the blog posts as markdown, and draft the `vercel.json` 301 redirect map
- [ ] **[repo]** Record baseline SEO: indexed pages, top queries (Search Console), current Lighthouse scores

✅ Gate: sitemap and page plan signed off by Stephen

## Week 2: Design

- [x] **[repo]** Design tokens from the existing brand (logo, colours, type) in `tailwind.config.mjs`
      — done in `src/styles/global.css` (Tailwind v4 CSS-first `@theme`, not a JS config file), now
      matched exactly to the approved GrowthOS design handoff
      (`GrowthOS Proposal Design/design_handoff_design_scope_website/`, superseding the earlier,
      looser hi-fi mockup pass), at Tobi's explicit request to build pixel-close to it
- [x] **[repo]** Base layout: header with tap-to-call and Book buttons, mobile menu, footer (NAP, HIC number, hours, socials)
      — rebuilt to match the handoff's utility bar / nav / footer exactly, including a
      per-page nav CTA (Book / Call 24/7 / Request a quote) and the mobile sticky action bar
- [x] **[repo]** Home page — rebuilt page-for-page to the handoff's spec (hero slideshow,
      trust badges, emergency panel, "how it works", featured projects, review carousel,
      showroom teaser, offers, service area, 3-up closing band). The review carousel
      (`ReviewCarousel.astro` / `src/data/reviews.ts`) uses the handoff's own 6 sample
      reviews; not real reviews, must be replaced before launch (CONTENT_GAPS.md)
- [x] **[repo]** One service-page template, applied to Kitchens — `src/components/service/` +
      `src/data/services.ts`; Week 3 adds the remaining entries
- [ ] **[ops]** Send Stephen a Vercel preview link: **one review round** (about 1 hour of his time)
      — a preview is live at https://design-scope-chi.vercel.app/ (temporary personal Vercel
      account, pending Stephen's own) so the client can see work has started; the actual review
      round with Stephen hasn't happened yet

✅ Gate: designs approved

## Week 3: Pages and content

- [x] **[repo]** Remaining service pages: ~~Bathrooms~~ (done, `/remodeling/bathrooms/`), Home
      renovations, Restoration (emergency layout), Commercial, Showroom — all shipped
      (`/remodeling/home-renovations/`, `/restoration/`, `/restoration/fire-and-smoke-damage/`,
      `/restoration/water-damage/`, `/commercial/`, `/showroom/`); restoration/commercial/home
      renovations copy is grounded in facts fetched directly from the live site's own service
      pages, not invented, but unreviewed by Stephen and still on mockup/no-photo imagery
      (CONTENT_GAPS.md)
- [x] **[repo]** About, Offers, Contact, Privacy (with texting consent and call-recording notice)
      — all shipped; About has no team photo yet (Stephen's surname and a photo are still
      unconfirmed, CONTENT_GAPS.md)
- [ ] **[repo]** Keystatic collections: projects, blog posts, reviews; the owner can add a project from his phone
- [x] **[repo]** Projects gallery and single project page, without a before/after slider — no
      before/after pairs exist for any real project yet, so single project pages show the one
      known photo, title, category and town (if known) only (CONTENT_GAPS.md)
- [x] **[repo]** Migrate the blog posts with the same slugs and dates — body text is rewritten
      in our own words rather than copied (the extraction tool declined to reproduce the live
      pages verbatim); not yet wired into Keystatic
- [ ] **[CRM]** Set up pipeline stages: New → Consultation booked → Site visit → Estimate sent → Won / Lost

## Week 4: SEO, forms and the lead system starts

- [x] **[repo]** 3 town pages with unique copy, local projects and a map — pulled forward into
      the same pass as the rest of Week 3 (`/areas/`, `/areas/bloomfield/`,
      `/areas/west-hartford/`, `/areas/windsor/`); no town-tagged real project photos exist yet,
      so the local-projects section is empty on all three (CONTENT_GAPS.md)
- [ ] **[repo]** `LocalBusiness` JSON-LD, titles and meta descriptions, sitemap, robots, canonicals
- [ ] **[repo]** Enquiry form → `/api/lead` → CRM webhook; honeypot; thank-you state; UTM capture
- [ ] **[repo]** GTM/GA4 events: `generate_lead`, `click_to_call`, `click_to_text`, `book_consultation`, `get_directions`
- [x] **[repo]** `/book` page — built without the live GoHighLevel calendar embed, since
      `PUBLIC_GHL_BOOKING_URL` isn't set yet; falls back to a call/text prompt until it is
- [ ] **[CRM]** Estimate follow-ups at day 3, 7 and 14; review request when a job is marked Won/Complete
- [ ] **[CRM]** Instant auto-reply to website and Google Business Profile enquiries
- [ ] **[n8n]** Only where the CRM can't do it natively: form-to-CRM glue, owner SMS alert for high-value leads (adapt the TobiSax lead-qualification flow)

## Week 5: Launch the website

- [ ] **[repo]** QA on real phones (iOS + Android), forms end to end, every redirect returns 301, no broken links
- [ ] **[repo]** Lighthouse 90+ mobile; check `CONTENT_GAPS.md` is empty or every gap is hidden
- [ ] **[ops]** Final review with Stephen (about 1 hour)
- [ ] **[ops]** DNS cut-over to Vercel; check SSL; submit the sitemap in Search Console; update the Google Business Profile website link
- [ ] **[CRM]** Missed-call text-back live (once A2P is approved)
- [ ] **[ops]** Invoice the $750 launch payment

✅ Milestone: **Website live**

## Week 6: AI receptionist and phone flows

- [ ] **[CRM]** AI receptionist script: introduces itself as a virtual assistant, plays the call-recording notice (Connecticut needs everyone's consent), captures the project details, offers calendar slots, never quotes prices or dates
- [ ] **[CRM]** Emergency routing: water, fire or smoke → flagged urgent and forwarded to Stephen's mobile at any hour
- [ ] **[CRM]** Text-offers line connected to the CRM inbox; STOP replies honoured automatically
- [ ] **[CRM]** Owner scoreboard: new leads, bookings, open estimates, jobs won, lead source
- [ ] **[ops]** Stephen approves the call scripts and emergency rules (about 1 hour)
- [ ] **[ops]** Test calls: after hours, weekend, emergency, missed call, voicemail

## Week 7: Testing and handover

- [ ] **[ops]** Full end-to-end test: website form → CRM → auto-reply → owner alert → pipeline → follow-ups
- [ ] **[ops]** Compliance check: recording notice, texting consent wording, STOP handling, HIC number visible
- [ ] **[ops]** 60-minute owner training (record it) + a written how-to guide (add a project, read the scoreboard, move a deal)
- [ ] **[ops]** Hand over every login; confirm everything is in Design Scope's name
- [ ] **[ops]** Invoice the final $750; ask for the testimonial and the Google review for QuietWorks

✅ Milestone: **System handover**

---

## After handover

- 30-day defect fixes included
- Day-90 results review against the week 1 baseline; this becomes the QuietWorks case study
- Agree the monthly service (or not) before the 30-day care period ends
