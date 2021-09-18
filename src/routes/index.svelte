<script>
	import AboutCard from "$lib/AboutCard.svelte";
	import ContactCard from "$lib/ContactCard.svelte";
	import LinksCard from "$lib/LinksCard.svelte";
	import ProjectsCard from "$lib/ProjectsCard.svelte";
	import TechnologiesCard from "$lib/TechnologiesCard.svelte";
</script>

<div class="root">
	<div id="presenter">
		<AboutCard />
		<ContactCard />
		<LinksCard />
	</div>
	<div id="presenter">
		<TechnologiesCard />
		<ProjectsCard />
	</div>
</div>

<style>
	.root {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#presenter {
		display: flex;
	}

	@media (max-device-width: 480px) {
		#presenter {
			display: inline-block;
		}
	}
</style>
