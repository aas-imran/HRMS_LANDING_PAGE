import React, { useState } from 'react';
import RevealAnimation from './RevealAnimation';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section id="faq" className="py-20" style={{backgroundColor: '#f9fafb'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#111826'}}>Frequently Asked Questions</h2>
          <p className="text-xl" style={{color: '#6b7280'}}>
            Find answers to common questions about our HRMS
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation key={index} delay={index * 0.05}>
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-300 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold pr-4" style={{color: '#111826'}}>{faq.question}</h3>
                    <span className="text-2xl font-bold text-blue-600 flex-shrink-0">
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="px-6 pb-6 border-t border-gray-200">
                      <p className="leading-relaxed pt-4" style={{color: '#6b7280'}}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </RevealAnimation>
              
            ))}
          </div>
          <div className="lg:col-span-1">
            <RevealAnimation delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center sticky top-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: '#111826'}}>Still have questions?</h3>
              <p className="mb-6 leading-relaxed" style={{color: '#6b7280'}}>
                Our team is here to help you find the right solution for your business.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                  Contact Support
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Schedule a Call
                </button>
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