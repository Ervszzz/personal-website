import CareerUptime from "./CareerUptime";
import ResumeDownload from "./ResumeDownload";
import { btnSecondary, container } from "./ui";

const Hero = () => {
  return (
    <section id="home" className="pt-14 pb-16 md:pt-24 md:pb-24">
      <div className={container}>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
          Open to new opportunities
        </p>

        <h1 className="mt-6 text-[3.25rem] leading-[0.95] sm:text-7xl lg:text-[6.5rem] font-semibold tracking-[-0.035em] text-ink">
          Ervin Fernandez
        </h1>

        <p className="mt-6 max-w-2xl text-xl sm:text-2xl leading-snug text-muted">
          Site reliability engineer at Zendesk. I work incidents, review
          deployments, and build tools that make on-call calmer.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <ResumeDownload />
          <a href="#contact" className={btnSecondary}>
            Get in touch
          </a>
        </div>

        <div className="mt-14 md:mt-20">
          <CareerUptime />
        </div>
      </div>
    </section>
  );
};

export default Hero;
