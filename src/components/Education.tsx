import SectionHeading from "./SectionHeading";

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

const certifications = [{ name: "EF SET English Certificate (C2 Proficient)", year: "2023" }];

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-tech-border/60">
      <div className="container">
        <SectionHeading title="Education" />

        <div className="max-w-4xl space-y-8">
          {educationList.map((edu) => (
            <div key={edu.degree} className="md:grid md:grid-cols-[10rem_1fr] md:gap-x-10">
              <p className="font-mono text-sm text-tech-text-secondary md:text-right md:pt-1 mb-1">{edu.period}</p>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-tech-ink">{edu.degree}</h3>
                <p className="mt-1 text-tech-cyan">{edu.school}</p>
                <p className="mt-2 text-tech-text-secondary">Focus: {edu.focus}</p>
              </div>
            </div>
          ))}

          {certifications.map((cert) => (
            <div key={cert.name} className="md:grid md:grid-cols-[10rem_1fr] md:gap-x-10">
              <p className="font-mono text-sm text-tech-text-secondary md:text-right md:pt-0.5 mb-1">{cert.year}</p>
              <p className="text-tech-text">
                <span className="text-tech-ink font-medium">Certification:</span> {cert.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
