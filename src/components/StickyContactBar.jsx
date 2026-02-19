import React, { useState } from 'react';
import { Phone, Mail, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyContactBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Call Now',
      subLabel: '+91 97901 54835',
      link: 'tel:+919790154835',
      gradient: 'from-green-500 to-emerald-600',
      hoverGradient: 'hover:from-green-600 hover:to-emerald-700'
    },
    {
      icon: Phone,
      label: 'Alternate',
      subLabel: '+91 74181 28505',
      link: 'tel:+917418128505',
      gradient: 'from-blue-500 to-cyan-600',
      hoverGradient: 'hover:from-blue-600 hover:to-cyan-700'
    },
    {
      icon: Mail,
      label: 'Email Us',
      subLabel: 'Get a quote',
      link: 'mailto:morningstarhealthcareservicess@gmail.com',
      gradient: 'from-purple-500 to-pink-600',
      hoverGradient: 'hover:from-purple-600 hover:to-pink-700'
    }
  ];

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-2">
          {contactOptions.map((option, idx) => (
            <a
              key={idx}
              href={option.link}
              className={`group flex items-center gap-3 bg-gradient-to-r ${option.gradient} ${option.hoverGradient} text-white px-4 py-3 rounded-l-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:pr-6`}
            >
              <option.icon className="h-5 w-5 flex-shrink-0" />
              <div className="opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
                <p className="text-sm font-bold whitespace-nowrap">{option.label}</p>
                <p className="text-xs opacity-90 whitespace-nowrap">{option.subLabel}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Floating Action Button */}
      <div className="lg:hidden fixed bottom-20 right-6 z-40">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 mb-3"
            >
              {contactOptions.map((option, idx) => (
                <motion.a
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  href={option.link}
                  className={`flex items-center gap-3 bg-gradient-to-r ${option.gradient} text-white px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap`}
                >
                  <option.icon className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold">{option.label}</p>
                    <p className="text-xs opacity-90">{option.subLabel}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          {isExpanded ? (
            <X className="h-6 w-6" />
          ) : (
            <Phone className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Quick Call to Action Banner - Shows on scroll */}
      <QuickCallBanner />
    </>
  );
};

const QuickCallBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="hidden md:block fixed top-20 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">24/7 Available</span>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <a 
              href="tel:+919790154835"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Phone className="h-4 w-4" />
              <span className="font-bold">+91 97901 54835</span>
            </a>
            <div className="w-px h-6 bg-white/30"></div>
            <a 
              href="mailto:morningstarhealthcareservicess@gmail.com"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email Us</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyContactBar;
