import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, Baby, Users, Calendar, Shield, Clock, HeartPulse, CheckCircle, ArrowRight, HelpCircle, Target, TrendingUp, Award, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import serviceImg1 from '../images/image_2/IMG_20251026_120100_8.jpg.jpeg';
import serviceImg2 from '../images/morningstarhealthcare-18-09-2025-0001.webp';
import serviceImg3 from '../images/subin.jpeg';
import serviceImg4 from '../images/image_2/IMG_20260219_145847.jpg.jpeg';
import serviceImg5 from '../images/Medical Equipment Supply_1.png';
import serviceImg6 from '../images/Medicine Supply.jpg';
import serviceImg7 from '../images/home healthcare.jpeg';


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
      title: 'Pre-Medical Examination',
      icon: Activity,
      image: serviceImg1,
      description: 'Comprehensive health assessments designed to assess overall health and fitness for employment or specific job roles. We conduct thorough medical evaluations in compliance with organizational and statutory requirements, helping employers ensure a healthy and capable workforce.',
      simpleDesc: '🏥 Think of this as a complete health check-up before joining a job or for regular workplace health monitoring. We check your fitness and provide official medical certificates.',
      subServices: [
        {
          name: 'Medical Fitness Certificate',
          desc: 'Authorized medical fitness certificates issued after detailed clinical evaluation and necessary investigations for employment, industrial work, travel, insurance, and other official purposes.'
        },
        {
          name: 'Medical Camps',
          desc: 'Organized medical camps for corporates, industries, institutions, and communities offering basic health screening, doctor consultations, and health awareness programs promoting preventive healthcare.'
        },
        {
          name: 'Blood Grouping Test',
          desc: 'Accurate blood grouping services using standard medical protocols, essential for employment records, emergency preparedness, and personal health documentation.'
        },
        {
          name: 'Laboratory Tests',
          desc: 'Wide range of routine and specialized laboratory investigations supporting accurate diagnosis and health monitoring with timely reporting and reliable results.'
        }
      ],
      features: [
        'Pre-employment medical examinations',
        'Medical fitness certificates',
        'Medical camps for corporates & industries',
        'Blood grouping tests',
        'Comprehensive laboratory tests',
        'Health screening programs',
        'Statutory compliance evaluations',
        'Accurate reporting and documentation'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Training Programs',
      icon: Users,
      image: serviceImg2,
      description: 'Professional training programs equipping participants with essential life-saving skills for medical emergencies. Our comprehensive training covers first aid, CPR, advanced emergency response, and health awareness, delivered through hands-on practice and practical demonstrations.',
      simpleDesc: '👨‍🏫 Learn how to save lives! We teach first aid, CPR, and safety skills through hands-on training. Perfect for employees, workers, and anyone who wants to be prepared for emergencies.',
      subServices: [
        {
          name: 'First Aid Training',
          desc: 'Essential skills to manage medical emergencies such as injuries, burns, bleeding, and sudden illness with hands-on practice enabling immediate and effective care until professional help arrives.'
        },
        {
          name: 'CPR Training',
          desc: 'Comprehensive training teaching life-saving techniques for cardiac arrest and breathing emergencies, including chest compression methods, rescue breathing, and AED operation.'
        },
        {
          name: 'Advanced First Aid for EHS Officers',
          desc: 'Specially designed for professionals and EHS officers working in high-risk environments, covering advanced patient assessment, trauma management, CPR, AED use, and emergency response leadership.'
        },
        {
          name: 'Construction Worker Safety Training',
          desc: 'Practical first aid training addressing high-risk worksite hazards including injury response, bleeding control, fractures, falls, electrical injuries, and heat stress management.'
        },
        {
          name: 'Health Awareness Programs',
          desc: 'Road safety, health education, HIV/AIDS awareness, blood and organ donation awareness, and psychological support programs promoting preventive healthcare and responsible behavior.'
        }
      ],
      features: [
        'First aid training with hands-on practice',
        'CPR training and AED operation',
        'Advanced first aid for EHS officers',
        'Construction worker safety training',
        'Road safety awareness programs',
        'Health education and wellness',
        'HIV/AIDS and blood donation awareness',
        'Psychological support awareness'
      ],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Para Medical Services',
      icon: Users,
      image: serviceImg3,
      description: 'Skilled medical support through trained healthcare professionals who assist in patient care, emergency response, and day-to-day medical operations across workplaces, sites, and communities with focus on workplace health surveillance and compliance.',
      simpleDesc: '👨‍⚕️ Need medical staff? We provide qualified doctors, nurses, and caretakers for your workplace, construction site, or home. Professional healthcare team ready to serve.',
      subServices: [
        {
          name: 'Doctors',
          desc: 'Qualified and experienced doctors for OHC operations, clinical consultations, medical examinations, diagnosis, treatment, emergency care, workplace health surveillance, and medical reporting.'
        },
        {
          name: 'Nurses',
          desc: 'Registered nurses providing comprehensive nursing care including patient monitoring, first aid, medication administration, wound care, and accurate medical record keeping.'
        },
        {
          name: 'First Aiders',
          desc: 'Certified first aiders deployed to provide immediate medical assistance during injuries and emergencies, trained to stabilize patients and coordinate with medical teams.'
        },
        {
          name: 'Ambulance Drivers',
          desc: 'Professionally trained ambulance drivers with expertise in safe driving, emergency response, and patient handling ensuring timely and secure transportation.'
        },
        {
          name: 'Caretakers (Home Health Care)',
          desc: 'Compassionate caretakers providing home health care support including personal hygiene assistance, mobility support, feeding support, medication reminders, and post-hospitalization care.'
        }
      ],
      features: [
        'Qualified doctors for OHC operations',
        'Registered  nurses for patient care',
        'Certified first aiders for emergencies',
        'Professional ambulance drivers',
        'Home healthcare caretakers',
        'Medical surveillance and reporting',
        'Emergency response coordination',
        'Continuous medical monitoring'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Ambulance Services',
      icon: HeartPulse,
      image: serviceImg4,
      description: '24/7 emergency and non-emergency medical response with strong focus on patient safety, rapid response, and continuity of care. All ambulances are maintained to medical standards and operated by trained drivers and medical staff enabling effective pre-hospital care.',
      simpleDesc: '🚑 Emergency? Call us anytime! We have fully-equipped ambulances with trained staff available 24/7. Quick response for emergencies and safe patient transfers.',
      subServices: [
        {
          name: 'BLS Ambulance (Basic Life Support)',
          desc: 'Essential pre-hospital care for stable and non-critical patients equipped with oxygen systems, suction units, basic airway devices, splints, spinal boards, and first aid kits staffed by trained EMTs.'
        },
        {
          name: 'ALS Ambulance (Advanced Life Support)',
          desc: 'Advanced life-saving medical care for critical emergencies fully equipped with cardiac monitors, defibrillators, ventilators, infusion pumps, advanced airway tools, and emergency medications operated by highly trained paramedics.'
        },
        {
          name: 'Ambulance for OHC',
          desc: 'Dedicated ambulance services for Occupational Health Centres ensuring immediate medical response within industrial and corporate premises with 24/7 readiness and trained emergency medical staff.'
        },
        {
          name: 'Patient Transport Ambulance',
          desc: 'Safe and comfortable patient transfer between homes, hospitals, diagnostic centres, and rehabilitation facilities with continuous monitoring and compassionate support throughout the journey.'
        }
      ],
      features: [
        'BLS ambulances with basic life support',
        'ALS ambulances with advanced care',
        'Dedicated ambulances for OHC sites',
        'Patient transport services',
        'Trained emergency medical staff',
        '24/7 emergency response',
        'Cardiac monitors and defibrillators',
        'Advanced airway management'
      ],
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Medical Equipment Supply',
      icon: Shield,
      image: serviceImg5,
      description: 'Quality medical equipment supply to hospitals, clinics, Occupational Health Centres, and home healthcare settings. Our equipment meets standard safety and quality requirements ensuring reliability, accuracy, and long-term performance for effective patient care.',
      simpleDesc: '🩺 Need medical equipment? From BP monitors to hospital beds, wheelchairs to oxygen machines - we supply quality medical equipment for clinics, workplaces, and homes.',
      subServices: [
        {
          name: 'Monitoring Equipment',
          desc: 'Advanced monitoring equipment such as BP monitors, pulse oximeters, ECG machines, glucometers, and patient vital sign monitors supporting continuous observation and early detection.'
        },
        {
          name: 'Surgical Instruments',
          desc: 'Comprehensive range of surgical instruments sourced to meet clinical and procedural standards for general surgery, emergency care, wound management, and clinical interventions.'
        },
        {
          name: 'Durable Medical Equipment (OHC & Home Care)',
          desc: 'Hospital beds, examination tables, wheelchairs, stretchers, oxygen concentrators, suction machines, nebulizers, patient monitors, walkers, and mobility aids for OHCs and home healthcare environments.'
        }
      ],
      features: [
        'BP monitors and pulse oximeters',
        'ECG machines and glucometers',
        'Surgical instruments and tools',
        'Hospital beds and examination tables',
        'Wheelchairs and stretchers',
        'Oxygen concentrators and cylinders',
        'Suction machines and nebulizers',
        'Patient monitoring equipment'
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Medicine Supply',
      icon: Activity,
      image: serviceImg6,
      description: 'Dependable supply of first aid medicines and essential medical consumables supporting immediate care during minor injuries and health incidents, as well as comprehensive home medicine delivery covering all types of prescribed medications.',
      simpleDesc: '💊 Medicines delivered to your door! We supply first aid medicines for workplaces and deliver all types of medicines to your home. Convenient and reliable.',
      subServices: [
        {
          name: 'Medicine Supply for OHC',
          desc: 'Continuous availability of statutory first aid medicines and consumables required at Occupational Health Centres including bandages, sterile dressings, antiseptics, pain-relief medicines, and emergency care items.'
        },
        {
          name: 'Medicine Supply for Home',
          desc: 'Comprehensive home medicine supply covering general medicines, chronic care medications (diabetes, blood pressure, cardiac), elderly care medicines, pediatric medicines, and post-hospitalization medicines.'
        },
        {
          name: 'Home Delivery',
          desc: 'Convenient home delivery service for medicines and medical equipment ensuring timely and safe access with proper handling, storage, and delivery standards maintaining treatment continuity.'
        }
      ],
      features: [
        'First aid medicines and consumables',
        'OHC statutory medicine supply',
        'Home delivery of all medicines',
        'Chronic care medications',
        'Elderly and pediatric medicines',
        'Post-hospitalization medicine supply',
        'Timely delivery and proper storage',
        'Quality assurance and safety'
      ],
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Home Healthcare Services',
      icon: Baby,
      image: serviceImg7,
      description: 'Comprehensive patient-centered medical care delivered in the comfort of the patient\'s home ensuring safety, dignity, and convenience. Supporting elderly care, chronic disease management, post-hospitalization recovery, and long-term care with continuous monitoring.',
      simpleDesc: '🏠 Healthcare at home! Doctor visits, nursing care, and support for elderly or recovering patients - all in the comfort of your home. Caring and professional.',
      subServices: [
        {
          name: 'Doctor Consultations',
          desc: 'Home-based doctor consultations providing comprehensive medical evaluation, clinical assessments, diagnosis, treatment planning, prescription management, and follow-up visits reducing unnecessary hospital visits.'
        },
        {
          name: 'Nursing Care',
          desc: 'Skilled home nursing care delivering continuous patient monitoring, medication administration, injections, wound and dressing care, post-surgical support, catheter and tube care, and infection prevention.'
        }
      ],
      features: [
        'Home-based doctor consultations',
        'Skilled nursing care at home',
        'Medication administration and monitoring',
        'Wound care and post-surgical support',
        'Caretaker services for daily living',
        'Vital sign monitoring and reporting',
        'Patient education and family support',
        'Coordination with medical teams'
      ],
      gradient: 'from-pink-500 to-rose-500'
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
        
        <div className="container-custom text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 shadow-lg">
              <Sparkles className="h-4 w-4" />
              Complete Healthcare Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Healthcare Services <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">Made Simple</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From workplace health checks to emergency care - we make professional healthcare accessible and affordable for everyone.
            </p>
            <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mt-8"></div>
          </motion.div>
        </div>
      </div>

      {/* Quick Service Overview */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                What We Offer
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the right healthcare service for your needs - quick overview of all our offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.slice(0, 4).map((service, idx) => (
              <motion.a
                key={idx}
                href={`#service-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.description.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-2 mt-4 text-blue-600 font-semibold text-sm">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(4).map((service, idx) => (
              <motion.a
                key={idx + 4}
                href={`#service-${idx + 4}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (idx + 4) * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.description.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-2 mt-4 text-blue-600 font-semibold text-sm">
                  Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Which Service Do You Need? */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">Need Help Choosing?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Which Service Is Right for You?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200">
              <Target className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-lg mb-3 text-gray-900">For Companies</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Pre-Medical Exams</strong> - Employee health checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Training Programs</strong> - First aid, CPR, safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Para Medical Staff</strong> - Doctors, nurses on-site</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-2 border-red-200">
              <HeartPulse className="h-8 w-8 text-red-600 mb-3" />
              <h3 className="font-bold text-lg mb-3 text-gray-900">For Emergencies</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>BLS Ambulance</strong> - Basic life support, 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>ALS Ambulance</strong> - Advanced critical care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Patient Transport</strong> - Safe hospital transfers</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
              <Baby className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-lg mb-3 text-gray-900">For Home Care</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Doctor Visits</strong> - Home consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Nursing Care</strong> - Skilled nurses at home</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Medicine Delivery</strong> - All medicines to your door</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still not sure? We'll help you choose the right service</p>
            <a 
              href="tel:+919790154835"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call Us: +91 97901 54835
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-custom py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Complete Service Details
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Clear, detailed information about each healthcare service we provide</p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              id={`service-${index}`}
              ref={el => serviceCardsRef.current[index] = el}
              className="scroll-mt-24"
            >
              {/* Service Header Card */}
              <div className={`bg-gradient-to-br ${
                index % 4 === 0 ? 'from-blue-50 to-cyan-50' :
                index % 4 === 1 ? 'from-purple-50 to-pink-50' :
                index % 4 === 2 ? 'from-orange-50 to-red-50' :
                'from-green-50 to-emerald-50'
              } rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className={`absolute bottom-6 left-6 bg-gradient-to-br ${service.gradient} p-3 rounded-xl shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    {/* Simple Description Badge */}
                    {service.simpleDesc && (
                      <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                        <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">Quick Summary</p>
                        <p className="text-gray-700 text-sm leading-relaxed">{service.simpleDesc}</p>
                      </div>
                    )}

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold">
                        <Clock className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-gray-700">24/7 Available</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold">
                        <Calendar className="h-3.5 w-3.5 text-purple-600" />
                        <span className="text-gray-700">Bookable</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold">
                        <Shield className="h-3.5 w-3.5 text-green-600" />
                        <span className="text-gray-700">Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                
                {/* Key Features - More Prominent */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    What You Get
                  </h3>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`h-4 w-4 ${
                          index % 4 === 0 ? 'text-blue-600' :
                          index % 4 === 1 ? 'text-purple-600' :
                          index % 4 === 2 ? 'text-orange-600' :
                          'text-green-600'
                        } flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-Services */}
                {service.subServices && service.subServices.length > 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      Specialized Services
                    </h3>
                    <div className="space-y-3">
                      {service.subServices.map((subService, idx) => (
                        <div key={idx} className={`p-3 rounded-lg border-l-3 ${
                          idx % 3 === 0 ? 'bg-blue-50 border-blue-400' :
                          idx % 3 === 1 ? 'bg-purple-50 border-purple-400' :
                          'bg-green-50 border-green-400'
                        }`}>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{subService.name}</h4>
                          <p className="text-gray-600 text-xs leading-relaxed">{subService.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Why Choose Morning Star?
              </span>
            </h2>
            <p className="text-gray-600 text-lg">What makes us different from others</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Available</h3>
              <p className="text-gray-600 text-sm">Round-the-clock emergency services and support</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500 to-teal-500 mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Certified Team</h3>
              <p className="text-gray-600 text-sm">Qualified doctors, nurses, and trained staff</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Affordable Rates</h3>
              <p className="text-gray-600 text-sm">Quality healthcare at competitive pricing</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Trusted by 100+</h3>
              <p className="text-gray-600 text-sm">Leading companies across India trust us</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <div className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to help you understand our services better</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can you provide ambulance service?",
                a: "We provide 24/7 emergency ambulance services with rapid response. For emergencies, call +91 97901 54835 and we'll dispatch the nearest ambulance immediately. Average response time varies by location but we prioritize all emergency calls."
              },
              {
                q: "Do you provide services in my city?",
                a: "We currently operate in Bangalore, Chennai, Hyderabad, Kolkata, and Tamil Nadu (including Kanyakumari). We're continuously expanding to more cities. Contact us to check availability in your area."
              },
              {
                q: "What is the cost of your services?",
                a: "Our pricing varies based on the service, location, and requirements. We offer competitive and transparent pricing. Contact us for a detailed quote specific to your needs. We believe quality healthcare should be affordable."
              },
              {
                q: "Are your medical staff certified?",
                a: "Yes, all our doctors, nurses, paramedics, and medical staff are fully certified and trained professionals. We maintain strict quality standards and ensure continuous training for our team."
              },
              {
                q: "Can I book services in advance?",
                a: "Absolutely! While we handle emergencies 24/7, you can also pre-book services like medical camps, training programs, health check-ups, and patient transport. Call us or email to schedule in advance."
              },
              {
                q: "Do you provide medical equipment on rent?",
                a: "Yes, we supply medical equipment for purchase and can arrange rental options for certain equipment like hospital beds, wheelchairs, oxygen concentrators, etc. Contact us for equipment availability and pricing."
              },
              {
                q: "What makes your OHC services different?",
                a: "We provide complete turnkey OHC solutions - from setup to staffing to compliance. Our experienced team ensures statutory compliance, quality healthcare delivery, and seamless operations tailored to your industry needs."
              },
              {
                q: "How do I get started?",
                a: "Simply call us at +91 97901 54835 or email morningstarhealthcareservicess@gmail.com. Our team will understand your requirements and provide the best solution with transparent pricing and timelines."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-lg mb-3 text-gray-900 flex items-start gap-3">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed pl-10">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl">
            <h3 className="font-bold text-xl mb-3">Didn't find your answer?</h3>
            <p className="text-gray-700 mb-4">Our team is here to help you with any questions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919790154835"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                <Phone className="h-5 w-5" />
                Call: +91 97901 54835
              </a>
              <a 
                href="mailto:morningstarhealthcareservicess@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">Contact us today for a free consultation and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919790154835" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <HeartPulse className="h-5 w-5" />
              Call Now: +91 97901 54835
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

export default Services;
