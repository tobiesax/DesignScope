// REAL project photos, scraped from the current live site
// (designscopellc.com/kitchen-remodeling and /bathroom-remodeling) at Tobi's
// request — these are genuine completed Design Scope jobs, not placeholders.
// No town is known per photo (the live site doesn't tag them), so don't
// invent one — see CONTENT_GAPS.md. Two kitchen-remodeling-gallery images
// (a laundry nook and a home bar area) were excluded as miscategorised;
// they aren't kitchens.
//
// kitchen1 and bathroom1 are each swapped for an edited/enhanced version of
// the SAME room (same fixtures, same layout, same light fixture/mirror —
// verified side by side), supplied directly by Tobi, not a fresh scrape.
// Same treatment as mockup-images.ts's subway-tile-kitchen/spa-bathroom:
// unconfirmed/enhanced rather than a straight camera original until Stephen
// confirms — see CONTENT_GAPS.md.
import kitchenHero from '../assets/projects/kitchen/gallery-07.jpg';
import kitchen1 from '../assets/projects/kitchen/gallery-01.png';
import kitchen3 from '../assets/projects/kitchen/gallery-03.jpg';
import kitchen5 from '../assets/projects/kitchen/gallery-05.jpg';
import kitchen6 from '../assets/projects/kitchen/gallery-06.jpg';

import bathroomHero from '../assets/projects/bathroom/hero.jpg';
import bathroom1 from '../assets/projects/bathroom/gallery-01.png';
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

// Scraped 2026-11-17 from the live site's own `/residential-services` PAGE
// (not its `/gallery` page's "residential-services-gallery" image set,
// which is the different, hash-suffixed set already rejected above as
// generic stock — roof/exterior/tract-house photos). These four are
// interior photos of finished basements and a living/dining space, each a
// visibly different home — moderate, not full, confidence they're real:
// each has a specific, non-generic personal detail (a handwritten sign on
// one door, a religious macrame wall hanging in another) that stock photo
// libraries don't typically include, but unlike the kitchen/bathroom/
// commercial sets above there's no hash-ID or multi-angle-of-the-same-room
// cross-check to fully confirm it. The page's own hero photo and a 3D
// render on the same page were excluded — see CONTENT_GAPS.md.
import homeReno1 from '../assets/projects/home-renovations/basement-media-wall.jpg';
import homeReno2 from '../assets/projects/home-renovations/basement-fireplace.jpg';
import homeReno3 from '../assets/projects/home-renovations/open-living-dining.jpg';
import homeReno4 from '../assets/projects/home-renovations/basement-stairs-laundry.jpg';

// Scraped 2026-11-17 from the live site's own `/commercial-renovations` and
// `/commercial-restorations` pages. High confidence real: this break room
// photo and several others across both pages (plus a matching hero image
// shared by both pages) show the exact same building under construction
// and finished — same black pendant lights, same glass-walled offices,
// same green EXIT signage, same industrial exposed ceiling — confirming
// one real, extensively documented commercial rebuild project. Used only
// for the restoration hub's "Dry-out to rebuild" AFTER slot (a generic
// "finished space" photo, not tied to a specific damage type) — see
// CONTENT_GAPS.md for why it isn't used for the fire/water/mold/storm
// category tabs themselves.
import restorationRebuild1 from '../assets/projects/restoration/rebuilt-office-breakroom.jpg';

