import { useEffect } from "react";
import { findPost, formatDate } from "../lib/posts";
import { blogLink, homeLink } from "../lib/route";
import { btnSecondary, container } from "./ui";

const BlogPostPage = ({ slug }: { slug: string }) => {
  const post = findPost(slug);

  useEffect(() => {
    document.title = post ? `${post.title} | Ervin Fernandez` : "Post not found | Ervin Fernandez";
  }, [post]);

  if (!post) {
    return (
      <section className="py-20">
        <div className={container}>
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Post not found</h1>
          <p className="mt-3 text-muted">This link doesn't match any post. It may have been renamed.</p>
          <a href={blogLink()} className={`${btnSecondary} mt-6`}>
            See all posts
          </a>
        </div>
      </section>
    );
  }

  return (
    <article className="py-14 md:py-20">
      <div className={container}>
        <div className="mx-auto max-w-[44rem]">
          <a href={blogLink()} className="text-sm text-muted hover:text-ink transition-colors">
            Blog
          </a>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight text-ink">{post.title}</h1>
          <p className="mt-4 text-xl leading-snug text-muted">{post.summary}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-b border-line pb-6 font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readingMinutes} min read</span>
          </p>

          <div className="post-body mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-14 flex flex-wrap gap-3 border-t border-line pt-8">
            <a href={blogLink()} className={btnSecondary}>
              More posts
            </a>
            <a href={homeLink("contact")} className={btnSecondary}>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
