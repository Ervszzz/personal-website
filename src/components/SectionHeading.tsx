import { useScrollReveal } from "../hooks/useScrollReveal";

interface SectionHeadingProps {
  title: string;
  intro?: string;
}

const SectionHeading = ({ title, intro }: SectionHeadingProps) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="scroll-reveal mb-10 md:mb-12 max-w-2xl">
      <h2 className="text-3xl md:text-[2.5rem] font-semibold tracking-tight text-ink leading-tight">{title}</h2>
      {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
    </div>
  );
};

export default SectionHeading;
