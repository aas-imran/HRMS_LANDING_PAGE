import React from 'react';
import { 
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  VideoCameraIcon,
  GlobeAltIcon,
  CloudIcon,
  CurrencyDollarIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const Integrations = () => {
  const integrations = [
    { name: "Slack", icon: ChatBubbleLeftRightIcon },
    { name: "Office 365", icon: EnvelopeIcon },
    { name: "QuickBooks", icon: BriefcaseIcon },
    { name: "Zoom", icon: VideoCameraIcon },
    { name: "Google", icon: GlobeAltIcon },
    { name: "Salesforce", icon: CloudIcon },
    { name: "Payroll", icon: CurrencyDollarIcon },
    { name: "Time Track", icon: ClockIcon }
  ];

  return (
    <section className="py-16 bg-[#eef1f6]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-3">
            Seamless <span className="text-[#a81]">Integrations</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Connect with your favorite tools effortlessly
          </p>
        </div>

        {/* Minimal Integration Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-12">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 mb-2 text-gray-600 group-hover:text-[#a81] transition-colors duration-300">
                      <IconComponent className="w-full h-full" />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-[#a81] transition-colors duration-300 text-center">
                      {integration.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-black mb-2">
                Need a Custom Integration?
              </h3>
              <p className="text-gray-600">
                Our API makes it simple to connect any system
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#a81] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#a81]/90 transition-colors duration-300">
                View API
              </button>
              <button className="border border-[#a81] text-[#a81] px-6 py-2 rounded-lg font-medium hover:bg-[#a81] hover:text-white transition-all duration-300">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;