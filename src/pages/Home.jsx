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
import carousel6 from '../images/image_1/IMG-20250116-WA0130.jpg.jpeg';
import carousel7 from '../images/image_1/IMG-20250925-WA0135.jpg.jpeg';
import carousel8 from '../images/image_1/IMG-20250308-WA0191.jpg.jpeg';
import teamImg from '../images/IMG_20250918_123859.png';
import serviceImg1 from '../images/Screenshot 2025-12-13 214931.png';
import serviceImg2 from '../images/image_1/IMG-20250116-WA0130.jpg.jpeg';
import serviceImg3 from '../images/home healthcare.jpeg';
import galleryImg1 from '../images/image_1/IMG-20240110-WA0036.jpg.jpeg';
import galleryImg2 from '../images/image_1/IMG-20240110-WA0055.jpg.jpeg';
import galleryImg3 from '../images/image_1/IMG-20250116-WA0062.jpg.jpeg';
import galleryImg4 from '../images/image_1/IMG-20250116-WA0136.jpg.jpeg';
import galleryImg5 from '../images/image_1/IMG-20250120-WA0067.jpg.jpeg';
import galleryImg6 from '../images/image_1/IMG-20250308-WA0192.jpg.jpeg';
import galleryImg7 from '../images/image_1/IMG-20250309-WA0126.jpg.jpeg';
import galleryImg8 from '../images/image_1/IMG-20250814-WA0014.jpg.jpeg';
import galleryImg9 from '../images/image_1/IMG-20250913-WA0229.jpg.jpeg';
import galleryImg10 from '../images/image_1/IMG-20250925-WA0256.jpg.jpeg';
import galleryImg11 from '../images/image_1/IMG_20251026_120246_7.jpg.jpeg';
import galleryImg12 from '../images/image_1/IMG_20251026_120442_351.jpg.jpeg';
import award1 from '../images/awards/WhatsApp Image 2026-02-19 at 3.44.10 PM.jpeg';
import award2 from '../images/awards/WhatsApp Image 2026-02-19 at 3.44.11 PM (1).jpeg';
import award3 from '../images/awards/WhatsApp Image 2026-02-19 at 3.44.11 PM.jpeg';

