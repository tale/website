import { LoaderFunctionArgs } from '@remix-run/node'

import { loadPost } from '~/utils/blog'
import { renderImage } from '~/utils/og'

export async function loader({ params, request }: LoaderFunctionArgs) {
	const { origin } = new URL(request.url)
	if (!params.slug) {
		throw new Error('No Blog Post Found')
	}

	const post = await loadPost(params.slug, origin)
	if (!post) {
		// eslint-disable-next-line @typescript-eslint/only-throw-error
		throw new Response(null, {
			status: 404,
			statusText: 'Not Found',
		})
	}

	const png = await renderImage(post.matter, origin)
	return new Response(png, {
		status: 200,
		headers: {
			'Content-Type': 'image/png',
			'cache-control': 'public, max-age=31536000, immutable',
		},
	})
}
