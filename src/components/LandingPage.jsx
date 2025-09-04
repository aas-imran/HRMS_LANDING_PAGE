"use client"
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import KeyFeatures from './KeyFeatures';

import HowItWorks from './HowItWorks';
import Pricing from './Pricing'; // Changed from Testimonials to Pricing
import Benefits from './Benefits';
import Integrations from './Integrations';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <KeyFeatures />
    
      <HowItWorks />
      {/* Replaced Testimonials with Pricing */}
      <Benefits />
  
      <div >
        <FAQ />
      </div>
      <ContactUs />
   
    </div>
  );
};

export default LandingPage;