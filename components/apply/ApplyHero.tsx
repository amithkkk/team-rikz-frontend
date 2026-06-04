"use client";

import { motion } from "framer-motion";

export default function ApplyHero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-56 pb-24 overflow-hidden">
        {/* backgrounds */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-[-15%] left-[-10%] w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[220px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[220px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.4) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-xs text-zinc-500"
          >
            Team Rikz Acrobatics Workshop
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-[5rem] sm:text-[7rem] lg:text-[9rem] font-black leading-[0.88] tracking-tight"
          >
            APPLY
            <br />
            <span className="text-white/25">NOW.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {[
              "Workshops",
              "Live Sessions",
              "Training Program",
            ].map((tag) => (
              <div
                key={tag}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl px-5 py-2 uppercase tracking-[0.3em] text-[11px] text-zinc-300"
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WORKSHOP INFO ── */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* left — what you'll learn */}
            <div>
              <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
                Beginners Workshop
              </p>
              <h2 className="mt-6 text-5xl md:text-6xl font-black leading-[0.9]">
                WHAT YOU'LL
                <br />
                <span className="text-white/30">LEARN.</span>
              </h2>

              <ul className="mt-10 space-y-4">
                {[
                  "Cartwheel",
                  "Frog Stand (basics calisthenics)",
                  "Headstand",
                  "Front Roll & Dive Roll Variations",
                  "Yoga Poses to improve flexibility",
                  "Handstand & Handstand Roll + Front Flip (separate package)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-widest mt-1">
                      0{i + 1}
                    </span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  No prior experience needed and no age limits — just bring your
                  energy, commitment and an open mind. Personalized one-on-one
                  sessions available to help you progress faster and more safely.
                </p>
              </div>
            </div>

            {/* right — terms + contact */}
            <div className="space-y-6">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Terms & Conditions
                </p>
                <ul className="mt-6 space-y-3 text-sm text-zinc-400 leading-relaxed">
                  {[
                    "Show up and stay consistent throughout the duration of the course.",
                    "Note the session timings and don't be late.",
                    "There are no demo classes.",
                    "Fill in all details to help us create a plan based on your goals.",
                    "You'll be added to the WhatsApp group after payment is received.",
                    "No Refund Policy — payments are non-refundable once made.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-white mt-0.5 flex-shrink-0">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-4">
                  Contact
                </p>
                <p className="text-zinc-300">
                  +91 8848346060 · +91 8157047607
                </p>
                <p className="text-zinc-500 mt-2 text-sm">
                  Instagram:{" "}
                  <a
                    href="https://instagram.com/teamrikz"
                    target="_blank"
                    className="text-zinc-300 hover:text-white transition"
                  >
                    @teamrikz
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
