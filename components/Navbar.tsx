"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
      fixed top-0 left-0 w-full z-50
      "
    >

      <div
        className="
        mx-4 mt-4
        rounded-2xl
        border border-white/10
        bg-black/30
        backdrop-blur-2xl
        shadow-[0_0_50px_rgba(255,255,255,0.03)]
        "
      >

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div>

            <h1
              className="
              text-2xl md:text-3xl
              tracking-[0.45em]
              font-black
              "
            >
              TEAM RIKZ
            </h1>

          </div>

          {/* NAV LINKS */}
          <div
            className="
            hidden lg:flex
            items-center gap-12
            text-[12px]
            uppercase
            tracking-[0.28em]
            text-gray-400
            "
          >

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Programs
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Testimonials
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Membership
            </a>

            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>

          </div>

          {/* BUTTON */}
          <button
            className="
            group
            relative
            overflow-hidden
            px-6 py-3
            rounded-full
            bg-white
            text-black
            text-xs
            uppercase
            tracking-[0.25em]
            font-semibold
            hover:scale-105
            transition duration-300
            "
          >

            <span className="relative z-10">
              Join Now
            </span>

            <div
              className="
              absolute inset-0
              bg-gradient-to-r
              from-zinc-200
              to-white
              opacity-0
              group-hover:opacity-100
              transition duration-300
              "
            />

          </button>

        </div>

      </div>

    </motion.header>
  );
}
