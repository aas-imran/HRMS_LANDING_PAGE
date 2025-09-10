
import React from 'react';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  FaceSmileIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  ArrowTrendingUpIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';
import RevealAnimation from './RevealAnimation';

const Benefits = () => {
  const benefits = [
    {
      title: "Reduce Administrative Costs",
      description: "Automate routine HR tasks and reduce manual paperwork by up to 80%. Streamline processes and eliminate redundant workflows.",
      metric: "80% Less Paperwork",
      icon: CurrencyDollarIcon,
      color: "bg-emerald-500"
    },
    {
      title: "Improve Employee Satisfaction",
      description: "Self-service portals and transparent processes lead to happier employees. Empower your workforce with easy access to information.",
      metric: "95% Satisfaction",
      icon: FaceSmileIcon,
      color: "bg-amber-500"
    },
    {
      title: "Ensure Compliance",
      description: "Stay compliant with payroll, tax, and labor regulations through automated and up-to-date processes. Minimize compliance risks with real-time updates.",
      metric: "100% Compliance",
      icon: ShieldCheckIcon,
      color: "bg-blue-500"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and reporting. Transform raw data into actionable business insights.",
      metric: "Real-time Insights",
      icon: ChartBarIcon,
      color: "bg-purple-500"
    },
    {
      title: "Scale Effortlessly",
      description: "Grow your business without worrying about HR system limitations. Our platform adapts to your expanding needs seamlessly.",
      metric: "Unlimited Growth",
      icon: ArrowTrendingUpIcon,
      color: "bg-red-500"
    },
    {
      title: "Enhanced Security & Privacy",
      description: "Protect sensitive data with enterprise-level encryption, role-based access, and privacy compliance. Ensure data safety with advanced security measures.",
      metric: "Bank-level Security",
      icon: LockClosedIcon,
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bg3.jpg")' }}>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xs"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
         
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-semibold text-sm">✨ Benefits for Businesses</span>
            </div>
        
         
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with Our <span className="text-[#a89456]">HRMS Software</span>
            </h2>
         
      
            <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
              Discover how our comprehensive HRMS solution delivers measurable results and drives business growth
            </p>
          
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
             
                <div
                  className="group relative rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 min-h-[400px] w-full overflow-hidden"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #ff6b9d 0%, #ff8a80 50%, #ffab40 100%)' :
                               index === 1 ? 'linear-gradient(135deg, #ffd54f 0%, #ffb74d 50%, #ff8a65 100%)' :
                               index === 2 ? 'linear-gradient(135deg, #42a5f5 0%, #26c6da 50%, #66bb6a 100%)' :
                               index === 3 ? 'linear-gradient(135deg, #ab47bc 0%, #7e57c2 50%, #5c6bc0 100%)' :
                               index === 4 ? 'linear-gradient(135deg, #ef5350 0%, #ec407a 50%, #e91e63 100%)' :
                               'linear-gradient(135deg, #26c6da 0%, #00acc1 50%, #00838f 100%)'
                  }}
                >
                  {/* Geometric Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full"></div>
                    <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/15 rounded-full"></div>
                    <div className="absolute bottom-16 left-16 w-12 h-12 bg-white/10 rounded-lg rotate-12"></div>
                  </div>
                {/* Number Badge */}
                 <div className="absolute -top-2 -left-2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/40">
                   {index + 1}
                 </div>
 
                 {/* Icon */}
                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/30 relative z-10">
                   <IconComponent className="w-8 h-8 text-white" />
                 </div>
 
                 {/* Content */}
                 <div className="relative z-10">
                   <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                     {benefit.title}
                   </h3>
                   <p className="text-white/90 mb-6 leading-relaxed">
                     {benefit.description}
                   </p>
                   
                   {/* Metric Badge */}
                   <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                     <span className="text-2xl mr-2">✨</span>
                     <span className="font-bold text-white">{benefit.metric}</span>
                   </div>
                 </div>
               </div>
             
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
         
            <div className="bg-gradient-to-r from-[#a89456]/60 to-[#a89456] rounded-3xl p-8 md:p-12 shadow-2xl border max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience These Benefits?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses that have transformed their HR operations with our comprehensive HRMS solution.
            </p>
            <Link href="/pricing">
              <button 
                className="bg-[#111826] hover:bg-[#a89456] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 cursor-pointer">
                Get Started Today
              </button>
            </Link>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Benefits;