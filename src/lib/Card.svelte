<div class="card">
	<slot />
</div>

<style>
	.card {
		margin: 8px;
		padding: 14px;
		width: fit-content;
		height: auto;
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 0.8rem;
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 0px 0.5px 1px rgba(0, 0, 0, 0.25);
	}

	:global(.card h1) {
		font-family: 'Roboto Serif', serif;
		letter-spacing: 2px;
		font-size: 48px;
	}

	:global(.card h1) {
		font-family: 'Roboto Serif', serif;
		letter-spacing: 2px;
		font-size: 32px;
	}

	:global(.card hr) {
		border: 0.75px solid rgba(0, 0, 0, 0.25);
		margin-bottom: 10px;
		margin-top: 10px;
	}

	:global(.card p) {
		font-size: 22px;
		font-weight: bold;
	}

	:global(.card span) {
		font-size: 18px;
	}

	:global(.card a) {
		font-size: 18px;
		color: inherit;
		text-decoration: underline;
	}

	@media (max-device-width: 480px) {
		.card {
			width: calc(100vw - 16px);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(.card hr) {
			border: 0.75px solid rgba(255, 255, 255, 0.25);
			margin-bottom: 10px;
			margin-top: 10px;
		}
	}
</style>
