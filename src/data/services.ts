import { mockupImages } from './mockup-images';

export interface ServicePage {
  slug: string;
  /** Matches a project's `cat` in src/data/home.ts mockProjects */
  category: string;
  title: string;
  metaDescription: string;
  heroImage: ImageMetadata;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubcopy: string;
  intro: string;
  /** "What's included" — Kitchens/Bathrooms only, from the design handoff. */
  included?: string[];
  /** "Typical investment" ranges — the handoff's own figures, unconfirmed
   * (CONTENT_GAPS.md). Its $/mo financing estimate is dropped: financing
   * is Phase 2, not in the current proposal (BUILD_PLAN.md), so showing a
   * monthly number with no financing product behind it would be
   * misleading (CLAUDE.md rule 1). */
  ranges?: { t: string; b: string; p: string }[];
}

// Shared across both Kitchens and Bathrooms — the handoff's remodel page
// process section doesn't change with the tab.
export const remodelProcess = [
  { t: 'Consult', b: 'Free 45 minutes at the showroom, at home or by video.' },
  { t: 'Design & quote', b: '3D design and a written quote within 24 hours.' },
  { t: 'Build', b: 'Our crews, permits handled, weekly updates by text.' },
  { t: 'Walkthrough', b: 'Final walkthrough together and a 6-month warranty.' },
];

export const remodelFaqs = [
  {
    q: 'Is the consultation really free?',
    a: 'Yes. 45 minutes with a designer, at the showroom, your home or by video. No obligation.',
  },
  {
    q: 'How fast is the quote?',
    a: 'A written, itemised quote within 24 hours of your consultation.',
  },
  {
    q: 'Do you use subcontractors?',
    a: 'Our own crews do the core work. Licensed specialists we have worked with for years handle anything else, managed by us.',
  },
  {
    q: 'Can I live at home during the work?',
    a: 'Usually yes. We set up dust protection and agree working hours before we start.',
  },
];

// Copy here is grounded in confirmed business.ts facts (promises, warranty,
// supplier brands) — nothing invented. This is the template BUILD_PLAN.md
// Week 2 applies to Kitchens first; Week 3 adds the remaining entries.
// Hero headline, subcopy, intro and the "included" list are lifted from the
// live site's own /kitchen-remodeling page (scraped 2026-11-13), not the
// design handoff's generic version — see CONTENT_GAPS.md.
export const kitchens: ServicePage = {
  slug: 'kitchens',
  category: 'Kitchens',
  title: 'Kitchen Remodeling in Bloomfield, CT',
  metaDescription:
    'Custom kitchen remodeling across Hartford County: free design consultation, a written quote within 24 hours, and one team handling design through construction.',
  heroImage: mockupImages['subway-tile-kitchen'],
  heroEyebrow: 'Kitchen Remodeling',
  heroHeadline: "Create the Kitchen You've Always Wanted",
  heroSubcopy:
    'Your kitchen should work beautifully for your daily needs while reflecting your personal style. We manage every detail of your project with careful attention and skilled craftsmanship.',
  intro:
    "An outdated or poorly designed kitchen makes daily tasks harder and lowers your home's value. A well-planned kitchen remodel improves comfort, boosts efficiency, and provides strong returns on your investment — Design Scope builds kitchens that balance current trends with lasting appeal.",
  included: [
    'Free design consultations',
    'Custom cabinetry installation',
    'Countertop replacement',
    'Lighting upgrades',
    'Flooring installation',
    'Backsplash design',
    'Appliance integration',
    'Island construction',
    'Storage solutions',
    'Layout optimization',
  ],
  ranges: [
    { t: 'Refresh', b: 'Counters, backsplash, fixtures and paint', p: '$15k–$30k' },
    { t: 'Full remodel', b: 'New cabinetry and appliances, same layout', p: '$35k–$75k' },
    { t: 'Open-plan', b: 'Walls removed, island, structural work', p: '$75k+' },
  ],
};

// Hero headline, subcopy and intro are lifted from the live site's own
// /bathroom-remodeling page (scraped 2026-11-13). The live page has no
// dedicated "what's included" bullet list near its hero the way the
// kitchen page does, so `included` here is built from the services the
// live intro paragraph names (custom vanities, walk-in showers, soaking
// tubs, tile, lighting, fixtures), not invented.
export const bathrooms: ServicePage = {
  slug: 'bathrooms',
  category: 'Bathrooms',
  title: 'Bathroom Remodeling in Bloomfield, CT',
  metaDescription:
    'Bathroom remodeling across Hartford County: walk-in showers, tubs, vanities and tile. Free design consultation, a written quote within 24 hours, one team from design to construction.',
  heroImage: mockupImages['spa-bathroom'],
  heroEyebrow: 'Bathroom Remodeling',
  heroHeadline: 'Create a Bathroom That Works for Your Life',
  heroSubcopy:
    'Your bathroom should match your style and support your daily routine. We manage everything from initial design concepts to final construction details.',
  intro:
    "A well-designed bathroom improves your home's functionality and increases property value. Modern bathroom upgrades address outdated fixtures, limited storage, poor lighting and accessibility concerns while creating a space you'll enjoy for years.",
  included: [
    'Custom vanities',
    'Walk-in showers',
    'Soaking tubs',
    'Tile installation',
    'Lighting upgrades',
    'Modern fixtures',
  ],
  ranges: [
    { t: 'Refresh', b: 'Vanity, tile and fixtures', p: '$12k–$20k' },
    { t: 'Full bathroom', b: 'New layout, shower and tile to ceiling', p: '$22k–$40k' },
    { t: 'Primary suite', b: 'Freestanding tub, walk-in shower, double vanity', p: '$40k+' },
  ],
};

// No real home-renovation photos exist yet (CONTENT_GAPS.md) — this reuses
// the same temporary mockup photo already shown for this category on the
// home page (src/data/home.ts mockProjects). Hero headline, subcopy and
// intro are lifted from the live site's own /home-renovations page
// (scraped 2026-11-13).
export const homeRenovations: ServicePage = {
  slug: 'home-renovations',
  category: 'Home renovations',
  title: 'Home Renovations in Bloomfield, CT',
  metaDescription:
    'Single-room updates to whole-house renovations across Hartford County. Free design consultation, a written quote within 24 hours, and no hidden fees.',
  heroImage: mockupImages['proj-renovation-simsbury'],
  heroEyebrow: 'Home Renovations',
  heroHeadline: 'Give Your Living Space a Fresh New Look',
  heroSubcopy:
    "Your home should reflect your style and work for your family's everyday needs. From refreshing a single room to reimagining your entire house, we have the skills to create spaces you'll enjoy for years to come.",
  intro:
    "Renovating your home improves daily comfort and adds lasting value to your property. Strategic renovations create more functional living spaces, modernize outdated rooms and fixtures, improve energy efficiency, increase resale value and let you personalize your space to match your taste.",
};
