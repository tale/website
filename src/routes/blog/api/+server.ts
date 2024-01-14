import { json } from '@sveltejs/kit';
import { categories } from '$lib/blog';

type Raw = {
	metadata: {
		title: string;
		date: string;
		category: string;
	}
}

type Post = {
	path: string;
	meta: {
		title: string;
		date: string;
		category: { name: keyof typeof categories, slug: string };
	}
}

async function fetchMarkdownPosts() {
	const allPostFiles = import.meta.glob<Raw>('/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const post = await resolver();
			const postPath = path.replace('/posts/', '').replace('.md', '');

			const metadata = post.metadata;

			if (!metadata.title || !metadata.date || !metadata.category) {
				return
			}

			return {
				meta: {
					title: metadata.title,
					date: metadata.date,
					category: {
						name: categories[metadata.category],
						slug: metadata.category,
					}
				},
				path: postPath,
			} satisfies Post;
		})
	);

	return allPosts.filter(Boolean);
};

export async function GET() {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return Date.parse(b.meta.date) - Date.parse(a.meta.date);
	});

	return json(sortedPosts);
};
