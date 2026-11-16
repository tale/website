export const siteName = "Aarnav Tale";

export const staticPages = {
  index: {
    title: siteName,
    description: "Software engineer. I write about whatever's on my mind.",
  },
  "404": {
    title: "404 Not Found",
    description: "This page doesn't exist.",
  },
};

export function getPageTitle(title = siteName) {
  return title === siteName ? title : `${title} • ${siteName}`;
}
