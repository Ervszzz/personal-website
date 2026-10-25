// Results from the Zendesk AI alert triage bot's one-month pilot,
// printed like a CLI report. Lines appear one by one on load (see .log-line).
const RESULTS = [
  { label: "alerts investigated", value: "177" },
  { label: "accurate findings", value: "96%" },
  { label: "faster investigations", value: "54%" },
  { label: "engineer hours saved", value: "~90" },
];

const LINE_DELAY_MS = 260;

const TriageLog = () => {
  let line = 0;
  const delay = () => ({ animationDelay: `${300 + line++ * LINE_DELAY_MS}ms` });

  return (
    <figure className="w-full">
      <div className="border border-tech-border bg-tech-card/90 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 border-b border-tech-border px-4 py-2.5 font-mono text-xs text-tech-text-secondary">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-tech-amber" aria-hidden="true" />
            triage-bot
          </span>
          <span>1-month pilot</span>
        </div>

        <div className="px-4 py-5 sm:px-6 font-mono text-sm">
          <p className="log-line text-tech-text-secondary" style={delay()}>
            <span className="text-tech-teal">$</span>{" "}
            <span className="text-tech-ink">triage-bot report --pilot</span>
          </p>

          <dl className="mt-5 space-y-3">
            {RESULTS.map(({ label, value }) => (
              <div
                key={label}
                className="log-line flex items-baseline justify-between gap-6 border-b border-dashed border-tech-border/70 pb-3"
                style={delay()}
              >
                <dt className="text-tech-text-secondary">{label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-semibold text-tech-cyan tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="log-line mt-5 text-tech-text" style={delay()}>
            <span className="text-tech-amber">▸</span> investigates each alert and suggests next steps
          </p>
          <p className="log-line mt-3 text-tech-teal" style={delay()} aria-hidden="true">
            $ <span className="log-caret inline-block w-2 h-4 align-middle bg-tech-cyan" />
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-tech-text-secondary">
        The AI alert triage bot I built at Zendesk, measured over its first month.
      </figcaption>
    </figure>
  );
};

export default TriageLog;
