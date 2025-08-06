import { defineConfig } from 'astro/config'
import { readFile } from 'node:fs/promises'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://tale.me',
	integrations: [icon(), sitemap()],
	vite: {
		plugins: [
			tailwindcss(),
			{
				name: 'vite-plugin-ttf',
				transform: async (_, id) => {
					if (id.endsWith('.ttf')) {
						const buffer = await readFile(id)
						return {
							code: `export default ${JSON.stringify(buffer)}`
						}
					}
					return null
				}
			}
		]
	},

	markdown: {
		rehypePlugins: ['@microflash/rehype-figure'],
		shikiConfig: {
			theme: 'github-dark'
		}
	},
})
