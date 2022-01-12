<script lang="ts">
	import Card from '$lib/Card.svelte';
	const projects = [
		{
			name: 'Chariz',
			description: 'A payments processing platform and marketplace for app developers',
			link: 'https://chariz.com',
		},
		{
			name: 'Canister',
			description: 'A high-speed search engine created for Jailbreaking.',
			link: 'https://canister.me',
		},
		{
			name: 'Zebra',
			description: 'A package manager for Jailbroken iOS devices.',
			link: 'https://github.com/Zbrateam/Zebra'
		},
		{
			name: 'Iconset',
			description: 'A nifty command line tool to manage macOS icons.',
			link: 'https://github.com/tale/iconset'
		},
		{
			name: 'bruh',
			description: 'A drop-in replacement for brew on macOS.',
		},
	];
</script>

<Card>
	<h2>Latest Projects</h2>
	<hr />
	<div class="table">
		{#each projects as project}
			<div class="column">
				{#if project.link}
					<span>
						<a href="{project.link}" id="title">
							{project.name}:
						</a>
						{project.description}
					</span>
				{:else}
					<span>
						<span id="title">{project.name}</span>: {project.description}
					</span>
				{/if}
			</div>
		{/each}
	</div>
</Card>

<style>
	.table {
		display: flex;
		flex-direction: column;
		max-width: 25vw;
	}

	.column {
		flex: 50%;
		margin: 8px;
		overflow-x: hidden;
		display: inline-flex;
	}

	#title {
		font-weight: bolder;
	}

	@media (max-device-width: 480px) {
		.table {
			max-width: initial;
		}
	}
</style>
