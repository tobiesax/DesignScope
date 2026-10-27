import { mockupImages } from './mockup-images';

export interface RestorationPage {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: ImageMetadata;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubcopy: string;
  risks: string[];
  rightNowSteps: { t: string; b: string }[];
  process: { t: string; b: string }[];
}

// Restoration-specific real photos don't exist yet (CONTENT_GAPS.md) — the
// design brief ships a scenario image per service (res-fire, res-storm,
// res-mold, restoration.jpg for water), so each page gets its own stand-in
// instead of all three sharing one generic photo.

export const fireSmoke: RestorationPage = {
  slug: 'fire-and-smoke-damage',
  title: 'Fire & Smoke Damage Restoration in Bloomfield, CT',
  metaDescription:
    '24/7 fire and smoke damage restoration across the Farmington Valley: damage assessment, cleanup, odor removal and full rebuild, with insurance paperwork handled.',
  heroImage: mockupImages['res-fire'],
  heroEyebrow: 'Restoration · Fire & smoke damage',
  heroHeadline: 'Fire and smoke damage, handled start to finish',
  heroSubcopy:
    'Smoke and soot do damage well beyond what burned. We assess it, clean and ventilate the property, and rebuild, while we handle the insurance paperwork.',
  risks: [
    'Smoke residue inside walls, ceilings and ventilation systems',
    'Soot and ash odors that linger after the visible damage is gone',
    'Water damage left behind from putting the fire out',
    'Structural elements weakened by heat or water',
    'Health risks from contaminated materials and air',
  ],
  rightNowSteps: [
    { t: 'Get everyone out, then call us', b: 'We answer day or night, call or text.' },
    {
      t: "Don't go back in",
      b: "Wait until it's been cleared safe, even for things that look fine.",
    },
    {
      t: 'Call your insurer',
      b: "Open your claim; we'll work directly with them on the paperwork.",
    },
    {
      t: "We assess as soon as it's safe",
      b: 'A full damage assessment, then a written restoration plan.',
    },
  ],
  process: [
    { t: 'Assess', b: 'Full inspection of the structure, smoke residue and air quality.' },
    { t: 'Clean & ventilate', b: 'Soot removal, odor elimination and hazardous material removal.' },
    { t: 'Plan', b: 'A written restoration plan, with insurance paperwork handled for you.' },
    { t: 'Rebuild', b: 'Full reconstruction back to livable, backed by a 6-month warranty.' },
  ],
};

export const waterDamage: RestorationPage = {
  slug: 'water-damage',
  title: 'Water Damage Restoration in Bloomfield, CT',
  metaDescription:
    '24/7 water damage restoration across the Farmington Valley: extraction, drying, mold prevention and reconstruction, with insurance paperwork handled.',
  heroImage: mockupImages.restoration,
  heroEyebrow: 'Restoration · Water damage',
  heroHeadline: 'Water damage, from a small leak to severe flooding',
  heroSubcopy:
    'Mold can start within 24-48 hours of standing water. We extract water, dry the structure and rebuild, from a burst pipe to a flooded basement.',
  risks: [
    'Mold and mildew, which can start within 24-48 hours',
    'Weakened floors, walls and ceilings',
    'Electrical hazards',
    'Permanent staining and odor',
    'Damage to belongings and lower property value',
  ],
  rightNowSteps: [
    { t: 'Shut off the water if you safely can', b: 'At the fixture, appliance or main shutoff.' },
    { t: 'Call us, day or night', b: 'We arrive with extraction and drying equipment.' },
    {
      t: 'Call your insurer',
      b: "Open your claim; we'll work directly with them on the paperwork.",
    },
    { t: 'We start extraction and drying', b: 'The faster we start, the less it costs to fix.' },
  ],
  process: [
    { t: 'Extract', b: 'Emergency water extraction and removal.' },
    { t: 'Dry', b: 'Structural drying, dehumidification and mold prevention.' },
    { t: 'Repair', b: 'Flooring, wall and plumbing repairs, with insurance paperwork handled.' },
    { t: 'Rebuild', b: 'Full reconstruction, backed by a 6-month warranty.' },
  ],
};

export const restorationPages = [fireSmoke, waterDamage];

// "What we handle" detail panel (hub page only) — matches the design
// handoff's RES array exactly (copy, images, timelines, insurance notes).
// Granular action steps here are distinct from the `process` phase
// overview above, which the sub-pages already use.
export interface RestorationService {
  key: 'water' | 'fire' | 'mold' | 'storm';
  title: string;
  blurb: string;
  image: ImageMetadata;
  headline: string;
  signs: string[];
  detailSteps: string[];
  timeline: string;
  insurance: string;
  note: string;
  /** Only water and fire have a dedicated page (CLAUDE.md sitemap). */
  href?: string;
}

