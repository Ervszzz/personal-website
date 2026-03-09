import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface Testimonial {
  name: string;
  title: string;
  relationship: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Paolo Yniguez",
    title: "IT Operations Engineer @ ING",
    relationship: "Senior Colleague @ Kodexa",
    text: "I've had the opportunity to work alongside Ervin at Kodexa, and I can confidently recommend him as an exceptional Python developer.\n\nErvin not only has a strong proficiency in Python but also brings a fantastic work ethic and attitude to every project. He is incredibly diligent, consistently writing clean, efficient, and maintainable code. His technical skills are matched by his commitment to excellence, always ensuring that the solutions he delivers are not only functional but also scalable and high-quality.\n\nWhat really stands out about Ervin is his versatility and willingness to expand his skill set beyond Python development. In addition to his development expertise, he has contributed significantly to engineering and DevOps work, supporting the integration of systems, automating workflows, and optimizing infrastructure.\n\nErvin approaches every challenge with enthusiasm and determination, whether it's debugging a critical issue, optimizing performance, or collaborating on a new feature. He consistently demonstrates a proactive and solution-oriented attitude that makes him a joy to work with.",
  },
  {
    name: "Civer Don Raquipiso",
    title: "Customer Success Manager @ Kodexa",
    relationship: "Teammate @ Kodexa",
    text: "I had the pleasure of working with Ervin on various data-driven initiatives, including data operations reports, GitHub Actions, ETL processes, and data extraction. As a software developer, Ervin brings a strong technical foundation, problem-solving mindset, and a collaborative spirit to every project.\n\nHis ability to design and implement efficient solutions has significantly improved our workflow, ensuring seamless data processing and automation. Ervin's expertise in software development, combined with his adaptability and attention to detail, makes him a valuable asset to any team.\n\nI highly recommend Ervin for any role that requires technical excellence, innovation, and a proactive approach to problem-solving. He is not only a skilled developer but also a great teammate who fosters a productive and positive work environment.",
  },
  {
    name: "Mark Perez",
    title: "Senior DevSecOps Engineer @ Capgemini",
    relationship: "Mentor @ Kodexa",
    text: "I highly recommend Ervin as a Python developer. He has a strong command of Python programming and consistently delivers high-quality work. Ervin is able to tackle complex problems and produce efficient and effective solutions.\n\nHe is a valuable asset to any team and always goes above and beyond to ensure projects are completed successfully. I have full confidence in Ervin's abilities and would not hesitate to work with him again in the future.",
  },
  {
    name: "Matthew Paul Sayco",
    title: "Software Application Developer @ Outsourced",
    relationship: "Team Lead @ Giant International Software",
    text: "Ervin has exceeded the expectations of many as he has showcased his effectiveness and efficiency in the short amount of time that I have worked with him. He is a fast learner and is enthusiastic to learn. He is proactive in solving all the challenges that come on his way. A team player who is quick to collaborate to address the hurdles and ensure that he is aligned with the goal.\n\nI highly recommend Ervin to any development team as he is able to adapt quickly and he has shown how effective and efficient he can be.",
  },
];

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const Testimonials = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-20 bg-tech-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-10 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 scroll-reveal" ref={ref}>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tech-teal via-tech-cyan to-tech-purple mb-4">
            Recommendations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-teal mx-auto" />
          <p className="mt-6 text-tech-light/80 max-w-2xl mx-auto">
            What colleagues and mentors have said on LinkedIn.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <div className="bg-tech-card border border-tech-border rounded-lg p-8 relative overflow-hidden hover:border-tech-cyan/40 transition-all duration-300 hover:shadow-tech">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tech-teal opacity-50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tech-teal opacity-50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tech-teal opacity-50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tech-teal opacity-50" />

            <QuoteIcon className="w-8 h-8 text-tech-cyan/20 mb-4" />

            <p className="text-tech-light/80 leading-relaxed text-sm whitespace-pre-line mb-6">
              {current.text}
            </p>

            <div className="border-t border-tech-border/30 pt-4 flex items-center justify-between flex-wrap gap-3">
              <div>
                <p className="font-tech font-semibold text-tech-cyan">{current.name}</p>
                <p className="text-tech-light/50 text-xs font-tech">{current.title}</p>
                <span className="inline-block mt-1 px-2 py-0.5 bg-tech-dark border border-tech-purple/40 text-tech-purple text-xs font-tech rounded">
                  {current.relationship}
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/ervin-fernandez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-tech-light/30 hover:text-tech-cyan font-tech text-xs transition-colors duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                View on LinkedIn
              </a>
            </div>
          </div>

          {/* Tab selectors */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`font-tech text-xs px-3 py-1.5 border rounded transition-all duration-200 ${
                  active === i
                    ? "border-tech-cyan text-tech-cyan bg-tech-cyan/10"
                    : "border-tech-border text-tech-light/40 hover:border-tech-cyan/50 hover:text-tech-light/70"
                }`}
              >
                {t.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
