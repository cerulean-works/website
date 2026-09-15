import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

interface BlogPostOptions {
    includeDrafts?: boolean;
}

export async function getBlogPosts({
    includeDrafts = import.meta.env.DEV,
}: BlogPostOptions = {}) {
    const posts = await getCollection("blog");

    return posts
        .filter((post) => includeDrafts || !post.data.draft)
        .toSorted((a, b) => {
            const dateDifference =
                b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
            return dateDifference || a.data.title.localeCompare(b.data.title);
        });
}

export function getPostHref(post: BlogPost) {
    return `/blog/${post.id}`;
}

export function formatPostDate(date: Date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getReadingTime(post: BlogPost) {
    if (post.data.readingTime) return post.data.readingTime;

    const plainText = (post.body ?? "")
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`[^`]*`/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/[#[\]()*_>~-]/g, " ");
    const words = plainText.trim().match(/\S+/g)?.length ?? 0;

    return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
