import { useState } from "react";
import SectionHeading from "./SectionHeading";
import portfolioImage from "../assets/images/projects/portfolio_pic.png";
import snakeGameImage from "../assets/images/projects/snake_game.png";
import f1HubImage from "../assets/images/projects/f1pulse.png";
import codeHunterImage from "../assets/images/projects/code_hunter.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "F1 Pulse",
    description:
      "Real-time Formula 1 data interface. Access race telemetry, driver statistics, and circuit analytics.",
    image: f1HubImage,
    tags: ["react", "javascript", "tailwindcss", "artificial intelligence"],
    demoLink: "https://f1pulseapp.vercel.app/",
    codeLink: "https://github.com/Ervszzz/formula1-hub",
    featured: true,
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
      "A modern tech-themed portfolio website built with React, TypeScript, TailwindCSS, and Artificial Intelligence. Features include responsive design, smooth animations, interactive navigation, and a tech-inspired UI with custom styling and components.",
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

const TAG_DISPLAY: Record<string, string> = {
  all: "All",
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  python: "Python",
  tailwindcss: "TailwindCSS",
};

// Labels for tags that aren't filters
const TAG_LABELS: Record<string, string> = { ...TAG_DISPLAY, "artificial intelligence": "AI" };

const filters = Object.keys(TAG_DISPLAY);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-tech-border/60">
      <div className="container">
        <SectionHeading title="Projects" intro="Things I've built outside of work, from data apps to games." />

        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by technology">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-3.5 py-1.5 font-mono text-sm border transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-tech-cyan text-tech-dark border-tech-cyan"
                  : "text-tech-text border-tech-border hover:border-tech-cyan/60 hover:text-tech-cyan"
              }`}
            >
              {TAG_DISPLAY[filter]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`flex flex-col bg-tech-card border border-tech-border hover:border-tech-cyan/50 transition-colors duration-200 ${
                project.featured ? "md:col-span-2 lg:col-span-3 lg:flex-row" : ""
              }`}
            >
              <div className={`overflow-hidden border-b border-tech-border ${project.featured ? "lg:w-3/5 lg:border-b-0 lg:border-r" : ""}`}>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className={`w-full object-cover ${project.featured ? "h-56 md:h-72 lg:h-full" : "h-48"}`}
                />
              </div>
              <div className={`flex flex-1 flex-col p-6 ${project.featured ? "lg:p-8 lg:justify-center" : ""}`}>
                {project.featured && <p className="font-mono text-xs text-tech-amber mb-2">Featured</p>}
                <h3 className={`font-display font-semibold text-tech-ink mb-2 ${project.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {project.title}
                </h3>
                <p className="text-tech-text leading-relaxed mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="px-2.5 py-1 font-mono text-xs text-tech-text-secondary bg-tech-tag border border-tech-border">
                      {TAG_LABELS[tag] ?? tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tech-cyan hover:bg-tech-teal text-tech-dark font-semibold px-4 py-2 text-sm transition-colors duration-200"
                    >
                      Open live demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-tech-cyan/60 hover:border-tech-cyan hover:bg-tech-cyan/10 text-tech-cyan font-semibold px-4 py-2 text-sm transition-colors duration-200"
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* More projects placeholder */}
          <div className="flex flex-col justify-center border border-dashed border-tech-border p-6 min-h-[240px]">
            <h3 className="font-display text-xl font-semibold text-tech-ink mb-2">More projects in progress</h3>
            <p className="text-tech-text-secondary leading-relaxed">
              I'm building a few new things and will add them here when they're ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
