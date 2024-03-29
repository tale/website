<script lang="ts">
	import {
		siKubernetes,
		siPostgresql,
		siRust,
		siSwift,
		siTypescript,
		siXcode,
		siGithubactions,
		siHomebrew,
		siMongodb,
		siC,
		siOpengl,
		siCmake,
	} from "simple-icons";

	const projects = [
		{
			name: "Canister",
			icons: [siRust, siTypescript, siPostgresql, siKubernetes],
			description:
				"High speed search engine and analytics aggregator for iOS APT repositories.",
			link: "https://canister.me",
		},
		{
			name: "kubectl-action",
			icons: [siTypescript, siGithubactions],
			description:
				"A GitHub Action to interact with Kubernetes clusters via kubectl.",
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
			name: "trap2",
			icons: [siC, siOpengl, siCmake],
			description:
				"GPU accelerated state-machine terminal emulator for macOS.",
			link: "https://github.com/tale/trap2",
		},
		{
			name: "bruh",
			icons: [siTypescript, siHomebrew],
			description:
				"A drop-in replacement for homebrew on macOS that runs up to 100x faster.",
			link: "https://github.com/tale/bruh",
		},
		{
			name: "Chariz",
			icons: [siTypescript, siPostgresql, siMongodb, siKubernetes],
			description:
				"Enabling developers to easily distribute and sell their software worldwide.",
			link: "https://chariz.com",
		},
	];
</script>

<h2>Public Projects</h2>

<div class="grid">
	{#each projects as project}
		<div class="card">
			{#if project.link}
				<div class="flex">
					<a href={project.link}>
						<span>{project.name}</span>
					</a>
					<div class="icons">
						{#each project.icons as icon}
							<div
								class="padded-svg"
								role="tooltip"
								aria-label={icon.title}
							>
								<div class="token tooltip">
									{icon.title}
								</div>
								<svg
									name={icon.title}
									height="20"
									width="20"
									fill="currentColor"
									viewBox="0 -6 24 32"
								>
									<path d={icon.path} />
								</svg>
							</div>
						{/each}
					</div>
				</div>
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
		display: flex;
	}

	.tooltip {
		visibility: hidden;
		margin-bottom: 4rem;
		position: absolute;
		background-color: rgba(136, 136, 136, 0.5);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);
	}

	.padded-svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
	}

	.padded-svg:hover .tooltip {
		visibility: visible;
	}

	.flex {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 24px;
		margin-bottom: 0.5rem;
	}

	.icons {
		display: flex;
		align-items: center;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		margin: 0 1rem;
	}

	.card {
		padding: 0.5rem;
	}

	@media (max-device-width: 480px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
