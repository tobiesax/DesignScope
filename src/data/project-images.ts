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
