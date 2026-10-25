import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";
import { parseFrontmatter, slugFromPath } from "./src/lib/frontmatter";

const BASE = "/personal-website/";
const SITE_URL = "https://ervszzz.github.io/personal-website/";
const BLOG_DIR = "src/content/blog";

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Give a copy of dist/index.html its own title, description and share URL
function withMeta(html: string, { title, description, url, type }: { title: string; description: string; url: string; type: string }) {
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:type" content=")[^"]*(")/, `$1${type}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`);
}

// GitHub Pages only serves files that exist, so write dist/blog/index.html and
// dist/blog/<slug>/index.html. Each is the app shell with the post's own meta
// tags, so links load directly (no 404 redirect) and share previews are right.
const blogPages = (): Plugin => ({
  name: "blog-pages",
  apply: "build",
  closeBundle() {
    const shell = fs.readFileSync(resolve("dist", "index.html"), "utf8");
    const write = (dir: string, html: string) => {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(resolve(dir, "index.html"), html);
    };

    write(
      resolve("dist", "blog"),
      withMeta(shell, {
        title: "Blog | Ervin Fernandez",
        description: "Write-ups on things I've built and what I learned along the way.",
        url: `${SITE_URL}blog/`,
        type: "website",
      })
    );

    const files = fs.existsSync(BLOG_DIR) ? fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md")) : [];
    for (const file of files) {
      const { meta } = parseFrontmatter(fs.readFileSync(resolve(BLOG_DIR, file), "utf8"));
      const slug = slugFromPath(file);
      write(
        resolve("dist", "blog", slug),
        withMeta(shell, {
          title: `${meta.title} | Ervin Fernandez`,
          description: meta.summary,
          url: `${SITE_URL}blog/${slug}/`,
          type: "article",
        })
      );
    }
    console.log(`Wrote blog pages for ${files.length} post(s)`);
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-404-html",
      closeBundle() {
        try {
          // Copy 404.html to dist directory
          if (fs.existsSync("public/404.html")) {
            fs.copyFileSync("public/404.html", resolve("dist", "404.html"));
            console.log("Copied 404.html to dist directory");
          }
        } catch (error) {
          console.error("Error copying 404.html:", error);
        }
      },
    },
    blogPages(),
  ],
  base: BASE,
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    sourcemap: false,
  },
});
