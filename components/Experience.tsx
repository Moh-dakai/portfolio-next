"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experience = [
  {
    role: "ML Engineering Intern",
    company: "FlyRank AI",
    period: "Aug 2026 – Present",
    description:
      "Currently interning at FlyRank AI as an AI intern, focusing on Machine Learning.",
    tags: ["Machine Learning", "AI", "Python"],
    current: true,
  },
  {
    role: "OSS Engineer & Contributor",
    company: "Drips",
    period: "Jul 2026 – Present",
    description:
      "Contributing to open-source software projects at Drips, collaborating with the community to design and ship meaningful improvements to the codebase.",
    tags: ["Open Source", "OSS", "Collaboration"],
    current: true,
  },
  {
    role: "Software Engineer Intern",
    company: "Nigerian College of Aviation Technology, Zaria",
    period: "Aug – Oct 2025",
    description:
      "Contributed to software design and development on-site as part of a 3-month engineering internship, supporting real-world product and systems work in a professional environment.",
    tags: ["Software Design", "Team Collaboration", "Product Delivery"],
    current: false,
  },
  {
    role: "Development Intern",
    company: "ABU-NITDA IT Hub, Zaria",
    period: "Aug – Oct 2024",
    description:
      "Developed cross-platform Flutter/Dart applications with Firebase authentication and cloud storage, delivering MVP features ahead of schedule through a remote-capable Agile workflow.",
    tags: ["Flutter", "Dart", "Firebase", "Agile"],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-3">
            Experience
          </p>
          <h2
            className="font-serif text-[clamp(1.8rem,4vw,2.6rem)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Hands-on engineering work
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

          <div className="flex flex-col gap-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative md:pl-10"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-6 w-px h-px">
                  <div className="absolute -left-[3px] -top-[3px] w-[7px] h-[7px] rounded-full border border-[#c8f080]/60 bg-[#080c0b] group-hover:bg-[#c8f080] transition-colors duration-300" />
                </div>

                <div className="bg-[#101614] border border-white/[0.07] rounded-2xl p-6 hover:border-[#c8f080]/20 transition-all duration-300 group-hover:bg-[#121a18]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="font-mono text-[0.68rem] tracking-wider uppercase text-[#c8f080] mb-1">
                        {exp.role}
                      </p>
                      <h3
                        className="font-serif text-[1.2rem]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {exp.company}
                      </h3>
                    </div>
                    <span
                      className={`font-mono text-[0.7rem] border px-3 py-1 rounded-full whitespace-nowrap ${
                        exp.current
                          ? "text-[#c8f080] border-[#c8f080]/30 bg-[#c8f080]/05"
                          : "text-[#7a7672] border-white/[0.08]"
                      }`}
                    >
                      {exp.period}
                      {exp.current && (
                        <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#c8f080] animate-ping align-middle" />
                      )}
                    </span>
                  </div>

                  <p className="text-[#7a7672] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[0.65rem] tracking-wide text-[#7a7672] border border-white/[0.06] px-2.5 py-1 rounded-md bg-white/[0.02]"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
