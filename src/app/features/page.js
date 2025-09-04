"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeaturesShowcase from '../../components/FeaturesShowcase';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FeaturesShowcase />
      <Footer />
    </div>
  );
};

export default FeaturesPage;