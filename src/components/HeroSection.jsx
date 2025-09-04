"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" className="text-black pt-20 pb-16" style={{background: `#eeeff1`}}>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Streamline Your HR Operations with Our Comprehensive <span style={{color: '#a89456'}}>HRMS</span>
            </h1>
            <p className="text-xl text-black text-opacity-90 leading-relaxed">
              Manage employees, payroll, attendance, and performance all in one powerful platform. 
              Boost productivity and reduce administrative overhead with our intuitive HR management system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToFeatures}
                className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group" 
                style={{backgroundColor: '#111826'}}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Let's Explore
                  <span className="ml-2 flex space-x-1">
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                  </span>
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: '#a89456'}}></div>
              </button>
              {/* <button className="border-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group" style={{borderColor: '#a89456', color: '#111826', backgroundColor: 'transparent'}}>
                <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors duration-300">
                  Watch Demo
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#a89456'}}></div>
              </button> */}
            </div>
          </div>
           <div className="flex justify-center">
            <div className=" bg-opacity-10 backdrop-blur-sm rounded-xl h-120 w-full flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/a3b4f7e9-e2d5-4205-b234-de67ea8acf34/OV9HXzFlrp.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;