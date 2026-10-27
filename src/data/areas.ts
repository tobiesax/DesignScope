// Town pages — expanded from Option B's 3 to all 5 of CLAUDE.md's own
// candidate towns, to match the design handoff exactly (its own TOWNS
// object covers the same 5), at Tobi's request. Confirm the final scope
// (3 vs 5) with Stephen before launch — see CONTENT_GAPS.md and
// BUILD_PLAN.md Week 1.
//
// Intro copy and drive times are the handoff's own — plausible but
// unconfirmed (drive times are approximate from the Bloomfield showroom).
export interface TownPage {
  slug: string;
  name: string;
  metaDescription: string;
  intro: string;
  highlight: string;
  /** Approximate drive time from the Bloomfield showroom — unconfirmed, see CONTENT_GAPS.md. */
  drive: string;
  /** Key into src/data/mockup-images.ts — matches the handoff's own per-town image. */
  image:
    | 'ba-after'
    | 'hero-kitchen'
    | 'proj-renovation-simsbury'
    | 'proj-bath-avon'
    | 'proj-shower-windsor';
}

export const towns: TownPage[] = [
  {
    slug: 'bloomfield',
    name: 'Bloomfield',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for Bloomfield, CT homeowners, from the showroom on Cottage Grove Road.',
    intro:
      'Our showroom is right here on Cottage Grove Road. Many Bloomfield homes are 1950s–70s capes and ranches, ideal for opening up kitchens and updating baths.',
    highlight: 'Walk-ins welcome at the showroom, 480 Cottage Grove Road.',
    drive: 'in town',
    image: 'ba-after',
  },
  {
    slug: 'west-hartford',
    name: 'West Hartford',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for West Hartford, CT homeowners.',
    intro:
      "From Elmwood colonials to Bishop's Corner capes, we design kitchens and baths that respect West Hartford's older homes and add modern living.",
    highlight: 'A short drive from the Bloomfield showroom.',
    drive: '12 min away',
    image: 'hero-kitchen',
  },
  {
    slug: 'simsbury',
    name: 'Simsbury',
    metaDescription:
      'Kitchen and bath remodeling, whole-home renovations and restoration for Simsbury, CT homeowners.',
    intro:
      'Larger Simsbury homes often call for whole-home updates. We plan kitchens, baths and open layouts together, with permits handled.',
    highlight: 'Whole-home renovations are a Simsbury specialty.',
    drive: '15 min away',
    image: 'proj-renovation-simsbury',
  },
  {
    slug: 'avon',
    name: 'Avon',
    metaDescription:
      'Kitchen and bath remodeling, primary bathroom suites and restoration for Avon, CT homeowners.',
    intro:
      'Avon homeowners come to us most for primary bathroom suites and kitchen updates, designed in our showroom and built by our own crews.',
    highlight: 'A favorite for primary bathroom suites.',
    drive: '18 min away',
    image: 'proj-bath-avon',
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for Windsor, CT homeowners.',
    intro:
      'Close to our Bloomfield base, Windsor gets quick consultations, accessible bathroom upgrades and fast restoration response.',
    highlight: 'Neighboring Bloomfield, home of our showroom.',
    drive: '10 min away',
    image: 'proj-shower-windsor',
  },
];
