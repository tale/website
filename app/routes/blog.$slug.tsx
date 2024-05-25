import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { IconChevronLeft } from '@tabler/icons-react'
import clsx from 'clsx'
import { getMDXComponent } from 'mdx-bundler/client'
import { DetailedHTMLProps, ImgHTMLAttributes, useMemo } from 'react'

import { loadPost } from '~/utils/blog'

export async function loader({ params, request }: LoaderFunctionArgs) {
	if (!params.slug) {
		throw new Error('No Blog Post Found')
	}

	const { origin } = new URL(request.url)
	const post = await loadPost(params.slug, origin)
	if (!post) {
		// eslint-disable-next-line @typescript-eslint/only-throw-error
		throw new Response(null, {
			status: 404,
			statusText: 'Not Found',
		})
	}

	if (!post.code) {
		throw new Error('No Blog Post Found')
	}

	return {
		...post,
		slug: params.slug,
		origin,
	}
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	if (!data) {
		return []
	}

	const image = new URL(`/blog/${data.slug}.png`, data.origin)
	return [
		{ title: data.matter.title },
		{
			name: 'twitter:title',
			content: data.matter.title,
		},
		{
			property: 'og:title',
			content: data.matter.title,
		},
		{
			name: 'description',
			content: data.matter.description,
		},
		{
			name: 'twitter:description',
			content: data.matter.description,
		},
		{
			property: 'og:description',
			content: data.matter.description,
		},
		{
			name: 'twitter:image',
			content: image.toString(),
		},
		{
			property: 'og:image',
			content: image.toString(),
		},
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{ name: 'twitter:site', content: '@aarnavtale' },
		{ name: 'twitter:creator', content: '@aarnavtale' },
		{
			property: 'og:url',
			content: new URL(`/blog/${data.slug}`, data.origin).toString(),
		},
		{ property: 'og:type', content: 'article' },
		{ property: 'og:site_name', content: 'Aarnav Tale' },
		{ property: 'og:locale', content: 'en_US' },
	]
}

type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
function CaptionedImage(props: ImageProps) {
	return (
		<figure>
			<img {...props} />
			<figcaption>
				{props.alt}
			</figcaption>
		</figure>
	)
}

export default function Page() {
	const { matter, code } = useLoaderData<typeof loader>()
	const Component = useMemo(() => getMDXComponent(code), [code])

	return (
		<>
			<Link to="/blog" className="flex items-center gap-1 my-6">
				<IconChevronLeft className="w-6 h-6 text-neutral-500 dark:text-neutral-400" />
				<span>Back</span>
			</Link>
			<div className="mb-8">
				<h1 className="text-3xl">
					{matter.title}
				</h1>
				<p className="text-neutral-500 dark:text-neutral-400 mt-1 mb-6">
					<span suppressHydrationWarning={true}>
						{new Date(matter.date).toLocaleDateString()}
					</span>
					{' | '}
					{matter.categories.map(category => (
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
					'prose-figcaption:mt-1 prose-figcaption:text-center',
				)}
			>
				<Component components={{ img: CaptionedImage }} />
			</div>
		</>
	)
}
