import { categories } from '$lib/blog';

export async function load({ params }) {

	const post = await import(`../../../../posts/${params.slug}.md`);

	const { title, date, category } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date,
		category: categories[category],
	};
}

