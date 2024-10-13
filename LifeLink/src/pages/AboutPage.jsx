import React from 'react';

function AboutPage() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white shadow-md rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">About LifeLink</h1>
          <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
            LifeLink is a dedicated platform offering fast, reliable, and efficient eAmbulance 
            services for critical situations. Our mission is to ensure that medical help reaches 
            those in need, wherever they are, as quickly as possible. With advanced sorting and 
            filtering options, users can easily find the best ambulance service tailored to their needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive to bridge the gap between emergency medical services and those in need. 
                LifeLink ensures that help is only a few clicks away, offering ease of use and quick 
                access in life-threatening situations.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Why LifeLink?</h3>
              <p className="text-gray-600 leading-relaxed">
                LifeLink stands out by offering a network of trusted ambulance services across major cities. 
                Our platform allows users to filter by service type, location, and availability, ensuring they 
                find the best option for urgent care, with a focus on reliability and fast response times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
