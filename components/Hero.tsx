"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const stack = ["React 19", "Next.js 16", "Laravel", "Python", "TypeScript", "MCP"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[20%] w-[70%] h-[70%] rounded-full bg-[#c8f080]/[0.04] blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-[#4080c8]/[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[50%] rounded-full bg-[#c8f080]/[0.03] blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-5 py-24 w-full">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest text-[#7a7672] uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f080] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f080]" />
          </span>
          Available · Kaduna, Nigeria · Remote-first
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Software
          <br />
          <em className="not-italic text-[#c8f080]">Engineer.</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7a7672] text-lg max-w-[52ch] leading-relaxed mb-8"
        >
          Building scalable, secure products across web applications, APIs, AI
          tooling, and developer-facing systems. I design and ship reliable
          solutions using React, Next.js, Laravel, Python, and modern cloud
          workflows.
        </motion.p>

        {/* Stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[0.72rem] tracking-wider text-[#7a7672] border border-white/[0.08] px-3 py-1.5 rounded-full bg-[#101614]"
            >
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 items-center"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-[#c8f080] text-[#080c0b] font-medium px-6 py-3 rounded-full hover:bg-[#9ac850] transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/[0.12] text-[#eae5dc] px-6 py-3 rounded-full bg-[#101614] hover:border-white/[0.22] hover:bg-[#161d1b] transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
          <div className="flex items-center gap-2 ml-auto">
            <a
              href="mailto:maxmcgrath207@gmail.com"
              className="p-2.5 rounded-full border border-white/[0.08] text-[#7a7672] hover:text-[#eae5dc] hover:border-white/[0.18] transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/Moh-dakai"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-white/[0.08] text-[#7a7672] hover:text-[#eae5dc] hover:border-white/[0.18] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="text-[#7a7672]"
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
