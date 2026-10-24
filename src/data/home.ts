// Home page copy, sourced verbatim from the approved GrowthOS proposal's hi-fi
// mockup (not invented). Images are handled separately — see
// src/assets/mockup-temp/ and CONTENT_GAPS.md.

import { kitchenProjects, bathroomProjects, projectImages } from './project-images';

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

export const whyUs = [
  { t: 'Walk-ins welcome', b: 'Same-day appointments when available' },
  { t: 'Free design consultations', b: 'At the showroom or in your home' },
  { t: '24-hour quotes', b: 'Honest pricing, no hidden fees' },
  { t: 'Licensed & insured', b: 'CT HIC registered, permits handled' },
  { t: 'Locally & family owned', b: 'Serving Hartford County since 2016' },
  { t: '6-month warranty', b: 'Every job backed by our workmanship guarantee' },
];

export const process = [
  { t: 'Free consultation', b: 'Visit the showroom or we come to you to talk ideas and budget.' },
  { t: 'Design & quote', b: '3D design options and a written quote within 24 hours.' },
  { t: 'Build', b: 'One team manages permits, insurance paperwork and the work itself.' },
  { t: 'Walkthrough', b: 'Final walkthrough together, backed by a 6-month warranty.' },
];

export const faqs = [
  {
    q: 'Is the design consultation really free?',
    a: 'Yes. Come to the showroom or we visit your home, with no obligation.',
  },
  {
    q: 'How fast will I get a quote?',
    a: 'Within 24 hours of your consultation, with clear pricing and no hidden fees.',
  },
  {
    q: 'Do you help with insurance claims?',
    a: 'Yes. For fire, smoke and water damage we work with your insurer and handle the paperwork.',
  },
  {
    q: 'Do you handle permits?',
    a: 'Yes, we pull and manage all required permits for your project.',
  },
  {
    q: 'Do you price match?',
    a: 'We honor price matching on like products with a comparable written estimate.',
  },
];

// Kitchens and Bathrooms are real photos scraped from the live site
// (src/data/project-images.ts) — no town is known per photo, so `town` is
// omitted rather than invented. Home renovations and Commercial are still
// temporary mockup photos (CONTENT_GAPS.md) pending real ones; the Simsbury
// project is recategorised from the mockup's "Restoration" to "Home
// renovations" — a whole-home renovation isn't fire/water damage work, and
// no real restoration project photos exist to populate that filter.
export const mockProjects: {
  id: string;
  title: string;
  town?: string;
  cat: string;
  img: string | ImageMetadata;
}[] = [
  ...kitchenProjects.map((p) => ({ ...p, cat: 'Kitchens', img: projectImages[p.img] })),
  ...bathroomProjects.map((p) => ({ ...p, cat: 'Bathrooms', img: projectImages[p.img] })),
  {
    id: 'proj-3',
    title: 'Whole-home renovation',
    town: 'Simsbury',
    cat: 'Home renovations',
    img: 'proj-renovation-simsbury',
  },
  {
    id: 'proj-4',
    title: 'Office fit-out',
    town: 'Hartford',
    cat: 'Commercial',
    img: 'proj-office-hartford',
  },
];

export const projectFilters = ['All', 'Kitchens', 'Bathrooms', 'Home renovations', 'Commercial'];

// Only categories with a built page get a link — Home renovations and
// Commercial don't have one yet (BUILD_PLAN.md Week 3), so a project card or
// footer link in those categories stays plain text rather than 404ing.
export const categoryHref: Record<string, string> = {
  Kitchens: '/remodeling/kitchens/',
  Bathrooms: '/remodeling/bathrooms/',
};
