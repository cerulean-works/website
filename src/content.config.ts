import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogAuthor = z.preprocess(
    (entry) => (typeof entry === "string" ? { author: entry } : entry),
    z.object({
        author: z.string().trim().min(1),
        url: z.url({ protocol: /^https?$/ }).optional(),
        avatar: z
            .union([z.string().startsWith("/"), z.url({ protocol: /^https$/ })])
            .optional(),
    })
);

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            author: z
                .array(blogAuthor)
                .min(1)
                .default([
                    { author: "Cerulean", url: "https://cerulean.works" },
                ]),
            draft: z.boolean().default(false),
            thumbnail: z.object({
                src: z.string().startsWith("/"),
                alt: z.string().default(""),
            }),
        }),
});

export const collections = { blog };
