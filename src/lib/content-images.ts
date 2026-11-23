// Keystatic's image fields (keystatic.config.ts) store just the bare
// filename relative to each field's `directory`. Astro's <Image> needs an
// ImageMetadata object to keep its optimization/AVIF-WebP pipeline, so
// these globs map that stored filename back to the real asset module —
// same effect as mockup-images.ts's named imports, but for CMS-managed
// content instead of hand-wired keys.
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/content/projects/*',
  { eager: true },
);
const blogImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/content/blog/*',
  { eager: true },
);

function resolve(
  glob: Record<string, { default: ImageMetadata }>,
  dir: string,
  file: string | null | undefined,
): ImageMetadata | undefined {
  if (!file) return undefined;
  return glob[`/src/assets/content/${dir}/${file}`]?.default;
}

export const resolveProjectImage = (file: string | null | undefined) =>
  resolve(projectImages, 'projects', file);

export const resolveBlogImage = (file: string | null | undefined) =>
  resolve(blogImages, 'blog', file);
