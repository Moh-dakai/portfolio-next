export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.07] py-8">
      <div className="max-w-[1100px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[0.7rem] text-[#7a7672]">
        <span>Muhammad Abass Mudasir · {year}</span>
        <span>Kaduna, Nigeria · Open to remote</span>
      </div>
    </footer>
  );
}
