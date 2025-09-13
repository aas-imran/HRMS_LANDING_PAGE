"use client"
import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  BriefcaseIcon,

  ClockIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
 
} from '@heroicons/react/24/outline';


import BookDemoModal from './BookDemoModal';

// Custom scrollbar styles
const scrollbarStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
    background-color: #d1d5db;
    border-radius: 3px;
  }
  .scrollbar-track-gray-100::-webkit-scrollbar-track {
    background-color: #f3f4f6;
  }
`;

const FeaturesShowcase = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);

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

  // Get images for current module
  const getModuleImages = (moduleId) => {
    switch (moduleId) {
      case 'onboarding':
        return ['/emp-onb.png', '/emp-view.png', '/man-emp.png'];
      case 'recruitment':
        return ['/JO-Notice.png', '/all-job.png', '/job-view.png', '/applicant.png', '/appli-view.png'];
      case 'attendance':
        return ['/all-atd.png', '/id-qr.png', '/face-qr.png'];
      case 'payroll':
        return ['/run-payroll.png', '/hold-payroll.png', '/bonus.png'];
      case 'user-management':
        return ['/add-users.png', '/users.png'];
      case 'leave-management':
        return ['/all-leave.png', '/accept-leave.png'];
      case 'performance':
        return ['/all-task.png', '/view-task.png'];
      case 'grievance':
        return ['/all-grv.png', '/all-grv.png'];
      default:
        return ['/hrms-dash.png'];
    }
  };

  const currentImages = getModuleImages(activeModule);

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Screenshot Modal */}
      {isScreenshotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-lg p-4">
          <div className="relative bg-white rounded-2xl max-w-6xl max-h-[90vh] w-full overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsScreenshotModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative h-[70vh] flex items-center justify-center p-8">
              <img 
                src={currentImages[imageIndex]} 
                alt={`${activeModuleData?.name} Screenshot`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Navigation Dots */}
            {currentImages.length > 1 && (
              <div className="flex justify-center space-x-2 pb-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === imageIndex ? 'bg-[#a89456]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Navigation Arrows */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="pt-20 min-h-screen  bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/bg2.jpg)'}}>
      {/* Page Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#111826] mb-2">
          Explore All <span className="text-[#a89456]">HRMS Features</span>
        </h1>
        <p className="text-gray-600">Comprehensive HR management tools in one platform</p>
      </div>

      {/* Primary Card Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <div className="bg-white rounded-2xl sm:rounded-4xl shadow-xl overflow-hidden">
          {/* Mobile Navigation - Horizontal Scrollable */}
          <div className="block lg:hidden bg-[#111826] p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#a89456] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HR</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">HRMS</h2>
                  <p className="text-gray-400 text-xs">Dashboard</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="bg-[#a89456] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#a89456]/90 transition-all duration-300 touch-manipulation"
              >
                Book Demo
              </button>
            </div>
            
            {/* Horizontal Scrollable Menu */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-2 pb-2">
                {modules.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`flex-shrink-0 flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-[80px] ${
                        activeModule === module.id
                          ? 'bg-[#a89456] text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-xs text-center leading-tight">{module.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-[600px]">
            {/* Desktop Sidebar */}
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

            {/* Desktop Main Content Area */}
            <div className="flex-1 flex flex-col">
              {/* Module Header */}
              <div className="bg-[#eeef] border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#111826] flex items-center">
                      {React.createElement(activeModuleData?.icon, { className: "w-5 h-5 mr-2 text-[#a89456]" })}
                      {activeModuleData?.name}
                    </h2>
                    <p className="text-gray-600 text-sm">Module Overview</p>
                  </div>
                  {/* <button
                    onClick={() => setIsModalOpen(true)}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      setIsModalOpen(true);
                    }}
                    className="bg-[#a89456] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02] touch-manipulation"
                  >
                    Book Demo
                  </button> */}
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
                        <div 
                          className="relative h-[380px] bg-white/70 rounded border-2 border-gray-300 overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group/screenshot"
                          onClick={() => setIsScreenshotModalOpen(true)}
                        >
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gray-100 bg-opacity-0 group-hover/screenshot:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
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
                            <div className="flex w-[100%] h-[380px] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                              <img 
                                src="/hrms-dash.png" 
                                alt="HRMS Dashboard" 
                                className="w-full h-full object-contain flex-shrink-0"
                              />
                            </div>
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

                  {/* Features List - Static and Compact */}
                  <div className="lg:col-span-2 flex flex-col h-[380px]">
                    {/* Key Features Section */}
                    <div className="h-[250px]">
                      <h3 className="text-base font-bold text-[#111826] flex items-center mb-3">
                        <span className="w-5 h-5 bg-[#a89456] rounded-lg flex items-center justify-center mr-2">
                          <span className="text-white font-bold text-xs">✓</span>
                        </span>
                        Key Features
                      </h3>
                      <div className="grid gap-2">
                        {activeModuleData?.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></div>
                            <p className="text-gray-700 text-sm line-clamp-2">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {(activeModule === 'dashboard' || activeModule === 'onboarding' || activeModule === 'recruitment' || activeModule === 'attendance' || activeModule === 'payroll' || activeModule === 'user-management' || activeModule === 'leave-management' || activeModule === 'performance' || activeModule === 'grievance') && (
                      <div className="h-[130px] mt-10">
                        <h4 className="text-lg font-medium text-gray-500 mb-2">Description</h4>
                        <p className="text-gray-600 text-sm">
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

          {/* Mobile Content Layout */}
          <div className="block lg:hidden">
            {/* Mobile Module Header */}
            <div className="bg-[#eeef] border-b border-gray-200 px-4 py-3">
              <div className="text-center">
                <h2 className="text-lg font-bold text-[#111826] flex items-center justify-center">
                  {React.createElement(activeModuleData?.icon, { className: "w-5 h-5 mr-2 text-[#a89456]" })}
                  {activeModuleData?.name}
                </h2>
                <p className="text-gray-600 text-sm">Module Overview</p>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-4 space-y-6">
              {/* Mobile Image Showcase */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-700 mb-3 text-center">{activeModuleData?.name}</h3>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div 
                      className="relative h-[250px] sm:h-[300px] bg-white/70 rounded border-2 border-gray-300 overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 group/screenshot"
                      onClick={() => setIsScreenshotModalOpen(true)}
                    >
                      {/* Hover Overlay for Mobile */}
                      <div className="absolute inset-0 bg-gray-100 bg-opacity-0 group-hover/screenshot:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {activeModule === 'onboarding' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/emp-onb.png" alt="Employee Onboarding" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/emp-view.png" alt="Employee View" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/man-emp.png" alt="Employee Management" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'recruitment' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/JO-Notice.png" alt="Job Opening Notice" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/all-job.png" alt="All Jobs" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/job-view.png" alt="Job View" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/applicant.png" alt="Applicant List" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/appli-view.png" alt="Applicant View" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'attendance' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/all-atd.png" alt="All Attendance" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/id-qr.png" alt="ID QR Code" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/face-qr.png" alt="Face Recognition" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'payroll' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/run-payroll.png" alt="Run Payroll" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/hold-payroll.png" alt="Hold Payroll" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/bonus.png" alt="Bonus Management" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'user-management' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/add-users.png" alt="Add Users" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/users.png" alt="Manage Users" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'leave-management' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/all-leave.png" alt="All Leave Requests" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/accept-leave.png" alt="Accept Leave" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'performance' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/all-task.png" alt="All Tasks" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/view-task.png" alt="View Task" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : activeModule === 'grievance' ? (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/all-grv.png" alt="All Grievances" className="w-full h-full object-contain flex-shrink-0" />
                          <img src="/all-grv.png" alt="Grievance Details" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      ) : (
                        <div className="flex w-[100%] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${imageIndex * 100}%)` }}>
                          <img src="/hrms-dash.png" alt="HRMS Dashboard" className="w-full h-full object-contain flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Key Features */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-base font-bold text-[#111826] flex items-center mb-3">
                  <span className="w-5 h-5 bg-[#a89456] rounded-lg flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-xs">✓</span>
                  </span>
                  Key Features
                </h3>
                <div className="max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                  <div className="space-y-2">
                    {activeModuleData?.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></div>
                        <p className="text-gray-700 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Description */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-base font-medium text-gray-500 mb-3">Description</h4>
                <div className="max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pr-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
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
              </div>
            </div>
          </div>

          {/* Bottom CTA Section - Restored */}
          <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-lg sm:text-xl font-bold text-[#111826] flex items-center justify-center sm:justify-start">
                  {React.createElement(activeModuleData?.icon, { className: "w-5 h-5 mr-2 text-[#a89456]" })}
                  {activeModuleData?.name}
                </h2>
                <p className="text-gray-600 text-sm">Module Overview</p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  setIsModalOpen(true);
                }}
                className="bg-[#a89456] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg touch-manipulation"
              >
                Book Demo
              </button>
            </div>
          </div>
 
        </div>
      </div>

      </div>
     </>
   );
};

export default FeaturesShowcase;