import { blogLink } from "../lib/route";
import { formatDate, type Post } from "../lib/posts";

const BlogList = ({ posts }: { posts: Post[] }) => (
  <ol className="border-t border-line">
    {posts.map((post) => (
      <li key={post.slug} className="border-b border-line">
        <a href={blogLink(post.slug)} className="group grid gap-2 py-6 md:grid-cols-[13rem_1fr] md:gap-10">
          <p className="font-mono text-xs leading-7 text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="mt-1 text-ink/80 leading-relaxed">{post.summary}</p>
            <p className="mt-2 text-sm text-muted">{post.readingMinutes} min read</p>
          </div>
        </a>
      </li>
    ))}
  </ol>
);

export default BlogList;
