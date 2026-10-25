import { marked } from "marked";
import { parseFrontmatter, slugFromPath, type PostMeta } from "./frontmatter";

export interface Post extends PostMeta {
  slug: string;
  html: string;
  readingMinutes: number;
}

// Every Markdown file in src/content/blog is a post
const files = import.meta.glob("../content/blog/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw);
    const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return {
      ...meta,
      slug: slugFromPath(path),
      html: marked.parse(body, { async: false }),
      readingMinutes: Math.max(1, Math.round(words / 220)),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const findPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
