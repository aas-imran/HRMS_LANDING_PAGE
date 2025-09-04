"use client"
import React, { useState } from 'react';
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

  const modules = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: HomeIcon,
      features: [
        'Real-time HR metrics and KPIs',
        'Employee overview and analytics',
        'Quick access to all modules',
        'Customizable widgets'
      ]
    },
    {
      id: 'user-management',
      name: 'User Management',
      icon: UsersIcon,
      features: [
        'Employee database management',
        'Role-based access control',
        'Department organization',
        'Bulk import/export'
      ]
    },
    {
      id: 'onboarding',
      name: 'Onboarding',
      icon: UserPlusIcon,
      features: [
        'Automated workflows',
        'Digital document collection',
        'Task assignment tracking',
        'Progress monitoring'
      ]
    },
    {
      id: 'recruitment',
      name: 'Recruitment',
      icon: BriefcaseIcon,
      features: [
        'Job posting management',
        'Candidate tracking',
        'Resume screening',
        'Interview scheduling'
      ]
    },
    {
      id: 'notice',
      name: 'Notice Board',
      icon: SpeakerWaveIcon,
      features: [
        'Company announcements',
        'Department notices',
        'Priority notifications',
        'Read receipt tracking'
      ]
    },
    {
      id: 'interview',
      name: 'Interview',
      icon: ChatBubbleLeftRightIcon,
      features: [
        'Interview scheduling',
        'Panel management',
        'Evaluation forms',
        'Feedback collection'
      ]
    },
    {
      id: 'attendance',
      name: 'Attendance',
      icon: ClockIcon,
      features: [
        'Biometric integration',
        'Real-time monitoring',
        'Overtime calculation',
        'Mobile check-in/out'
      ]
    },
    {
      id: 'leave-management',
      name: 'Leave Management',
      icon: CalendarDaysIcon,
      features: [
        'Leave application workflow',
        'Balance tracking',
        'Holiday calendar',
        'Approval dashboard'
      ]
    },
    {
      id: 'performance',
      name: 'Performance',
      icon: ChartBarIcon,
      features: [
        'Goal setting and tracking',
        '360-degree feedback',
        'Review cycles',
        'KPI monitoring'
      ]
    },
    {
      id: 'grievance',
      name: 'Grievance',
      icon: ExclamationTriangleIcon,
      features: [
        'Anonymous submissions',
        'Tracking and resolution',
        'Escalation workflow',
        'Timeline monitoring'
      ]
    },
    {
      id: 'payroll',
      name: 'Payroll',
      icon: CurrencyDollarIcon,
      features: [
        'Automated calculations',
        'Tax management',
        'Payslip generation',
        'Bank integration'
      ]
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: Cog6ToothIcon,
      features: [
        'Company configuration',
        'User permissions',
        'System backup',
        'Integration settings'
      ]
    }
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
                  {/* <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#a89456] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#a89456]/90 transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group flex items-center"
                  >
                    <span className="relative z-10 flex items-center">
                      Book Demo
                      <span className="ml-2 flex space-x-1">
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                      </span>
                    </span>
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
                        <div className="relative h-[380px] bg-white/70 rounded border-2 border-gray-300 overflow-hidden">
                          <img 
                            src="/hrms-dash.png" 
                            alt="HRMS Dashboard" 
                            className="w-full h-full object-contain"
                          />
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
                      <div className="space-y-3">
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
                  
                    {/* Quick Benefits - At the bottom */}
                    <div className="bg-gradient-to-r from-[#111826] to-gray-800 rounded-lg p-4 text-white mt-4">
                      <h4 className="font-bold mb-3 text-sm">Why Choose This Module?</h4>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2">
                          <div className="text-[#a89456] mb-1">
                            <BoltIcon className="w-6 h-6 mx-auto" />
                          </div>
                          <p className="text-sm font-medium">Fast</p>
                          <p className="text-xs text-gray-300">Quick Response</p>
                        </div>
                        <div className="p-2">
                          <div className="text-[#a89456] mb-1">
                            <ShieldCheckIcon className="w-6 h-6 mx-auto" />
                          </div>
                          <p className="text-sm font-medium">Secure</p>
                          <p className="text-xs text-gray-300">Data Protected</p>
                        </div>
                        <div className="p-2">
                          <div className="text-[#a89456] mb-1">
                            <PresentationChartBarIcon className="w-6 h-6 mx-auto" />
                          </div>
                          <p className="text-sm font-medium">Smart</p>
                          <p className="text-xs text-gray-300">AI Powered</p>
                        </div>
                      </div>
                    </div>
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