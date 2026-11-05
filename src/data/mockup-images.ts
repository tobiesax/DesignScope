// TEMPORARY stand-ins — the actual image files shipped in the approved
// GrowthOS design brief ("design_handoff_design_scope_website/assets"), at
// Tobi's explicit request to build the site exactly as specified there.
// The brief's own README flags several of these as "AI-generated stand-ins";
// none are real Design Scope photos. Swap for Stephen's real project and
// showroom photos, and delete src/assets/mockup-temp/, before Week 5 QA —
// see CONTENT_GAPS.md "Assets".
import baAfter from '../assets/mockup-temp/ba-after.jpg';
import baBefore from '../assets/mockup-temp/ba-before.png';
import catCabinetry from '../assets/mockup-temp/cat-cabinetry.png';
import catCountertops from '../assets/mockup-temp/cat-countertops.png';
import catFixtures from '../assets/mockup-temp/cat-fixtures.png';
import catTile from '../assets/mockup-temp/cat-tile.png';
import dsCommercial from '../assets/mockup-temp/ds-commercial.jpeg';
import dsHero from '../assets/mockup-temp/ds-hero.jpeg';
import dsKitchen from '../assets/mockup-temp/ds-kitchen.jpeg';
import dsResidential from '../assets/mockup-temp/ds-residential.jpeg';
import dsShowroom from '../assets/mockup-temp/ds-showroom.jpeg';
import heroKitchen from '../assets/mockup-temp/hero-kitchen.png';
import pathCommercial from '../assets/mockup-temp/path-commercial.png';
import pathRemodeling from '../assets/mockup-temp/path-remodeling.png';
import projBathAvon from '../assets/mockup-temp/proj-bath-avon.png';
import projGalleyBloomfield from '../assets/mockup-temp/proj-galley-bloomfield.jpg';
import projOfficeHartford from '../assets/mockup-temp/proj-office-hartford.png';
import projRenovationSimsbury from '../assets/mockup-temp/proj-renovation-simsbury.png';
import projShowerWindsor from '../assets/mockup-temp/proj-shower-windsor.jpg';
import resFire from '../assets/mockup-temp/res-fire.png';
import resMold from '../assets/mockup-temp/res-mold.png';
import resStorm from '../assets/mockup-temp/res-storm.png';
import restoration from '../assets/mockup-temp/restoration.jpg';
import showroom from '../assets/mockup-temp/showroom.png';
// Supplied directly by Tobi (not from the design handoff) to replace the
// Kitchens/Bathrooms hero photos. Generic, non-project-specific filenames
// ("Bright Blue-Gray Subway Tile Kitchen", "Luxury Gray Tile Spa Bathroom")
// read as stock/reference photography, not a confirmed Design Scope job —
// treated the same as the rest of this file: temporary, swap for
// Stephen's real photos before launch. See CONTENT_GAPS.md.
import subwayTileKitchen from '../assets/mockup-temp/subway-tile-kitchen.png';
import spaBathroom from '../assets/mockup-temp/spa-bathroom.png';
// New hero-carousel slide, supplied directly by Tobi — there was no
// living-room/home-renovations photo in the carousel before (CONTENT_GAPS.md).
import livingRoomSunset from '../assets/mockup-temp/living-room-sunset.png';
// EmergencyPanel.astro's background only — a distinct key rather than
// replacing `restoration` above, since that key is also shared by the
// restoration page hero, a blog post, a case study and
// DryOutToRebuild.astro, none of which this request was about.
import emergencyPanel from '../assets/mockup-temp/emergency-panel.png';
// ThreeDDesignBlock.astro's "3D render · image needed" slot — previously
// hidden with no image at all (CLAUDE.md rule 1: no fake content), now
// filled with a hand-drawn/rendered-style sketch Tobi supplied.
import threeDRenderSketch from '../assets/mockup-temp/3d-render-sketch.png';
// ThreeDDesignBlock.astro's "finished kitchen" photo — previously reused
// `hero-kitchen`, which is also shared by the home hero, the West
// Hartford town page, the style quiz and a case study/blog post. A
// distinct key instead, so this swap doesn't touch any of those.
import threeDRenderFinished from '../assets/mockup-temp/3d-render-finished.png';

export const mockupImages = {
  'ba-after': baAfter,
  'ba-before': baBefore,
  'living-room-sunset': livingRoomSunset,
  'emergency-panel': emergencyPanel,
  '3d-render-sketch': threeDRenderSketch,
  '3d-render-finished': threeDRenderFinished,
  'cat-cabinetry': catCabinetry,
  'cat-countertops': catCountertops,
  'cat-fixtures': catFixtures,
  'cat-tile': catTile,
  'ds-commercial': dsCommercial,
  'ds-hero': dsHero,
  'ds-kitchen': dsKitchen,
  'ds-residential': dsResidential,
  'ds-showroom': dsShowroom,
  'hero-kitchen': heroKitchen,
  'path-commercial': pathCommercial,
  'path-remodeling': pathRemodeling,
  'proj-bath-avon': projBathAvon,
  'proj-galley-bloomfield': projGalleyBloomfield,
  'proj-office-hartford': projOfficeHartford,
  'proj-renovation-simsbury': projRenovationSimsbury,
  'proj-shower-windsor': projShowerWindsor,
  'res-fire': resFire,
  'res-mold': resMold,
  'res-storm': resStorm,
  restoration,
  showroom,
  'subway-tile-kitchen': subwayTileKitchen,
  'spa-bathroom': spaBathroom,
} satisfies Record<string, ImageMetadata>;
