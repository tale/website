export const siteName = "Aarnav Tale";

export const staticPages = {
  index: {
    title: siteName,
    description: "Aarnav Tale's personal website and blog.",
  },
  "404": {
    title: "404 Not Found",
    description: "This page doesn't exist.",
  },
};

export function getPageTitle(title = siteName) {
  return title === siteName ? title : `${title} • ${siteName}`;
}
