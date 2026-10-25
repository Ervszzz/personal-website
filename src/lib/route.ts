// Minimal path routing: "/" is the home page, "/blog" lists posts,
// "/blog/<slug>" shows one post. Static copies of index.html are written
// for blog paths at build time (see vite.config.ts), and public/404.html
// is shown for anything else on GitHub Pages.

export type Route = { page: "home" } | { page: "blog" } | { page: "post"; slug: string };

export const BASE = import.meta.env.BASE_URL; // "/personal-website/"

export function getRoute(pathname = window.location.pathname): Route {
  const path = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname.replace(/^\//, "");
  const [first, second] = path.split("/").filter(Boolean);
  if (first === "blog") return second ? { page: "post", slug: second } : { page: "blog" };
  return { page: "home" };
}

export const homeLink = (sectionId?: string) => (sectionId ? `${BASE}#${sectionId}` : BASE);
export const blogLink = (slug?: string) => (slug ? `${BASE}blog/${slug}/` : `${BASE}blog/`);
