import React, { useState, useEffect } from "react";
import logo from "./assets/Coprevo_logo.png";
import background from "./assets/background.jpg";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Header scroll effect
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (header) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
        
        if (scrollTop > 50) {
          header.style.backgroundColor = 'rgba(243, 244, 246, 0.98)';
        } else {
          header.style.backgroundColor = 'rgba(243, 244, 246, 0.95)';
        }
      }
      
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      {/* Clean, Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-gray-100/95 backdrop-blur-md border-b border-gray-300 transition-all duration-300">
        
        {/* Logo - Made Memorable */}
        <div className="flex items-center relative z-10">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Coprevo Logo" className="h-12 md:h-16 transition-all duration-300 hover:scale-105" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="relative z-10 hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden relative z-10 text-gray-700 hover:text-cyan-600 transition-colors duration-300" 
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-gray-100/95 backdrop-blur-md border-b border-gray-300 shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-cyan-600 font-medium text-left transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cyan-600 font-medium text-left transition-colors duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-cyan-600 font-medium text-left transition-colors duration-300">
              Services
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-cyan-600 font-medium text-left transition-colors duration-300">
              Contact
            </button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 min-h-screen bg-cover bg-center"
        style={{backgroundImage: `url(${background})`}}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-cyan-900/70"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
            Your Technology
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Evolution
            </span>
            Starts Here
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
            Empowering organizations to evolve and modernize their technology strategies for the digital future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
	<button
  		onClick={() => navigate("/contact")}
		  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform 				hover:scale-105 transition-all duration-300"
>
               Get Started Today
            </button>
	<button
  		onClick={() => {
   			 const servicesSection = document.getElementById("services");
  			  if (servicesSection) {
     			 servicesSection.scrollIntoView({ behavior: "smooth" });
 			  }
 		 }}
 	 className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
	>
 	 Learn More
	</button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Coprevo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Coprevo is a premier IT consulting firm specializing in digital transformation, technology strategy, change management, and executive leadership coaching. We empower organizations to cooperate effectively, manage projects strategically, and evolve their business models for the digital age.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our mission is to bridge the gap between current capabilities and future possibilities, ensuring your organization not only adapts to change but thrives in it.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Coprevo?</h3>
              <ul className="space-y-4">
                {[
                  "Proven track record of successful transformations",
                  "Tailored solutions for your unique challenges", 
                  "Expert guidance from industry leaders",
                  "Ongoing support throughout your journey"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Comprehensive solutions designed to transform your organization and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Strategy",
                description: "Tailored strategies to evolve your business into a digital-first organization with cutting-edge technology solutions.",
                features: ["Technology roadmap development", "Digital process optimization", "Innovation strategy consulting"],
                gradient: "from-cyan-400 to-blue-500",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Executive IT Leadership Coaching", 
                description: "Personalized coaching for IT leaders to drive innovation, manage teams effectively, and lead organizational change.",
                features: ["Leadership development programs", "Strategic thinking workshops", "Change management training"],
                gradient: "from-purple-400 to-pink-500",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              },
              {
                title: "Project Management Excellence",
                description: "Comprehensive guidance to manage critical IT projects efficiently, on time, and within budget.",
                features: ["Agile methodology implementation", "Risk management strategies", "Team performance optimization"],
                gradient: "from-green-400 to-emerald-500", 
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Explore All Services
            </button>
          </div>
        </div>
      </section>

    {/* Contact Section */}
<section id="contact" className="py-20 px-6 bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to <span className="text-cyan-400">Transform</span>?
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
      Let's discuss how we can help transform your business and drive innovation in your organization.
    </p>

    {/* ✅ Single Contact Us Button */}
    <button
      onClick={() => navigate("/contact")}
      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full font-semibold text-xl shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      Contact Us
    </button>
  </div>
</section>


    {/* Footer */}
    <section id="footer" className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Coprevo Logo" className="h-8" />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering organizations to evolve and thrive in the digital age.
            </p>
          </div>

          {/* Services Column now links to pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => navigate('/digital-transformation')} className="hover:text-cyan-400 transition-colors">Digital Transformation</button></li>
              <li><button onClick={() => navigate('/it-leadership-coaching')} className="hover:text-cyan-400 transition-colors">Leadership Coaching</button></li>
              <li><button onClick={() => navigate('/project-management')} className="hover:text-cyan-400 transition-colors">Project Management</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => navigate('/about')} className="hover:text-cyan-400 transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-cyan-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Follow Us (unchanged) */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Coprevo. All rights reserved. |
            <button className="hover:text-cyan-400 transition-colors ml-2 mr-2">Privacy Policy</button> |
            <button className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</button>
          </p>
        </div>
      </div>
    </footer>
  );
}
