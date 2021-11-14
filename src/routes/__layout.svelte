<script lang="ts">
	import Lazy from 'svelte-lazy';
</script>

<Lazy>
	<div id="background"></div>
	<div id="overlay"></div>
</Lazy>

<div id="content">
	<slot />
</div>

<style>
	#background {
		background-image: url('https://source.unsplash.com/featured/1920x1080/daily/?city,america,day');
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
		background-image: url('/bank-note.svg');
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
			background-image: url('https://source.unsplash.com/featured/1080x1920/daily/?city,america,day');
			background-color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		#background {
			background-image: url('https://source.unsplash.com/featured/1920x1080/daily/?city,america,night');
			background-color: black;
		}

		#overlay {
			background-color: rgba(0, 0, 0, 0.25);
			opacity: 0.75;
		}
	}

	@media (prefers-color-scheme: dark) and (orientation: portrait) {
		#background {
			background-image: url('https://source.unsplash.com/featured/1080x1920/daily/?city,america,night');
			background-color: black;
		}

		#overlay {
			background-color: rgba(0, 0, 0, 0.25);
			opacity: 0.75;
		}
	}
</style>
