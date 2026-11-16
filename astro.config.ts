import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import satteriFigure from "./src/plugins/satteri-figure.ts";
import satteriHeadingAnchor from "./src/plugins/satteri-heading-anchor.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://tale.me",
  integrations: [sitemap()],
  redirects: {
    "/portfolio": "/",
    "/sponsor": "https://github.com/sponsors/tale",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: satteri({
      hastPlugins: [satteriFigure(), satteriHeadingIdsPlugin(), satteriHeadingAnchor()],
    }),
    shikiConfig: {
      theme: "css-variables",
      langAlias: { diagram: "text" },
    },
  },
});
