import { readFile } from "node:fs/promises";
import type { APIContext, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import { ImageResponse, type ImageResponseOptions } from "takumi-js/response";
import { getPageTitle, staticPages } from "@/metadata";
import createCard from "@/og";

const options: ImageResponseOptions = {
  width: 1200,
  height: 630,
  format: "webp",
  lossless: true,
  fonts: [
    {
      name: "Berkeley Mono",
      data: await readFile("src/assets/berkeley.ttf"),
      weight: 400,
    },
  ],
};

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return [
    ...Object.entries(staticPages).map(([page, metadata]) => ({
      params: { page },
      props: { ...metadata, title: getPageTitle(metadata.title) },
    })),
    ...posts.map((post) => ({
      params: { page: `blog/${post.id}` },
      props: post.data,
    })),
  ];
}

export function GET({ props }: APIContext<InferGetStaticPropsType<typeof getStaticPaths>>) {
  return new ImageResponse(createCard(props), options);
}
