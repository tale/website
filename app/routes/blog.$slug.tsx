import { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { Link, useLoaderData } from '@remix-run/react'
import { IconChevronLeft } from '@tabler/icons-react'
import clsx from 'clsx'
import { load } from 'js-yaml'
import markdownit from 'markdown-it'

import { Document, validateFrontmatter } from '~/utils/blog'

export async function loader({ params }: LoaderFunctionArgs) {
	if (!params.slug) {
		throw new Error('No Blog Post Found')
	}

	let blog: Document

	try {
		blog = await import(`../posts/${params.slug}.md?raw`) as Document
		if (!blog.default) {
			throw new Error('Invalid Blog Post')
		}
	} catch {
		// eslint-disable-next-line @typescript-eslint/only-throw-error
		throw new Response(null, {
			status: 404,
			statusText: 'Not Found',
		})
	}

	const md = markdownit()
	const content = blog.default.split('---').slice(1)
	const code = md.render(content[1])
	const frontmatter = load(content[0])
	const { title, date, categories } = validateFrontmatter(frontmatter)

	return {
		title,
		date,
		categories,
		code,
	}
}

export default function Page() {
	const { title, date, categories, code } = useLoaderData<typeof loader>()

	return (
		<>
			<Link to="/blog" className="flex items-center gap-1 my-6">
				<IconChevronLeft className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
				<span>Back</span>
			</Link>
			<div className="mb-8">
				<h1 className="text-3xl">
					{title}
				</h1>
				<p className="text-neutral-500 dark:text-neutral-400 mt-1 mb-6">
					{new Date(date).toLocaleDateString()}
					{' | '}
					{categories.map(category => (
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
			</div>
			<div
				className={clsx(
					'prose prose-neutral prose-lg dark:prose-invert',
					'prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto',
					'prose-video:rounded-lg prose-video:shadow-md prose-video:mx-auto',
					'prose-code:bg-neutral-300 dark:prose-code:bg-neutral-700',
					'prose-code:rounded-md prose-code:px-1 prose-code:py-0.5',
				)}
				dangerouslySetInnerHTML={{ __html: code }}
			>
			</div>
		</>
	)
}
