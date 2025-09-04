import React from 'react';
import {
  BoltIcon,
  BanknotesIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Section */}
        <div className="bg-[#f6f8fc] p-12 rounded-3xl border border-gray-100 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">
         ⚡ Powerful Performance Metrics
            </h3>
            <p className="text-[#a89456] text-lg max-w-2xl mx-auto font-medium">
              Experience the revolutionary transformation through our interconnected ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10x", label: "Faster Processing", icon: BoltIcon, color: "#a89456" },
              { value: "50%", label: "Cost Reduction", icon: BanknotesIcon, color: "#a89456" },
              { value: "99.9%", label: "Uptime Guarantee", icon: ShieldCheckIcon, color: "#a89456" },
              { value: "24/7", label: "Real-time Support", icon: ClockIcon, color: "#a89456" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200 relative overflow-hidden shadow-lg">
                    {/* Subtle background accent */}
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{
                        background: `radial-gradient(circle, ${stat.color}40 0%, transparent 70%)`
                      }}
                    ></div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 bg-[#a89456] rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                      <div className="text-[#a89456] text-sm font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;