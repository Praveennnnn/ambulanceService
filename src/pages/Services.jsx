import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Baby, Users, Calendar, Shield, Clock, HeartPulse } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import serviceImg1 from '../images/Screenshot 2025-12-13 214931.png';
import serviceImg2 from '../images/Screenshot 2025-12-13 215120.png';
import serviceImg3 from '../images/Screenshot 2025-12-13 215405.png';
import serviceImg4 from '../images/morningstarhealthcare-18-09-2025-0001.webp';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceCardsRef = useRef([]);

 useEffect(() => {
  const ctx = gsap.context(() => {

    serviceCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

  });

  return () => ctx.revert(); // ✅ REQUIRED
}, []);

  const services = [
    {
      title: 'Basic Life Support (BLS)',
      icon: Activity,
      image: serviceImg1,
      description: 'Our BLS ambulances provide essential emergency medical care and safe transportation for non-critical patients requiring medical attention during transit.',
      features: [
        'Certified EMTs and Basic Paramedics',
        'Oxygen therapy and airway management',
        'Blood pressure and vital sign monitoring',
        'First aid and wound care supplies',
        'Spinal immobilization equipment',
        'Automated External Defibrillator (AED)',
        'Patient transfer assistance',
        'Comfortable stretcher and seating'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Advanced Life Support (ALS)',
      icon: HeartPulse,
      image: serviceImg2,
      description: 'Equipped with advanced medical technology and staffed by experienced paramedics, our ALS ambulances handle critical emergencies requiring intensive pre-hospital care.',
      features: [
        'Advanced Cardiac Life Support trained paramedics',
        'Cardiac monitors and 12-lead ECG',
        'Defibrillator and external pacing',
        'Advanced airway management equipment',
        'IV therapy and emergency medications',
        'Ventilator support',
        'Continuous vital signs monitoring',
        'Trauma and emergency kits'
      ],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Neonatal & Pediatric Transport',
      icon: Baby,
      image: serviceImg3,
      description: 'Specialized ambulances designed for the safe transport of newborns and children, with pediatric-trained medical staff and child-appropriate equipment.',
      features: [
        'Neonatal and pediatric specialists',
        'Infant incubator with temperature control',
        'Pediatric ventilator and oxygen systems',
        'Specialized monitoring equipment',
        'IV pumps for neonatal medication',
        'Phototherapy for jaundice treatment',
        'Child-friendly environment',
        'Parent/guardian accommodation'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Event Medical Coverage',
      icon: Users,
      image: serviceImg4,
      description: 'Professional standby ambulance services for sporting events, concerts, weddings, corporate gatherings, and public functions ensuring immediate medical response.',
      features: [
        'On-site medical team with ambulance',
        'First aid station setup',
        'Immediate emergency response',
        'Event risk assessment',
        'Crowd medical management',
        'Coordination with event organizers',
        'Transport to hospital if needed',
        'Post-event medical reporting'
      ],
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="w-[70%] mx-auto text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="h-4 w-4" />
              Comprehensive Medical Transportation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">Premium</span> Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From emergency response to specialized medical transport, we offer complete ambulance solutions with state-of-the-art equipment and highly trained medical professionals.
            </p>
            <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mt-8"></div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-[70%] mx-auto space-y-24 py-16">
        {services.map((service, index) => (
          <div
            key={index}
            ref={el => serviceCardsRef.current[index] = el}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-gradient-to-br ${
              index % 4 === 0 ? 'from-blue-50 to-cyan-50' :
              index % 4 === 1 ? 'from-purple-50 to-pink-50' :
              index % 4 === 2 ? 'from-orange-50 to-red-50' :
              'from-green-50 to-emerald-50'
            } p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500`}></div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg relative z-10"
              />
              <div className={`absolute -top-4 -right-4 bg-gradient-to-br ${service.gradient} p-4 rounded-xl shadow-xl z-20`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 group-hover:scale-150 transition-transform`}></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-700">Pre-booking Available</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="w-[70%] mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 text-white/90">Our team is ready to respond 24/7 for all your medical transportation needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:911" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <HeartPulse className="h-5 w-5" />
              Call Emergency: 911
            </a>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Book Ambulance: +91 97901 54835
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
