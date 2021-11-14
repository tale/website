<script lang="ts">
	import { SimpleIcon } from 'simple-icons'
	import Cloudflare from 'simple-icons/icons/cloudflare.js';
	import CPP from 'simple-icons/icons/cplusplus';
	import Docker from 'simple-icons/icons/docker.js';
	import Express from 'simple-icons/icons/express';
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

	const standout = [Kubernetes, TypeScript, CPP, Docker];
	const icons = [
		Cloudflare,
		Express,
		Git,
		[GnuBash, 'Shell'],
		Go,
		Java,
		Jira,
		Linux,
		MongoDB,
		NodeJS,
		Passport,
		PostgreSQL,
		React,
		Redis,
		Svelte,
		Ubuntu,
	];
</script>

<Card>
	<h2>Skillsets</h2>
	<hr />
	<div class="table">
		<div class="column">
			{#each standout.splice(0, Math.ceil(standout.length / 2)) as icon}
				<div class="skill">
					<svg height="32" width="32" fill="currentColor">
						<path d="{icon.path}"></path>
					</svg>
					<span>{icon.title}</span>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each standout as icon}
				<div class="skill">
					<svg height="32" width="32" fill="currentColor">
						<path d="{icon.path}"></path>
					</svg>
					<span>{icon.title}</span>
				</div>
			{/each}
		</div>
	</div>
	<hr />
	<div class="table">
		<div class="column">
			{#each icons.splice(0, Math.ceil(icons.length / 2)) as icon}
				{#if Array.isArray(icon) && typeof icon[0] !== 'string'}
					<div class="skill">
						<svg height="32" width="32" fill="currentColor">
							<path d="{icon[0].path}"></path>
						</svg>
						<span>{icon[1]}</span>
					</div>
				{:else}
					<div class="skill">
						<svg height="32" width="32" fill="currentColor">
							<path d="{icon.path}"></path>
						</svg>
						<span>{icon.title}</span>
					</div>
				{/if}
			{/each}
		</div>
		<div class="column">
			{#each icons as icon}
				{#if Array.isArray(icon) && typeof icon[0] !== 'string'}
					<div class="skill">
						<svg height="32" width="32" fill="currentColor">
							<path d="{icon[0].path}"></path>
						</svg>
						<span>{icon[1]}</span>
					</div>
				{:else if icon.hasOwnProperty('path') && icon.hasOwnProperty('title')}
					<div class="skill">
						<svg height="32" width="32" fill="currentColor">
							<path d="{icon.path}"></path>
						</svg>
						<span>{icon.title}</span>
					</div>
				{/if}
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
