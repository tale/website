<script lang="ts">
	import "@fontsource/dm-serif-display";
	import { page } from "$app/stores";
	import RouteLink from "./RouteLink.svelte";
	const links = ["/", "/portfolio", "/donate"];
</script>

<div class="header">
	<div class="flex">
		{#each links as link}
			<RouteLink route={link} active={$page.url.pathname === link} />
		{/each}
	</div>
	<h1>Aarnav Tale</h1>
</div>

<style>
	h1 {
		font-size: xx-large;
		font-family: "DM Serif Display", serif;
		font-size: 3rem;
	}

	.header {
		display: flex;
		flex-direction: column;
	}

	.flex {
		display: flex;
		align-items: center;
		column-gap: 20px;
	}

	@media (max-device-width: 425px) {
		h1 {
			font-size: 2rem;
		}

		.header {
			flex-direction: column-reverse;
		}

		.flex {
			column-gap: 8px;
		}
	}
</style>
