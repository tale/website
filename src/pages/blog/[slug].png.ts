import satori, { type FontWeight, type SatoriOptions } from "satori";
import { html } from "satori-html";
import { Resvg, type ResvgRenderOptions } from "@resvg/resvg-js";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

import WorkSansRegular from '@/assets/fonts/WorkSans-Regular.ttf?url'
import WorkSansBold from '@/assets/fonts/WorkSans-Bold.ttf?url'
import BerkeleyMonoRegular from '@/assets/fonts/BerkeleyMono-Regular.ttf?url';

interface Props {
	title: string
	desc: string
	date: Date
}

const dimensions = {
	width: 1200,
	height: 630,
}

const { satoriConfig, resvgConfig } = await loadFontConfig();
export async function GET(context: APIContext<Props>) {
	const { title, date, desc } = context.props
	const dateView = date.toLocaleDateString('en-US', {
		dateStyle: 'long'
	});

	const view = html`
		<div tw="flex w-full h-full p-8 bg-slate-900">
			<div tw="flex flex-col w-full h-full p-8 pt-0 justify-between border-2 border-stone-300">
				<div
					tw="flex flex-col my-24"
					style="font-family: 'Work Sans'; font-weight: 400;"
				>
					<div tw="text-7xl font-bold text-stone-100">
						${title}
					</div>
					<p tw="text-3xl text-stone-200 w-3/4 mt-8">
						${desc}
					</p>
				</div>
				<div tw="flex items-end justify-between">
					<div tw="flex items-center">
						<img
							src="https://github.com/tale.png?s=300"
							tw="w-24 rounded-full border border-2 border-stone-300"
						/>
						<div
							tw="flex flex-col ml-6 text-stone-300"
							style="font-family: 'Berkeley Mono';"
						>
							<span tw="text-4xl font-bold">
								Aarnav Tale
							</span>
							<span tw="text-3xl">
								tale.me
							</span>
						</div>
					</div>
					<p
						tw="text-4xl text-stone-300 mr-3"
						style="font-family: 'Berkeley Mono';"
					>
						${dateView}
					</p>
				</div>
			</div>
		</div>
	`
	const svg = await satori(view, satoriConfig);
	const image = new Resvg(svg, resvgConfig).render();
	const downsampled = await sharp(image.asPng())
		.resize(dimensions.width, dimensions.height, {
			kernel: 'lanczos2',
			withoutEnlargement: true,
		})
		.png()
		.toBuffer();

	return new Response(new Uint8Array(downsampled), {
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

async function loadFontConfig() {
	// This is horrible, horrible code
	const root = fileURLToPath(new URL(import.meta.env.DEV
		? '../../../'
		: '../../',
		import.meta.url).href);

	const fonts = [
		{ name: 'Work Sans', weight: 400, path: join(root, WorkSansRegular) },
		{ name: 'Work Sans', weight: 700, path: join(root, WorkSansBold) },
		{ name: 'Berkeley Mono', weight: 400, path: join(root, BerkeleyMonoRegular) }
	]

	const paths = fonts.map(f => f.path);

	const resvgConfig = {
		dpi: 288,
		fitTo: { mode: 'zoom', value: 8 },
		shapeRendering: 2,
		textRendering: 2,
		imageRendering: 0,
		font: {
			loadSystemFonts: false,
			fontFiles: paths,
		},
	} satisfies ResvgRenderOptions

	const satoriConfig = {
		height: dimensions.height,
		width: dimensions.width,
		embedFont: false,
		pointScaleFactor: 3,
		fonts: await Promise.all(
			fonts.map(async (font) => {
				const data = await readFile(font.path);
				return {
					name: font.name,
					data: Buffer.from(data),
					weight: font.weight as FontWeight,
				};
			})
		),
	} satisfies SatoriOptions;
	return { satoriConfig, resvgConfig };
}
