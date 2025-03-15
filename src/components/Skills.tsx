const Skills = () => {
  const skillCategories = [
    {
      id: "devops",
      title: "DevOps & Automation",
      color: "tech-purple",
      skills: [
        "DataDog",
        "Betterstack",
        "ArgoCD",
        "GitHub Actions",
        "RPA",
        "AWS",
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      color: "tech-cyan",
      skills: ["React JS", "HTML", "CSS", "JavaScript", "TailWind CSS"],
    },
    {
      id: "backend",
      title: "Backend",
      color: "tech-teal",
      skills: ["Python", "PHP", "Laravel", "C#", "Mocha JS"],
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      color: "tech-pink",
      skills: ["GitHub", "Linear", "Notion", "Cronicle"],
    },
    {
      id: "database",
      title: "Database",
      color: "tech-cyan",
      skills: ["PostgreSQL"],
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

  return (
    <section
      id="skills"
      className="py-20 bg-tech-dark relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tech-purple/5 blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-tech-cyan/5 blur-2xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-tech-light mb-4">
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

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((category) => (
              <div key={category.id} className="relative">
                <h3
                  className={`text-lg font-tech font-semibold text-${category.color} mb-3 flex items-center`}
                >
                  <span
                    className={`inline-block w-2 h-2 bg-${category.color} mr-2`}
                  ></span>
                  {category.title}
                </h3>

                <div className="space-y-2 pl-4 border-l border-tech-teal/30">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group flex items-center">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-${category.color} opacity-70 mr-2 group-hover:opacity-100`}
                      ></div>
                      <span className="text-tech-light/80 text-sm group-hover:text-tech-light transition-colors duration-200">
                        {skill}
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
              {additionalSkills.map((skill, index) => (
                <span
                  key={index}
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
