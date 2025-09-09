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
      title: "Project Creation & Management",
      description: "Create and manage projects with ease. Senior Authorities initiate projects, assign Team Leads with automated email notifications, and monitor progress, ensuring seamless execution from inception to completion."
    },
    {
      icon: FiUsers,
      title: "Team Creation & Assignment",
      description: "Build effective teams effortlessly. Team Leads form teams by selecting members based on real-time availability sourced from HRMS integration, optimizing resource allocation and fostering collaboration."
    },
    {
      icon: FiCheckSquare,
      title: "Task Creation & Tracking",
      description: "Assign and track tasks with precision. Team Leads create tasks, assign them to team members with auto-populated roles, and monitor progress to keep projects on track and aligned with objectives."
    },
    {
      icon: FiAlertCircle,
      title: "Bug Creation, Resolution & Tracking",
      description: "Manage project issues efficiently through the Bug Module. Team Leads log bugs, assign them to team members for resolution, and track status updates, with visibility for Senior Authorities to ensure accountability."
    },
    {
      icon: FiCalendar,
      title: "Project-Wise MoM Creation",
      description: "Capture and organize meeting outcomes with project-specific Minutes of Meeting (MoM). Organizers draft and submit MoMs within one hour of meetings, stored as downloadable PDFs in the MoM Dashboard for Senior Authority access."
    },
    {
      icon: FiSearch,
      title: "Advanced Search & Filters",
      description: "Access critical data quickly with robust search and filter tools across all modules. Filter by status, date, client name, project ID, and more, ensuring instant retrieval of relevant information."
    },
    {
      icon: FiBell,
      title: "Real-Time Notifications",
      description: "Stay updated with role-based notifications delivered via email and in-platform alerts. Receive timely updates on task assignments, bug statuses, meeting schedules, and quotation statuses for seamless communication."
    },
    {
      icon: FiLink,
      title: "Seamless HRMS Integration",
      description: "Integrate effortlessly with your HRMS to synchronize user roles and availability. This ensures secure, role-based access control and automates team and task assignments for maximum efficiency."
    },
    {
      icon: FiActivity,
      title: "Comprehensive Activity Tracking",
      description: "Maintain transparency with detailed logging of all actions (create, update, delete). Senior Authorities can access activity logs for auditing, ensuring accountability and traceability across the system."
    },
    {
      icon: FiUserPlus,
      title: "Client Onboarding & Quotation Management",
      description: "Streamline client interactions with automated onboarding and quotation processes. Generate and email quotations post-meeting with accept/reject options, track statuses, and manage additional meeting payments after the third meeting."
    },
    {
      icon: FiClock,
      title: "Meeting Scheduling & Management",
      description: "Schedule and track meetings effortlessly using the Meeting Calendar and Team Calendar. Visualize schedules, manage client meetings, and access stored MoMs for seamless collaboration."
    },
    {
      icon: FiDatabase,
      title: "Master Data Management",
      description: "Centralize reference data for consistency. Senior Authorities manage service types, industry names, and meeting slots in the Master Module, supporting automation and uniformity across the platform."
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/bg2.jpg)'}}>
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black/20 mt-15 backdrop-blur-[1px]">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-black text-[#111826] mb-4 tracking-tight">
                     <span className="text-[#a89456]">BLUEPRINT</span>
                  </h1>
                  <div className="text-xl md:text-2xl font-bold text-gray-600 uppercase tracking-[0.3em] mb-6">
                    Project Management System
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                  The BLUEPRINT project is a comprehensive web-based Project Management System designed to streamline client management, project execution, and team collaboration. It integrates seamlessly with a Human Resource Management System (HRMS) to ensure secure, role-based access control for three primary user roles: Senior Authority, Team Lead, and Employee.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  The system is structured around nine core modules—Contact, Meeting, Quotation, Client, Project, Team, Task, Bug, and Master—each tailored to specific functionalities, with sub-modules enhancing their capabilities. The platform aims to enhance transparency, accountability, and efficiency through features like search filters, notifications, activity tracking, and automated workflows.
                </p>
              </div>
            </div>

            {/* Features Section Title */}
            <div className="text-center mb-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111826] mb-4">
                 <span className="text-[#a89456]">  Key Features of BLUEPRINT Project Management System</span> 
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  BLUEPRINT is a cutting-edge Project Management System designed to streamline client management, project execution, and team collaboration. Discover the powerful features that make BLUEPRINT the ultimate solution for driving efficiency, transparency, and success.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
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

            {/* Why Choose BLUEPRINT Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#a89456]/90 to-[#a89456] rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
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