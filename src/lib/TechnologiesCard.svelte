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
					<svg height="32" width="32" fill="currentColor">
						<path d="{icon}"></path>
					</svg>
					<span>{title}</span>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each standout as { icon, title }}
				<div class="skill">
					<svg height="32" width="32" fill="currentColor">
						<path d="{icon}"></path>
					</svg>
					<span>{title}</span>
				</div>
			{/each}
		</div>
	</div>
	<hr />
	<div class="table">
		<div class="column">
			{#each icons.splice(0, Math.ceil(icons.length / 2)) as { icon, title }}
			<div class="skill">
				<svg height="32" width="32" fill="currentColor">
					<path d="{icon}"></path>
				</svg>
				<span>{title}</span>
			</div>
			{/each}
		</div>
		<div class="column">
			{#each icons as { icon, title }}
			<div class="skill">
				<svg height="32" width="32" fill="currentColor">
					<path d="{icon}"></path>
				</svg>
				<span>{title}</span>
			</div>
			{/each}
		</div>
	</div>
</Card>

<style>
	.skill {
		display: flex;
	}

	.table {
		display: flex;
	}

	.column {
		flex: 50%;
		margin-left: 13px;
		margin-right: 13px;
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
