<script lang="ts">
	import {
		siChakraui,
		siCloudflare,
		siCplusplus,
		siCsharp,
		siDocker,
		siExpress,
		siGit,
		siGnubash,
		siGooglecloud,
		siKubernetes,
		siLinux,
		siMongodb,
		siPassport,
		siPostgresql,
		siReact,
		siRedis,
		siSass,
		siSentry,
		siSvelte,
		siTypescript,
		siUbuntu,
		siVercel,
		siVisualstudiocode,
		siXcode,
	} from 'simple-icons/icons';

	const standouts = [
		{
			icon: siKubernetes.path,
			title: 'Kubernetes',
			level: 'CKA Certification',
			link: 'https://www.cncf.io/certification/cka/',
		},
		{
			icon: siTypescript.path,
			title: 'TypeScript/JavaScript',
			level: 'JSNAD Certification',
			link: 'https://training.linuxfoundation.org/certification/jsnad/',
		},
		{
			icon: siDocker.path,
			title: 'Docker (+Compose)',
			level: 'Expert',
		},
		{
			icon: siReact.path,
			title: 'React (+Router)',
			level: 'Expert',
		},
		{
			icon: siPostgresql.path,
			title: 'PostgreSQL',
			level: 'Advanced',
		},
	];

	const icons = [
		{ icon: siCsharp.path, title: 'C#/.NET' },
		{ icon: siCplusplus.path, title: 'C++' },
		{ icon: siChakraui.path, title: 'Chakra UI' },
		{ icon: siCloudflare.path, title: 'Cloudflare' },
		{ icon: siExpress.path, title: 'Express.js' },
		{ icon: siGit.path, title: 'Git' },
		{ icon: siGooglecloud.path, title: 'Google Cloud' },
		{ icon: siLinux.path, title: 'Linux' },
		{ icon: siMongodb.path, title: 'MongoDB' },
		{ icon: siPassport.path, title: 'Passport.js' },
		{ icon: siRedis.path, title: 'Redis' },
		{ icon: siSentry.path, title: 'Sentry' },
		{ icon: siGnubash.path, title: 'Shell' },
		{ icon: siSass.path, title: 'Sass' },
		{ icon: siSvelte.path, title: 'SvelteKit' },
		{ icon: siUbuntu.path, title: 'Ubuntu' },
		{ icon: siVercel.path, title: 'Vercel' },
		{ icon: siVisualstudiocode.path, title: 'VS Code' },
		{ icon: siXcode.path, title: 'Xcode (LLVM)' },
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
	I use a vast range of tools and technologies to build efficient, reliable systems and services. As a follower of
	cloud native computing, I've embraced containerization, microservices, high availability, and Kubernetes.
</p>

<p>
	Here are the technologies in which I express the highest proficiency. Some of these are paired with certifications
	I've earned from Linux Foundation and CNCF, while the others show my skill level.
</p>

<div class="grid">
	{#each standouts as standout}
		<div class="skill">
			<svg class="icon" height="24" width="32" fill="currentColor">
				<path d="{standout.icon}"></path>
			</svg>
			<div>
				<p class="skill-title no-wrap">{standout.title}</p>
				{#if standout.link}
					<a rel="external" href="{standout.link}">
						<p class="no-wrap">{standout.level}</p>
					</a>
				{:else}
					<p class="no-wrap">{standout.level}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<p>
	Additionally, I've worked with a variety of technologies, libraries, and programming languages. I'm constantly learning new things, some of which may replace the technologies below.
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
				<path d="{icon.icon}"></path>
			</svg>
		</div>
	{/each}
</div>
<span>({innerWidth <= 425 ? 'Tap on' : 'Hover over'} each icon to see the technology's name)</span>

<style>
	.no-wrap {
		white-space: nowrap;
	}

	span {
		font-size: small;
		text-align: center;
		color: gray;
	}

	.tooltip {
		margin-top: 5rem;
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

	.skill {
		display: flex;
		align-items: center;
		padding: 0px 1rem 0px 1rem;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
