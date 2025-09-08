'use client';

import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const TermsOfService = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[21cm] mx-auto mt-10 bg-white p-8 shadow-lg relative">
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Terms of Services</h1>
        
        <div className="prose prose-lg  max-w-none">
          <p className="text-gray-600 mb-6">
            By using our software and services, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              These terms and conditions govern your use of our website and services. By accessing or using our products, you agree to be bound by these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, designs, logos, and other intellectual property used on this site and software are owned by our company and protected by copyright law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Software Usage</h2>
            <p className="text-gray-600">
              You are granted a non-exclusive, non-transferable license to use the software for personal or commercial purposes, in accordance with the terms provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600">
              Our company is not liable for any damages or loss resulting from the use of our software, including but not limited to data loss or service interruptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
            <p className="text-gray-600">
              We are committed to protecting your privacy. Please refer to our Privacy Policy for details on how we handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify or update these terms at any time. Changes will be posted on this page, and your continued use of our services will signify your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns regarding these terms, please contact us through our official support channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;