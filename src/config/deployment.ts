export const siteUrl = new URL(import.meta.env.BASE_URL, import.meta.env.SITE)
  .href;

export function assetPath(path: `/${string}`) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
