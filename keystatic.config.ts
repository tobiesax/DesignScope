import { config } from '@keystatic/core';

// Collections (projects, blog posts, reviews) are added in BUILD_PLAN.md Week 3.
// Storage is 'local' until the repo exists on GitHub; switch to
// { kind: 'github', repo: 'owner/repo-name' } once it's pushed (see CONTENT_GAPS.md).
export default config({
  storage: {
    kind: 'local',
  },
});
