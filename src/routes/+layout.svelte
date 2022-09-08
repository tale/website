<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<div id="background"></div>
<div class="container">
	<div class="layout">
		<Header />
		<hr />
		<slot />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Sohne';
		font-style: oblique;
		src: url('/Sohne-Halbfett.woff2');
	}

	@font-face {
		font-family: 'Sohne';
		font-style: normal;
		src: url('/Sohne-Buch.woff2');
	}

	:global(html),
	:global(body) {
		font-family: 'Sohne', sans-serif;
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
		row-gap: 16px;
		padding: 16px;
		max-width: 46rem;
		width: auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* margin-bottom: 4rem; */
	}

	#background {
		background-color: rgb(230, 244, 252);
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: -1;
	}

	@media (prefers-color-scheme: dark) {
		:global(html),
		:global(body) {
			background-color: black;
			color: #dedede;
		}

		#background {
			background-color: black;
		}
	}

	:global(.grid) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 8px;
		column-gap: 8px;
		margin: 0 1rem;
	}

	@media (max-device-width: 600px) {
		:global(.grid) {
			grid-template-columns: repeat(2, 1fr);
			row-gap: 4px;
		}
	}

	@media (max-device-width: 425px) {
		:global(.grid) {
			grid-template-columns: 1fr;
			row-gap: 4px;
		}
	}
</style>
