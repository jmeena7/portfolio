import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        text-white
      "
    >
      {/* 🔵 Blue-Purple Glows (Contact.jsx style) */}
      <div className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[150px] -top-20 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-700/20 blur-[150px] bottom-0 right-0"></div>

      {/* 🌀 Soft Neon Ring */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[420px] h-[420px] rounded-full border border-indigo-400/20 left-1/2 -translate-x-1/2 top-10 animate-slow-spin"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-6xl font-extrabold text-center mb-16 tracking-wide
            bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300
            bg-clip-text text-transparent
          "
        >
          About Me
        </motion.h2>

        {/* ⭐ Main Card Styled Like Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            relative p-12 rounded-3xl
            bg-slate-800/40 backdrop-blur-xl
            border border-slate-700
            shadow-[0_0_30px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
            hover:-translate-y-2 
            transition-all duration-700
          "
        >

          <div className="relative z-10">

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              Hi! I'm{" "}
              <span className="font-semibold text-blue-300">Jitendra Meena</span>,  
              a passionate Frontend Engineer who loves building delightful &
              high-performance applications using{" "}
              <span className="font-semibold text-purple-300">
                React, Redux, Tailwind, Firebase, SQL & MERN Stack.
              </span>
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              During my work at{" "}
              <span className="text-blue-300 font-semibold">
                Magitech Innovations LLP
              </span>,  
              I built scalable frontends and boosted data accessibility by{" "}
              <span className="font-semibold text-blue-300">70%</span> and
              reduced redundancy by{" "}
              <span className="font-semibold text-blue-300">40%</span>.
            </p>

            {/* Small Heading */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-4 text-purple-300"
            >
              My Top Featured Projects:
            </motion.p>

            {/* List */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="list-disc list-inside mb-6 space-y-3 text-gray-300"
            >
              <li className="hover:text-purple-300 transition">
                <span className="font-semibold text-blue-300">FliksGPT</span> —  
                AI-powered streaming app with multilingual UI.
              </li>

              <li className="hover:text-purple-300 transition">
                <span className="font-semibold text-blue-300">Meena Eats</span> —  
                Food delivery app using Swiggy API + payments.
              </li>

              <li className="hover:text-purple-300 transition">
                <span className="font-semibold text-blue-300">Zennote</span> —  
                MERN notes app with JWT auth + Redux CRUD.
              </li>
            </motion.ul>

            <p className="text-lg leading-relaxed text-gray-300">
              I enjoy crafting fast, modern, and aesthetic digital experiences —
              and I’m always exploring new ideas to create products that solve
              real-world problems.
            </p>

          </div>
        </motion.div>
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

export default About;
