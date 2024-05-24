import {
	// cloudflareDevProxyVitePlugin as devProxy,
	vitePlugin as remix,
} from '@remix-run/dev'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		// devProxy(),
		remix({
			future: {
				v3_fetcherPersist: true,
				v3_relativeSplatPath: true,
				v3_throwAbortReason: true,
			},
		}),
		tsconfigPaths(),
		babel({
			filter: /\.[jt]sx?$/,
			babelConfig: {
				presets: ['@babel/preset-typescript'],
				plugins: [
					['babel-plugin-react-compiler', {}],
				],
			},
		}),
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
