"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  tag: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  live?: string;
  wide?: boolean;
}

const projects: Project[] = [
  {
    tag: "AI Application",
    title: "Aiki — AI Job Application Copilot",
    description:
      "Built a Chrome extension that stores a candidate's career history once and then auto-fills job applications, generates tailored resume and cover-letter PDFs for each role, and surfaces roles beyond the main job boards.",
    stack: ["Chrome Extension APIs", "Gemma", "PDF Generation"],
    link: "https://github.com/Moh-dakai",
    wide: true,
  },
  {
    tag: "AI Infrastructure",
    title: "AltLiqIQ — Altcoin Liquidation Intelligence MCP Server",
    description:
      "Built an MCP-compatible server aggregating perpetual liquidation data across Binance, Bybit, and OKX with squeeze-risk classification and cascade-size estimation, deliberately excluding BTC/ETH for signal clarity.",
    stack: ["Python", "MCP Protocol", "Public Exchange APIs"],
    link: "https://github.com/Moh-dakai",
    wide: true,
  },
  {
    tag: "AI Infrastructure",
    title: "EventVol Intelligence",
    description:
      "Built an MCP-compatible server analyzing FX volatility around macro events like NFP, CPI, FOMC, ECB, and BOE, with SSE transport for real-time LLM tool invocation and a statistical pipeline for breakout probability.",
    stack: ["Python", "FastAPI", "SSE", "Finnhub API"],
    link: "https://github.com/Moh-dakai",
  },
  {
    tag: "Fintech",
    title: "Fasa — Stablecoin-Rails Remittance",
    description:
      "Built a merchant dashboard and settlement API for cross-border trade payments via stablecoin rails, plus a credit-scoring flow that converts settlement history into a working-capital offer.",
    stack: ["Next.js", "TypeScript", "FastAPI", "Docker"],
    link: "https://github.com/Moh-dakai",
  },
  {
    tag: "Commerce",
    title: "EcomBlack",
    description:
      "Full-stack e-commerce platform with Supabase Auth, Paystack payments, and an admin dashboard for inventory management with real-time updates.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Paystack"],
    live: "https://ecom-black-two.vercel.app",
  },
  {
    tag: "SaaS",
    title: "MTECP — Multi-Tenant E-Commerce Platform",
    description:
      "Designed a multi-tenant Laravel architecture with fully isolated product catalogues per tenant, structured for horizontal scalability.",
    stack: ["Laravel", "PHP 8.2+", "MySQL", "Multi-Tenancy"],
    link: "https://github.com/Moh-dakai",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const href = p.live ?? p.link;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className={`group relative bg-[#080c0b] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#c8f080]/20 hover:bg-[#101614] transition-all duration-300 ${
        p.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(200,240,128,0.04),transparent_60%)]" />

      <div className="flex items-start justify-between gap-4 relative">
        <span className="font-mono text-[0.68rem] tracking-widest uppercase text-[#7a7672]">
          {p.tag}
        </span>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 font-mono text-[0.72rem] text-[#c8f080] opacity-60 hover:opacity-100 transition-opacity shrink-0"
          >
            {p.live ? "Live" : "GitHub"}
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      <div className="flex-1 relative">
        <h3
          className="font-serif text-[1.25rem] mb-2 group-hover:text-[#c8f080] transition-colors duration-300"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {p.title}
        </h3>
        <p className="text-[#7a7672] text-sm leading-relaxed">{p.description}</p>
      </div>

      <ul className="flex flex-wrap gap-1.5 mt-auto">
        {p.stack.map((t) => (
          <li
            key={t}
            className="font-mono text-[0.65rem] tracking-wide text-[#7a7672] border border-white/[0.06] px-2.5 py-1 rounded-md bg-white/[0.02]"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-3">
            Selected Work
          </p>
          <h2
            className="font-serif text-[clamp(1.8rem,4vw,2.6rem)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Projects that solve real problems
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
