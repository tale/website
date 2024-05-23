import { FunctionComponent, SVGProps } from 'react'

interface Props {
	name: string
	where: string
	when: string
	description: string
	link: string
	icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>
}

export default function Experience({
	name,
	where,
	when,
	description,
	link,
	icon: Icon,
}: Props) {
	return (
		<div className="pr-4">
			<div className="flex items-center flex-row mb-3 gap-2">
				<Icon className="w-fit h-8 text-neutral-500 dark:text-neutral-400" />
				<div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
					<h3 className="font-bold">
						{name}
					</h3>
					<p className="text-neutral-500 dark:text-neutral-400">
						{when}
						{' '}
						<a
							className="underline"
							href={link}
							target="_blank"
							rel="noreferrer"
						>
							@
							{where}
						</a>
					</p>
				</div>
			</div>
			<p className="text-md text-neutral-600 dark:text-neutral-300">
				{description}
			</p>
		</div>
	)
}
