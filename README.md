"use client"
import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  BriefcaseIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

// Add these imports at the top of the file
import { BoltIcon, ShieldCheckIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';
import BookDemoModal from './BookDemoModal';

const FeaturesShowcase = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (activeModule === 'onboarding') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'recruitment') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'attendance') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'payroll') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'user-management') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 2);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'leave-management') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 2);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'performance') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 2);
      }, 3000);
      return () => clearInterval(interval);
    } else if (activeModule === 'grievance') {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % 2);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeModule]);

  const modules = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: HomeIcon,
      features: [
        'Module-wise creation and entry widgets for jobs, attendance, and notices',
        'HR insights with comprehensive analytics and metrics',
        'Quick actions panel for frequent tasks',
        'Team calendar with events and schedules',
        'Resource center for document management and official notices'
      ]
    },
    {
      id: 'user-management',
      name: 'User Management',
      icon: UsersIcon,
      features: [
        'Add and manage user accounts for HRMS access',
        'Control user permissions and access levels',
        'Reset and manage user passwords and email settings',
        'Block/unblock user access to the system',
        'Comprehensive user activity monitoring'
      ]
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      icon: UserPlusIcon,
      features: [
        'Employee onboarding form with comprehensive data collection',
        'Digital ID card generation with QR code',
        'Employee profile management with edit/block functionality',
        'Document verification and storage system'
      ]
    },
    {
      id: 'recruitment',
      name: 'Recruitment',
      icon: BriefcaseIcon,
      features: [
        'Post job openings on company website with detailed requirements',
        'Track candidate applications and schedule interviews',
        'Multi-round interview process with candidate evaluation',
        'Automated shortlisting and offer letter generation',
        'Complete recruitment workflow from posting to hiring'
      ]
    },
    // {
    //   id: 'notice',
    //   name: 'Notice Board',
    //   icon: SpeakerWaveIcon,
    //   features: [
    //     'Company announcements',
    //     'Department notices',
    //     'Priority notifications',
    //     'Read receipt tracking'
    //   ]
    // },
    // {
    //   id: 'interview',
    //   name: 'Interview',
    //   icon: ChatBubbleLeftRightIcon,
    //   features: [
    //     'Interview scheduling',
    //     'Panel management',
    //     'Evaluation forms',
    //     'Feedback collection'
    //   ]
    // },
    {
      id: 'attendance',
      name: 'Attendance',
      icon: ClockIcon,
      features: [
        'Comprehensive attendance management with CSV export',
        'View and analyze past attendance records',
        'QR code and facial recognition for attendance marking',
        'Track lunch breaks and work hours',
        'Self and team attendance monitoring'
      ]
    },
    {
      id: 'leave-management',
      name: 'Leave Management',
      icon: CalendarDaysIcon,
      features: [
        'View and manage all employee leave requests',
        'Track available leave balances by type',
        'Approve or reject leave based on availability',
        'Automated leave balance calculations',
        'Leave history and reporting features'
      ]
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: ChartBarIcon,
      features: [
        'Assign and track employee tasks with deadlines',
        'Monitor task completion and performance metrics',
        'Rate employee performance with detailed feedback',
        'Generate performance reports and analytics',
        'Set and track individual and team goals'
      ]
    },
    {
      id: 'grievance',
      name: 'Grievance',
      icon: ExclamationTriangleIcon,
      features: [
        'View and manage all employee grievances',
        'Track complaint status and resolution progress',
        'Escalate issues to higher management',
        'Handle sensitive matters confidentially',
        'Monitor resolution timelines'
      ]
    },
    {
      id: 'payroll',
      name: 'Payroll',
      icon: CurrencyDollarIcon,
      features: [
        'Run and hold payroll for individual or group employees',
        'Create and manage multiple salary templates',
        'Add and manage employee bonuses and incentives',
        'Automated tax calculations and deductions',
        'Generate detailed payslips with customizable components'
      ]
    },
 
  ];

  const activeModuleData = modules.find(module => module.id === activeModule);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#111826] mb-2">
          Explore All <span className="text-[#a89456]">HRMS Features</span>
        </h1>
        <p className="text-gray-600">Comprehensive HR management tools in one platform</p>
      </div>

      {/* Primary Card Container */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* HRMS Interface Layout - Compact */}
          <div className="flex h-[600px]">
            {/* Compact Sidebar */}
            <div className="w-64 bg-[#111826] text-white flex flex-col">
              {/* Sidebar Header */}
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#a89456] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HR</span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">HRMS</h2>
                    <p className="text-gray-400 text-xs">Dashboard</p>
                  </div>
                </div>
              </div>

              {/* Navigation Menu - Compact */}
              <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                {modules.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-left text-sm ${
                        activeModule === module.id
                          ? 'bg-[#a89456] text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 flex-shrink-0" />
                      <span className="font-medium truncate">{module.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Main Content Area - Compact */}
            <div className="flex-1 flex flex-col">
              {/* Module Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#111826] flex items-center">
                      {React.createElement(activeModuleData?.icon, { className: "w-5 h-5 mr-2 text-[#a89456]" })}
                      {activeModuleData?.name}
                    </h2>
                    <p className="text-gray-600 text-sm">Module Overview</p>
                  </div>
           
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid lg:grid-cols-6 gap-6 h-full">
                  {/* Screenshot Area - Increased to 4 columns */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center p-6 w-full">
                      <h3 className="text-lg font-bold text-gray-700 mb-4">{activeModuleData?.name}</h3>
                      <div className="bg-white/50 rounded-lg p-4">
                        <div className="relative h-[380px] bg-white/70 rounded border-2 border-gray-300 overflow-hidden">
                          {activeModule === 'onboarding' ? (
                            <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/emp-onb.png" 
                                alt="Employee Onboarding" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/emp-view.png" 
                                alt="Employee View" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/man-emp.png" 
                                alt="Employee Management" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'recruitment' ? (
                            <div className="flex w-[100%] [380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/JO-Notice.png" 
                                alt="Job Opening Notice" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/all-job.png" 
                                alt="All Jobs" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/job-view.png" 
                                alt="Job View" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/applicant.png" 
                                alt="Applicant List" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/appli-view.png" 
                                alt="Applicant View" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'attendance' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/all-atd.png" 
                                alt="All Attendance" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/id-qr.png" 
                                alt="ID QR Code" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/face-qr.png" 
                                alt="Face Recognition" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'payroll' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/run-payroll.png" 
                                alt="Run Payroll" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/hold-payroll.png" 
                                alt="Hold Payroll" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/bonus.png" 
                                alt="Bonus Management" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'user-management' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/add-users.png" 
                                alt="Add Users" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/users.png" 
                                alt="Manage Users" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'leave-management' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/all-leave.png" 
                                alt="All Leave Requests" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/accept-leave.png" 
                                alt="Accept Leave" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'performance' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/all-task.png" 
                                alt="All Tasks" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/view-task.png" 
                                alt="View Task" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : activeModule === 'grievance' ? (
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/all-grv.png" 
                                alt="All Grievances" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                              <img 
                                src="/all-grv.png" 
                                alt="Grievance Details" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
                          ) : (
                            <img 
                              src="/hrms-dash.png" 
                              alt="HRMS Dashboard" 
                              className="w-full h-full object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Demo Modal */}
                  <BookDemoModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                  />

                  {/* Features List - Decreased to 2 columns */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Key Features Section */}
                    <div className="flex-grow">
                      <h3 className="text-base font-bold text-[#111826] flex items-center mb-4">
                        <span className="w-5 h-5 bg-[#a89456] rounded-lg flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-xs">✓</span>
                        </span>
                        Key Features
                      </h3>
                      <div className="space-y-2">
                        {activeModuleData?.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {(activeModule === 'dashboard' || activeModule === 'onboarding' || activeModule === 'recruitment' || activeModule === 'attendance' || activeModule === 'payroll' || activeModule === 'user-management' || activeModule === 'leave-management' || activeModule === 'performance' || activeModule === 'grievance') && (
                      <div className="mt-4">
                        <h4 className="text-xs font-medium text-gray-500 mb-2">Description</h4>
                        <p className="text-gray-600 text-xs p-2 bg-gray-50 rounded-lg">
                          {activeModule === 'onboarding' ? (
                            "Streamline your employee onboarding process with our comprehensive system. From initial data collection to ID card generation, manage employee profiles efficiently with full control over access and permissions."
                          ) : activeModule === 'recruitment' ? (
                            "Efficiently manage your recruitment process from job posting to hiring. Post job openings on your company website, track applications, conduct multi-round interviews, evaluate candidates, and generate offer letters - all in one integrated system."
                          ) : activeModule === 'payroll' ? (
                            "Comprehensive payroll management system with flexible control over employee compensation. Process payroll runs, manage salary templates, handle bonuses, and automate tax calculations. Hold or release payroll for specific employees or groups while maintaining accurate records and generating detailed payslips."
                          ) : activeModule === 'user-management' ? (
                            "Centralized user management system for controlling HRMS access. Create and manage user accounts, set permissions, handle password resets, and monitor user activities. Maintain system security by controlling user access and managing authentication settings."
                          ) : activeModule === 'leave-management' ? (
                            "Comprehensive leave management system for HR to efficiently handle employee leave requests. View all leave applications, check available balances, and make informed decisions on approvals or rejections. Track leave history and generate reports for better workforce planning."
                          ) : activeModule === 'performance' ? (
                            "Advanced performance management system for tracking employee tasks and evaluating work quality. HR can assign tasks with deadlines, monitor progress, provide ratings and feedback, and generate comprehensive performance reports. The system helps maintain clear performance standards and facilitates employee development."
                          ) : activeModule === 'grievance' ? (
                            "Comprehensive grievance management system that enables HR to efficiently handle employee complaints and concerns. View all grievances, track their status, escalate issues when needed, and ensure timely resolution. The system maintains confidentiality while facilitating effective communication between all parties involved."
                          ) : activeModule === 'dashboard' ? (
                            "Centralized dashboard providing quick access to essential HR functions and real-time insights. Features module-wise widgets for creating jobs, tracking attendance, and managing notices. Includes HR analytics, quick action buttons, team calendar, and a resource center for document management. Streamlines daily HR operations with an intuitive interface."
                          ) : (
                            "Advanced attendance tracking system with multiple check-in methods including QR code scanning and facial recognition. Monitor attendance records, manage breaks, and generate detailed reports with CSV export functionality."
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
                       {/* Module Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#111826] flex items-center">
                      {React.createElement(activeModuleData?.icon, { className: "w-5 h-5 mr-2 text-[#a89456]" })}
                      {activeModuleData?.name}
                    </h2>
                    <p className="text-gray-600 text-sm">Module Overview</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#a89456] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
        </div>
      </div>

      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default FeaturesShowcase;