<script lang="ts">
	export let category: string | undefined;
	export let name: string;
	export let active: boolean;
	import { goto } from "$app/navigation";
</script>

<button
	class="link"
	on:click={() => {
		if (category) {
			goto(`/blog?category=${category}`);
		} else {
			goto("/blog");
		}
	}}
>
	<div class={active ? "token active" : "token"}>
		{name}
	</div>
</button>

<style>
	.link {
		color: #444;
	}

	button {
		border: none;
		background-color: transparent;
	}

	@media (prefers-color-scheme: dark) {
		.link {
			color: #dedede;
		}
	}

	.token {
		margin: 4px auto;
		background-color: rgba(136, 136, 136, 0.15);
	}

	.active {
		background-color: rgba(136, 136, 136, 0.5);
	}

	.token:hover {
		background-color: rgba(136, 136, 136, 0.5);
	}
</style>
