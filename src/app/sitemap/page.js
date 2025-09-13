'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SitemapPage = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const websiteStructure = {
    mainSections: [
      {
        id: 'home',
        title: 'Home',
        path: '/',
        description: 'Main landing page with company overview, key features, and product highlights',
        
      },
      {
        id: 'about',
        title: 'About Us',
        path: '/about',
        description: 'Learn about our company, mission, vision, and team',
     
      },
      {
        id: 'features',
        title: 'Features',
        path: '/features',
        description: 'Explore all HRMS features and capabilities',
        
      },
      {
        id: 'products',
        title: 'Products',
        path: '/products',
        description: 'Our software solutions and product offerings',
       
        subpages: [
          {
            title: 'Blueprint Software',
            path: '/products/blueprint-software',
            description: 'Comprehensive HRMS blueprint and planning tool'
          },
          {
            title: 'Requisition Software',
            path: '/products/requisition-software',
            description: 'Employee requisition and recruitment management system'
          }
        ]
      },
      {
        id: 'solution',
        title: 'Solution',
        path: '/solution',
        description: 'View our solutions for your business',
      
      },
      {
        id: 'case-studies',
        title: 'Case Studies',
        path: '/case-studies',
        description: 'Read success stories and client implementations',
      
      },
      {
        id: 'blog',
        title: 'Blog',
        path: '/blog',
        description: 'Latest articles, insights, and HR industry news',
       
        subpages: [
          {
            title: 'HR Challenges & HRMS Solutions',
            path: '/blog/1',
            description: 'Top challenges HR managers face and how HRMS solves them'
          },
          {
            title: 'Employee Benefits & Payroll Management',
            path: '/blog/2',
            description: 'Why automation matters in payroll and benefits management'
          },
          {
            title: 'Mental Health in HR Strategies',
            path: '/blog/3',
            description: 'Why mental health should be a priority in HR strategies'
          }
        ]
      },
      {
        id: 'contact',
        title: 'Contact',
        path: '/contact',
        description: 'Get in touch with our team for inquiries and support',
     
      }
    ],
    legalPages: [
      {
        title: 'Privacy Policy',
        path: '/privacy-policy',
        description: 'Our privacy policy and data protection practices'
      },
      {
        title: 'Terms of Service',
        path: '/terms-of-service',
        description: 'Terms and conditions for using our services'
      }
    ]
  };

  const renderPageItem = (page, level = 0) => (
    <div key={page.id || page.title} className="mb-6">
      <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center space-x-4">
          <span className="text-2xl">{page.icon}</span>
          <div className="flex items-center space-x-3">
            <Link 
              href={page.path}
              className="text-[#111826] hover:text-[#a89456] transition-colors duration-200 font-semibold text-lg"
            >
              {page.title}
            </Link>
            <span className="text-sm text-gray-500">({page.path})</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link 
            href={page.path}
            className="text-[#a89456] hover:text-[#111826] transition-colors duration-200 p-1"
            title="Visit Page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          {page.subpages && (
            <button
              onClick={() => toggleSection(page.id || page.title)}
              className="text-[#a89456] hover:text-[#111826] transition-colors duration-200 p-1"
              title="Expand/Collapse"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${expandedSections[page.id || page.title] ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      <p className="text-sm text-gray-600 ml-12 mb-2">{page.description}</p>

      {page.subpages && expandedSections[page.id || page.title] && (
        <div className="ml-12 border-l-2 border-gray-200 pl-4 mt-2">
          <div className="space-y-2">
            {page.subpages.map((subpage, idx) => (
              <div key={idx} className="py-2 px-3 hover:bg-gray-50 rounded transition-colors duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">→</span>
                    <Link 
                      href={subpage.path}
                      className="text-[#111826] hover:text-[#a89456] transition-colors duration-200 font-medium"
                    >
                      {subpage.title}
                    </Link>
                    <span className="text-xs text-gray-500">({subpage.path})</span>
                  </div>
                  <Link 
                    href={subpage.path}
                    className="text-[#a89456] hover:text-[#111826] transition-colors duration-200"
                    title="Visit Page"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
                <p className="text-xs text-gray-600 mt-1 ml-4">{subpage.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#111826] mb-4">
            Website <span className="text-[#a89456]">Sitemap</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Navigate through our complete website structure. Click on any page to visit it directly.
          </p>
        </div>

        {/* Main Content - Single A4 Card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8" style={{ width: '210mm', minHeight: '297mm', maxWidth: '100%' }}>
            {/* Main Website Sections */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#111826] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#a89456]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Main Website Sections
              </h2>
              <div className="space-y-2">
                {websiteStructure.mainSections.map(page => renderPageItem(page))}
              </div>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-2xl font-bold text-[#111826] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#a89456]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Legal & Policy Pages
              </h2>
              <div className="space-y-2">
                {websiteStructure.legalPages.map(page => (
                  <div key={page.title} className="mb-4">
                    <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">📄</span>
                        <div className="flex items-center space-x-3">
                          <Link 
                            href={page.path}
                            className="text-[#111826] hover:text-[#a89456] transition-colors duration-200 font-semibold text-lg"
                          >
                            {page.title}
                          </Link>
                          <span className="text-sm text-gray-500">({page.path})</span>
                        </div>
                      </div>
                      <Link 
                        href={page.path}
                        className="text-[#a89456] hover:text-[#111826] transition-colors duration-200 p-1"
                        title="Visit Page"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600 ml-12">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#a89456] mb-2">
              {websiteStructure.mainSections.length + websiteStructure.legalPages.length}
            </div>
            <div className="text-gray-600">Main Pages</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#a89456] mb-2">
              {websiteStructure.mainSections.filter(section => section.subpages).reduce((total, section) => total + section.subpages.length, 0)}
            </div>
            <div className="text-gray-600">Sub Pages</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#a89456] mb-2">3</div>
            <div className="text-gray-600">Blog Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-[#a89456] mb-2">2</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
        </div> */}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#a89456] text-white rounded-lg hover:bg-[#111826] transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
