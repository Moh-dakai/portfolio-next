import { FileText } from "lucide-react";
import { skills, certs } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="border-t border-line py-24">
      <div className="wrap">
        <p className="eyebrow">Stack</p>
        <h2 className="h2 mt-3">Tools I reach for</h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {skills.map((g) => (
            <div key={g.group} className="grid gap-3 py-5 md:grid-cols-[180px_1fr]">
              <h3 className="font-mono text-sm text-dim">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-md border border-line bg-panel px-3 py-1 text-sm">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-lg font-semibold tracking-tight">Certifications</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {certs.map((c) => (
            <li key={c.title}>
              <a href={c.file} target="_blank" rel="noreferrer" className="card flex items-center gap-4 p-4">
                <span className="rounded-lg border border-line bg-bg p-2.5 text-accent"><FileText size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{c.title}</span>
                  <span className="block text-xs text-dim">{c.issuer} · {c.year}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
