import React from 'react';
import Logo from "./SVG/Logo";
import Dots from "./SVG/PulseLogo";
import ecol1 from "../images/ecoI1.svg";
import ecol2 from "../images/ecoI2.svg";
import ecol3 from "../images/ecoI3.svg";
import ecol4 from "../images/ecoI4.svg";
import ecol5 from "../images/ecoI5.svg";
import ecol6 from "../images/ecoI6.svg";
import PricingTable from "./PricingTable";

function Ecosystem() {
  const ecoImages = [
    { src: ecol1, alt: "Figma Integration" },
    { src: ecol2, alt: "NotionHQ Integration" },
    { src: ecol3, alt: "1Blocker Integration" },
    { src: ecol4, alt: "DaVinci Integration" },
    { src: ecol5, alt: "MindNode Integration" },
    { src: ecol6, alt: "GitLab Integration" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col justify-center items-center py-8 px-4">
      {/* Title */}
      <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center max-w-4xl text-white font-bold mb-12 leading-tight pb-10">
        An ecosystem of integrations
      </h1>

      {/* Container for ping effect with orbital rings */}
      <div data-aos="fade-up" data-aos-delay="600" className="relative flex items-center justify-center mb-16">
        {/* Static orbital rings like in the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer elliptical ring */}
          <div className="absolute w-96 h-56 border border-white/15 rounded-full transform -rotate-12" 
               style={{ 
                 background: 'radial-gradient(ellipse, transparent 70%, rgba(139, 92, 246, 0.05) 100%)'
               }} />
          
          {/* Inner elliptical ring */}
          <div className="absolute w-72 h-40 border border-white/25 rounded-full transform rotate-12"
               style={{ 
                 background: 'radial-gradient(ellipse, transparent 70%, rgba(139, 92, 246, 0.08) 100%)'
               }} />
        </div>

        {/* Enhanced pulsing effects with multiple layers */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Large pulse */}
          <div className="absolute w-40 h-40 bg-violet-500/15 rounded-full animate-ping" 
               style={{ 
                 animationDuration: '3s',
                 animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
               }} />
          
          {/* Medium pulse with delay */}
          <div className="absolute w-32 h-32 bg-violet-400/20 rounded-full animate-ping" 
               style={{ 
                 animationDuration: '2.5s',
                 animationDelay: '0.7s',
                 animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
               }} />
          
          {/* Small pulse with different timing */}
          <div className="absolute w-24 h-24 bg-violet-300/25 rounded-full animate-ping" 
               style={{ 
                 animationDuration: '2s',
                 animationDelay: '1.2s',
                 animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
               }} />

          {/* Continuous subtle pulse */}
          <div className="absolute w-28 h-28 bg-violet-600/10 rounded-full animate-pulse" 
               style={{ animationDuration: '1.5s' }} />
        </div>


        {/* Central logo with enhanced styling */}
        <div className="relative z-10  p-4 rounded-2xl border border-slate-600 shadow-2xl">
          <Logo className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
      </div>

      {/* Ecosystem integration cards - Fully responsive */}
      <div data-aos="fade-up" data-aos-delay="900" className="pt-10 w-full max-w-7xl px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-16">
          {ecoImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-slate-700/60 hover:bg-slate-600/70 transition-all duration-500 ease-out p-4 sm:p-6 rounded-xl border border-slate-600/40 hover:border-violet-500/60 hover:shadow-xl hover:shadow-violet-500/20 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: `fadeInUp 0.6s ease-out forwards ${index * 100}ms`
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <img 
                  src={image.src} 
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain filter group-hover:brightness-110 transition-all duration-300" 
                  alt={image.alt} 
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>

      <PricingTable />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.4;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Ecosystem;