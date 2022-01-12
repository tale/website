<script lang="ts">
	import {
		siGithub,
		siTwitter,
		siAdobeacrobatreader,
		siLinkedin
	} from 'simple-icons/icons';
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
</script>

<Card>
	<div class="table">
		<div class="column" id="profile-parent">
			<img src="https://github.com/tale.png" alt="Face Profile" id="profile" width="128" height="128" />
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
</Card>

<style>
	.contact {
		display: flex;
		text-decoration: underline;
	}

	#profile {
		border-radius: 0.8rem;
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
	}

	#profile-parent {
		display: flex;
		align-items: center;
	}

	#contact-parent {
		display: flex;
		flex-direction: column;
		justify-content: center;
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
