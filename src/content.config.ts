import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    category: z.enum(["how-to", "agency-life"]).optional(),
    blogImage: z.string(),
  }),
});

export const collections = { blog };
