import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to implement the HRMS?",
      answer: "Implementation typically takes 2-4 weeks depending on your organization size and complexity. Our dedicated implementation team will guide you through every step of the process."
    },
    {
      question: "Is my data secure with your HRMS?",
      answer: "Yes, we use enterprise-grade security measures including 256-bit SSL encryption, regular security audits, and compliance with GDPR, SOC 2, and other industry standards. Your data is stored in secure, redundant data centers."
    },
    {
      question: "Can I migrate data from my current HR system?",
      answer: "Absolutely! We provide free data migration services for all new customers. Our team will help you transfer employee records, payroll history, and other important data seamlessly."
    },
    {
      question: "Do you offer mobile access?",
      answer: "Yes, our HRMS includes mobile apps for both iOS and Android, plus a responsive web interface that works perfectly on all devices. Employees can access their information anytime, anywhere."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 customer support via phone, email, and live chat. Plus, you'll get access to our comprehensive knowledge base, video tutorials, and dedicated customer success manager."
    },
    {
      question: "Can the system handle multiple locations?",
      answer: "Yes, our HRMS is designed for multi-location businesses. You can manage different offices, departments, and even countries with location-specific settings, compliance rules, and reporting."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required. You can also schedule a personalized demo to see how the system works for your specific needs."
    },
    {
      question: "How much does the HRMS cost?",
      answer: "Our pricing is based on the number of employees and features you need. Plans start at $5 per employee per month. Contact us for a custom quote based on your specific requirements."
    }
  ];

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
            ))}
          </div>
          <div className="lg:col-span-1">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;