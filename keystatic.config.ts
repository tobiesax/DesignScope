import { config } from '@keystatic/core';

// Collections (projects, blog posts, reviews) are added in BUILD_PLAN.md Week 3.
// Local storage in dev (no auth needed); GitHub mode once deployed, so the owner
// can edit content from the Keystatic admin UI with their GitHub login. GitHub
// mode in production needs KEYSTATIC_GITHUB_CLIENT_ID/SECRET + KEYSTATIC_SECRET
// set in Vercel — see CONTENT_GAPS.md.
export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' }
    : { kind: 'github', repo: 'tobiesax/DesignScope' },
});
