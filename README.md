# Cerulean website

The Cerulean marketing site and blog, built with Astro and deployed as static assets on Cloudflare.

## Development

```sh
pnpm install
pnpm dev
```

Build the production site with:

```sh
pnpm build
```

## Blog posts

Posts live in `src/content/blog` as Markdown files. The filename becomes the URL slug, so
`src/content/blog/a-place-to-begin.md` is published at `/blog/a-place-to-begin`.

Add the card image under `public/images/blog_thumbnails`, then reference its public URL in the
post frontmatter:

```md
---
title: "Post title"
description: "A short summary used in listings and search metadata."
pubDate: "2026-09-13"
updatedDate: "2026-09-20" # optional
author: "Cerulean" # optional; defaults to Cerulean
readingTime: "4 min read" # optional; calculated from the Markdown when omitted
deck: "An optional subtitle shown on the article page."
draft: false # optional; drafts are only included during local development
thumbnail:
    src: "/images/blog_thumbnails/post-slug.jpg"
    alt: "" # use empty text for decorative art, or describe an informative image
    title: |-
        Optional words
        over the image.
---

Write the post here in Markdown.
```

`src/content.config.ts` validates every post. `src/lib/blog.ts` is the shared source for draft
filtering, newest-first sorting, URLs, dates, and reading time. The homepage, blog index, generated
article routes, social metadata, and RSS feed all consume that same collection, so no route or
listing code needs to be changed when a post is added.

## Deployment

```sh
pnpm deploy
```
