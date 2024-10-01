import { LOCALE } from 'astro:env/client'
import en from './strings/en.json'
import ja from './strings/ja.json'

const keys = { en, ja }

export default function loc(key: string, ...args: string[]): string {
	// English is always available as a fallback
	const str = keys[LOCALE][key] || keys['en'][key]

	if (args.length === 0) {
		return str
	}

	// Args is for custom components in Astro to insert, basically if it
	// is wrapped with {}, then it needs to be hyperlinked to the corresponding
	// argument in the array.
	
	const mappings = []
	let inside = false
	let current = ''
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '}') {
			inside = false
			mappings.push(current)
			current = ''
		}

		if (inside) {
			current += str[i]
		}

		if (str[i] === '{') {
			inside = true
		}
	}

	let finalStr = str
	for (let i = 0; i < mappings.length; i++) {
		finalStr = finalStr.replace(`{${mappings[i]}}`, `<a class="underline" href="${args[i]}" target="_blank" rel="noreferrer">${mappings[i]}</a>`)
	}

	return finalStr
}

export function isMain(): boolean {
	return LOCALE === 'en'
}
