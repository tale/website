<script>
	import { siGithubsponsors, siPatreon, siPaypal } from 'simple-icons/icons';

	const sponsorLinks = [
		{
			icon: siGithubsponsors,
			title: 'GitHub Sponsors',
			link: 'https://github.com/sponsors/tale'
		},
		{
			icon: siPatreon,
			title: 'Patreon',
			link: 'https://www.patreon.com/aarnavtale'
		},
		{
			icon: siPaypal,
			title: 'PayPal',
			link: 'https://paypal.me/aatale'
		}
	]

	let innerWidth = 100000;
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Donate • Aarnav Tale</title>
	<meta name="description" content="Donate to support Aarnav Tale">

	<meta property="og:url" content="https://aarnavtale.com/donate">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Donate • Aarnav Tale">
	<meta property="og:description" content="Donate to support Aarnav Tale">
	<meta property="og:image" content="https://aarnavtale.com/og.png">

	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="aarnavtale.com">
	<meta property="twitter:url" content="https://aarnavtale.com/donate">
	<meta name="twitter:title" content="Donate • Aarnav Tale">
	<meta name="twitter:description" content="Donate to support Aarnav Tale">
	<meta name="twitter:image" content="https://aarnavtale.com/og.png">
</svelte:head>

<div class="container">
	<h2>Support Me</h2>
	<p>
		A lot of my free projects are hosted on my own servers and are completely free to use. However, the high volume of traffic and users on these products can be a financial and technical strain. In addition, I'm a full-time undergraduate student who's strapped on both money and time for projects.
	</p>

	<hr />
	<p class="center">
		You can sponsor me on GitHub Sponsors, Patreon, or PayPal. As a token of my gratitude, you'll be listed on all of my websites and products as a donor.
	</p>
	<div class="grid contain">
		{#each sponsorLinks as sponsor}
			<a rel="noreferrer" target="_blank" href="{sponsor.link}">
				<div class="sponsor">
					<svg class="icon" height="24" width="32" fill="currentColor">
						<path d={sponsor.icon.path}></path>
					</svg>
					<div>
						<p class="no-wrap">{sponsor.title}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	h2 {
		font-family: 'DM Serif Display', serif;
	}

	.container {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
	}

	.center {
		text-align: center;
	}

	.no-wrap {
		white-space: nowrap;
	}

	.contain {
		max-width: 80%;
		margin: auto;
	}

	.sponsor {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
		border: 1px solid #444;
		border-radius: 0.5rem;
		cursor: pointer;
	}

	.sponsor:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media (prefers-color-scheme: dark) {
		.sponsor {
			border: 1px solid #dedede;
		}
	}

	@media (max-device-width: 425px) {
		.contain {
			width: 100%;
		}
	}
</style>
