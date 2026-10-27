// REAL project photos, scraped from the current live site
// (designscopellc.com/kitchen-remodeling and /bathroom-remodeling) at Tobi's
// request — these are genuine completed Design Scope jobs, not placeholders.
// No town is known per photo (the live site doesn't tag them), so don't
// invent one — see CONTENT_GAPS.md. Two kitchen-remodeling-gallery images
// (a laundry nook and a home bar area) were excluded as miscategorised;
// they aren't kitchens.
import kitchenHero from '../assets/projects/kitchen/gallery-07.jpg';
import kitchen1 from '../assets/projects/kitchen/gallery-01.jpg';
import kitchen3 from '../assets/projects/kitchen/gallery-03.jpg';
import kitchen5 from '../assets/projects/kitchen/gallery-05.jpg';
import kitchen6 from '../assets/projects/kitchen/gallery-06.jpg';

import bathroomHero from '../assets/projects/bathroom/hero.jpg';
import bathroom1 from '../assets/projects/bathroom/gallery-01.jpg';
import bathroom2 from '../assets/projects/bathroom/gallery-02.jpg';
import bathroom3 from '../assets/projects/bathroom/gallery-03.jpg';
import bathroom4 from '../assets/projects/bathroom/gallery-04.jpg';
import bathroom5 from '../assets/projects/bathroom/gallery-05.jpg';
import bathroom6 from '../assets/projects/bathroom/gallery-06.jpg';

// REAL commercial photos, scraped from the live site's own /gallery page
// (the "commercial-services-gallery-*" set) — same approach as kitchens and
// bathrooms. Checked for authenticity first: these are internally consistent
// (the same handful of real spaces — two break rooms, a conference room —
// shot from multiple angles, with specific non-stock details like branded
// vending machines and a handwritten "dishwasher out of order" sign), unlike
// the live site's "residential-services-gallery" set, which turned out to be
// generic stock photography (a European-style roof, a glossy stock apartment
// interior) and was NOT used for that reason — see CONTENT_GAPS.md.
import commercialHero from '../assets/projects/commercial/hero.jpg';
import commercial1 from '../assets/projects/commercial/gallery-01.jpg';
import commercial2 from '../assets/projects/commercial/gallery-02.jpg';
import commercial3 from '../assets/projects/commercial/gallery-03.jpg';
import commercial4 from '../assets/projects/commercial/gallery-04.jpg';
import commercial5 from '../assets/projects/commercial/gallery-05.jpg';

export const projectImages = {
  'kitchen-hero': kitchenHero,
  kitchen1,
  kitchen3,
  kitchen5,
  kitchen6,
  'bathroom-hero': bathroomHero,
  bathroom1,
  bathroom2,
  bathroom3,
  bathroom4,
  bathroom5,
  bathroom6,
  'commercial-hero': commercialHero,
  commercial1,
  commercial2,
  commercial3,
  commercial4,
  commercial5,
} satisfies Record<string, ImageMetadata>;

// Short, honest titles distilled from the live site's own alt text —
// nothing invented. No `town` field: unknown, don't guess.
export const kitchenProjects = [
  { id: 'kitchen-1', title: 'White kitchen with reflective island', img: 'kitchen1' as const },
  { id: 'kitchen-3', title: 'Open-plan kitchen and bar seating', img: 'kitchen3' as const },
  { id: 'kitchen-5', title: 'White kitchen with stainless refrigerator', img: 'kitchen5' as const },
  { id: 'kitchen-6', title: 'White kitchen with built-in ovens', img: 'kitchen6' as const },
];

export const bathroomProjects = [
  { id: 'bathroom-1', title: 'Tub and double-sink vanity', img: 'bathroom1' as const },
  { id: 'bathroom-2', title: 'Vessel-sink vanity with backlit mirror', img: 'bathroom2' as const },
  { id: 'bathroom-3', title: 'Glass-walled shower and tile floor', img: 'bathroom3' as const },
  { id: 'bathroom-4', title: 'Glass shower with built-in bench', img: 'bathroom4' as const },
  { id: 'bathroom-5', title: 'Glass shower with dark tile walls', img: 'bathroom5' as const },
  { id: 'bathroom-6', title: 'Freestanding tub and double vanity', img: 'bathroom6' as const },
];

// No town is known for these either (same reasoning as kitchens/bathrooms above).
export const commercialProjects = [
  { id: 'commercial-1', title: 'Employee break room and seating', img: 'commercial1' as const },
  { id: 'commercial-2', title: 'Break room with vending and fridge', img: 'commercial2' as const },
  { id: 'commercial-3', title: 'Office kitchenette, red cabinetry', img: 'commercial3' as const },
  { id: 'commercial-4', title: 'Office kitchenette, tile backsplash', img: 'commercial4' as const },
  { id: 'commercial-5', title: 'Office kitchenette, wide view', img: 'commercial5' as const },
];
