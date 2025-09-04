"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#eef1f6'}}>
      <Navbar />
      <main className="pt-20">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;