// Scraped 2026-11-18 from the live site's own `/gallery` page, "Kitchen
// Designs" category ("kitchen-designs-gallery-*"), for the Kitchens page's
// full PhotoGallery section. High confidence real: these four, plus
// `kitchen1` and `kitchen3` above, are all the SAME real open-concept
// kitchen/bar remodel — confirmed by matching details across shots (the
// same gray glossy cabinetry, black bar stools, "COFFEE TIME" shelf sign,
// wine fridge, Roomba) — just a different live-site page than where
// kitchen1/kitchen3 were originally scraped from, giving far more angles
// of one well-documented real project. Not six different kitchens.
import barKitchenRange from '../assets/projects/kitchen/bar-kitchen-range.jpg';
import barKitchenWineNook from '../assets/projects/kitchen/bar-kitchen-wine-nook.jpg';
import barKitchenWide from '../assets/projects/kitchen/bar-kitchen-wide.jpg';
import barKitchenIsland from '../assets/projects/kitchen/bar-kitchen-island.jpg';

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
  'home-reno-1': homeReno1,
  'home-reno-2': homeReno2,
  'home-reno-3': homeReno3,
  'home-reno-4': homeReno4,
  'restoration-rebuild-1': restorationRebuild1,
  'bar-kitchen-range': barKitchenRange,
  'bar-kitchen-wine-nook': barKitchenWineNook,
  'bar-kitchen-wide': barKitchenWide,
  'bar-kitchen-island': barKitchenIsland,
} satisfies Record<string, ImageMetadata>;

// Short, honest titles distilled from the live site's own alt text —
// nothing invented. No `town` field: unknown, don't guess.
export const kitchenProjects = [
  { id: 'kitchen-1', title: 'White kitchen with reflective island', img: 'kitchen1' as const },
  { id: 'kitchen-3', title: 'Open-plan kitchen and bar seating', img: 'kitchen3' as const },
  { id: 'kitchen-5', title: 'White kitchen with stainless refrigerator', img: 'kitchen5' as const },
  { id: 'kitchen-6', title: 'White kitchen with built-in ovens', img: 'kitchen6' as const },
];

// Full gallery for /remodeling/kitchens/'s PhotoGallery section (and
// /projects/) — a curated, honest mix across the 3 distinct real kitchens
// we have photos of (not 9 different projects): the open-concept bar
// kitchen (5 angles), and two separate white-kitchen projects (1 photo
// each, kitchen5/kitchen-hero — note kitchen5 still has the fridge's
// protective plastic film on, i.e. very freshly installed).
export const kitchenGalleryPhotos = [
  { src: projectImages.kitchen6, alt: 'White kitchen with built-in ovens and yellow dining area beyond' },
  { src: projectImages['bar-kitchen-wide'], alt: 'Open-concept kitchen with gray cabinetry, island and bar seating' },
  { src: projectImages['kitchen-hero'], alt: 'White kitchen with blue subway tile backsplash' },
  { src: projectImages['bar-kitchen-range'], alt: 'Gray kitchen range wall with dark glossy cabinetry' },
  { src: projectImages.kitchen3, alt: 'Open-plan kitchen and bar seating' },
  { src: projectImages['bar-kitchen-island'], alt: 'Kitchen island with pendant lighting and bar stools' },
  { src: projectImages.kitchen1, alt: 'White kitchen with reflective island' },
  { src: projectImages['bar-kitchen-wine-nook'], alt: 'Built-in wine fridge and coffee station nook' },
  { src: projectImages.kitchen5, alt: 'White kitchen with stainless refrigerator' },
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
export const homeRenovationProjects = [
  { id: 'home-reno-1', title: 'Finished basement with media wall', img: 'home-reno-1' as const },
  { id: 'home-reno-2', title: 'Finished basement with fireplace and built-ins', img: 'home-reno-2' as const },
  { id: 'home-reno-3', title: 'Open-concept living and dining renovation', img: 'home-reno-3' as const },
  { id: 'home-reno-4', title: 'Finished basement with laundry and half bath', img: 'home-reno-4' as const },
];

// No town is known for these either (same reasoning as kitchens/bathrooms above).
export const commercialProjects = [
  { id: 'commercial-1', title: 'Employee break room and seating', img: 'commercial1' as const },
  { id: 'commercial-2', title: 'Break room with vending and fridge', img: 'commercial2' as const },
  { id: 'commercial-3', title: 'Office kitchenette, red cabinetry', img: 'commercial3' as const },
  { id: 'commercial-4', title: 'Office kitchenette, tile backsplash', img: 'commercial4' as const },
  { id: 'commercial-5', title: 'Office kitchenette, wide view', img: 'commercial5' as const },
];
