import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Developed and maintained web applications using React, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description:
        "Designed and implemented responsive user interfaces for web applications. Worked closely with UX designers to create intuitive and engaging user experiences.",
      technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Sass"],
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "Creative Web Studios",
      period: "2018 - 2019",
      description:
        "Assisted in the development of client websites and web applications. Gained hands-on experience with modern web development technologies and practices.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    },
  ];

  // Add the keyframe animation to the document head
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes timeline-pulse {
        0% { transform: translateY(-100%) translateX(-50%); opacity: 0; }
        50% { opacity: 0.8; }
        100% { transform: translateY(1000%) translateX(-50%); opacity: 0; }
      }
      .animate-timeline-pulse {
        animation: timeline-pulse 10s infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="container mx-auto py-20 px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-tech-cyan">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-purple to-tech-cyan mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Hexagonal grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSIxMDAiPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGQ9Ik00MyAwdjE1bTAgNzB2MTVNMCAxNWg4TTAgODVoOG03MCAwaDhtNzAtNzBoOE04IDE1TDAgMjkuNW0wIDQxTDggODVtNzAgMGw4LTE0LjVtMC00MUw3OCAxNW0tNzAgMGw0MyAyNW00MyAwbC00MyAyNW0wIDBsLTQzIDI1bTAgMGw0MyAyNSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>

        {/* Central timeline line with enhanced styling */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-tech-border transform -translate-x-1/2 hidden md:block"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-purple via-tech-cyan to-tech-teal transform -translate-x-1/2 hidden md:block opacity-40"></div>

        {/* Animated light effect traveling down the timeline */}
        <div className="absolute left-1/2 top-0 w-1 h-24 bg-gradient-to-b from-transparent via-tech-cyan to-transparent transform -translate-x-1/2 hidden md:block opacity-60 animate-timeline-pulse"></div>

        {/* Timeline content */}
        <div className="relative z-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-24 relative group">
              {/* Timeline node */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block z-20">
                <div className="w-8 h-8 rounded-full bg-tech-dark border-2 border-tech-border flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-tech-purple to-tech-cyan group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Alternating layout for timeline effect */}
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start pt-4 md:pt-0`}
              >
                {/* Time period - alternating sides with adjusted alignment */}
                <div
                  className={`md:w-1/2 mb-6 md:mb-0 flex ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  } items-start px-4`}
                >
                  <div
                    className={`bg-tech-dark border-2 border-tech-border rounded-lg p-4 relative overflow-hidden group-hover:border-tech-cyan transition-all duration-300 shadow-md hover:shadow-tech ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Time period */}
                    <div className="relative z-10 text-center">
                      <span className="font-mono text-tech-cyan font-bold text-xl block mb-2">
                        {exp.period}
                      </span>
                      <span className="inline-block px-3 py-1 text-xs rounded-md bg-tech-purple/20 text-tech-purple border border-tech-purple/30">
                        {index === 0
                          ? "Current"
                          : `${experiences.length - index}${
                              index === 1 ? "nd" : index === 2 ? "rd" : "th"
                            } Position`}
                      </span>
                    </div>

                    {/* Tech corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content card - alternating sides */}
                <div className="md:w-1/2 px-4">
                  <div className="bg-tech-card border border-tech-border rounded-lg p-6 shadow-md hover:shadow-tech transition-all duration-300 transform hover:-translate-y-1 group-hover:border-tech-cyan relative overflow-hidden">
                    {/* Content header */}
                    <div className="mb-5">
                      <h3 className="text-2xl font-bold text-tech-cyan mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-tech-purple mb-3">
                        {exp.company}
                      </h4>

                      {/* Tech separator */}
                      <div className="flex items-center mb-4">
                        <div className="h-px w-12 bg-tech-border"></div>
                        <div className="mx-2 w-3 h-3 rounded-sm bg-tech-dark border border-tech-cyan rotate-45 group-hover:bg-tech-cyan/20 transition-colors duration-300"></div>
                        <div className="h-px flex-grow bg-gradient-to-r from-tech-border to-transparent"></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-tech-text mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm rounded-md bg-tech-tag text-tech-text-secondary border border-tech-border/30 hover:bg-tech-tag/80 hover:border-tech-cyan/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
