<script lang="ts">
	import Card from '$lib/Card.svelte';

	const links = [
		{
			name: 'DevPost',
			link: 'https://devpost.com/tale',
		},
		{
			name: 'Keybase',
			link: 'https://keybase.io/aarnavtale'
		},
		{
			name: 'Status Page',
			link: 'https://status.aerum.co',
		},
		{
			name: 'GPG Public Key',
			link: 'https://keys.openpgp.org/search?q=aarnav@tale.me',
		},
		{
			name: 'APT Repository',
			link: 'https://apt.tale.me',
		},
	];
</script>

<Card>
	<h2>Contact</h2>
	<hr />
	<p class="intro">
		If you'd like a copy of my CV, please email
		<a rel="external" href="mailto:aarnav@tale.me"> aarnav@tale.me </a>
		. Feel free to connect with me on LinkedIn too.
	</p>
	<p><strong>Other Links:</strong></p>
	<ul>
		{#each links as link}
			<li>
				<a href="{link.link}" id="link">
					<div class="contact">
						<p>{link.name}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Card>

<style>
	.contact {
		display: inline-flex;
		text-decoration: underline;
	}

	ul {
		margin: 16px;
	}

	li:not(:last-child) {
		margin-bottom: 5px;
	}
</style>
