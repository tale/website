<script lang="ts">
	import {
		siElastic,
		siRust,
		siSwift,
		siTailwindcss,
		siOpenjdk,
		siC,
		siKubernetes,
		siTypescript,
		siDocker,
		siReact,
		siCplusplus,
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
	} from "simple-icons";

	const standouts = [
		{
			icon: siKubernetes,
			title: "Kubernetes",
			experience:
				"3 years of experience, including a fully self-managed bare-metal cluster.",
		},
		{
			icon: siTypescript,
			title: "TypeScript",
			experience:
				"7 years of experience building out highly performant system backends.",
		},
		{
			icon: siDocker,
			title: "Docker (Compose)",
			experience:
				"4 years of experience building secure and optimized applications.",
		},
		{
			icon: siReact,
			title: "React",
			experience:
				"5 years of experience building complex enterprise-grade web applications.",
		},
		{
			icon: siSwift,
			title: "Swift & Objective-C",
			experience:
				"3 years of iOS development experience and low-level runtime modification.",
		},
		{
			icon: siCplusplus,
			title: "C++",
			experience:
				"4 years of experience, including a deep understanding of the Qt framework.",
		},
	];

	const icons = [
		{ icon: siRust, title: "Rust" },
		{ icon: siGit, title: "Git" },
		{ icon: siPostgresql, title: "PostgreSQL" },
		{ icon: siOpenjdk, title: "Java" },
		{ icon: siChakraui, title: "Chakra UI" },
		{ icon: siSvelte, title: "Svelte/SvelteKit" },
		{ icon: siVercel, title: "Vercel/Next.js" },
		{ icon: siTailwindcss, title: "Tailwind CSS" },
		{ icon: siC, title: "C" },
		{ icon: siMongodb, title: "MongoDB" },
		{ icon: siTimescale, title: "TimescaleDB" },
		{ icon: siClickhouse, title: "ClickHouse" },
		{ icon: siElastic, title: "Elasticsearch" },
		{ icon: siXcode, title: "Xcode (LLVM)" },
		{ icon: siRedis, title: "Redis" },
	].map(({ icon, title }) => {
		return {
			icon,
			title,
			visible: false,
		};
	});

	let innerWidth = 100000;
</script>

<svelte:window bind:innerWidth />

<h2>Technologies</h2>
<p>
	I use a vast range of tools and technologies to build efficient, reliable
	systems and services. As a follower of cloud native computing, I've embraced
	containerization, microservices, high availability, and Kubernetes.
</p>

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
				<p>{standout.experience}</p>
			</div>
		</div>
	{/each}
</div>

<p class="center">
	These are some of the technologies I've interacted with before, but not
	necessarily in-depth. They're generally ordered in terms of how well-versed
	I am in each of them.
</p>
<div class="table">
	{#each icons as icon}
		<div
			class="padded-svg"
			on:mouseenter={() => (icon.visible = true)}
			on:mouseleave={() => (icon.visible = false)}
		>
			{#if icon.visible}
				<div class="token tooltip">
					{icon.title}
				</div>
			{/if}
			<svg height="24" width="32" fill="currentColor">
				<path d={icon.icon.path} />
			</svg>
		</div>
	{/each}
</div>
<span
	>(Tip: {innerWidth <= 425 ? "Tap on" : "Hover over"} icons to see their names)</span
>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 8px;
		column-gap: 24px;
		margin: 1rem;
	}

	.tooltip {
		visibility: hidden;
		margin-top: 4rem;
		position: absolute;
		background-color: rgba(136, 136, 136, 0.5);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);
	}

	.padded-svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 24px;
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

	h2 {
		font-family: "DM Serif Display", serif;
	}

	span {
		font-size: small;
		text-align: center;
		color: gray;
	}

	.center {
		text-align: center;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	@media (max-device-width: 425px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.tooltip {
			margin-top: 4rem;
		}
	}
</style>
