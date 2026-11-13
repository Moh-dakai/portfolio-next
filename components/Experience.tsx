import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">Experience</p>
          <h2 className="h2 mt-3">Where I&apos;ve worked</h2>
          <div className="mt-8 border-l-2 border-accent/50 pl-4 text-sm text-dim">
            <p className="font-medium text-ink">Air Force Institute of Technology</p>
            <p>B.Sc. Computer Science, Kaduna</p>
            <p className="font-mono text-xs">2022 – 2026</p>
          </div>
        </div>
        <ol className="space-y-4">
          {experience.map((e) => (
            <li key={e.company} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold tracking-tight">
                  {e.role} <span className="font-normal text-dim">· {e.company}</span>
                </h3>
                <span className={`font-mono text-xs ${e.current ? "text-mint" : "text-dim"}`}>
                  {e.period}
                  {e.current && <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-mint align-middle" />}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-dim">{e.text}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
