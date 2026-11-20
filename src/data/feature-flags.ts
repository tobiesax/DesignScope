// Static kill switch for the AI Room Visualizer prototype (see the
// "Design Scope — AI Room Visualizer" plan doc, section 16: "styled
// prototype first", built static/client-only, no API calls, no backend).
// Flip to false to pull the nav link, both VisualizerBand placements and
// the /visualize page's content in one place — the page itself still
// renders at /visualize/ either way, but shows a short "not available"
// notice instead of the flow when this is false.
//
// A real build (plan section 6) would read this from an env var
// (e.g. `import.meta.env.PUBLIC_VISUALIZER_ENABLED`) instead of a
// hardcoded constant — trivial to swap once there's an actual API behind
// it to gate.
export const VISUALIZER_ENABLED = true;

// Which homepage hero renders by default: the original slideshow ('classic')
// or the new scroll-driven ScrollHero prototype ('scroll'). Set
// PUBLIC_HERO_VARIANT=scroll in Vercel (or .env for local dev) to flip the
// site-wide default. `/?hero=scroll` or `/?hero=classic` overrides this
// per-request regardless of the env value — see src/pages/index.astro,
// which opts out of static prerendering (`export const prerender = false`)
// so that query param can actually be read per visit.
export const HERO_VARIANT_DEFAULT: 'classic' | 'scroll' =
  import.meta.env.PUBLIC_HERO_VARIANT === 'scroll' ? 'scroll' : 'classic';
