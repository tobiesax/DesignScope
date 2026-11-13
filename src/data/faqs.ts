// The dedicated /faqs/ page's full list. home.ts's `faqs` is now the live
// site's own complete six-question /faqs set, lifted verbatim — this file
// used to pad that out with a paraphrase of the same six questions (an
// earlier extraction pass declined to quote the live page verbatim), which
// is no longer needed now that the real text is in home.ts directly.
import { faqs as coreFaqs } from './home';

export const siteFaqs = coreFaqs;
