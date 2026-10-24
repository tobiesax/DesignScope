# HANDOFF.md — Design Scope GrowthOS → VS Code + Claude Code

**Project:** Design Scope GrowthOS (QuietWorks × Design Scope LLC)
**Prepared:** Oct 24, 2026 · **Owner:** Tobiloba Odeyemi, QuietWorks
**Status:** Signed. $1,500 deposit received Oct 22, 2026. Build starts at the kickoff call.

This is the single starting point for the build. Put this file, `CLAUDE.md` and `BUILD_PLAN.md` in the root of a new repo, open it in VS Code and start Claude Code with:

> Read HANDOFF.md, CLAUDE.md and BUILD_PLAN.md. Then do Week 1 → "Build" tasks marked [repo], one at a time, committing after each.

---

## 1. What we're building, in one paragraph

A new owner-editable website for a family-owned Connecticut remodeling and restoration contractor, connected to a GoHighLevel account that answers calls (AI receptionist), texts back missed calls, follows up on estimates, asks for reviews and shows the owner a scoreboard. **Only the website is custom code.** The lead system is GoHighLevel configuration plus a thin n8n layer. Scope is the full proposal Option B for a $3,000 friends-and-family fee (standard value $6,800). Website live by the end of week 5; full handover by the end of week 7.

## 2. Decisions already made

| Decision | Choice | Why |
| --- | --- | --- |
| Website | Astro (static) + Tailwind CSS | Fast and SEO-friendly; reusable as the QuietWorks contractor template |
| CMS | Keystatic (GitHub mode) | Owner adds projects, posts and reviews without code; content stays in git |
| Hosting | Vercel, in Design Scope's account | Ownership promise; QuietWorks added as a member |
| CRM + lead system | **GoHighLevel Starter ($97/mo)**, in Stephen's name | Covers the AI receptionist, missed-call text-back, pipeline, follow-ups, reviews and scoreboard out of the box |
| Website → CRM | Astro API route → GoHighLevel **Inbound Webhook** workflow trigger | Works on Starter (no API key needed); 100 free runs, then $0.01 each |
| CRM → other tools | GoHighLevel workflow **Webhook** action → n8n | Only where GoHighLevel can't do it natively |
| Analytics | GA4 via Google Tag Manager | Conversion events listed in section 8 |
| Build tool | VS Code + Claude Code | This repo |

Not in scope: Google Ads (Option C), a custom-built CRM, job management or invoicing software.

## 3. Business facts

Single source of truth in code: `src/data/business.ts`. ✅ = confirmed from the live site · ❓ = confirm with Stephen.

