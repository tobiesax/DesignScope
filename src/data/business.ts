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

  // TODO: confirm ownership before launch — per the compliance/CRM-readiness
  // spec Tobi supplied (2026-11-20), it's unconfirmed whether these two
  // numbers are Design Scope's own or leased through Hibu (the old host).
  // Don't remove them; just don't treat them as certainly portable until
  // Stephen confirms.
  phone: {
    main: '(860) 264-5275',
    mainTel: '+18602645275',
    alternate: '(860) 794-8739',
    alternateTel: '+18607948739',
    textOffers: '(860) 773-0801',
    textOffersTel: '+18607730801',
  },

  email: 'contact@designscopellc.com',

  // Exact phrasing confirmed per the compliance/CRM-readiness spec Tobi
  // supplied (2026-11-20) — used verbatim so every page reads the same way.
  hours: {
    weekday: 'Monday–Friday, 9:00 am–5:00 pm',
    weekend: 'Weekends by appointment only.',
  },

  // Confirmed per the compliance/CRM-readiness spec Tobi supplied
  // (2026-11-20, listed there under "Confirmed business facts, safe to
  // use"). Must appear in the footer, the contact page and in ads.
  hicRegistrationNumber: 'HIC.0645972' as string | null,

  team: {
    stephen: {
      // TODO: get Stephen's surname — see CONTENT_GAPS.md
      firstName: 'Stephen',
      role: 'Member, Interior Design Specialist & Master Craftsman',
      bio: "Stephen brings over 25 years of design and construction experience to the Farmington Valley. Holding a Master's Degree in Interior Design, he combines architectural aesthetics, spatial planning and fine carpentry to bridge the gap between concept drawings and hands-on site execution. Since co-founding Design Scope in 2016, Stephen has led the company's growth into a full kitchen and bathroom remodeling business, including the opening of its fully equipped showroom, where clients can explore material samples, cabinetry and hardware finishes alongside the design team.",
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
  // Full list confirmed below (showroomBrands) — lifted verbatim from the
  // live site's own /about structured "Brands" listing. Still need logo
  // files from Stephen — see CONTENT_GAPS.md.

  // Full showroom brand marquee — confirmed against the live site's own
  // /about page structured data ("Brands" list, scraped 2026-11-13), not
  // just the design handoff's BRANDS array. A few near-duplicate spellings
  // on the live page (e.g. "Ted Wood Cabinetry" / "Tedd Wood Fine
  // Cabinetry", "Wet Wall" / "Wetwall") are deduped to one name each here.
  // Logo files still needed from Stephen — see CONTENT_GAPS.md.
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
    'Belwith Keeler',
    'Deluxe Wood Cabinetry',
    'Fleurco',
    'Harrow',
    'Hardware Resources',
    'Hickory Hardware',
    'Phylrich',
    'Raphael Porcelain',
    'Tedd Wood Fine Cabinetry',
    'U.S. Cabinet Depot',
    'Wet Wall',
    'Wolf Home Products',
  ],

  // Confirmed against the live site's own /about structured "Associations"
  // listing (scraped 2026-11-13): HBRA, Bloomfield Chamber of Commerce and
  // KBIS (Kitchen Bathroom Industry Show) are all listed there.
  memberships: ['HBRA', 'Bloomfield Chamber of Commerce', 'KBIS'],

  // Confirmed against the live site's own /about structured "Payment
  // Options" listing (scraped 2026-11-16): the exact set of methods listed
  // there, in that order.
  paymentMethods: [
    'Visa',
    'MasterCard',
    'American Express',
    'Discover',
    'PayPal',
    'Apple Pay',
    'Google Pay',
    'Samsung Pay',
    'Zelle',
    'Cash',
    'Check',
    'Invoice',
    'Financing',
  ],

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
      sub: 'HIC.0645972',
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
      // Confirmed against the live site's own /about structured
      // "Certifications" listing (scraped 2026-11-16).
      mark: '',
      title: 'Warmup certified',
      sub: 'Installer',
      icon: 'M12 3a6 6 0 1 0 0 12a6 6 0 1 0 0-12z M9.3 9.2l1.9 1.9 3.5-3.6 M8.5 13.5 7 21l5-2.7 5 2.7-1.5-7.5',
    },
    {
      mark: '',
      title: 'Schluter certified',
      sub: 'Installer',
      icon: 'M12 3a6 6 0 1 0 0 12a6 6 0 1 0 0-12z M9.3 9.2l1.9 1.9 3.5-3.6 M8.5 13.5 7 21l5-2.7 5 2.7-1.5-7.5',
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

// Exact A2P 10DLC consent wording, word for word from the compliance/
// CRM-readiness spec Tobi supplied (2026-11-20) — every form on the site
// that collects a phone number shows this same text next to its consent
// checkbox, and the exact string is also what gets recorded as proof of
// consent on submit (src/lib/lead.ts). Don't paraphrase per-form; carriers
// want the shown text to match what's on file.
export const smsConsentText =
  "I agree to receive text messages from Design Scope LLC about my enquiry, appointments, project updates and occasional offers. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our Privacy Policy and Terms.";

// Centralized so every form offers the same choices (previously
// EnquiryForm.astro and BookingModal.astro each had their own inline
// array — despite a comment claiming they matched, they didn't: one had
// Under $15k/$15k–$30k/$30k–$60k/$60k+, the other Under $25k/$25k–$50k/
// $50k–$100k/$100k+). Neither is confirmed real — see CONTENT_GAPS.md
// "Confirm the budget bands with Stephen" — so this picks one (the wider,
// BookingModal set) as canonical rather than guessing a third.
export const budgetBands = ['Under $25k', '$25k–$50k', '$50k–$100k', '$100k+', 'Not sure yet'];