export const hubServices: RestorationService[] = [
  {
    key: 'water',
    title: 'Water damage',
    blurb: 'Burst pipes, leaks, flooded basements and appliance failures.',
    image: mockupImages.restoration,
    headline: 'Stop the water, dry it properly, then rebuild',
    signs: [
      'Burst pipe',
      'Flooded basement',
      'Water heater leak',
      'Ceiling stains',
      'Sump pump failure',
    ],
    detailSteps: [
      'Find and stop the source, extract standing water',
      'Moisture-map walls and floors with meters and thermal imaging',
      'Commercial drying with daily readings logged for your insurer',
      "Remove only what can't be saved, then rebuild with our remodel team",
    ],
    timeline: '3–5 days drying',
    insurance: 'Usually covered',
    note: 'Sudden and accidental water damage is covered by most homeowner policies. Gradual leaks and outside flooding often are not. We help you check before work starts.',
    href: '/restoration/water-damage/',
  },
  {
    key: 'fire',
    title: 'Fire & smoke',
    blurb: 'Kitchen fires, smoke and soot, plus board-up and rebuild.',
    image: mockupImages['res-fire'],
    headline: 'Secure the home, clean every surface, put it back',
    signs: ['Kitchen fire', 'Smoke odour', 'Soot on walls', 'Water from firefighting'],
    detailSteps: [
      'Board up windows and roof openings the same day',
      'Document damage room by room for your adjuster',
      'Soot removal, odour treatment and contents cleaning',
      'Rebuild kitchens, walls and finishes to match or better',
    ],
    timeline: '1–6 weeks',
    insurance: 'Usually covered',
    note: 'Fire is a named peril on standard policies. We provide the photo log, estimates and scope your adjuster needs.',
    href: '/restoration/fire-and-smoke-damage/',
  },
  {
    key: 'mold',
    title: 'Mold remediation',
    blurb: 'Testing, safe removal and fixing the moisture behind it.',
    image: mockupImages['res-mold'],
    headline: 'Remove it safely and stop it coming back',
    signs: ['Musty smell', 'Black spots', 'After a leak', 'Damp basement'],
    detailSteps: [
      'Inspect and test to find the extent and the cause',
      'Contain the area with negative air and HEPA filtration',
      'Remove affected materials and treat surfaces',
      'Fix the moisture source and rebuild',
    ],
    timeline: '2–5 days',
    insurance: 'Sometimes covered',
    note: "Mold is usually covered when it follows a covered water event. We'll tell you honestly if it isn't.",
  },
  {
    key: 'storm',
    title: 'Storm damage',
    blurb: 'Roof, siding, fallen trees and water coming in.',
    image: mockupImages['res-storm'],
    headline: 'Make it safe tonight, repair it properly after',
    signs: ['Roof leak', 'Fallen tree', 'Wind damage', 'Ice dams'],
    detailSteps: [
      'Emergency tarping and board-up to stop further damage',
      'Dry out any interior water',
      'Document everything for your claim',
      'Repair roof, siding and interiors with one crew',
    ],
    timeline: 'Same-day make-safe',
    insurance: 'Usually covered',
    note: 'Wind, hail and fallen-tree damage is covered on most policies. Ice-dam leaks often are too.',
  },
];

// "From emergency to better than before" — matches the handoff exactly.
export const emergencyTimeline = [
  { when: 'First hour', t: 'Answer & arrive', b: 'We answer, give you next steps, and head out.' },
  {
    when: 'Day 1',
    t: 'Make safe & document',
    b: 'Stop the damage, photos and readings for your insurer.',
  },
  { when: 'Days 2–5', t: 'Dry & clean', b: 'Commercial drying with daily moisture checks.' },
  {
    when: 'Then',
    t: 'Rebuild',
    b: 'Our remodeling team puts it back, often better than before.',
  },
];

// Insurance explainer — matches the handoff exactly.
export const coveredUsually = [
  'Burst or frozen pipes',
  'Sudden appliance leaks',
  'Fire and smoke damage',
  'Wind, hail and fallen trees',
  'Water from firefighting',
];
export const coveredRarely = [
  'Slow leaks over time',
  'Outside flood water (needs a flood policy)',
  'Sewer backup, unless added to your policy',
  'Wear and poor maintenance',
  'Mold without a covered cause',
];
// Named so we don't claim a partnership with any of them — "we work with
// all major insurers" (the handoff's own framing), not "these insurers
// work with us".
export const majorInsurers = [
  'The Hartford',
  'Travelers',
  'State Farm',
  'Allstate',
  'Liberty Mutual',
  'Amica',
  'USAA',
  'Nationwide',
];

export const restorationFaqs = [
  {
    q: 'Who pays for the work?',
    a: 'If the damage is covered, your insurer pays us directly, minus your deductible. We send the adjuster photos, moisture logs and an itemised estimate.',
  },
  {
    q: 'Do I need to leave my home?',
    a: "Usually not for water damage in one area. For fire, smoke or mold we'll tell you honestly if it's safer to stay elsewhere, and many policies cover that cost.",
  },
  {
    q: 'How long does drying take?',
    a: 'Most homes are dry in 3 to 5 days. We check moisture daily and only remove equipment when readings are back to normal.',
  },
  {
    q: 'Can I choose my own contractor for the rebuild?',
    a: "Yes, it's your choice. Most clients keep us because one team, one claim and one warranty is simpler.",
  },
];
