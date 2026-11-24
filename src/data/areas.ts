// Town pages — expanded from Option B's 3 to all 5 of CLAUDE.md's own
// candidate towns, to match the design handoff exactly (its own TOWNS
// object covers the same 5), at Tobi's request. Confirm the final scope
// (3 vs 5) with Stephen before launch — see CONTENT_GAPS.md and
// BUILD_PLAN.md Week 1.
//
// Intro copy and drive times are the handoff's own — plausible but
// unconfirmed (drive times are approximate from the Bloomfield showroom).
//
// `intro`/`highlight` expanded 2026-11-24 for SEO/GEO depth (client
// request: pages read as too brief/summarized, and `highlight` wasn't even
// rendered on the page until today — see [town].astro). The added material
// only restates facts confirmed elsewhere (business.ts's free-consult/
// 24h-quote/warranty promises, named showroom brands, the "our own crews"
// fact) against each town's existing housing-stock detail — nothing new
// about any specific town is invented beyond what was already here.
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
      "Our showroom is right here on Cottage Grove Road. Many Bloomfield homes are 1950s–70s capes and ranches, ideal for opening up kitchens and updating baths. Because you're in town, scheduling a free design consultation or a quick showroom visit to see cabinetry and countertop samples in person is easy — most Bloomfield projects start that way rather than over video.",
    highlight: 'Walk-ins welcome at the showroom, 480 Cottage Grove Road — no appointment needed to browse samples.',
    drive: 'in town',
    image: 'ba-after',
  },
  {
    slug: 'west-hartford',
    name: 'West Hartford',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for West Hartford, CT homeowners.',
    intro:
      "From Elmwood colonials to Bishop's Corner capes, we design kitchens and baths that respect West Hartford's older homes and add modern living. Older housing stock like this often means working around narrower original layouts and plaster walls, which is exactly where having one team — our own crews, not a string of subcontractors — handling design through construction keeps a project on schedule.",
    highlight: 'A short drive from the Bloomfield showroom — free design consultations by video if an in-person visit doesn\'t fit your schedule.',
    drive: '12 min away',
    image: 'hero-kitchen',
  },
  {
    slug: 'simsbury',
    name: 'Simsbury',
    metaDescription:
      'Kitchen and bath remodeling, whole-home renovations and restoration for Simsbury, CT homeowners.',
    intro:
      "Larger Simsbury homes often call for whole-home updates. We plan kitchens, baths and open layouts together, with permits handled, rather than treating each room as a separate project with its own timeline. Stephen, our co-founder, brings over 25 years of design and construction experience and a Master's Degree in Interior Design to planning these larger layouts.",
    highlight: 'Whole-home renovations are a Simsbury specialty — one written quote covers every room, not a separate estimate per trade.',
    drive: '15 min away',
    image: 'proj-renovation-simsbury',
  },
  {
    slug: 'avon',
    name: 'Avon',
    metaDescription:
      'Kitchen and bath remodeling, primary bathroom suites and restoration for Avon, CT homeowners.',
    intro:
      'Avon homeowners come to us most for primary bathroom suites and kitchen updates, designed in our showroom and built by our own crews. That showroom visit matters here in particular — seeing TOTO and Hansgrohe fixtures, Native Trails vanities and tile samples in person makes the freestanding-tub-and-walk-in-shower primary suites Avon tends to ask for easier to plan accurately.',
    highlight: 'A favorite for primary bathroom suites — see the fixtures and tile in our Bloomfield showroom before you commit.',
    drive: '18 min away',
    image: 'proj-bath-avon',
  },
  {
    slug: 'windsor',
    name: 'Windsor',
    metaDescription:
      'Kitchen and bath remodeling, home renovations and restoration for Windsor, CT homeowners.',
    intro:
      "Close to our Bloomfield base, Windsor gets quick consultations, accessible bathroom upgrades and fast restoration response. Being just minutes from the showroom means a free 45-minute design consultation can usually happen within days, not weeks, and our crews can be on site fast if water or fire damage turns a remodel into an emergency.",
    highlight: 'Neighboring Bloomfield, home of our showroom — the shortest drive of any town we serve.',
    drive: '10 min away',
    image: 'proj-shower-windsor',
  },
];
