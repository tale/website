import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

export default function Header() {
	return (
		<>
			<div className="flex items-center justify-between pr-2">
				<h1 className="text-3xl font-serif">
					Aarnav Tale
				</h1>
				<div className="flex items-center gap-4">
					<LinkLine name="Home" to="/" />
					<LinkLine name="Blog" to="/blog" />
					<LinkLine name="Portfolio" to="/portfolio" />
				</div>
			</div>
			<hr className="my-2" />
		</>
	)
}

interface Props {
	name: string
	to: string
}

function LinkLine({ name, to }: Props) {
	return (
		<NavLink
			to={to}
			prefetch="intent"
			className={({ isActive, isPending }) => clsx(
				isActive && 'font-bold',
				isPending && 'animate-pulse',
			)}
		>
			{name}
		</NavLink>
	)
}