| Field | Value | |
| --- | --- | --- |
| Legal name | Design Scope LLC | ✅ |
| Showroom address | 480 Cottage Grove Road, Bloomfield, CT 06002 | ✅ |
| Main phone (call or text) | (860) 264-5275 | ✅ |
| Alternate phone | (860) 794-8739 | ✅ |
| Text-offers line | (860) 773-0801, text START | ✅ |
| Email | contact@designscopellc.com | ✅ |
| Hours | Mon–Fri 9:00 am–5:00 pm. Weekends by appointment only; walk-ins welcome, same-day appointments available | ✅ (FAQ page) ❓ confirm |
| Founded | 2016, family-owned | ✅ |
| Key person | Stephen: Member, Interior Design Specialist & Master Craftsman; co-founder; Master's in Interior Design; 25+ years in the industry | ✅ ❓ surname for the About page |
| HIC registration no. | **Unknown.** Must appear in the footer, on the contact page and in ads | ❓ |
| Promises | Free design consultations, free no-obligation quotes, 24-hour quotes, price matching on written estimates, help with permit and insurance paperwork | ✅ |
| Warranty | 6-month workmanship warranty | ✅ |
| Offers | 10% off for new customers; 5% military discount | ✅ ❓ exact terms (the current site's headline and body text conflict) |
| Payment / finance | Itemised project plan at the first meeting; staged payments per contract; can advise on home equity lines of credit | ✅ |
| Supplier brands | TOTO, Hansgrohe, Wellborn, Brizo, Delta | ✅ ❓ full list + logo files |
| Memberships | HBRA, Bloomfield Chamber of Commerce, KBIS | ✅ ❓ confirm KBIS |
| Facebook | https://facebook.com/designscopellc | ✅ |
| Instagram | https://instagram.com/designscopesllc | ✅ (note the extra "s" in the handle) |
| YouTube | https://youtube.com/@designscopellc | ✅ |
| Yelp | https://yelp.com/biz/design-scope-bloomfield | ✅ |
| Google review link | **Unknown.** Get it from the Google Business Profile | ❓ |

### Services (from the current site)

- **Residential:** Kitchen remodeling · Bathroom remodeling · Home renovations · Fire and smoke damage restoration · Water damage restoration
- **Commercial:** Commercial renovations · Commercial restorations
- **Showroom & store / building products:** Interior construction products · Exterior building products · Design-build sales and services

### Service areas listed on the current site

Bloomfield, West Hartford, Windsor, Simsbury, Avon, Hartford, East Hartford, Manchester, East Granby, East Windsor, South Windsor, Farmington Valley (CT); Bridgeport (CT); Worcester (MA).

➡️ Option B includes **3 town pages**. Proposed: **Bloomfield, West Hartford, Windsor** ❓ (confirm with Stephen). Keep the full list on `/areas/` as plain text, but drop Bridgeport and Worcester unless Stephen really wants work there; they dilute local SEO.

## 4. Brand assets

| Asset | Source | Status |
| --- | --- | --- |
| Logo (PNG, 1920w) | https://le-cdn.hibuwebsites.com/0401f3a2c8974d9dab35a3f529889c47/dms3rep/multi/opt/logo-design-scope-llc-1920w.png | Download in week 1 and ask Stephen for the original vector (SVG/AI/EPS) |
| Colours | Not exposed in the site's text | Sample them from the logo and record them as Tailwind tokens (`brand-primary`, `brand-accent`, `ink`, `paper`) |
| Fonts | Unknown | Pick one serif for headings and one clean sans for body (free, self-hosted via @fontsource) |
| Project photos | Stephen | ❓ 15–30 best, before-and-after pairs, tagged with town and project type |
| Showroom photos | Stephen | ❓ 5–10 (exterior with signage, displays, brands) |
| Team photo | Stephen | ❓ For About |
| Supplier/membership logos | Stephen or the brands' press kits | ❓ |

Tone: warm, local, plain-spoken family business. Short sentences. Talk about the homeowner's project. No hype.

## 5. Site map and redirect map

New structure (also in `CLAUDE.md`). The old site had separate fire and water restoration pages that may already rank, so restoration gets two child pages.

| Old URL (Hibu) | New URL | Redirect |
| --- | --- | --- |
| `/` | `/` | — |
| `/kitchen-remodeling` | `/remodeling/kitchens/` | 301 |
| `/bathroom-remodeling` | `/remodeling/bathrooms/` | 301 |
| `/home-renovations` | `/remodeling/home-renovations/` | 301 |
| `/residential-services` | `/remodeling/` | 301 |
| `/design-build-sales-services` | `/remodeling/` | 301 |
| `/fire-and-smoke-damage-restoration` | `/restoration/fire-and-smoke-damage/` | 301 |
| `/water-damage-restoration` | `/restoration/water-damage/` | 301 |
| `/commercial-services` | `/commercial/` | 301 |
| `/commercial-renovations` | `/commercial/` | 301 |
| `/commercial-restorations` | `/commercial/` | 301 |
| `/showroom-store` | `/showroom/` | 301 |
| `/construction-and-building-products` | `/showroom/` | 301 |
| `/interior-construction-products` | `/showroom/` | 301 |
| `/exterior-building-products` | `/showroom/` | 301 |
| `/gallery` | `/projects/` | 301 |
| `/reviews` | `/reviews/` | 301 |
| `/about` | `/about/` | 301 |
| `/stephen_author` | `/about/` | 301 |
| `/faqs` | `/faqs/` | 301 |
| `/serving-area` | `/areas/` | 301 |
| `/contact` | `/contact/` | 301 |
| `/request-quote` | `/book/` | 301 |
| `/call-or-text-pop` | `/contact/` | 301 |
| `/blog` | `/blog/` | 301 |
| `/how-to-plan-and-budget-for-professional-bathroom-remodeling-services` | `/blog/how-to-plan-and-budget-for-professional-bathroom-remodeling-services/` | 301 |
| `/avoid-renovation-disasters-a-licensed-kitchen-remodeling-company-ensures-quality` | `/blog/avoid-renovation-disasters-a-licensed-kitchen-remodeling-company-ensures-quality/` | 301 |
| `/hibu-video-splash`, `/hibu-eng-menu` | `/` | 301 |

Week 1: re-crawl the live site (and check Search Console's indexed pages) to catch any URLs this list missed, then write all of these into `vercel.json`.

### Content to migrate

- **Blog posts (2):** "How to Plan and Budget for Professional Bathroom Remodeling Services" (Oct 22, 2026); "Avoid Renovation Disasters: A Licensed Kitchen Remodeling Company Ensures Quality" (Aug 24, 2026). Keep the titles, slugs and dates; move the body text into Keystatic.
- **FAQs (6):** products used, crew, how payment works, why choose us, what to expect, how soon we can start. Rewrite tighter and add FAQPage schema.
- **Reviews:** the current reviews page has **no customer reviews** (only brand logos). Pull real Google/Yelp reviews with Stephen's OK. Never write or paraphrase reviews ourselves.

## 6. Page content brief

| Page | Job | Must include |
| --- | --- | --- |
| Home | Prove quality in 5 seconds, route to the right path | Hero with real project photo, "Book a free design consultation" + tap-to-call; 4 path cards; recent projects; real reviews; promises strip (free consult, 24-hour quotes, 6-month warranty, price match); brands; showroom block; offers |
| Remodeling hub + Kitchens / Bathrooms / Home renovations | Planning-stage homeowners | Process (consult → design → quote → build), gallery filtered by type, FAQs, Book CTA |
| Restoration hub + Fire & smoke / Water damage | Emergency visitors | **"Call now" and the phone number above the fold**, what to do right now, insurance paperwork help, short form below |
| Commercial | Property and business owners | Renovations + restorations, examples, contact CTA |
| Showroom | Walk-ins and product buyers | Address, hours, map, brands, interior/exterior products, "Book a showroom visit" |
| Projects (+ single project) | Proof | Before/after slider, town, scope, photos |
| Reviews | Proof | Real reviews + "Leave a review" link |
| About | Trust | Family-owned since 2016, Stephen's story, memberships, HIC number |
| Areas hub + 3 town pages | Local SEO | Unique copy per town, local projects, map, Book CTA |
| FAQs, Offers, Contact, Book, Privacy | Utility | Privacy includes texting consent and the call-recording notice |

## 7. Website → GoHighLevel integration contract

**Flow:** form → `POST /api/lead` (Astro server endpoint on Vercel) → validates and checks the honeypot → `POST` JSON to `GHL_INBOUND_WEBHOOK_URL` → GoHighLevel workflow creates or updates the contact, creates an opportunity in "New lead", sends the instant reply and alerts Stephen.

**Environment variables** (Vercel, never in client code):

```
GHL_INBOUND_WEBHOOK_URL=   # from the GoHighLevel workflow "Inbound Webhook" trigger
PUBLIC_GTM_ID=             # GTM-XXXXXXX
PUBLIC_GHL_BOOKING_URL=    # GoHighLevel calendar embed URL for /book
```

**Payload** (map each field in the GoHighLevel trigger):

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "phone": "+18605551234",
  "email": "jane@example.com",
  "project_type": "Kitchen | Bathroom | Home renovation | Fire & smoke damage | Water damage | Commercial | Showroom visit",
  "town": "West Hartford",
  "timeline": "ASAP | 1–3 months | 3–6 months | Just exploring",
  "budget": "Under $15k | $15–30k | $30–60k | $60k+",
  "message": "Free text",
  "sms_consent": true,
  "page": "/remodeling/kitchens/",
  "utm_source": "", "utm_medium": "", "utm_campaign": "", "utm_term": "", "utm_content": "",
  "referrer": "",
  "submitted_at": "2026-11-03T14:22:00Z"
}
```

Confirm the budget bands with Stephen. Restoration forms set `project_type` automatically and the GoHighLevel workflow flags them **urgent**.

**Texting consent checkbox** (unticked by default; required for US texting registration):

> By checking this box, I agree to receive text messages from Design Scope LLC about my enquiry and appointments. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy.

**AI receptionist opening line** (configured in GoHighLevel, not in this repo; listed here so the Privacy page matches it):

> Thanks for calling Design Scope. I'm Design Scope's virtual assistant, and this call may be recorded so we can help you better. How can I help today?

## 8. Tracking

| Event (GA4 via GTM) | Fires when |
| --- | --- |
| `generate_lead` | `/api/lead` returns 200 (send `project_type`) |
| `click_to_call` | Any `tel:` link (send `page`) |
| `click_to_text` | Any `sms:` link |
| `book_consultation` | GoHighLevel booking-confirmed message from the calendar embed, if available; otherwise track on GoHighLevel's side |
| `get_directions` | Map or directions link |

Store first-touch `utm_*` values and the referrer in `localStorage` (wrapped in try/catch) and send them with every form.

## 9. GoHighLevel setup (outside the repo, tracked in BUILD_PLAN.md)

- Starter account in Stephen's name and on his card; QuietWorks invited as admin; two-factor login on
- Phones: decide whether to port (860) 264-5275 to LC Phone or forward it to a new LC number; bring (860) 773-0801 over for the text-offers line
- A2P 10DLC registration submitted on **day 1**
- Pipeline: New lead → Consultation booked → Site visit → Estimate sent → Won / Lost
- Workflows: Inbound Webhook (website) · missed-call text-back · instant reply · estimate follow-ups at day 3/7/14 (stop on reply) · review request on Won · urgent restoration alert to Stephen's mobile
- Calendars: Free design consultation (60 min) · Showroom visit (30 min)
- Voice AI agent: knowledge base from section 3, booking on both calendars, transfer rules for water/fire/smoke, after-hours coverage, a plain call-forward fallback
- Dashboard: leads, bookings, open estimates, won, lead source
- Connect Google Business Profile and Google Calendar

## 10. Content gaps to collect at kickoff

- [ ] HIC registration number
- [ ] Confirm hours and weekend appointment policy
- [ ] Logo source file + any brand colours or fonts already in use
- [ ] 15–30 project photos with town and type; showroom photos; team photo
- [ ] Reviews to feature + Google review link
- [ ] The 3 town pages
- [ ] Exact wording of the offers (10% new customer, 5% military)
- [ ] Stephen's surname and short bio for About
- [ ] Full brand and membership list + logos
- [ ] Budget bands for the form
- [ ] Access: domain registrar, Hibu, Google Business Profile, Search Console/GA4, social accounts
- [ ] Hibu contract (notice period, who owns the domain)

## 11. Definition of done (website)

- Every page has real content; nothing placeholder; `CONTENT_GAPS.md` is empty or the gaps are hidden
- All old URLs return 301 to the right new page; no 404s from the old sitemap
- Form → GoHighLevel contact + opportunity + instant reply works end to end on real phones
- Lighthouse mobile 90+ for Performance, SEO and Accessibility
- LocalBusiness JSON-LD validates; sitemap submitted in Search Console
- HIC number, hours and NAP (name, address, phone) match the Google Business Profile exactly
- Stephen can add a project from his phone in Keystatic

## 12. Suggested first Claude Code prompts

1. `Read HANDOFF.md, CLAUDE.md and BUILD_PLAN.md. Summarise the plan back to me in 10 lines and list anything unclear.`
2. `Scaffold the project: Astro + Tailwind + Keystatic (GitHub mode), src/data/business.ts filled from HANDOFF.md section 3, CONTENT_GAPS.md from section 10, and vercel.json with every redirect in section 5. Run npm run build.`
3. `Build the base layout: header with tap-to-call and "Book a free consultation", mobile menu, footer with NAP, hours, HIC placeholder (hidden until filled) and socials.`
4. `Build /api/lead per HANDOFF.md section 7 with a honeypot and time-to-submit check, plus the enquiry form component. Use a mock webhook URL in .env.example.`
5. Continue through BUILD_PLAN.md week by week.

## 13. Reference documents

- Proposal: Design Scope GrowthOS — Proposal (Claude doc)
- Scope summary and deposit receipt (Claude doc)
- GoHighLevel review for Design Scope GrowthOS (Claude doc)
- Invoice QW-DS-001
- Current site: https://www.designscopellc.com (reviewed Oct 9 and Oct 24, 2026)
