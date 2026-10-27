import { projectImages } from './project-images';
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
  heroImage: projectImages['kitchen-hero'],
  heroEyebrow: 'Remodeling · Kitchens',
  heroHeadline: 'Kitchen remodeling, from first sketch to final walkthrough',
  heroSubcopy:
    'Custom cabinetry, countertops and layouts for Hartford County homes. Free design consultation, a written quote within 24 hours, and one team handling design through construction.',
  intro:
    "Whether you're opening up a galley kitchen or starting from scratch, Design Scope handles design, permits and construction under one roof. Visit our Bloomfield showroom to see cabinetry, countertops and fixtures from TOTO, Hansgrohe, Wellborn, Brizo and Delta in person, or we'll bring design options to you.",
};

export const bathrooms: ServicePage = {
  slug: 'bathrooms',
  category: 'Bathrooms',
  title: 'Bathroom Remodeling in Bloomfield, CT',
  metaDescription:
    'Bathroom remodeling across Hartford County: walk-in showers, tubs, vanities and tile. Free design consultation, a written quote within 24 hours, one team from design to construction.',
  heroImage: projectImages['bathroom-hero'],
  heroEyebrow: 'Remodeling · Bathrooms',
  heroHeadline: 'Bathroom remodeling, built to last and easy to live with',
  heroSubcopy:
    'Walk-in showers, soaking tubs, vanities and tile for Hartford County homes. Free design consultation, a written quote within 24 hours, and one team handling design through construction.',
  intro:
    "From a full primary-bath renovation to a walk-in shower conversion, Design Scope handles design, permits and construction under one roof. Visit our Bloomfield showroom to see tile, fixtures and vanities from TOTO, Hansgrohe, Wellborn, Brizo and Delta in person, or we'll bring design options to you.",
};

// No real home-renovation photos exist yet (CONTENT_GAPS.md) — this reuses
// the same temporary mockup photo already shown for this category on the
// home page (src/data/home.ts mockProjects).
export const homeRenovations: ServicePage = {
  slug: 'home-renovations',
  category: 'Home renovations',
  title: 'Home Renovations in Bloomfield, CT',
  metaDescription:
    'Single-room updates to whole-house renovations across Hartford County. Free design consultation, a written quote within 24 hours, and no hidden fees.',
  heroImage: mockupImages['proj-renovation-simsbury'],
  heroEyebrow: 'Remodeling · Home renovations',
  heroHeadline: 'Home renovations, big or small, done right the first time',
  heroSubcopy:
    'From a single-room update to a whole-house renovation, Design Scope plans the project around how you actually live. Free design consultation, a written quote within 24 hours, no hidden fees.',
  intro:
    "Every home renovation gets the same attention to detail, whether it's one room or the whole house. We work closely with you from the first conversation through the final walkthrough, with clear communication and a written plan, so there are no surprises partway through the project.",
};
