export const siteName = "Aarnav Tale";

export const staticPages = {
  index: {
    title: siteName,
    description: "Aarnav Tale's personal website and blog.",
  },
  "404": {
    title: "404 Not Found",
    description: "The page you are looking for does not exist",
  },
};

export function getPageTitle(title = siteName) {
  return title === siteName ? title : `${title} • ${siteName}`;
}

export function getImageUrl(url: URL) {
  const page = url.pathname.replace(/^\/+|\/+$/g, "") || "index";
  return new URL(`/og/${page}.webp`, url).href;
}
