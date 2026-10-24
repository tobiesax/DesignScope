import type { mockupImages } from './mockup-images';

export interface ServicePage {
  slug: string;
  /** Matches a project's `cat` in src/data/home.ts mockProjects */
  category: string;
  title: string;
  metaDescription: string;
  heroImage: keyof typeof mockupImages;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubcopy: string;
  intro: string;
}

// Copy here is grounded in confirmed business.ts facts (promises, warranty,
// supplier brands) — nothing invented. This is the template BUILD_PLAN.md
// Week 2 applies to Kitchens first; Week 3 adds the remaining entries.
export const kitchens: ServicePage = {
  slug: 'kitchens',
  category: 'Kitchens',
  title: 'Kitchen Remodeling in Bloomfield, CT',
  metaDescription:
    'Custom kitchen remodeling across Hartford County: free design consultation, a written quote within 24 hours, and one team handling design through construction.',
  heroImage: 'path-remodeling',
  heroEyebrow: 'Remodeling · Kitchens',
  heroHeadline: 'Kitchen remodeling, from first sketch to final walkthrough',
  heroSubcopy:
    'Custom cabinetry, countertops and layouts for Hartford County homes. Free design consultation, a written quote within 24 hours, and one team handling design through construction.',
  intro:
    "Whether you're opening up a galley kitchen or starting from scratch, Design Scope handles design, permits and construction under one roof. Visit our Bloomfield showroom to see cabinetry, countertops and fixtures from TOTO, Hansgrohe, Wellborn, Brizo and Delta in person, or we'll bring design options to you.",
};
