import { defineConfig } from 'astro/config'
import { readFile } from 'node:fs/promises'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import meta from 'astro-meta-tags'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://tale.me',
	integrations: [tailwind(), icon(), meta(), sitemap()],
	vite: {
		plugins: [{
			name: 'vite-plugin-woff',
			transform: async (_, id) => {
				if (id.endsWith('.woff')) {
					const buffer = await readFile(id)
					return {
						code: `export default ${JSON.stringify(buffer)}`
					}
				}
				return null
			}
		}]
	},

	markdown: {
		shikiConfig: {
			theme: 'github-dark'
		}
	},
})