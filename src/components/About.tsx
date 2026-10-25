import profileImage from "../assets/images/profile/profile.webp";
import SectionHeading from "./SectionHeading";
import { container } from "./ui";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-line">
      <div className={`${container} grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16`}>
        <img
          src={profileImage}
          alt="Ervin Fernandez"
          width={640}
          height={640}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-full md:h-auto md:max-w-xs md:aspect-square rounded-lg object-cover border border-line"
        />

        <div>
          <SectionHeading title="About" />
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink/90">
            <p>
              I'm a site reliability engineer at Zendesk. Most weeks I'm on call
              for incidents from SEV-1 to SEV-4, reviewing deployment PRs and
              CI/CD pipelines, and tuning Datadog monitors so every alert is
              worth answering.
            </p>
            <p>
              Before Zendesk I was a Python developer at Kodexa, owning automated
              SQL reports and the ETL pipelines behind them, and helping train and
              evaluate AI/ML models. Earlier, I built web apps and REST APIs, and
              automated document processing for a provincial government.
            </p>
            <p>
              I care about observability, calm on-call rotations, and tooling
              that helps engineering teams ship with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
