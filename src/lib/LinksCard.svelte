<script lang="ts">
	import { siGithub, siTwitter, siAdobeacrobatreader, siLinkedin } from 'simple-icons/icons';
	import Card from '$lib/Card.svelte';

	const contacts = [
		{
			name: 'Github',
			svg: siGithub,
			link: 'https://github.com/tale',
		},
		{
			name: 'Twitter',
			svg: siTwitter,
			link: 'https://twitter.com/aarnavtale',
		},
		{
			name: 'Resume',
			svg: siAdobeacrobatreader,
			link: '/Aarnav_Tale_Resume.pdf',
		},
		{
			name: 'LinkedIn',
			svg: siLinkedin,
			link: 'https://www.linkedin.com/in/aarnavtale',
		},
	];

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
	<div class="table">
		<div class="column" id="contact-parent">
			{#each contacts.splice(0, Math.ceil(contacts.length / 2)) as contact}
				<a rel="external" href="{contact.link}">
					<div class="contact">
						<svg height="32" width="32" fill="currentColor">
							<path d="{contact.svg.path}"></path>
						</svg>
						<span>{contact.name}</span>
					</div>
				</a>
			{/each}
		</div>
		<div class="column" id="contact-parent">
			{#each contacts as contact}
				<a rel="external" href="{contact.link}">
					<div class="contact">
						<svg height="32" width="32" fill="currentColor">
							<path d="{contact.svg.path}"></path>
						</svg>
						<span>{contact.name}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
	<hr />
	<div class="table">
		<div class="column" id="contact-parent">
			{#each links as link}
				<a href="{link.link}" id="link">
					<div class="contact">
						<span>{link.name}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</Card>

<style>
	.contact {
		display: flex;
		text-decoration: underline;
	}

	#contact-parent {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	#link {
		padding-top: 8px;
	}

	.table {
		display: flex;
		flex-shrink: 4;
		align-items: center;
	}

	.column {
		margin-left: 13px;
		margin-right: 13px;
	}
</style>
