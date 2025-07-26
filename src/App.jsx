import React from "react";
import background from "./assets/background.jpg";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans flex flex-col">
      {/* ✅ Consistent Header */}
      <Header />

   {/* HERO */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center py-32 px-6 min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-cyan-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">Your Technology <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Evolution</span> Starts Here</h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">Empowering organizations to evolve and modernize their technology strategies for the digital future.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigate("/contact")} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">Get Started Today</button>
            <button onClick={() => scrollToSection('services')} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">Learn More</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-cyan-400">Coprevo</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">Coprevo is a premier IT consulting firm specializing in digital transformation, technology strategy, change management, and executive leadership coaching. We empower organizations to cooperate effectively, manage projects strategically, and evolve their business models for the digital age.</p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">Our mission is to bridge the gap between current capabilities and future possibilities, ensuring your organization not only adapts to change but thrives in it.</p>
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
                {["Proven track record of successful transformations","Tailored solutions for your unique challenges","Expert guidance from industry leaders","Ongoing support throughout your journey"].map((item,index)=>(
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">Comprehensive solutions designed to transform your organization and drive sustainable growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Transformation Strategy",
                description: "Tailored strategies to evolve your business into a digital-first organization with cutting-edge technology solutions.",
                features: ["Technology roadmap development","Digital process optimization","Innovation strategy consulting"],
                gradient: "from-cyan-400 to-blue-500",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Executive IT Leadership Coaching",
                description: "Personalized coaching for IT leaders to drive innovation, manage teams effectively, and lead organizational change.",
                features: ["Leadership development programs","Strategic thinking workshops","Change management training"],
                gradient: "from-purple-400 to-pink-500",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              },
              {
                title: "Project Management Excellence",
                description: "Comprehensive guidance to manage critical IT projects efficiently, on time, and within budget.",
                features: ["Agile methodology implementation","Risk management strategies","Team performance optimization"],
                gradient: "from-green-400 to-emerald-500",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              }
            ].map((service,index)=>(
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <ul className="text-gray-400 space-y-2 text-sm">{service.features.map((feature,idx)=>(<li key={idx}>• {feature}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to <span className="text-cyan-400">Transform</span>?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">Let's discuss how we can help transform your business and drive innovation in your organization.</p>
          <button onClick={() => navigate("/contact")} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-full">Contact Us</button>
        </div>
      </section>

      {/* ✅ Consistent Footer */}
      <Footer />
    </div>
  );
}
