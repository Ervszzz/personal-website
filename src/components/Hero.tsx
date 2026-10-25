import profileImage from "../assets/images/profile/ervszz_optimized.png";
import ResumeDownload from "./ResumeDownload";
import TriageLog from "./TriageLog";

const Hero = () => {
  return (
    <section id="home" className="relative py-16 md:py-24">
      <div className="container">
        {/* Introduction */}
        <div className="grid items-center gap-12 lg:gap-16 md:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="font-display font-semibold text-tech-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Ervin Fernandez
            </h1>
            <p className="mt-5 text-xl text-tech-cyan">
              Site Reliability Engineer at Zendesk
            </p>
            <p className="mt-5 max-w-xl text-lg text-tech-text leading-relaxed">
              I keep production calm. I work incidents, review deployments, and
              build tooling that takes the grind out of on-call.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ResumeDownload />
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-tech-cyan/60 hover:border-tech-cyan hover:bg-tech-cyan/10 text-tech-cyan font-semibold py-3 px-6 transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-6 text-sm text-tech-text-secondary">
              Open to new opportunities.
            </p>
          </div>

          <TriageLog />
        </div>

        {/* About */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-tech-border grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <img
            src={profileImage}
            alt="Ervin Fernandez"
            className="w-36 h-36 md:w-48 md:h-48 object-cover border border-tech-border"
          />

          <div className="max-w-2xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-tech-ink mb-5">About</h2>
            <div className="space-y-4 text-tech-text leading-relaxed">
              <p>
                I'm a site reliability engineer at Zendesk. Most weeks I'm on call
                for incidents from SEV-1 to SEV-4, reviewing deployment PRs and
                CI/CD pipelines, and tuning Datadog monitors so every alert is
                worth answering.
              </p>
              <p>
                Before Zendesk I was a Python developer at Kodexa, owning automated
                SQL reports and the ETL pipelines behind them, and helping train
                and evaluate AI/ML models. Earlier, I built web apps and REST APIs,
                and automated document processing for a provincial government.
              </p>
              <p>
                I care about observability, calm on-call rotations, and tooling
                that helps engineering teams ship with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
