"use client"
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

import KeyFeatures from './KeyFeatures';

import HowItWorks from './HowItWorks';

import Benefits from './Benefits';

import FAQ from './FAQ';



const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KeyFeatures />
    
      <HowItWorks />
      
      <Benefits />
  
      <div key="faq">
        <FAQ />
      </div>
    
     
   
    </div>
  );
};

export default LandingPage;