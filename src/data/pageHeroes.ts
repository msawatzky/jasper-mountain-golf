import { homePageHeroUrl, wixFit } from "./wixCdn";

/**
 * Hero backgrounds aligned with jaspermountaingolf.com.
 * Page-specific heroes and the homepage hero use high-res Wix `fill` URLs; Bear’s Den inner hero keeps a tuned `fit` URL.
 */
export const wixHero = {
  theCourse:
    "https://static.wixstatic.com/media/8a929a_a379c53753b04357b37d7ac0cc24f3e1~mv2.jpg/v1/fill/w_3024,h_1654,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a929a_a379c53753b04357b37d7ac0cc24f3e1~mv2.jpg",
  clubhouse:
    "https://static.wixstatic.com/media/8a929a_9a9cfccc8107447a90f6bcd6aa1604a2~mv2.jpg/v1/fill/w_2172,h_1188,al_b,q_90,enc_avif,quality_auto/8a929a_9a9cfccc8107447a90f6bcd6aa1604a2~mv2.jpg",
  passholders:
    "https://static.wixstatic.com/media/8a929a_2fe13beb01d94d5aa6ba9c02efd6cc99~mv2.jpg/v1/fill/w_2172,h_1188,al_b,q_90,enc_avif,quality_auto/8a929a_2fe13beb01d94d5aa6ba9c02efd6cc99~mv2.jpg",
  lessons:
    "https://static.wixstatic.com/media/8a929a_e5e5f2bcdb6648e293adb113a86de789~mv2.jpg/v1/fill/w_3024,h_1654,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a929a_e5e5f2bcdb6648e293adb113a86de789~mv2.jpg",
  groups:
    "https://static.wixstatic.com/media/04652e_257bb1059d444b6981b9e6d779814d04~mv2_d_4742_3162_s_4_2.jpg/v1/fill/w_3024,h_1654,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/04652e_257bb1059d444b6981b9e6d779814d04~mv2_d_4742_3162_s_4_2.jpg",
  guidelines:
    "https://static.wixstatic.com/media/04652e_77162c657dc647a99493d60c6a034647~mv2_d_3000_2000_s_2.jpg/v1/fill/w_3000,h_1641,al_b,q_90,enc_avif,quality_auto/04652e_77162c657dc647a99493d60c6a034647~mv2_d_3000_2000_s_2.jpg",
  history:
    "https://static.wixstatic.com/media/e4bbd5_042d1efb7ac64401b3213a462bcd3a10~mv2.jpg/v1/fill/w_1960,h_1412,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4bbd5_042d1efb7ac64401b3213a462bcd3a10~mv2.jpg",
  contact:
    "https://static.wixstatic.com/media/8a929a_682724d462bd4fbbb0da9ba4ca764d1b~mv2.jpg/v1/fill/w_3024,h_1654,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a929a_682724d462bd4fbbb0da9ba4ca764d1b~mv2.jpg",
  rates:
    "https://static.wixstatic.com/media/8a929a_e5e2a5f0f4e942f59ddd7ccdad0d2a7e~mv2.jpg/v1/fill/w_3024,h_1654,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a929a_e5e2a5f0f4e942f59ddd7ccdad0d2a7e~mv2.jpg",
  packages:
    "https://static.wixstatic.com/media/8a929a_8df84776032a4da0b975550c9480f439~mv2.jpg/v1/fill/w_2172,h_1188,al_b,q_90,enc_avif,quality_auto/8a929a_8df84776032a4da0b975550c9480f439~mv2.jpg",
  dining:
    "https://static.wixstatic.com/media/8a929a_e468da79fc364fdcbe6d1e2e21945076~mv2.jpg/v1/fill/w_3024,h_1654,al_b,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8a929a_e468da79fc364fdcbe6d1e2e21945076~mv2.jpg",
} as const;

export const pageHeroBySlug = {
  home: homePageHeroUrl,
  thebearsden: wixFit("d4e98b_f086027e250b48139518a5e78f528565~mv2.jpg", 2400),
  "the-course": wixHero.theCourse,
  "course-rehab": wixHero.theCourse,
  "golf-clubhouse": wixHero.clubhouse,
  memberships: wixHero.passholders,
  "lessons-jasper-golf": wixHero.lessons,
  "groups-events": wixHero.groups,
  "golf-regulations": wixHero.guidelines,
  history: wixHero.history,
  "contact-us": wixHero.contact,
  "rates-tee-times": wixHero.rates,
  "vacation-packages": wixHero.packages,
  dining: wixHero.dining,
} as const;

export type PageHeroSlug = keyof typeof pageHeroBySlug;

/** Inner routes only (pass to `InnerPageHero`). */
export type InnerPageHeroSlug = Exclude<PageHeroSlug, "home">;
