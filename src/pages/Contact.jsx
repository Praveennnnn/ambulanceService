import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const faqRef = useRef([]);
  const formRef = useRef();

 useEffect(() => {
  const ctx = gsap.context(() => {

    faqRef.current.forEach((faq, index) => {
      if (!faq) return;

      gsap.fromTo(
        faq,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faq,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

  });

  return () => ctx.revert(); // 🔥 REQUIRED
}, []);



  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Thank you! We will get back to you shortly.');
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      info: '78M3+J6W VMP Street, Mekkamandapam, Tamil Nadu 629166',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      info: '+91 9876543210 / +91 8765432109',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email Address',
      info: 'morningstarhealthcareservicess@gmail.com',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: '24/7 Emergency Services Available',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const faqs = [
    {
      q: 'How quickly can you respond to an emergency?',
      a: 'Our average response time is under 8 minutes in urban areas. We have strategically placed ambulances across the region to ensure rapid deployment.'
    },
    {
      q: 'What types of ambulances do you have?',
      a: 'We operate Basic Life Support (BLS), Advanced Life Support (ALS), Neonatal, and ICU-equipped ambulances to handle all medical situations.'
    },
    {
      q: 'Are your paramedics certified?',
      a: 'Yes, all our paramedics and EMTs are nationally certified and undergo continuous training in emergency medical procedures and patient care.'
    },
    {
      q: 'Do you provide inter-city ambulance services?',
      a: 'Absolutely. We offer long-distance patient transfers with specialized medical care throughout the journey, including ventilator and ICU support.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept cash, all major credit/debit cards, UPI, and work with most insurance providers for direct billing arrangements.'
    },
    {
      q: 'Can I book an ambulance in advance for a scheduled transfer?',
      a: 'Yes, you can pre-book our services for scheduled hospital transfers, medical appointments, or event standby coverage.'
    },
    {
      q: 'What medical equipment is available in your ambulances?',
      a: 'Our ambulances are equipped with cardiac monitors, defibrillators, oxygen systems, ventilators, IV medications, and emergency trauma supplies.'
    },
    {
      q: 'Do you provide ambulance services for events?',
      a: 'Yes, we offer standby ambulance services for sports events, corporate gatherings, weddings, and public events to ensure immediate medical response if needed.'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <div className="container-custom mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="h-4 w-4" />
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We're here to help 24/7. Reach out for emergency services, inquiries, or to schedule a patient transfer.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      {/* Contact Info Cards */}
      <div className="container-custom mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.info}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                {...register('phone')}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                {...register('message', { required: 'Message is required' })}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="How can we help you?"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" variant="primary" className="w-full gap-2 group">
              Send Message
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden h-[600px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2966723269726!2d77.3029257!3d8.284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0457006bb08663:0x91dc9a2407947bfe!2sMorning%20Star%20Health%20care%20services!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
            title="Morning Star Health Care Location"
          ></iframe>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our ambulance services</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              ref={el => faqRef.current[idx] = el}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-start gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                {faq.q}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
