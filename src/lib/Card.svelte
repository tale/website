<div class="card">
	<slot />
</div>

<style>
	.card {
		max-width: 30%;
		width: 30%;
		padding: 16px;
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

	:global(.card h2) {
		font-family: 'Manrope', sans-serif;
		letter-spacing: 2px;
		font-size: 24px;
	}

	:global(.card span, p) {
		font-size: 16px;
	}

	:global(.card a) {
		font-size: 16px;
		color: inherit;
		text-decoration: underline;
	}

	:global(.intro) {
		padding: 6px 0px 16px 0px;
	}

	@media (max-device-width: 948px) {
		.card {
			max-width: 50%;
			width: 50%;
		}
	}

	@media (max-device-width: 480px) {
		.card {
			max-width: 100%;
			width: initial;
			margin: 4px 8px 4px 8px;
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
