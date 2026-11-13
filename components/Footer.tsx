export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col items-center justify-between gap-2 font-mono text-xs text-dim sm:flex-row">
        <span>© {new Date().getFullYear()} Muhammad Abass Mudasir</span>
        <span>Built with Next.js · Kaduna, Nigeria</span>
      </div>
    </footer>
  );
}
