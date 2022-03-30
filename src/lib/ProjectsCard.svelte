<script lang="ts">
	import Card from '$lib/Card.svelte';
	const projects = [
		{
			name: 'Canister',
			description: 'A very powerful search engine created for software.',
			link: 'https://canister.me',
		},
		{
			name: 'Chariz',
			description: 'A payments processing platform and marketplace for app developers.',
			link: 'https://chariz.com',
		},
		{
			name: 'Zebra',
			description: 'A reliable package manager for Jailbroken iOS devices.',
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
	<h2>Notable Projects</h2>
	<hr />
	<div class="table">
		{#each projects as project}
			<div class="project">
				{#if project.link}
					<p>
						<a href="{project.link}" id="title">
							<strong>{project.name}</strong>:
						</a>
						{project.description}
					</p>
				{:else}
					<p>
						<strong>{project.name}</strong>: {project.description}
					</p>
				{/if}
			</div>
		{/each}
	</div>
</Card>

<style>
	.project {
		margin-bottom: 8px;
	}

	.table {
		padding-top: 6px;
	}
</style>
