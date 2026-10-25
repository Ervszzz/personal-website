import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { container, listClass, tag } from "./ui";

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
          <h4 className="text-ink font-medium mb-2">AI/ML</h4>
          <ul className={listClass}>
            <li>Labelled data used to train and evaluate AI/ML models.</li>
            <li>Wrote and refined prompts for large language models (prompt engineering) to improve output quality.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink font-medium mb-2">Data engineering</h4>
          <ul className={listClass}>
            <li>Built ETL processes for data extraction, transformation, and loading.</li>
            <li>Provided actionable insights through data analysis and reporting.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-ink font-medium mb-2">Documentation and automation</h4>
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
    <section id="experience" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Experience" />

        <ol className="border-t border-line">
          {experiences.map((exp) => {
            const isOpen = expanded.includes(exp.id);
            const detailsId = `experience-details-${exp.id}`;

            return (
              <li key={exp.id} className="grid gap-3 border-b border-line py-8 md:grid-cols-[13rem_1fr] md:gap-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:block">
                  <p className="font-mono text-xs leading-6 text-muted">{exp.period}</p>
                  {exp.current && (
                    <p className="inline-flex items-center gap-1.5 text-sm text-ok md:mt-2">
                      <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
                      Current role
                    </p>
                  )}
                </div>

                <div className="max-w-3xl">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-ink">{exp.title}</h3>
                  <p className="mt-0.5 text-accent font-medium">{exp.company}</p>

                  <ul className={`${listClass} mt-4 text-ink/90 leading-relaxed`}>
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  {exp.details && (
                    <>
                      <div id={detailsId} hidden={!isOpen} className="mt-4 text-ink/90 leading-relaxed">
                        {exp.details}
                      </div>
                      <button
                        type="button"
                        onClick={() => toggle(exp.id)}
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink transition-colors"
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

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className={tag}>
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
