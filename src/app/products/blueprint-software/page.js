import React from 'react';
import { 
  FiFolder, 
  FiUsers, 
  FiCheckSquare, 
  FiAlertCircle, 
  FiCalendar, 
  FiSearch, 
  FiBell, 
  FiLink, 
  FiActivity, 
  FiUserPlus, 
  FiClock, 
  FiDatabase 
} from 'react-icons/fi';

const BlueprintSoftware = () => {
  const features = [
    {
      icon: FiFolder,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Project Creation & Management",
      description: "Create and manage projects with ease. Senior Authorities initiate projects, assign Team Leads with automated email notifications, and monitor progress, ensuring seamless execution from inception to completion."
    },
    {
      icon: FiUsers,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Team Creation & Assignment",
      description: "Build effective teams effortlessly. Team Leads form teams by selecting members based on real-time availability sourced from HRMS integration, optimizing resource allocation and fostering collaboration."
    },
    {
      icon: FiCheckSquare,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Task Creation & Tracking",
      description: "Assign and track tasks with precision. Team Leads create tasks, assign them to team members with auto-populated roles, and monitor progress to keep projects on track and aligned with objectives."
    },
    {
      icon: FiAlertCircle,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Bug Creation, Resolution & Tracking",
      description: "Manage project issues efficiently through the Bug Module. Team Leads log bugs, assign them to team members for resolution, and track status updates, with visibility for Senior Authorities to ensure accountability."
    },
    {
      icon: FiCalendar,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Project-Wise MoM Creation",
      description: "Capture and organize meeting outcomes with project-specific Minutes of Meeting (MoM). Organizers draft and submit MoMs within one hour of meetings, stored as downloadable PDFs in the MoM Dashboard for Senior Authority access."
    },
    {
      icon: FiSearch,
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Advanced Search & Filters",
      description: "Access critical data quickly with robust search and filter tools across all modules. Filter by status, date, client name, project ID, and more, ensuring instant retrieval of relevant information."
    },
    {
      icon: FiBell,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Real-Time Notifications",
      description: "Stay updated with role-based notifications delivered via email and in-platform alerts. Receive timely updates on task assignments, bug statuses, meeting schedules, and quotation statuses for seamless communication."
    },
    {
      icon: FiLink,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Seamless HRMS Integration",
      description: "Integrate effortlessly with your HRMS to synchronize user roles and availability. This ensures secure, role-based access control and automates team and task assignments for maximum efficiency."
    },
    {
      icon: FiActivity,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Comprehensive Activity Tracking",
      description: "Maintain transparency with detailed logging of all actions (create, update, delete). Senior Authorities can access activity logs for auditing, ensuring accountability and traceability across the system."
    },
    {
      icon: FiUserPlus,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Client Onboarding & Quotation Management",
      description: "Streamline client interactions with automated onboarding and quotation processes. Generate and email quotations post-meeting with accept/reject options, track statuses, and manage additional meeting payments after the third meeting."
    },
    {
      icon: FiClock,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Meeting Scheduling & Management",
      description: "Schedule and track meetings effortlessly using the Meeting Calendar and Team Calendar. Visualize schedules, manage client meetings, and access stored MoMs for seamless collaboration."
    },
    {
      icon: FiDatabase,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Master Data Management",
      description: "Centralize reference data for consistency. Senior Authorities manage service types, industry names, and meeting slots in the Master Module, supporting automation and uniformity across the platform."
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/bg3.jpg)'}}>
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/40 mt-15 backdrop-blur-[1px]">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden" >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-lg"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-black text-[#3c3c3d] mb-4 tracking-tight">
                       <span className="text-[#a89456]">BLUEPRINT</span>
                    </h1>
                    <div className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.3em] mb-6">
                      Project Management System
                    </div>
                  </div>
                  <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
                    The BLUEPRINT project is a comprehensive web-based Project Management System designed to streamline client management, project execution, and team collaboration. It integrates seamlessly with a Human Resource Management System (HRMS) to ensure secure, role-based access control and automated workflows. The system is structured around nine core modules—Contact, Meeting, Quotation, Client, Project, Team, Task, Bug, and Master—each tailored to specific functionalities, with sub-modules enhancing their capabilities. The platform aims to enhance transparency, accountability, and efficiency in project management operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Parent Card Container */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
              {/* Features Section Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Key Features of <span className="text-[#a89456]">BLUEPRINT</span> Project Management System
                </h2>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                  Discover the powerful features that make BLUEPRINT the ultimate solution for streamlined project management, team collaboration, and client success.
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

            {/* Why Choose BLUEPRINT Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#a89456]/10 to-[#a89456] rounded-3xl p-8 md:p-12 shadow-2xl border">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose BLUEPRINT?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
                  With its intuitive interface, robust workflows, and cutting-edge technology, BLUEPRINT transforms how you manage projects, teams, and clients. From project creation to bug resolution, every feature is designed to drive efficiency, transparency, and success.
                </p>
                <button className="bg-white text-[#a89456] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Started with BLUEPRINT
                </button>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintSoftware;