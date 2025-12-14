import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, HeartPulse, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

import carousel1 from '../images/morningstarhealthcare-18-09-2025-0001.webp';
import carousel2 from '../images/Screenshot 2025-12-13 103115.png';
import carousel3 from '../images/morningstarhealthcare-18-09-2025-0003.webp';
import carousel4 from '../images/morningstarhealthcare-18-09-2025-0004.webp';
import carousel5 from '../images/morningstarhealthcare-18-09-2025-0005.webp';
import teamImg from '../images/IMG_20250918_123859.png';
import serviceImg1 from '../images/Screenshot 2025-12-13 214931.png';
import serviceImg2 from '../images/Screenshot 2025-12-13 215120.png';
import serviceImg3 from '../images/Screenshot 2025-12-13 215405.png';
import { style } from 'framer-motion/client';



const Home = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambulance Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-600/30 border border-primary-400 text-primary-200 text-sm font-semibold mb-6">
              24/7 Emergency Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Every Second Counts when <span className="text-primary-400">Life is at Stake</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Morning Star Health Care provides rapid, professional ambulance services equipped with advanced life support systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:911">
                <Button variant="emergency" size="lg" className="w-full sm:w-auto gap-2">
                  <Phone className="h-5 w-5" />
                  Call Emergency Now
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
                  View Services
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
    <div className="relative w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mx-auto">
  <div className="relative h-[60vh] sm:h-[60vh] md:h-[60vh] lg:h-[65vh] overflow-hidden rounded-base">
    {([carousel1, carousel2, carousel3, carousel4, carousel5]).map((img, i) => (
      <div
        key={i}
        className={`absolute inset-0 transition-opacity duration-700 ease-linear ${
          i === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <img
          src={img}
          alt={`Slide ${i + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  {/* Controls */}
  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
    <button
      onClick={() => setActiveIndex((p) => (p - 1 + images.length) % images.length)}
      className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
      aria-label="Previous slide"
    >
      ‹
    </button>
  </div>

  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
    <button
      onClick={() => setActiveIndex((p) => (p + 1) % images.length)}
      className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
      aria-label="Next slide"
    >
      ›
    </button>
  </div>
</div>


      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
               src={teamImg}
              alt="Medical Team" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-8 rounded-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">7+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-primary-600 font-bold uppercase tracking-wider mb-2">About Morning Star</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Trusted Partner in Medical Emergencies</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Morning Star Health Care, we understand that medical emergencies can happen at any time. Our mission is to provide immediate, high-quality pre-hospital care and transportation to patients in need.
            </p>
            <ul className="space-y-4 mb-8">
              {['24/7 Availability', 'State-of-the-art Equipment', 'Compassionate Care'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button variant="primary">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive medical transportation solutions designed to meet every patient's specific needs with safety and comfort.
          </p>
        </div>
        
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Emergency Ambulance",
              style: "shadow-red-200",
              desc: "Rapid response for critical situations with full life support capabilities.",
              img: serviceImg1
            },
            {
              title: "ICU On Wheels",
              desc: "Specialized transport for critical patients requiring intensive monitoring.",
              img: serviceImg2,
              size: 'w-200 h-auto'
           },
            {
              title: "Patient Transfer",
              desc: "Safe and comfortable non-emergency transport between hospitals or home.",
                img: serviceImg3,
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className={`w-full h-full ${service.size === 'auto' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
