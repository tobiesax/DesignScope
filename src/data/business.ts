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

  supplierBrands: ['TOTO', 'Hansgrohe', 'Wellborn', 'Brizo', 'Delta'],
  // TODO: confirm this is the full list and get logo files — see CONTENT_GAPS.md

  memberships: ['HBRA', 'Bloomfield Chamber of Commerce', 'KBIS'],
  // TODO: confirm KBIS membership — see CONTENT_GAPS.md

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

  // TODO: confirm the final 3 town pages with Stephen — see CONTENT_GAPS.md
  townPages: ['Bloomfield', 'West Hartford', 'Windsor'],
} as const;

export type Business = typeof business;
