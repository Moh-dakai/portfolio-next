"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080c0b]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#top"
          className="font-mono text-[0.82rem] font-medium tracking-widest text-[#c8f080] border border-[#c8f080]/40 px-3 py-1.5 rounded-lg hover:border-[#c8f080]/80 hover:bg-[#c8f080]/5 transition-all duration-200"
        >
          MAM
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#7a7672] text-sm px-4 py-2 rounded-full hover:text-[#eae5dc] hover:bg-white/[0.06] transition-all duration-150"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:mudasirabass31@gmail.com"
            className="ml-2 text-sm font-medium bg-[#c8f080] text-[#080c0b] px-5 py-2 rounded-full hover:bg-[#9ac850] transition-all duration-150"
          >
            Hire me
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="md:hidden p-2 rounded-lg border border-white/[0.1] text-[#eae5dc] hover:bg-white/[0.05] transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#080c0b]/97 backdrop-blur-xl border-b border-white/[0.07] px-5 pb-5 pt-2"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="block text-[#7a7672] py-3 border-b border-white/[0.05] hover:text-[#eae5dc] transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:mudasirabass31@gmail.com"
              onClick={close}
              className="mt-4 block text-center font-medium bg-[#c8f080] text-[#080c0b] px-5 py-3 rounded-full hover:bg-[#9ac850] transition"
            >
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
