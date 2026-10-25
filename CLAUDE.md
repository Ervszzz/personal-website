# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow

For every change request, always:
1. Create a new branch (e.g. `feature/description`, `fix/description`, `improve/description`)
2. Make the changes on that branch
3. Commit and push
4. Open a pull request to `main`

Never commit directly to `main`.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Type-check + build to dist/
npm run lint       # Run ESLint
```

Deployment is handled automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main` — it builds and pushes to the `gh-pages` branch. Do not run `npm run deploy` manually.

## Architecture

Single-page React app (Vite + TypeScript) hosted on GitHub Pages at `/personal-website/`. The design is a calm, status-page inspired portfolio for an SRE.

**Pages and routing:** `src/lib/route.ts` maps the path to a page: `/` is the home page, `/blog/` the post list, `/blog/<slug>/` a post. `App.tsx` renders the matching page between `Header` and `Footer`. Use `homeLink(sectionId)` and `blogLink(slug)` for links so they work from any page; the Header uses `homeLink`, so its nav works from blog pages too.

**Section order on the home page (`App.tsx`):** Header → Hero → About → FeaturedWork → WorkExperience → Skills → Projects → BlogSection → Education → Testimonials → Contact → Footer, with `BackToTop` as a floating overlay. Each component renders its own `<section id="...">` with a `border-t border-line` separator. The Header nav highlights sections by these ids (`featured-work` maps to "Experience"; on blog pages "Blog" is highlighted).

**Hero:** `CareerUptime.tsx` draws one bar per month since Feb 2021, labelled by employer underneath, from the `ROLES` array in that file (0-indexed months, `end: null` for the current role). Update it when roles change. `FeaturedWork.tsx` holds the AI alert triage bot write-up and its pilot results.

**Theming (light/dark):** Colours are CSS variables (RGB channels) defined in `src/index.css` under `:root` (light) and `.dark`, exposed as Tailwind colours in `tailwind.config.js`: `bg`, `surface`, `ink`, `muted`, `line`, `accent`, `accent-ink` (text on accent), `ok`, `warn`. Always use these tokens, never raw hex, so both themes work. Light is the default; dark applies only when the visitor picks it. The inline script in `index.html` sets the `dark` class on `<html>` before paint from `localStorage.theme`, and `useTheme` (`src/hooks/useTheme.ts`) plus `ThemeToggle` handle switching.

**Shared styles:** `src/components/ui.ts` exports class strings: `container` (page width and gutters), `btnPrimary`, `btnSecondary`, `tag`, `listClass`. Use `SectionHeading` for section titles.

**Typography:** Schibsted Grotesk (`font-sans`, everything) and Martian Mono (`font-mono`, only for dates, tags and data), loaded from Google Fonts in `index.html`.

**Scroll animations:** `useScrollReveal` (`src/hooks/useScrollReveal.ts`) returns a ref; attach it to an element with `className="scroll-reveal"` and `scroll-visible` is added when it enters the viewport (a quiet fade, defined in `src/index.css`). `SectionHeading` already uses it. All motion is disabled under `prefers-reduced-motion`.

**Projects (`src/components/Projects.tsx`):** Project data is a static array at the top of the file. `featured: true` makes a project span full width. `codeLink` is optional, and `demoLink: "#"` hides the demo button. `posts` adds buttons linking to blog posts by slug. `imageAlt` overrides the default "Screenshot of ..." alt text. Project images live in `src/assets/images/projects/`. Tag display names come from `TAG_LABELS`; a tag without an entry shows as written.

**Blog:** Each post is a Markdown file in `src/content/blog/`; the file name is the URL slug. To add a post, create `src/content/blog/<slug>.md` starting with front matter:

```markdown
---
title: Post title
date: 2026-10-25
summary: One or two sentences, used in the post list and share previews.
---
```

All three fields are required (the build fails without them). Posts are loaded by `src/lib/posts.ts` (newest first), rendered with `marked`, and styled by `.post-body` in `src/index.css`. Images go in `public/blog/<slug>/` and are referenced as `/personal-website/blog/<slug>/<file>`; use WebP, and write raw `<figure>`/`<img>` HTML with `width`, `height`, `alt` and a `<figcaption>`. Inline SVG diagrams can use the theme-aware `dg-*` classes in `src/index.css`. The home page `BlogSection` shows the latest three posts. At build time the `blog-pages` plugin in `vite.config.ts` writes `dist/blog/index.html` and `dist/blog/<slug>/index.html` with each post's title, summary and URL in the meta tags, so links load directly on GitHub Pages; `src/lib/frontmatter.ts` is shared by the app and that plugin. Only publish facts the user has confirmed: no invented results, and no hostnames, local IPs or file paths from their setup.

**Contact form** uses EmailJS (`@emailjs/browser`). Service ID, template ID and public key come from `VITE_EMAILJS_*` env vars (local `.env`, GitHub Actions secrets in CI).

**Privacy:** Do not add a phone number or home location anywhere on the site, including meta tags.

**Public assets:** `public/resume/` for the resume PDF. `public/favicon.svg` adapts to light/dark. `public/og-image.png` is the social share image. `public/404.html` is copied to `dist/` at build time (via a vite plugin in `vite.config.ts`) to handle GitHub Pages SPA routing.
