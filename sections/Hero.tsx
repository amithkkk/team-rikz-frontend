"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  className="
  relative
  overflow-hidden
  bg-[#050505]
  pt-40
  pb-24
  lg:min-h-screen
  flex
  items-center
  "
>

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute top-[-15%] left-[-10%] w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[220px]" />

      <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-white/[0.03] blur-[220px]" />

      <div
        className="
        absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

          {/* LEFT */}
          <div className="max-w-3xl">

<br/>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              px-5 py-2
              uppercase
              tracking-[0.35em]
              text-[11px]
              text-zinc-300
              "
            >
              Professional Acrobatics & Movement Training
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
mt-10
text-[4.5rem]
sm:text-[6rem]
lg:text-[7rem]
xl:text-[8rem]
leading-[0.88]
font-black
tracking-tight
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

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
              mt-6
              text-2xl
              md:text-3xl
              font-light
              text-white
              "
            >
              Unlock Your Potential.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="
              mt-8
              max-w-2xl
              text-lg
              text-zinc-400
              leading-relaxed
              "
            >
              Transform strength, flexibility, balance, and confidence
              through professional acrobatics and movement training.

              <br />
              <br />

         
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-5"
            >
<Link
  href="/apply"
  className="
    inline-flex
    items-center
    justify-center
    px-10 py-5
    rounded-full
    bg-white
    text-black
    font-bold
    uppercase
    tracking-[0.22em]
    text-sm
    hover:scale-105
    transition
    duration-300
  "
>
  Join Our Workshop
</Link>
              
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
              mt-20
              grid
              grid-cols-3
              gap-8
              "
            >
              <div>
                <h3 className="text-5xl font-black">
                  500+
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black">
                  10+
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black">
                  24/7
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Growth Mindset
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
            className="relative hidden lg:flex justify-center"
          >

            <div
              className="
              relative
w-[520px]
xl:w-[560px]
h-[680px]
xl:h-[760px]
              rounded-[45px]
              overflow-hidden
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              shadow-[0_0_120px_rgba(255,255,255,0.05)]
              "
            >

              {/* REPLACE WITH RIKZY IMAGE */}
              <img
                src="/images/rikzy.png"
                alt="Rikzy"
                className="
                absolute inset-0
                h-full
                w-full
                object-cover
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* BOTTOM CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-10">

                <p className="uppercase tracking-[0.35em] text-xs text-zinc-400">
                  Team Rikz
                </p>

                <h2 className="mt-4 text-6xl leading-none">
                  UNLOCK
                  <br />
                  POTENTIAL.
                </h2>

              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-8
                right-8
                rounded-3xl
                border border-white/10
                bg-black/40
                backdrop-blur-xl
                px-6 py-5
                "
              >
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Focus
                </p>

                <h3 className="mt-2 text-2xl">
                  Strength
                </h3>
              </motion.div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-40
                left-8
                rounded-3xl
                border border-white/10
                bg-black/40
                backdrop-blur-xl
                px-6 py-5
                "
              >
                <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                  Training
                </p>

                <h3 className="mt-2 text-2xl">
                  Acrobatics
                </h3>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
