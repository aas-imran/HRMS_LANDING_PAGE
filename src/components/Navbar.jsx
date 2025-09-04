


"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import BookDemoModal from './BookDemoModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Contact', href: '#contact-us', id: 'contact-us' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="w-full">
          <div className="bg-opacity-5 backdrop-blur-[120px]  border-opacity-20 shadow-md relative overflow-hidden w-full">
            {/* Enhanced Glass morphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20 relative z-10">
              {/* Left Side Buttons - Login and Book Demo */}
              {/* Left Side Logo */}
              <div className="flex items-center flex-shrink-0">
                <button 
                  onClick={() => handleSmoothScroll('hero')}
                  className="text-4xl font-bold cursor-pointer transition-all duration-300 hover:scale-105"
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
                        className="font-medium transition-all duration-300 relative group"
                        style={{color: '#111826'}}
                      >
                        {item.name}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#a89456'}}></span>
                      </button>
                    </li>
                  ))}
                  <li>
                    <Link href="/pricing" className="font-medium transition-all duration-300 relative group" style={{color: '#111826'}}>
                      Pricing
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{backgroundColor: '#a89456'}}></span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Right Side Logo */}
            

               <div className="flex items-center space-x-4">
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
                  <span className="relative z-10 flex items-center">
                    Book Demo
                    <span className="ml-2 flex space-x-1">
                      <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                      <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                      <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a89456] to-[#a89456] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                </button>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-700 hover:text-[#a89456] transition-colors duration-300 p-2"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
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
                Pricing
              </Link>
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