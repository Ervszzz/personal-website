import { useScrollReveal } from "../hooks/useScrollReveal";

interface Education {
  degree: string;
  school: string;
  period: string;
  focus: string;
}

const educationList: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Saint Louis University",
    period: "2015 – 2022",
    focus: "Software Development & Data Engineering",
  },
];

const Education = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-20 bg-tech-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 scroll-reveal" ref={ref}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech-teal to-tech-cyan mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationList.map((edu) => (
            <div
              key={edu.degree}
              className="bg-tech-card border border-tech-border rounded-lg p-6 relative overflow-hidden hover:border-tech-cyan/50 transition-all duration-300 hover:shadow-tech"
            >
              {/* Tech corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tech-teal opacity-50"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tech-teal opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tech-teal opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tech-teal opacity-50"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-tech font-semibold text-tech-cyan">{edu.degree}</h3>
                <span className="font-tech text-tech-light/50 text-sm">{edu.period}</span>
              </div>
              <p className="text-tech-purple font-tech text-base mb-2">{edu.school}</p>
              <p className="text-tech-light/60 text-sm">Focus: {edu.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
