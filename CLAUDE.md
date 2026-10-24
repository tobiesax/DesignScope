# CLAUDE.md — Design Scope website (QuietWorks)

Read this file first in every session. All project facts, assets, the redirect map and the GoHighLevel integration contract are in `HANDOFF.md`; the step-by-step plan is in `BUILD_PLAN.md`. Work through the plan in order and tick off tasks as they're done.

## What we're building

A fast, owner-editable marketing website for **Design Scope LLC**, a family-owned kitchen, bath and home remodeling and restoration contractor in Bloomfield, Connecticut. It replaces their current Hibu-hosted site at designscopellc.com.

The site's only job is to turn Connecticut homeowners into **booked consultations, showroom visits and calls**. Every page should push toward one of those three actions.

This website is part 1 of "Design Scope GrowthOS". The lead system (AI receptionist, missed-call text-back, pipeline, review requests) lives in **GoHighLevel** (Starter plan, Stephen's account) and n8n, **not in this repo**. This repo only has to hand form submissions and tracking events to them.

## Stack

- **Astro** (static output) + **Tailwind CSS**
- **Keystatic** (GitHub mode) as the CMS, so the owner can add gallery projects, blog posts and reviews without code
- Hosted on **Vercel**, in an account owned by Design Scope (QuietWorks is added as a team member)
- Forms post to `/api/lead`, which forwards to the **GoHighLevel Inbound Webhook** (`GHL_INBOUND_WEBHOOK_URL`). No form data is stored in this repo. See HANDOFF.md section 7.
- Analytics: GA4 + Google Tag Manager, with conversion events (see Tracking)

Keep dependencies minimal. No React islands unless a component needs interactivity (before/after slider, booking embed, mobile menu).

## Business facts (single source of truth: `src/data/business.ts`)

| Field                     | Value                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| Legal name                | Design Scope LLC                                                                                    |
| Showroom                  | 480 Cottage Grove Road, Bloomfield, CT 06002                                                        |
| Main phone (call or text) | (860) 264-5275                                                                                      |
| Alternate phone           | (860) 794-8739                                                                                      |
| Text-offers line          | (860) 773-0801 (text START)                                                                         |
| Email                     | contact@designscopellc.com                                                                          |
| Founded                   | 2016, family-owned                                                                                  |
| Co-founder                | Stephen, Member, Interior Design Specialist & Master Craftsman                                      |
| HIC registration no.      | **TODO: get from Stephen.** Must show in the footer and on the contact page.                        |
| Opening hours             | Mon–Fri 9 am–5 pm; weekends by appointment (confirm)                                                |
| Warranty                  | 6-month workmanship warranty                                                                        |
| Promises                  | Free design consultations, 24-hour quotes, price matching                                           |
| Offers                    | 10% off for new customers, 5% military discount (state the terms clearly; no conflicting headlines) |
| Supplier brands           | TOTO, Hansgrohe, Wellborn (confirm the full list)                                                   |
| Memberships               | HBRA, Bloomfield Chamber of Commerce, KBIS (confirm)                                                |
| Social                    | Facebook, Instagram, YouTube, Yelp (get URLs from the current site)                                 |

Never hard-code these anywhere else. Components import from `business.ts`.

## Site map

```
/                                 Home: proof first, the four paths, reviews, CTA
/remodeling/                      Path hub
  /remodeling/kitchens/
  /remodeling/bathrooms/
  /remodeling/home-renovations/
/restoration/                     Hub. Big "Call now" button above the fold
  /restoration/fire-and-smoke-damage/
  /restoration/water-damage/
/commercial/
/showroom/                        Showroom & products, brands, visit booking
/projects/                        Gallery index (CMS)
  /projects/[slug]/               Single project, before/after slider
/reviews/                         Real Google reviews (CMS or embed)
/about/
/areas/                           Service-area hub
  /areas/[town]/                  3 town pages (Option B), e.g. Bloomfield, West Hartford, Windsor
/blog/  /blog/[slug]/             Migrated posts (CMS)
/faqs/
/book/                            Consultation and showroom booking (GoHighLevel calendar embed)
/contact/
/offers/
/privacy/                         Includes texting and call-recording notices
```

Before going live, confirm the town list with Stephen. Candidates are Bloomfield, West Hartford, Windsor, Simsbury and Avon.

## Non-negotiable rules

1. **No placeholders at launch.** No lorem ipsum, stock "template" text, empty sections, grey image boxes or blank hours. The current site loses trust exactly this way. If content is missing, hide the section and add the gap to `CONTENT_GAPS.md`.
2. **Real proof only.** Real project photos and real Google reviews. Never invent reviews, testimonials, project details, numbers, awards or certifications.
3. **Protect SEO in the migration.** Every URL on the old site must either keep its path or have a 301 redirect in `vercel.json`. Blog posts move over with their titles, slugs, dates and body text.
4. **Mobile first.** Most homeowners arrive on a phone. The phone number is tap-to-call and the "Book a free consultation" button stays reachable on every page.
5. **Separate the two kinds of customer.** Remodeling visitors are planning; restoration visitors are in an emergency. Restoration pages lead with "Call now, 24/7" and the phone number, not a long form.
6. **Show the HIC number** in the footer and on the contact page.
7. **Accessibility:** semantic HTML, alt text on every image, visible focus states, 4.5:1 text contrast.
8. **Performance budget:** Lighthouse 90+ on mobile for Performance, SEO and Accessibility. Use Astro `<Image>` and serve AVIF/WebP.

## Forms and lead hand-off

- **Enquiry form fields:** name, phone, email, project type (Kitchen / Bathroom / Home renovation / Restoration / Commercial / Showroom visit), town, timeline, budget range, message, and a texting-consent checkbox (unticked by default, with the exact consent wording).
- On submit: POST to `/api/lead`, which forwards the payload in HANDOFF.md section 7 to `GHL_INBOUND_WEBHOOK_URL`; show a thank-you state and fire the `generate_lead` event.
- Spam protection: a honeypot field and a time-to-submit check. No CAPTCHA unless spam becomes a problem.
- Never put secrets in client code. Webhook URLs that need protecting go through an Astro endpoint (`src/pages/api/lead.ts`).

## Tracking (GA4 via GTM)

| Event               | When                                                                  |
| ------------------- | --------------------------------------------------------------------- |
| `generate_lead`     | Enquiry form submitted                                                |
| `click_to_call`     | `tel:` link tapped (send the page path)                               |
| `click_to_text`     | `sms:` link tapped                                                    |
| `book_consultation` | Booking completed (from the GoHighLevel calendar embed, if available) |
| `get_directions`    | Showroom map link clicked                                             |

Add UTM-friendly lead source capture: store the first-touch `utm_*` values and the referrer in hidden form fields.

## Local SEO

- `LocalBusiness` (`HomeAndConstructionBusiness`) JSON-LD on every page, built from `business.ts`
- Each town page has unique copy, real projects from that town where possible, and a map. No copy-paste pages with only the town name swapped.
- Title and meta description on every page; `sitemap.xml`; `robots.txt`; canonical URLs
- NAP (name, address, phone) must match the Google Business Profile exactly

## Brand

- Pull the logo and colours from the current site and Google Business Profile. Record them as Tailwind theme tokens in `tailwind.config.mjs`. Don't invent a new brand.
- Tone: warm, local, plain-spoken, family business. Short sentences. Talk about the homeowner's project, not about us.

## Working agreement for Claude Code

- Work one `BUILD_PLAN.md` task at a time. Commit after each task with a clear message.
- Run `npm run build` before saying a task is done, and fix any errors.
- When content or a fact is unknown, don't guess. Add it to `CONTENT_GAPS.md` and leave the section hidden.
- Ask before adding a new dependency.
- Keep components small and reusable. This site doubles as the QuietWorks **contractor template** for future clients, so business-specific content lives in `src/data/` and the CMS, never inside components.
