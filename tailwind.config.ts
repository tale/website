import prose from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.astro'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Atkinson Hyperlegible', 'sans-serif'],
			serif: ['Crimson Pro', 'serif'],
		},
	},
	plugins: [prose],
} satisfies Config
