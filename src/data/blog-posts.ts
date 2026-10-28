// The first two posts are migrated from the live site with the same title,
// slug, date and author (HANDOFF.md section 5), with body text rewritten in
// our own words rather than copied — the extraction tool declined to
// reproduce the live pages verbatim (copyright), so this covers the same
// structure and facts instead of inventing new ones.
//
// The remaining five posts are original content, written at Tobi's request
// to seed organic/keyword SEO traffic (CONTENT_GAPS.md): the design
// handoff's blog mockup showed these same 5 titles/categories/excerpts as
// unwritten example cards with no real article behind them. General,
// accurate homeowner advice — no invented Design Scope-specific stats,
// certifications, equipment or claims.
export interface BlogSection {
  heading?: string;
  body?: string;
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  excerpt: string;
  /** For the design handoff's category filters — inferred from each post's actual subject. */
  category: 'Kitchens' | 'Bathrooms' | 'Restoration' | 'Showroom';
  /** Key into src/data/mockup-images.ts, for the handoff's hero/card images. */
  image:
    | 'proj-bath-avon'
    | 'hero-kitchen'
    | 'restoration'
    | 'cat-countertops'
    | 'proj-shower-windsor'
    | 'res-mold'
    | 'ds-kitchen';
  sections: BlogSection[];
  closing: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-plan-and-budget-for-professional-bathroom-remodeling-services',
    title: 'How to Plan and Budget for Professional Bathroom Remodeling Services',
    date: '2026-10-22',
    author: 'Stephen',
    excerpt:
      'A bathroom remodel pays off when it is planned well. Here is how we recommend approaching the budget, the cost factors and the contract.',
    category: 'Bathrooms',
    image: 'proj-bath-avon',
    sections: [
      {
        heading: 'Start with your needs and your budget',
        list: [
          "Think past the next year. If you're planning to grow your family or sell the house down the road, those plans should shape the layout and finishes you choose now.",
          'Set a budget before you fall in love with a material, and build in a contingency of roughly 10-15% for anything that turns up once the walls are open.',
          "Look at design options and materials side by side so you know what you're trading off, not just what looks good in a showroom.",
          "If you're interviewing contractors, confirm they're licensed and ask to see insurance.",
        ],
      },
      {
        heading: 'What actually drives the cost',
        list: [
          'Materials and supplies — tile, fixtures, cabinetry, countertops.',
          'Labor and professional fees, which typically make up a large share of the total, often 20-40% depending on the scope.',
          'Permit and inspection fees.',
          'The costs nobody budgets for: hidden water damage, outdated wiring, or plumbing that needs to move.',
        ],
      },
      {
        heading: 'What belongs in your contract',
        list: [
          'A clear scope of work and a realistic timeline.',
          'A payment schedule tied to project milestones, not a lump sum up front.',
          'An itemized budget so you can see where the money is going.',
          'Written warranties and guarantees on the work.',
        ],
      },
    ],
    closing:
      'A well-planned bathroom remodel comes down to the same three things every time: a clear budget, a contractor who puts it all in writing, and a plan that accounts for the unexpected.',
  },
  {
    slug: 'avoid-renovation-disasters-a-licensed-kitchen-remodeling-company-ensures-quality',
    title: 'Avoid Renovation Disasters: A Licensed Kitchen Remodeling Company Ensures Quality',
    date: '2026-08-24',
    author: 'Stephen',
    excerpt:
      'A kitchen remodel touches almost every trade in your house at once. Hiring a licensed company is what keeps a big project from turning into a bigger problem.',
    category: 'Kitchens',
    image: 'hero-kitchen',
    sections: [
      {
        heading: 'Planning and design that fits how you actually live',
        body: "A good designer doesn't just draw a nicer kitchen — they turn your ideas into a layout that works for your space, your budget and your day-to-day life, especially when square footage is tight.",
      },
      {
        heading: "Materials and craftsmanship you can't see from a photo",
        body: "Licensed contractors have supplier relationships that get you durable materials at a fair price, and crews who've done the detail work before, which is where a kitchen remodel is won or lost. Part of the job is helping you balance what you want against what it costs.",
      },
      {
        heading: 'Permits and code, handled',
        body: "Local building codes aren't optional, and neither are permits. A licensed contractor knows what's required, manages the paperwork, and keeps you out of the fines, delays and insurance headaches that come from skipping that step.",
      },
      {
        heading: 'When something unexpected turns up',
        body: "It almost always does — old wiring, water damage behind a wall, a floor that isn't level. Experienced remodelers catch these early and adjust the plan without blowing up your schedule or your budget.",
      },
    ],
    closing:
      "The common thread is simple: licensing and experience aren't paperwork, they're what stands between you and a renovation disaster.",
  },
  {
    slug: 'planning-a-spring-kitchen-start-in-january',
    title: 'Planning a Spring Kitchen Remodel? Start in January',
    date: '2026-01-12',
    author: 'Stephen',
    excerpt:
      'Custom cabinetry alone can take 6-12 weeks before it ever reaches your house. Here is why the best time to start designing a spring kitchen is the dead of winter.',
    category: 'Kitchens',
    image: 'ds-kitchen',
    sections: [
      {
        heading: 'Design and permitting take longer than the build',
        body: 'A full kitchen remodel usually spends more calendar time in design, material selection and permitting than it does in the actual demo-to-finish construction window. By the time crews show up to start demo, most of the schedule has already happened on paper.',
      },
      {
        heading: 'Lead times are the real schedule driver',
        list: [
          'Custom and semi-custom cabinetry is usually the longest lead time in the whole project, often 6-12 weeks depending on the shop, the finish and the time of year.',
          "Countertop fabrication and install typically can't start until cabinets are in, which adds its own few weeks on top.",
          'Specialty or imported tile can be back-ordered with little warning, so a late tile decision is one of the easiest ways to push a start date.',
        ],
      },
      {
        heading: 'Showroom visits take longer than they look',
        body: "Narrowing a full kitchen's finishes — cabinets, counters, tile, hardware, lighting, flooring — rarely happens in one visit. Plan on at least two or three trips to the showroom before everything is locked in.",
      },
      {
        heading: 'Connecticut winters are a good excuse to plan, not a reason to wait',
        body: "Once a design is finalized, permit review and approval adds its own timeline before demo can start, and that clock doesn't start until drawings are ready. Starting the conversation in January, while the weather keeps everyone indoors anyway, gives the whole process room to breathe.",
      },
    ],
    closing:
      'If you want cabinets installed by spring, the finish selections need to be locked in well before then — starting in January is what makes that timeline realistic instead of rushed.',
  },
  {
    slug: 'aging-in-place-7-bathroom-upgrades-that-make-sense',
    title: 'Aging in Place: 7 Bathroom Upgrades That Make Sense',
    date: '2026-06-05',
    author: 'Stephen',
    excerpt:
      'Curbless showers, grab-bar blocking and a few other changes that let you stay in your Connecticut home longer, without a bathroom that looks like a hospital.',
    category: 'Bathrooms',
    image: 'proj-shower-windsor',
    sections: [
      {
        heading: 'Seven upgrades worth planning for',
        list: [
          'A curbless, zero-threshold shower entry — no step to catch a foot or a wheel.',
          "Grab-bar blocking inside the walls, even if you don't need bars today. Adding solid blocking during a remodel costs very little; retrofitting it into a finished wall later means re-opening tile.",
          'A comfort-height toilet, a couple of inches taller than standard, easier on the knees for everyone.',
          'Slip-resistant flooring, especially inside and just outside the shower.',
          'A doorway with at least 32 inches of clear width, enough for a walker or wheelchair to pass through comfortably.',
          'Lever-style door and faucet handles instead of round knobs — easier to operate with limited grip strength.',
          'A built-in or fold-down bench seat inside the shower.',
        ],
      },
      {
        heading: 'None of this has to look clinical',
        body: 'Every one of these changes blends into a normal, modern bathroom design — a curbless shower with handsome tile looks like a design choice, not a medical fixture, and grab bars now come in finishes that match the rest of your hardware.',
      },
      {
        heading: 'Plan for it during the remodel you were already doing',
        body: 'The cheapest time to add any of this is while the walls are already open for a bathroom remodel. Retrofitting these same features into a finished room later almost always costs more and takes longer.',
      },
    ],
    closing:
      "Whether you're planning for yourself, a parent, or just want a bathroom that works for every stage of life, these upgrades are worth bringing up before your remodel's design is finalized, not after.",
  },
  {
    slug: 'quartz-vs-granite-which-countertop-is-right-for-you',
    title: 'Quartz vs. Granite Countertops: Which Is Right for You?',
    date: '2026-07-10',
    author: 'Stephen',
    excerpt:
      "Both hold up for decades. The real differences are maintenance, look and how each one handles heat — here's how to choose between them.",
    category: 'Showroom',
    image: 'cat-countertops',
    sections: [
      {
        heading: 'Durability and maintenance',
        body: 'Quartz is engineered from crushed stone and resin, which makes it non-porous — it never needs sealing. Granite is a natural stone and is porous, so it needs periodic sealing, typically around once a year, to stay stain-resistant.',
      },
      {
        heading: 'Look and feel',
        body: "Granite is cut from natural slabs, so no two pieces are identical — if a one-of-a-kind natural pattern matters to you, that's granite's biggest advantage. Quartz is manufactured, so its pattern repeats consistently across a kitchen and comes in a much wider range of colors, including looks that mimic marble.",
      },
      {
        heading: 'Heat and scratch resistance',
        body: 'Granite handles direct heat from a hot pan better than quartz, whose resin content can discolor or scorch under sustained heat. Both resist scratching well under normal use, but neither is scratch-proof, and a cutting board is cheap insurance either way.',
      },
      {
        heading: 'Price',
        list: [
          'Pricing for both varies widely by slab, color, fabrication and edge profile — comparing the two in the abstract is less useful than comparing the actual slabs you like side by side.',
          'Exotic or rare granite slabs can run well above typical quartz pricing, while popular quartz colors can run above entry-level granite — it depends more on the specific slab than the material itself.',
        ],
      },
    ],
    closing:
      "If low maintenance and color consistency matter most, lean quartz. If a unique, all-natural look matters more than a yearly sealing chore, lean granite. Bring your cabinet and flooring samples into our Bloomfield showroom and we'll show you both side by side under your own finishes.",
  },
  {
    slug: 'water-damage-what-to-do-in-the-first-hour',
    title: 'Water Damage: What to Do in the First Hour',
    date: '2026-09-15',
    author: 'Stephen',
    excerpt:
      'Five steps that limit the damage and protect your insurance claim, before a restoration crew ever arrives.',
    category: 'Restoration',
    image: 'restoration',
    sections: [
      {
        heading: 'Stop the water, then think about the rest',
        list: [
          'Shut off the water at the fixture or the main if you can locate it safely.',
          'If standing water is anywhere near outlets, switches or appliances, shut off power to that area at the breaker before you do anything else.',
          'Move furniture, rugs and anything irreplaceable out of standing water.',
        ],
      },
      {
        heading: 'Document before you start cleaning up',
        body: 'Take photos and video of the standing water, the affected rooms and any damaged belongings before you move or discard anything. Most Connecticut homeowners insurers want this documentation, and it is much easier to gather in the first hour than after cleanup has already started.',
      },
      {
        heading: 'Start drying immediately — do not wait for the adjuster',
        body: 'Mold can begin developing in wet materials within 24-48 hours, so the clock matters. Most policies actually require you to take reasonable steps to prevent further damage, not wait for an adjuster to show up before you start mitigating.',
        list: [
          'Get wet furniture and rugs up off wet flooring.',
          'Open windows if the weather allows, or run air conditioning and a dehumidifier to start pulling moisture out of the air.',
          "Don't use a household vacuum on standing water — it isn't built for it and can be a shock hazard.",
        ],
      },
      {
        heading: 'Call your insurer, then call a restoration crew',
        body: 'Report the loss early. Most policies require prompt notice, and a restoration company can document the damage in a way that supports your claim rather than complicates it.',
      },
    ],
    closing:
      'A small, visible spill you can handle yourself. Standing water that has been sitting for any length of time, or that reached flooring and walls, usually means hidden moisture behind the surfaces you can see — worth a professional moisture check even if everything looks dry on top.',
  },
  {
    slug: 'does-homeowners-insurance-cover-mold',
    title: 'Does Homeowners Insurance Cover Mold Damage?',
    date: '2026-09-29',
    author: 'Stephen',
    excerpt:
      "When it usually is covered, when it usually isn't, and how to check your own policy before you assume either way.",
    category: 'Restoration',
    image: 'res-mold',
    sections: [
      {
        heading: 'It depends on what caused it',
        body: 'Most standard homeowners policies cover mold only when it results from a sudden, accidental "covered peril" — a pipe that burst overnight, for example — not from an ongoing leak, humidity, or a problem that was left unaddressed for a while.',
      },
      {
        heading: 'What tends to be covered',
        list: [
          'Mold that develops after a sudden, accidental water event, like a burst pipe or an overflowing appliance.',
          'Cleanup costs tied to that same covered claim — though usually capped by a mold-specific sublimit buried in the policy, often well below your overall dwelling coverage.',
        ],
      },
      {
        heading: 'What tends NOT to be covered',
        list: [
          "Mold from a slow leak you didn't catch or fix in time.",
          'Flood-related mold — flood damage needs a separate flood policy, which standard homeowners insurance does not include.',
          'Mold from ongoing humidity or condensation issues.',
          'Anything an insurer can attribute to deferred maintenance.',
        ],
      },
      {
        heading: 'If you find mold',
        list: [
          "Don't ignore a small spot — it rarely stays small, especially in a humid Connecticut summer.",
          'Photograph it before you touch or clean anything.',
          "Call your insurer and ask specifically about your policy's mold sublimit and covered-peril language — don't assume from a general summary.",
          'Get a written assessment from a restoration professional if your claim is disputed.',
        ],
      },
    ],
    closing:
      "Mold coverage is one of the most misunderstood parts of a standard policy, and the sublimit catches people off guard more than the covered-or-not question does. Read your policy's actual mold clause, or call your agent, before you assume either way.",
  },
];

// A real, computed reading time (~200 wpm) rather than the design
// handoff's own invented-looking "6 min read" style figures.
export function readTime(post: BlogPost): string {
  const words = post.sections
    .flatMap((s) => [s.heading, s.body, ...(s.list ?? [])])
    .concat([post.excerpt, post.closing])
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
