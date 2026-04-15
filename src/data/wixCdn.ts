const CDN = "https://static.wixstatic.com/media";

/** Wix expects `|` in some legacy filenames as `%7E` in the URL path. */
function pathSegment(name: string): string {
  return name.replace(/\|/g, "%7E");
}

/**
 * Sharp, large transforms for full-bleed heroes (avoid tiny `fill/w_…` thumbs and `blur_2` LQIP URLs).
 * Uses `fit` so aspect ratio follows the original file.
 */
export function wixFit(fileName: string, maxWidth = 2880, quality = 92): string {
  const seg = pathSegment(fileName);
  const h = Math.round(maxWidth * 10 / 16);
  return `${CDN}/${seg}/v1/fit/w_${maxWidth},h_${h},al_c,q_${quality},usm_0.66_1.00_0.01,enc_auto/${seg}`;
}

export type WixFillAlign = "b" | "c";

/**
 * Wix `fill` transform at explicit pixel size — matches jaspermountaingolf.com hero URLs; sharper than small `fit` for photos at full width.
 */
export function wixFill(
  fileName: string,
  w: number,
  h: number,
  opts?: { align?: WixFillAlign; quality?: number; usm?: boolean }
): string {
  const seg = pathSegment(fileName);
  const align = opts?.align ?? "c";
  const quality = opts?.quality ?? 90;
  const usm = opts?.usm !== false;
  const tail = usm
    ? `al_${align},q_${quality},usm_0.66_1.00_0.01,enc_avif,quality_auto`
    : `al_${align},q_${quality},enc_avif,quality_auto`;
  return `${CDN}/${seg}/v1/fill/w_${w},h_${h},${tail}/${seg}`;
}

/** Homepage hero — fairway, lake, and Rockies (jaspermountaingolf.com asset). */
export const homePageHeroUrl =
  "https://static.wixstatic.com/media/e4bbd5_4298f7af0baa40ffb30c3fcf7a6af0a8~mv2.jpg/v1/fill/w_2187,h_1467,al_c,q_90,enc_avif,quality_auto/e4bbd5_4298f7af0baa40ffb30c3fcf7a6af0a8~mv2.jpg";
