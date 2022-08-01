import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// https://github.com/octokit/octokit.js/issues/2126#issuecomment-1186210471
			'node-fetch': 'isomorphic-fetch',
		},
	}
};

export default config;
