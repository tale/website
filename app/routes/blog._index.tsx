import { Link, useLoaderData } from '@remix-run/react'
import clsx from 'clsx'
import { bundleMDX } from 'mdx-bundler'

import { Document, validateFrontmatter } from '~/utils/blog'

type FixedFile = string & {
	content: string
	excerpt: string
}

export async function loader() {
	const posts = import.meta.glob<Document>('../posts/*.md', {
		eager: true,
		query: '?raw',
	})

	const bundled = await Promise.all(Object.entries(posts)
		.map(async ([path, content]) => {
			const { frontmatter, matter } = await bundleMDX({
				source: content.default.trim(),
				grayMatterOptions: (o) => {
					o.excerpt = (file) => {
						const fixed = file as FixedFile
						const lines = fixed.content

						const excerpt = lines.split('\n')
							.slice(0, 2)
							.join(' ')

						fixed.excerpt = excerpt
						return excerpt
					}

					return o
				},
			})

			const { title, date, categories } = validateFrontmatter(frontmatter)
			if (!matter.excerpt) {
				throw new Error('No excerpt found')
			}

			return {
				title,
				date,
				categories,
				path: path.replace('../posts/', '').replace('.md', ''),
				excerpt: `${matter.excerpt}...`,
			}
		}))

	return bundled
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
						key={post.path}
						to={`/blog/${post.path}`}
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
								{post.title}
							</h3>
							<p className="text-neutral-500 dark:text-neutral-400 mt-1">
								{new Date(post.date).toLocaleDateString()}
								{' | '}
								{post.categories.map(category => (
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
								{post.excerpt}
							</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}
