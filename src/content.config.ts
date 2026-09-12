import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            author: z.string().default("Cerulean"),
            readingTime: z.string().optional(),
            deck: z.string().optional(),
            draft: z.boolean().default(false),
            thumbnail: z.object({
                src: z.string().startsWith("/"),
                alt: z.string().default(""),
                title: z.string().optional(),
            }),
        }),
});

export const collections = { blog };
