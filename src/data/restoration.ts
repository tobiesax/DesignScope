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
