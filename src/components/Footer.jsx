import React from 'react';
import { Link } from 'react-router-dom';
import { Ambulance, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Ambulance className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Morning Star</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing rapid, professional, and compassionate emergency medical transportation services 24/7. Your life is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/morningstarhealthcare/" className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-3">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Emergency Ambulance</li>
              <li className="text-gray-400">ICU Transport</li>
              <li className="text-gray-400">Patient Transfer</li>
              <li className="text-gray-400">Event Medical Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary-600 pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 shrink-0" />
                <span className="text-gray-400">#17-88/1,Kurakudivilai,Kanyakumari,Tamil Nadu-66</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-gray-400">+91 9790154835, 7418128505</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span className="text-gray-400">morningstarhealthcareservicess@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Morning Star Health Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
