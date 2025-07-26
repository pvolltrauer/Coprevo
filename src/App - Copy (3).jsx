import React, { useState, useEffect } from "react";
import logo from "./assets/Coprevo_logo.png";
import background from "./assets/background.jpg";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-100/95 backdrop-blur-md border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Coprevo Logo" className="h-12 md:h-16" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-600">About</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-cyan-600">Services</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600">Contact</button>
        </nav>
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-100/95 p-6">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-600">About</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-cyan-600">Services</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600">Contact</button>
          </nav>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center py-32 px-6 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-cyan-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white">Your Technology <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Evolution</span> Starts Here</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-4xl mx-auto">Empowering organizations to evolve and modernize their technology strategies for the digital future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigate("/contact")} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full">Get Started Today</button>
            <button onClick={() => scrollToSection('services')} className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full">Learn More</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-cyan-400">Coprevo</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Coprevo is a premier IT consulting firm specializing in digital transformation, technology strategy, change management, and executive leadership coaching. We empower organizations to cooperate effectively, manage projects strategically, and evolve their business models for the digital age.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Comprehensive solutions designed to transform your organization and drive sustainable growth.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to <span className="text-cyan-400">Transform</span>?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Let's discuss how we can help transform your business and drive innovation in your organization.</p>
          <button onClick={() => navigate("/contact")} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-4 rounded-full">Contact Us</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 border-t border-gray-300 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Coprevo Logo" className="h-8" />
              </div>
              <p className="text-gray-600 text-sm">Empowering organizations to evolve and thrive in the digital age.</p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><button onClick={() => navigate('/digital-transformation')} className="hover:text-cyan-600">Digital Transformation</button></li>
                <li><button onClick={() => navigate('/it-leadership-coaching')} className="hover:text-cyan-600">Leadership Coaching</button></li>
                <li><button onClick={() => navigate('/project-management')} className="hover:text-cyan-600">Project Management</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><button onClick={() => navigate('/about')} className="hover:text-cyan-600">About Us</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-cyan-600">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-cyan-600">FB</a>
                <a href="#" className="text-gray-600 hover:text-cyan-600">LN</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 text-center">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Coprevo. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
