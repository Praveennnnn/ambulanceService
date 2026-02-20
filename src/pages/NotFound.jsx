import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500">
            It might have been moved or deleted, or you may have mistyped the URL.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
            <Search className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/">
            <Button variant="primary" size="lg" className="gap-2 w-full sm:w-auto">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <ArrowLeft className="h-5 w-5" />
              View Services
            </Button>
          </Link>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
          <p className="text-sm text-gray-600 mb-3">Need immediate assistance?</p>
          <a 
            href="tel:+919790154835"
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg hover:text-blue-700 transition-colors"
          >
            <Phone className="h-5 w-5" />
            +91 97901 54835
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/about" className="text-blue-600 hover:text-blue-700 font-medium">
              About Us
            </Link>
            <Link to="/projects" className="text-blue-600 hover:text-blue-700 font-medium">
              Our Projects
            </Link>
            <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
