import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Replace with your actual WhatsApp business number (with country code, no + or spaces)
  const whatsappNumber = '9790154835'; // Example: 919876543210 for India

  const quickMessages = {
    emergency: {
      title: '🚨 Emergency Ambulance',
      message: 'Hello! I need an emergency ambulance right now. Please respond immediately.\n\nLocation: \nPatient Condition: \nContact Number: '
    },
    booking: {
      title: '📅 Book Ambulance',
      message: 'Hello! I would like to book an ambulance.\n\nDate: \nTime: \nPickup Location: \nDestination: \nService Type (BLS/ALS): \nContact Number: '
    },
    inquiry: {
      title: '💬 General Inquiry',
      message: 'Hello! I have a question about your ambulance services.\n\nMy query: '
    },
    event: {
      title: '🎪 Event Medical Coverage',
      message: 'Hello! I need medical standby services for an event.\n\nEvent Name: \nDate & Time: \nLocation: \nExpected Attendees: \nContact Number: '
    },
    pricing: {
      title: '💰 Pricing Information',
      message: 'Hello! I would like to know about your ambulance service pricing and packages.'
    }
  };

  const sendWhatsAppMessage = (messageType) => {
    const message = quickMessages[messageType].message;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    setIsOpen(false);
    setSelectedOption(null);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
              Chat with us
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 overflow-hidden animate-slideUp">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Morning Star Care</h3>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedOption(null);
                }}
                className="hover:bg-green-700 p-1 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 p-4 max-h-96 overflow-y-auto">
              {/* Welcome Message */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex items-start gap-2 mb-3">
                  <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium mb-1">
                      👋 Welcome to Morning Star Health Care!
                    </p>
                    <p className="text-xs text-gray-600">
                      How can we assist you today? Choose an option below:
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                {Object.entries(quickMessages).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => sendWhatsAppMessage(key)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                      key === 'emergency'
                        ? 'bg-red-50 border-red-300 hover:bg-red-100 hover:border-red-400'
                        : 'bg-white border-gray-200 hover:bg-green-50 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        key === 'emergency' ? 'text-red-700' : 'text-gray-700'
                      }`}>
                        {value.title}
                      </span>
                      <Send className={`h-4 w-4 ${
                        key === 'emergency' ? 'text-red-500' : 'text-green-500'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-800">
                  <span className="font-semibold">⚡ For Life-Threatening Emergencies:</span><br />
                  Call <a href="tel:911" className="font-bold underline">911</a> immediately
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 px-4 py-3 border-t">
              <p className="text-xs text-gray-600 text-center">
                Powered by <span className="font-semibold text-green-600">WhatsApp Business</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChat;
