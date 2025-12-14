import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Morning Star</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dedicated to saving lives through rapid response and professional care since 2010.
          </p>
        </div>
      </div>

      {/* Mission Vision */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide the highest standard of pre-hospital care and transportation with compassion, dignity, and professionalism.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="text-gray-600">
                A dedicated team of certified paramedics, nurses, and drivers trained to handle critical situations with calm efficiency.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Safety, and Empathy are the core pillars that guide every interaction with our patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-700 py-16 text-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">15k+</div>
            <div className="text-primary-200">Lives Saved</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-primary-200">Ambulances</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-primary-200">Medical Staff</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-primary-200">Service</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
