import { load } from 'js-yaml'
import markdownit from 'markdown-it'

interface Document {
	default: string
}

export interface Post {
	title: string
	date: Date
	categories: string[]
	description: string
	image: string
}

const categories: Record<string, string> = {
	productivity: 'Productivity',
	technical: 'Technical',
	thoughts: 'Thoughts',
}

export function loadPosts(origin: string) {
	const posts = import.meta.glob<Document>('../posts/*.md', {
		eager: true,
		query: '?raw',
	})

	const loadedPosts = Object.entries(posts)
		.map(([path, blog]) => {
			const content = blog.default.split('---').slice(1)
			const frontmatter = load(content[0])
			const matter = validateFrontmatter(frontmatter, origin)

			return {
				slug: path.replace('../posts/', '').replace('.md', ''),
				matter,
			}
		})

	return loadedPosts
}

export async function loadPost(slug: string, origin: string, md = false) {
	let blog: Document

	try {
		blog = await import(`../posts/${slug}.md?raw`) as Document
		if (!blog.default) {
			return
		}
	} catch {
		return
	}

	const content = blog.default.split('---').slice(1)
	const frontmatter = load(content[0])

	if (!md) {
		return {
			matter: validateFrontmatter(frontmatter, origin),
		}
	}

	const it = markdownit()
	const html = it.render(content[1])

	return {
		matter: validateFrontmatter(frontmatter, origin),
		content: html,
	}
}

function validateFrontmatter(frontmatter: unknown, origin: string): Post {
	if (!frontmatter || typeof frontmatter !== 'object') {
		throw new Error('Invalid Frontmatter')
	}

	const {
		title,
		date,
		categories,
		description,
		image,
	} = frontmatter as Record<string, unknown>

	if (!title || typeof title !== 'string') {
		throw new Error('Invalid Title')
	}

	if (!date || !(date instanceof Date)) {
		throw new Error('Invalid Date')
	}

	if (!categories || typeof categories !== 'string') {
		throw new Error('Invalid Category')
	}

	if (!description || typeof description !== 'string') {
		throw new Error('Invalid Description')
	}

	if (!image || typeof image !== 'string') {
		throw new Error('Invalid Image')
	}

	return {
		title,
		date,
		categories: mapCategories(categories.split(',')),
		description,
		image: `${origin}${image}`,
	}
}

function mapCategories(list: string[]) {
	const mappedCategories = list.map((category) => {
		const option = categories[category.trim()]
		if (!option) {
			throw new Error('Invalid Category')
		}

		return option
	})

	return mappedCategories
}