const Home = () => {
  const carouselImages = [
    { img: carousel1, title: 'Professional Ambulance Fleet', desc: 'BLS & ALS ambulances equipped with advanced life support systems' },
    { img: carousel2, title: 'Occupational Health Centre', desc: 'On-site OHC facilities providing comprehensive workplace healthcare' },
    { img: carousel3, title: 'Emergency Medical Response', desc: '24/7 emergency services with trained medical professionals' },
    { img: carousel4, title: 'Healthcare Training Programs', desc: 'First aid, CPR, and advanced emergency response training' },
    { img: carousel5, title: 'Medical Equipment & Supplies', desc: 'Quality medical equipment for hospitals, OHCs, and home care' },
    { img: carousel6, title: 'On-Site Medical Services', desc: 'Comprehensive medical support at construction and corporate sites' },
    { img: carousel7, title: 'Health Awareness Programs', desc: 'Community health camps and preventive healthcare initiatives' },
    { img: carousel8, title: 'Professional Healthcare Team', desc: 'Qualified doctors, nurses, and emergency medical technicians' }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const featuresRef = useRef([]);
  const servicesRef = useRef([]);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((p) => (p + 1) % carouselImages.length);
          return 0;
        }
        return prev + (100 / 35); // 3500ms = 35 * 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused, carouselImages.length]);

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
              Your Trusted Partner in <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">Healthcare Excellence</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Morning Star Health Care Services - Leading integrated healthcare network providing comprehensive OHC services, occupational health, pre-employment medical examinations, ambulance services, and home healthcare solutions across India.
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
                <h3 className="font-bold text-gray-900 text-lg">Multi-City Presence</h3>
                <p className="text-gray-600 text-sm">Bangalore, Chennai, Hyderabad, Kolkata & TN</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Complete OHC Services</h3>
                <p className="text-gray-600 text-sm">Setup, management & compliance</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-xl group-hover:scale-110 transition-transform">
                <HeartPulse className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">24/7 Healthcare</h3>
                <p className="text-gray-600 text-sm">Emergency & occupational health</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              State-of-the-art medical equipment, trained professionals, and comprehensive healthcare infrastructure
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div 
            className="relative w-full max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              setProgress(0);
            }}
          >
            <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-3xl shadow-2xl group">
              {carouselImages.map((item, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    i === activeIndex 
                      ? 'opacity-100 z-10 scale-100' 
                      : 'opacity-0 z-0 scale-105'
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Caption overlay with animation */}
                  <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transition-all duration-700 ${
                    i === activeIndex 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}>
                    <div className="max-w-4xl">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={i === activeIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={i === activeIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-base md:text-lg text-white/90 drop-shadow-md"
                      >
                        {item.desc}
                      </motion.p>
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className={`absolute top-8 left-8 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-700 ${
                    i === activeIndex 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-8 opacity-0'
                  }`}>
                    <span className="text-white font-bold text-sm">
                      {String(i + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-20">
              <button
                onClick={() => {
                  setActiveIndex((p) => (p - 1 + carouselImages.length) % carouselImages.length);
                  setProgress(0);
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full w-14 h-14 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-xl opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <span className="text-3xl font-bold leading-none">‹</span>
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-20">
              <button
                onClick={() => {
                  setActiveIndex((p) => (p + 1) % carouselImages.length);
                  setProgress(0);
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full w-14 h-14 flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-xl opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <span className="text-3xl font-bold leading-none">›</span>
              </button>
            </div>

            {/* Pause/Play Button */}
            <button
              onClick={() => {
                setIsPaused(!isPaused);
                if (isPaused) setProgress(0);
              }}
              className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-md text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/30 transition-all shadow-xl opacity-0 group-hover:opacity-100"
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              )}
            </button>

            {/* Thumbnail Navigation with Progress */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
              {carouselImages.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setProgress(0);
                  }}
                  className="group/thumb relative"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`transition-all rounded-lg overflow-hidden ${
                    idx === activeIndex 
                      ? 'ring-2 ring-white w-20 h-16' 
                      : 'w-16 h-12 opacity-60 hover:opacity-100'
                  }`}>
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {idx === activeIndex && !isPaused && (
                    <div className="absolute bottom-0 left-0 h-1 bg-white rounded-full transition-all duration-100"
                         style={{ width: `${progress}%` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-3 rounded-full border-2 border-blue-200">
              <HeartPulse className="h-5 w-5 text-blue-600" />
              <span className="text-gray-800 font-semibold text-sm">Advanced Life Support</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full border-2 border-purple-200">
              <Clock className="h-5 w-5 text-purple-600" />
              <span className="text-gray-800 font-semibold text-sm">24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-full border-2 border-green-200">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-gray-800 font-semibold text-sm">Certified Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Success Highlights</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              From the beginning of our journey, we have actively strengthened health awareness and emergency preparedness across schools, colleges, corporate organizations, and construction sites.
            </p>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-200">5000+</div>
              <div className="text-white/90 font-semibold text-lg mb-2">Individuals Trained</div>
              <p className="text-white/70 text-sm">First aid & CPR training provided</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-blue-200">150+</div>
              <div className="text-white/90 font-semibold text-lg mb-2">Medical Camps</div>
              <p className="text-white/70 text-sm">Health screening conducted</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-purple-200">15000+</div>
              <div className="text-white/90 font-semibold text-lg mb-2">Medical Examinations</div>
              <p className="text-white/70 text-sm">Pre-employment & fitness tests</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-emerald-200">6</div>
              <div className="text-white/90 font-semibold text-lg mb-2">Awards Received</div>
              <p className="text-white/70 text-sm">Excellence in healthcare</p>
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
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-xl">
              <p className="text-4xl font-bold mb-1">2021</p>
              <p className="text-sm opacity-90">Established</p>
            </div>
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-xl hidden lg:block">
              <p className="text-3xl font-bold mb-1">5</p>
              <p className="text-xs opacity-90">Cities</p>
            </div>
          </div>
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              About Morning Star Health Care
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Leading Integrated Healthcare Network Across India
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Founded in Kanyakumari in 2021</strong> by <strong>Dr. Subash David BSC, MBA, PHIL (Founder & CEO)</strong>, Morning Star Health Care Services is registered under the Udyam Registration of the Government of Tamil Nadu with valid <strong>MSME and GST Certificates</strong>.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We expanded to <strong>Bangalore and Chennai in 2022</strong>, <strong>Hyderabad in 2024</strong>, and <strong>Kolkata in 2025</strong>, establishing ourselves as a leading integrated healthcare network operating across South India.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in <strong>OHC setup and management</strong>, industrial and corporate health services, on-site medical staffing, pre-employment and periodic medical examinations, health check-ups, emergency care, and first-aid services with a strong focus on employee health, workplace safety, and statutory compliance.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Trusted by Leading Organizations
              </h4>
              <p className="text-gray-700 text-sm">
                L&T, Vestian, BCD Construction, Voltas Enterprises, Alufit International, Sona Infrabuil Pvt Ltd, and many more across India.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              {['Occupational Health Centre Services', 'Pre-Medical & Employment Exams', 'First Aid & CPR Training Programs', 'BLS & ALS Ambulance Services', 'Medical Equipment & Medicine Supply', 'Home Healthcare Services'].map((item, i) => (
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
              <Button variant="primary" className="gap-2">
                Discover Our Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
                Awards & Recognition
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Honored by esteemed organizations for our commitment to quality, ethics, and excellence in healthcare services
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Featured Awards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={award1} 
                  alt="Award Certificate" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">Official Award</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Healthcare Excellence</h3>
                <p className="text-purple-600 font-semibold mb-2 text-sm">Award Certificate - 2024</p>
                <p className="text-gray-600 text-sm">Recognition for outstanding service delivery and commitment to healthcare excellence</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={award2} 
                  alt="Award Certificate" 
                  className="w-full h-75 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">Official Award</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Service Recognition</h3>
                <p className="text-purple-600 font-semibold mb-2 text-sm">Honor Certificate - 2024</p>
                <p className="text-gray-600 text-sm">Acknowledged for quality healthcare services and professional excellence</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={award3} 
                  alt="Award Certificate" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-bold text-sm">Official Award</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Excellence Award</h3>
                <p className="text-purple-600 font-semibold mb-2 text-sm">Achievement Award - 2024</p>
                <p className="text-gray-600 text-sm">Honored for exceptional contributions to healthcare and community service</p>
              </div>
            </div>
          </div>

          {/* Additional Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-yellow-400">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Young Achiever Award</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">Aram Seiya Virumbu - 2023</p>
              <p className="text-gray-600 text-sm text-center">Outstanding leadership and significant contributions to healthcare sector</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-blue-400">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Best Health Care Services</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">Thanga Tamil Award - 2023</p>
              <p className="text-gray-600 text-sm text-center">Ethical, patient-centric, high-quality healthcare service delivery</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Most Eminent Award</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">India's Healthcare & Fitness - 2024</p>
              <p className="text-gray-600 text-sm text-center">Excellence in healthcare management and wellness initiatives</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-red-400">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Excellence in Health Care</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">Neethiyin Kural Award - 2024</p>
              <p className="text-gray-600 text-sm text-center">Commitment to ethical practices and community healthcare</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-purple-400">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Best Training Centre</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">Highwood Entertainment - 2024</p>
              <p className="text-gray-600 text-sm text-center">Excellence in first aid and emergency response training</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-orange-400">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 text-center">Best Health Care Services</h3>
              <p className="text-center text-purple-600 font-semibold mb-3">Highwood Entertainment - 2025</p>
              <p className="text-gray-600 text-sm text-center">Consistent performance and integrated healthcare delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Trusted by leading organizations across India for reliable healthcare solutions
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'L&T Construction',
                role: 'Safety Manager',
                text: 'Morning Star Health Care has been instrumental in maintaining excellent health standards at our construction sites. Their professional OHC services and trained medical staff have ensured quick response to emergencies and compliance with all safety regulations.',
                rating: 5
              },
              {
                name: 'Vestian Services',
                role: 'HR Director',
                text: 'The pre-employment medical examinations and periodic health check-ups conducted by Morning Star are thorough, efficient, and well-documented. Their team is professional, punctual, and maintains high standards of medical care.',
                rating: 5
              },
              {
                name: 'Voltas Limited',
                role: 'Operations Head',
                text: 'We have been partnering with Morning Star Health Care for our occupational health requirements. Their 24/7 ambulance services and on-site medical support have been exceptional. Highly recommended for any organization.',
                rating: 5
              },
              {
                name: 'BCD Construction',
                role: 'Site Manager',
                text: 'The first aid training programs provided by Morning Star have equipped our workers with essential life-saving skills. The hands-on approach and practical demonstrations made the training highly effective.',
                rating: 5
              },
              {
                name: 'Corporate Client',
                role: 'Facility Manager',
                text: 'Their home healthcare services have been a blessing for our employees. The nurses and caretakers are compassionate, skilled, and provide excellent care. The medicine delivery service is also very convenient.',
                rating: 5
              },
              {
                name: 'Industrial Client',
                role: 'EHS Officer',
                text: 'Morning Star\'s advanced first aid training for EHS officers was comprehensive and practical. The training covered all essential emergency scenarios and equipped us with the confidence to handle critical situations.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
                Our Nationwide Presence
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Strategic expansion across major metropolitan cities ensuring accessible healthcare services nationwide
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏙️</div>
              <h3 className="text-2xl font-bold mb-2">Bangalore</h3>
              <p className="text-white/90 text-sm mb-3">Established 2022</p>
              <div className="h-1 w-16 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
              <h3 className="text-2xl font-bold mb-2">Chennai</h3>
              <p className="text-white/90 text-sm mb-3">Established 2022</p>
              <div className="h-1 w-16 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Hyderabad</h3>
              <p className="text-white/90 text-sm mb-3">Established 2024</p>
              <div className="h-1 w-16 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌉</div>
              <h3 className="text-2xl font-bold mb-2">Kolkata</h3>
              <p className="text-white/90 text-sm mb-3">Established 2025</p>
              <div className="h-1 w-16 bg-white/50 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏖️</div>
              <h3 className="text-2xl font-bold mb-2">Tamil Nadu</h3>
              <p className="text-white/90 text-sm mb-3">Founded 2021</p>
              <div className="h-1 w-16 bg-white/50 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 bg-gradient-to-r from-slate-100 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Trusted by Leading Organizations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering reliable occupational health services to construction, infrastructure, and corporate organizations across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['L&T Building & Construction', 'Vestian', 'Voltas Limited (TATA)', 'Alufit International', 'BCD Construction', 'Sona Infrabuild', 'Sobha Projects', 'JPMC India'].map((client, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center text-center h-32 group"
              >
                <div>
                  <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{client}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 font-semibold mb-4">Hospital Partners & Training Institutes</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span className="bg-white px-4 py-2 rounded-full shadow">Prolife Hospital, Hebbal</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">Maya Multi speciality Hospital</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">St. John Ambulance Training</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">Red Cross Training Centre</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">Universal Pharmacy</span>
              <span className="bg-white px-4 py-2 rounded-full shadow">Apollo Pharmacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Our Work in Action
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Glimpses of our healthcare services, training programs, OHC facilities, and dedicated team serving communities across India
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { img: galleryImg1, title: 'Medical Camp' },
              { img: galleryImg2, title: 'Training Session' },
              { img: galleryImg3, title: 'OHC Facility' },
              { img: galleryImg4, title: 'Health Screening' },
              { img: galleryImg5, title: 'Emergency Response' },
              { img: galleryImg6, title: 'Team at Work' },
              { img: galleryImg7, title: 'First Aid Training' },
              { img: galleryImg8, title: 'Medical Equipment' },
              { img: galleryImg9, title: 'Health Awareness' },
              { img: galleryImg10, title: 'Corporate Service' },
              { img: galleryImg11, title: 'Healthcare Team' },
              { img: galleryImg12, title: 'On-site Support' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                  </div>
                </div>
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="primary" className="gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
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
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From OHC setup and management to emergency ambulance services, pre-employment medical examinations, training programs, medical equipment supply, and complete home healthcare - we deliver integrated healthcare solutions tailored to meet every need with safety, compliance, and professional care.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Occupational Health Centre",
              desc: "Complete OHC setup, management, and on-site medical staffing with doctors, nurses, and first aiders ensuring workplace health compliance and employee well-being.",
              img: serviceImg1,
              gradient: "from-red-500 to-orange-500"
            },
            {
              title: "Training Programs",
              desc: "First aid, CPR, advanced emergency training for EHS officers, construction workers, road safety, health education, and psychological support awareness programs.",
              img: serviceImg2,
              size: 'w-200 h-auto',
              gradient: "from-blue-500 to-cyan-500"
           },
            {
              title: "Home Healthcare Services",
              desc: "Doctor consultations, skilled nursing care, and caretaker services at home with medication management, wound care, and post-surgical support for comprehensive home-based medical care.",
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

      {/* Final Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you need OHC services, training programs, ambulance support, or home healthcare solutions - we're here to provide reliable, professional, and affordable healthcare services tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href="tel:+919790154835">
                <Button variant="secondary" size="lg" className="gap-3 bg-white text-blue-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-4">
                  <Phone className="h-6 w-6" />
                  +91 97901 54835
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 text-white text-lg px-8 py-4">
                  Request a Quote
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-white/80 text-sm">Round-the-clock emergency medical response</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Certified & Compliant</h3>
                <p className="text-white/80 text-sm">MSME & GST certified with Udyam registration</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Trusted by 100+</h3>
                <p className="text-white/80 text-sm">Leading organizations across India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
