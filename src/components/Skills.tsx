import { useScrollReveal } from "../hooks/useScrollReveal";

interface SkillCategory {
  id: string;
  title: string;
  textClass: string;
  dotClass: string;
  skills: { name: string; icon: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "devops",
    title: "DevOps & Automation",
    textClass: "text-tech-purple",
    dotClass: "bg-tech-purple",
    skills: [
      { name: "DataDog", icon: "devicon-datadog-plain" },
      { name: "Betterstack", icon: "" },
      { name: "incident.io", icon: "" },
      { name: "ArgoCD", icon: "devicon-argocd-plain" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain" },
      { name: "RPA", icon: "" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    textClass: "text-tech-cyan",
    dotClass: "bg-tech-cyan",
    skills: [
      { name: "React JS", icon: "devicon-react-original" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    textClass: "text-tech-teal",
    dotClass: "bg-tech-teal",
    skills: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "Laravel", icon: "devicon-laravel-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "Mocha JS", icon: "devicon-mocha-plain" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    textClass: "text-tech-pink",
    dotClass: "bg-tech-pink",
    skills: [
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Linear", icon: "" },
      { name: "Notion", icon: "devicon-notion-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
    ],
  },
  {
    id: "database",
    title: "Database",
    textClass: "text-tech-cyan",
    dotClass: "bg-tech-cyan",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
    ],
  },
];

const additionalSkills = [
  "Slack",
  "Azure DevOps",
  "Linear",
  "Microsoft Suite",
  "Google Suite",
  "Jupyter Hub",
  "Zoom",
  "Google Meet",
  "Microsoft Teams",
];

const Skills = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-20 bg-tech-dark relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tech-purple/5 blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-tech-cyan/5 blur-2xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 scroll-reveal" ref={ref}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan via-tech-teal to-tech-purple mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal mx-auto"></div>
          <p className="mt-6 text-tech-light/80 max-w-2xl mx-auto">
            My technical toolkit spans across frontend, backend, database,
            DevOps, and workflow optimization.
          </p>
        </div>

        {/* Main Skills Card */}
        <div className="bg-tech-gray border border-tech-teal/30 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden">
          {/* Tech corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tech-cyan opacity-50"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tech-cyan opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tech-cyan opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tech-cyan opacity-50"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((category) => (
              <div key={category.id} className="relative">
                <h3 className={`text-lg font-tech font-semibold ${category.textClass} mb-3 flex items-center`}>
                  <span className={`inline-block w-2 h-2 ${category.dotClass} mr-2`}></span>
                  {category.title}
                </h3>

                <div className="space-y-2 pl-4 border-l border-tech-teal/30">
                  {category.skills.map(({ name, icon }) => (
                    <div key={name} className="group flex items-center gap-2">
                      {icon ? (
                        <i className={`${icon} text-sm ${category.textClass} opacity-70 group-hover:opacity-100 transition-opacity`} />
                      ) : (
                        <div className={`w-1.5 h-1.5 rounded-full ${category.dotClass} opacity-70 group-hover:opacity-100`} />
                      )}
                      <span className="text-tech-light/80 text-sm group-hover:text-tech-light transition-colors duration-200">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-8">
          <div className="bg-tech-gray border border-tech-teal/30 rounded-lg p-5 backdrop-blur-sm">
            <h3 className="text-lg font-tech font-semibold text-tech-light mb-4 text-center">
              Additional Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-tech-dark border border-tech-teal/50 text-tech-light/80 text-sm rounded hover:border-tech-cyan hover:text-tech-cyan transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
