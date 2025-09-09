import React from 'react';
import { 
  FiSettings, 
  FiUsers, 
  FiGitBranch, 
  FiZap, 
  FiFileText, 
  FiEye, 
  FiMessageCircle 
} from 'react-icons/fi';

const RequisitionSoftware = () => {
  const features = [
    {
      icon: FiSettings,
      title: "Smart Requisition Management",
      description: "Create, track, and manage requisitions effortlessly with a structured workflow that ensures every request moves seamlessly through the right channels."
    },
    {
      icon: FiUsers,
      title: "Role-Based Organogram & Priorities",
      description: "Maintain a clear organizational hierarchy where employees are assigned priorities based on their designation and organizational level, ensuring approvals always follow the correct chain of command."
    },
    {
      icon: FiGitBranch,
      title: "Parent–Child Organization Structure",
      description: "Support for multiple child organizations under a parent organization, with smooth coordination and visibility across all levels."
    },
    {
      icon: FiZap,
      title: "Automated Approval & Escalation",
      description: "Requisitions are automatically escalated in case of inactivity, following predefined priorities—ensuring no request is ever delayed or overlooked."
    },
    {
      icon: FiFileText,
      title: "Orders & Notices Management",
      description: "Easily convert approved requisitions into actionable orders, while creating and circulating notices based on role-specific access and authority."
    },
    {
      icon: FiEye,
      title: "Transparent Task Tracking",
      description: "Get a clean, real-time view of which tasks are assigned to whom, making accountability and progress tracking effortless."
    },
    {
      icon: FiMessageCircle,
      title: "Seamless Collaboration",
      description: "By digitizing internal paperwork, AAS ONE promotes clarity, speed, and efficiency across teams, minimizing delays and miscommunication."
    }
  ];

  return (
    <div className="min-h-screen bg-cover  bg-center bg-no-repeat" style={{backgroundImage: 'url(/bg2.jpg)'}}>
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/20  mt-15 backdrop-blur-[1px]">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-black text-[#111826] mb-4 tracking-tight">
                     <span className="text-[#a89456]">AAS ONE</span>
                  </h1>
                  <div className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-[0.3em] mb-6">
                    Requisition Software
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  AAS ONE is an intelligent requisition and workflow management portal built to streamline approvals, orders, and internal communication across organizations. With a structured organogram, role-based priorities, and automated escalation features, it ensures every requisition flows seamlessly without delays. From creating requisitions and passing orders to circulating notices with role-specific access, AAS ONE provides a clean, transparent, and efficient system that keeps tasks accountable and teams aligned. Designed for parent and child organizations alike, it brings clarity, speed, and professionalism to everyday operations.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/30 hover:shadow-3xl hover:bg-white/95 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] h-full">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#a89456] rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-white text-3xl" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#111826] mb-4 group-hover:text-[#a89456] transition-colors duration-300 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-[#a89456]/90 to-[#a89456] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Experience the power of intelligent requisition management with AAS ONE
                </p>
                <button className="bg-white text-[#a89456] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started Today
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RequisitionSoftware;