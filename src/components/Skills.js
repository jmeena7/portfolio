// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      color: "blue",
      items: ["Java", "C", "C++", "JavaScript"],
    },
    {
      title: "Libraries / Frameworks",
      color: "emerald",
      items: ["React.js", "Node.js", "Redux", "Tailwind CSS", "Express.js"],
    },
    {
      title: "Databases",
      color: "purple",
      items: ["SQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      color: "rose",
      items: ["OOPS", "Git", "Firebase", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="
        py-32 relative overflow-hidden
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        text-white
      "
    >
      {/* 🔵 Glowing Background Balls (Projects.js style) */}
      <div className="absolute w-[650px] h-[650px] bg-blue-700/20 blur-[180px] -top-20 -left-20"></div>
      <div className="absolute w-[550px] h-[550px] bg-purple-700/20 blur-[180px] bottom-0 right-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-20">
          <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Skills
          </span>
          <span className="block w-24 h-1 bg-indigo-500 mx-auto mt-3 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.7)]"></span>
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fadeIn">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`
                relative p-10 rounded-2xl
                backdrop-blur-xl bg-white/5 border border-${cat.color}-400/30
                shadow-[0_0_25px_rgba(0,0,0,0.45)]
                overflow-hidden transition-all duration-500
                
                hover:-translate-y-2 hover:shadow-${cat.color}-500/40
                hover:bg-white/10 hover:border-${cat.color}-400/70
              `}
            >
              {/* Neon glow overlay */}
              <div
                className={`
                  absolute inset-0 rounded-2xl opacity-40 blur-2xl
                  bg-gradient-to-br from-${cat.color}-500/30 to-transparent
                `}
              ></div>

              {/* Category Title */}
              <h3
                className={`
                  text-3xl font-semibold mb-6 relative z-10
                  text-${cat.color}-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]
                `}
              >
                {cat.title}
              </h3>

              {/* Skills Container */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {cat.items.map((skill, i) => (
                  <span
                    key={i}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium
                      bg-${cat.color}-500/10 text-${cat.color}-200
                      border border-${cat.color}-400/30
                      shadow-sm transition-all duration-300

                      hover:bg-${cat.color}-500 hover:text-white hover:border-${cat.color}-600
                      hover:shadow-${cat.color}-500/40 hover:scale-105
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
