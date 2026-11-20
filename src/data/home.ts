// Home page copy, sourced verbatim from the approved GrowthOS proposal's hi-fi
// mockup (not invented). Images are handled separately — see
// src/assets/mockup-temp/ and CONTENT_GAPS.md.

import {
  kitchenProjects,
  bathroomProjects,
  commercialProjects,
  homeRenovationProjects,
  projectImages,
} from './project-images';

export const paths = [
  {
    title: 'Remodeling',
    sub: 'Kitchens, bathrooms and home renovations',
    cta: 'Plan my project',
    href: '/remodeling/',
    bar: 'brand' as const,
  },
  {
    title: 'Restoration',
    sub: 'Fire, smoke and water damage, day or night',
    cta: 'Call now, 24/7',
    href: '/restoration/',
    bar: 'urgent' as const,
  },
  {
    title: 'Commercial',
    sub: 'Offices, retail and multi-unit work',
    cta: 'Request a walkthrough',
    href: '/commercial/',
    bar: 'brand' as const,
  },
  {
    title: 'Showroom & Products',
    sub: 'TOTO, Hansgrohe, Wellborn and more',
    cta: 'Book a showroom visit',
    href: '/showroom/',
    bar: 'brand' as const,
  },
];

// Matches the live site's own "Why Choose Us" six items exactly (home,
// residential-services, commercial-services and construction-and-building-
// products pages all use this same six-item set).
export const whyUs = [
  { t: 'Walk-ins welcome', b: 'Same-day appointments when available' },
  { t: 'Free design consultations', b: 'At the showroom or in your home' },
  { t: 'Locally & family owned', b: 'Serving Hartford County since 2016' },
  { t: 'Licensed & insured', b: 'CT HIC registered, permits handled' },
  { t: 'Free, no obligation quotes', b: 'Written quote within 24 hours' },
  { t: 'Showroom available', b: 'Visit us at 480 Cottage Grove Road, Bloomfield' },
];

export const process = [
  { t: 'Free consultation', b: 'Visit the showroom or we come to you to talk ideas and budget.' },
  { t: 'Design & quote', b: '3D design options and a written quote within 24 hours.' },
  { t: 'Build', b: 'One team manages permits, insurance paperwork and the work itself.' },
  { t: 'Walkthrough', b: 'Final walkthrough together, backed by a 6-month warranty.' },
];

// Lifted verbatim from the live site's own /faqs page (scraped 2026-11-13) —
// its full six-question set, not a paraphrase.
export const faqs = [
  {
    q: 'What kind of products will you use for my projects?',
    a: 'Although individual project requirements differ, we strive to use local resources as much as possible for all of our work. Over our years of experience in the bathroom and kitchen remodeling industry, we have built solid relationships with many top-notch manufacturers and businesses, which also allows us to save you money on products.',
  },
  {
    q: 'What kind of crew do you utilize?',
    a: 'Unlike some kitchen and bathroom remodeling companies, we use only the most qualified, skilled workers, all of whom are fully bonded and insured. In addition, they all meet licensing requirements.',
  },
  {
    q: 'How does payment work?',
    a: "Whether you're looking for commercial restorations, construction and building products, or bathroom and kitchen remodeling, we will create a project plan during our first meeting that details the costs of every aspect of the project. Payment will be expected at various intervals during the project, as clearly spelled out in the contract to avoid any surprises. Our financial specialists can help advise you on applying for home equity lines of credit if necessary.",
  },
  {
    q: 'Why should I choose your company?',
    a: 'We are a full-service general contracting provider that prides itself on delivering the best quality workmanship, guaranteed services, and impeccable customer service. Our team comprises only the most skilled, efficient, and diligent professionals who are friendly and knowledgeable in all matters of general contracting. We have worked extremely hard to earn our reputation and have successfully become a leading provider within our industry. One thing that allows us to stand apart from other kitchen and bathroom remodeling companies is that we have never forgotten our humble roots, and our goals have always stayed the same at Design Scope, LLC.',
  },
  {
    q: 'What should I expect during the project?',
    a: 'We will work together to create a detailed contract and production schedule for your bathroom or kitchen remodeling project. Once our crew begins working on the project, we will keep you updated every step of the way.',
  },
  {
    q: 'How soon can you begin working on my project?',
    a: "Our crew is prepared to begin working on your project as soon as we both agree on the project details and sign a contract. If you're comparing kitchen and bathroom remodeling companies, contact us today to begin your project as quickly as possible.",
  },
];

// Kitchens, Bathrooms, Commercial and (as of 2026-11-17) Home renovations
// are real photos scraped from the live site (src/data/project-images.ts) —
// no town is known per photo, so `town` is omitted rather than invented
// (the mockup's "Hartford"/"Simsbury" for the old Commercial/Home
// renovations placeholders were invented too; dropped along with those
// photos). Home renovations' real photos are moderate- rather than
// full-confidence (see project-images.ts) — the live site's own
// `/gallery` "residential-services-gallery" set is a different, separate
// image set that remains rejected as generic stock.
export const mockProjects: {
  id: string;
  title: string;
  town?: string;
  cat: string;
  img: string | ImageMetadata;
}[] = [
  ...kitchenProjects.map((p) => ({ ...p, cat: 'Kitchens', img: projectImages[p.img] })),
  ...bathroomProjects.map((p) => ({ ...p, cat: 'Bathrooms', img: projectImages[p.img] })),
  ...commercialProjects.map((p) => ({ ...p, cat: 'Commercial', img: projectImages[p.img] })),
  ...homeRenovationProjects.map((p) => ({ ...p, cat: 'Home renovations', img: projectImages[p.img] })),
];

export const projectFilters = ['All', 'Kitchens', 'Bathrooms', 'Home renovations', 'Commercial'];

export const categoryHref: Record<string, string> = {
  Kitchens: '/remodeling/kitchens/',
  Bathrooms: '/remodeling/bathrooms/',
  'Home renovations': '/remodeling/home-renovations/',
  Commercial: '/commercial/',
};
