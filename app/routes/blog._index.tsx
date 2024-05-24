import { LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import clsx from 'clsx'

import { loadPosts } from '~/utils/blog'

export function loader({ request }: LoaderFunctionArgs) {
	const { origin } = new URL(request.url)
	const posts = loadPosts(origin)
	return posts
}

export default function Page() {
	const posts = useLoaderData<typeof loader>()

	return (
		<>
			<h2 className="font-serif text-2xl my-4">Blog</h2>
			<p className="mb-4">
				My blog ranges from technical explanations to random thoughts.
				If you enjoy reading any of these posts, please feel free to
				share them.

				Posts are organized in chronological order and are tagged with
				the categories that I feel best describe them.
			</p>
			<div className="flex flex-col gap-4">
				{posts.map(post => (
					<Link
						key={post.slug}
						to={`/blog/${post.slug}`}
					>
						<div
							className={clsx(
								'border duration-100 p-4 rounded-sm',
								'border-neutral-200 dark:border-neutral-700',
								'hover:bg-neutral-100 dark:hover:bg-neutral-800',
								'w-full h-full',
							)}
						>
							<h3 className="font-bold">
								{post.matter.title}
							</h3>
							<p className="text-neutral-500 dark:text-neutral-400 mt-1">
								<span suppressHydrationWarning={true}>
									{new Date(post.matter.date).toLocaleDateString()}
								</span>
								{' | '}
								{post.matter.categories.map(category => (
									<span
										key={category}
										className={clsx(
											'inline-block text-sm rounded-md mr-2',
											'bg-neutral-200 dark:bg-neutral-700 px-1',
										)}
									>
										{category}
									</span>
								))}
							</p>
							<p className="opacity-50 mt-3">
								{post.matter.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
