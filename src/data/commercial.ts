export const commercial = {
  title: 'Commercial Renovations & Restoration in Bloomfield, CT',
  metaDescription:
    'Commercial renovations and restoration for offices, retail, restaurants and medical facilities across Hartford County, Connecticut.',
  heroEyebrow: 'Commercial',
  heroHeadline: 'Commercial renovation and restoration, built around your business',
  heroSubcopy:
    'Office reconfigurations, retail updates, restaurant buildouts and medical facility improvements, plus fire, water and storm damage restoration that keeps disruption to a minimum.',
  // Rewritten from copy Tobi supplied (at his request) to fit a commercial
  // audience specifically and avoid repeating /about/'s own wording —
  // grounded only in confirmed business.ts facts (founded 2016, licensed
  // and insured, free consultations, 24-hour quotes, price matching,
  // permit/insurance help), nothing invented.
  introHeading: 'Design and construction, handled start to finish',
  introBody: [
    "Design Scope, LLC. delivers integrated design and construction services for businesses and property owners across the Farmington Valley. Family-owned since 2016, our licensed and insured team manages every phase of your commercial project — from initial concept through final build — so renovations and restorations stay on schedule with minimal disruption to your operations. No job is too big or too small, and every project gets the same level of care, precision and attention to detail.",
    "We offer free design consultations, 24-hour quotes with no obligation, and honest pricing with no hidden fees. We honor price matching on comparable written estimates and can assist with permits and insurance paperwork to keep your project moving. Contact us today to schedule a consultation and take the first step toward transforming your space.",
  ],
  // Lifted from the live site's own /commercial-renovations and
  // /commercial-restorations pages (scraped 2026-11-18) — real services
  // offered on each, not invented. Shown as two side-by-side "what we do"
  // lists right under the intro (pairs with the renovations/restorations
  // heading+body below, previously written but never actually rendered
  // on the page — fixed in the same pass).
  renovations: {
    heading: 'Commercial renovations',
    body: 'Modernizing your space can improve how your team works and how customers experience your business. We handle office reconfigurations, retail updates, restaurant buildouts and medical facility improvements, starting with a complimentary design consultation to define your vision, operational needs and budget.',
    services: [
      'Office and workspace renovations',
      'Office breakroom and partition installations',
      'Retail store updates and remodels',
      'Restaurant and hospitality renovations',
      'Medical facility improvements',
      'Building facade upgrades',
      'ADA compliance modifications',
      'Energy-efficient system installations',
      'Interior layout reconfiguration',
    ],
  },
  restorations: {
    heading: 'Commercial restorations',
    body: 'Fire, water or storm damage to a commercial property needs a fast, coordinated response to limit business disruption. We address structural damage, interior finishes and building systems to return your property to its pre-loss condition, and coordinate directly with your insurance provider on claims and documentation.',
    services: [
      'Water and flood damage repair',
      'Fire and smoke damage restoration',
      'Structural repairs and rebuilding',
      'Mold remediation and prevention',
      'Storm damage recovery',
      'Vandalism and break-in repairs',
    ],
  },
};

// "When your business needs a commercial renovation" — lifted from the
// live site's own /commercial-renovations page (scraped 2026-11-18), real
// copy, not invented.
export const whenYouNeedThis = {
  heading: 'When your business needs a commercial renovation',
  intro:
    'Commercial spaces require updates to maintain functionality, attract customers and support business growth. Outdated facilities can impact employee productivity and customer perception while limiting operational efficiency. Consider a commercial renovation when facing these situations:',
  triggers: [
    'Aging infrastructure requiring modern updates',
    'Expansion or reconfiguration of existing space',
    'Compliance with updated building codes',
    'Brand refresh or repositioning',
    'Damage from water, fire, or wear',
    'Technology integration needs',
    'Improved accessibility requirements',
  ],
  closing:
    'A well-executed renovation minimizes downtime while maximizing the return on your property investment. We work around your schedule to keep your business operational throughout the construction process.',
};

// Same source page, placed right after the "Why Choose Design Scope"
// bullets there (commercialWhy below) — real, not invented.
export const showroomForCommercial =
  'Our showroom displays kitchen and bathroom options for commercial applications.';

// "Who we work with" — matches the design handoff exactly.
export const sectors = [
  { t: 'Offices', b: 'Fit-outs, refreshes and meeting rooms.' },
  { t: 'Retail', b: 'Store build-outs and refits around trading hours.' },
  { t: 'Multi-family', b: 'Unit turnovers, common areas and kitchens.' },
  { t: 'Healthcare & dental', b: 'Clinical fit-outs to code.' },
  { t: 'Restaurants', b: 'Front and back of house, fast turnarounds.' },
];

// "Why work with us" dark band — matches the handoff exactly.
export const commercialWhy = [
  { t: 'One project manager', b: 'A single contact and weekly written updates.' },
  { t: 'After-hours work', b: 'Noisy work done evenings and weekends.' },
  { t: 'Licensed & insured', b: 'Certificates on file, permits handled.' },
  { t: '24/7 emergency cover', b: 'Water, fire and storm response for your properties.' },
];

// Case study teaser — matches the handoff exactly (the office-hartford
// project in src/data/project-images.ts commercialProjects).
export const commercialCaseStudy = {
  title: 'Hartford office fit-out, 6,200 sq ft in 9 weeks',
  body: 'Open workspace, two glass meeting rooms and a kitchenette in a converted brick building, with noisy work done after hours.',
};

// Replaces the old "Service agreements" section (Phase 2 in the design
// handoff: $299/$599/custom monthly property-management plans). Tobi
// flagged that as not actually within Design Scope's scope — dropped
// rather than shipped with invented pricing (CLAUDE.md rule 1/2). This
// slot in the page now does something Design Scope actually wants: invite
// independent contractors and trade specialists to reach out about
// collaborating, rather than pitch property managers on a plan. Nothing
// here beyond business.ts facts (service areas, email) is asserted as a
// promise (no "steady work," no pay claims) since none of that is
// confirmed — just an open invitation to get in touch.
export const contractorPartnership = {
  eyebrow: 'For contractors',
  heading: 'Partner with Design Scope',
  body: "We're a family-owned design and construction company always open to connecting with reliable independent contractors and trade specialists across the Farmington Valley — carpentry, electrical, plumbing, flooring, tile and more — for collaboration on commercial and residential projects.",
  bullets: [
    'Licensed and insured in your trade',
    'Available for commercial and residential work',
    'Serving Bloomfield, West Hartford, Windsor, Simsbury, Avon and the surrounding Farmington Valley',
  ],
  closing: "If that's you, we'd like to hear from you.",
};
