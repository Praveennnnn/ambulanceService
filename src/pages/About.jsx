import React, { useEffect, useRef } from 'react';
import { Users, Target, Award, Sparkles, Heart, Zap, Shield, Clock, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef(null);
  const missionCardsRef = useRef([]);
  const whyChooseCardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
  const ctx = gsap.context(() => {

    /* ================= HEADER ================= */
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    /* ================= MISSION CARDS ================= */
    missionCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotation: 5 },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    /* ================= WHY CHOOSE US ================= */
    whyChooseCardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    /* ================= STATS ================= */
    statsRef.current.forEach((stat, index) => {
      if (!stat) return;

      const target = stat.querySelector(".stat-number");
      if (!target) return;

      const finalValue = parseInt(target.dataset.value);
      const suffix = target.dataset.suffix || "";

      // Counter animation
      gsap.fromTo(
        target,
        { innerHTML: 0 },
        {
          innerHTML: finalValue,
          duration: 3,
          delay: index * 0.2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            const val = Math.ceil(this.targets()[0].innerHTML);
            target.textContent =
              finalValue >= 1000
                ? `${Math.floor(val / 1000)}k${suffix}`
                : `${val}${suffix}`;
          },
        }
      );

      // Stat card entrance
      gsap.fromTo(
        stat,
        { opacity: 0, scale: 0.5, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

  });

  return () => ctx.revert(); // 🔥 REQUIRED for React 18
}, []);


  return (
    <div className="overflow-hidden">
      {/* Header with gradient animation */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 text-center text-white" ref={headerRef}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">Excellence in Emergency Care</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-white">
            About Morning Star Health Care Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Founded in 2021, we are a leading integrated healthcare network delivering comprehensive OHC services, occupational health solutions, and medical services across Bangalore, Chennai, Hyderabad, Kolkata, and Tamil Nadu.
          </p>
        </div>
      </div>

      {/* Mission Vision with colorful cards */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Our Foundation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={el => missionCardsRef.current[0] = el}
              className="group p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To provide affordable, high-quality healthcare and medical services accessible to all, while maintaining the highest standards of clinical excellence, ethics, and compassion. We are committed to promoting preventive healthcare, occupational health and safety, and employee well-being through reliable, patient-centric, and industry-focused solutions.
                </p>
              </div>
            </div>

            <div 
              ref={el => missionCardsRef.current[1] = el}
              className="group p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-400 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  To be the preferred and trusted choice for healthcare and medical service provision by saving lives, enriching well-being, and enhancing quality of life. We envision accessible, affordable, and high-quality healthcare reaching every individual and workplace across India.
                </p>
              </div>
            </div>

            <div 
              ref={el => missionCardsRef.current[2] = el}
              className="group p-8 rounded-3xl bg-gradient-to-br from-orange-500 to-red-400 text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                <p className="text-white/90 leading-relaxed">
                  Founded by Dr. Subash David BSC, MBA, PHIL in Kanyakumari (2021), expanded to Bangalore & Chennai (2022), Hyderabad (2024), and Kolkata (2025). Registered under Udyam with valid MSME and GST certificates, partnering with leading organizations like L&T, Vestian, BCD Construction, and Voltas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us - Colorful grid */}
      <div className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Why Choose Morning Star Health Care
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We deliver integrated healthcare solutions combining occupational health expertise, compliance management, and compassionate medical care tailored for industries and individuals.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              ref={el => whyChooseCardsRef.current[0] = el}
              className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-City Presence</h3>
              <p className="text-gray-700">Operating across Bangalore, Chennai, Hyderabad, Kolkata, and Tamil Nadu with strategic expansion supporting nationwide growth.</p>
            </div>

            <div 
              ref={el => whyChooseCardsRef.current[1] = el}
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comprehensive Services</h3>
              <p className="text-gray-700">Complete OHC management, pre-employment exams, training programs, ambulance services, medical equipment and medicine supply, and home healthcare.</p>
            </div>

            <div 
              ref={el => whyChooseCardsRef.current[2] = el}
              className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Expertise</h3>
              <p className="text-gray-700">Proven track record with leading corporates including L&T, Vestian, BCD Construction, Voltas Enterprises, Alufit International, and Sona Infrabuil Pvt Ltd.</p>
            </div>

            <div 
              ref={el => whyChooseCardsRef.current[3] = el}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Statutory Compliance</h3>
              <p className="text-gray-700">MSME and GST certified with Udyam registration ensuring adherence to quality standards and regulatory requirements.</p>
            </div>

            <div 
              ref={el => whyChooseCardsRef.current[4] = el}
              className="group bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Quality & Affordability</h3>
              <p className="text-gray-700">Efficient, accessible, high-quality, and affordable healthcare solutions with strong focus on employee health and workplace safety.</p>
            </div>

            <div 
              ref={el => whyChooseCardsRef.current[5] = el}
              className="group bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Patient-Centric Approach</h3>
              <p className="text-gray-700">Dedicated to workplace health surveillance, preventive healthcare, and delivering timely, efficient medical services to individuals, industries, and organizations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats - Animated counters with vibrant gradient */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div ref={el => statsRef.current[0] = el} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-red-500/50 cursor-pointer">
                <div className="text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-300">2021</div>
                <div className="text-white/80 font-medium transition-colors duration-500 group-hover:text-white">Founded</div>
                <div className="mt-3 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-bounce">🏥</div>
              </div>
            </div>
            
            <div ref={el => statsRef.current[1] = el} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer">
                <div className="text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-300">5</div>
                <div className="text-white/80 font-medium transition-colors duration-500 group-hover:text-white">Major Cities</div>
                <div className="mt-3 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-bounce">📍</div>
              </div>
            </div>
            
            <div ref={el => statsRef.current[2] = el} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer">
                <div className="text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 group-hover:text-pink-300">7</div>
                <div className="text-white/80 font-medium transition-colors duration-500 group-hover:text-white">Core Services</div>
                <div className="mt-3 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-bounce">⭐</div>
              </div>
            </div>
            
            <div ref={el => statsRef.current[3] = el} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-700 hover:scale-125 hover:shadow-2xl hover:shadow-green-500/50 cursor-pointer">
                <div className="text-5xl font-bold mb-2 transition-all duration-500 group-hover:scale-110 group-hover:text-green-300">24/7</div>
                <div className="text-white/80 font-medium transition-colors duration-500 group-hover:text-white">Healthcare</div>
                <div className="mt-3 text-3xl transition-transform duration-500 group-hover:scale-125 group-hover:animate-bounce">⏰</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
