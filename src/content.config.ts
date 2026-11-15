import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";

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
  projects: defineCollection({
    loader: file("content/projects.json"),
    schema: z.object({
      name: z.string(),
      description: z.string(),
      link: z.url(),
    }),
  }),
  sponsorUsers: defineCollection({
    loader: file("content/sponsors.json", {
      parser: (text) => JSON.parse(text).users,
    }),
    schema: z.object({
      name: z.string(),
      avatar: z.url(),
      url: z.url(),
    }),
  }),
  sponsorOrganizations: defineCollection({
    loader: file("content/sponsors.json", {
      parser: (text) => JSON.parse(text).orgs,
    }),
    schema: z.object({
      name: z.string(),
      avatar: z.url(),
      url: z.url(),
    }),
  }),
  sponsorTotal: defineCollection({
    loader: file("content/sponsors.json", {
      parser: (text) => JSON.parse(text).totalStat,
    }),
    schema: z.object({
      total: z.number(),
    }),
  }),
};
