import React from 'react';
import { BuildingOffice2Icon, CpuChipIcon, CubeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const AboutPage = () => {
  const businessVerticals = [
    {
      icon: CpuChipIcon,
      title: 'Software Solutions',
      description: 'Developing innovative software solutions including HRMS, Requisition Software, and Blueprint Software to streamline business operations.'
    },
    {
      icon: CubeIcon,
      title: 'Mining & Minerals',
      description: 'AAS Mining division specializes in mineral exploration, extraction, and processing with sustainable practices.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Agriculture',
      description: 'Advancing agricultural practices through modern technology and sustainable farming solutions.'
    }
  ];

  return (
    <div className="min-h-screen  bg-[#eef1f6] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center  mt-15 mb-16">
          <h1 className="text-4xl font-bold mb-6 text-[#111826]">
            About AAS International
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading technology company with diverse business interests in software development, mining, and agriculture.
          </p>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 rounded-lg bg-[#a89456]">
              <BuildingOffice2Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6 text-[#111826]">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
            AAS International Pvt. Ltd. is a dynamic organization that has established itself as a pioneer in multiple sectors. Our journey began with a vision to create innovative solutions that address real-world challenges. Today, we're proud to offer cutting-edge software products like our comprehensive HRMS platform, Requisition Software, and Blueprint Software, while also maintaining strong presence in mining and agricultural sectors.
          </p>
        </div>

        {/* Business Verticals */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#111826]">
            Our Business Verticals
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessVerticals.map((vertical, index) => {
              const IconComponent = vertical.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-3 rounded-lg bg-[#a89456]">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4 text-[#111826]">
                    {vertical.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {vertical.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-[#111826] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#a89456]">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            To be a global leader in technological innovation while maintaining sustainable practices across our diverse business portfolio, creating value for our clients, employees, and society.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;