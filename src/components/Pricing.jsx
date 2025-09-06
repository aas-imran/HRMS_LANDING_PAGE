import React, { useState, useContext } from 'react';
import { LenisContext } from './LenisProvider';
import Link from 'next/link';
import ContactSalesModal from './ContactSalesModal';
import RevealAnimation from './RevealAnimation';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false);
  const lenis = useContext(LenisContext);

  const plans = [
    {
      name: "Basic",
      description: "Essential features for small teams",
      monthlyPrice: 2000,
      annualPrice: 1600,
      features: [
        "Up to 15 employees",
        "Basic HR management",
        "Employee profiles",
        "Time tracking",
        "Basic reporting",
        "Email support"
      ],
      popular: false,
      color: "#6B7280"
    },
    {
      name: "Standard",
      description: "Perfect for growing businesses",
      monthlyPrice: 3500,
      annualPrice: 2800,
      features: [
        "Up to 50 employees",
        "Advanced HR management",
        "Employee self-service portal",
        "Time & attendance tracking",
        "Payroll basics",
        "Advanced reporting",
        "Priority support"
      ],
      popular: false,
      color: "#3B82F6"
    },
    {
      name: "Premium",
      description: "Most popular for established companies",
      monthlyPrice: 5000,
      annualPrice: 4000,
      features: [
        "Up to 200 employees",
        "Full HR suite",
        "Advanced payroll processing",
        "Performance management",
        "Advanced analytics",
        "API access",
        "Custom workflows",
        "24/7 support"
      ],
      popular: true,
      color: "#a89456"
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 7500,
      annualPrice: 6000,
      features: [
        "Unlimited employees",
        "Complete HR platform",
        "Advanced payroll & benefits",
        "Multi-location support",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "Advanced security & compliance"
      ],
      popular: false,
      color: "#111826"
    }
  ];

  const addOns = [
    { name: "Advanced Analytics", price: 500 },
    { name: "Custom Integrations", price: 750 },
    { name: "Training & Onboarding", price: 1000 },
    { name: "Compliance Management", price: 600 }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{backgroundColor: '#eef1f6'}}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-5" style={{backgroundColor: '#a89456'}}></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-5" style={{backgroundColor: '#111826'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealAnimation>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-blue-600 font-semibold text-sm">TRANSPARENT PRICING</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-5xl font-bold mb-6" style={{color: '#111826'}}>
              Simple, <span style={{color: '#a89456'}}>Transparent</span> Pricing
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{color: '#6b7280'}}>
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
          </RevealAnimation>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <RevealAnimation delay={0.6}>
            <div className="bg-white p-1 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                  isAnnual 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  20% OFF
                </span>
              </button>
            </div>
          </div>
          </RevealAnimation>
        </div>

        {/* Pricing Cards - 4 Cards Layout */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-16">
          {plans.map((plan, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <div
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-[#a89456] scale-105' : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg" style={{background: '#a89456'}}>
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2" style={{color: '#111826'}}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold" style={{color: plan.color}}>
                        ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-1 text-sm">/employee/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-xs text-green-600 mt-1">
                        Save ₹{(plan.monthlyPrice - plan.annualPrice) * 12}/employee/year
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm ${plan.popular ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-[#2c3346] text-[#a89456] shadow-lg hover:shadow-xl' : 'border-2 border-[#a89456] text-[#a89456] hover:bg-gradient-to-br hover:from-gray-900 hover:via-gray-800 hover:to-[#2c3346] hover:border-transparent hover:text-[#a89456] hover:shadow-lg'}`}
                >
                  {plan.popular ? 'Buy Now' : 'Get Started'}
                </button>
              </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Add-ons Section */}
        <RevealAnimation delay={0.8}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4" style={{color: '#111826'}}>
              Optional <span style={{color: '#a89456'}}>Add-ons</span>
            </h3>
            <p className="text-gray-600">
              Enhance your HRMS with these powerful additional features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <RevealAnimation key={index} delay={index * 0.1}>
                <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors duration-300">
                <h4 className="font-semibold mb-2" style={{color: '#111826'}}>
                  {addon.name}
                </h4>
                <p className="text-2xl font-bold" style={{color: '#a89456'}}>
                  +₹{addon.price}
                </p>
                <p className="text-sm text-gray-600">per employee/month</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        </RevealAnimation>

        {/* FAQ Section */}
        <RevealAnimation delay={1}>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6" style={{color: '#111826'}}>
              Questions About Pricing?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our pricing is transparent with no hidden fees. All plans include free setup, data migration, and training.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsContactSalesModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer"
            >
              Contact Sales
            </button>
            <Link href="/#faq" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 cursor-pointer inline-block">
              View FAQ
            </Link>
          </div>
        </div>
        </RevealAnimation>
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