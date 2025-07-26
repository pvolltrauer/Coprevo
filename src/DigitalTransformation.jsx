import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DigitalTransformation() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans flex flex-col">
      {/* ✅ Consistent Header */}
      <Header />

      {/* ✅ Page Content */}
	<main className="flex-grow max-w-6xl mx-auto px-6 pt-36 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Digital Transformation Strategy
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"></div>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          Tailored strategies to evolve your business into a digital-first organization with cutting-edge technology solutions.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Technology roadmap development</li>
          <li>Digital process optimization</li>
          <li>Innovation strategy consulting</li>
        </ul>
      </main>

      {/* ✅ Consistent Footer */}
      <Footer />
    </div>
  );
}
