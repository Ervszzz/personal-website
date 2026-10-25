import { useEffect } from "react";
import BlogList from "./BlogList";
import { posts } from "../lib/posts";
import { homeLink } from "../lib/route";
import { container } from "./ui";

const BlogIndexPage = () => {
  useEffect(() => {
    document.title = "Blog | Ervin Fernandez";
  }, []);

  return (
    <section className="py-14 md:py-20">
      <div className={container}>
        <a href={homeLink()} className="text-sm text-muted hover:text-ink transition-colors">
          Ervin Fernandez
        </a>
        <h1 className="mt-3 mb-4 text-4xl md:text-5xl font-semibold tracking-tight text-ink">Blog</h1>
        <p className="mb-10 max-w-2xl text-lg text-muted">
          Write-ups on things I've built and what I learned along the way.
        </p>
        {posts.length > 0 ? (
          <BlogList posts={posts} />
        ) : (
          <p className="text-muted">No posts yet.</p>
        )}
      </div>
    </section>
  );
};

export default BlogIndexPage;
