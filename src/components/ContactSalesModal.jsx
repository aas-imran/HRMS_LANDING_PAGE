import React, { useState } from 'react';

const ContactSalesModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companySize: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact sales form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md transition-all duration-300"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-8 transform transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2" style={{color: '#111826'}}>
              Contact Sales
            </h3>
            <p className="text-gray-600">
              Fill out the form below and our team will get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={{color: '#4B5563'}}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-transparent text-gray-900"
                // style={{color: '#111827'}}
                defaultValue=""
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                style={{color: '#4B5563'}}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-transparent text-gray-900"
                // style={{color: '#111827'}}
              />
            </div>

            <div>
              <select
                name="companySize"
                value={formData.companySize}
                 style={{color: '#4B5563'}}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a89456] focus:border-transparent"
              >
                <option value="" disabled style={{color: '#111827'}}>Select Company Size</option>
                <option value="1-10" style={{color: '#111827'}}>1-10 employees</option>
                <option value="11-50" style={{color: '#111827'}}>11-50 employees</option>
                <option value="51-200" style={{color: '#111827'}}>51-200 employees</option>
                <option value="201-500" style={{color: '#111827'}}>201-500 employees</option>
                <option value="501+" style={{color: '#111827'}}>501+ employees</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#a89456] text-white rounded-xl font-semibold hover:bg-[#97855d] transition-all duration-300 transform hover:scale-[1.02]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSalesModal;