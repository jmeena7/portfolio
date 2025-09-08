// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded hover:bg-gray-100">React</div>
          <div className="p-4 border rounded hover:bg-gray-100">JavaScript</div>
          <div className="p-4 border rounded hover:bg-gray-100">HTML/CSS</div>
          <div className="p-4 border rounded hover:bg-gray-100">Tailwind CSS</div>
          <div className="p-4 border rounded hover:bg-gray-100">Node.js</div>
          <div className="p-4 border rounded hover:bg-gray-100">MongoDB</div>
          <div className="p-4 border rounded hover:bg-gray-100">API Integration</div>
          <div className="p-4 border rounded hover:bg-gray-100">Git</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
