// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Note App</h3>
            <p>Full-stack MERN app with user authentication, notes CRUD functionality.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">NetflixGPT Clone</h3>
            <p>React-based UI integrated with APIs for dynamic content presentation.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Swiggy Clone</h3>
            <p>Responsive food delivery UI with Tailwind CSS and API integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
