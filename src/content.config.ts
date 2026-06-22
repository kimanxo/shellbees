import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const buzzes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/buzzes" }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    image: z.string(),
    alt: z.string(),
    isArchived: z.boolean().optional(),
    isLocked: z.boolean().optional(),
    publishDate: z.string().optional(),
    
  }),
});

const protocols = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/protocols" }),
  schema: z.object({
    title: z.string(),
    label: z.string(),
    image: z.string(),
    alt: z.string(),
    status: z.string(),
    isQueue: z.boolean().optional(),
  }),
});

export const collections = { buzzes, protocols };
