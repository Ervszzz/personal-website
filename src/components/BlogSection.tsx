import BlogList from "./BlogList";
import SectionHeading from "./SectionHeading";
import { posts } from "../lib/posts";
import { blogLink } from "../lib/route";
import { container } from "./ui";

const LATEST = 3;

// Latest posts on the home page
const BlogSection = () => {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Blog" intro="Write-ups on things I've built and what I learned along the way." />
        <BlogList posts={posts.slice(0, LATEST)} />
        {posts.length > LATEST && (
          <a href={blogLink()} className="mt-6 inline-block font-medium text-accent hover:text-ink transition-colors">
            All posts
          </a>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
