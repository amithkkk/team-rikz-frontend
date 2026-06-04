import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      <Navbar />

      <Hero />

{/* ABOUT RIKZY */}
<section
  id="about"
  className="relative py-40 border-t border-white/5 overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_40%)]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
          About Rikzy
        </p>

        <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
          HI,
          <br />
          I'M
          <span className="text-white/30"> RIKZY.</span>
        </h2>

        <div className="mt-10 inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-zinc-300">
          Professional Acrobatics & Gymnastics Coach
        </div>

      </div>

      <div>

        <p className="text-xl text-zinc-400 leading-relaxed">
          My passion is helping people discover what their bodies are truly capable of.
        </p>

        <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
          Through structured coaching, workshops, and years of practical
          experience, I've helped students develop strength, flexibility,
          body control, confidence, and advanced movement skills.
        </p>

        <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
          I believe every person has untapped potential. With consistency,
          proper guidance, and dedication, extraordinary progress becomes possible.
        </p>

        <p className="mt-6 text-lg text-zinc-500 leading-relaxed">
          My goal isn't just to teach skills.
          It's to help people become stronger, healthier, and more confident
          versions of themselves.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6">

          <div className="p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
            <h3 className="text-5xl font-black">
              10+
            </h3>

            <p className="mt-3 uppercase text-xs tracking-[0.3em] text-zinc-500">
              Years Experience
            </p>
          </div>

          <div className="p-8 rounded-[32px] border border-white/10 bg-white/[0.03]">
            <h3 className="text-5xl font-black">
              1000+
            </h3>

            <p className="mt-3 uppercase text-xs tracking-[0.3em] text-zinc-500">
              Students Trained
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* WHAT WE OFFER */}
<section
  id="programs"
  className="py-40 border-t border-white/5"
>
  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      What We Offer
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      TRAIN.
      <br />
      LEARN.
      <br />
      <span className="text-white/30">
        EVOLVE.
      </span>
    </h2>

    <div className="mt-20 grid lg:grid-cols-2 gap-8">

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          01
        </p>

        <h3 className="mt-5 text-4xl font-bold">
          Acrobatics Training
        </h3>

        <ul className="mt-8 space-y-3 text-zinc-400">
          <li>• Handstands</li>
          <li>• Cartwheels</li>
          <li>• Walkovers</li>
          <li>• Balancing Skills</li>
          <li>• Body Control</li>
          <li>• Advanced Acrobatics</li>
        </ul>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          02
        </p>

        <h3 className="mt-5 text-4xl font-bold">
          Flexibility & Mobility
        </h3>

        <ul className="mt-8 space-y-3 text-zinc-400">
          <li>• Back Flexibility</li>
          <li>• Shoulder Mobility</li>
          <li>• Hip Mobility</li>
          <li>• Splits Training</li>
          <li>• Recovery Methods</li>
        </ul>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          03
        </p>

        <h3 className="mt-5 text-4xl font-bold">
          Strength & Conditioning
        </h3>

        <ul className="mt-8 space-y-3 text-zinc-400">
          <li>• Core Strength</li>
          <li>• Functional Training</li>
          <li>• Athletic Conditioning</li>
          <li>• Balance Development</li>
          <li>• Endurance Training</li>
        </ul>
      </div>

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          04
        </p>

        <h3 className="mt-5 text-4xl font-bold">
          Workshops
        </h3>

        <p className="mt-8 text-zinc-400 leading-relaxed">
          Interactive sessions designed to accelerate learning,
          improve technique, and create a supportive environment
          where students can grow faster together.
        </p>
      </div>

    </div>

  </div>
</section>

{/* WHY TRAIN WITH US */}
<section
  className="py-40 border-t border-white/5"
