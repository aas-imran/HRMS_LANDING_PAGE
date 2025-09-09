"use client"
import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon
} from '@heroicons/react/24/outline';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { createContact } from '../../utils/api';
import { validateContactForm } from '../../utils/validation';
import RevealAnimation from '../../components/RevealAnimation';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    let timer;
    if (submitSuccess) {
      timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [submitSuccess]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSubmitSuccess(false);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    try {
      await createContact(formData);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
      });
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: "contact@aasint.com",
      description: "Get in touch via email"
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: "+91 674257 1111",
      description: "Mon-Fri, 10AM-7PM EST"
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      details: "Mon-Fri (10 AM - 7 PM) Available",
      description: "Round the clock assistance"
    }
  ];

  return (
    <section id="contact-us" className="py-20 bg-[#eef1f6]">
      <div className="max-w-7xl mx-auto px-4">
        <RevealAnimation>
          <div className="flex items-center justify-center gap-8 mb-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#111826]">Contact Us</h2>
              <p className="text-xl text-gray-500">
                Ready to get started? We're here to help you every step of the way.
              </p>
            </div>
            <div className="w-48 h-48">
              <DotLottieReact
                src="https://lottie.host/610173a8-f864-464c-8144-5f5442234219/fTLoPJA8tz.lottie"
                autoplay
                loop
              />
            </div>
          </div>
        </RevealAnimation>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <RevealAnimation direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#111826]">Get in Touch</h3>
                <p className="leading-relaxed mb-8 text-gray-500">
                  Have questions about our HRMS? Want to schedule a demo? Our team is ready to help you find the perfect solution for your business.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                    >
                      <div className="p-3 rounded-lg bg-[#a89456]">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 text-[#111826]">{info.title}</h4>
                        <p className="font-semibold mb-1 text-[#a89456]">{info.details}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealAnimation>

          {/* Contact Form */}
          <RevealAnimation direction="right">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6 text-[#111826]">
                Send us a Message
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-[#a89456] 
                  hover:border-[#a89456] ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-[#a89456] 
                  hover:border-[#a89456] ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-[#a89456] 
                  hover:border-[#a89456] ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 placeholder-gray-500 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-[#a89456] 
                  hover:border-[#a89456] ${errors.companyName ? 'border-red-500' : 'border-gray-200'}`}
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 resize-none placeholder-gray-500 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-[#a89456] 
                hover:border-[#a89456] ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
              ></textarea>

              {submitSuccess && (
                <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-center transition-opacity duration-300">
                  Message sent successfully! ✓
                </div>
              )}
              {errors.submit && (
                <div className="text-red-600 text-center mb-4">
                  {errors.submit}
                </div>
              )}

              <button 
                type="submit" 
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#a89456',
                  color: 'white'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
