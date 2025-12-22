import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, HeartPulse, Phone, Zap, Award, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import carousel1 from '../images/morningstarhealthcare-18-09-2025-0001.webp';
import carousel2 from '../images/Screenshot 2025-12-13 103115.png';
import carousel3 from '../images/morningstarhealthcare-18-09-2025-0003.webp';
import carousel4 from '../images/morningstarhealthcare-18-09-2025-0004.webp';
import carousel5 from '../images/morningstarhealthcare-18-09-2025-0005.webp';
import teamImg from '../images/IMG_20250918_123859.png';
import serviceImg1 from '../images/Screenshot 2025-12-13 214931.png';
import serviceImg2 from '../images/Screenshot 2025-12-13 215120.png';
import serviceImg3 from '../images/Screenshot 2025-12-13 215405.png';

const Home = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const [activeIndex, setActiveIndex] = useState(0);
  const featuresRef = useRef([]);
  const servicesRef = useRef([]);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

 useEffect(() => {
  const ctx = gsap.context(() => {

    // ✅ SERVICES CARDS
    servicesRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          scale: 0.7,
          rotation: index % 2 === 0 ? -5 : 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
        }
      );
    });

    // ✅ FEATURE LIST
    featuresRef.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
        }
      );
    });

  });

  return () => ctx.revert(); // 🔥 IMPORTANT
}, []);


  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section with gradient */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?q=80&w=2070&auto=format&fit=crop" 
            alt="Ambulance Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-900/90 to-pink-900/80"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-40 right-40 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-20 w-2 h-2 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-6 shadow-lg"
            >
              <Zap className="h-4 w-4" />
              24/7 Emergency Medical Response
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Every Second Counts when <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">Life is at Stake</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Morning Star Health Care provides rapid, professional ambulance services with certified paramedics and state-of-the-art medical equipment. Available 24/7 for emergency response and patient transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:911">
                <Button variant="emergency" size="lg" className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                  Call Emergency Now
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/30">
                  View Services
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip with icons */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Rapid Response</h3>
                <p className="text-gray-600 text-sm">Under 8 minutes average</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Certified Team</h3>
                <p className="text-gray-600 text-sm">100+ medical professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Advanced Care</h3>
                <p className="text-gray-600 text-sm">Latest medical equipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Our Fleet & Facilities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-3xl shadow-2xl">
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
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <button
                onClick={() => setActiveIndex((p) => (p - 1 + images.length) % images.length)}
                className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-xl"
                aria-label="Previous slide"
              >
                <span className="text-2xl font-bold">‹</span>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <button
                onClick={() => setActiveIndex((p) => (p + 1) % images.length)}
                className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-xl"
                aria-label="Next slide"
              >
                <span className="text-2xl font-bold">›</span>
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all rounded-full ${
                    idx === activeIndex 
                      ? 'bg-white w-10 h-3' 
                      : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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
              At Morning Star Health Care, we understand that medical emergencies can happen at any time. Our mission is to provide immediate, high-quality pre-hospital care and safe medical transportation to patients in need. With over 7 years of dedicated service, we've become a trusted name in emergency medical services.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our fleet of modern ambulances is equipped with cutting-edge medical technology, and our team of certified paramedics and EMTs undergo continuous training to handle critical situations with expertise and compassion.
            </p>
            <ul className="space-y-4 mb-8">
              {['24/7 Emergency Response', 'GPS-Enabled Rapid Dispatch', 'State-of-the-art Medical Equipment', 'Certified Paramedics & EMTs', 'Compassionate Patient Care', 'Affordable Services'].map((item, i) => (
                <li 
                  key={i} 
                  ref={el => featuresRef.current[i] = el}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-custom text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Comprehensive Medical Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From emergency response to scheduled patient transfers, we provide complete medical transportation solutions tailored to meet every patient's needs with safety, comfort, and professional care.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Emergency Ambulance",
              desc: "Rapid response for critical situations with advanced life support capabilities, cardiac monitors, and emergency medications.",
              img: serviceImg1,
              gradient: "from-red-500 to-orange-500"
            },
            {
              title: "ICU On Wheels",
              desc: "Specialized critical care transport with ventilators, infusion pumps, and experienced intensivists for high-acuity patients.",
              img: serviceImg2,
              size: 'w-200 h-auto',
              gradient: "from-blue-500 to-cyan-500"
           },
            {
              title: "Patient Transfer",
              desc: "Safe and comfortable non-emergency transport between hospitals, nursing facilities, or home with trained medical attendants.",
              img: serviceImg3,
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((service, idx) => (
            <div 
              key={idx} 
              ref={el => servicesRef.current[idx] = el}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className={`w-full h-full ${service.size === 'auto' ? 'object-contain' : 'object-cover'} group-hover:scale-110 transition-transform duration-700`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
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
