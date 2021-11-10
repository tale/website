<script lang="ts">
	import Card from '$lib/Card.svelte';

	const links = [
		{
			name: 'PGP Key',
			link: 'https://keys.openpgp.org/search?q=aarnav@tale.me',
		},
		{
			name: 'Status Page',
			link: 'https://status.aerum.co',
		},
		{
			name: 'APT Repository',
			link: 'https://apt.tale.me',
		},
	];
</script>

<Card>
	<span>Links</span>
	<hr />
	{#each links as link}
		<a href="{link.link}">
			<div class="contact">
				<span>{link.name}</span>
			</div>
		</a>
	{/each}
</Card>

<style>
	.contact {
		display: flex;
		text-decoration: underline;
	}
</style>
