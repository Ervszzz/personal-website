import SectionHeading from "./SectionHeading";

interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; icon: string }[];
}

// Grouped to match the resume
const skillCategories: SkillCategory[] = [
  {
    id: "observability",
    title: "Observability and incidents",
    skills: [
      { name: "Datadog", icon: "" },
      { name: "Grafana", icon: "devicon-grafana-plain" },
      { name: "incident.io", icon: "" },
      { name: "Betterstack", icon: "" },
    ],
  },
  {
    id: "infrastructure",
    title: "SRE and infrastructure",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "ArgoCD", icon: "devicon-argocd-plain" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain" },
    ],
  },
  {
    id: "automation",
    title: "Automation and AI",
    skills: [
      { name: "Claude Code", icon: "" },
      { name: "LLM prompt engineering", icon: "" },
      { name: "RPA", icon: "" },
      { name: "Cronicle", icon: "" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Bash", icon: "devicon-bash-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "PHP", icon: "devicon-php-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "SQL", icon: "devicon-postgresql-plain" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks and frontend",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "Laravel", icon: "devicon-laravel-plain" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
      { name: "HTML and CSS", icon: "devicon-html5-plain" },
      { name: "Mocha", icon: "devicon-mocha-plain" },
    ],
  },
  {
    id: "tools",
    title: "Tools and workflow",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Jira", icon: "devicon-jira-plain" },
      { name: "Confluence", icon: "devicon-confluence-plain" },
      { name: "Linear", icon: "" },
      { name: "Notion", icon: "devicon-notion-plain" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-tech-border/60">
      <div className="container">
        <SectionHeading title="Skills" intro="What I reach for when keeping systems reliable, and what I've built with along the way." />

        <div className="grid gap-px bg-tech-border border border-tech-border sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-tech-dark p-6">
              <h3 className="font-display text-lg font-semibold text-tech-ink mb-4">{category.title}</h3>
              <ul className="space-y-2.5">
                {category.skills.map(({ name, icon }) => (
                  <li key={name} className="flex items-center gap-3 text-tech-text">
                    <span className="w-4 flex justify-center text-tech-teal" aria-hidden="true">
                      {icon ? <i className={`${icon} text-base`} /> : <span className="h-1.5 w-1.5 bg-tech-teal" />}
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
