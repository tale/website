import { bundleMDX } from 'mdx-bundler'

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

export async function loadPosts(origin: string) {
	const posts = import.meta.glob<Document>('../posts/*.md', {
		query: '?raw',
	})

	const loadedPosts = Object.entries(posts)
		.map(async ([path, blog]) => {
			const content = await blog()
			const result = await bundleMDX({
				source: content.default,
			})

			const matter = validateFrontmatter(result.frontmatter, origin)
			return {
				slug: path.replace('../posts/', '').replace('.md', ''),
				matter,
			}
		})

	return Promise.all(loadedPosts)
}

export async function loadPost(slug: string, origin: string) {
	let blog: Document

	try {
		blog = await import(`../posts/${slug}.md?raw`) as Document
		if (!blog.default) {
			return
		}
	} catch {
		return
	}

	const result = await bundleMDX({
		source: blog.default,
	})

	return {
		matter: validateFrontmatter(result.frontmatter, origin),
		code: result.code,
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
