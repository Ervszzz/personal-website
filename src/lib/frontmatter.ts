// Tiny front-matter parser for blog posts (`key: value` lines between `---`).
// Shared by the app and vite.config.ts, so it must not use browser APIs.

export interface PostMeta {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
}

export function parseFrontmatter(raw: string): { meta: PostMeta; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) throw new Error("Blog post is missing front matter");

  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) fields[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }

  for (const key of ["title", "date", "summary"]) {
    if (!fields[key]) throw new Error(`Blog post front matter is missing "${key}"`);
  }

  return {
    meta: { title: fields.title, date: fields.date, summary: fields.summary },
    body: raw.slice(match[0].length),
  };
}

// Slug comes from the file name: src/content/blog/my-post.md -> my-post
export const slugFromPath = (path: string) => path.replace(/^.*\//, "").replace(/\.md$/, "");
