<script>
	const roles = [
		{
			name: 'Software Engineer',
			link: 'https://chariz.org',
			place: 'Chariz',
			time: '2021 - Present',
			description:
				'Using Kubernetes and containerization, I attained the responsibility of migrating our systems to containers. I am responsible for deploying changes to our new infrastructure, managing the health of our clusters, and maintaining reliability on services accessed by users.',
		},
		{
			name: 'Computer Science Student',
			link: 'https://gmu.edu/',
			place: 'George Mason University',
			time: '2022 - 2026',
			description:
				"I'm currently studying for a Bachelor of Science degree in Computer Science and a minor in Software Engineering (SWE). I also participate in various debate and writing related student organizations on campus.",
		}
	];
</script>

<h2>Experience</h2>
<div>
	{#each roles as role}
		<div>
			{#if role.link}
				<span>{role.name}</span>
				<p>
					<a href="{role.link}">@{role.place}</a> —
					{role.time}
				</p>
			{:else}
				<span>{role.name}</span>
				<p>
					@{role.place} —
					{role.time}
				</p>
			{/if}
		</div>
		<p>{role.description}</p>
		<br />
	{/each}
</div>

<style>
	span {
		font-style: oblique;
		font-size: large;
	}
</style>
