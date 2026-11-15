import type { APIContext, InferGetStaticPropsType } from "astro";
import { getCollection } from "astro:content";
import { renderCard } from "@/og";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({ params: { id: post.id }, props: post.data }));
}

export function GET({ props }: APIContext<InferGetStaticPropsType<typeof getStaticPaths>>) {
  return renderCard(props);
}
