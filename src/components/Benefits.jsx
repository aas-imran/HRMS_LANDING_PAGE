
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      color: "bg-emerald-500",
      image: "/reduce.png",
      bgColor: "#f0fdf4",
      accentColor: "#10b981"
    },
    {
      title: "Improve Employee Satisfaction",
      description: "Self-service portals and transparent processes lead to happier employees. Empower your workforce with easy access to information.",
      metric: "95% Satisfaction",
      icon: FaceSmileIcon,
      color: "bg-amber-500",
      image: "/satisfaction.png",
      bgColor: "#fffbeb",
      accentColor: "#f59e0b"
    },
    {
      title: "Ensure Compliance",
      description: "Stay compliant with payroll, tax, and labor regulations through automated and up-to-date processes. Minimize compliance risks with real-time updates.",
      metric: "100% Compliance",
      icon: ShieldCheckIcon,
      color: "bg-blue-500",
      image: "/compl.png",
      bgColor: "#eff6ff",
      accentColor: "#3b82f6"
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and reporting. Transform raw data into actionable business insights.",
      metric: "Real-time Insights",
      icon: ChartBarIcon,
      color: "bg-purple-500",
      image: "/data.png",
      bgColor: "#f5f3ff",
      accentColor: "#8b5cf6"
    },
    {
      title: "Scale Effortlessly",
      description: "Grow your business without worrying about HR system limitations. Our platform adapts to your expanding needs seamlessly.",
      metric: "Unlimited Growth",
      icon: ArrowTrendingUpIcon,
      color: "bg-red-500",
      image: "/scale.png",
      bgColor: "#fef2f2",
      accentColor: "#ef4444"
    },
    {
      title: "Enhanced Security & Privacy",
      description: "Protect sensitive data with enterprise-level encryption, role-based access, and privacy compliance. Ensure data safety with advanced security measures.",
      metric: "Bank-level Security",
      icon: LockClosedIcon,
      color: "bg-cyan-500",
      image: "/secure.png",
      bgColor: "#ecfeff",
      accentColor: "#06b6d4"
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
                  className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 min-h-[400px] w-full"
                  style={{
                    background: `linear-gradient(135deg, white, #f9fafb, #f3f4f6, white)`,
                    backgroundSize: '400% 400%',
                    animation: 'gradient 15s ease infinite'
                  }}
                >
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(200, 200, 200, 0.4) 0%, transparent 8%), 
                                     radial-gradient(circle at 70% 60%, rgba(200, 200, 200, 0.4) 0%, transparent 12%), 
                                     radial-gradient(circle at 40% 80%, rgba(200, 200, 200, 0.4) 0%, transparent 10%), 
                                     radial-gradient(circle at 80% 10%, rgba(200, 200, 200, 0.4) 0%, transparent 8%)`,
                  }}></div>
                  
                  <div className="p-8 relative z-10">
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 leading-tight" style={{ color: benefit.accentColor }}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-800 mb-6 leading-relaxed font-medium">
                        {benefit.description}
                      </p>
                      
                      {/* Metric Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-full shadow-sm" style={{ backgroundColor: `${benefit.accentColor}20`, border: `1px solid ${benefit.accentColor}40` }}>
                        <span className="text-sm mr-2">✨</span>
                        <span className="font-bold text-sm" style={{ color: benefit.accentColor }}>{benefit.metric}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="h-48 relative mt-auto">
                    <Image 
                      src={benefit.image} 
                      alt={benefit.title}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="p-4"
                    />
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