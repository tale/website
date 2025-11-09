import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

export const collections = {
	blog: defineCollection({
		loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "content/blog" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
		}),
	}),
	projects: defineCollection({
		loader: file("content/projects.json"),
		schema: z.object({
			name: z.string(),
			description: z.string(),
			link: z.string().url().optional(),
			icons: z.array(z.string()),
		}),
	}),
	credentials: defineCollection({
		loader: file("content/credentials.json"),
		schema: z.object({
			id: z.string().startsWith("edu:").or(z.string().startsWith("exp:")),
			role: z.string(),
			org: z.string(),
			abbr: z.string().optional(),
			range: z.number().or(z.tuple([z.number(), z.number()])),
			tint: z.string().startsWith("#"),
			link: z.string().url().optional(),
		}),
	}),
};
