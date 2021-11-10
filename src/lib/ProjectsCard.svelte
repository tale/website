<script lang="ts">
	import Card from '$lib/Card.svelte';
	const projects = [
		{
			name: 'Chariz',
			description: 'A payments processing platform and marketplace for app developers',
			link: 'https://chariz.com',
		},
		{
			name: 'Lyricify',
			description: 'A lockscreen extension to view song lyrics on your iPhone',
			link: 'https://chariz.com/buy/lyricify',
		},
		{
			name: 'bruh',
			description: 'A replacement to the CLI provided by homebrew (brew.sh)',
			link: 'https://github.com/tale/bruh',
		},
		{
			name: 'Canister',
			description: 'A search engine for packages used by the iOS Jailbreaking community',
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
						<a href="https://chariz.com/buy/lyricify" id="title">
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
