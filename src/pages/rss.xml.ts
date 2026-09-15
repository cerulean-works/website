import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";
import { getBlogPosts, getPostHref } from "../lib/blog";

export async function GET(context: APIContext) {
    const posts = await getBlogPosts({ includeDrafts: false });

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `${getPostHref(post)}/`,
        })),
    });
}
