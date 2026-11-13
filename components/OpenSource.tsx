import { GitPullRequest, ArrowUpRight } from "lucide-react";
import { contributions, profile } from "@/lib/data";

const langColor: Record<string, string> = {
  TypeScript: "bg-[#3178c6]",
  Python: "bg-[#f5d04a]",
  Rust: "bg-[#e8825a]",
  Go: "bg-[#4fc3d9]",
  Solidity: "bg-[#8b8f9c]",
  HTML: "bg-[#e5603d]",
};

export default function OpenSource() {
  const max = Math.max(...contributions.map((c) => c.prs));
  const total = contributions.reduce((n, c) => n + c.prs, 0);
  const orgs = new Set(contributions.map((c) => c.org)).size;
  return (
    <section id="open-source" className="border-t border-line py-24">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Open source</p>
            <h2 className="h2 mt-3 max-w-[22ch]">
              {total} merged PRs across {orgs} organisations
            </h2>
          </div>
          <a
            href={`https://github.com/pulls?q=is%3Apr+author%3A${profile.handle}+is%3Amerged+-user%3A${profile.handle}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            View all on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
        <p className="mt-4 max-w-[62ch] text-dim">
          Landing reviewed changes in real codebases: smart-contract tooling, payment backends, SDKs and agent systems.
        </p>

        <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
          {contributions.map((c) => (
            <li key={`${c.org}/${c.repo}`} className="border-b border-line">
              <a
                href={`https://github.com/${c.org}/${c.repo}/pulls?q=is%3Apr+author%3A${profile.handle}+is%3Amerged`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 py-3.5"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${langColor[c.lang] ?? "bg-dim"}`} title={c.lang} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-ink group-hover:text-accent">
                    <span className="text-dim">{c.org}/</span>
                    {c.repo}
                  </span>
                  {c.note && <span className="block truncate text-xs text-dim">{c.note}</span>}
                </span>
                <span className="hidden h-1 w-20 overflow-hidden rounded-full bg-white/5 sm:block" aria-hidden="true">
                  <span className="block h-full rounded-full bg-mint/80" style={{ width: `${(c.prs / max) * 100}%` }} />
                </span>
                <span className="flex w-12 shrink-0 items-center justify-end gap-1 font-mono text-xs text-mint">
                  <GitPullRequest size={12} /> {c.prs}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
