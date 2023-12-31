<script lang="ts">
	import { siGithub, siLinkedin, siX } from "simple-icons";

	const links = [
		{
			name: "Twitter",
			link: "https://x.com/aarnavtale",
			icon: siX,
		},
		{
			name: "Github",
			link: "https://github.com/tale",
			icon: siGithub,
		},
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/in/aarnavtale/",
			icon: siLinkedin,
		},
	];
</script>

<div class="table">
	{#each links as link}
		<a href={link.link} rel="noreferrer" target="_blank">
			<div class="padded-svg">
				<svg
					name={link.name}
					height="24"
					width="24"
					fill="currentColor"
				>
					<path d={link.icon.path} />
				</svg>
			</div>
		</a>
	{/each}
</div>

<style>
	.padded-svg {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		margin: 0 0.5rem;
	}

	.table {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>
