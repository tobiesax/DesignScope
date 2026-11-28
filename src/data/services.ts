import { mockupImages } from './mockup-images';
import { projectImages } from './project-images';

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
//
// `intro` expanded 2026-11-24 for SEO/GEO depth (client request: pages read
// as too brief/summarized). The added sentences draw only on facts already
// confirmed elsewhere in business.ts/remodelProcess/remodelFaqs — named
// showroom brands relevant to kitchens, the free 45-min consult, 24h
// written quote, "our own crews, not subcontractors" fact, the 6-month
// warranty, and HBRA/KBIS membership — nothing new invented.
export const kitchens: ServicePage = {
  slug: 'kitchens',
  category: 'Kitchens',
  title: 'Kitchen Remodeling in Bloomfield, CT',
  metaDescription:
    'Kitchen remodeling for Bloomfield, West Hartford, Simsbury and Hartford County, CT. Free 45-minute design consultation, a written quote within 24 hours, 6-month workmanship warranty.',
  heroImage: mockupImages['subway-tile-kitchen'],
  heroEyebrow: 'Kitchen Remodeling',
  heroHeadline: "Create the Kitchen You've Always Wanted",
  heroSubcopy:
    'Your kitchen should work beautifully for your daily needs while reflecting your personal style. We manage every detail of your project, design, permits and construction, with careful attention and skilled craftsmanship.',
  intro:
    "An outdated or poorly designed kitchen makes daily tasks harder and lowers your home's value. A well-planned kitchen remodel improves comfort, boosts efficiency, and provides strong returns on your investment, Design Scope builds kitchens that balance current trends with lasting appeal. Every project starts with a free 45-minute design consultation at our Bloomfield showroom, where you can handle cabinetry, countertop and hardware samples from brands like Wellborn Forest, Fabuwood, MSI and Top Knobs in person rather than choosing from a screen. You'll have a written, itemized quote within 24 hours, our own crews, not subcontractors, do the core work, and every kitchen is backed by a 6-month workmanship warranty in writing. As members of HBRA and KBIS, we also handle the building permit paperwork so you don't have to chase it yourself.",
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
//
// `intro` expanded 2026-11-24 for SEO/GEO depth, same grounding rule as
// kitchens above — named showroom brands relevant to bathrooms (TOTO,
// Hansgrohe, Native Trails, Fleurco), the Warmup and Schluter installer
// certifications from business.ts's credentials list (both directly
// relevant to bathroom floors/showers), and the same confirmed promises.
export const bathrooms: ServicePage = {
  slug: 'bathrooms',
  category: 'Bathrooms',
  title: 'Bathroom Remodeling in Bloomfield, CT',
  metaDescription:
    'Bathroom remodeling for Bloomfield, West Hartford, Avon and Hartford County, CT. Walk-in showers, soaking tubs, radiant floor heat. Free consultation, 24-hour written quote.',
  heroImage: mockupImages['spa-bathroom'],
  heroEyebrow: 'Bathroom Remodeling',
  heroHeadline: 'Create a Bathroom That Works for Your Life',
  heroSubcopy:
    'Your bathroom should match your style and support your daily routine. We manage everything from initial design concepts to final construction details, with our own crews on site throughout.',
  intro:
    "A well-designed bathroom improves your home's functionality and increases property value. Modern bathroom upgrades address outdated fixtures, limited storage, poor lighting and accessibility concerns while creating a space you'll enjoy for years. In our Bloomfield showroom you can see and touch the fixtures and tile before you commit, TOTO and Hansgrohe plumbing fixtures, Native Trails vanities, Fleurco shower enclosures, and our crew includes Warmup-certified installers for radiant floor heat and Schluter-certified installers for tile and waterproofing, the two details that separate a bathroom that lasts from one that doesn't. Every bathroom remodel starts with a free 45-minute design consultation, comes with a written quote within 24 hours, and carries the same 6-month workmanship warranty as every project we build.",
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

// Hero photo is now a real (moderate-confidence — see project-images.ts)
// home-renovation photo scraped 2026-11-17, replacing the mockup. Hero
// headline, subcopy and intro are lifted from the live site's own
// /home-renovations page (scraped 2026-11-13).
//
// `intro` expanded 2026-11-24 for SEO/GEO depth, same grounding rule as
// kitchens/bathrooms above — Stephen's 25-years/Master's-in-Interior-Design
// background and the showroom from his bio in business.ts, the "one team,
// not a string of subcontractors" fact, and price matching from the
// confirmed promises list.
export const homeRenovations: ServicePage = {
  slug: 'home-renovations',
  category: 'Home renovations',
  title: 'Home Renovations in Bloomfield, CT',
  metaDescription:
    'Whole-home renovations for Bloomfield, Simsbury and Hartford County, CT, from a single-room refresh to a full layout change. Free consultation, 24-hour written quote.',
  heroImage: projectImages['home-reno-3'],
  heroEyebrow: 'Home Renovations',
  heroHeadline: 'Give Your Living Space a Fresh New Look',
  heroSubcopy:
    "Your home should reflect your style and work for your family's everyday needs. From refreshing a single room to reimagining your entire house, we have the skills to create spaces you'll enjoy for years to come.",
  intro:
    "Renovating your home improves daily comfort and adds lasting value to your property. Strategic renovations create more functional living spaces, modernize outdated rooms and fixtures, improve energy efficiency, increase resale value and let you personalize your space to match your taste. Design Scope is led by Stephen, who holds a Master's Degree in Interior Design and brings over 25 years of design and construction experience to the Farmington Valley, the same designer who meets you at the showroom plans the layout and is on site as it's built. Whether it's one room or the whole house, you get a free design consultation, a written quote within 24 hours with price matching on competing written estimates, and one team handling every trade, so you're never coordinating between separate contractors yourself.",
};
