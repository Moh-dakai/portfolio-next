"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-3">
            Education
          </p>

          <div className="bg-[#101614] border border-white/[0.07] rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#c8f080]/20 transition-all duration-300">
            <div>
              <h3
                className="font-serif text-[1.4rem] mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Air Force Institute of Technology, Kaduna
              </h3>
              <p className="text-[#7a7672] text-sm">B.Sc. Computer Science · Graduating 2026</p>
            </div>
            <span className="font-mono text-[0.75rem] text-[#c8f080] border border-[#c8f080]/30 px-4 py-2 rounded-full whitespace-nowrap self-start sm:self-center">
              2022 – 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
