// The first two posts are migrated from the live site with the same title,
// slug, date, author and body text (HANDOFF.md section 5) — lifted
// verbatim from the live pages (scraped directly via curl + a local text
// extractor on 2026-11-13), per the client's copywriting-migration request.
// An earlier pass had rewritten these in our own words instead, over a
// copyright caution that doesn't apply: it's the client's own copy, for
// their own site.
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
    // Migrated with the same title, slug, date and author as the live
    // site. Body text is the real original article, lifted verbatim from
    // the live page (scraped 2026-11-13, URL not in the current sitemap
    // but still live) — see the note on the kitchen-remodeling post above.
    slug: 'how-to-plan-and-budget-for-professional-bathroom-remodeling-services',
    title: 'How to Plan and Budget for Professional Bathroom Remodeling Services',
    date: '2026-10-22',
    author: 'Stephen',
    excerpt:
      'Planning and budgeting for bathroom remodeling services is important to keep your resources well-maintained. Here are some ways to plan!',
    category: 'Bathrooms',
    image: 'proj-bath-avon',
    sections: [
      {
        body: "In this article, we explore the essential steps to plan and budget effectively for professional bathroom remodeling services. Whether you're looking for a simple upgrade or a complete renovation, having a well-defined plan and budget can ensure a successful outcome. With the growing popularity of home renovation projects, it's crucial to navigate the process strategically, making informed choices to optimize both time and resources.",
      },
      {
        body: 'Bathroom remodeling services not only offer an opportunity to improve the aesthetics of the space but also to enhance functionality and increase home value. As exciting as the transformation might be, it requires careful planning and budgeting. A systematic approach allows you to achieve your dream bathroom while avoiding common pitfalls associated with renovation projects.',
      },
      {
        heading: 'Assessing Your Needs and Objectives',
        body: "Start with assessing your current bathroom's layout, functionality, and overall appeal. Determine what specific elements you wish to change. Is it the outdated tiles or the inefficient shower system? Clearly identifying your needs and objectives sets a solid foundation for the project. It will also help you communicate effectively with your hired professionals, ensuring they understand your vision. Additionally, consider your long-term goals for the space — are you planning to accommodate growing family needs, or are you enhancing the appeal for a future sale? Understanding your objectives will guide your decisions throughout the remodeling process.",
      },
      {
        heading: 'Setting a Realistic Budget',
        body: "One of the most critical aspects of bathroom remodeling services is setting a realistic budget. Start by researching average costs for the type of remodel you are considering, and balance your desired upgrades with what you are willing to spend. According to RubyHome, 91% of homeowners hire professionals for their remodeling projects, which highlights the importance of factoring professional fees into your budget. Alongside material and labor costs, unforeseen expenses can arise during the project — it's prudent to include a contingency fund, typically 10-15% of your budget, to manage unexpected costs efficiently.",
      },
      {
        heading: 'Exploring Design Options',
        body: "Once you have a clear understanding of your needs and budget, it's time to dive into design options. From sleek modern designs to classic styles, the possibilities are endless. Consider gathering inspiration from design magazines, online platforms, and home improvement shows, and take note of the materials, color palettes, and fixtures you might want to incorporate. Engage with experts or use design software to visualize potential layouts and lighting scenarios.",
      },
      {
        heading: 'Researching Qualified Professionals',
        body: 'Deciding to hire qualified professionals is a significant step in ensuring a successful bathroom remodel. Start by seeking recommendations from friends, family, or online review platforms, and look for contractors with a proven track record, relevant licensing, and certifications. An experienced contractor will offer insights, practical solutions, and guidance throughout the process — managing timelines, coordinating tradespeople, and ensuring compliance with building codes.',
      },
      {
        heading: 'Materials and Supplies',
        body: "Materials and supplies form a substantial part of the remodeling budget. High-quality materials provide longevity and aesthetic appeal, but they come with a higher price tag, so it's essential to shop around and opt for materials within your budget that still meet your quality standards. Opt for energy-efficient fixtures when feasible; they might have a higher upfront cost but yield savings in utility bills over time.",
      },
      {
        heading: 'Labor Costs and Professional Fees',
        body: 'Engaging professionals for bathroom remodeling services involves accounting for labor costs and professional fees. Generally, labor eats up around 20-40% of the total remodeling budget, and costs vary based on the complexity of the project and the region where you reside. When hiring professionals, ensure you understand their pricing structure — whether a flat fee, hourly rate, or percentage of the project cost — to avoid misunderstandings as the project progresses.',
      },
      {
        heading: 'Permits and Inspection Fees',
        body: 'Depending on the scope of the remodel, you might need permits from your local municipality — structural changes, plumbing modifications, or electrical upgrades often require official documentation. Permit costs vary by location, but failing to secure necessary permits can lead to legal complications and fines. Working with licensed professionals can simplify this aspect, as they are familiar with the necessary permits and processes.',
      },
      {
        heading: 'Unexpected Costs and Contingency',
        body: 'Regardless of how well you plan, unexpected issues can arise during remodeling, impacting your budget. Hidden water damage, outdated wiring, or subpar prior renovations are commonly encountered problems. These unforeseen circumstances necessitate a flexible budget with a contingency fund to cover the additional expenses, along with open communication with your contractor to swiftly address any surprises.',
      },
      {
        heading: 'Scope of Work and Project Timeline',
        body: 'The scope of work is a crucial component of your contract. It outlines every aspect of the project, ensuring both parties agree on the work to be completed, which prevents ambiguity and minimizes potential disputes. A realistic project timeline should also be established, accounting for all phases from demolition to final inspections, with timely updates from your contractor to keep the project on track.',
      },
      {
        heading: 'Payment Schedule and Budget Details',
        body: "A transparent payment schedule in the remodeling contract is key to managing finances effectively. Agreeing on installments tied to project milestones safeguards both your and the contractor's interests and incentivizes timely completion of phases. Comprehensive budget details within the contract — an itemized breakdown of material costs, labor fees, and other expenses — help monitor expenditures against original estimates and allow adjustments to remain within financial limits.",
      },
      {
        heading: 'Warranty and Guarantees',
        body: "Including warranties and guarantees in your remodeling contract offers peace of mind. They safeguard against defects in materials and workmanship after project completion, so clarify the duration and scope of warranties covering fixtures, installations, and the contractor's workmanship. Guarantees demonstrate the contractor's confidence in their work quality, further establishing trust in the working relationship.",
      },
    ],
    closing:
      'A well-planned bathroom remodel comes down to the same fundamentals every time: a clear budget with a contingency built in, qualified professionals you have vetted, and a contract that spells out the scope, payment schedule and warranty in writing.',
  },
  {
    // Migrated with the same title, slug, date and author as the live site.
    // Body text is now the real original article, lifted verbatim from the
    // live page (scraped 2026-11-13) — an earlier pass had rewritten this
    // in our own words over a copyright caution that doesn't apply here,
    // since it's the client's own copy for their own site. The live
    // page's H2/H3 structure is flattened to one section per H3 (the
    // BlogSection template only supports one heading level).
    slug: 'avoid-renovation-disasters-a-licensed-kitchen-remodeling-company-ensures-quality',
    title: 'Avoid Renovation Disasters: A Licensed Kitchen Remodeling Company Ensures Quality',
    date: '2026-08-24',
    author: 'Stephen',
    excerpt:
      'Transform your home with a licensed kitchen remodeling company, offering expert layout design, high-quality materials, and full permit compliance.',
    category: 'Kitchens',
    image: 'hero-kitchen',
    sections: [
      {
        body: 'The kitchen is often considered the heart of the home, and a kitchen renovation is a significant undertaking that requires careful planning and execution. Working with a licensed kitchen remodeling company can help ensure that the project is completed to the highest standards of quality and safety. In this article, we will explore how choosing the right professionals can prevent renovation disasters and provide peace of mind. Through detailed planning, access to quality resources, and professional execution, licensed contractors offer undeniable advantages. The goal is not just a new kitchen, but a transformation that enhances both functionality and aesthetic appeal.',
      },
      {
        heading: 'Employing Professional Designers',
        body: 'A licensed kitchen remodeling company typically has access to skilled designers who play a crucial role in the success of a renovation. These professionals can transform homeowner ideas into functional designs that maximize space and efficiency. By considering technical aspects such as workflow, lighting, and ergonomics, designers ensure a kitchen not only looks good but functions optimally. Their expertise allows for creative solutions that address unique challenges or requirements in the space. As a result, homeowners are provided a kitchen that combines practicality and aesthetic appeal.',
      },
      {
        heading: 'Tailoring Designs to Client Needs',
        body: "Each homeowner has a unique vision for their space, and professional remodelers are adept at tailoring designs to meet these specific needs. They take the time to understand a client's lifestyle, cooking habits, and personal preferences, ensuring the remodel aligns with the homeowner's goals. From layout adjustments for improved accessibility to personal touches that reflect individual taste, customization is key. Financial considerations are also prioritized, with designers working within budgetary constraints to maximize value. Notably, according to a 2026 Statista survey, approximately 41% of respondents remodeled their kitchen because they were no longer satisfied with its appearance – showcasing the importance of design satisfaction.",
      },
      {
        heading: 'Maximizing Space Utilization',
        body: "In many homes, the kitchen may not have an abundance of space, making efficient design crucial. Partnering with a professional kitchen remodeling company ensures you maximize every inch through intelligent planning and innovative solutions. Whether it's through clever cabinetry, multi-functional furniture, or smart appliance placement, experts ensure every element serves a purpose. Proper space utilization enhances the kitchen's functionality, making it easier and more enjoyable to use. Such design foresight is vital for maintaining a spacious feel in smaller kitchens and ensuring the room supports the homeowner's daily needs.",
      },
      {
        heading: 'Sourcing High-Quality Materials',
        body: "Licensed contractors have established relationships with suppliers, allowing them access to high-quality materials at competitive prices. These connections ensure that they can source durable products that will withstand the test of time in the kitchen environment. Using superior materials doesn't just enhance the kitchen's appearance – it also improves functionality and longevity. Homeowners can trust that a full-service kitchen remodeling company will make selections that contribute to a robust and reliable space. The emphasis on quality materials reflects a commitment to value, ultimately saving homeowners money in future repairs or replacements.",
      },
      {
        heading: 'Delivering Detailed Craftsmanship',
        body: "An outstanding kitchen remodel doesn't just come from quality materials; it requires skilled craftsmanship. Licensed remodelers employ experienced workers who pay meticulous attention to detail, ensuring every component of the kitchen meets high standards. This craftsmanship is evident in precision installations, seamless finishes, and the thoughtful integration of design elements. The focus on detail is what differentiates a top-tier kitchen remodeling company from an amateur job. Homeowners can expect results that not only meet but exceed their expectations, creating a space that truly impresses.",
      },
      {
        heading: 'Balancing Cost and Quality',
        body: "Budget considerations are always significant in any renovation project. Licensed contractors are experts in balancing cost with quality, offering solutions that meet financial limits without compromising on standards. They guide homeowners in making cost-effective choices, such as selecting durable yet affordable materials or prioritizing renovations that offer the best return on investment. This balance ensures a high-quality kitchen remodel that aligns with the homeowner's financial abilities. Professionals understand that a successful remodel is as much about managing resources as it is about delivering excellent results.",
      },
      {
        heading: 'Understanding Local Building Codes',
        body: 'Adherence to local building codes is a legal and safety necessity in any kitchen renovation. Hiring a reputable kitchen remodeling company guarantees compliance throughout the project, as these professionals are well-versed in local requirements. This knowledge protects homeowners from legal issues and potential fines that can arise from non-compliance. Contractors consistently apply up-to-date code requirements to enhance safety, structural integrity, and overall project quality. Understanding and following building codes is an essential factor in executing a seamless kitchen renovation.',
      },
      {
        heading: 'Streamlining the Permit Process',
        body: 'The permit application process can be a complex and time-consuming endeavor, one that licensed contractors handle adeptly. They manage these administrative challenges efficiently, minimizing delays and red tape. This proactive approach ensures the project moves forward smoothly and aligns with all legal specifications. Their expertise often results in faster approval times and a more streamlined renovation timeline. By entrusting permit management to professionals, homeowners avoid the stress and obstacles typically involved in this process.',
      },
      {
        heading: 'Mitigating Non-Compliance Risks',
        body: "Non-compliance with building codes and regulations can lead to significant risks, including legal penalties, project delays, and additional costs. A licensed contractor's adherence to these standards mitigates such risks, providing homeowners with peace of mind. Failure to comply can also impact the insurance coverage, potentially leaving homeowners exposed to liability. In the worst scenarios, structural or design flaws resulting from non-compliance can jeopardize safety. Thus, hiring professionals who prioritize compliance is crucial for safeguarding the project's success.",
      },
      {
        heading: 'Identifying Potential Problems Early',
        body: 'Experienced remodelers have a keen eye for spotting potential issues before they escalate into major problems. By identifying these early, they can incorporate contingencies into their planning, thus reducing surprises. This foresight is a result of extensive experience and technical knowledge, skills that prevent costly mistakes. Early problem identification allows contractors to address concerns proactively, ensuring that the project remains on track. Managing these aspects correctly enhances project efficiency and defends against unwelcome surprises.',
      },
      {
        heading: 'Applying Agile Problem-Solving',
        body: 'No renovation project is without its challenges, but a seasoned kitchen remodeling company is adept at navigating these bumps in the road. They employ agile problem-solving techniques that adapt to the evolving circumstances of a project. Through innovative thinking and resourcefulness, they resolve issues while minimizing disruptions. This adaptability is supported by their comprehensive industry experience and practical knowledge. As a result, even substantial hurdles in a remodel are addressed promptly and effectively, maintaining momentum towards project completion.',
      },
      {
        heading: 'Minimizing Delays and Overruns',
        body: "Ensuring a project stays on schedule and within budget is a primary goal for licensed remodelers. They use strategic planning and resource management to prevent delays and manage costs. From timely material sourcing to efficient labor allocation, professionals control elements that could result in overruns. This meticulous attention to budget and timeline protects homeowners from unexpected expenses. A competent contractor's ability to foresee potential delays and address them proactively is paramount in delivering a successful project.",
      },
    ],
    closing:
      "Kitchen remodeling can be a daunting task, but enlisting the help of a licensed kitchen remodeling company can significantly mitigate risks and ensure a successful transformation. These professionals offer expertise, access to quality materials, and regulated processes, which are crucial in avoiding renovation disasters. By prioritizing skilled labor and thorough planning, homeowners can rest assured that their kitchen remodel will not only enhance their home's value but also provide a functional, beautiful space for years to come. Cooking and gathering can return to being joyful experiences in a kitchen that reflects the homeowner's unique style and needs. The peace of mind offered by a smooth remodeling process is invaluable, confirming the benefits of hiring licensed professionals for such significant undertakings.",
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
