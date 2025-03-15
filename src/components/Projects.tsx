import { useState } from "react";
import portfolioImage from "../assets/images/projects/portfolio_pic.png";

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
        "A modern tech-themed portfolio website built with React, TypeScript, and TailwindCSS. Features include responsive design, smooth animations, interactive navigation, and a tech-inspired UI with custom styling and components.",
      image: portfolioImage,
      tags: ["react", "typescript", "tailwindcss", "Artificial Intelligence"],
      demoLink: "#",
      codeLink: "https://github.com/Ervszzz/personal-website",
      featured: true,
    },
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform built with React, Redux, and Firebase. Features include user authentication, product filtering, cart functionality, and payment processing.",
      image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
      tags: ["react", "redux", "firebase"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application that helps users organize tasks, set priorities, and track progress. Built with React and TypeScript with a clean, intuitive interface.",
      image: "https://via.placeholder.com/600x400?text=Task+Management+App",
      tags: ["react", "typescript", "redux"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time weather data and forecasts for locations worldwide. Utilizes external APIs and features interactive maps.",
      image: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
      tags: ["javascript", "api", "css"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  const filters = [
    "all",
    "react",
    "typescript",
    "javascript",
    "redux",
    "api",
    "firebase",
    "tailwindcss",
    "css",
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
                    &lt;Live_Demo/&gt;
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent hover:bg-tech-gray/30 text-tech-cyan px-4 py-2 transition duration-300 border border-tech-cyan font-tech text-sm"
                  >
                    &lt;View_Code/&gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
