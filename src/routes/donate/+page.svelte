<script lang="ts">
	import { siGithubsponsors } from "simple-icons";

	const sponsorLinks = [
		{
			icon: siGithubsponsors,
			title: "GitHub Sponsors",
			link: "https://github.com/sponsors/tale",
		},
	];
</script>

<svelte:head>
	<title>Donate • Aarnav Tale</title>
	<meta name="description" content="Donate to support Aarnav Tale" />

	<meta property="og:url" content="https://aarnavtale.com/donate" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Donate • Aarnav Tale" />
	<meta property="og:description" content="Donate to support Aarnav Tale" />
	<meta property="og:image" content="https://aarnavtale.com/og.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="aarnavtale.com" />
	<meta property="twitter:url" content="https://aarnavtale.com/donate" />
	<meta name="twitter:title" content="Donate • Aarnav Tale" />
	<meta name="twitter:description" content="Donate to support Aarnav Tale" />
	<meta name="twitter:image" content="https://aarnavtale.com/og.png" />
</svelte:head>

<div class="container">
	<h2>Support Me</h2>
	<p>
		All of my projects are hosted by me and are completely free to use. If
		you like my work, please consider supporting me by donating to me on
		GitHub Sponsors. Your support helps me:
	</p>

	<ul>
		<li>Pay for hosting</li>
		<li>Buy new hardware</li>
		<li>Buy coffee</li>
	</ul>

	<a rel="noreferrer" target="_blank" href="https://github.com/sponsors/tale">
		<div class="sponsor">
			<svg class="icon" height="24" width="32" fill="currentColor">
				<path d={siGithubsponsors.path} />
			</svg>
			<div>
				<p>GitHub Sponsors</p>
			</div>
		</div>
	</a>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		row-gap: 8px;
	}

	a,
	a:link,
	a:visited,
	a:hover,
	a:active {
		color: inherit;
		text-decoration: inherit;
		font-weight: inherit;
	}

	ul {
		margin-left: 1rem;
	}

	.sponsor {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding: 1rem;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
		border-radius: 0.5rem;
		margin-top: 1rem;
	}

	.sponsor:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media (prefers-color-scheme: dark) {
		.sponsor {
			box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
		}

		.sponsor:hover {
			background-color: rgba(255, 255, 255, 0.1);
		}
	}
</style>
