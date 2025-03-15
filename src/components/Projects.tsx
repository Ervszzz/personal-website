import { useState } from "react";
import portfolioImage from "../assets/images/projects/portfolio_pic.png";
import snakeGameImage from "../assets/images/projects/snake_game.png";

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

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern tech-themed portfolio website built with React, TypeScript, TailwindCSS, and Artificial Intelligence. Features include responsive design, smooth animations, interactive navigation, and a tech-inspired UI with custom styling and components.",
      image: portfolioImage,
      tags: ["react", "typescript", "tailwindcss", "Artificial Intelligence"],
      demoLink: "#",
      codeLink: "https://github.com/Ervszzz/personal-website",
      featured: true,
    },
    {
      id: 1,
      title: "Snake Game",
      description:
        "The classic snake game built with Python and Turtle Graphics.",
      image: snakeGameImage,
      tags: ["Python"],
      demoLink: "#",
      codeLink:
        "https://github.com/Ervszzz/python-projects/tree/main/snake_game",
    },
  ];

  const filters = [
    "all",
    "react",
    "typescript",
    "javascript",
    "Python",
    "tailwindcss",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-20 bg-tech-gray-dark relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-tech-pink/5 blur-xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tech-light mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-tech-cyan mx-auto"></div>
          <p className="mt-4 text-tech-light/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 m-1 rounded-none capitalize font-tech ${
                activeFilter === filter
                  ? "bg-tech-cyan text-tech-dark border border-tech-cyan"
                  : "bg-tech-gray/20 text-tech-light border border-tech-gray/30 hover:border-tech-cyan/50 hover:text-tech-cyan"
              } transition duration-300`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-tech-gray-dark/80 backdrop-blur-sm border ${
                project.featured
                  ? "border-tech-cyan/40 md:col-span-2 lg:col-span-3"
                  : "border-tech-cyan/20"
              } rounded-none overflow-hidden transition-all duration-300 hover:shadow-neon hover:border-tech-cyan/50 group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full ${
                    project.featured ? "h-64 md:h-80" : "h-48"
                  } object-cover transition-transform duration-500 group-hover:scale-105`}
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-tech-cyan text-tech-dark px-3 py-1 font-tech text-sm">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-tech font-semibold text-tech-cyan mb-2">
                  {project.title}
                </h3>
                <p className="text-tech-light/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-tech-gray/30 text-tech-teal text-xs px-3 py-1 border border-tech-teal/20 mr-2 mb-2 font-tech"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tech-cyan hover:bg-tech-teal text-tech-dark px-4 py-2 transition duration-300 border border-tech-cyan font-tech text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-tech-gray/30 text-tech-cyan px-4 py-2 transition duration-300 border border-tech-cyan font-tech text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Under Construction Card */}
          <div className="bg-tech-gray-dark/80 backdrop-blur-sm border border-tech-purple/40 rounded-none overflow-hidden transition-all duration-300 hover:shadow-neon-purple hover:border-tech-purple/60 group">
            <div className="p-6 flex flex-col items-center justify-center min-h-[300px] relative">
              {/* Animated construction elements */}
              <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-purple rounded-full animate-pulse"></div>
                <div
                  className="absolute top-3/4 right-1/4 w-3 h-3 bg-tech-cyan rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-tech-pink rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-1/3 right-1/3 w-2 h-2 bg-tech-teal rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                ></div>
              </div>

              {/* Construction icon */}
              <div className="w-20 h-20 mb-6 relative">
                <div className="absolute inset-0 bg-tech-purple/20 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-full h-full flex items-center justify-center text-4xl">
                  🛠️
                </div>
              </div>

              <h3 className="text-2xl font-tech font-semibold text-tech-purple mb-4 text-center">
                More Projects Under Construction
              </h3>
              <p className="text-tech-light/80 mb-6 text-center max-w-md">
                I'm currently working on several exciting new projects that will
                be showcased here soon. Check back regularly for updates!
              </p>

              {/* Progress bar */}
              <div className="w-full max-w-xs bg-tech-gray/30 h-2 mb-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tech-purple to-tech-cyan w-2/3 animate-pulse"></div>
              </div>
              <p className="text-tech-purple/80 text-sm font-tech">
                Building in progress...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
