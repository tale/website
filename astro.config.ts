import { defineConfig } from 'astro/config'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://tale.me',
	integrations: [icon(), sitemap()],
	vite: {
		plugins: [tailwindcss()]
	},

	markdown: {
		rehypePlugins: ['@microflash/rehype-figure'],
		shikiConfig: {
			theme: 'github-dark'
		}
	},
})
