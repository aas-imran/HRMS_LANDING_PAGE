'use client';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: 'Fogle Pvt Ltd\n Automating Shift Scheduling and High-Volume Attendance',
      industry: 'Manufacturing',
      employeeCount: '250+',
      location: 'Ahmedabad',
      date: '01/09/2025',
      challenge: 'Fogle struggled with managing complex multi-shift schedules across departments, often facing overlap issues and poor visibility into workforce allocation. Additionally, large groups of workers queued at entry points during shift changes, slowing down attendance marking and causing operational delays.',
      solution: 'We implemented custom shift workflow configurations that allowed dynamic scheduling and department-wise planning. To manage high footfall at entry gates, facial recognition-based biometric attendance with geofencing was deployed, enabling fast, contactless check-ins and real-time visibility.',
      results: [
        'Shift errors reduced by 85%',
        'Attendance time dropped significantly'
      ]
    },
    {
      title: 'AAS Mines & Minerals  Pvt Ltd\n Structuring Petty Cash Handling on Field Sites',
      industry: 'Mining & Minerals',
      employeeCount: '200+ (on-site + admin)',
      location: 'Dhanbad',
      date: '20/08/2025',
      challenge: 'At remote mining sites, small daily expenses were handled informally, often without receipts or accountability. This lack of structure made it difficult to track expenses, verify legitimacy, and maintain audit trails — increasing the risk of disputes and financial leakage.',
      solution: 'We introduced a dedicated reimbursement workflow within the HRMS. Employees could now either raise advance requests for planned expenditures or submit claims post-spending with receipt uploads. The process was linked with hierarchical approvals and digital records for full traceability.',
      results: [
        '70% drop in unverified spending',
        'Streamlined expense handling with audit-ready records',
        'Improved trust, transparency, and financial control at site level'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-38 px-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/bg2.jpg")',  }}>
      <div className="absolute inset-0backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4" style={{ color: '#111826' }}>
          Success <span style={{ color: '#a89456' }}>Stories</span>
        </h1>
        <p className="text-center mb-16 text-lg" style={{ color: '#4b5563' }}>
          Discover how our HRMS solution transforms businesses and empowers growth
        </p>
        
        <div className="space-y-12 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => {
            const imageSrc = index === 0 ? '/tissue.jpg' : '/minerals.jpg';
            
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gold-400 flex flex-col lg:flex-row" 
                   style={{ backgroundColor: '#ffffff' }}>
                {/* Image Section */}
                <div className="lg:w-1/2 h-64 lg:h-auto">
                  <img 
                    src={imageSrc} 
                    alt={study.title.split('\n')[0]} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block rounded-lg px-3 py-1" 
                         style={{ backgroundColor: '#a89456', color: '#ffffff' }}>
                      {study.industry}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-3xl font-bold mb-4">
                    <span style={{ color: '#a89456' }}>{study.title.split('\n')[0]}</span>
                  </h2>

                  <div className="flex justify-between items-center mb-6">
                    <div className="text-sm font-medium text-gray-500">
                      {study.employeeCount} Employees
                    </div>
                    <div className="flex gap-2 text-sm text-gray-500">
                      <span>{study.location}</span>
                      <span>|</span>
                      <span>{study.date}</span>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 font-medium">{study.title.split('\n')[1]}</p>
                  
                  {/* Content Sections */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#a89456' }}>Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#a89456' }}>Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#a89456' }}>Key Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-gold-400 mt-1 font-bold">•</span>
                            <span className="text-gray-600 flex-grow">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;