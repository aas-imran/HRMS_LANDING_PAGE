import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Director",
      company: "TechCorp Solutions",
      rating: 5,
      text: "This HRMS has completely transformed our HR operations. The automation features have saved us countless hours, and the reporting capabilities give us insights we never had before.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "StartupXYZ",
      rating: 5,
      text: "As a growing startup, we needed an HR solution that could scale with us. This platform has been perfect - easy to use, comprehensive, and great customer support.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Manufacturing Inc.",
      rating: 5,
      text: "The payroll automation and attendance tracking features have eliminated so many manual processes. Our employees love the self-service portal too!",
      avatar: "ER"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#111826'}}>What Our Customers Say</h2>
          <p className="text-xl" style={{color: '#111826', opacity: 0.7}}>
            Join thousands of satisfied customers who have transformed their HR operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg border-t-4" style={{backgroundColor: '#f8f9fa', borderTopColor: '#a89456'}}>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="italic mb-6 leading-relaxed" style={{color: '#111826', opacity: 0.8}}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4" style={{backgroundColor: '#a89456'}}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold" style={{color: '#111826'}}>{testimonial.name}</h4>
                  <p className="text-sm" style={{color: '#111826', opacity: 0.6}}>{testimonial.position}</p>
                  <p className="text-sm font-medium" style={{color: '#a89456'}}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2" style={{color: '#a89456'}}>10,000+</h3>
            <p className="font-medium" style={{color: '#111826', opacity: 0.7}}>Happy Customers</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2" style={{color: '#a89456'}}>99.9%</h3>
            <p className="font-medium" style={{color: '#111826', opacity: 0.7}}>Uptime</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold mb-2" style={{color: '#a89456'}}>4.9/5</h3>
            <p className="font-medium" style={{color: '#111826', opacity: 0.7}}>Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;