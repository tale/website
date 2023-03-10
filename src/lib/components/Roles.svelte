<script lang='ts'>
	const roles = [
		{
			name: 'Software Engineer',
			link: 'https://chariz.org',
			place: 'Chariz',
			time: '2021 - Present',
			description: 'I\'m a software engineer at Chariz, a startup that\'s building a platform for iOS developers to monetize their products. I\'m currently working on the backend of the platform, building out features to provide the best experience for our users.'
		},
		{
			name: 'University Student',
			link: 'https://gmu.edu/',
			place: 'George Mason University',
			time: '2022 - Present',
			description: 'I\'m a full-time student at George Mason University, studying for a Bachelor of Science in Computer Science and a minor in Software Engineering. I\'m also taking courses to further my interest in architecture and calligraphy/typography.'
		}
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
				<p>@<a href="{role.link}">{role.place}</a></p>
				<p>{role.time}</p>
			{:else}
				<p><span>{role.name}</span>{' @ '}<a href="{role.link}">{role.place}</a></p>
				<p>{role.time}</p>
			{/if}
		</div>
		<p class="spaced">{role.description}</p>
		<br />
	{/each}
</div>

<style>
	h2 {
		font-family: 'DM Serif Display', serif;
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
