// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-4">
          Feel free to reach out to me for collaborations or any queries!
        </p>
        <a href="mailto:yourmail@example.com" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
