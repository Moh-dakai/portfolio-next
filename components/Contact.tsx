import { Mail, Download } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24">
      <div className="wrap">
        <div className="card relative overflow-hidden p-8 hover:bg-panel hover:border-line md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-[90px]" />
          <p className="eyebrow relative">Contact</p>
          <h2 className="h2 relative mt-3 max-w-[18ch] !text-[clamp(2.2rem,5vw,3.6rem)]">
            Let&apos;s build something that holds up.
          </h2>
          <p className="relative mt-5 max-w-[50ch] text-dim">
            Open to full-time remote roles, internships and freelance work. Send a note and I&apos;ll reply quickly.
          </p>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg hover:opacity-90">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm hover:bg-panel-2">
              <GithubIcon /> GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm hover:bg-panel-2">
              <Download size={16} /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
