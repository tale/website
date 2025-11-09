import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection("blog");
	return rss({
		title: "Aarnav Tale's Blog",
		description: "Just a collection of thoughts, ideas, and technical notes.",
		customData: "<language>en-us</language>",
		site: context.site ?? "",
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}`,
		})),
	});
}
