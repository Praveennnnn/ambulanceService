import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Ambulance } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-700 p-2 rounded-lg group-hover:bg-primary-800 transition-colors">
              <Ambulance className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none">MORNING STAR</span>
              <span className="text-sm font-medium text-primary-600 leading-none">Health Care</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-700 ${
                  isActive(link.path) ? 'text-primary-700 font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:911">
              <Button variant="emergency" size="sm" className="gap-2 shadow-lg shadow-red-200">
                <Phone className="h-4 w-4" />
                Emergency: 911
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a href="tel:911" className="block">
                  <Button variant="emergency" className="w-full gap-2">
                    <Phone className="h-4 w-4" />
                    Call Emergency
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
