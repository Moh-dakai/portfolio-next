"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, X, Shield, Database, Cpu, Lock } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  year: string;
  category: string;
  file: string;
  icon: React.ReactNode;
  color: string;
}

const certs: Cert[] = [
  {
    title: "AWS AI Practitioner Challenge",
    issuer: "Udacity",
    year: "2026",
    category: "Artificial Intelligence",
    file: "/certs/Udacity_AI_Cert.pdf",
    icon: <Cpu size={22} />,
    color: "from-[#c8f080]/10 to-transparent",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Data Analytics",
    file: "/certs/Data_Analytics_Essentials_certificate_maxmcgrath207-gmail-com_3823d058-4217-44ee-b64d-5c8d1de69882.pdf",
    icon: <Database size={22} />,
    color: "from-[#80c8f0]/10 to-transparent",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Cybersecurity",
    file: "/certs/Introduction_to_Cybersecurity_certificate_maxmcgrath207-gmail-com_0b92e66c-caf5-4e93-8e51-50b6721445cb.pdf",
    icon: <Shield size={22} />,
    color: "from-[#f080c8]/10 to-transparent",
  },
  {
    title: "Ethical Hacker",
    issuer: "Cisco Networking Academy",
    year: "2025",
    category: "Security",
    file: "/certs/Ethical_Hacker_Cisco_certificate.pdf",
    icon: <Lock size={22} />,
    color: "from-[#f0c880]/10 to-transparent",
  },
];

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#101614] border border-white/[0.1] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
            <div className="flex items-center gap-3">
              <span className="text-[#c8f080]">{cert.icon}</span>
              <div>
                <p className="font-semibold text-[#eae5dc] text-sm">{cert.title}</p>
                <p className="font-mono text-[0.68rem] text-[#7a7672]">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cert.file}
                download
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-[#c8f080] border border-[#c8f080]/30 px-3 py-1.5 rounded-lg hover:bg-[#c8f080]/10 transition"
              >
                <Download size={13} />
                Download
              </a>
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-[#7a7672] border border-white/[0.1] px-3 py-1.5 rounded-lg hover:text-[#eae5dc] hover:border-white/20 transition"
              >
                <ExternalLink size={13} />
                Open
              </a>
              <button
                onClick={onClose}
                className="p-2 text-[#7a7672] hover:text-[#eae5dc] hover:bg-white/[0.06] rounded-lg transition"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* PDF viewer */}
          <div className="w-full h-[72vh]">
            <iframe
              src={`${cert.file}#toolbar=0`}
              className="w-full h-full border-0"
              title={cert.title}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CertCard({ cert, i }: { cert: Cert; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="group relative bg-[#101614] border border-white/[0.07] rounded-2xl p-6 hover:border-[#c8f080]/25 hover:bg-[#121a18] transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        <div className="relative flex flex-col gap-4">
          {/* Icon + category */}
          <div className="flex items-start justify-between">
            <div className="p-2.5 rounded-xl bg-[#c8f080]/10 text-[#c8f080] border border-[#c8f080]/10 group-hover:bg-[#c8f080]/20 transition">
              {cert.icon}
            </div>
            <span className="font-mono text-[0.65rem] tracking-wider uppercase text-[#7a7672] border border-white/[0.06] px-2.5 py-1 rounded-full">
              {cert.category}
            </span>
          </div>

          {/* Text */}
          <div>
            <h3
              className="font-serif text-[1.1rem] mb-1 group-hover:text-[#c8f080] transition-colors duration-300"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {cert.title}
            </h3>
            <p className="font-mono text-[0.72rem] text-[#7a7672]">
              {cert.issuer} · {cert.year}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2 border-t border-white/[0.06]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-[0.72rem] text-[#c8f080] border border-[#c8f080]/25 px-3 py-2 rounded-xl hover:bg-[#c8f080]/10 transition"
            >
              <FileText size={13} />
              View
            </button>
            <a
              href={cert.file}
              download
              onClick={(e) => e.stopPropagation()}
              className="flex-1 inline-flex items-center justify-center gap-1.5 font-mono text-[0.72rem] text-[#7a7672] border border-white/[0.08] px-3 py-2 rounded-xl hover:text-[#eae5dc] hover:border-white/[0.18] transition"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </div>
      </motion.div>

      {open && <CertModal cert={cert} onClose={() => setOpen(false)} />}
    </>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="border-t border-white/[0.07] py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-[#c8f080] mb-3">
            Certifications
          </p>
          <h2
            className="font-serif text-[clamp(1.8rem,4vw,2.6rem)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Verified credentials
          </h2>
          <p className="text-[#7a7672] mt-3 text-sm max-w-[46ch]">
            Click any card to preview the certificate PDF inline, or download it directly.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <CertCard key={c.title} cert={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
