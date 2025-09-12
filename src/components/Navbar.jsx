


"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { PhoneIcon } from '@heroicons/react/24/outline';
import BookDemoModal from './BookDemoModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Enhanced navigation function that handles both page navigation and section scrolling
  const handleNavigation = (item) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    if (item.href.startsWith('/')) {
      // It's a page navigation
      router.push(item.href);
    } else {
      // It's a section scroll
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        router.push('/' + item.href);
      } else {
        // We're already on the home page, use the href directly
        window.location.href = item.href;
      }
    }
  };

  // Enhanced smooth scroll function for hero section
  const handleSmoothScroll = (targetId) => {
    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push('/#' + targetId);
    } else {
      // We're already on the home page, use the href directly
      window.location.href = '#' + targetId;
    }
  };

  // Navigation items
  const navItems = [
    { name: 'Features', href: '/features', id: 'features' },
    // { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  // Dropdown menu items
  const dropdownItems = [
    { name: 'Blog', href: '/blog', id: 'blog' },
    { name: 'Case Studies', href: '/case-studies', id: 'case-studies' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="w-full">
          <div className="bg-opacity-5 backdrop-blur-[120px] border-opacity-20 shadow-md relative w-full">
            {/* Enhanced Glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20 relative z-10">
                {/* Left Side Logo */}
                <div className="flex items-center flex-shrink-0">
                  <button 
                    onClick={() => handleSmoothScroll('hero')}
                    className="text-2xl md:text-4xl font-bold cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{color: '#a89456'}}
                  >
                    HRMS
                  </button>
                </div>
                
                {/* Centered Menu Items */}
                <div className="flex-1 flex justify-center">
                  <ul className="hidden md:flex space-x-8 items-center">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigation(item)}
                          className="font-medium transition-all duration-300 relative group cursor-pointer"
                          style={{color: '#111826'}}
                        >
                          {item.name}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#a89456'}}></span>
                        </button>
                      </li>
                    ))}
                    <li>
                      <Link href="/pricing" className="font-medium transition-all duration-300 relative group cursor-pointer" style={{color: '#111826'}}>
                        Solution
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#a89456'}}></span>
                      </Link>
                    </li>
                    <li className="relative group">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        className={`font-medium transition-all duration-300 relative cursor-pointer flex items-center space-x-1 ${isDropdownOpen ? 'text-[#a89456]' : ''}`}
                        style={{color: isDropdownOpen ? '#a89456' : '#111826'}}
                      >
                        <span>Resources</span>
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${isDropdownOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{backgroundColor: '#a89456'}}></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-56 bg-white/98 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl z-[9998] transition-all duration-300 transform ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <div className="py-3">
                          {dropdownItems.map((item, index) => (
                            <Link
                              key={item.id}
                              href={item.href}
                              className="group/item block px-5 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#a89456]/10 hover:to-[#a89456]/5 hover:text-[#a89456] transition-all duration-300 font-medium relative overflow-hidden"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <span className="relative z-10 flex items-center justify-between">
                                {item.name}
                                <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                              <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-[#a89456] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left"></span>
                              {index < dropdownItems.length - 1 && (
                                <div className="absolute bottom-0 left-5 right-5 h-px bg-gray-100"></div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Right Side Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  {/* Login Button */}
                  <a 
                    href="https://hr.aasint.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border-2 border-[#a89456] text-[#a89456] h-12 px-6 rounded-[30px] hover:bg-[#a89456] hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group flex items-center justify-center min-w-[100px] font-medium"
                  >
                    <span className="relative z-10">Login</span>
                    <div className="absolute inset-0 bg-[#a89456] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  {/* Book Demo Button */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#a89456] text-white h-12 px-6 rounded-[30px] hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group flex items-center justify-center min-w-[140px] font-medium"
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <PhoneIcon className="w-5 h-5" />
                      <span>Book Demo</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a89456] to-[#a89456] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Mobile Buttons */}
                <div className="md:hidden flex items-center space-x-2">
                  <a 
                    href="https://hr.aasint.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-[#a89456] text-[#a89456] h-8 px-3 rounded-full hover:bg-[#a89456] hover:text-white transition-all duration-300 flex items-center justify-center text-sm font-medium"
                  >
                    Login
                  </a>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#a89456] text-white h-8 px-3 rounded-full hover:bg-[#a89456]/90 transition-all duration-300 flex items-center justify-center space-x-1 text-sm font-medium"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>

                {/* Modern Mobile menu button */}
                <div className="md:hidden ml-2">
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-[#a89456] transition-colors duration-300 p-2 relative group"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#a89456] rounded-full transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40">
          <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left text-black hover:text-[#a89456] transition-colors duration-300 font-medium text-lg py-2"
                >
                  {item.name}
                </button>
              ))}
              <Link 
                href="/pricing" 
                className="block text-black hover:text-[#a89456] transition-colors duration-300 font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solution
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-500 text-sm font-medium mb-2 px-2">Resources</p>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="block text-black hover:text-[#a89456] transition-colors duration-300 font-medium text-lg py-2 pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <button 
                className="w-full bg-[#a89456] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#a89456]/90 transition-all duration-300 mt-4"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;