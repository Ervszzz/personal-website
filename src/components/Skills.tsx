const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Redux", level: 80 },
  ];

  const otherSkills = [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Git", level: 85 },
    { name: "UI/UX Design", level: 75 },
    { name: "Responsive Design", level: 90 },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-tech-dark relative overflow-hidden"
    >
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-tech-teal/5 blur-xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tech-light mb-4">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-tech-cyan mx-auto"></div>
          <p className="mt-4 text-tech-light/80 max-w-2xl mx-auto">
            Here are my technical skills and competencies that I've developed
            over the years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-tech-gray-dark/50 p-6 border border-tech-cyan/20 backdrop-blur-sm">
            <h3 className="text-xl font-tech font-semibold text-tech-cyan mb-6">
              &lt; Frontend_Development /&gt;
            </h3>
            {frontendSkills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="text-tech-light font-medium font-tech">
                    {skill.name}
                  </span>
                  <span className="text-tech-teal">{skill.level}%</span>
                </div>
                <div className="w-full bg-tech-gray/50 rounded-none h-2.5">
                  <div
                    className="bg-tech-cyan h-2.5 rounded-none"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-tech-gray-dark/50 p-6 border border-tech-cyan/20 backdrop-blur-sm">
            <h3 className="text-xl font-tech font-semibold text-tech-purple mb-6">
              &lt; Other_Skills /&gt;
            </h3>
            {otherSkills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="text-tech-light font-medium font-tech">
                    {skill.name}
                  </span>
                  <span className="text-tech-teal">{skill.level}%</span>
                </div>
                <div className="w-full bg-tech-gray/50 rounded-none h-2.5">
                  <div
                    className="bg-tech-purple h-2.5 rounded-none"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
