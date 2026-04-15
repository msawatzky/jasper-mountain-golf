import { homePageHeroUrl, wixFill, wixFit } from "./wixCdn";
import { wixHero } from "./pageHeroes";

/**
 * Homepage + shared sections — same high-res Wix `fill` URLs as inner heroes where possible (avoids soft `fit`/`enc_auto` JPEGs on retina).
 */
export const heroImages = {
  home: homePageHeroUrl,
  course: wixHero.theCourse,
  clubhouse: wixHero.clubhouse,
  bearsDen: wixFit("8a929a_323616aa35a7436e86b55d64e01007e7~mv2.gif", 3200),
  lessons: wixHero.lessons,
  landscape: wixHero.groups,
  lodgeView: wixFill("8a929a_0985a0fb32964c0d9e2d084a34c09b7b~mv2.jpg", 3024, 1654, {
    align: "c",
    quality: 90,
  }),
  terrace: wixHero.dining,
  homeColumn: wixFill("e4bbd5_4298f7af0baa40ffb30c3fcf7a6af0a8~mv2.jpg", 3024, 1654, {
    align: "c",
    quality: 90,
  }),
} as const;

/** Curated mountain-golf gallery for the homepage. */
export const mountainGalleryImages = [
  {
    src: heroImages.course,
    alt: "Fairway with Rocky Mountain peaks at Fairmont Jasper Park Lodge Golf Club",
  },
  {
    src: heroImages.landscape,
    alt: "Panoramic mountain golf landscape in Jasper National Park",
  },
  {
    src: heroImages.lodgeView,
    alt: "Hole 16 — view of the lodge and peaks from the green",
  },
  {
    src: heroImages.lessons,
    alt: "Golf instruction and play beneath the Rockies at Jasper Park Lodge",
  },
  {
    src: heroImages.clubhouse,
    alt: "Golf clubhouse with mountain backdrop near the 18th hole",
  },
  {
    src: heroImages.terrace,
    alt: "Thompson's Terrace — dining with views of the course and mountains",
  },
] as const;
