import SectionHeading from "./SectionHeading";
import { container } from "./ui";

// Grouped to match the resume
const skillCategories = [
  { title: "Observability and incidents", skills: ["Datadog", "Grafana", "incident.io", "Betterstack"] },
  { title: "SRE and infrastructure", skills: ["AWS", "Kubernetes", "Docker", "ArgoCD", "GitHub Actions"] },
  { title: "Automation and AI", skills: ["Claude Code", "LLM prompt engineering", "RPA", "Cronicle"] },
  { title: "Languages", skills: ["Python", "Bash", "JavaScript", "PHP", "C#", "SQL"] },
  { title: "Frameworks and frontend", skills: ["React", "Laravel", "Tailwind CSS", "HTML and CSS", "Mocha"] },
  { title: "Tools and workflow", skills: ["Git", "GitHub", "Jira", "Confluence", "Linear", "Notion"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Skills" intro="What I reach for when keeping systems reliable, and what I've built with along the way." />

        <dl className="border-t border-line">
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className="grid gap-2 border-b border-line py-5 md:grid-cols-[13rem_1fr] md:gap-10">
              <dt className="font-medium text-ink">{title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-ink/80">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
