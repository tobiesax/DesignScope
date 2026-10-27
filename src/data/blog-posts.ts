// Migrated from the live site with the same title, slug, date and author
// (HANDOFF.md section 5), but the body text is rewritten in our own words
// rather than copied — the extraction tool declined to reproduce the live
// pages verbatim (copyright), so this covers the same structure and facts
// instead of inventing new ones.
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
];
