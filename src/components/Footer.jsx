import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import logo from '../images/image_2/logo-MS.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Morning Star Health Care Services" 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold">Morning Star</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Providing rapid, professional, and compassionate emergency medical transportation services 24/7. Your life is our priority.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/morningstarhealthcare/" className="bg-white/10 backdrop-blur-sm p-2.5 rounded-full hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">→ Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">→ About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">→ Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all">→ Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-300">🚑 Emergency Ambulance</li>
              <li className="text-gray-300">🏥 ICU Transport</li>
              <li className="text-gray-300">🚐 Patient Transfer</li>
              <li className="text-gray-300">🎪 Event Medical Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="https://maps.google.com/?q=78M3+J6W+VMP+Street,+Mekkamandapam,+Tamil+Nadu+629166" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  # 78M3+J6W VMP Street, Mekkamandapam, Tamil Nadu 629166
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919790154835" className="text-gray-300 hover:text-white text-sm transition-colors">
                    +91 97901 54835
                  </a>
                  <a href="tel:+917418128505" className="text-gray-300 hover:text-white text-sm transition-colors">
                    +91 74181 28505
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:morningstarhealthcareservicess@gmail.com"
                  className="text-gray-300 hover:text-white text-sm transition-colors break-all"
                >
                  morningstarhealthcareservicess@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} Morning Star Health Care. All rights reserved. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for saving lives.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
