'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { LenisContext } from '@/components/LenisProvider';
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const PrivacyPolicy = () => {
  const lenis = React.useContext(LenisContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Privacy Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At AAS International PVT. LTD., we are committed to safeguarding your privacy and protecting your personal data. This Privacy Policy explains how we collect, use, process, disclose, and secure the information you provide when using our Human Resource Management System (HRMS) platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It has been prepared in line with the Digital Personal Data Protection Act, 2023 (India) and the Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (UAE). By continuing to use our platform, you acknowledge and consent to the practices described in this document.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Scope of this Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              This Policy applies to all individuals who interact with our HRMS platform, including employees, administrators, HR personnel, and approvers. It covers the personal data processed through our web application, whether collected during onboarding, throughout the employment lifecycle, or through other forms of interaction with the platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Definitions</h2>
            <p className="text-gray-700 leading-relaxed">
              For clarity, certain terms are used throughout this Policy. "Personal Data" refers to any information relating to an identified or identifiable natural person, such as name, contact details, government-issued identification, salary, or employment details. The term "Data Subject" means the individual whose personal data is being processed. The "Data Controller" refers to the employer or organization that determines the purpose and manner of processing such data. As the service provider, AAS International PVT. LTD. acts as the "Data Processor," handling personal data on behalf of the Data Controller.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect and process a variety of information in the course of delivering our services. This includes personal identification details such as your full name, email address, mobile number, date of birth, gender, residential address, and profile photograph.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Employment-related data such as employee ID, job designation, department, salary structure, benefits, and statutory contributions like PF/ESI are also recorded.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To support attendance management, we may collect biometric identifiers, QR-based scans, timestamps, and GPS-based location data where geofencing is enabled.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Financial details including bank account information, tax documentation, and reimbursement claims may also be processed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In addition, system data such as IP addresses, device and browser metadata, login records, and activity logs are collected to maintain platform integrity.
            </p>
          </section>
        </div>
      );
    } else {
      return (
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Lawful Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              We rely on multiple legal bases to process personal data. In certain cases, processing is based on your explicit consent, such as for biometric attendance features. In others, it is necessary for fulfilling contractual obligations with employers or to comply with statutory and regulatory requirements such as tax or labor laws. We may also process data where it is in our legitimate interest to ensure platform security, improve user experience, and prevent fraud. Where processing is based on consent, you may withdraw such consent at any time in accordance with applicable laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Purpose of Data Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data is processed to support essential HR and organizational functions. These include managing the employee lifecycle such as onboarding, promotions, or exits; processing payroll, generating payslips, and ensuring tax compliance; and maintaining accurate attendance, leave, and shift records. The platform further supports performance reviews, task assignments, expense management, document storage, and company-wide policy communication. We also use personal data to send notifications or communications through email, SMS, or in-app alerts, and to maintain compliance with labor and audit requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or trade personal data. However, data may be shared in specific circumstances. Your employer, as the Data Controller, will have access to the data necessary for HR operations. Certain trusted third-party service providers, such as cloud hosting partners or biometric hardware vendors, may also process data under strict confidentiality agreements. We may disclose data when required by government authorities, regulators, or courts of law. In cases where data is transferred across borders, such as between India and the UAE, we ensure adequate safeguards like Standard Contractual Clauses (SCCs) or equivalent protections are in place.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal data may be stored and processed on servers located in India, the UAE, or other jurisdictions where our partners operate. We adhere to the cross-border transfer provisions of both Indian and UAE data protection laws. Where necessary, legally binding agreements and technical safeguards such as encryption are applied. We also provide regional hosting options for organizations that require local data residency.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Data Security Measures</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement robust technical and organizational measures to safeguard personal data. This includes AES-256 encryption for data in transit and at rest, role-based access controls (RBAC), and two-factor authentication (2FA) to prevent unauthorized access. Firewalls, intrusion detection systems, and endpoint monitoring are deployed as part of our defence strategy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We conduct regular backups, vulnerability scans, and penetration tests to maintain resilience. Biometric data, in particular, is stored with strict access limitations. While we take every precaution, no system is completely immune to risk, and users are encouraged to maintain the confidentiality of their login credentials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">User Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              As a user, you are entitled to certain rights under Indian and UAE data protection laws. These include the right to access your personal data, request corrections, withdraw consent, and lodge complaints with relevant authorities. To exercise these rights or raise concerns about data processing, please contact our Data Protection Officer through the designated channels.
            </p>
          </section>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[21cm] mx-auto mt-12 bg-white shadow-lg rounded-lg overflow-hidden relative">
        <div className="absolute top-4 right-4 flex space-x-4">
          <Link href="/" className=" rounded-full hover:bg-gray-100 transition-colors duration-200">
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </Link>
        </div>
        <div className="p-8 sm:p-12" style={{ minHeight: '29.7cm' }}>
          {renderPageContent()}
          
          <div className="mt-8 flex items-center justify-center space-x-4 bg-white rounded-lg shadow-lg px-4 py-2 w-fit mx-auto">
            {currentPage > 1 && (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Previous</span>
              </button>
            )}
            <span className="text-gray-500">Page {currentPage} of {totalPages}</span>
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <span>Next</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;