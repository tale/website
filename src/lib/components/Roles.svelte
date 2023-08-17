<script lang="ts">
	const roles = [
		{
			name: "Software Engineer",
			link: "https://chariz.org",
			place: "Chariz",
			time: "2021 - Present",
			description:
				"On top of managing company operations in the United States, I also work on the backend of the Chariz platform, building out features to provide the best experience for our sellers and  users.",
		},
		{
			name: "Computer Science Student",
			link: "https://gmu.edu/",
			place: "George Mason University",
			time: "2022 - Present",
			description:
				"I'm studying towards my Bachelor of Science in Computer Science. I've also involved myself in various other activities on campus including research and teaching.",
		},
		{
			name: "Teaching Assistant",
			link: "https://cs.gmu.edu/",
			place: "George Mason University",
			time: "2023 - Present",
			description:
				"I'm a teaching assistant for CS262: Introduction to Low-level Programming, a fundamentals oriented class that focuses on teaching students how to use C and work with hardware.",
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
	}

	.meta {
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 425px) {
		.meta {
			display: initial;
		}
	}
</style>
