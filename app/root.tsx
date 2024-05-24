import atkinson400 from '@fontsource/atkinson-hyperlegible/400.css?url'
import atkinson700 from '@fontsource/atkinson-hyperlegible/700.css?url'
import dm from '@fontsource/dm-serif-display?url'
import bitter from '@fontsource-variable/bitter?url'
import type { LinksFunction, MetaFunction } from '@remix-run/cloudflare'
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteError,
} from '@remix-run/react'
import { IconExclamationCircle, IconFileUnknown } from '@tabler/icons-react'

import Header from '~/components/Header'
import stylesheet from '~/tailwind.css?url'

export const meta: MetaFunction = () => [
	{ title: 'Aarnav Tale' },
	{ name: 'darkreader-lock' },
]

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'stylesheet', href: bitter },
	{ rel: 'stylesheet', href: dm },
	{ rel: 'stylesheet', href: atkinson400 },
	{ rel: 'stylesheet', href: atkinson700 },
]

export function Layout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="overscroll-none bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
				<div className="max-w-4xl mx-auto p-4 my-4">
					<Header />
					{children}
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	const routing = isRouteErrorResponse(error)
	const message = (error instanceof Error ? error.message : 'An unexpected error occurred')

	return (
		<div className="flex mt-24 flex-col items-center justify-center">
			{routing
				? (
					<IconFileUnknown size={32} stroke={1} className="mb-2" />
					)
				: (
					<IconExclamationCircle size={32} stroke={1} className="mb-2" />
					)}
			<h1 className="text-2xl font-bold">
				{routing ? error.status : 'Error'}
			</h1>
			<p className="text-gray-500 dark:text-gray-300">
				{routing ? error.statusText : message}
			</p>
		</div>
	)
}

export default function App() {
	return <Outlet />
}
