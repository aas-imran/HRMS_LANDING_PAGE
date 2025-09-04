"use client"
import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    industryType: '',
    contactPersonName: '',
    contactEmail: '',
    contactMobile: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
    // Reset form
    setFormData({
      clientName: '',
      industryType: '',
      contactPersonName: '',
      contactEmail: '',
      contactMobile: '',
      website: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-[#111826]">
            Book <span className="text-[#a89456]">Demo</span>
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Client Name */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Client Name *
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter client name"
            />
          </div>
          
          {/* Industry Type */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Industry Type *
            </label>
            <select
              name="industryType"
              value={formData.industryType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826]"
            >
              <option value="" className="text-gray-500">Select industry</option>
              <option value="Technology" className="text-[#111826]">Technology</option>
              <option value="Healthcare" className="text-[#111826]">Healthcare</option>
              <option value="Finance" className="text-[#111826]">Finance</option>
              <option value="Manufacturing" className="text-[#111826]">Manufacturing</option>
              <option value="Retail" className="text-[#111826]">Retail</option>
              <option value="Education" className="text-[#111826]">Education</option>
              <option value="Other" className="text-[#111826]">Other</option>
            </select>
          </div>
          
          {/* Contact Person Name */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Contact Person Name *
            </label>
            <input
              type="text"
              name="contactPersonName"
              value={formData.contactPersonName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter contact person name"
            />
          </div>
          
          {/* Contact Email */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Contact Email *
            </label>
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter email address"
            />
          </div>
          
          {/* Contact Mobile */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Contact Mobile No *
            </label>
            <input
              type="tel"
              name="contactMobile"
              value={formData.contactMobile}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter mobile number"
            />
          </div>
          
          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-[#111826] mb-2">
              Website (Optional)
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#a89456] focus:border-transparent outline-none transition-all duration-200 text-[#111826] placeholder:text-gray-500"
              placeholder="Enter website URL"
            />
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#a89456] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Book Demo
                <span className="ml-2 flex space-x-1">
                  <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                  <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                  <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                </span>
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
