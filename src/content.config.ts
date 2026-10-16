import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(15),
    section: z.enum(["guides", "blog", "glossary"]),
    slug: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
    sources: z.array(z.url()).min(1),
    category: z.enum(['choice','budget','clients','routing','troubleshooting','measurement','privacy','streaming','ai','workflow']).optional(),
    order: z.number().int().optional(),
  }),
});
export const collections = { articles };
