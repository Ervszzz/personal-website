import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  summary: string;
  description: React.ReactNode;
  technologies: string[];
}

function getOrdinalSuffix(n: number): string {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Site Reliability Engineer II",
    company: "Zendesk",
    period: "May 2025 - Present",
    summary:
      "SRE focused on system reliability, incident management, and safe deployment practices across cloud infrastructure.",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-tech-text">
        <li>Perform on-call support by promptly responding to alerts and pages, actively managing and resolving incidents to maintain high system reliability.</li>
        <li>Review and approve GitHub pull requests and deployment requests to ensure secure, stable, and efficient releases.</li>
        <li>Maintain and improve runbooks and alert descriptions to ensure accurate, actionable guidance during incidents.</li>
      </ul>
    ),
    technologies: ["incident.io", "Atlassian", "Kubernetes", "AWS", "DataDog"],
  },
  {
    id: 2,
    title: "Python Developer",
    company: "Kodexa",
    period: "October 2023 - May 2025",
    summary:
      "Python Developer with data engineering expertise, building AI/ML solutions and supporting system reliability.",
    description: (
      <>
        <div className="mb-4">
          <h5 className="text-tech-teal font-semibold mb-1">Data Engineering & Analytics:</h5>
          <ul className="list-disc pl-5 space-y-1 text-tech-text">
            <li>Created and maintained automated reports from SQL queries to meet business needs.</li>
            <li>Knowledgeable in ETL processes, data extraction, transformation, and loading.</li>
            <li>Provide actionable insights through data analysis and reporting.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="text-tech-teal font-semibold mb-1">AI/ML Development:</h5>
          <ul className="list-disc pl-5 space-y-1 text-tech-text">
            <li>Contributed to AI/ML model development and deployment.</li>
            <li>Handled model training, evaluation, and optimization.</li>
            <li>Designed and refined prompts for large language models.</li>
            <li>Optimized LLM performance for high-quality outputs.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="text-tech-teal font-semibold mb-1">System Monitoring & DevOps:</h5>
          <ul className="list-disc pl-5 space-y-1 text-tech-text">
            <li>Monitor production environments using Datadog.</li>
            <li>Respond to alerts from Betterstack.</li>
            <li>Debug and fix errors in production environments.</li>
            <li>Integrate AWS secrets into Python scripts.</li>
          </ul>
        </div>
        <div>
          <h5 className="text-tech-teal font-semibold mb-1">Documentation & Scripting:</h5>
          <ul className="list-disc pl-5 space-y-1 text-tech-text">
            <li>Document Python scripts and incident reports in Notion.</li>
            <li>Developed and implemented automated solutions to improve efficiency and reliability.</li>
          </ul>
        </div>
      </>
    ),
    technologies: ["Python", "Datadog", "Betterstack", "AWS", "SQL", "ETL", "AI/ML", "LLM", "Notion"],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Giant International Software Station Inc.",
    period: "October 2022 - October 2023",
    summary: "Full-stack developer and interim team leader with expertise in web apps and REST APIs.",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-tech-text">
        <li>Created and designed web applications upon request of our Product Manager.</li>
        <li>Performed tests before and after functionalities were added.</li>
        <li>Fixed bugs discovered during development and testing.</li>
        <li>Created REST APIs for application integration.</li>
        <li>Assumed the role of Temporary Point of Contact for the team during the vacancy of team leader position.</li>
        <li>Managed team schedules ensuring deadlines were met and projects progressed smoothly.</li>
        <li>Collaborated with team members to ensure seamless workflow and efficient task distribution.</li>
      </ul>
    ),
    technologies: ["Web Development", "REST API", "Testing", "Team Leadership", "Project Management"],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Lingayen Provincial Capitol",
    period: "February 2021 - February 2022",
    summary: "Automation specialist who pioneered document processing with Google Vision and RPA.",
    description: (
      <ul className="list-disc pl-5 space-y-2 text-tech-text">
        <li>Implemented processing of unstructured documents using Google Vision and Robotic Process Automation.</li>
        <li>Took proactive steps to streamline certain business processes through automation.</li>
        <li>Pioneer developer of the provincial library website.</li>
      </ul>
    ),
    technologies: ["Google Vision", "RPA", "Web Development", "Process Automation"],
  },
];

