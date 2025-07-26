import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ProjectManagement() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans flex flex-col">
      <Header />

      {/* Main Content */}<main className="flex-grow max-w-6xl mx-auto px-6 pt-36 pb-16">
  	<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
   	 Leadership Coaching
  	</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8"></div>
  	<p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
   	 Empower your IT leaders and teams with personalized coaching focused
   	 on strategic thinking, change management, and growth.
 	 </p>
	</main>
      <Footer />
    </div>
  );
}