<script lang="ts">
	import Cloudflare from "simple-icons/icons/cloudflare.js";
	import Docker from "simple-icons/icons/docker.js";
	import Git from "simple-icons/icons/git.js";
	import Gradle from "simple-icons/icons/gradle.js";
	import Grafana from "simple-icons/icons/grafana.js";
	import Jira from "simple-icons/icons/jira.js";
	import Kubernetes from "simple-icons/icons/kubernetes.js";
	import Linux from "simple-icons/icons/linux.js";
	import MongoDB from "simple-icons/icons/mongodb.js";
	import NodeJS from "simple-icons/icons/nodedotjs.js";
	import Passport from "simple-icons/icons/passport.js";
	import PostgreSQL from "simple-icons/icons/postgresql.js";
	import React from "simple-icons/icons/react.js";
	import Redis from "simple-icons/icons/redis.js";
	import Svelte from "simple-icons/icons/svelte.js";
	import TypeScript from "simple-icons/icons/typescript.js";

	import Card from "$lib/Card.svelte";

	const icons = [
		Cloudflare,
		Docker,
		Git,
		Gradle,
		Grafana,
		Jira,
		Kubernetes,
		Linux,
		MongoDB,
		NodeJS,
		Passport,
		PostgreSQL,
		React,
		Redis,
		Svelte,
		TypeScript,
	];
</script>

<Card>
	<h2>Technologies</h2>
	<hr />
	<div class="table">
		<div class="column">
			{#each icons.splice(0, Math.ceil(icons.length / 2)) as icon}
				<div class="skill">
					<svg height="32" width="32" fill="currentColor">
						<path d={icon.path} />
					</svg>
					<span>{icon.title}</span>
				</div>
			{/each}
		</div>
		<div class="column">
			{#each icons as icon}
				<div class="skill">
					<svg height="32" width="32" fill="currentColor">
						<path d={icon.path} />
					</svg>
					<span>{icon.title}</span>
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
