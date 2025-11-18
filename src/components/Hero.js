// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative h-screen flex items-center justify-center text-white overflow-hidden
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
      "
    >

      {/* 🔥 Noise Texture (same as About) */}
      <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      {/* ⚡ Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400/70 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          ></span>
        ))}
      </div>

      {/* ⭐ GLASS + NEON BORDER CARD */}
      <div
        className="
          relative z-10 text-center px-10 py-14 max-w-3xl
          bg-slate-900/40 backdrop-blur-2xl rounded-3xl
          border border-purple-500/40

          shadow-[0_0_25px_rgba(139,92,246,0.45)]
          hover:shadow-[0_0_55px_rgba(168,85,247,0.85)]
          
          transition-all duration-700 ease-out
          hover:scale-[1.07]
          animate-fadeInUp
        "
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-xl">
          Hi, I'm{" "}
          <span className="text-yellow-300 animate-glow font-extrabold">
            Jitendra Meena
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-semibold mb-6 text-gray-300 tracking-wide">
          Frontend Engineer • React, Redux, Node.js • MERN Stack Developer
        </p>

        <p className="text-md md:text-lg mb-8 text-gray-300 leading-relaxed">
          I build modern, scalable web apps with clean UI/UX, powerful animations,
          and high-performance architecture using React, Redux, Tailwind,
          Firebase & MERN Stack.
        </p>

        {/* ⚡ Neon Buttons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#projects"
            className="
              px-8 py-3 rounded-xl font-semibold
              bg-purple-600/20 text-purple-200
              border border-purple-500/40

              hover:bg-purple-600/40 hover:text-white
              hover:shadow-[0_0_25px_rgba(168,85,247,0.9)]
              hover:-translate-y-1 hover:scale-[1.12]

              transition-all duration-300
            "
          >
            View Projects
          </a>

          <a
            href='/Jitendar-Meena.pdf'
            download="Jitendar-Meena.pdf"
            className="
              px-8 py-3 rounded-xl font-semibold
              text-indigo-200 border border-indigo-400/40
              bg-indigo-600/20

              hover:bg-indigo-600/40 hover:text-white
              hover:shadow-[0_0_25px_rgba(99,102,241,0.9)]
              hover:-translate-y-1 hover:scale-[1.12]

              transition-all duration-300
            "
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* 🎬 Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0px); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 14px rgba(255,255,0,0.4); }
          50% { text-shadow: 0 0 30px rgba(255,255,0,1); }
        }
        .animate-fadeInUp { animation: fadeInUp 1.2s ease-out forwards; }
        .animate-glow { animation: glow 2.4s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default Hero;
