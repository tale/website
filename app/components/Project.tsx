import type { IconType } from '@icons-pack/react-simple-icons'
import clsx from 'clsx'

interface Props {
	name: string
	description: string
	link: string
	icons: IconType[]
}

export default function Project({ name, description, link, icons }: Props) {
	return (
		<a href={link} target="_blank" rel="noreferrer">
			<div className={clsx(
				'border duration-100 p-4 rounded-sm',
				'border-neutral-200 dark:border-neutral-700',
				'hover:bg-neutral-100 dark:hover:bg-neutral-800',
				'w-full h-full',
			)}
			>
				<div className="flex justify-between items-baseline mb-3">
					<h3 className="font-bold">{name}</h3>
					<div>
						{icons.map((Icon, index) => (
							<Icon key={index} size={16} className="inline-block mr-1" />
						))}
					</div>
				</div>
				<p>
					{description}
				</p>
			</div>
		</a>
	)
}
