// @ts-check
import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

// includeFiles: Keystatic's createReader() globs these YAML files from disk
// at runtime (not via static import), so Vercel's automatic file tracer
// never detects they're needed and leaves them out of the serverless
// function bundle. Harmless for pages built statically at build time (the
// full repo is on disk then) — but any page with `export const prerender =
// false` (e.g. index.astro, for its ?hero=scroll/classic param) reads these
// at *request* time in the deployed function, where the files were simply
// missing: reviews, projects and blog posts all silently came back empty
// (reviews is what surfaced it — "0 Google reviews" on the home page while
// /reviews/, a static page, correctly showed 20). Found 2026-11-24.
//
// A bare directory in `includeFiles` isn't enough — the adapter's own
// copyFilesToFolder only `mkdir`s a directory entry, it never recursively
// copies what's inside one (confirmed by reading
// @astrojs/internal-helpers/dist/fs.js), so every actual file underneath
// `src/content` has to be listed individually. Using Node 20.1+'s recursive
// readdirSync here instead of a manual walker or a new dependency.
// `recursive: true` without `withFileTypes` returns every nested entry as a
// path string relative to the given dir, mixing files and directories —
// every content file here is a `.yaml` (keystatic.config.ts's `format:
// { data: 'yaml' }`), so filtering on that extension is enough to drop the
// directory entries.
const contentFiles = readdirSync('./src/content', { recursive: true })
  .filter((entry) => entry.endsWith('.yaml'))
  .map((entry) => `./src/content/${entry.replace(/\\/g, '/')}`);

// https://astro.build/config
export default defineConfig({
  // The eventual production domain (HANDOFF.md decisions) — used for the
  // sitemap and canonical URLs even though the domain cut-over itself is
  // still deferred until the build is done (BUILD_PLAN.md Week 5).
  site: 'https://designscopellc.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({ includeFiles: contentFiles }),
  integrations: [react(), keystatic()],
});
