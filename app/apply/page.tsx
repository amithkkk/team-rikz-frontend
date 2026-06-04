import Navbar from "@/components/Navbar";
import ApplyHero from "@/components/apply/ApplyHero";
import ApplyForm from "@/components/apply/ApplyForm";

export default function ApplyPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-hidden">
      <Navbar />
      <ApplyHero />
      <ApplyForm />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="/" className="flex items-center transition duration-300 hover:scale-105">
            <img
              src="/images/favcon.png"
              alt="Team Rikz"
              className="h-16 lg:h-20 w-auto object-contain opacity-95"
            />
          </a>
          <div className="flex flex-wrap justify-center gap-8 text-[12px] uppercase tracking-[0.25em] text-zinc-500">
            <a href="/#about" className="hover:text-white transition">About</a>
            <a href="/#programs" className="hover:text-white transition">Programs</a>
            <a href="/#contact" className="hover:text-white transition">Contact</a>
          </div>
          <p className="text-sm text-zinc-600 whitespace-nowrap">
            © {new Date().getFullYear()} Team Rikz
          </p>
        </div>
      </footer>
    </main>
  );
}
