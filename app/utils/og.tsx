import { initWasm, Resvg } from '@resvg/resvg-wasm'
import satori, { SatoriOptions } from 'satori'
import colors from 'tailwindcss/colors'

import { Post } from './blog'
let loaded = false

export async function renderImage(post: Post, url: string) {
	if (!loaded) {
		await initWasm(fetch(new URL('/index_bg.wasm', url).toString()))
		loaded = true
	}

	const fontBuffer = await fontSans(url)
	const opts = {
		width: 1200,
		height: 630,
		fonts: [{
			name: 'Atkinson Hyperlegible',
			data: fontBuffer,
			style: 'normal',
		}],
	} satisfies SatoriOptions

	const svg = await satori(
		<div
			style={{
				width: opts.width,
				height: opts.height,
				padding: '40px 40px 0 40px',
				background: colors.neutral[900],
				fontFamily: 'Atkinson Hyperlegible',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<p style={{
				color: colors.neutral[300],
				fontSize: 32,
				marginTop: 60,
				marginBottom: 20,
			}}
			>
				{post.date.toLocaleDateString()}
			</p>
			<h1 style={{
				color: colors.neutral[100],
				fontSize: 64,
				marginTop: 0,
				marginBottom: 20,
			}}
			>
				{post.title}
			</h1>
			<img
				src={post.image}
				alt={post.title}
				width={700}
				height={350}
				style={{
					width: 700,
					height: 350,
					marginTop: 20,
					borderRadius: '10px 10px 0 0',
					boxShadow: '0 10px 10px rgba(0, 0, 0, 0.25)',
				}}
			/>
		</div>,
		opts,
	)

	const resvg = new Resvg(svg)
	const png = resvg.render()
	return png.asPng()
}

async function fontSans(base: string) {
	const res = await fetch(new URL(`${base}/atkinson.ttf`))
	return res.arrayBuffer()
}
