<script lang="ts">
	import { page } from '$app/stores';
	import RouteLink from './RouteLink.svelte';
	const links = ['/', '/portfolio'];

	let innerWidth = 100000;
	let isDropped = false;
</script>

<svelte:window bind:innerWidth />

<div>
	{#if innerWidth <= 425}
	<div class="flex">
		<button on:click={() => isDropped = !isDropped}>
			<svg fill="currentColor" width="20" height="15" viewBox="0 0 20 15">
				<path d="M 20 3 h -20 v -3 h 20 v 4 z m 0 3 h -20 v 3 h 20 v -4 z m 0 6 h -20 v 3 h 20 v -4 z"></path>
			</svg>
		</button>
		<h1>Aarnav Tale</h1>
	</div>

	{#if isDropped}
		<div style="padding-top: 1rem;">
			{#each links as link}
				<RouteLink route="{link}" active="{$page.url.pathname === link}" />
			{/each}
		</div>
	{/if}
{:else}
	<div class="flex">
		{#each links as link}
			<RouteLink route="{link}" active="{$page.url.pathname === link}" />
		{/each}
	</div>
	<h1 style="padding-top: 1rem;">Aarnav Tale</h1>
{/if}
</div>

<style>
	button {
		border: none;
		background: none;
		padding: 4px;
		margin-top: 8px;
	}

	button:hover {
		background-color: rgba(136, 136, 136, 0.15);
	}

	h1 {
		font-size: xx-large;
		font-style: oblique;
	}

	.flex {
		display: flex;
		align-items: center;
		column-gap: 24px;
	}
</style>
