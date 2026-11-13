import { ArrowRight, Download } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile, stats } from "@/lib/data";

const code = `// profile
const engineer = {
  name: "Muhammad Abass Mudasir",
  focus: ["backend", "AI tooling", "web3"],
  languages: ["TypeScript", "Python", "Rust"],
  now: "ML intern @ FlyRank AI",
  education: "B.Sc. CS, AFIT Kaduna",
  openToWork: true,
};`;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="chip mb-6 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            Open to remote roles · {profile.location}
          </p>
          <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Software engineer building
            <span className="text-accent"> reliable systems</span> end to end.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg text-dim">
            I ship web apps, APIs, AI tooling and smart-contract infrastructure. Lately that means
            Rust, TypeScript and Python, and a lot of merged pull requests in other people&apos;s
            codebases.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90">
              See my work <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm text-ink transition-colors hover:bg-panel-2">
              <Download size={16} /> Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm text-dim transition-colors hover:text-ink">
              <GithubIcon /> {profile.handle}
            </a>
          </div>
        </div>

        <div className="card overflow-hidden font-mono text-[0.8rem] hover:bg-panel hover:border-line" aria-label="Profile summary">
          <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-xs text-dim">whoami.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 leading-7 text-ink/90">{code}</pre>
        </div>
      </div>

      <dl className="wrap relative mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse bg-bg p-5 md:p-6">
            <dt className="text-sm text-dim">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
