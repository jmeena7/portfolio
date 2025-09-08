// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Jitendra Meena</h1>
        <p className="text-lg md:text-xl mb-6">Front-End Developer | React Enthusiast | Problem Solver</p>
        <a href="#contact" className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-100">Contact Me</a>
      </div>
    </section>
  );
};

export default Hero;
