// The dedicated /faqs/ page's full list: the short, site-wide set (home.ts,
// used in smaller accordions elsewhere) plus the live site's other 6 FAQs,
// rewritten in our own words from a paraphrase (the extraction tool declined
// to quote the live page verbatim) rather than invented.
import { faqs as coreFaqs } from './home';

export const siteFaqs = [
  ...coreFaqs,
  {
    q: 'What products do you use for my project?',
    a: 'We prefer local suppliers where we can, and our manufacturer relationships help keep material costs down for you.',
  },
  {
    q: 'What kind of crew works on my project?',
    a: 'Our crew is fully bonded, licensed and insured, and everyone on site is there because they are good at the specific trade the job needs.',
  },
  {
    q: 'How does payment work?',
    a: 'We put together an itemized project plan at our first meeting. Payments are staged at points set out in your contract, and we can point you toward financing options like a home equity line of credit.',
  },
  {
    q: 'Why choose Design Scope?',
    a: "We're a full-service general contractor focused on quality workmanship and backed by our 6-month warranty. The same team handles design through construction, so nothing gets lost in translation.",
  },
  {
    q: 'What should I expect during the project?',
    a: 'A detailed contract and production schedule before work starts, then regular updates from us as the job moves along.',
  },
  {
    q: 'How soon can you start?',
    a: 'As soon as the project details are agreed on and the contract is signed.',
  },
];
