<script lang="ts">
	import Lazy from 'svelte-lazy';
	import '@fontsource/manrope'
	import '@fontsource/epilogue';
</script>

<Lazy>
	<div id="background" />
</Lazy>

<div id="content">
	<slot />
</div>

<style>
	:global(hr) {
		border: 0.75px solid rgba(255, 255, 255, 0.25);
		margin: 8px 0px 8px 0px;
	}

	:global(.table) {
		display: flex;
		flex-direction: column;
		row-gap: 2px;
	}

	#background {
		background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) ), url('https://source.unsplash.com/featured/1920x1080/daily/?ski%20resort');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-color: white;
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 0;
	}

	#content {
		position: relative;
		z-index: 2;
		display: flex;
		margin: auto;
		align-items: center;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media (orientation: portrait) {
		#background {
			background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) ), url('https://source.unsplash.com/featured/1080x1920/daily/?ski%20resort');
			background-color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		#background {
			background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url('https://source.unsplash.com/featured/1920x1080/daily/?ski%20resort');
			background-color: black;
		}
	}

	@media (prefers-color-scheme: dark) and (orientation: portrait) {
		#background {
			background-image: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9) ), url('https://source.unsplash.com/featured/1080x1920/daily/?ski%20resort');
			background-color: black;
		}
	}
</style>
