import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold">Jitendra Meena</a>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-4 px-3 py-1 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Download CV
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="toggle menu" className="p-2 rounded-md">
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block px-2 py-2 hover:bg-gray-100 rounded">
                  {link.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="block px-2 py-2 text-blue-600 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
