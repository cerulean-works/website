# Cerulean website

The Cerulean marketing site and blog, built with Astro and deployed as static assets on Cloudflare.

## Design system

Read [the Cerulean style reference](docs/design-system.md) for the general visual
language, tokens, artwork, and composition patterns across websites, presentations,
reports, posters, teaching materials, and print. [Web implementation](docs/web-implementation.md)
contains the Astro component contracts and homepage/blog/article recipes. The
[blog implementation trial](docs/design-system-trial.md) explains how the guide was
tested and clarified through a separate agent's implementation.

Shared primitives live in `src/styles/design-system.css`, with page-specific compositions
in `home.css` and `blog.css`. `BaseLayout` owns the header, footer, theme restoration,
and navigation. The homepage uses `headerMode="after-hero"`; interior pages use the
default immediately visible header. Approved art lives in `public/images/design/`.

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

Add the approved art under `public/images/blog_thumbnails` (or reuse approved art from
`public/images/design`), then reference its public URL in the post frontmatter. This is
the single source for listing art and the article's social image; do not override it
by post ID in a template. Titles are rendered outside the artwork.

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