>
  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      Why Train With Us
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      BUILT FOR
      <br />
      REAL
      <span className="text-white/30">
         PROGRESS.
      </span>
    </h2>

    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "Professional Coaching",
        "Beginner Friendly Programs",
        "Safe Learning Environment",
        "Structured Skill Progressions",
        "Personalized Support",
        "Community Driven Growth",
        "Proven Training Methods",
      ].map((item, index) => (
        <div
          key={index}
          className="
          rounded-[35px]
          border border-white/10
          bg-white/[0.03]
          p-8
          hover:-translate-y-2
          transition
          duration-300
          "
        >
          <div className="text-4xl">
            ✓
          </div>

          <h3 className="mt-6 text-xl font-semibold">
            {item}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>

{/* RESULTS THAT MATTER */}
<section
  id="results"
  className="relative py-40 border-t border-white/5 overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_45%)]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      Results That Matter
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      REAL
      <br />
      TRANSFORMATION.
    </h2>

    <p className="mt-10 max-w-3xl text-xl text-zinc-400 leading-relaxed">
      Our students don't just learn skills.
      They build confidence, strength, flexibility,
      body awareness, and a mindset that extends far
      beyond training.
    </p>

    <div className="mt-20 grid lg:grid-cols-3 gap-8">

      {[
        {
          title: "Greater Confidence",
          text: "Develop the confidence that comes from mastering difficult skills and overcoming challenges."
        },
        {
          title: "Increased Strength",
          text: "Build functional strength that improves both athletic performance and everyday movement."
        },
        {
          title: "Better Flexibility",
          text: "Unlock greater freedom of movement while reducing limitations and injury risk."
        },
        {
          title: "Athletic Performance",
          text: "Improve coordination, balance, control, and overall athletic ability."
        },
        {
          title: "Body Awareness",
          text: "Learn how to move efficiently, safely, and with precision."
        },
        {
          title: "Growth Mindset",
          text: "Develop discipline, patience, and resilience through consistent practice."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
          rounded-[38px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
          hover:-translate-y-2
          transition-all
          duration-500
          "
        >
          <div
            className="
            w-14 h-14
            rounded-2xl
            bg-white/5
            flex items-center justify-center
            text-2xl
            "
          >
            ⚡
          </div>

          <h3 className="mt-8 text-3xl font-bold">
            {item.title}
          </h3>

          <p className="mt-5 text-zinc-400 leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}

    </div>

    <div
      className="
      mt-16
      rounded-[40px]
      border border-white/10
      bg-white/[0.03]
      p-10
      text-center
      "
    >
      <h3 className="text-3xl md:text-4xl font-bold">
        Every achievement starts with one step.
      </h3>

      <p className="mt-4 text-zinc-500">
        Start yours today.
      </p>
    </div>

  </div>
</section>

{/* ONLINE COACHING */}
<section
  id="coaching"
  className="py-40 border-t border-white/5"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
          Online Coaching
        </p>

        <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
          TRAIN
          <br />
          FROM
          <span className="text-white/30">
            ANYWHERE.
          </span>
        </h2>

      </div>

      <div>

        <p className="text-xl text-zinc-400 leading-relaxed">
          Get personalized guidance, technique feedback,
          custom programs, and ongoing support no matter
          where you're located.
        </p>

        <div className="mt-10 space-y-4">

          {[
            "Beginners",
            "Athletes",
            "Dancers",
            "Fitness Enthusiasts",
            "Gymnastics Learners",
            "Acrobatics Students",
          ].map((item) => (
            <div
              key={item}
              className="
              flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-6 py-5
              "
            >
              <span className="text-white">
                ✓
              </span>

              <span className="text-zinc-300">
                {item}
              </span>
            </div>
          ))}

        </div>

      <Link
  href="/apply"
  className="
    inline-flex
    items-center
    justify-center
    mt-10
    px-8 py-4
    rounded-full
    bg-white
    text-black
    uppercase
    tracking-[0.2em]
    text-sm
    font-bold
    hover:scale-105
    transition
  "
>
  Apply For Coaching
</Link>
      </div>

    </div>

  </div>
</section>

{/* COMMUNITY */}
<section
  id="community"
  className="relative py-40 border-t border-white/5 overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />

  <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      Community
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      STRONG
      <br />
      TOGETHER.
    </h2>

    <p className="mt-10 max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
      More than training.
      We're building a community of people committed to
      self-improvement, movement, and personal growth.
    </p>

    <div className="mt-20 grid md:grid-cols-3 gap-8">

      <div
        className="
        rounded-[35px]
        border border-white/10
        bg-white/[0.03]
        p-10
        "
      >
        <h3 className="text-3xl font-bold">
          Learn
        </h3>

        <p className="mt-4 text-zinc-500">
          Learn new skills with proper guidance and support.
        </p>
      </div>

      <div
        className="
        rounded-[35px]
        border border-white/10
        bg-white/[0.03]
        p-10
        "
      >
        <h3 className="text-3xl font-bold">
          Improve
        </h3>

        <p className="mt-4 text-zinc-500">
          Push past limits and achieve meaningful progress.
        </p>
      </div>

      <div
        className="
        rounded-[35px]
        border border-white/10
        bg-white/[0.03]
        p-10
        "
      >
        <h3 className="text-3xl font-bold">
          Grow
        </h3>

        <p className="mt-4 text-zinc-500">
          Become stronger physically and mentally through movement.
        </p>
      </div>

    </div>

    <div className="mt-16">

      <h3 className="text-4xl md:text-5xl font-black">
        Together We Learn.
      </h3>

      <h3 className="mt-3 text-4xl md:text-5xl font-black text-white/30">
        Together We Improve.
      </h3>

      <h3 className="mt-3 text-4xl md:text-5xl font-black">
        Together We Grow.
      </h3>

    </div>

  </div>
</section>

{/* TESTIMONIALS */}
<section
  id="testimonials"
  className="py-40 border-t border-white/5"
>
  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      Student Stories
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      REAL
      <br />
      PEOPLE.
      <br />
      REAL
      <span className="text-white/30">
        RESULTS.
      </span>
    </h2>

    <div className="mt-20 grid lg:grid-cols-3 gap-8">

      {[
        "I never thought I'd be able to hold a handstand. The structured progressions made it possible.",
        "My flexibility improved more in months than years of training alone.",
        "The coaching, support and community completely changed how I approach fitness."
      ].map((text, index) => (
        <div
          key={index}
          className="
          rounded-[40px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          p-10
          hover:-translate-y-2
          transition duration-500
          "
        >
          <div className="text-6xl text-white/15">
            ”
          </div>

          <p className="mt-6 text-lg text-zinc-300 leading-relaxed">
            {text}
          </p>

          <div className="mt-10 pt-6 border-t border-white/10">

            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
              Team Rikz Student
            </p>

          </div>

        </div>
      ))}

    </div>

  </div>
</section>


{/* CONTACT */}
<section
  id="contact"
  className="py-40 border-t border-white/5"
>
  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
      Contact
    </p>

    <h2 className="mt-6 text-6xl md:text-8xl leading-[0.9]">
      LET'S
      <br />
      BUILD
      <span className="text-white/30">
        GREATNESS.
      </span>
    </h2>

    <p className="mt-10 max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
      Ready to start your journey?
      Let's build strength, confidence, flexibility,
      and skills together.
    </p>

    <div className="mt-20 grid md:grid-cols-2 gap-8">

      <a
        href="https://instagram.com/rikzyy__"
        target="_blank"
        className="
        rounded-[40px]
        border border-white/10
        bg-white/[0.03]
        p-10
        hover:-translate-y-2
        transition duration-500
        "
      >
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          Instagram
        </p>

        <h3 className="mt-5 text-4xl font-bold">
          @rikzyy__
        </h3>

        <p className="mt-4 text-zinc-500">
          Follow training updates and recent workshop videos
        </p>
      </a>

      <a
        href="mailto:hello@yourdomain.com"
        className="
        rounded-[40px]
        border border-white/10
        bg-white/[0.03]
        p-10
        hover:-translate-y-2
        transition duration-500
        "
      >
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          Email
        </p>

        <h3 className="mt-5 text-3xl font-bold break-all">
          teamrikz1@gmail.com
        </h3>

        <p className="mt-4 text-zinc-500">
          Workshops, collaborations, coaching programs and events.
        </p>
      </a>

    </div>

  </div>
</section>

<section
  className="relative py-40 border-t border-white/5 overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_40%)]" />

  <div className="max-w-5xl mx-auto px-6 relative z-10">

    <div
      className="
      rounded-[50px]
      border border-white/10
      bg-white/[0.04]
      backdrop-blur-2xl
      p-16 md:p-24
      text-center
      "
    >

      <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">
        Ready To Begin?
      </p>

      <h2 className="mt-8 text-6xl md:text-8xl leading-[0.9]">
        START
        <br />
        YOUR
        <br />
        JOURNEY.
      </h2>

      <p className="mt-10 text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        Strength. Flexibility. Confidence.
        Skills that once seemed impossible are closer than you think.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">


<Link
  href="/apply"
  className="
    px-10 py-5
    rounded-full
    bg-white
    text-black
    font-bold
    uppercase
    tracking-[0.2em]
    text-sm
    hover:scale-105
    transition
    inline-flex
    items-center
    justify-center
  "
>
  START YOUR JOURNEY
</Link>
       

      </div>

    </div>

  </div>
</section>

{/* FOOTER */}
<footer className="border-t border-white/10 bg-black py-10">

  <div
    className="
    max-w-7xl
    mx-auto
    px-6
    flex
    flex-col
    md:flex-row
    items-center
    justify-between
    gap-8
    "
  >

    {/* BRAND */}
    <a
      href="#"
      className="
      flex items-center
      transition
      duration-300
      hover:scale-105
      "
    >
      <img
        src="/images/favcon.png"
        alt="Team Rikz"
        className="
        h-16
        lg:h-20
        w-auto
        object-contain
        opacity-95
        "
      />
    </a>

    {/* LINKS */}
    <div
      className="
      flex
      flex-wrap
      justify-center
      gap-8
      text-[12px]
      uppercase
      tracking-[0.25em]
      text-zinc-500
      "
    >
      <a href="#about" className="hover:text-white transition">
        About
      </a>

      <a href="#programs" className="hover:text-white transition">
        Programs
      </a>

      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>
    </div>

    {/* COPYRIGHT */}
    <p
      className="
      text-sm
      text-zinc-600
      whitespace-nowrap
      "
    >
      © {new Date().getFullYear()} Team Rikz
    </p>

  </div>

</footer>
    </main>
  );
}
