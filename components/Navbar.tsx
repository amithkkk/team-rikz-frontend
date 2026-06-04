"use client";
import Link from "next/link";

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
<a
  href="/"
  className="flex items-center transition duration-300 hover:scale-105"
>
  <img
    src="/images/favcon.png"
    alt="Team Rikz"
    className="
    h-20
    lg:h-24
    w-auto
    object-contain
    drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
    "
  />
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
            
<Link
  href="/apply"
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
    inline-flex
    items-center
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
</Link>
            </div>
          </div>
        </div>
     
    </motion.header>
  );
}
