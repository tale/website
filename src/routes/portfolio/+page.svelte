<script lang="ts">
	import Roles from "$lib/components/Roles.svelte";
	import Technologies from "$lib/components/Technologies.svelte";
</script>

<div>
	<Roles />
	<hr />
	<Technologies />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}
</style>
