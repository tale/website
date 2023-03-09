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
		background-color: #efe9e7;
		position: fixed;
		height: 200%;
		width: 100%;
		z-index: -1;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	@media (prefers-color-scheme: dark) {
		:global(html),
		:global(body) {
			color: #dedede;
		}

		#background {
			background-color: #001f3f;
		}
	}

	:global(.grid) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
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
