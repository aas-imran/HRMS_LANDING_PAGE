"use client"
import React from 'react';
import Navbar from '../../components/Navbar';
import FeaturesShowcase from '../../components/FeaturesShowcase';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FeaturesShowcase />
    </div>
  );
};

export default FeaturesPage;