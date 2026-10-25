import { useState } from "react";
import SectionHeading from "./SectionHeading";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  details?: React.ReactNode;
  technologies: string[];
}

const listClass = "list-disc pl-5 space-y-2 marker:text-tech-teal";

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer II – Site Reliability Engineer",
    company: "Zendesk",
    period: "May 2025 – Present",
    current: true,
    highlights: [
      "Built an AI alert triage bot that investigates alerts and suggests next steps: 177 alerts in a one-month pilot, 96% accurate findings, and 54% faster investigations (approximately 90 hours saved).",
      "Resolve 10+ SEV-1 to SEV-4 incidents monthly as an on-call engineer, using incident.io and Datadog.",
    ],
    details: (
      <ul className={listClass}>
        <li>Built Claude Code tooling that automates alert and runbook review and onboarding.</li>
        <li>Review deployment PRs and GitHub Actions CI/CD pipelines to keep releases safe.</li>
        <li>Tune Datadog monitors and maintain runbooks to keep alerts accurate and actionable.</li>
        <li>Contribute investigation findings to incident postmortems and root-cause analysis.</li>
      </ul>
    ),
    technologies: ["Python", "Datadog", "incident.io", "Bash", "GitHub Actions", "AWS", "Kubernetes", "AI", "Jira", "Confluence"],
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Kodexa",
    period: "Oct 2023 – May 2025",
    highlights: [
      "Owned 7+ automated SQL reports (daily, weekly, monthly) and the ETL pipelines behind them.",
      "Monitored production with Datadog and Betterstack, fixing errors and securing credentials with AWS-managed secrets.",
    ],
    details: (
      <div className="space-y-4">
        <div>
          <h4 className="text-tech-ink font-medium mb-2">AI/ML development</h4>
          <ul className={listClass}>
            <li>Contributed to AI/ML model development and deployment.</li>
            <li>Handled model training, evaluation, and optimization.</li>
            <li>Designed and refined prompts for large language models.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-tech-ink font-medium mb-2">Data engineering</h4>
          <ul className={listClass}>
            <li>Built ETL processes for data extraction, transformation, and loading.</li>
            <li>Provided actionable insights through data analysis and reporting.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-tech-ink font-medium mb-2">Documentation and automation</h4>
          <ul className={listClass}>
            <li>Automated recurring operational tasks.</li>
            <li>Documented Python scripts and incident reports in Notion.</li>
          </ul>
        </div>
      </div>
    ),
    technologies: ["Python", "Datadog", "Betterstack", "AWS", "SQL", "ETL", "AI/ML", "LLM", "Notion"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Giant International Software Station Inc.",
    period: "Oct 2022 – Oct 2023",
    highlights: [
      "Designed and built web applications and REST APIs from Product Manager requirements.",
      "Served as interim team point of contact while the lead role was vacant, managing schedules and deadlines.",
    ],
    details: (
      <ul className={listClass}>
        <li>Tested features before and after they shipped, and fixed bugs found during development.</li>
        <li>Coordinated task distribution with teammates to keep work moving smoothly.</li>
      </ul>
    ),
    technologies: ["Web Development", "REST API", "Testing", "Team Leadership", "Project Management"],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Lingayen Provincial Capitol",
    period: "Feb 2021 – Feb 2022",
    highlights: [
      "Automated unstructured document processing using Google Vision and RPA.",
      "Built the provincial library website as its first developer.",
    ],
    technologies: ["Google Vision", "RPA", "Web Development", "Process Automation"],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggle = (id: number) =>
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-tech-border/60">
      <div className="container">
        <SectionHeading title="Experience" />

        <ol className="max-w-4xl">
          {experiences.map((exp, index) => {
            const isOpen = expanded.includes(exp.id);
            const isLast = index === experiences.length - 1;
            const detailsId = `experience-details-${exp.id}`;

            return (
              <li key={exp.id} className="md:grid md:grid-cols-[10rem_1fr] md:gap-x-10">
                <p className="hidden md:block pt-1.5 text-right font-mono text-sm text-tech-text-secondary">
                  {exp.period}
                </p>

                <div className={`relative pl-8 border-l ${isLast ? "pb-2 border-transparent" : "pb-14 border-tech-border"}`}>
                  {/* Rail node: filled for the current role */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[6px] top-2 h-[11px] w-[11px] rounded-full ${
                      exp.current
                        ? "bg-tech-cyan shadow-[0_0_0_4px_rgba(102,252,241,0.15)]"
                        : "bg-tech-dark border border-tech-teal"
                    }`}
                  />
                  {isLast && <span aria-hidden="true" className="absolute left-0 top-0 h-3 border-l border-tech-border" />}

                  <p className="md:hidden font-mono text-sm text-tech-text-secondary mb-1">{exp.period}</p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-tech-ink">{exp.title}</h3>
                  <p className="mt-1 text-tech-cyan">{exp.company}</p>

                  <ul className={`${listClass} mt-4 text-tech-text leading-relaxed`}>
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  {exp.details && (
                    <>
                      <div id={detailsId} hidden={!isOpen} className="mt-4 text-tech-text leading-relaxed">
                        {exp.details}
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(exp.id)}
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm text-tech-teal hover:text-tech-cyan transition-colors"
                      >
                        {isOpen ? "Show less" : "Show more"}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-2.5 py-1 font-mono text-xs text-tech-text-secondary bg-tech-tag border border-tech-border"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperience;
