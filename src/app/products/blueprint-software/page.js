import React from 'react';

const BlueprintSoftware = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blueprint Software</h1>
          <p className="text-xl text-gray-600 mb-12">Design, document, and optimize your business processes with our powerful blueprint solution</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Key Features */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Visual Process Modeling</h3>
            <p className="text-gray-600">Create detailed process diagrams with our intuitive drag-and-drop interface</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Collaboration Tools</h3>
            <p className="text-gray-600">Real-time collaboration with team members and stakeholders</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Process Analytics</h3>
            <p className="text-gray-600">Gain insights with detailed process performance metrics and analytics</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Increased Efficiency</h3>
              <p className="text-gray-600">Optimize processes and eliminate bottlenecks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Better Documentation</h3>
              <p className="text-gray-600">Maintain clear and consistent process documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintSoftware;