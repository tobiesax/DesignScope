// Reads the three Keystatic-managed collections (keystatic.config.ts) —
// projects (case studies), blog posts and reviews — so the owner can add or
// edit any of them from the /keystatic admin UI without a code change
// (BUILD_PLAN.md Week 3). Pages that used to import the static arrays in
// src/data/case-studies.ts, blog-posts.ts and reviews.ts now call these
// instead; CONTENT_GAPS.md's honesty rule (no broken/placeholder entries)
// is enforced here by dropping any entry whose required image is missing.
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { resolveProjectImage, resolveBlogImage } from './content-images';

const reader = createReader(process.cwd(), keystaticConfig);

export const categoryAccent: Record<ProjectCategory, 'brand' | 'dark' | 'urgent'> = {
  Kitchens: 'brand',
  Bathrooms: 'brand',
  'Whole home': 'dark',
  Restoration: 'urgent',
  Commercial: 'dark',
};

export type ProjectCategory = 'Kitchens' | 'Bathrooms' | 'Whole home' | 'Restoration' | 'Commercial';

export interface Project {
  id: string;
  title: string;
  town: string;
  cat: ProjectCategory;
  img: ImageMetadata;
  before?: ImageMetadata;
  scope: string;
  time: string;
  budget: string;
  brief: string;
  did: string;
  result: string;
  products: string[];
  quote: string;
  who: string;
}

export async function getAllProjects(): Promise<Project[]> {
  const entries = await reader.collections.projects.all();
  const projects: Project[] = [];
  for (const { slug, entry } of entries) {
    const img = resolveProjectImage(entry.image);
    if (!img) continue; // no placeholder images shipped — CLAUDE.md rule 1
    projects.push({
      id: slug,
      title: entry.title,
      town: entry.town,
      cat: entry.category as ProjectCategory,
      img,
      before: resolveProjectImage(entry.beforeImage),
      scope: entry.scope,
      time: entry.time,
      budget: entry.budget,
      brief: entry.brief,
      did: entry.did,
      result: entry.result,
      products: [...entry.products],
      quote: entry.quote,
      who: entry.who,
    });
  }
  return projects;
}

export interface BlogSection {
  heading?: string;
  body?: string;
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  category: 'Kitchens' | 'Bathrooms' | 'Restoration' | 'Showroom';
  image: ImageMetadata;
  sections: BlogSection[];
  closing: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const entries = await reader.collections.blogPosts.all();
  const posts: BlogPost[] = [];
  for (const { slug, entry } of entries) {
    const image = resolveBlogImage(entry.image);
    if (!image) continue; // no placeholder images shipped — CLAUDE.md rule 1
    posts.push({
      slug,
      title: entry.title,
      date: entry.date ?? '',
      author: entry.author,
      excerpt: entry.excerpt,
      category: entry.category as BlogPost['category'],
      image,
      sections: entry.sections.map((s) => ({
        heading: s.heading || undefined,
        body: s.body || undefined,
        list: s.list.length ? [...s.list] : undefined,
      })),
      closing: entry.closing,
    });
  }
  return posts;
}

// A real, computed reading time (~200 wpm) rather than an invented figure.
export function readTime(post: Pick<BlogPost, 'sections' | 'excerpt' | 'closing'>): string {
  const words = post.sections
    .flatMap((s) => [s.heading, s.body, ...(s.list ?? [])])
    .concat([post.excerpt, post.closing])
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export interface Review {
  who: string;
  job: string;
  quote: string;
}

export async function getAllReviews(): Promise<Review[]> {
  const entries = await reader.collections.reviews.all();
  return entries.map(({ entry }) => ({ who: entry.who, job: entry.job, quote: entry.quote }));
}

export async function getReviewsSettings(): Promise<{ value: string; count: number }> {
  const settings = await reader.singletons.reviewsSettings.read();
  return { value: settings?.ratingValue ?? '—', count: settings?.ratingCount ?? 0 };
}
