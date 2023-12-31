<script lang="ts">
	import {
		siElastic,
		siRust,
		siTailwindcss,
		siOpenjdk,
		siC,
		siKubernetes,
		siTypescript,
		siDocker,
		siReact,
		siGit,
		siPostgresql,
		siChakraui,
		siSvelte,
		siVercel,
		siMongodb,
		siXcode,
		siRedis,
		siTimescale,
		siClickhouse,
		siAmazonaws,
	} from "simple-icons";

	const standouts = [
		{
			icon: siTypescript,
			title: "TypeScript",
			experience: 8,
		},
		{
			icon: siC,
			title: "C/C++",
			experience: 5,
		},
		{
			icon: siReact,
			title: "React",
			experience: 6,
		},
		{
			icon: siKubernetes,
			title: "Kubernetes",
			experience: 3,
		},
		{
			icon: siDocker,
			title: "Docker (Compose)",
			experience: 5,
		},
		{
			icon: siAmazonaws,
			title: "AWS",
			experience: 2,
		},
	];

	const icons = [
		siRust,
		siGit,
		siPostgresql,
		siOpenjdk,
		siChakraui,
		siSvelte,
		siVercel,
		siTailwindcss,
		siMongodb,
		siTimescale,
		siClickhouse,
		siElastic,
		siXcode,
		siRedis,
	];

	let innerWidth = 100000;
</script>

<svelte:window bind:innerWidth />

<h2>Technologies</h2>

<div class="grid">
	{#each standouts as standout}
		<div class="skill">
			<div>
				<svg class="icon" height="24" width="32" fill="currentColor">
					<path d={standout.icon.path} />
				</svg>
			</div>
			<div>
				<p class="skill-title">{standout.title}</p>
				<p>{standout.experience}+ Years</p>
			</div>
		</div>
	{/each}
</div>

<div class="table">
	{#each icons as icon}
		<div class="padded-svg" role="tooltip" aria-label={icon.title}>
			<div class="token tooltip">
				{icon.title}
			</div>
			<svg height="24" width="24" fill="currentColor">
				<path d={icon.path} />
			</svg>
		</div>
	{/each}
</div>
<span
	>(Tip: {innerWidth <= 480 ? "Tap on" : "Hover over"} icons to see their names)</span
>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		row-gap: 8px;
		column-gap: 24px;
		margin: 1rem;
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
		margin: 0.25rem;
	}

	.padded-svg:hover .tooltip {
		visibility: visible;
	}

	.skill {
		display: flex;
		align-items: center;
		column-gap: 8px;
	}

	.skill-title {
		font-weight: bold;
	}

	span {
		font-size: small;
		margin-left: 1rem;
		color: gray;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		margin-left: 1rem;
		align-items: center;
	}

	@media (max-device-width: 480px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.tooltip {
			margin-bottom: 4rem;
		}
	}
</style>
