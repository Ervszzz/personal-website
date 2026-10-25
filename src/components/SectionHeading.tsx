import { useScrollReveal } from "../hooks/useScrollReveal";

interface SectionHeadingProps {
  title: string;
  intro?: string;
}

const SectionHeading = ({ title, intro }: SectionHeadingProps) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="scroll-reveal mb-12 max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-tech-ink tracking-tight">
        {title}
      </h2>
      {intro && <p className="mt-3 text-tech-text-secondary text-lg">{intro}</p>}
    </div>
  );
};

export default SectionHeading;
