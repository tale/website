import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { satteri } from "@astrojs/markdown-satteri";
import satteriAssetAlias from "./src/plugins/satteri-asset-alias.ts";
import satteriFigure, { satteriUnwrapImageParagraphs } from "./src/plugins/satteri-figure.ts";
import satteriHeadingStyle from "./src/plugins/satteri-heading-style.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://tale.me",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    processor: satteri({
      mdastPlugins: [satteriAssetAlias()],
      hastPlugins: [satteriUnwrapImageParagraphs(), satteriFigure(), satteriHeadingStyle()],
    }),
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
