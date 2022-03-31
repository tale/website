<script>
	import Header from '$lib/Header.svelte';
	import ProjectsCard from '$lib/ProjectsCard.svelte';
	import InfoCard from '$lib/InfoCard.svelte';
	import ToolsCard from '$lib/ToolsCard.svelte';
	import LinksCard from '$lib/LinksCard.svelte';
</script>

<div>
	<Header />
	<div class="presenter">
		<InfoCard />
		<LinksCard />
	</div>
	<div class="presenter">
		<ProjectsCard />
		<ToolsCard />
	</div>
</div>

<style>
	.presenter {
		display: flex;
		column-gap: 8px;
		justify-content: center;
		padding: 0px 8px 8px 8px;
	}

	@media (max-device-width: 480px) {
		.presenter {
			flex-direction: column;
			padding: 0px;
		}
	}
</style>
