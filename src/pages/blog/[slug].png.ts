import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

import WorkSansRegular from '@/fonts/WorkSans-Regular.ttf'
import WorkSansBold from '@/fonts/WorkSans-Bold.ttf'
import BerkeleyMonoRegular from '@/fonts/BerkeleyMono-Regular.ttf'

interface Props {
	title: string
	desc: string
	date: Date
}

const dimensions = {
	width: 1200,
	height: 675,
}

export async function GET(context: APIContext<Props>) {
	const { title, date, desc } = context.props
	const dateView = date.toLocaleDateString('en-US', {
		dateStyle: 'long'
	});

	const view = html`
		<div
			tw="flex w-full h-full p-8"
			style="background-image: linear-gradient(85.2deg, rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7%);"
		>
			<div tw="
				flex flex-col w-full h-full p-8 pt-0 justify-between
				border border-1 border-neutral-100
			">
				<div tw="flex flex-col my-24">
					<div
						tw="text-7xl font-bold"
						style="
							background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
							background-clip: text;
							-webkit-background-clip: text;
							color: transparent;
						"
					>
						${title}
					</div>
					<p tw="text-3xl text-neutral-300 w-3/4 mt-8">
						${desc}
					</p>
				</div>
				<div tw="flex items-center justify-between">
					<div tw="flex items-center">
						<img
							src="https://github.com/tale.png?s=300"
							tw="w-16 rounded-full border border-2 border-neutral-700"
						/>
						<p
							tw="ml-6 text-3xl text-neutral-300"
							style="font-family: 'Berkeley Mono', 'Courier New', monospace;"
						>
							Aarnav Tale • ${dateView}
						</p>
					</div>
					<p
						tw="text-3xl text-neutral-300 mr-3"
						style="font-family: 'Berkeley Mono', 'Courier New', monospace;"
					>
						tale.me
					</p>
				</div>
			</div>
		</div>
	`
	const svg = await satori(view, {
		fonts: [
			{
				name: 'Work Sans',
				data: Buffer.from(WorkSansRegular),
				weight: 400,
			},
			{
				name: 'Work Sans',
				data: Buffer.from(WorkSansBold),
				weight: 700,
			},
			{
				name: 'Berkeley Mono',
				data: Buffer.from(BerkeleyMonoRegular),
				weight: 400,
			}
		],
		height: dimensions.height,
		width: dimensions.width,
	});

	const image = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: dimensions.width,
		},
	}).render()

	return new Response(image.asPng(), {
		headers: {
			'Content-Type': 'image/png',
		},
	})
}

export async function getStaticPaths() {
	const posts = await getCollection('blog')
	const paths = posts.map((post) => {
		return {
			params: {
				slug: post.slug,
			},
			props: {
				title: post.data.title,
				desc: post.data.description,
				date: post.data.date
			},
		}
	})

	return paths
}
