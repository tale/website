<script lang="ts">
	import Cloudflare from 'simple-icons/icons/cloudflare.js';
	import CPP from 'simple-icons/icons/cplusplus.js';
	import Docker from 'simple-icons/icons/docker.js';
	import Express from 'simple-icons/icons/express.js';
	import Git from 'simple-icons/icons/git.js';
	import GnuBash from 'simple-icons/icons/gnubash.js';
	import Go from 'simple-icons/icons/go.js';
	import Java from 'simple-icons/icons/java.js';
	import Jira from 'simple-icons/icons/jira.js';
	import Kubernetes from 'simple-icons/icons/kubernetes.js';
	import Linux from 'simple-icons/icons/linux.js';
	import MongoDB from 'simple-icons/icons/mongodb.js';
	import NodeJS from 'simple-icons/icons/nodedotjs.js';
	import Passport from 'simple-icons/icons/passport.js';
	import PostgreSQL from 'simple-icons/icons/postgresql.js';
	import React from 'simple-icons/icons/react.js';
	import Redis from 'simple-icons/icons/redis.js';
	import Svelte from 'simple-icons/icons/svelte.js';
	import TypeScript from 'simple-icons/icons/typescript.js';
	import Ubuntu from 'simple-icons/icons/ubuntu.js';

	import Card from '$lib/Card.svelte';

	const standout = [
		{ icon: Kubernetes.path, title: 'Kubernetes' },
		{ icon: TypeScript.path, title: 'TypeScript' },
		{ icon: CPP.path, title: 'C++' },
		{ icon: Docker.path, title: 'Docker' },
	];

	const icons = [
		{ icon: Cloudflare.path, title: 'Cloudflare' },
		{ icon: Express.path, title: 'Express.js' },
		{ icon: Git.path, title: 'Git' },
		{ icon: GnuBash.path, title: 'Shell' },
		{ icon: Go.path, title: 'Golang' },
		{ icon: Java.path, title: 'Java' },
		{ icon: Jira.path, title: 'Jira' },
		{ icon: Linux.path, title: 'Linux' },
		{ icon: MongoDB.path, title: 'MongoDB' },
		{ icon: NodeJS.path, title: 'Node.js' },
		{ icon: Passport.path, title: 'Passport.js' },
		{ icon: PostgreSQL.path, title: 'PostgreSQL' },
		{ icon: React.path, title: 'React' },
		{ icon: Redis.path, title: 'Redis' },
		{ icon: Svelte.path, title: 'SvelteKit' },
		{ icon: Ubuntu.path, title: 'Ubuntu' },
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
