"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="px-4 pt-4">
        <div
          className="
          max-w-7xl mx-auto
          rounded-[28px]
          border border-white/10
          bg-black/40
          backdrop-blur-3xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          "
        >
          <div className="flex items-center justify-between px-6 lg:px-8 py-5">
            
            {/* LOGO */}
            <a href="#" className="group">
              <div className="flex flex-col">
                <span
                  className="
                  text-2xl lg:text-3xl
                  font-black
                  tracking-[0.35em]
                  "
                >
                  TEAM RIKZ
                </span>

                <span
                  className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-[0.45em]
                  text-zinc-500
                  "
                >
                  Acrobatics & Movement Academy
                </span>
              </div>
            </a>

            {/* NAVIGATION */}
            <nav
              className="
              hidden xl:flex
              items-center
              gap-10
              "
            >
              {[
                ["About", "#about"],
                ["Programs", "#programs"],
                ["Results", "#results"],
                ["Coaching", "#coaching"],
                ["Community", "#community"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="
                  text-[12px]
                  uppercase
                  tracking-[0.25em]
                  text-zinc-400
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            

              <button
                className="
                group
                relative
                overflow-hidden
                px-7 py-3
                rounded-full
                bg-white
                text-black
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold
                hover:scale-105
                transition-all
                duration-300
                "
              >
                <span className="relative z-10">
                  Start Journey
                </span>

                <div
                  className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  bg-gradient-to-r
                  from-white
                  via-zinc-200
                  to-white
                  "
                />
              </button>
            </div>
          </div>
        </div>
     
    </motion.header>
  );
}
