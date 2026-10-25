import SectionHeading from "./SectionHeading";
import { container } from "./ui";

const entries = [
  {
    period: "2015 – 2022",
    title: "Bachelor of Science in Information Technology",
    detail: "Saint Louis University",
    note: "Focus: Software Development & Data Engineering",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Education" />

        <ol className="border-t border-line">
          {entries.map((e) => (
            <li key={e.title} className="grid gap-2 border-b border-line py-6 md:grid-cols-[13rem_1fr] md:gap-10">
              <p className="font-mono text-xs leading-7 text-muted">{e.period}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{e.title}</h3>
                <p className="mt-0.5 text-accent font-medium">{e.detail}</p>
                <p className="mt-1 text-muted">{e.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
