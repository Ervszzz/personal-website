import { useMemo, useState } from "react";

// Status-page style "uptime" bar: one bar per month since the first role.
// Months are 0-indexed (Jan = 0). `end: null` means the role is current.
interface Role {
  title: string;
  company: string;
  label: string;
  start: [number, number];
  end: [number, number] | null;
}

const ROLES: Role[] = [
  { title: "Software Engineer", company: "Lingayen Provincial Capitol", label: "Lingayen Capitol", start: [2021, 1], end: [2022, 1] },
  { title: "Software Engineer", company: "Giant International Software Station", label: "Giant Intl.", start: [2022, 9], end: [2023, 8] },
  { title: "Python Developer", company: "Kodexa", label: "Kodexa", start: [2023, 9], end: [2025, 3] },
  { title: "Site Reliability Engineer", company: "Zendesk", label: "Zendesk", start: [2025, 4], end: null },
];

const FIRST = ROLES[0].start;
const monthIndex = ([y, m]: [number, number]) => (y - FIRST[0]) * 12 + (m - FIRST[1]);
const monthName = (i: number) =>
  new Date(FIRST[0], FIRST[1] + i, 1).toLocaleDateString("en-US", { month: "short", year: "numeric" });

interface Segment {
  role: Role | null;
  start: number;
  length: number;
}

const CareerUptime = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const { months, segments } = useMemo(() => {
    const now = new Date();
    const total = monthIndex([now.getFullYear(), now.getMonth()]) + 1;
    const months: (Role | null)[] = Array.from({ length: total }, (_, i) =>
      ROLES.find((r) => i >= monthIndex(r.start) && i <= (r.end ? monthIndex(r.end) : total - 1)) ?? null
    );

    const segments: Segment[] = [];
    months.forEach((role, i) => {
      const last = segments[segments.length - 1];
      if (last && last.role === role) last.length++;
      else segments.push({ role, start: i, length: 1 });
    });
    return { months, segments };
  }, []);

  const current = ROLES[ROLES.length - 1];
  const readout =
    hovered === null
      ? `Now: ${current.title} at ${current.company}`
      : `${monthName(hovered)}: ${months[hovered] ? `${months[hovered]!.title}, ${months[hovered]!.company}` : "Between roles"}`;

  const columns = { gridTemplateColumns: `repeat(${months.length}, minmax(0, 1fr))` };

  return (
    <figure className="rounded-lg border border-line bg-surface p-4 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-4">
        <figcaption className="font-medium text-ink">Career uptime</figcaption>
        <span className="font-mono text-xs text-muted">{monthName(0)} – today</span>
      </div>

      <div className="grid gap-[2px] sm:gap-[3px] h-10 sm:h-12" style={columns} onMouseLeave={() => setHovered(null)} aria-hidden="true">
        {months.map((role, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            className={`uptime-bar rounded-[2px] ${
              hovered === i ? "bg-ink" : role ? "bg-accent" : "bg-line"
            }`}
            style={{ animationDelay: `${i * 12}ms` }}
          />
        ))}
      </div>

      {/* Employer spans under the bars */}
      <div className="grid mt-2" style={columns} aria-hidden="true">
        {segments.map((s) => (
          <div
            key={s.start}
            className="border-l border-line pl-1.5 pt-1 text-[11px] sm:text-xs text-muted truncate"
            style={{ gridColumn: `${s.start + 1} / span ${s.length}` }}
          >
            {s.role?.label ?? ""}
          </div>
        ))}
      </div>

      <p className="mt-4 font-mono text-xs text-muted min-h-[1.25rem]" aria-hidden="true">
        {readout}
      </p>

      <p className="sr-only">
        Career timeline:{" "}
        {ROLES.map((r) => `${r.title} at ${r.company}, ${monthName(monthIndex(r.start))} to ${r.end ? monthName(monthIndex(r.end)) : "present"}`).join("; ")}.
      </p>
    </figure>
  );
};

export default CareerUptime;
