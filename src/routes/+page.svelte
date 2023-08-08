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
		I specialize in building out systems with
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
		I've also recently picked up writing. Combined with my interest in
		politics and policy, I'm trying to use writing as a way to express both
		sides of political issues. I'm also rediscovering my love for debate,
		utilizing my speaking skills in various ways.
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
