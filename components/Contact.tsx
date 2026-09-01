"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Download, ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-4">
              Contact
            </p>
            <h2
              className="font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Open to
              <br />
              <em className="not-italic text-[#c8f080]">work.</em>
            </h2>
            <p className="text-[#7a7672] max-w-[38ch] leading-relaxed">
              Freelance, internships, and full-time remote roles. If you have a
              product challenge worth solving, let&apos;s talk.
            </p>
          </motion.div>

          {/* Right — links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <a
              href="mailto:maxmcgrath207@gmail.com"
              className="group flex items-center gap-4 bg-[#101614] border border-white/[0.07] rounded-2xl p-5 hover:border-[#c8f080]/30 hover:bg-[#121a18] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#c8f080]/10 text-[#c8f080] border border-[#c8f080]/10">
                <Mail size={18} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-[#7a7672] mb-0.5">
                  Email
                </p>
                <p className="text-sm text-[#eae5dc]">maxmcgrath207@gmail.com</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#7a7672] group-hover:text-[#c8f080] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href="https://github.com/Moh-dakai"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-[#101614] border border-white/[0.07] rounded-2xl p-5 hover:border-[#c8f080]/30 hover:bg-[#121a18] transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-white/[0.04] text-[#eae5dc] border border-white/[0.08]">
                <GithubIcon size={18} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[0.68rem] uppercase tracking-wider text-[#7a7672] mb-0.5">
                  GitHub
                </p>
                <p className="text-sm text-[#eae5dc]">github.com/Moh-dakai</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[#7a7672] group-hover:text-[#c8f080] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#c8f080] text-[#080c0b] font-medium py-4 rounded-2xl hover:bg-[#9ac850] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
