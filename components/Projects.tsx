import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects, type Project } from "@/lib/data";

function Card({ p, big }: { p: Project; big?: boolean }) {
  return (
    <article className={`card group flex flex-col p-6 ${big ? "md:p-7" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow !text-dim">{p.kind}</span>
        <div className="flex items-center gap-3 text-dim">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`} className="transition-colors hover:text-mint">
              <ExternalLink size={16} />
            </a>
          )}
          <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} on GitHub`} className="transition-colors hover:text-ink">
            <GithubIcon />
          </a>
        </div>
      </div>
      <h3 className={`mt-4 font-semibold tracking-tight ${big ? "text-2xl" : "text-lg"}`}>
        <a href={p.live ?? p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
          {p.name}
          <ArrowUpRight size={big ? 20 : 16} className="opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-dim">{p.blurb}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <li key={s} className="chip">{s}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="border-t border-line py-24">
      <div className="wrap">
        <p className="eyebrow">Projects</p>
        <h2 className="h2 mt-3 max-w-[20ch]">Things I&apos;ve built and shipped</h2>
        <p className="mt-4 max-w-[60ch] text-dim">
          Original work from my public GitHub: AI infrastructure, fintech, commerce and developer tools.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Card key={p.name} p={p} big />
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
