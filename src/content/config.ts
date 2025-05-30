import { defineCollection, z } from 'astro:content'

const categories: Record<string, string> = {
	productivity: 'Productivity',
	technical: 'Technical',
	thoughts: 'Thoughts'
}

export const collections = {
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.string().or(z.date()).transform((val) => new Date(val)),
			categories: z.array(z.string()).transform((val) => val.map((v) => categories[v])),
			icons: z.array(z.string()).default([])
		}),
	}),
}
