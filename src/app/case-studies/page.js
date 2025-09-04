'use client';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Global Tech Enterprise',
      industry: 'Technology',
      challenge: 'Managing 5000+ employees across multiple locations',
      solution: 'Implemented HRMS with custom workflows and integrations',
      results: ['30% reduction in HR processing time', '95% employee satisfaction rate', 'Streamlined onboarding process']
    },
    {
      title: 'Healthcare Solutions Inc.',
      industry: 'Healthcare',
      challenge: 'Complex shift management and compliance tracking',
      solution: 'Deployed HRMS with specialized healthcare modules',
      results: ['40% improved scheduling efficiency', 'Zero compliance violations', 'Reduced overtime costs by 25%']
    },
    {
      title: 'Retail Chain Group',
      industry: 'Retail',
      challenge: 'High turnover and training management',
      solution: 'Integrated HRMS with learning management system',
      results: ['50% faster employee onboarding', 'Improved retention by 35%', 'Enhanced training tracking']
    }
  ];

  return (
    <div className="min-h-screen py-38 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4" style={{ color: '#111826' }}>
          Success <span style={{ color: '#a89456' }}>Stories</span>
        </h1>
        <p className="text-center mb-16 text-lg" style={{ color: '#4b5563' }}>
          Discover how our HRMS solution transforms businesses and empowers growth
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gold-400" 
                 style={{ backgroundColor: '#ffffff' }}>
              <div className="p-8">
                <div className="mb-6 inline-block rounded-lg px-3 py-1" 
                     style={{ backgroundColor: '#a89456', color: '#ffffff' }}>
                  {study.industry}
                </div>
                <h2 className="text-2xl font-semibold mb-4" style={{ color: '#111826' }}>
                  {study.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2" style={{ color: '#a89456' }}>Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2" style={{ color: '#a89456' }}>Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2" style={{ color: '#a89456' }}>Key Results</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;