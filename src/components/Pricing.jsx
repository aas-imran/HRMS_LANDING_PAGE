import React, { useState, useContext } from 'react';
import { LenisContext } from './LenisProvider';
import Link from 'next/link';
import ContactSalesModal from './ContactSalesModal';
import { FaServer, FaCloud, FaCog, FaPalette, FaRainbow, FaSync, FaLock, FaPaintBrush, FaRocket,FaBullseye,FaQuestionCircle, } from 'react-icons/fa';

const Pricing = () => {
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false);
  const lenis = useContext(LenisContext);

  const solutions = [
    {
      name: "On-Premise Solution",
      description: "Software deployed on your office server with our complete support",
      icon: FaServer,
      features: [
        "Deployed on your office server",
        "Complete data control & security",
        "Full customization available",
        "On-site installation & setup",
        "Dedicated technical support",
        "Regular maintenance & updates",
        "Custom feature development",
        "Training & documentation",
        "24/7 helpdesk support"
      ],
      popular: false,
      color: "#3B82F6",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "Managed Cloud Solution",
      description: "Software deployed on our secure cloud with full management",
      icon: FaCloud,
      features: [
        "Deployed on our secure cloud",
        "99.9% uptime guarantee",
        "Automatic backups & updates",
        "Scalable infrastructure",
        "Advanced security protocols",
        "Real-time monitoring",
        "Multi-device accessibility",
        "Cloud-based integrations",
        "24/7 technical support"
      ],
      popular: true,
      color: "#a89456",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const customizationServices = [
    { 
      name: "Custom Feature Development", 
      icon: FaCog,
      description: "Add new features or modify existing ones"
    },
    { 
      name: "Brand Customization", 
      icon: FaPalette,
      description: "Complete UI/UX design matching your brand"
    },
    { 
      name: "Color Theme Customization", 
      icon: FaRainbow,
      description: "Custom color schemes throughout the system"
    },
    { 
      name: "Workflow Customization", 
      icon: FaSync,
      description: "Tailor workflows to match your processes"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bg3.jpg")' }}>
      <div className="absolute inset-0  bg-white/80 backdrop-blur-sm"></div>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-5" style={{backgroundColor: '#a89456'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-5" style={{backgroundColor: '#111826'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 font-semibold text-sm">DEPLOYMENT SOLUTIONS</span>
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{color: '#111826'}}>
            Flexible <span style={{color: '#a89456'}}>Solutions</span> for Every Business
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8" style={{color: '#6b7280'}}>
            Choose between On-Premise or Cloud deployment. Both solutions include full customization options for features, design, and colors to match your business needs.
          </p>
          
          {/* Customization Highlight */}
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-2xl p-6 max-w-6xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <FaPaintBrush className="text-3xl mr-3" style={{color: '#a89456'}} />
              <h3 className="text-2xl font-bold" style={{color: '#111826'}}>Fully <span style={{color: '#a89456'}}>Customizable</span></h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <FaCog className="text-2xl mb-2" style={{color: '#a89456'}} />
                <span className="font-semibold text-gray-700">Custom Features</span>
                <span className="text-sm text-gray-600">Add or modify any functionality</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPalette className="text-2xl mb-2" style={{color: '#a89456'}} />
                <span className="font-semibold text-gray-700">Custom Design</span>
                <span className="text-sm text-gray-600">Match your brand identity</span>
              </div>
              <div className="flex flex-col items-center">
                <FaRainbow className="text-2xl mb-2" style={{color: '#a89456'}} />
                <span className="font-semibold text-gray-700">Custom Colors</span>
                <span className="text-sm text-gray-600">Your brand colors throughout</span>
              </div>
            </div>
          </div>
        </div>



        {/* Solution Cards - 2 Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-visible ${
                solution.popular ? 'border-4' : 'border-2 border-gray-100'
              }`}
              style={{
                 borderColor: solution.popular ? '#a89456' : undefined
               }}
            >
              {/* Popular Badge */}
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50">
                  <div className="text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg" style={{backgroundColor: '#a89456'}}>
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(135deg, rgba(168, 148, 86, 0.1) 0%, rgba(168, 148, 86, 0.05) 100%)'}}></div>
              
              <div className="relative p-8">
                {/* Solution Header */}
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-6xl" style={{color: solution.color}} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{color: '#111826'}}>
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{solution.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-center" style={{color: '#111826'}}>What's Included:</h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0" style={{backgroundColor: solution.color}}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsContactSalesModalOpen(true)}
                  className="w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-white"
                  style={{
                    backgroundColor: '#111826'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#a89456';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#111826';
                  }}
                >
                  {solution.popular ? 'Choose This Solution' : 'Contact for Demo'}
                </button>
              </div>
            </div>
            );
          })}
        </div>

        {/* Customization Services Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl p-10 mb-16 border border-gray-200">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-sm">🎨 CUSTOMIZATION SERVICES</span>
            </div>
            <h3 className="text-4xl font-bold mb-4" style={{color: '#111826'}}>
              Make It <span style={{color: '#a89456'}}>Truly Yours</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform our HRMS to perfectly match your business needs, brand identity, and workflows. Every aspect can be customized to your requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-4xl" style={{color: '#a89456'}} />
                  </div>
                  <h4 className="font-bold mb-3 text-lg" style={{color: '#111826'}}>
                    {service.name}
                  </h4>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
          
          {/* Customization CTA */}
          <div className="text-center mt-10">
            <div className=" rounded-2xl p-8 " >
              <h4 className="text-2xl font-bold mb-4" style={{color: '#111826'}}>
                Need Something Specific? 🤔
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We understand every business is unique. Our team can customize any feature, design element, or workflow to match your exact requirements.
              </p>
              <button 
                onClick={() => setIsContactSalesModalOpen(true)}
                className="text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: '#111826'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#a89456';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#111826';
                }}
              >
                💬 Discuss Custom Requirements
              </button>
            </div>
          </div>
        </div>

        {/* Solutions FAQ Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-200">
            <h3 className="text-3xl font-bold mb-6" style={{color: '#111826'}}>
              Ready to Choose Your <span style={{color: '#a89456'}}>Solution</span>?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Both deployment options include complete customization capabilities, free setup, data migration, training, and ongoing support. No hidden fees, transparent pricing.
            </p>
            
            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="font-bold mb-2" style={{color: '#111826'}}>Secure & Reliable</h4>
                <p className="text-gray-600 text-sm">Enterprise-grade security for both deployment options</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold mb-2" style={{color: '#111826'}}>Fully Customizable</h4>
                <p className="text-gray-600 text-sm">Tailor every aspect to match your business needs</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold mb-2" style={{color: '#111826'}}>Quick Deployment</h4>
                <p className="text-gray-600 text-sm">Get started within days, not months</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsContactSalesModalOpen(true)}
                className="text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-2"
                style={{
                  backgroundColor: '#2563eb'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                }}
              >
                <FaBullseye /> Get Custom Quote
              </button>
              <Link 
                href="/#faq" 
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <FaQuestionCircle /> View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal 
        isOpen={isContactSalesModalOpen}
        onClose={() => setIsContactSalesModalOpen(false)}
      />
    </section>
  );
};

export default Pricing;