// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        text-white
      "
    >
      {/* 🔵 Soft Blue Glow (Not White) */}
      <div className="absolute w-[500px] h-[500px] bg-blue-700/20 blur-[150px] -top-20 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-purple-700/20 blur-[150px] bottom-0 right-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Heading */}
        <h2
          className="
            text-5xl font-extrabold mb-8 tracking-wide 
            bg-gradient-to-r from-blue-400 via-purple-300 to-pink-300 
            bg-clip-text text-transparent
          "
        >
          Contact Me
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          If you want to collaborate, hire, or just connect — I'm always excited
          to talk about new ideas!
        </p>

        {/* 📩 Contact Card */}
        <div
          className="
            bg-slate-800/40 backdrop-blur-xl p-10 rounded-2xl 
            border border-slate-700 
            shadow-[0_0_30px_rgba(0,0,0,0.4)]
            hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]
            hover:-translate-y-2 transition-all duration-700
          "
        >
          <div className="space-y-5 text-lg relative z-10">

            <p className="flex justify-center gap-2">
              <strong className="font-semibold text-gray-300">Email:</strong>
              <a
                href="mailto:jitendra18820@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition"
              >
                jitendra18820@gmail.com
              </a>
            </p>

            <p className="flex justify-center gap-2">
              <strong className="font-semibold text-gray-300">Phone:</strong>
              <span className="text-gray-400">+91 8824078215</span>
            </p>

            <p className="flex justify-center gap-2">
              <strong className="font-semibold text-gray-300">GitHub:</strong>
              <a
                href="https://github.com/jmeena7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition"
              >
                github.com/jmeena7
              </a>
            </p>

          </div>
        </div>

        {/* ✉️ Send Email Button */}
        <a
          href="mailto:jitendra18820@gmail.com"
          className="
            inline-block mt-10 px-10 py-4 text-lg font-semibold 
            bg-gradient-to-r from-blue-600 to-indigo-700 
            text-white rounded-xl shadow-lg
            hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
            hover:scale-[1.03] transition-all duration-300
          "
        >
          Send Email
        </a>
      </div>

    </section>
  );
};

export default Contact;
