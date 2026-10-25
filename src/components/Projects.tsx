import SectionHeading from "./SectionHeading";
import { btnPrimary, btnSecondary, container, tag } from "./ui";
import { blogLink } from "../lib/route";
import portfolioImage from "../assets/images/projects/portfolio_pic.png";
import snakeGameImage from "../assets/images/projects/snake_game.png";
import f1HubImage from "../assets/images/projects/f1pulse.png";
import codeHunterImage from "../assets/images/projects/code_hunter.png";
import homelabImage from "../assets/images/projects/homelab.svg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  demoLink: string;
  codeLink?: string;
  posts?: { label: string; slug: string }[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 5,
    title: "Homelab",
    description:
      "A Mac Mini at home that runs my self-hosted projects in Docker, reachable only on my home network. Every project shares one monitoring stack (Prometheus, Loki, Alertmanager and Grafana) and sends its alerts to one Telegram chat. It started with a Starlink monitor that tells real outages apart from firmware update reboots.",
    image: homelabImage,
    imageAlt: "Diagram of the homelab: the Starlink monitor, outage logger and other projects on a Mac Mini feed a shared monitoring stack of Prometheus, Loki, Alertmanager and Grafana, which drives dashboards and Telegram alerts",
    tags: ["docker", "prometheus", "grafana", "loki", "telegram bot api"],
    demoLink: "#",
    posts: [
      { label: "Read the Starlink post", slug: "home-internet-monitoring" },
      { label: "Read the homelab post", slug: "homelab-overview" },
    ],
    featured: true,
  },
  {
    id: 1,
    title: "F1 Pulse",
    description:
      "Real-time Formula 1 data interface. Access race telemetry, driver statistics, and circuit analytics.",
    image: f1HubImage,
    tags: ["react", "javascript", "tailwindcss", "artificial intelligence"],
    demoLink: "https://f1pulseapp.vercel.app/",
    codeLink: "https://github.com/Ervszzz/formula1-hub",
  },
  {
    id: 2,
    title: "Code Hunter",
    description:
      "A gamified GitHub activity tracker where every commit earns XP and every PR levels you up. Rise from Rank E to National Level — purely through your GitHub activity. Connect your GitHub account, earn XP automatically, and compete on the global leaderboard.",
    image: codeHunterImage,
    tags: ["react", "typescript", "tailwindcss"],
    demoLink: "https://codehunter-gamma.vercel.app/",
    codeLink: "https://github.com/Ervszzz/codehunter",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "This site: a status-page inspired portfolio built with React, TypeScript, and Tailwind CSS, with light and dark themes. Built with help from AI.",
    image: portfolioImage,
    tags: ["react", "typescript", "tailwindcss", "artificial intelligence"],
    demoLink: "#",
    codeLink: "https://github.com/Ervszzz/personal-website",
    featured: false,
  },
  {
    id: 4,
    title: "Snake Game",
    description: "The classic snake game built with Python and Turtle Graphics.",
    image: snakeGameImage,
    tags: ["python"],
    demoLink: "#",
    codeLink: "https://github.com/Ervszzz/python-projects/tree/main/snake_game",
  },
];

// Display labels for project tags
const TAG_LABELS: Record<string, string> = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  tailwindcss: "TailwindCSS",
  "artificial intelligence": "AI",
  docker: "Docker",
  grafana: "Grafana",
  prometheus: "Prometheus",
  loki: "Loki",
  "telegram bot api": "Telegram Bot API",
  macos: "macOS",
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Projects" intro="Things I've built outside of work, from data apps to games." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`flex flex-col overflow-hidden rounded-lg border border-line bg-surface ${
                project.featured ? "md:col-span-2 lg:col-span-3 lg:flex-row" : ""
              }`}
            >
              <div className={`overflow-hidden border-b border-line ${project.featured ? "lg:w-3/5 lg:border-b-0 lg:border-r" : ""}`}>
                <img
                  src={project.image}
                  alt={project.imageAlt ?? `Screenshot of ${project.title}`}
                  className={`w-full ${project.featured ? "aspect-[20/11] lg:aspect-auto lg:h-full object-contain bg-[#0D1418]" : "h-48 object-cover"}`}
                />
              </div>
              <div className={`flex flex-1 flex-col p-5 sm:p-6 ${project.featured ? "lg:p-8 lg:justify-center" : ""}`}>
                {project.featured && (
                  <p className="mb-2 inline-flex items-center gap-1.5 text-sm text-warn">
                    <span className="h-1.5 w-1.5 rounded-full bg-warn" aria-hidden="true" />
                    Featured
                  </p>
                )}
                <h3 className={`font-semibold tracking-tight text-ink mb-2 ${project.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {project.title}
                </h3>
                <p className="text-ink/80 leading-relaxed mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies">
                  {project.tags.map((t) => (
                    <li key={t} className={tag}>
                      {TAG_LABELS[t] ?? t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2.5">
                  {project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} text-sm px-4 py-2`}>
                      Open live demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} text-sm px-4 py-2`}>
                      View code
                    </a>
                  )}
                  {project.posts?.map((post, i) => (
                    <a
                      key={post.slug}
                      href={blogLink(post.slug)}
                      className={`${i === 0 && project.demoLink === "#" ? btnPrimary : btnSecondary} text-sm px-4 py-2`}
                    >
                      {post.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* More projects placeholder */}
          <div className="flex flex-col justify-center rounded-lg border border-dashed border-line p-6 min-h-[220px]">
            <h3 className="text-xl font-semibold tracking-tight text-ink mb-2">More projects in progress</h3>
            <p className="text-muted leading-relaxed">
              I'm building a few new things and will add them here when they're ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
