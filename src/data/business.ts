// Single source of truth for Design Scope LLC business facts.
// Never hard-code these values anywhere else — import from here.
// See HANDOFF.md section 3 for provenance and CONTENT_GAPS.md for unknowns.

export const business = {
  legalName: 'Design Scope LLC',
  foundedYear: 2016,

  showroom: {
    streetAddress: '480 Cottage Grove Road',
    city: 'Bloomfield',
    state: 'CT',
    postalCode: '06002',
  },

  phone: {
    main: '(860) 264-5275',
    mainTel: '+18602645275',
    alternate: '(860) 794-8739',
    alternateTel: '+18607948739',
    textOffers: '(860) 773-0801',
    textOffersTel: '+18607730801',
  },

  email: 'contact@designscopellc.com',

  hours: {
    weekday: 'Mon–Fri 9:00 am–5:00 pm',
    weekend: 'By appointment only',
    // TODO: confirm weekend policy and same-day availability wording — see CONTENT_GAPS.md
  },

  // TODO: get HIC registration number from Stephen. Must appear in the footer,
  // the contact page and in ads. Leave the field hidden in components until set.
  hicRegistrationNumber: null as string | null,

  team: {
    stephen: {
      // TODO: get Stephen's surname — see CONTENT_GAPS.md
      firstName: 'Stephen',
      role: 'Member, Interior Design Specialist & Master Craftsman',
      bio: "Co-founder with a Master's in Interior Design and 25+ years in the industry.",
    },
  },

  warranty: '6-month workmanship warranty',

  promises: [
    'Free design consultations',
    'Free, no-obligation quotes',
    '24-hour quotes',
    'Price matching on written estimates',
    'Help with permit and insurance paperwork',
  ],

  offers: {
    newCustomer: '10% off for new customers',
    military: '5% military discount',
    // TODO: confirm exact terms — the current site's headline and body text conflict. See CONTENT_GAPS.md.
  },

  supplierBrands: ['TOTO', 'Hansgrohe', 'Wellborn Forest', 'Brizo', 'Delta'],
  // TODO: confirm this is the full list and get logo files — see CONTENT_GAPS.md

  // Full showroom brand marquee, per the GrowthOS design handoff's BRANDS
  // list — a superset of supplierBrands above (still the confirmed-5 list
  // CLAUDE.md points to). TODO: confirm this full list and get logo files,
  // same gap as supplierBrands — see CONTENT_GAPS.md.
  showroomBrands: [
    'TOTO',
    'Hansgrohe',
    'Wellborn Forest',
    'Brizo',
    'Delta',
    'Franke',
    'Robern',
    'MSI',
    'Fabuwood',
    'Top Knobs',
    'Native Trails',
    'Kalia',
    'Citi Quartz',
    'Schluter Systems',
    'Jeffrey Alexander',
    'Cali Bamboo',
    'Trex',
    'Panasonic',
    'Warmup',
    'Icera',
  ],

  memberships: ['HBRA', 'Bloomfield Chamber of Commerce', 'KBIS'],
  // TODO: confirm KBIS membership — see CONTENT_GAPS.md

  // Trust-badge row (home hero strip + footer), per the design handoff's
  // "Global components → Trust badges". The BBB and Houzz badges are
  // UNCONFIRMED — see CONTENT_GAPS.md "Assets". Rendered now to match the
  // handoff exactly, at Tobi's request; don't ship without Stephen
  // confirming them, and swap in the official BBB/Houzz/Wellborn member
  // badge artwork (these are plain icon placeholders).
  credentials: [
    { mark: 'A+', title: 'BBB accredited', sub: 'A+ rating' },
    { mark: '2024', title: 'Best of Houzz', sub: '2024 · Service' },
    { mark: '', title: 'CT licensed', sub: 'HIC # (to add)' },
    { mark: '', title: 'Fully insured', sub: 'Liability & workers’ comp' },
    { mark: '', title: 'Wellborn Forest', sub: 'Authorised dealer' },
    { mark: '6M', title: 'Warranty', sub: '6 months, in writing' },
  ],

  social: {
    facebook: 'https://facebook.com/designscopellc',
    instagram: 'https://instagram.com/designscopesllc',
    youtube: 'https://youtube.com/@designscopellc',
    yelp: 'https://yelp.com/biz/design-scope-bloomfield',
  },

  // TODO: get the Google Business Profile review link — see CONTENT_GAPS.md
  googleReviewUrl: null as string | null,

  services: {
    residential: [
      'Kitchen remodeling',
      'Bathroom remodeling',
      'Home renovations',
      'Fire and smoke damage restoration',
      'Water damage restoration',
    ],
    commercial: ['Commercial renovations', 'Commercial restorations'],
    showroom: [
      'Interior construction products',
      'Exterior building products',
      'Design-build sales and services',
    ],
  },

  // Full list kept on /areas/ as plain text. Option B ships 3 town pages (below).
  serviceAreas: [
    'Bloomfield',
    'West Hartford',
    'Windsor',
    'Simsbury',
    'Avon',
    'Hartford',
    'East Hartford',
    'Manchester',
    'East Granby',
    'East Windsor',
    'South Windsor',
    'Farmington Valley',
  ],

  // The design handoff builds all 5 of CLAUDE.md's candidate towns (not
  // just Option B's 3) with unique copy for each — built that way at
  // Tobi's request, to match the handoff exactly. TODO: confirm the final
  // town list and scope (3 vs 5) with Stephen before launch — see
  // CONTENT_GAPS.md.
  townPages: ['Bloomfield', 'West Hartford', 'Simsbury', 'Avon', 'Windsor'],
} as const;

export type Business = typeof business;
