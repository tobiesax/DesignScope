import { collection, config, fields, singleton } from '@keystatic/core';

// Collections (projects, blog posts, reviews) — BUILD_PLAN.md Week 3's "the
// owner can add a project from his phone" promise. None of these use a
// fields.document() body: every field here maps 1:1 onto the existing
// render templates (src/pages/projects/[id].astro, src/pages/blog/[slug].astro,
// ReviewCarousel.astro), so entries store as plain YAML data files (no
// markdoc authoring risk) and the admin UI still reads as a friendly,
// repeatable form — see src/lib/content-images.ts for how stored image
// filenames are resolved back to optimized astro:assets images.
//
// Local storage in dev (no auth needed); GitHub mode once deployed, so the
// owner can edit content from the Keystatic admin UI with their GitHub
// login. GitHub mode in production needs KEYSTATIC_GITHUB_CLIENT_ID/SECRET
// + KEYSTATIC_SECRET set in Vercel — see CONTENT_GAPS.md.
export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' }
    : { kind: 'github', repo: 'tobiesax/DesignScope' },

  collections: {
    projects: collection({
      label: 'Projects (case studies)',
      path: 'src/content/projects/*/',
      slugField: 'title',
      format: { data: 'yaml' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({ name: { label: 'Project title' } }),
        town: fields.text({ label: 'Town' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Kitchens', value: 'Kitchens' },
            { label: 'Bathrooms', value: 'Bathrooms' },
            { label: 'Whole home', value: 'Whole home' },
            { label: 'Restoration', value: 'Restoration' },
            { label: 'Commercial', value: 'Commercial' },
          ],
          defaultValue: 'Kitchens',
        }),
        image: fields.image({
          label: 'Main photo',
          directory: 'src/assets/content/projects',
          publicPath: '../../assets/content/projects/',
        }),
        beforeImage: fields.image({
          label: 'Before photo (optional — adds a before/after slider)',
          directory: 'src/assets/content/projects',
          publicPath: '../../assets/content/projects/',
        }),
        scope: fields.text({ label: 'Scope of work' }),
        time: fields.text({ label: 'Timeline (e.g. "6 weeks")' }),
        budget: fields.text({ label: 'Investment (e.g. "$45k–$55k")' }),
        brief: fields.text({ label: 'The brief', multiline: true }),
        did: fields.text({ label: 'What we did', multiline: true }),
        result: fields.text({ label: 'The result', multiline: true }),
        products: fields.array(
          fields.text({ label: 'Product' }),
          {
            label: 'Products used',
            itemLabel: (props) => props.value || 'Product',
          },
        ),
        quote: fields.text({ label: 'Client quote', multiline: true }),
        who: fields.text({ label: 'Client name (e.g. "The R. family")' }),
      },
    }),

    blogPosts: collection({
      label: 'Blog posts',
      path: 'src/content/blog/*/',
      slugField: 'title',
      format: { data: 'yaml' },
      entryLayout: 'form',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Publish date' }),
        author: fields.text({ label: 'Author', defaultValue: 'Stephen' }),
        excerpt: fields.text({ label: 'Excerpt (shown on the blog index)', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Kitchens', value: 'Kitchens' },
            { label: 'Bathrooms', value: 'Bathrooms' },
            { label: 'Restoration', value: 'Restoration' },
            { label: 'Showroom', value: 'Showroom' },
          ],
          defaultValue: 'Kitchens',
        }),
        image: fields.image({
          label: 'Cover photo',
          directory: 'src/assets/content/blog',
          publicPath: '../../assets/content/blog/',
        }),
        sections: fields.array(
          fields.object({
            heading: fields.text({ label: 'Heading (optional)' }),
            body: fields.text({ label: 'Paragraph (optional)', multiline: true }),
            list: fields.array(
              fields.text({ label: 'Bullet' }),
              { label: 'Bullet list (optional)', itemLabel: (props) => props.value || 'Bullet' },
            ),
          }),
          {
            label: 'Sections',
            itemLabel: (props) => props.fields.heading.value || 'Section',
          },
        ),
        closing: fields.text({ label: 'Closing paragraph', multiline: true }),
      },
    }),

    reviews: collection({
      label: 'Reviews',
      path: 'src/content/reviews/*/',
      slugField: 'who',
      format: { data: 'yaml' },
      entryLayout: 'form',
      schema: {
        who: fields.slug({ name: { label: 'Reviewer name' } }),
        job: fields.text({ label: 'Project type (as the reviewer described it)' }),
        quote: fields.text({ label: 'Quote', multiline: true }),
      },
    }),
  },

  singletons: {
    reviewsSettings: singleton({
      label: 'Reviews — overall rating',
      path: 'src/content/reviews-settings/',
      schema: {
        ratingValue: fields.text({ label: 'Average rating (e.g. "4.8")' }),
        ratingCount: fields.integer({ label: 'Number of reviews' }),
      },
    }),
  },
});
