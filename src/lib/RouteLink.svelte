<script lang="ts">
	export let route: string;
	export let active: boolean;
</script>

<a href={route} class="link">
	<div class={active ? "token active" : "token"}>
		{route === "/" ? "/home" : route}
	</div>
</a>

<style>
	.link {
		color: #444;
	}

	@media (prefers-color-scheme: dark) {
		.link {
			color: #dedede;
		}
	}

	.token {
		margin: 4px auto;
	}

	.active {
		background-color: rgba(136, 136, 136, 0.5);
	}

	.token:hover {
		background-color: rgba(136, 136, 136, 0.15);
	}
</style>
