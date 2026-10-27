// Shared financing-example math for the remodel pages' "Typical
// investment" table and cost estimator — the design handoff's own
// amortization formula (verified against its own worked examples: a
// $15k-range row -> "From $198/mo"; a 180 sq ft Premium kitchen estimate
// -> "$31k-$41k, or about $404/mo"). No lending partner is wired up yet
// (BUILD_PLAN.md, financing is Phase 2) — every caller must show this
// next to the handoff's own "financing examples, not an offer" wording
// rather than presenting it as a real loan quote (CLAUDE.md rule 1).
const APR = 9.99;
const TERM_YEARS = 10;

export function monthlyPayment(principal: number): number {
  const r = APR / 1200;
  const n = TERM_YEARS * 12;
  return Math.round((principal * r) / (1 - Math.pow(1 + r, -n)));
}

export function formatMonthly(principal: number): string {
  return `$${monthlyPayment(principal).toLocaleString()}/mo`;
}
