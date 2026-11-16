import { getCollection, render } from "astro:content";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { siteName, staticPages } from "@/metadata";

export async function GET(context: APIContext) {
  const site = context.site ?? new URL(import.meta.env.SITE);
  const posts = await getCollection("blog");
  const sortedPosts = posts.toSorted((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const container = await AstroContainer.create();

  const items = await Promise.all(
    sortedPosts.map(async (post) => {
      const { Content } = await render(post);
      const html = await container.renderToString(Content);

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id}`,
        // Replaces relative paths just to be safe
        content: html.replace(
          /(src|href)="(\/[^"]*)"/g,
          (_, attr: string, path: string) => `${attr}="${new URL(path, site).href}"`,
        ),
      };
    }),
  );

  return rss({
    title: siteName,
    description: staticPages.index.description,
    customData: "<language>en-us</language>",
    site,
    items,
  });
}
