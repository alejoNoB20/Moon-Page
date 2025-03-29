import { defineCollection, z } from "astro:content";

const groups = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    img: z.string(),
  }),
});

export const collections = { groups };
