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
    {
      mark: 'A+',
      title: 'BBB accredited',
      sub: 'A+ rating',
      icon: 'M12 2.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 1 0 0-13z M8.3 14.2 7 21.5l5-2.8 5 2.8-1.3-7.3 M9.5 9l1.8 1.8L14.6 7.5',
    },
    {
      mark: '2024',
      title: 'Best of Houzz',
      sub: '2024 · Service',
      icon: 'M3 11 12 3.5l9 7.5 M5.5 9.5V20.5h13V9.5 M12 10.2l1.25 2.55 2.8.4-2.03 1.98.48 2.79L12 16.6l-2.5 1.32.48-2.79-2.03-1.98 2.8-.4z',
    },
    {
      mark: '',
      title: 'CT licensed',
      sub: 'HIC # (to add)',
      icon: 'M3 5.5h18v13H3z M6.5 9.5h5 M6.5 12.5h7 M6.5 15.5h4 M15.5 10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0 M14.8 15.5c.4-1.2 1.4-1.9 2.45-1.9s2.05.7 2.45 1.9',
    },
    {
      mark: '',
      title: 'Fully insured',
      sub: 'Liability & workers’ comp',
      icon: 'M12 2.5l8 3v6.2c0 4.6-3.4 8.4-8 9.8-4.6-1.4-8-5.2-8-9.8V5.5z M8.5 12l2.5 2.5 4.5-5',
    },
    {
      mark: '',
      title: 'Wellborn Forest',
      sub: 'Authorised dealer',
      icon: 'M3.5 3.5h17v17h-17z M12 3.5v17 M3.5 13h17 M9.5 7.5v2.5 M14.5 7.5v2.5 M9.5 15.5v2 M14.5 15.5v2',
    },
    {
      mark: '6M',
      title: 'Warranty',
      sub: '6 months, in writing',
      icon: 'M5 2.5h10l4 4v15H5z M15 2.5v4h4 M8.5 11.5h7 M8.5 14.5h4.5 M8.5 17.5l1.5 1.5 3-3',
    },
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
