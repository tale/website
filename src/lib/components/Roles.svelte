<script lang="ts">
	const roles = [
		{
			name: "Computer Science B.S.",
			link: "https://gmu.edu/",
			place: "George Mason University",
			time: "2022 - Present",
			description:
				"I pursued an undergraduate degree at GMU, publishing a paper on the dangers of artifical intelligence and building a safety framework for AI systems.",
		},
		{
			name: "Teaching Assistant",
			link: "https://cs.gmu.edu/",
			place: "George Mason University",
			time: "2023 - Present",
			description:
				"I taught students in classes covering an introduction to C, Unix, and various deep-dives into the fundamentals of systems programming.",
		},
		{
			name: "Engineering Intern",
			link: "https://splunk.com/",
			place: "Splunk",
			time: "Summer 2023",
			description:
				"I worked on the Splunk Cloud Platform, assisting the team working on VictorOps, the on-call incident management platform.",
		},
	];

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<h2>Experience</h2>
<div>
	{#each roles as role}
		<div class="meta">
			{#if innerWidth <= 425}
				<span>{role.name}</span>
				<p>@<a href={role.link}>{role.place}</a></p>
				<p>{role.time}</p>
			{:else}
				<p>
					<span>{role.name}</span>{" @ "}<a href={role.link}
						>{role.place}</a
					>
				</p>
				<p>{role.time}</p>
			{/if}
		</div>
		<p class="spaced">{role.description}</p>
		<br />
	{/each}
</div>

<style>
	h2 {
		font-family: "DM Serif Display", serif;
	}

	span {
		font-style: oblique;
		font-size: large;
	}

	p {
		vertical-align: middle;
	}

	.spaced {
		margin-top: 6px;
		opacity: 0.5;
		max-width: 75%;
	}

	.meta {
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 425px) {
		.meta {
			display: initial;
		}

		.spaced {
			max-width: initial;
		}
	}
</style>
