<script lang="ts">
	const projects = [
		{
			name: 'Canister',
			description: 'Scalable search engine for packages on Debian/APT repositories.',
			link: 'https://canister.me',
		},
		{
			name: 'Chariz',
			description: 'External payment platform for iOS developers to monetize their products.',
			link: 'https://chariz.com',
		},
		{
			name: 'Iconset',
			description: 'Command line tool to manage application icons on macOS.',
			link: 'https://github.com/tale/iconset',
		},
		{
			name: 'kubectl-action',
			description: 'A GitHub Action allowing you to manage a K8s cluster from the command line.',
			link: 'https://github.com/tale/kubectl-action',
		},
		{
			name: 'Lyricify',
			description: "Let's a user view song lyrics from any music app on their iPhone lock screen.",
			link: 'https://chariz.com/buy/lyricify',
		},
		{
			name: 'bruh',
			description: 'A replacement for homebrew on macOS that performs 10x faster.',
			link: 'https://github.com/tale/bruh'
		},
	];
</script>

<h2>Current Projects</h2>

<p>
	I'm always utilizing my skillset across a handful of projects at once. I've even created products with teams of
	developers from around the world. My most notable projects are listed below.
</p>

<div class="grid">
	{#each projects as project}
		<div>
			{#if project.link}
				<a href="{project.link}">
					<span>{project.name}</span>
				</a>
				<p>{project.description}</p>
			{:else}
				<span>{project.name}</span>
				<p>{project.description}</p>
			{/if}
		</div>
	{/each}
</div>

<style>
	span {
		font-style: oblique;
	}
</style>
