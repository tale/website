<script lang="ts">
	import {
		siKubernetes,
		siPostgresql,
		siPrisma,
		siRust,
		siSwift,
		siTypescript,
		siXcode,
		siGithubactions,
		siHomebrew,
		siIos,
	} from "simple-icons";

	const projects = [
		{
			name: "Canister",
			icons: [siRust, siTypescript, siPostgresql, siKubernetes],
			description:
				"High-speed search engine and indexer for APT repositories, written in Rust.",
			link: "https://canister.me",
		},
		{
			name: "kubectl-action",
			icons: [siTypescript, siGithubactions],
			description:
				"A GitHub Action to interact with Kubernetes clusters using the kubectl CLI.",
			link: "https://github.com/tale/kubectl-action",
		},
		{
			name: "iconset",
			icons: [siSwift, siXcode],
			description:
				"A nifty command-line tool to automatically set custom icons for macOS apps.",
			link: "https://github.com/tale/iconset",
		},
		{
			name: "Chariz",
			icons: [siTypescript, siPostgresql, siPrisma],
			description:
				"External payment platform for iOS developers to monetize their products.",
			link: "https://chariz.com",
		},
		{
			name: "Lyricify",
			icons: [siSwift, siIos],
			description:
				"View lyrics to your favorite songs directly from your iPhone's lock screen.",
			link: "https://chariz.com/buy/lyricify",
		},
		{
			name: "bruh",
			icons: [siTypescript, siHomebrew],
			description:
				"A drop-in replacement for homebrew on macOS that runs up to 100x faster.",
			link: "https://github.com/tale/bruh",
		},
	];
</script>

<h2>Current Projects</h2>

<p>
	I'm always utilizing my skillset across a handful of projects at once. I've
	even created products with teams of developers from around the world. My
	most notable projects are listed below.
</p>

<div class="grid">
	{#each projects as project}
		<div>
			{#if project.link}
				<a href={project.link}>
					<div class="flex">
						<span>{project.name}</span>
						<div class="icons">
							{#each project.icons as icon}
								<svg
									name={icon.title}
									height="20"
									width="20"
									fill="currentColor"
									viewBox="0 -6 24 32"
								>
									<path d={icon.path} />
								</svg>
							{/each}
						</div>
					</div>
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
	h2 {
		font-family: "DM Serif Display", serif;
	}

	span {
		font-style: oblique;
		display: flex;
	}

	.flex {
		display: flex;
		align-items: center;
		column-gap: 24px;
	}

	.icons {
		display: flex;
		align-items: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 8px;
		column-gap: 24px;
		margin: 0 1rem;
	}

	@media (max-device-width: 425px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
