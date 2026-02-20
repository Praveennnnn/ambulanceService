import React, { useEffect, useRef, useState, useMemo } from 'react';
import { MapPin, Calendar, Building2, Users, CheckCircle2, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      name: 'Godrej Commercial, Hebbal',
      location: 'Bangalore',
      duration: '2022 – 2023',
      year: 2022,
      teamSize: '2 Nurses, 3 First Aiders',
      workersServed: 300,
      industryType: 'Commercial',
      services: [
        'On-site Occupational Health Centre (OHC) setup',
        'First aid services and trained first aiders',
        'Basic medical care for workers',
        'Emergency response coordination',
        'Health monitoring and medical record maintenance',
        'Hospital tie-up support for referrals'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      current: false
    },
    {
      name: 'Godrej Indiranagar',
      location: 'Bangalore',
      duration: '2023 – 2024',
      year: 2023,
      teamSize: '1 Doctor, 2 Nurses, 2 First Aiders',
      workersServed: 450,
      industryType: 'Commercial',
      services: [
        'Full-time OHC services with doctor and nurse support',
        'First aid treatment and injury management',
        'Health screenings and medical examinations',
        'Ambulance coordination',
        'Incident reporting and documentation',
        'Compliance with workplace health and safety standards'
      ],
      gradient: 'from-purple-500 to-pink-500',
      current: false
    },
    {
      name: 'L&T Tech Park – S2',
      location: 'Bangalore',
      duration: '2023 – 2024',
      year: 2023,
      teamSize: '1 Doctor, 3 Nurses, 4 First Aiders',
      workersServed: 800,
      industryType: 'Tech Park',
      services: [
        'Occupational health services',
        'Trained medical staff deployment',
        'First aid care and emergency preparedness',
        'Medical equipment support',
        'Documentation and medical reporting',
        'Coordination with nearby hospitals for advanced care'
      ],
      gradient: 'from-orange-500 to-red-500',
      current: false
    },
    {
      name: 'MBRDI, Brookfield',
      location: 'Bangalore',
      duration: '2024',
      year: 2024,
      teamSize: '1 Doctor, 2 Nurses',
      workersServed: 350,
      industryType: 'Corporate',
      services: [
        'On-site medical support',
        'Health monitoring of employees',
        'First aid treatment',
        'Emergency response readiness',
        'Medical reporting',
        'Coordination with corporate safety teams'
      ],
      gradient: 'from-green-500 to-emerald-500',
      current: false
    },
    {
      name: 'Vista Spaces, Jakkur',
      location: 'Bangalore',
      duration: '2024',
      year: 2024,
      teamSize: '2 Nurses, 3 First Aiders',
      workersServed: 400,
      industryType: 'Construction',
      services: [
        'Construction site medical services',
        'First aid treatment and trained first aiders',
        'Health awareness programs',
        'Injury prevention support',
        'Ambulance arrangement',
        'Referral management'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      current: false
    },
    {
      name: 'JPMC – ETV Parcel 8, Tower D',
      location: 'Bangalore',
      duration: '2025 to 2026',
      year: 2025,
      teamSize: '2 Doctors, 4 Nurses, 6 First Aiders',
      workersServed: 1200,
      industryType: 'Construction',
      services: [
        'Round-the-clock OHC services',
        'Deployment of medical professionals',
        'Emergency medical response',
        'First aid management',
        'Health documentation',
        'Compliance support and hospital tie-up coordination'
      ],
      gradient: 'from-pink-500 to-rose-500',
      current: true
    },
    {
      name: 'L&T T2',
      location: 'Chennai',
      duration: '2025',
      year: 2025,
      teamSize: '1 Doctor, 3 Nurses, 4 First Aiders',
      workersServed: 600,
      industryType: 'Construction',
      services: [
        'Comprehensive site medical services',
        'First aid care and OHC operations',
        'Nurse and first aider support',
        'Emergency handling',
        'Ambulance coordination',
        'Safety compliance assistance'
      ],
      gradient: 'from-yellow-500 to-orange-500',
      current: false
    },
    {
      name: 'JPMC MAGMA',
      location: 'Hyderabad',
      duration: '2025',
      year: 2025,
      teamSize: '1 Doctor, 2 Nurses, 3 First Aiders',
      workersServed: 500,
      industryType: 'Construction',
      services: [
        'On-site healthcare services',
        'Emergency medical response',
        'First aid treatment',
        'Medical monitoring and reporting',
        'Coordination with local hospitals for timely escalation'
      ],
      gradient: 'from-red-500 to-pink-500',
      current: false
    },
    // {
    //   name: 'L&T T2 – P2',
    //   location: 'Chennai',
    //   duration: '2025',
    //   year: 2025,
    //   teamSize: '1 Doctor, 2 Nurses, 3 First Aiders',
    //   workersServed: 550,
    //   industryType: 'Construction',
    //   services: [
    //     'Occupational health and emergency medical support',
    //     'Trained medical staff deployment',
    //     'First aid services',
    //     'Health documentation',
    //     'Ambulance facilitation as per site safety requirements'
    //   ],
    //   gradient: 'from-teal-500 to-cyan-500',
    //   current: false
    // },
    {
      name: 'L&T Vestian',
      location: 'Kolkata',
      duration: '2026',
      year: 2026,
      teamSize: '2 Doctors, 3 Nurses, 5 First Aiders',
      workersServed: 900,
      industryType: 'Commercial',
      services: [
        'End-to-end occupational health services',
        'OHC setup and medical staffing',
        'First aid care',
        'Emergency response planning',
        'Medical record management',
        'Hospital coordination'
      ],
      gradient: 'from-lime-500 to-green-500',
      current: true
    },
    {
      name: 'L&T Iris',
      location: 'Bangalore',
      duration: '2026',
      year: 2026,
      teamSize: '1 Doctor, 3 Nurses, 4 First Aiders',
      workersServed: 700,
      industryType: 'Construction',
      services: [
        'On-site medical and safety support',
        'First aid services',
        'Trained professionals deployment',
        'Emergency response readiness',
        'Health monitoring',
        'Compliance with occupational health regulations'
      ],
      gradient: 'from-violet-500 to-purple-500',
      current: true
    },
    {
      name: 'Alufit International Pvt Limited',
      location: 'Bangalore',
      duration: '2026',
      year: 2026,
      teamSize: '1 Doctor, 2 Nurses, 3 First Aiders',
      workersServed: 400,
      industryType: 'Industrial',
      services: [
        'On-site medical and safety support',
        'First aid services',
        'Trained professionals deployment',
        'Emergency response readiness',
        'Health monitoring',
        'Compliance with occupational health regulations'
      ],
      gradient: 'from-fuchsia-500 to-pink-500',
      current: true
    },
    {
      name: 'Siemens Project, Alufit International Pvt Limited',
      location: 'Bangalore',
      duration: '2026',
      year: 2026,
      teamSize: '1 Doctor, 2 Nurses, 2 First Aiders',
      workersServed: 350,
      industryType: 'Industrial',
      services: [
        'On-site medical and safety support',
        'First aid services',
        'Trained professionals deployment',
        'Emergency response readiness',
        'Health monitoring',
        'Compliance with occupational health regulations'
      ],
      gradient: 'from-sky-500 to-blue-500',
      current: true
    },
    
  ];

  // Calculate statistics
  const stats = useMemo(() => {
    const totalProjects = projects.length;
    const ongoingProjects = projects.filter(p => p.current).length;
    const completedProjects = projects.filter(p => !p.current).length;
    const totalWorkers = projects.reduce((sum, p) => sum + p.workersServed, 0);
    const citiesCovered = new Set(projects.map(p => p.location)).size;

    return { totalProjects, ongoingProjects, completedProjects, totalWorkers, citiesCovered };
  }, [projects]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Building2 className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">Our Projects & Achievements</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white">
            Projects & Services Delivered
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We have delivered comprehensive Occupational Health, On-site Medical, Emergency Response, and Safety Support Services across major construction and commercial projects throughout India.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                {stats.totalProjects}
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">Total Projects</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-2">
                {stats.ongoingProjects}
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">Ongoing</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                {stats.completedProjects}
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">Completed</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 mb-2">
                {stats.citiesCovered}
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">Cities</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
                {stats.totalWorkers}+
              </div>
              <p className="text-gray-600 font-medium text-sm md:text-base">Workers Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Our Project Portfolio
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Customized healthcare solutions tailored to meet specific site requirements, workforce strength, and regulatory compliance
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div
                  key={index}
                  ref={el => projectCardsRef.current[index] = el}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group"
                >
                  {project.current && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        Ongoing
                      </span>
                    </div>
                  )}

                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="h-24 w-24 text-white/30" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-purple-600" />
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      <div className="text-center">
                        <Users className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-500 mb-1">Workers</p>
                        <p className="text-sm font-bold text-gray-900">{project.workersServed}+</p>
                      </div>
                      <div className="text-center">
                        <Building2 className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-500 mb-1">Type</p>
                        <p className="text-sm font-bold text-gray-900">{project.industryType}</p>
                      </div>
                    </div>

                    {/* Team Size */}
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-xs text-green-700 font-semibold mb-1">👥 Team Deployed</p>
                      <p className="text-sm text-gray-700">{project.teamSize}</p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Services Provided
                      </h4>
                      <ul className="space-y-2">
                        {project.services.slice(0, 4).map((service, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                            <span>{service}</span>
                          </li>
                        ))}
                        {project.services.length > 4 && (
                          <li className="text-sm text-blue-600 font-semibold pl-4">
                            +{project.services.length - 4} more services
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container-custom text-center text-white">
          <Award className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Looking for reliable OHC services, occupational health solutions, or on-site medical support for your project? Let's discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919790154835" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Contact Us: +91 97901 54835
            </a>
            <a 
              href="mailto:morningstarhealthcareservicess@gmail.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