const WorkExperience = () => {
  const [expandedDetails, setExpandedDetails] = useState<number[]>([]);
  const headingRef = useScrollReveal<HTMLDivElement>();

  const toggleDetails = (id: number) => {
    setExpandedDetails((prev) =>
      prev.includes(id) ? prev.filter((expId) => expId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto py-20 px-4 md:px-8">
      <div className="text-center mb-16 scroll-reveal" ref={headingRef}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-tech-cyan to-tech-teal">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-purple to-tech-cyan mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Hexagonal grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIxMDAiPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik00MyAwdjE1bTAgNzB2MTVNMCAxNWg4TTAgODVoOG03MCAwaDhtNzAtNzBoOE04IDE1TDAgMjkuNW0wIDQxTDggODVtNzAgMGw4LTE0LjVtMC00MUw3OCAxNW0tNzAgMGw0MyAyNW00MyAwbC00MyAyNW0wIDBsLTQzIDI1bTAgMGw0MyAyNSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tech-border transform -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-purple via-tech-cyan to-tech-teal transform -translate-x-1/2 hidden md:block opacity-40"></div>

        {/* Animated light on timeline */}
        <div className="absolute left-1/2 top-0 w-1 h-24 bg-gradient-to-b from-transparent via-tech-cyan to-transparent transform -translate-x-1/2 hidden md:block opacity-60 animate-timeline-pulse"></div>

        {/* Timeline content */}
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-16 relative group">
              {/* Timeline node */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block z-20">
                <div className="w-8 h-8 rounded-full bg-tech-dark border-2 border-tech-border flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-tech-purple to-tech-cyan group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </div>

              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start pt-4 md:pt-0`}>
                {/* Time period */}
                <div className={`md:w-1/2 mb-6 md:mb-0 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} items-start px-4`}>
                  <div className={`bg-tech-dark border-2 border-tech-border rounded-lg p-4 relative overflow-hidden group-hover:border-tech-cyan transition-all duration-300 shadow-md hover:shadow-tech ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 text-center">
                      <span className="font-mono text-tech-cyan font-bold text-xl block mb-2">{exp.period}</span>
                      <span className="inline-block px-3 py-1 text-xs rounded-md bg-tech-purple/20 text-tech-purple border border-tech-purple/30">
                        {index === 0
                          ? "Current"
                          : `${experiences.length - index}${getOrdinalSuffix(experiences.length - index)} Position`}
                      </span>
                    </div>

                    {/* Tech corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content card */}
                <div className="md:w-1/2 px-4">
                  <div className="bg-tech-card border border-tech-border rounded-lg p-6 shadow-md hover:shadow-tech transition-all duration-300 transform hover:-translate-y-1 group-hover:border-tech-cyan relative overflow-hidden">
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-tech-cyan mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-tech-purple mb-3">{exp.company}</h4>
                      <div className="flex items-center mb-4">
                        <div className="h-px w-12 bg-tech-border"></div>
                        <div className="h-px flex-grow bg-gradient-to-r from-tech-border to-transparent"></div>
                      </div>
                    </div>

                    <p className="text-tech-light font-medium mb-4 leading-relaxed">{exp.summary}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-md bg-tech-tag text-tech-text-secondary border border-tech-border/30 hover:bg-tech-tag/80 hover:border-tech-cyan/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => toggleDetails(exp.id)}
                      className="w-full flex items-center justify-center py-2 px-4 bg-tech-dark border border-tech-border hover:border-tech-cyan text-tech-light text-sm rounded-md transition-colors duration-200 group"
                    >
                      <span className="mr-2">{expandedDetails.includes(exp.id) ? "Hide" : "Show"} Details</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${expandedDetails.includes(exp.id) ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {expandedDetails.includes(exp.id) && (
                      <div className="mt-4 text-tech-text leading-relaxed border-t border-tech-border/30 pt-4 animate-fadeIn">
                        {exp.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
