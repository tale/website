import { getCollection } from "astro:content";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";
import sharp from "sharp";
import berkeley from "@/assets/berkeley.ttf";
import ascii from "@/assets/ascii.txt?raw";

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({
		params: { id: post.id },
		props: post.data,
	}));
}

const WIDTH = 1200;
const HEIGHT = 630;
const SCALE_FACTOR = 4;

const options: SatoriOptions = {
	width: WIDTH,
	height: HEIGHT,
	pointScaleFactor: SCALE_FACTOR,
	fonts: [
		{
			name: "Berkeley Mono",
			data: Buffer.from(berkeley),
			weight: 100,
		},
	],
};

const formatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "long",
	day: "numeric",
});

const [mountain] = ascii.split("\n\n");
export async function GET({
	props,
}: APIContext<InferGetStaticPropsType<typeof getStaticPaths>>) {
	const { title, date, description } = props;
	const view = {
		type: "div",
		props: {
			style: {
				display: "flex",
				flexDirection: "column",
				width: WIDTH,
				height: HEIGHT,
				padding: 48,
				backgroundColor: "#101010",
				color: "white",
				fontFamily: "Berkeley Mono",
			},
			children: [
				{
					type: "div",
					props: {
						style: {
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							fontSize: 24,
							marginBottom: 16,
						},
						children: [
							{ type: "span", props: { children: "tale.me" } },
							{
								type: "span",
								props: {
									style: {
										opacity: 0.6,
									},
									children: formatter.format(date),
								},
							},
						],
					},
				},
				{
					type: "hr",
					props: {
						style: {
							width: "100%",
							borderColor: "#303030",
						},
					},
				},
				{
					type: "h1",
					props: {
						children: title,
						style: {
							fontSize: 72,
						},
					},
				},
				{
					type: "p",
					props: {
						style: {
							marginTop: 8,
							fontSize: 32,
							opacity: 0.8,
							maxWidth: "75%",
						},
						children: description,
					},
				},
				{
					type: "pre",
					props: {
						style: {
							marginLeft: "auto",
							whiteSpace: "pre",
							fontFamily: "Berkeley Mono",
							fontSize: 16,
							lineHeight: 1,
							opacity: 0.7,
							color: "#888888",
						},
						children: mountain,
					},
				},
			],
		},
	};

	const svg = await satori(view, options);
	const downsampled = await sharp(Buffer.from(svg))
		.resize(WIDTH, HEIGHT, {
			kernel: "lanczos3",
			withoutEnlargement: true,
			fastShrinkOnLoad: true,
		})
		.png({
			quality: 100,
			compressionLevel: 9,
			adaptiveFiltering: true,
			palette: true,
			effort: 10,
			force: true,
		})
		.toBuffer();

	return new Response(new Uint8Array(downsampled), {
		headers: {
			"Content-Type": "image/png",
		},
	});
}
