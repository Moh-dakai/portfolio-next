"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    skills: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: [
      "Laravel",
      "PHP 8.2+",
      "Python",
      "Flask",
      "Django",
      "REST APIs",
      "FastAPI",
    ],
  },
  {
    title: "Data & Infra",
    skills: [
      "Supabase",
      "PostgreSQL",
      "MySQL",
      "MongoDB Atlas",
      "Vercel",
      "Docker",
    ],
  },
  {
    title: "Specialisations",
    skills: [
      "JWT",
      "Supabase Auth",
      "Paystack",
      "MCP Protocol",
      "SSE Transport",
      "Multi-Tenancy",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-3">
            Capabilities
          </p>
          <h2
            className="font-serif text-[clamp(1.8rem,4vw,2.6rem)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Tools I ship with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#101614] border border-white/[0.07] rounded-2xl p-5 hover:border-[#c8f080]/20 hover:bg-[#121a18] transition-all duration-300"
            >
              <h3 className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-[#c8f080] mb-4">
                {g.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="text-sm text-[#7a7672] pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-[#c8f080]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
