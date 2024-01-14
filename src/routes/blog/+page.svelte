<script lang="ts">
	import Chip from "$lib/Chip.svelte";
	import { page } from "$app/stores";

	type Post = {
		path: string;
		meta: {
			title: string;
			date: string;
			category: { name: string; slug: string };
		};
	};

	export let data: { posts: Post[] };

	$: query = $page.url.searchParams.get("category") || "";
	$: date = new Date().toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const categories = [
		{ name: "All", slug: "" },
		...new Set(data.posts.map((post) => post.meta.category)),
	];
</script>

<div>
	{#if data.posts.length === 0}
		<p>No posts yet, check back later!</p>
	{:else}
		<p>
			My blogposts are categorized by topic, clicking on a topic will
			filter the posts by that topic.
		</p>

		<div class="flex">
			{#each categories as category}
				<Chip
					name={category.name}
					active={category.slug === query}
					category={category.slug}
				/>
			{/each}
		</div>

		{#each data.posts as post}
			<a href={`/blog/${post.path}`} class="header">
				<h2>{post.meta.title}</h2>
				<p class="tagline">{date} — {post.meta.category.name}</p>
				<span class="link">Read more...</span>
			</a>
		{/each}
	{/if}
</div>

<style>
	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		color: inherit;
		text-decoration: inherit;
		font-weight: inherit;
	}

	div {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
		width: max-content;
	}

	.flex {
		display: flex;
		flex-direction: row;
		column-gap: 8px;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tagline {
		opacity: 0.5;
	}

	.link:hover {
		text-decoration: underline;
	}
</style>
