import { IconType } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'
import { useMemo } from 'react'

interface Props {
	name: string
	year: number
	icon: IconType
}

export default function TinySkill({ name, year, icon: Icon }: Props) {
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
		<div className="flex gap-4 group items-center justify-center">
			<Icon size={24} className="inline-block" />
			<div className={clsx(
				'hidden absolute group-hover:block z-10 mb-20 shadow-sm',
				'bg-neutral-300 dark:bg-neutral-700 rounded-lg px-2 py-1',
				'border border-neutral-400/50 dark:border-neutral-600/50',
			)}
			>
				<h3>
					{name}
					{' '}
					{`(${years})`}
				</h3>
			</div>
		</div>
	)
}
