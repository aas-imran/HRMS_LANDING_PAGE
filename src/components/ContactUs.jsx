

import React, { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: "support@hrms.com",
      description: "Get in touch via email"
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: "24/7 Support Available",
      description: "Round the clock assistance"
    }
  ];



  return (
    <section id="contact-us" className="py-20" style={{backgroundColor: '#eef1f6'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#111826'}}>Contact Us</h2>
          <p className="text-xl" style={{color: '#6b7280'}}>
            Ready to get started? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{color: '#111826'}}>Get in Touch</h3>
              <p className="leading-relaxed mb-8" style={{color: '#6b7280'}}>
                Have questions about our HRMS? Want to schedule a demo? Our team is ready to help you find the perfect solution for your business.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="p-3 rounded-lg" style={{backgroundColor: '#a89456'}}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{color: '#111826'}}>{info.title}</h4>
                      <p className="font-semibold mb-1" style={{color: '#a89456'}}>{info.details}</p>
                      <p className="text-sm" style={{color: '#6b7280'}}>{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6" style={{color: '#111826'}}>
                Send us a Message
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a89456';
                    e.target.style.boxShadow = '0 0 0 2px rgba(168, 148, 86, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#a89456';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a89456';
                    e.target.style.boxShadow = '0 0 0 2px rgba(168, 148, 86, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#a89456';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a89456';
                    e.target.style.boxShadow = '0 0 0 2px rgba(168, 148, 86, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#a89456';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                />
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{color: formData.subject ? '#111826' : '#6b7280'}}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#a89456';
                    e.target.style.boxShadow = '0 0 0 2px rgba(168, 148, 86, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  onMouseEnter={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#a89456';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (e.target !== document.activeElement) {
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                >
                  <option value="" style={{color: '#6b7280'}}>Select Subject</option>
                  <option value="demo" style={{color: '#111826'}}>Request Demo</option>
                  <option value="pricing" style={{color: '#111826'}}>Pricing Information</option>
                  <option value="support" style={{color: '#111826'}}>Technical Support</option>
                  <option value="partnership" style={{color: '#111826'}}>Partnership</option>
                  <option value="other" style={{color: '#111826'}}>Other</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                onFocus={(e) => {
                  e.target.style.borderColor = '#a89456';
                  e.target.style.boxShadow = '0 0 0 2px rgba(168, 148, 86, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.boxShadow = 'none';
                }}
                onMouseEnter={(e) => {
                  if (e.target !== document.activeElement) {
                    e.target.style.borderColor = '#a89456';
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.target !== document.activeElement) {
                    e.target.style.borderColor = '#d1d5db';
                  }
                }}
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                style={{
                  backgroundColor: '#a89456',
                  color: 'white'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactUs;