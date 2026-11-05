// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  // The eventual production domain (HANDOFF.md decisions) — used for the
  // sitemap and canonical URLs even though the domain cut-over itself is
  // still deferred until the build is done (BUILD_PLAN.md Week 5).
  site: 'https://designscopellc.com',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [react(), keystatic()],
});
