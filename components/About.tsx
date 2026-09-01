"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "6+", label: "Production builds" },
  { value: "8", label: "Core tech areas" },
  { value: "2026", label: "B.Sc. graduation" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-t border-white/[0.07] py-24"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-4">
              About
            </p>
            <h2
              className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Product-minded software engineering
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#7a7672] text-[1rem] leading-relaxed mb-10">
              I design and build software products that connect user experience,
              backend architecture, and real business value. My work spans web
              applications, secure APIs, payment flows, AI-compatible tooling,
              and data-driven systems that solve practical product problems.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/[0.07]">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                >
                  <strong
                    className="block font-serif text-[2rem] text-[#c8f080] leading-none mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {s.value}
                  </strong>
                  <span className="font-mono text-[0.72rem] text-[#7a7672]">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
