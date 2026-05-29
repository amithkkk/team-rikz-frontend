import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      <Navbar />

      <Hero />

      {/* ABOUT SECTION */}
      <section className="relative py-40 border-t border-white/5">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
                About Rikz
              </p>

              <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
                BUILT
                <br />
                THROUGH
                <span className="text-white/30"> DISCIPLINE.</span>
              </h2>

            </div>

            <div>

              <p className="text-xl text-gray-400 leading-relaxed">
                Master Rikz is not a conventional fitness coach.
                Team Rikz was built as a high-performance movement
                focused on discipline, body mastery, movement control,
                mental resilience, and elite transformation.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div className="p-8 rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <h3 className="text-5xl">10+</h3>
                  <p className="mt-3 uppercase text-xs tracking-[0.3em] text-gray-500">
                    Years Training
                  </p>
                </div>

                <div className="p-8 rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <h3 className="text-5xl">500+</h3>
                  <p className="mt-3 uppercase text-xs tracking-[0.3em] text-gray-500">
                    Transformations
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROGRAMS */}
      <section className="py-40">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-end justify-between flex-wrap gap-10">

            <div>

              <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
                Programs
              </p>

              <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
                TRAIN
                <br />
                LIKE AN
                <span className="text-white/30"> ATHLETE.</span>
              </h2>

            </div>

          </div>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">

            {[
              "Beginner Evolution",
              "Strength Forge",
              "Elite Hybrid",
            ].map((program, index) => (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border border-white/10
                bg-white/[0.03]
                p-10
                min-h-[420px]
                hover:-translate-y-2
                transition duration-500
                "
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                  Program 0{index + 1}
                </p>

                <h3 className="mt-6 text-5xl leading-none">
                  {program}
                </h3>

                <p className="mt-8 text-gray-400 leading-relaxed">
                  Elite calisthenics programming focused on
                  body control, strength development, mobility,
                  endurance, and athletic transformation.
                </p>

                <button
                  className="
                  absolute bottom-10 left-10
                  px-6 py-3
                  rounded-full
                  border border-white/10
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  hover:bg-white hover:text-black
                  transition
                  "
                >
                  Explore
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-40 border-t border-white/5">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
            Testimonials
          </p>

          <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
            REAL
            <br />
            TRANSFORMATION.
          </h2>

          <div className="mt-20 grid lg:grid-cols-3 gap-8">

            {[
              "I became stronger mentally and physically within months.",
              "Team Rikz completely changed my discipline and lifestyle.",
              "The energy, coaching, and structure are unreal.",
            ].map((text, index) => (
              <div
                key={index}
                className="
                rounded-[35px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-10
                "
              >

                <div className="text-5xl text-white/20">
                  ”
                </div>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  {text}
                </p>

                <div className="mt-10">

                  <h4 className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Team Rikz Member
                  </h4>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* MEMBERSHIP */}
      <section className="relative py-40 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_40%)]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <div
            className="
            rounded-[50px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-2xl
            p-14 md:p-20
            text-center
            "
          >

            <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
              Membership
            </p>

            <h2 className="mt-8 text-6xl md:text-8xl leading-[0.9]">
              JOIN THE
              <br />
              MOVEMENT.
            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              Unlock elite calisthenics programs, class booking,
              private coaching, transformation tracking,
              and access to the Team Rikz community.
            </p>

            <div className="mt-12 flex justify-center">

              <button
                className="
                px-10 py-5
                rounded-full
                bg-white
                text-black
                uppercase
                tracking-[0.2em]
                text-sm
                font-semibold
                hover:scale-105
                transition duration-300
                "
              >
                Become A Member
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-14">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

          <div>

            <h2 className="text-4xl tracking-[0.3em]">
              TEAM RIKZ
            </h2>

            <p className="mt-4 text-gray-500 max-w-md">
              Elite calisthenics movement focused on
              discipline, body mastery, and transformation.
            </p>

          </div>

          <div className="flex gap-10 text-sm uppercase tracking-[0.2em] text-gray-500">

            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Contact</a>

          </div>

        </div>

      </footer>

    </main>
  );
}
