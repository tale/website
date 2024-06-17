import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

import Atkinson from '@fontsource/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff'
import Crimson from '@fontsource/crimson-pro/files/crimson-pro-latin-700-normal.woff'

interface Props {
	title: string
	desc: string
	date: Date
}

const dimensions = {
	width: 1200,
	height: 630,
}

export async function GET(context: APIContext<Props>) {
	const { title, date, desc } = context.props
	const dateView = date.toLocaleDateString('en-US', {
		dateStyle: 'full',
	});

	const view = html`
		<div tw="flex flex-col justify-between p-12 w-full h-full bg-neutral-900">
			<div tw="flex items-center justify-between">
				<p tw="text-3xl text-neutral-300 leading-snug tracking-tight">
					${dateView}
				</p>
				<p tw="text-3xl text-neutral-300 leading-snug tracking-tight">
					tale.me
				</p>
			</div>
			<div tw="flex flex-col">
				<p
					tw="text-7xl w-full font-serif text-transparent leading-tight"
					style="
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						font-family: 'Crimson Pro', serif;
						background: linear-gradient(
							90deg,
							#0B5ACF,
							#5EC4CF
						);
					"
				>
					${title}
				</p>
				<p tw="text-3xl text-neutral-400 w-3/4 leading-tight tracking-tight">
					${desc}
				</p>
			</div>
			<div tw="flex items-center">
				<img
					src="https://github.com/tale.png?s=300"
					tw="w-18 h-18 rounded-full mr-8"
				/>
				<p tw="text-3xl text-neutral-400 w-3/4 leading-snug tracking-tight">
					Aarnav Tale
				</p>
			</div>
		</div>
	`
	const svg = await satori(view, {
		fonts: [
			{
				name: 'Atkinson Hyperlegible',
				data: Buffer.from(Atkinson),
				weight: 400,
			},
			{
				name: 'Crimson Pro',
				data: Buffer.from(Crimson),
				weight: 700
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
