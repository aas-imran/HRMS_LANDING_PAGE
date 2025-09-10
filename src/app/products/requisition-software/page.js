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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Smart Requisition Management",
      description: "Create, track, and manage requisitions effortlessly with a structured workflow that ensures every request moves seamlessly through the right channels."
    },
    {
      icon: FiUsers,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Role-Based Organogram & Priorities",
      description: "Maintain a clear organizational hierarchy where employees are assigned priorities based on their designation and organizational level, ensuring approvals always follow the correct chain of command."
    },
    {
      icon: FiGitBranch,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Parent–Child Organization Structure",
      description: "Support for multiple child organizations under a parent organization, with smooth coordination and visibility across all levels."
    },
    {
      icon: FiZap,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Automated Approval & Escalation",
      description: "Requisitions are automatically escalated in case of inactivity, following predefined priorities—ensuring no request is ever delayed or overlooked."
    },
    {
      icon: FiFileText,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Orders & Notices Management",
      description: "Easily convert approved requisitions into actionable orders, while creating and circulating notices based on role-specific access and authority."
    },
    {
      icon: FiEye,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Transparent Task Tracking",
      description: "Get a clean, real-time view of which tasks are assigned to whom, making accountability and progress tracking effortless."
    },
  
  ];

  return (
    <div className="min-h-screen bg-cover  bg-center bg-no-repeat" style={{backgroundImage: 'url(/bg3.jpg)'}}>
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/40  mt-15 backdrop-blur-[1px]">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2125&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-black text-[#3c3c3d] mb-4 tracking-tight">
                       <span className="text-[#a89456]">AAS ONE</span>
                    </h1>
                    <div className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.3em] mb-6">
                      Requisition Software
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
                    AAS ONE is an intelligent requisition and workflow management portal built to streamline approvals, orders, and internal communication across organizations. With a structured organogram, role-based priorities, and automated escalation features, it ensures every requisition flows seamlessly without delays. From creating requisitions and passing orders to circulating notices with role-specific access, AAS ONE provides a clean, transparent, and efficient system that keeps tasks accountable and teams aligned. Designed for parent and child organizations alike, it brings clarity, speed, and professionalism to everyday operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Parent Card Container */}
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
              {/* Features Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key Features of <span className="text-[#a89456]">AAS ONE</span> Requisition Software
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Discover the powerful features that make AAS ONE the ultimate solution for streamlined requisition management and workflow automation.
                </p>
              </div>

              {/* All Titles Card */}
               <div className="mb-12">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                   Complete Feature Overview
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {features.map((feature, index) => {
                     const IconComponent = feature.icon;
                     return (
                       <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300">
                         <div className="flex-shrink-0">
                           <div className="inline-flex items-center justify-center w-10 h-10 bg-[#a89456] rounded-lg">
                             <IconComponent className="text-white text-lg" />
                           </div>
                         </div>
                         <div className="flex-grow">
                           <h4 className="text-sm font-semibold text-white leading-tight">
                             {feature.title}
                           </h4>
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>

              {/* Individual Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="group">
                      <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-white/30 hover:bg-white transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] h-full flex flex-col">
                         {/* Image Section */}
                         <div className="relative h-48 overflow-hidden flex-shrink-0">
                           <img 
                             src={feature.image} 
                             alt={feature.title}
                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                           <div className="absolute bottom-4 left-4">
                             <div className="inline-flex items-center justify-center w-12 h-12 bg-[#a89456] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                               <IconComponent className="text-white text-xl" />
                             </div>
                           </div>
                         </div>
                         
                         {/* Content Section */}
                         <div className="p-6 md:p-8 flex-grow flex flex-col">
                           <h3 className="text-xl md:text-2xl font-bold text-[#111826] mb-4 group-hover:text-[#a89456] transition-colors duration-300 leading-tight">
                             {feature.title}
                           </h3>
                           <p className="text-gray-600 leading-relaxed text-base flex-grow mb-4">
                             {feature.description}
                           </p>
                           
                           {/* Feature Badge */}
                           <div className="pt-4 border-t border-gray-200 mt-auto">
                             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#a89456]/10 text-[#a89456] group-hover:bg-[#a89456] group-hover:text-white transition-all duration-300">
                               Premium Feature
                             </span>
                           </div>
                         </div>
                       </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-[#a89456]/0 to-[#a89456] rounded-3xl p-8 md:p-12 shadow-2xl border ">
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