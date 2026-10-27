// The 3 town pages Option B ships (HANDOFF.md section 3) — proposed list,
// still pending Stephen's confirmation (CONTENT_GAPS.md). No town-tagged
// real project photos exist yet for any of these three, so each page's
// local-proof section stays empty rather than showing an unrelated town's
// project — see src/pages/areas/[town].astro.
export interface TownPage {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string;
  highlight: string;
}

export const towns: TownPage[] = [
  {
    slug: 'bloomfield',
    name: 'Bloomfield',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for Bloomfield, CT homeowners, from the showroom on Cottage Grove Road.',
    intro:
      'Bloomfield is home — our showroom sits right on Cottage Grove Road, so Bloomfield homeowners can walk in, see cabinetry and fixtures in person, and talk through a project without an appointment.',
    highlight: 'Walk-ins welcome at the showroom, 480 Cottage Grove Road.',
  },
  {
    slug: 'west-hartford',
    name: 'West Hartford',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for West Hartford, CT homeowners.',
    intro:
      'We work in West Hartford homes regularly, from kitchen and bath remodels to full renovations and fire and water damage restoration. The showroom in Bloomfield is a short drive away for anyone who wants to see materials in person first.',
    highlight: 'A short drive from the Bloomfield showroom.',
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for Windsor, CT homeowners.',
    intro:
      'Windsor homeowners get the same process as everyone else: a free design consultation, a written quote within 24 hours, and one team handling design through construction, with the showroom in neighboring Bloomfield any time you want to see products in person.',
    highlight: 'Neighboring Bloomfield, home of our showroom.',
  },
];
