<script lang="ts">
	import { siGithub, siLinkedin, siTwitter } from 'simple-icons/icons';

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
	];
</script>

<div>
	<div class="table">
		{#each links as link}
			<a href={link.link} alt={link.name}>
				<div class="padded-svg">
					<svg height="24" width="32" fill="currentColor">
						<path d="{link.icon}"></path>
					</svg>
				</div>
			</a>
		{/each}
	</div>

	<span>
		<a href='https://keys.openpgp.org/search?q=aarnav@tale.me' target="_blank" alt='OpenPGP Site'>
			Click this link to view my GPG key.
		</a>
	</span>
</div>

<style>
	span {
		font-size: small;
		text-align: center;
		color: gray;
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
