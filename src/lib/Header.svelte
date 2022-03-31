<script>
	import { siGithub, siLinkedin, siTwitter } from 'simple-icons/icons';
	const contacts = [
		{
			svg: 'M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z',
			link: 'mailto:aarnav@tale.me',
		},
		{
			svg: siGithub.path,
			link: 'https://github.com/tale',
		},
		{
			svg: siTwitter.path,
			link: 'https://twitter.com/aarnavtale',
		},
		{
			svg: siLinkedin.path,
			link: 'https://www.linkedin.com/in/aarnavtale',
		},
	];

	const chunkSize = Math.max(contacts.length / 2, 1);
	const chunks = [];
	contacts.map((_value, index, array) => {
		chunks.push(array.slice(chunkSize * index, chunkSize * (index + 1)));
	});
</script>

<div>
	<div class="banner">
		<h1>Aarnav Tale</h1>
		<div class="flex">
			{#each chunks as contacts}
				<div class="dynamic-flex">
					{#each contacts as contact}
						<a rel="external" href="{contact.link}">
							<div class="link">
								<svg
									class="svg"
									viewBox="{contact.link.startsWith('mailto:') ? '0 0 512 512' : undefined}"
									height="24"
									width="24"
									fill="currentColor"
								>
									<path d="{contact.svg}"></path>
								</svg>
							</div>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	h1 {
		font-family: 'Manrope', sans-serif;
		letter-spacing: 2px;
		font-size: 48px;
		color: white;
		margin-left: 12px;
	}

	a {
		font-size: 18px;
		color: white;
		text-decoration: underline;
	}

	.banner {
		min-width: 50%;
		max-width: 60%;
		margin: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 32px;
		padding: 8px;
		column-gap: 32px;
	}

	.svg {
		display: block;
		margin: auto;
		opacity: 0.75;
	}

	.flex {
		display: flex;
		align-items: center;
		column-gap: 8px;
	}

	.dynamic-flex {
		display: flex;
		column-gap: 8px;
	}

	@media (max-device-width: 399px) {
		.dynamic-flex {
			display: flex;
			flex-direction: column;
			row-gap: 8px;
		}

		h1 {
			margin-left: 0px;
		}
	}

	@media (max-device-width: 768px) {
		.banner {
			max-width: 90%;
		}
	}
</style>
