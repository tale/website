import { defineConfig, envField } from 'astro/config'
import { readFile } from 'node:fs/promises'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import meta from 'astro-meta-tags'
import sitemap from '@astrojs/sitemap'

const sites: Record<string, string> = {
	en: 'https://tale.me',
	ja: 'https://aarnav.jp',
	hi: 'https://aarnav.in'
}

// https://astro.build/config
export default defineConfig({
	site: sites[process.env.LOCALE ?? 'en']!,
	integrations: [tailwind(), icon(), meta(), sitemap()],
	experimental: {
		env: {
			schema: {
				LOCALE: envField.string({
					context: 'client',
					access: 'public',
					default: 'en',
				})
			}
		}
	},
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
