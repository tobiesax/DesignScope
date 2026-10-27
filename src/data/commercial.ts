export const commercial = {
  title: 'Commercial Renovations & Restoration in Bloomfield, CT',
  metaDescription:
    'Commercial renovations and restoration for offices, retail, restaurants and medical facilities across Hartford County, Connecticut.',
  heroEyebrow: 'Commercial',
  heroHeadline: 'Commercial renovation and restoration, built around your business',
  heroSubcopy:
    'Office reconfigurations, retail updates, restaurant buildouts and medical facility improvements, plus fire, water and storm damage restoration that keeps disruption to a minimum.',
  renovations: {
    heading: 'Commercial renovations',
    body: 'Modernizing your space can improve how your team works and how customers experience your business. We handle office reconfigurations, retail updates, restaurant buildouts and medical facility improvements, starting with a complimentary design consultation to define your vision, operational needs and budget.',
  },
  restorations: {
    heading: 'Commercial restorations',
    body: 'Fire, water or storm damage to a commercial property needs a fast, coordinated response to limit business disruption. We address structural damage, interior finishes and building systems to return your property to its pre-loss condition, and coordinate directly with your insurance provider on claims and documentation.',
  },
};

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

// Client proof — the handoff's own sample content (generic "Client logo"
// placeholders and quotes explicitly marked "· sample"), not real clients.
// See CONTENT_GAPS.md.
export const clientLogoPlaceholders = 6;
export const commercialQuotes = [
  {
    q: 'One project manager, weekly written updates, and they finished a week early.',
    who: 'Facilities manager, Hartford office',
  },
  {
    q: "Unit turnovers in 72 hours means our vacancies don't sit empty.",
    who: 'Property manager, West Hartford multi-family',
  },
];

// Case study teaser — matches the handoff exactly (the office-hartford
// project in src/data/project-images.ts commercialProjects).
export const commercialCaseStudy = {
  title: 'Hartford office fit-out, 6,200 sq ft in 9 weeks',
  body: 'Open workspace, two glass meeting rooms and a kitchenette in a converted brick building, with noisy work done after hours.',
};
