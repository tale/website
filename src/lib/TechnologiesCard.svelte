<script lang="ts">
	import {
		siCloudflare,
		siCplusplus,
		siDocker,
		siExpress,
		siGit,
		siGnubash,
		siJava,
		siKubernetes,
		siLinux,
		siMongodb,
		siNodedotjs,
		siPassport,
		siPostgresql,
		siReact,
		siRedis,
		siSvelte,
		siTypescript,
		siUbuntu
	} from 'simple-icons/icons'

	import Card from '$lib/Card.svelte';

	const standout = [
		{ icon: siKubernetes.path, title: 'Kubernetes' },
		{ icon: siTypescript.path, title: 'TypeScript' },
		{ icon: siCplusplus.path, title: 'C++' },
		{ icon: siDocker.path, title: 'Docker' },
	];

	const icons = [
		{ icon: siCloudflare.path, title: 'Cloudflare' },
		{ icon: siExpress.path, title: 'Express.js' },
		{ icon: siGit.path, title: 'Git' },
		{ icon: siGnubash.path, title: 'Shell' },
		{ icon: siJava.path, title: 'Java' },
		{ icon: siLinux.path, title: 'Linux' },
		{ icon: siMongodb.path, title: 'MongoDB' },
		{ icon: siNodedotjs.path, title: 'Node.js' },
		{ icon: siPassport.path, title: 'Passport.js' },
		{ icon: siPostgresql.path, title: 'PostgreSQL' },
		{ icon: siReact.path, title: 'React' },
		{ icon: siRedis.path, title: 'Redis' },
		{ icon: siSvelte.path, title: 'SvelteKit' },
		{ icon: siUbuntu.path, title: 'Ubuntu' },
	];
</script>

<Card>
	<h2>Skillsets</h2>
	<hr />
	<div class="table">
		<div class="column">
			{#each standout.splice(0, Math.ceil(standout.length / 2)) as { icon, title }}
				<div class="skill">
					<div class="padded-svg">
						<svg class="icon" height="32" width="32" fill="currentColor">
							<path d="{icon}"></path>
						</svg>
					</div>
					<span class="skill-title">{title}</span>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each standout as { icon, title }}
				<div class="skill">
					<div class="padded-svg">
						<svg class="icon" height="32" width="32" fill="currentColor">
							<path d="{icon}"></path>
						</svg>
					</div>
					<span class="skill-title">{title}</span>
				</div>
			{/each}
		</div>
	</div>
	<hr />
	<div class="table">
		<div class="column">
			{#each icons.splice(0, Math.ceil(icons.length / 2)) as { icon, title }}
			<div class="skill">
				<svg class="icon" height="32" width="32" fill="currentColor">
					<path d={icon}></path>
				</svg>
				<span class="skill-title">{title}</span>
			</div>
			{/each}
		</div>
		<div class="column">
			{#each icons as { icon, title }}
			<div class="skill">
				<svg class="icon" height="32" width="32" fill="currentColor">
					<path d="{icon}"></path>
				</svg>
				<span class="skill-title">{title}</span>
			</div>
			{/each}
		</div>
	</div>
</Card>

<style>
	.skill {
		display: flex;
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
	}

	.column {
		flex: 50%;
		margin-left: 10px;
		margin-right: 10px;
		overflow-x: hidden;
	}

	@media (max-device-width: 480px) {
		.column {
			margin-left: 2px;
			margin-right: 2px;
		}

		span {
			font-size: 16px;
		}
	}
</style>
