// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hi! I'm Jitendra Meena, a passionate Front-End Developer with expertise in React, JavaScript, and modern web technologies. I build responsive, fast, and user-friendly web applications.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Projects I've worked on include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Note App (MERN stack with JWT Authentication)</li>
          <li>NetflixGPT Clone (React, API Integration)</li>
          <li>Swiggy Clone (Responsive UI with Tailwind CSS)</li>
        </ul>
        <p className="text-lg text-gray-700">
          I’m always excited to learn new technologies and contribute to real-world projects.
        </p>
      </div>
    </section>
  );
};

export default About;
