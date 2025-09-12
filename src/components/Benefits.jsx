
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RevealAnimation from './RevealAnimation';
import { 
  CurrencyDollarIcon, 
  FaceSmileIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  ArrowTrendingUpIcon,
  LockClosedIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ChartPieIcon,
  RocketLaunchIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

const Benefits = () => {
  const benefits = [
    {
      title: "Reduce Administrative Costs",
      description: "Automate routine HR tasks and reduce manual paperwork by up to 80%. Streamline processes and eliminate redundant workflows.",
      metric: "80% Less Paperwork",
      icon: CurrencyDollarIcon,
      color: "from-emerald-500 to-green-600",
      // image: "/reduce.png", // Commented out as requested
      bgColor: "from-emerald-50 to-green-50",
      accentColor: "#10b981",
      hoverIcon: DocumentTextIcon,
      features: ["Automated workflows", "Digital forms", "Smart scheduling"]
    },
    {
      title: "Improve Employee Satisfaction",
      description: "Self-service portals and transparent processes lead to happier employees. Empower your workforce with easy access to information.",
      metric: "95% Satisfaction",
      icon: FaceSmileIcon,
      color: "from-amber-500 to-orange-600",
      // image: "/satisfaction.png", // Commented out as requested
      bgColor: "from-amber-50 to-orange-50",
      accentColor: "#f59e0b",
      hoverIcon: UserGroupIcon,
      features: ["Self-service portal", "Real-time feedback", "Career development"]
    },
    {
      title: "Ensure Compliance",
      description: "Stay compliant with payroll, tax, and labor regulations through automated and up-to-date processes. Minimize compliance risks with real-time updates.",
      metric: "100% Compliance",
      icon: ShieldCheckIcon,
      color: "from-blue-500 to-indigo-600",
      // image: "/compl.png", // Commented out as requested
      bgColor: "from-blue-50 to-indigo-50",
      accentColor: "#3b82f6",
      hoverIcon: CheckCircleIcon,
      features: ["Auto-updates", "Audit trails", "Risk monitoring"]
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions with comprehensive analytics and reporting. Transform raw data into actionable business insights.",
      metric: "Real-time Insights",
      icon: ChartBarIcon,
      color: "from-purple-500 to-violet-600",
      // image: "/data.png", // Commented out as requested
      bgColor: "from-purple-50 to-violet-50",
      accentColor: "#8b5cf6",
      hoverIcon: ChartPieIcon,
      features: ["Custom reports", "Predictive analytics", "KPI dashboards"]
    },
    {
      title: "Scale Effortlessly",
      description: "Grow your business without worrying about HR system limitations. Our platform adapts to your expanding needs seamlessly.",
      metric: "Unlimited Growth",
      icon: ArrowTrendingUpIcon,
      color: "from-red-500 to-pink-600",
      // image: "/scale.png", // Commented out as requested
      bgColor: "from-red-50 to-pink-50",
      accentColor: "#ef4444",
      hoverIcon: RocketLaunchIcon,
      features: ["Cloud scalability", "Multi-location support", "API integrations"]
    },
    {
      title: "Enhanced Security & Privacy",
      description: "Protect sensitive data with enterprise-level encryption, role-based access, and privacy compliance. Ensure data safety with advanced security measures.",
      metric: "Bank-level Security",
      icon: LockClosedIcon,
      color: "from-cyan-500 to-teal-600",
      // image: "/secure.png", // Commented out as requested
      bgColor: "from-cyan-50 to-teal-50",
      accentColor: "#06b6d4",
      hoverIcon: ShieldExclamationIcon,
      features: ["End-to-end encryption", "Role-based access", "GDPR compliance"]
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bg3.jpg")' }}>
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xs"></div>
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
            const HoverIconComponent = benefit.hoverIcon;
            return (
              <RevealAnimation key={index} delay={index * 100}>
                <div className="group relative h-[320px] w-full">
                  {/* Card Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-102 overflow-hidden">
                    
                    {/* Hover Border Effect - Positioned correctly */}
                    <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-50 transition-all duration-300 pointer-events-none`} 
                         style={{ borderColor: benefit.accentColor }}></div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, ${benefit.accentColor} 0%, transparent 20%), 
                                         radial-gradient(circle at 70% 60%, ${benefit.accentColor} 0%, transparent 25%), 
                                         radial-gradient(circle at 40% 80%, ${benefit.accentColor} 0%, transparent 15%)`,
                      }}></div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col p-6">
                      
                      {/* Header Section */}
                      <div className="flex-shrink-0 mb-4">
                        {/* Icon Container */}
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mb-4`}>
                          <IconComponent className="w-8 h-8 text-white group-hover:hidden transition-all duration-300" />
                          <HoverIconComponent className="w-8 h-8 text-white hidden group-hover:block transition-all duration-300" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight mb-2">
                          {benefit.title}
                        </h3>

                        {/* Metric Badge */}
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full shadow-sm group-hover:shadow-md transition-all duration-300" 
                             style={{ backgroundColor: `${benefit.accentColor}15`, border: `2px solid ${benefit.accentColor}30` }}>
                          <span className="text-xs mr-1">✨</span>
                          <span className="font-bold text-xs" style={{ color: benefit.accentColor }}>{benefit.metric}</span>
                        </div>
                      </div>

                      {/* Description - Default State */}
                      <div className="flex-grow group-hover:hidden transition-all duration-300">
                        <p className="text-gray-700 leading-relaxed text-sm font-medium">
                          {benefit.description}
                        </p>
                      </div>

                      {/* Features List - Hover State */}
                      <div className="flex-grow hidden group-hover:block transition-all duration-300">
                        <h4 className="text-base font-semibold text-gray-800 mb-3" style={{ color: benefit.accentColor }}>
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {benefit.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700 font-medium">
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0`} style={{ backgroundColor: benefit.accentColor }}></div>
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Section - Empty for now */}
                      <div className="flex-shrink-0 mt-4">
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
         
            <div className=" max-w-7xl mx-auto">
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