"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-white/[0.04] blur-[180px]" />

      {/* GRID */}
      <div
        className="
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-32">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
              inline-flex
              items-center gap-3
              rounded-full
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              px-5 py-2
              uppercase
              tracking-[0.3em]
              text-[11px]
              text-gray-300
              "
            >
              Elite Calisthenics Movement
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
              mt-10
              text-[5rem]
              sm:text-[7rem]
              lg:text-[9rem]
              leading-[0.85]
              font-black
              "
            >
              MASTER
              <br />

              <span className="text-white/25">
                YOUR
              </span>

              <br />

              BODY.
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
              mt-8
              max-w-xl
              text-lg
              text-gray-400
              leading-relaxed
              "
            >
              Team Rikz is an elite calisthenics community led by
              Master Rikz focused on discipline, body mastery,
              strength development, and building unstoppable athletes.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-5"
            >

              <button
                className="
                px-9 py-4
                rounded-full
                bg-white
                text-black
                text-sm
                uppercase
                tracking-[0.25em]
                font-semibold
                hover:scale-105
                transition duration-300
                "
              >
                Join Team
              </button>

              <button
                className="
                px-9 py-4
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                text-sm
                uppercase
                tracking-[0.25em]
                hover:bg-white/[0.08]
                transition duration-300
                "
              >
                Explore Programs
              </button>

            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="
              mt-20
              grid grid-cols-3
              gap-10
              max-w-2xl
              "
            >

              <div>
                <h2 className="text-5xl font-black">
                  500+
                </h2>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Members
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black">
                  8+
                </h2>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Programs
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black">
                  24/7
                </h2>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Discipline
                </p>
              </div>

            </motion.div>

          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden lg:flex justify-center"
          >

            {/* MAIN CARD */}
            <div
              className="
              relative
              w-[540px]
              h-[720px]
              overflow-hidden
              rounded-[45px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              shadow-[0_0_120px_rgba(255,255,255,0.05)]
              "
            >

              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1974&auto=format&fit=crop"
                alt="Athlete"
                className="
                absolute inset-0
                w-full h-full
                object-cover
                opacity-75
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-10">

                <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
                  Team Rikz
                </p>

                <h2 className="mt-4 text-6xl leading-none">
                  FORGE
                  <br />
                  STRENGTH.
                </h2>

              </div>

              {/* FLOATING CARD 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                absolute top-8 right-8
                rounded-3xl
                border border-white/10
                bg-black/40
                backdrop-blur-xl
                px-6 py-5
                "
              >

                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                  Focus
                </p>

                <h3 className="mt-2 text-2xl">
                  Discipline
                </h3>

              </motion.div>

              {/* FLOATING CARD 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="
                absolute bottom-36 left-8
                rounded-3xl
                border border-white/10
                bg-black/40
                backdrop-blur-xl
                px-6 py-5
                "
              >

                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                  Training
                </p>

                <h3 className="mt-2 text-2xl">
                  Evolution
                </h3>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
