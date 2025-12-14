import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Thank you for contacting us. We will get back to you shortly.");
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For emergencies, please call 911 immediately. For general inquiries, bookings, or feedback, please reach out to us using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Head Office</h4>
                    <p className="text-gray-600 text-sm mt-1">123 Health Avenue, Medical District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">+1 (555) 123-4567</p>
                    <p className="text-red-600 font-bold text-sm mt-1">Emergency: 911</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">info@morningstart.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Hours</h4>
                    <p className="text-gray-600 text-sm mt-1">24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Please enter a valid email</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="ambulance">Book Ambulance</option>
                    <option value="event">Event Standby</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    {...register("message", { required: true })}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1">This field is required</span>}
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
