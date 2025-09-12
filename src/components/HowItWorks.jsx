import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import RevealAnimation from './RevealAnimation';

const HowItWorks = () => {
  // No need for mobile detection since we're using a fixed order

  const steps = [
    {
      step: "01",
      title: "Sign Up & Setup",
      description: "Create your account and configure your organization settings in minutes with our intuitive onboarding process.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#52a9ff54"/>
          <path d="M32 8L40 16H24L32 8Z" fill="#1e40af"/>
          <rect x="20" y="16" width="24" height="32" rx="2" fill="#1e40af" fillOpacity="0.2"/>
          <circle cx="32" cy="32" r="8" fill="#1e40af"/>
          <path d="M28 32L30 34L36 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#52a9ff54"
    },
    {
      step: "02",
      title: "Add Employee Data",
      description: "Onboard candidate through guided forms with auto employee Id generation. ",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#10b98470"/>
          <rect x="16" y="12" width="32" height="40" rx="4" fill="#047857" fillOpacity="0.2"/>
          <rect x="20" y="20" width="24" height="2" fill="#047857"/>
          <rect x="20" y="26" width="20" height="2" fill="#047857"/>
          <rect x="20" y="32" width="16" height="2" fill="#047857"/>
          <circle cx="24" cy="42" r="3" fill="#047857"/>
          <rect x="30" y="40" width="12" height="2" fill="#047857"/>
          <rect x="30" y="44" width="8" height="2" fill="#047857"/>
        </svg>
      ),
      color: "#10b98470"
    },
    {
      step: "03",
 
         title: "Employee Self-Service",
      description: "Enable employees to manage their profiles, request leaves, view payslips, and access company resources independently.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#ef444457"/>
          <circle cx="32" cy="24" r="8" fill="#dc2626" fillOpacity="0.3"/>
          <path d="M20 48C20 40 25.6 34 32 34C38.4 34 44 40 44 48" fill="#dc2626" fillOpacity="0.3"/>
          <circle cx="32" cy="24" r="4" fill="#dc2626"/>
          <rect x="28" y="40" width="8" height="8" rx="2" fill="#dc2626"/>
          <path d="M30 44L32 46L36 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#ef444457"
    },
    {
      step: "04",
        title: "Performance Tracking",
      description: "Monitor employee performance, set goals, conduct reviews, and track KPIs with comprehensive analytics dashboards.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#06b6d46b"/>
          <rect x="16" y="20" width="32" height="24" rx="2" fill="#0891b2" fillOpacity="0.2"/>
          <path d="M20 36L26 30L30 34L40 24" stroke="#0891b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="26" cy="30" r="2" fill="#0891b2"/>
          <circle cx="30" cy="34" r="2" fill="#0891b2"/>
          <circle cx="40" cy="24" r="2" fill="#0891b2"/>
          <rect x="44" y="16" width="4" height="8" fill="#0891b2"/>
          <rect x="44" y="28" width="4" height="16" fill="#0891b2"/>
        </svg>
      ),
      color: "#06b6d46b"
     
    },
     {
      step: "05",
            title: "Payroll & Compliance",
      description: "Automate payroll processing, tax calculations, and ensure compliance with labor laws and regulatory requirements.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#84cc1670"/>
          <rect x="20" y="16" width="24" height="32" rx="4" fill="#65a30d" fillOpacity="0.2"/>
          <circle cx="32" cy="28" r="6" fill="#65a30d" fillOpacity="0.3"/>
          <path d="M29 28L31 30L35 26" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="24" y="36" width="16" height="2" fill="#65a30d"/>
          <rect x="24" y="40" width="12" height="2" fill="#65a30d"/>
          <circle cx="32" cy="28" r="3" fill="#65a30d"/>
        </svg>
      ),
      color: "#84cc1670"
   
    },
      {
      step: "06",
      
     title: "Configure Workflows",
      description: "Set up automated approval processes, leave policies, and payroll configurations tailored to your business needs.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#8b5cf65e"/>
          <circle cx="20" cy="20" r="6" fill="#7c3aed" fillOpacity="0.3"/>
          <circle cx="44" cy="20" r="6" fill="#7c3aed" fillOpacity="0.3"/>
          <circle cx="32" cy="44" r="6" fill="#7c3aed" fillOpacity="0.3"/>
          <path d="M26 20L38 20" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M20 26L32 38" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M44 26L32 38" stroke="#7c3aed" strokeWidth="2"/>
          <circle cx="20" cy="20" r="3" fill="#7c3aed"/>
          <circle cx="44" cy="20" r="3" fill="#7c3aed"/>
          <circle cx="32" cy="44" r="3" fill="#7c3aed"/>
        </svg>
      ),
      color: "#8b5cf65e"
    
    },

      {
      step: "07",
            title: "Go Live & Manage",
      description: "Launch your HR operations with confidence and manage your workforce through intelligent automation and analytics.",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#f59e0b70"/>
          <path d="M32 8L36 20L48 20L39 29L43 41L32 35L21 41L25 29L16 20L28 20L32 8Z" fill="#d97706" fillOpacity="0.3"/>
          <circle cx="32" cy="32" r="8" fill="#d97706"/>
          <path d="M28 32L30 34L36 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#f59e0b70"

    },
   
 
         {
      step: "08",
       title: "Full HR Ecosystem",
      description: " Manage everything from core HR processes to notices, events and grievance reports within one unified platform. ",
      svgIcon: (
        <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" fill="#a89456a6"/>
          <circle cx="32" cy="32" r="20" fill="#92400e" fillOpacity="0.2"/>
          <circle cx="32" cy="20" r="4" fill="#92400e"/>
          <circle cx="44" cy="32" r="4" fill="#92400e"/>
          <circle cx="32" cy="44" r="4" fill="#92400e"/>
          <circle cx="20" cy="32" r="4" fill="#92400e"/>
          <circle cx="38" cy="26" r="3" fill="#92400e" fillOpacity="0.7"/>
          <circle cx="38" cy="38" r="3" fill="#92400e" fillOpacity="0.7"/>
          <circle cx="26" cy="38" r="3" fill="#92400e" fillOpacity="0.7"/>
          <circle cx="26" cy="26" r="3" fill="#92400e" fillOpacity="0.7"/>
          <circle cx="32" cy="32" r="6" fill="#92400e"/>
          <path d="M29 32L31 34L35 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#a89456a6"
    },
   
  
   
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-x-hidden w-full">
      {/* Enhanced gradient background with visible pattern */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-[#ffffff]"></div>
        
        {/* Enhanced square bracket pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #cbd5e1 2px, transparent 2px),
              linear-gradient(-45deg, #cbd5e1 2px, transparent 2px),
              linear-gradient(45deg, #e2e8f0 1px, transparent 1px),
              linear-gradient(-45deg, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
          }}
        ></div>
        
        {/* Additional diagonal pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              #f1f5f9 10px,
              #f1f5f9 11px
            )`
          }}
        ></div>
        
        {/* Enhanced geometric pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-slate-300 opacity-40 rotate-45"></div>
          <div className="absolute top-32 right-20 w-12 h-12 border-2 border-slate-300 opacity-30 rotate-12"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 border-2 border-slate-300 opacity-35 -rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 border-2 border-slate-300 opacity-40 rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-slate-300 opacity-30 rotate-45"></div>
          <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-slate-300 opacity-35 -rotate-12"></div>
          <div className="absolute top-40 left-1/2 w-6 h-6 border-2 border-slate-300 opacity-25 rotate-45"></div>
          <div className="absolute bottom-40 right-1/3 w-18 h-18 border-2 border-slate-300 opacity-30 rotate-12"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[3] w-full">
        {/* Header Section with Lottie */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Header Content */}
          <div className="flex flex-col items-center">
            <RevealAnimation>
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
                  <span className="text-blue-600 font-semibold text-sm">COMPLETE PROCESS</span>
                </div>
                <h2 className="text-5xl font-bold mb-6" style={{color: '#111826'}}>
                  How It <span style={{color: '#a89456'}}>Works</span>
                </h2>
                <p className="text-xl max-w-2xl leading-relaxed mx-auto" style={{color: '#6b7291'}}>
                  Transform your HR operations in 8 comprehensive steps. From setup to complete ecosystem management.
                </p>
              </div>
            </RevealAnimation>
          </div>
          
          {/* Right side - Lottie Animation */}
          {/* <div className="flex-shrink-0 ml-8">
            <div className="w-80 h-80">
              <DotLottieReact
                src="https://lottie.host/f869e15a-06d5-4be8-9b31-c28167cd8113/QlcT28Ro9M.lottie"
                loop
                autoplay
              />
            </div>
          </div> */}
        </div>
        </div>

        {/* Process Flow */}
 {/* Process Flow */}
<div className="max-w-7xl mx-auto px-4 relative">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-[3]">
    {[...steps.slice(0, 4), steps[4], steps[5], steps[6], steps[7]].map((step, index) => (
        <div key={step.step} className="group relative">
          {/* Step Card - Fixed Height */}
          <div 
            className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border  relative h-80 flex flex-col"
            style={{
              backgroundColor: step.color,
              backdropFilter: 'blur(10px)'
            }}
          >
            
            {/* Step Number Badge */}
            <div 
              className="absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl z-30"
              style={{ 
                backgroundColor: step.color,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            >
              {step.step}
            </div>
            
            {/* Icon */}
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              {step.svgIcon}
            </div>
            
            {/* Content - Flexible */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#111826' }}>
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm flex-1">
                {step.description}
              </p>
            </div>
            
            {/* Progress Indicator - Fixed at bottom */}
            <div className="mt-6 flex items-center flex-shrink-0">
              <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full rounded-full transition-all duration-1500 ease-out relative"
                  style={{
                    backgroundColor: '#ffffff',
                    width: '100%',
                    transform: 'translateX(-100%)',
                    animation: `slideInProgress 1.5s ease-out ${index * 0.3}s forwards`,
                    boxShadow: '0 2px 8px rgba(255,255,255,0.3)'
                  }}
                >
                  {/* Animated shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 rounded-full"
                    style={{
                      animation: `shimmer 2s ease-in-out ${index * 0.3 + 0.5}s infinite`
                    }}
                  ></div>
                </div>
              </div>
              <span className="ml-3 text-sm font-bold text-gray-700">
                Step {step.step}
              </span>
            </div>
          </div>
        </div>
     
    ))}
  </div>
</div>
 

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInProgress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;