import React, { useState, useCallback } from 'react';
import RevealAnimation from './RevealAnimation';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const faqs = [
    {
      question: "Do you handle payroll processing and salary calculations?",
      answer: "Yes, the platform includes a comprehensive payroll module that automates salary calculations based on attendance, leave balances, benefits, and predefined salary structures."
    },
    {
      question: "Can the system manage tax deductions and generate payslips?",
      answer: "Absolutely. The system automatically applies tax deductions based on the current income tax slabs as per Indian government regulations, and generates downloadable payslips for each payroll cycle."
    },
    {
      question: "Is there any provision to handle reimbursements?",
      answer: "Yes, employees can submit reimbursement claims through the platform, which can be reviewed, approved, and tracked by authorized personnel."
    },
    {
      question: "How can I onboard new employees in the system?",
      answer: "Only authorized personnel, such as HR administrators, can onboard new employees. Once the verification and approval process are complete, the system auto generates Employee ID and grants access to the platform."
    },
    {
      question: "Can attendance be tracked through biometric or manual entry?",
      answer: "The system supports biometric attendance through QR scanning and facial recognition only. Additionally, attendance can only be recorded at designated locations using geofencing restrictions."
    },
    {
      question: "Is there an option to generate leave and attendance reports?",
      answer: "Yes, detailed reports for leave and attendance can be generated with filters for departments, dates, and employee types. These reports are exportable in both CSV and Excel formats."
    },
    {
      question: "Is there support for document circulation and internal notices?",
      answer: "Yes, the platform includes a Resource Centre to store policies, guidelines, and employee handbooks. Additionally, internal notices can be created, published, and managed via the built-in Notice Board module."
    },
    {
      question: "Is there a free trial or demo available?",
      answer: "Yes, we offer personalized demos to help you explore the platform and its capabilities. Demo sessions must be booked in advance through our demo request form or sales team."
    },
    {
      question: "Can the HRMS be customized to match my organization's policies?",
      answer: "Yes, the platform can be tailored to fit your organization's policies, workflows, and approval structures. However, customization features are offered under specific plans. To explore customization options and eligibility, please get connect with our sales team."
    },
    {
      question: "Are there any hidden charges beyond the subscription fee?",
      answer: "No, there are no hidden charges. We maintain complete transparency. Please refer to the official pricing catalogue provided by our sales representative, which clearly outlines the features and services included in your selected plan."
    }
  ]


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20" style={{ backgroundImage: 'url("/bg2.jpg")' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl font-bold" style={{color: '#111826'}}>Frequently Asked Questions</h2>
            <DotLottieReact 
              src="https://lottie.host/233b6d6f-bdd6-4126-bbd9-00142644fbdc/zSc0chF4pT.lottie" 
              loop 
              autoplay 
              style={{width: '112px', height: '112px'}}
            />
          </div>
          <p className="text-xl" style={{color: '#6b7280'}}>
            Find answers to common questions about our HRMS
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const bgColors = [
                'bg-gradient-to-r from-blue-50 to-indigo-50',
                'bg-gradient-to-r from-purple-50 to-pink-50', 
                'bg-gradient-to-r from-green-50 to-emerald-50',
                'bg-gradient-to-r from-orange-50 to-red-50',
                'bg-gradient-to-r from-teal-50 to-cyan-50',
                'bg-gradient-to-r from-yellow-50 to-amber-50',
                'bg-gradient-to-r from-rose-50 to-pink-50',
                'bg-gradient-to-r from-violet-50 to-purple-50',
                'bg-gradient-to-r from-lime-50 to-green-50',
                'bg-gradient-to-r from-sky-50 to-blue-50'
              ];
              
              return (
                <RevealAnimation key={index} delay={index * 0.05}>
                  <div className={`${bgColors[index % bgColors.length]} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 backdrop-blur-sm overflow-hidden`}>
                    <div 
                      className="p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 flex justify-between items-center group"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="text-lg font-semibold pr-4 group-hover:text-gray-800 transition-colors" style={{color: '#111826'}}>{faq.question}</h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-white/80 rotate-180' : 'bg-white/60 hover:bg-white/80'} shadow-md`}>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{color: '#a89456'}}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6">
                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                          <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
          <div className="lg:col-span-1">
            <RevealAnimation delay={0.1}>
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm text-center sticky top-8 hover:shadow-2xl transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-lg"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#a89456] to-orange-500/40
                   rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#a89456] to-orange-500/40 bg-clip-text text-transparent">
                    Still have questions?
                  </h3>
                  
                  <p className="mb-6 leading-relaxed text-gray-700 font-medium">
                    Our team is here to help you find the right solution for your business.
                  </p>
                  
                  <div className="space-y-3">
                    <button 
                      className="w-full bg-gradient-to-r from-[#a89456] to-orange-500/40 text-white py-4 px-6 rounded-xl font-semibold hover:from-[#111826] hover:to-[#a89456] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                      onMouseEnter={() => setShowPhoneNumber(true)}
                      onMouseLeave={() => setShowPhoneNumber(false)}
                      onClick={() => setShowPhoneNumber(true)}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {showPhoneNumber ? '+91 674257 1111' : 'Schedule a Call'}
                    </button>
                    
                    <div className="text-sm text-gray-600 font-medium">
                      <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Free consultation available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;