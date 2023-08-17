<script lang="ts">
	import Links from "$lib/components/Links.svelte";
	import Projects from "$lib/components/Projects.svelte";
</script>

<div>
	<p>
		Hey! I'm <strong>Aarnav</strong>, a <strong>software engineer</strong>
		from
		<strong>Northern Virginia, United States</strong>.
		<br />
		I specialize in building out enterprise systems with
		<strong>high-reliability</strong> requirements.
	</p>

	<p>
		Currently I'm studying Computer Science at
		<a href="https://gmu.edu/"> George Mason University, </a>
		for a Bachelor of Science degree. You may also see me jumping around the
		various public and personal projects I'm constantly working on to improve
		and build new features.
	</p>

	<p>
		I value <strong>simplicity</strong> and <strong>efficiency</strong> in both
		my code and my life. I'm always looking for new ways to improve my workflow
		and make my life easier. Away from the computer, I enjoy reading, exercising,
		and attending social events.
	</p>
	<hr />
	<Projects />
	<hr />
	<Links />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
	}
</style>
