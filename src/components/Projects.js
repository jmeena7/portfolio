import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "FliksGPT",
      desc: [
        "Content streaming app with AI-powered search & personalized recommendations.",
        "Debounced search, caching, micro frontends, Redux state management.",
        "Built using React.js, Redux, Tailwind CSS & Firebase backend.",
      ],
      github: "https://github.com/jmeena7/netflix-gpt",
      live: "https://fliksgpt-eb014.web.app",
    },
    {
      title: "Meena Eats",
      desc: [
        "Food ordering app with live restaurant data & detailed menus.",
        "Debounced search, caching, dynamic cards, auth, Razorpay payment.",
        "Tech: React.js, SQL, Tailwind CSS, Firebase.",
      ],
      github: "https://github.com/jmeena7/Namstay_React",
      live: "https://your-meena-eats-deployed-link.com",
    },
    {
      title: "Zennote",
      desc: [
        "Full-stack notes app with JWT auth, protected APIs & MERN stack.",
        "Redux-powered real-time CRUD, error handling & validation.",
        "Deployed on Railway & Vercel/Netlify.",
      ],
      github: "https://github.com/yourgithub/zennote",
      live: "https://your-zennote-deployed-link.com",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        text-white
      "
    >
      {/* 🔵 Blue & Purple Glows (About.js style) */}
      <div className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[150px] -top-20 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-700/20 blur-[150px] bottom-0 right-0"></div>

      {/* 🌀 Soft Neon Ring */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[430px] h-[430px] rounded-full border border-indigo-400/20 left-1/2 -translate-x-1/2 top-10 animate-slow-spin"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <h2
          className="
            text-5xl font-extrabold text-center mb-16
            bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300
            bg-clip-text text-transparent
          "
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {projectData.map((proj, i) => (
            <div
              key={i}
              className="
                relative p-7 rounded-2xl 
                backdrop-blur-2xl bg-slate-800/40
                border border-slate-700
                shadow-[0_0_30px_rgba(0,0,0,0.4)]
                overflow-hidden
                transition-all duration-500 
                hover:-translate-y-3 
                hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
                hover:bg-indigo-700/10 
                hover:border-indigo-400/40
              "
            >
              {/* Glow Inside Card */}
              <div
                className="
                  absolute inset-0 rounded-2xl 
                  bg-gradient-to-br from-indigo-400/10 to-transparent
                  opacity-40 blur-xl
                "
              ></div>

              <div className="relative z-10">
                <h3
                  className="
                    text-2xl font-bold mb-4 text-indigo-300
                    drop-shadow-[0_0_12px_rgba(129,140,248,0.6)]
                  "
                >
                  {proj.title}
                </h3>

                <ul className="text-gray-300 space-y-2 mb-6">
                  {proj.desc.map((line, idx) => (
                    <li key={idx} className="leading-relaxed">• {line}</li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-6">
                  <a
                    href={proj.github}
                    target="_blank"
                    className="
                      px-4 py-2 rounded-lg text-white 
                      bg-slate-800/80 border border-slate-700
                      hover:bg-slate-700 hover:border-slate-500
                      transition-all duration-300
                    "
                  >
                    Source Code
                  </a>

                  <a
                    href={proj.live}
                    target="_blank"
                    className="
                      px-4 py-2 rounded-lg text-white 
                      bg-indigo-600/80 border border-indigo-500
                      hover:bg-indigo-500 hover:border-indigo-400
                      transition-all duration-300
                    "
                  >
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slow-spin 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
