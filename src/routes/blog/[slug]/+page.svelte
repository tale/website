<script lang="ts">
	import type { SvelteComponent } from "svelte";

	type Post = {
		title: string;
		date: string;
		category: string;
		content: typeof SvelteComponent;
	};

	export let data: Post;
	$: date = new Date(data.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
</script>

<article>
	<div class="header">
		<h1>{data.title}</h1>
		<p class="tagline">{date} — {data.category}</p>
	</div>
	<div class="content">
		<svelte:component this={data.content} class="content" />
	</div>
</article>

<style>
	.header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tagline {
		opacity: 0.5;
	}

	.content {
		display: flex;
		flex-direction: column;
		line-height: 1.5;
		gap: 1.5rem;
		font-size: 1.15rem;
		padding-bottom: 10vh;
	}

	.content :global(ul),
	.content :global(ol) {
		padding: 0 2rem;
	}

	.content :global(code) {
		background-color: #f4f4f4;
		padding: 0.1rem 0.2rem;
		border-radius: 0.35rem;
	}

	.content :global(img) {
		display: block;
		margin: 0 auto;
		max-width: 100%;
		text-align: center;
		border-radius: 0.35rem;
	}

	@media (prefers-color-scheme: dark) {
		.content :global(code) {
			background-color: #1e1e1e;
		}
	}
</style>
