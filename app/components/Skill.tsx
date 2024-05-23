import { IconType } from '@icons-pack/react-simple-icons'
import { useMemo } from 'react'

interface Props {
	name: string
	year: number
	icon: IconType
}

export default function Skill({ name, year, icon: Icon }: Props) {
	// Shouldn't be necessary to memoize, but it made a difference somehow
	const years = useMemo(() => {
		const currentYear = new Date().getFullYear()
		const diff = currentYear - year

		if (diff === 0) {
			return '<1 year'
		}

		if (diff === 1) {
			return '1 year'
		}

		return `${diff.toString()} years`
	}, [year])

	return (
		<div className="flex items-center gap-4">
			<Icon size={24} className="inline-block" />
			<div>
				<h3 className="font-bold">{name}</h3>
				<p>{years}</p>
			</div>
		</div>
	)
}
