import { defineCollection, z } from 'astro:content'
import loc from '@/utils/locale'

const categories: Record<string, string> = {
	productivity: loc('blog.productivity'),
	technical: loc('blog.technical'),
	thoughts: loc('blog.thoughts'),
}

export const collections = {
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.string().or(z.date()).transform((val) => new Date(val)),
			categories: z.array(z.string()).transform((val) => val.map((v) => categories[v])),
		}),
	}),
}
