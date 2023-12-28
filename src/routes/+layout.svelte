<script lang="ts">
	import Header from "$lib/Header.svelte";
	import { fly, fade } from "svelte/transition";

	export let data: { url: string };
</script>

<div id="background" />
<div class="container">
	<div class="layout">
		<Header />
		<hr />
		{#key data.url}
			<div
				in:fly={{ x: -200, duration: 150, delay: 100 }}
				out:fade={{ duration: 100 }}
			>
				<slot />
			</div>
		{/key}
	</div>
</div>

<style>
	@font-face {
		font-family: "Sohne";
		font-style: oblique;
		src: url("/Sohne-Halbfett.woff2");
	}

	@font-face {
		font-family: "Sohne";
		font-style: normal;
		src: url("/Sohne-Buch.woff2");
	}

	:global(html),
	:global(body) {
		font-family: "Sohne", sans-serif;
		color: #444;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(hr) {
		border: 0.75px solid #444;
		margin: 8px 0px 8px 0px;
	}

	:global(a) {
		color: inherit;
	}

	:global(.table) {
		display: flex;
		flex-direction: column;
		row-gap: 2px;
		padding-top: 8px;
		padding-bottom: 8px;
	}

	:global(.token) {
		border-radius: 2em;
		min-width: 28px;
		line-height: 28px;
		text-align: center;
		padding: 0 8px;
		transition: background-color 0.25s ease, color 0.25s ease;
	}

	.layout {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
		padding: 16px;
		max-width: 46rem;
		width: auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#background {
		position: fixed;
		height: 200%;
		width: 100%;
		z-index: -1;
	}

	@media (prefers-color-scheme: dark) {
		:global(html),
		:global(body) {
			color: #dedede;
		}
	}
</style>
