import prose from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Atkinson Hyperlegible', 'sans-serif'],
			serif: ['DM Serif Display', 'serif'],
		},
	},
	plugins: [prose],
} satisfies Config
