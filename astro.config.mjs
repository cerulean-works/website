// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://cerulean.works",
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
    integrations: [mdx(), sitemap()],
});
