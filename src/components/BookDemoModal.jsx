"use client"
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { createContact } from '@/utils/api';
import { validateContactForm } from '@/utils/validation';
import toast from 'react-hot-toast';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const validation = validateContactForm(formData);
      if (!validation.isValid) {
        const errorMessages = Object.values(validation.errors).join('\n');
        setError(errorMessages);
        return;
      }

      await createContact(formData);
      toast.success('Demo booked successfully!', {
        duration: 4000,
        position: 'center',
        style: {
          background: '#a89456',
          color: '#111826',
          padding: '16px',
          borderRadius: '8px',
        },
      });
      onClose();
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        message: ''
      });
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ touchAction: 'none' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        onTouchEnd={(e) => {
          e.preventDefault();
          onClose();
        }}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-[#111826]">
            Book <span className="text-[#a89456]">Demo</span>
          </h3>
          <button 
            onClick={onClose}
            onTouchEnd={(e) => {
              e.preventDefault();
              onClose();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 touch-manipulation"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
              {error}
            </div>
          )}
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter your full name"
            />
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter your email address"
            />
          </div>
          
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter your phone number"
            />
          </div>
          
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter your company name"
            />
          </div>
          
          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#a89456] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                <span>Book Demo</span>
              )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#a89456] to-[#a89456] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDemoModal;
