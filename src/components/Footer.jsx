import React from 'react';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';
import RevealAnimation from './RevealAnimation';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Requisition Software', href: '/products/requisition-software' },
      { name: 'Blueprint Software', href: '/products/blueprint-software' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
     

      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      // { name: 'Help Center', href: '#help' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/company/103358844' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/aasintpvtltd?igsh=MWd0MjJnYmppdDRseg==' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61577197466248' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/@AASInternationalOfficial' }
  ];

  return (
    <footer className="text-white py-20" style={{backgroundColor: '#111826'}}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12  ml-15 mb-16">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2 pr-8">
            <RevealAnimation>
              <h3 className="text-4xl font-bold mb-6" style={{color: '#a89456'}}>HRMS</h3>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-lg leading-relaxed mb-8 max-w-md" style={{color: '#9ca3af'}}>
                Streamline your HR operations with our comprehensive human resource management system. 
                Trusted by thousands of businesses worldwide.
              </p>
            </RevealAnimation>
            
            {/* Social Media Icons */}
            <RevealAnimation delay={0.3}>
              <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href} 
                    className="text-2xl hover:transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
                    style={{color: '#a89456'}}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent />
                  </a>
                );
              })}
                </div>
            </RevealAnimation>
          
          </div>
          
          {/* Product Links */}
          <div className="">
            <RevealAnimation delay={0.3}>
              <h4 className="text-xl font-bold mb-6" style={{color: '#a89456'}}>Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      href={link.href}
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            </RevealAnimation>
          </div>
          
          {/* Company Links */}
          <div className="">
            <RevealAnimation delay={0.3}>
              <h4 className="text-xl font-bold mb-6" style={{color: '#a89456'}}>Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      href={link.href}
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            </RevealAnimation>
          </div>
          
          {/* Resources Links */}
          <div className="">
            <RevealAnimation delay={0.3}>
              <h4 className="text-xl font-bold mb-6" style={{color: '#a89456'}}>Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      href={link.href}
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-base hover:text-blue-400 hover:underline transition-colors duration-300 cursor-pointer"
                      style={{color: '#9ca3af'}}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            </RevealAnimation>
          </div>
        </div>
        
        {/* Our Offices Section */}
        <div className="mb-12">
          <RevealAnimation delay={0.4}>
            <h4 className="text-2xl font-bold text-center mb-8" style={{color: '#a89456'}}>Our Offices</h4>
          <div className="grid md:grid-cols-3 gap-0 md:divide-x divide-gray-600">
            <RevealAnimation delay={0.4}>
              <div className="px-6 py-4">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg" style={{backgroundColor: '#a89456'}}>
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-sm" style={{color: '#a89456'}}>REGISTERED OFFICE</h5>
                  <span className="text-xs" style={{color: '#9ca3af'}}>India</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#9ca3af'}}>
                Plot No. 242/3003, Sanra, Tirtol, Nalibar, Jagatsinghapur, Jagatsinghapur, Orissa, India, 754104.
              </p>
            </div>
            </RevealAnimation>
            <div className="px-6 py-4">
              <RevealAnimation delay={0.4}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg" style={{backgroundColor: '#a89456'}}>
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-sm" style={{color: '#a89456'}}>BHUBANESWAR OFFICE</h5>
                  <span className="text-xs" style={{color: '#9ca3af'}}>India</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#9ca3af'}}>
                Plot 52, 2nd floor, Bapuji Nagar, Unit 1 Main St, above State Bank of India BHADRASAHI, Forest Park, Bhubaneswar, Odisha 751009
              </p>
              </RevealAnimation>
            </div>
            <div className="px-6 py-4">
              <RevealAnimation delay={0.4}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg" style={{backgroundColor: '#a89456'}}>
                  <GlobeAltIcon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-sm" style={{color: '#a89456'}}>DUBAI OFFICE</h5>
                  <span className="text-xs" style={{color: '#9ca3af'}}>UAE</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{color: '#9ca3af'}}>
                176 Ras Al Khor Rd - Ras Al Khor Industrial Area - Ras Al Khor Industrial Area 2 - Dubai - United Arab Emirates - 45371
              </p>
              </RevealAnimation>
            </div>
          </div>
          </RevealAnimation>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t pt-8" style={{borderColor: '#374151'}}>
          
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="">
              <p className="text-base" style={{color: '#9ca3af'}}>
                &copy; 2025 HRMS. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <Link href="/privacy-policy" className="hover:text-blue-400 hover:underline text-base transition-colors duration-300 cursor-pointer" style={{color: '#9ca3af'}}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-blue-400 hover:underline text-base transition-colors duration-300 cursor-pointer" style={{color: '#9ca3af'}}>
                Terms of Service
              </Link>
            </div>
          </div>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;