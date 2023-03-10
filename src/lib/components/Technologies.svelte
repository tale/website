<script lang="ts">
    import { siElastic, siRust, siSwift, siTailwindcss, siOpenjdk, siC, siPython } from 'simple-icons';
	import {
		siChakraui,
		siCplusplus,
		siCsharp,
		siDocker,
		siExpress,
		siGit,
		siGnubash,
		siKubernetes,
		siMongodb,
		siPassport,
		siPostgresql,
		siReact,
		siRedis,
		siSass,
		siSvelte,
		siTypescript,
		siUbuntu,
		siVercel,
		siXcode,
	} from 'simple-icons/icons';

	const standouts = [
		{
			icon: siKubernetes,
			title: 'Kubernetes',
			experience: '2 years of experience running a bare-metal cluster with high availability to host my own services.',
		},
		{
			icon: siTypescript,
			title: 'TypeScript (Node.js)',
			experience: '6 years of experience, utilizing many different libraries like Express, Passport, and Prisma.',
		},
		{
			icon: siDocker,
			title: 'Docker (Compose)',
			experience: '3 years of experience and widespread usage of Docker Compose for development environments.',
		},
		{
			icon: siReact,
			title: 'React',
			experience: '4 years of experience, using many popular frameworks like Next.js, Chakra UI, and Tailwind CSS.',
		},
		{
			icon: siSwift,
			title: 'Swift & Objective-C',
			experience: '3 years of iOS development experience, including building runtime modification tweaks like Lyricify.',
		},
		{
			icon: siRust,
			title: 'Rust',
			experience: '6 months of experience, learning the language and recently switched Canister to Rust from Node.js.',
		}
	];

	const icons = [
		{ icon: siCplusplus, title: 'C++ (Qt5)' },
		{ icon: siGit, title: 'Git' },
		{ icon: siPostgresql, title: 'PostgreSQL' },
		{ icon: siChakraui, title: 'Chakra UI' },
		{ icon: siSvelte, title: 'SvelteKit' },
		{ icon: siVercel, title: 'Vercel/Next.js' },
		{ icon: siTailwindcss, title: 'Tailwind CSS' },
		{ icon: siExpress, title: 'Express.js' },
		{ icon: siUbuntu, title: 'Ubuntu' },
		{ icon: siMongodb, title: 'MongoDB' },
		{ icon: siElastic, title: 'Elasticsearch' },
		{ icon: siXcode, title: 'Xcode (LLVM)' },
		{ icon: siOpenjdk, title: 'Java/Kotlin' },
		{ icon: siC, title: 'C' },
		{ icon: siRedis, title: 'Redis' },
		{ icon: siPassport, title: 'Passport.js' },
		{ icon: siPython, title: 'Python 3' },
		{ icon: siGnubash, title: 'Bash/Zsh' },
		{ icon: siCsharp, title: 'C#/.NET/Mono' },
		{ icon: siSass, title: 'Sass' },
	].map(({ icon, title }) => {
		return {
			icon,
			title,
			visible: false,
		};
	});

	let innerWidth = 100000;
</script>

<svelte:window bind:innerWidth="{innerWidth}" />

<h2>Technologies</h2>
<p>
	I use a vast range of tools and technologies to build efficient, reliable systems and services. As a follower of
	cloud native computing, I've embraced containerization, microservices, high availability, and Kubernetes.
</p>

<div class="grid">
	{#each standouts as standout}
		<div class="skill">
			<div>
				<svg class="icon" height="24" width="32" fill="currentColor">
					<path d={standout.icon.path}></path>
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
	These are some of the technologies I've interacted with before, but not necessarily in-depth.
	They're generally ordered in terms of how well-versed I am in each of them.
</p>
<div class="table">
	{#each icons as icon}
		<div
			class="padded-svg"
			on:mouseenter="{() => (icon.visible = true)}"
			on:mouseleave="{() => (icon.visible = false)}"
		>
			{#if icon.visible}
				<div class="token tooltip">
					{icon.title}
				</div>
			{/if}
			<svg height="24" width="32" fill="currentColor">
				<path d={icon.icon.path}></path>
			</svg>
		</div>
	{/each}
</div>
<span>(Tip: {innerWidth <= 425 ? 'Tap on' : 'Hover over'} icons to see their names)</span>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 16px;
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

	@media (max-device-width: 425px) {
		.tooltip {
			margin-top: 4rem;
		}
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
		font-family: 'DM Serif Display', serif;
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
	}
</style>
