// TEMPORARY stand-ins pulled from the approved GrowthOS proposal's hi-fi
// mockup — not real Design Scope photos. Swap src/assets/mockup-temp/ for
// Stephen's real project/showroom photos and delete this file's imports once
// they arrive (CONTENT_GAPS.md "Assets").
import heroKitchen from '../assets/mockup-temp/hero-kitchen.jpeg';
import beforeKitchen from '../assets/mockup-temp/before-kitchen.jpeg';
import afterKitchen from '../assets/mockup-temp/after-kitchen.jpeg';
import showroom from '../assets/mockup-temp/showroom.jpeg';
import pathRestoration from '../assets/mockup-temp/path-restoration.jpeg';
import pathCommercial from '../assets/mockup-temp/path-commercial.png';
import pathRemodeling from '../assets/mockup-temp/path-remodeling.png';
import projGalleyBloomfield from '../assets/mockup-temp/proj-galley-bloomfield.jpeg';
import dsKitchen from '../assets/mockup-temp/ds-kitchen.jpeg';
import projShowerWindsor from '../assets/mockup-temp/proj-shower-windsor.jpeg';
import projBathAvon from '../assets/mockup-temp/proj-bath-avon.jpeg';
import projRenovationSimsbury from '../assets/mockup-temp/proj-renovation-simsbury.png';
import projOfficeHartford from '../assets/mockup-temp/proj-office-hartford.png';

export const mockupImages = {
  'hero-kitchen': heroKitchen,
  'before-kitchen': beforeKitchen,
  'after-kitchen': afterKitchen,
  showroom,
  'path-restoration': pathRestoration,
  'path-commercial': pathCommercial,
  'path-remodeling': pathRemodeling,
  'proj-galley-bloomfield': projGalleyBloomfield,
  'ds-kitchen': dsKitchen,
  'proj-shower-windsor': projShowerWindsor,
  'proj-bath-avon': projBathAvon,
  'proj-renovation-simsbury': projRenovationSimsbury,
  'proj-office-hartford': projOfficeHartford,
} satisfies Record<string, ImageMetadata>;
