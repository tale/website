<script lang="ts">
	import Card from '$lib/Card.svelte';
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
		siJava,
		siKotlin,
		siKubernetes,
		siLinux,
		siMongodb,
		siNodedotjs,
		siPassport,
		siPostgresql,
		siReact,
		siRedhat,
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
			level: 'CKA',
			link: 'https://www.cncf.io/certification/cka/',
		},
		{
			icon: siTypescript.path,
			title: 'TypeScript/JavaScript',
			level: 'JSNAD',
			link: 'https://training.linuxfoundation.org/certification/jsnad/',
		},
		{
			icon: siDocker.path,
			title: 'Docker',
			level: 'Mastery',
		},
		{
			icon: siReact.path,
			title: 'React',
			level: 'Mastery',
		},
		{
			icon: siPostgresql.path,
			title: 'PostgreSQL',
			level: 'Advanced',
		},
		{
			icon: siXcode.path,
			title: 'Xcode (LLVM)',
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
		{ icon: siJava.path, title: 'Java' },
		{ icon: siKotlin.path, title: 'Kotlin' },
		{ icon: siLinux.path, title: 'Linux' },
		{ icon: siMongodb.path, title: 'MongoDB' },
		{ icon: siPassport.path, title: 'Passport.js' },
		{ icon: siRedhat.path, title: 'RHEL' },
		{ icon: siRedis.path, title: 'Redis' },
		{ icon: siSentry.path, title: 'Sentry' },
		{ icon: siGnubash.path, title: 'Shell' },
		{ icon: siSass.path, title: 'Sass' },
		{ icon: siSvelte.path, title: 'SvelteKit' },
		{ icon: siUbuntu.path, title: 'Ubuntu' },
		{ icon: siVercel.path, title: 'Vercel' },
		{ icon: siVisualstudiocode.path, title: 'VS Code' }
	].map(({ icon, title }) => {
		return {
			icon,
			title,
			visible: false,
		};
	});
</script>

<Card>
	<h2>Technologies</h2>
	<hr />
	<p class="intro">
		I've come across many different tools and technologies in my work. My strongest ones have a certification/mastery level.
	</p>

	<div>
		{#each standouts as standout}
			<div class="skill">
				<svg class="icon" height="32" width="32" fill="currentColor">
					<path d="{standout.icon}"></path>
				</svg>
				<div class="skill-stack">
					<p class="skill-title">{standout.title}</p>
					{#if standout.link}
						<a rel="external" href="{standout.link}">
							<p>{standout.level}</p>
						</a>
					{:else}
						<p>{standout.level}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
	<hr />
	<div class="table">
		{#each icons as icon}
			<div
				class="padded-svg"
				on:mouseenter="{() => (icon.visible = true)}"
				on:mouseleave="{() => (icon.visible = false)}"
			>
				<svg class="icon" height="32" width="32" fill="currentColor">
					<path d="{icon.icon}"></path>
				</svg>
				{#if icon.visible}
					<div class="tooltip">
						{icon.title}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</Card>

<style>
	.tooltip {
		padding: 8px;
		margin-top: 60px;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		border-radius: 0.5rem;
		color: white;
		border: 1px solid rgba(0, 0, 0, 0, 0.95);
		background-color: rgba(0, 0, 0, 0.85);
		position: absolute;
	}

	.skill {
		display: flex;
		align-items: center;
	}

	.padded-svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
	}

	.skill-title {
		display: flex;
		align-items: center;
		margin-right: 16px;
		/* justify-content: center; */
	}
	.icon {
		display: block;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.skill-stack {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%
	}
</style>
