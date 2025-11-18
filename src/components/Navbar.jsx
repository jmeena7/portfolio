// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-500 border-b
        ${
          scrolled
            ? "bg-slate-900/70 backdrop-blur-xl border-white/10 shadow-[0_0_25px_rgba(56,189,248,0.25)] py-2"
            : "bg-slate-900/40 backdrop-blur-lg border-white/5 py-4"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#hero"
            className="
              text-xl font-bold tracking-wide text-blue-300
              hover:text-blue-400 transition-all duration-300
              hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]
            "
          >
            Jitendra Meena
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative group font-medium text-gray-200 transition
                  hover:text-blue-400
                "
              >
                {link.label}

                {/* Animated Underline */}
                <span
                  className="
                    absolute left-1/2 bottom-0 w-0 h-[2px]
                    bg-blue-500 group-hover:w-full
                    group-hover:left-0 transition-all duration-300
                    shadow-[0_0_10px_rgba(59,130,246,0.7)]
                  "
                ></span>
              </a>
            ))}

            {/* CV Button */}
            <a
              href="/Jitendar-Meena.pdf"
              download="Jitendar-Meena.pdf"
              className="
                ml-4 px-4 py-1.5 rounded-lg font-medium
                border border-blue-500 text-blue-300
                hover:bg-blue-600 hover:text-white
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              "
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="toggle menu"
              className="p-2 rounded-md text-gray-300 hover:text-white transition"
            >
              {open ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="flex flex-col space-y-3 py-4 animate-slideDown">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  block px-3 py-2 font-medium rounded-md
                  text-gray-200 hover:bg-white/10 transition
                "
              >
                {link.label}
              </a>
            ))}

            {/* CV Mobile Button */}
            <a
              href="/Jitendar-Meena.pdf"
              download="Jitendar-Meena.pdf"
              onClick={() => setOpen(false)}
              className="
                block px-3 py-2 rounded-md font-semibold
                text-blue-300 border border-blue-500/40
                hover:bg-blue-600 hover:text-white
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
              "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown { animation: slideDown 0.4s ease forwards; }
      `}</style>
    </nav>
  );
};

export default Navbar;
