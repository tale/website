export interface Document {
	default: string
}

const categories: Record<string, string> = {
	productivity: 'Productivity',
	technical: 'Technical',
	thoughts: 'Thoughts',
}

export function validateFrontmatter(frontmatter: unknown) {
	if (!frontmatter || typeof frontmatter !== 'object') {
		throw new Error('Invalid Frontmatter')
	}

	const { title, date, categories } = frontmatter as Record<string, unknown>

	if (!title || typeof title !== 'string') {
		throw new Error('Invalid Title')
	}

	if (!date || !(date instanceof Date)) {
		throw new Error('Invalid Date')
	}

	if (!categories || typeof categories !== 'string') {
		throw new Error('Invalid Category')
	}

	return {
		title,
		date,
		categories: mapCategories(categories.split(',')),
	}
}

export function mapCategories(list: string[]) {
	const mappedCategories = list.map((category) => {
		const option = categories[category.trim()]
		if (!option) {
			throw new Error('Invalid Category')
		}

		return option
	})

	return mappedCategories
}
