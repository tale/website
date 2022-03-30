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
<!-- <AboutCard /> -->

<!-- <div id="presenter">

		<LinksCard />
	</div>
	<div id="presenter">
		<TechnologiesCard />
		<ProjectsCard />
	</div> -->
<style>
	.presenter {
		display: flex;
		column-gap: 8px;
		margin: 8px;
	}

	@media (max-device-width: 480px) {
		.presenter {
			flex-direction: column;
			margin: 0px;
		}
	}
</style>
