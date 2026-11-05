import type { APIRoute } from 'astro';
import { towns } from '../data/areas';
import { blogPosts } from '../data/blog-posts';
import { caseStudies } from '../data/case-studies';

// Hand-written rather than @astrojs/sitemap (CLAUDE.md: ask before adding a
// dependency) — the page list is small and known, so a static route is
// simpler than pulling in the integration.
const staticPaths = [
  '/',
  '/remodeling/',
  '/remodeling/kitchens/',
  '/remodeling/bathrooms/',
  '/remodeling/home-renovations/',
  '/restoration/',
  '/restoration/fire-and-smoke-damage/',
  '/restoration/water-damage/',
  '/commercial/',
  '/showroom/',
  '/projects/',
  '/reviews/',
  '/about/',
  '/areas/',
  '/blog/',
  '/faqs/',
  '/book/',
  '/contact/',
  '/offers/',
  '/privacy/',
];

const dynamicPaths = [
  ...towns.map((t) => `/areas/${t.slug}/`),
  ...blogPosts.map((p) => `/blog/${p.slug}/`),
  ...caseStudies.map((p) => `/projects/${p.id}/`),
];

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://designscopellc.com';
  const urls = [...staticPaths, ...dynamicPaths]
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
