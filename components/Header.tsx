"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Open source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : ""
      }`}
    >
      <div className="wrap flex h-14 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium text-ink">
          <span className="text-accent">~/</span>mudasir
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-md px-3 py-1.5 text-sm text-dim transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 rounded-md bg-ink px-3.5 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            Hire me
          </a>
        </nav>
        <button
          className="p-2 text-dim md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav className="wrap flex flex-col pb-4 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-dim hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
