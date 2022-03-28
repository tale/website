<script>
	import Card from '$lib/Card.svelte';
	const roles = [
		{
			name: 'Developer',
			link: 'https://chariz.org',
			linkText: '@Hashbang',
			svgPath:
				'M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z',
			viewBox: '0 0 640 512',
		},
		{
			name: 'Alpine Skier',
			link: 'https://skiclubvail.org',
			linkText: '@Vail Ski Club',
			svgPath:
				'M432.1 96.02c26.51 0 47.99-21.5 47.99-48.01S458.6 0 432.1 0s-47.98 21.5-47.98 48.01S405.6 96.02 432.1 96.02zM511.1 469.1c0-13.98-11.33-23.95-23.89-23.95c-18.89 0-19.23 19.11-46.15 19.11c-5.476 0-10.87-1.081-15.87-3.389l-135.8-70.26l49.15-73.82c5.446-8.116 8.09-17.39 8.09-26.63c0-12.4-4.776-24.73-14.09-33.9l-40.38-40.49l-106.1-53.1C185.6 165.8 185.4 169 185.4 172.2c0 16.65 6.337 32.78 18.42 44.86l75.03 75.21l-45.88 68.76L34.97 258.8C31.44 257 27.64 256.1 23.93 256.1C9.675 256.1 0 267.8 0 280.1c0 8.673 4.735 17.04 12.96 21.24l392 202.6c11.88 5.501 24.45 8.119 37.08 8.119C480.1 512 511.1 486.7 511.1 469.1zM119.1 91.65L108.5 114.2C114.2 117 120.2 118.4 126.2 118.4c9.153 0 18.1-3.2 25.06-9.102l47.26 23.51c-.125 0-.125 .125-.2501 .25l114.5 56.76l32.51-13l6.376 19.13c4.001 12.13 12.63 22.01 24 27.76l58.14 28.1c4.609 2.287 9.455 3.355 14.26 3.355c18.8 0 31.98-15.43 31.98-31.93c0-11.74-6.461-23.1-17.74-28.7l-52.03-26.1l-17.12-51.15C386.6 98.69 364.2 73.99 333.1 73.99c-7.658 0-15.82 1.504-24.43 4.934L227.4 111.3L164.9 80.33c.009-.3461 .0134-.692 .0134-1.038c0-14.13-7.468-27.7-20.89-34.53L132.9 66.45L98.17 59.43C97.83 59.36 97.53 59.35 97.19 59.35c-2.666 0-5.276 2.177-5.276 5.273c0 1.473 .648 2.936 1.81 3.961L119.1 91.65z',
			viewBox: '0 0 512 512',
		},
	];
</script>

<Card>
	<div class="small-view">
		<h1>Aarnav Tale</h1>
		<span>Virginia, United States</span>
	</div>
	<div class="flexed">
		<div class="column" id="profile-parent">
			<img src="https://github.com/tale.png" alt="Face Profile" id="profile" width="176" height="176" />
		</div>
		<div>
			<div class="large-view">
				<h1>Aarnav Tale</h1>
				<span>Virginia, United States</span>
				<hr />
			</div>
			<div class="table">
				{#each roles as role}
					<div class="role">
						<svg viewBox="{role.viewBox}" width="32" height="32" fill="currentColor">
							<path d="{role.svgPath}"> </path>
						</svg>
						<div class="stack">
							<p>{role.name}</p>
							<a href="{role.link}">
								<span>{role.linkText}</span>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Card>

<style>
	.flexed {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 16px;
	}

	.small-view {
		display: none;
	}

	@media (max-device-width: 424px) {
		.flexed {
			flex-direction: column;
			row-gap: 16px;
		}

		#profile {
			width: 100%;
			height: auto;
		}
	}

	@media (max-device-width: 768px) {
		.small-view {
			display: initial;
		}

		.flexed {
			margin-top: 16px;
		}

		.large-view {
			display: none;
		}
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

	.table {
		display: flex;
		flex-direction: column;
		row-gap: 12px;
	}

	.role {
		display: flex;
		align-items: center;
	}

	.stack {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		row-gap: 4px;
	}
</style>
