import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  const businessVerticals = [
    {
      image: '/soft.jpg',
      title: 'Software Solutions',
      description:
        'Developing innovative software solutions including HRMS, Requisition Software, and Blueprint Software to streamline business operations.',
    },
    {
      image: '/minerals.jpg',
      title: 'Mining & Minerals',
      description:
        'AAS Mining division specializes in mineral exploration, extraction, and processing with sustainable practices.',
    },
    {
      image: '/agri.jpg',
      title: 'Agriculture',
      description:
        'Advancing agricultural practices through modern technology and sustainable farming solutions.',
    },
  ];

  return (
    <div className="min-h-screen relative py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg2.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mt-15 mb-16">
            <h1 className="text-4xl font-bold mb-6 text-[#111826]">
              About AAS International Pvt. Ltd.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading technology company with diverse business interests in
              software development, mining, and agriculture.
            </p>
          </div>

          {/* Company Overview */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-12 mb-16 border border-gray-100">
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
              <div className="p-2 bg-white/80 rounded-xl shadow-sm">
                <Image
                  src="/logo (1).png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <h2 className="text-3xl font-semibold text-[#111826] tracking-tight">Our Story</h2>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-4xl text-lg mx-auto text-center">
              AAS International Pvt. Ltd. is a dynamic organization that has
              established itself as a pioneer in multiple sectors. Our journey
              began with a vision to create innovative solutions that address
              real-world challenges. Today, we're proud to offer cutting-edge
              software products like our comprehensive HRMS platform,
              Requisition Software, and Blueprint Software, while also
              maintaining strong presence in mining and agricultural sectors.
            </p>
          </div>

          {/* Business Verticals */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-12 text-[#111826]">
              Our Business Verticals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {businessVerticals.map((vertical, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111826] mb-4 hover:text-[#a89456] transition-colors">
                      {vertical.title}
                    </h3>
                    <p className="text-gray-600">{vertical.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-[#111826] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-[#a89456]">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To be a global leader in technological innovation while
              maintaining sustainable practices across our diverse business
              portfolio, creating value for our clients, employees, and society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
