import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
    }),
  }),
};
