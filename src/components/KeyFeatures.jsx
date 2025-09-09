import React from 'react';
import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  ChartBarIcon, 
  UserPlusIcon, 
  PresentationChartLineIcon 
} from '@heroicons/react/24/outline';
import RevealAnimation from './RevealAnimation';

const KeyFeatures = () => {
  const features = [
    {
      title: "Employee Management",
      description: "Centralized employee database with complete profiles, documents, and history tracking.",
      icon: UsersIcon,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Payroll Processing",
      description: "Automated payroll calculations, tax deductions, and salary disbursements.",
      icon: CurrencyDollarIcon,
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with biometric integration and leave management.",
      icon: ClockIcon,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Performance Management",
      description: "Goal setting, performance reviews, and employee development tracking.",
      icon: ChartBarIcon,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Recruitment",
      description: "End-to-end recruitment process from job posting to candidate onboarding.",
      icon: UserPlusIcon,
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Analytics & Reports",
      description: "Comprehensive HR analytics and customizable reports for data-driven decisions.",
      icon: PresentationChartLineIcon,
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-5" style={{backgroundColor: '#a89456'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full opacity-5" style={{backgroundColor: '#111826'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <RevealAnimation>
            <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full mb-6">
              <span className="font-semibold text-sm" style={{color: '#a89456'}}>KEY FEATURES</span>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-5xl font-bold mb-6" style={{color: '#111826'}}>
              Powerful <span style={{color: '#a89456'}}>Features</span> for Modern HR
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: '#6b7280'}}>
              Everything you need to manage your workforce efficiently with cutting-edge technology
            </p>
          </RevealAnimation>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <RevealAnimation delay={index * 0.1}>
                <div 
                  key={index} 
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden min-h-[280px] min-w-[300px]"
                >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-opacity-90 transition-colors duration-300" style={{color: '#111826'}}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-20 rounded-2xl transition-all duration-300" style={{borderColor: '#a89456'}}></div>
              </div>
              </RevealAnimation>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <RevealAnimation delay={0.2}>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-50 rounded-full">
            <span className="text-gray-600">Want to see more features?</span>
            <a href="/features" className="font-semibold transition-colors duration-300 hover:text-opacity-80" style={{color: '#a89456'}}>
              Explore All Features →
            </a>
          </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;