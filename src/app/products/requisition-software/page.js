import React from 'react';

const RequisitionSoftware = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Requisition Software</h1>
          <p className="text-xl text-gray-600 mb-12">Streamline your procurement process with our advanced requisition management system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Key Features */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
            <p className="text-gray-600">Simplify requisition approvals with customizable workflows and automatic routing</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Budget Control</h3>
            <p className="text-gray-600">Real-time budget tracking and automated spend limit enforcement</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Vendor Management</h3>
            <p className="text-gray-600">Centralized vendor database with performance tracking and ratings</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cost Savings</h3>
              <p className="text-gray-600">Reduce processing costs and eliminate manual errors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Improved Efficiency</h3>
              <p className="text-gray-600">Faster requisition cycles and reduced processing time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequisitionSoftware;