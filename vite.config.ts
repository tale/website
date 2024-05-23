import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		remix(),
		tsconfigPaths(),
		svgr({
			include: '**/*.svg',
			svgrOptions: {
				exportType: 'named',
				ref: true,
				svgo: false,
				titleProp: true,
			},
		}),
	],
})
