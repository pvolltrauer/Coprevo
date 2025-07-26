import React from "react";
import logo from "./assets/Coprevo_logo.png";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans flex flex-col">
      {/* HEADER (IDENTICAL TO MAIN PAGE) */}
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
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow p-10 max-w-4xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-gray-100 mb-6">About Coprevo</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Coprevo empowers organizations to thrive in the digital era through tailored IT consulting,
          strategic leadership guidance, and project excellence.
        </p>
      </main>

      {/* FOOTER (IDENTICAL TO MAIN PAGE) */}
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
                {/* Twitter */}
                <a href="#" className="text-gray-700 hover:text-[#186C86] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-gray-700 hover:text-[#186C86] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-400 pt-8 text-center">
            <p className="text-gray-700 text-sm">© {new Date().getFullYear()} Coprevo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
