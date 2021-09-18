<script lang="ts">
	import Lazy from "svelte-lazy";

	function removeSpinner() {
		setTimeout(() => {
			document.getElementsByClassName("spinner").item(0).remove();
		}, 500);
	}
</script>

<div class="spinner">
	<div class="double-bounce1" />
	<div class="double-bounce2" />
</div>

<Lazy onload={removeSpinner}>
	<div id="background" />
	<div id="overlay" />
</Lazy>

<div id="content">
	<slot />
</div>

<style>
	#background {
		background-image: url("https://source.unsplash.com/featured/1920x1080/daily/?city,america,day");
		background-repeat: no-repeat;
		background-position: center;
		background-size: 50% cover;
		background-color: white;
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 0;
	}

	#overlay {
		background-color: rgba(255, 255, 255, 0.1);
		background-image: url("/bank-note.svg");
		background-repeat: repeat;
		position: fixed;
		opacity: 0.25;
		height: 100vh;
		width: 100vw;
		z-index: 1;
	}

	#content {
		position: relative;
		z-index: 2;
	}

	@media (orientation: portrait) {
		#background {
			background-image: url("https://source.unsplash.com/featured/1080x1920/daily/?city,america,day");
			background-color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		#background {
			background-image: url("https://source.unsplash.com/featured/1920x1080/daily/?city,america,night");
			background-color: black;
		}

		#overlay {
			background-color: rgba(0, 0, 0, 0.25);
			opacity: 0.75;
		}
	}

	@media (prefers-color-scheme: dark) and (orientation: portrait) {
		#background {
			background-image: url("https://source.unsplash.com/featured/1080x1920/daily/?city,america,night");
			background-color: black;
		}

		#overlay {
			background-color: rgba(0, 0, 0, 0.25);
			opacity: 0.75;
		}
	}

	.spinner {
		top: 50%;
		left: 50%;
		width: 40px;
		height: 40px;
		position: fixed;
		margin: auto auto;
		transform: translate(-50%, -50%);
	}

	.double-bounce1,
	.double-bounce2 {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #333;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;

		-webkit-animation: sk-bounce 2s infinite ease-in-out;
		animation: sk-bounce 2s infinite ease-in-out;
	}

	.double-bounce2 {
		-webkit-animation-delay: -1s;
		animation-delay: -1s;
	}

	@-webkit-keyframes sk-bounce {
		0%,
		100% {
			-webkit-transform: scale(0);
		}
		50% {
			-webkit-transform: scale(1);
		}
	}

	@keyframes sk-bounce {
		0%,
		100% {
			transform: scale(0);
			-webkit-transform: scale(0);
		}
		50% {
			transform: scale(1);
			-webkit-transform: scale(1);
		}
	}
</style>
