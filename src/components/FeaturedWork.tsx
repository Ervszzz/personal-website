import SectionHeading from "./SectionHeading";
import { container } from "./ui";

const RESULTS = [
  { value: "177", label: "alerts investigated" },
  { value: "96%", label: "accurate findings" },
  { value: "54%", label: "faster investigations" },
  { value: "~90h", label: "engineer time saved" },
];

// The Zendesk AI alert triage bot, written up like a short incident report
const FeaturedWork = () => {
  return (
    <section id="featured-work" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading title="Featured work" />

        <article className="rounded-lg border border-line bg-surface">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-ink">AI alert triage bot</h3>
            <p className="font-mono text-xs text-muted">Zendesk, one-month pilot</p>
          </header>

          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            <div className="space-y-4 text-ink/90 leading-relaxed max-w-xl">
              <p>
                On-call engineers spend a lot of time on the first steps of every
                alert: pulling context, checking dashboards, and deciding whether
                it needs a human.
              </p>
              <p>
                I built a bot that investigates alerts and
                suggests next steps, so the engineer starts from findings instead
                of a blank page.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
              {RESULTS.map(({ value, label }) => (
                <div key={label} className="bg-surface p-4 sm:p-5">
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight text-accent tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedWork;
