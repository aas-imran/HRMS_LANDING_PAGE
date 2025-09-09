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
      {/* Replaced Testimonials with Pricing */}
      <Benefits />
  
      <div key="faq">
        <FAQ />
      </div>
      {/* <ContactUs /> */}
     
   
    </div>
  );
};

export default LandingPage;