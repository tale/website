<script lang="ts">
	import { siGithub, siLinkedin, siTwitter, siMastodon } from 'simple-icons';

	const links = [
		{
			name: 'Twitter',
			link: 'https://twitter.com/aarnavtale',
			icon: siTwitter.path,
		},
		{
			name: 'Github',
			link: 'https://github.com/tale',
			icon: siGithub.path,
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/aarnavtale/',
			icon: siLinkedin.path,
		},
		{
			name: 'Mastodon',
			link: 'https://hachyderm.io/@tale',
			icon: siMastodon.path
		},
	];
</script>

<div>
	<span>
		<a href='https://keys.openpgp.org/search?q=aarnav@tale.me' rel='noreferrer' target="_blank">
			Click this link to view my GPG key.
		</a>
	</span>
	<div class="table">
		{#each links as link}
			<a rel="me" href={link.link}>
				<div class="padded-svg">
					<svg height="24" width="32" fill="currentColor">
						<path d="{link.icon}"></path>
					</svg>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	span {
		font-size: small;
		text-align: center;
		color: gray;
		display: flex;
		justify-content: center;
		padding-bottom: 8px;
	}

	.padded-svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 24px;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
