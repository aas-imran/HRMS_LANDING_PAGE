
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
      description: "Stay compliant with labor laws and regulations with automated updates. Never miss important deadlines or regulatory changes.",
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
      description: "Enterprise-grade security keeps your sensitive HR data protected. Multi-layer encryption and regular security audits ensure peace of mind.",
      metric: "Bank-level Security",
      icon: LockClosedIcon,
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-semibold text-sm">✨ Benefits for Businesses</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Our <span className="text-[#a89456]">HRMS Software</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive HRMS solution delivers measurable results and drives business growth
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#a89456] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  {/* Metric Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
                    <span className="text-2xl mr-2">✨</span>
                    <span className="font-bold text-gray-900">{benefit.metric}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
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