import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/Coprevo_logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-100/95 backdrop-blur-md border-b border-gray-300">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Coprevo Logo" className="h-12 md:h-16" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => navigate('/')} className="text-gray-700 hover:text-cyan-600">Home</button>
          <button onClick={() => navigate('/about')} className="text-gray-700 hover:text-cyan-600">About</button>
          <button onClick={() => navigate('/services')} className="text-gray-700 hover:text-cyan-600">Services</button>
          <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-cyan-600">Contact</button>
        </nav>
        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-100/95 p-6">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => navigate('/')} className="text-gray-700 hover:text-cyan-600">Home</button>
            <button onClick={() => navigate('/about')} className="text-gray-700 hover:text-cyan-600">About</button>
            <button onClick={() => navigate('/services')} className="text-gray-700 hover:text-cyan-600">Services</button>
            <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-cyan-600">Contact</button>
          </nav>
        </div>
      )}
    </>
  );
}
