import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import serviceImgg1 from '../images/services1.png';
import serviceImgg2 from '../images/Screenshot 2025-12-13 212800.png';
import serviceImgg3 from '../images/Screenshot 2025-12-13 213051.png';
import serviceImgg4 from '../images/Screenshot 2025-12-13 213337.png';

const Services = () => {
  const services = [
    {
      title: "Basic Life Support (BLS)",
      description: "Designed for patients who require medical transportation and continuous monitoring but do not need invasive procedures. Ideal for hospital discharges and outpatient visits.",
      features: ["Oxygen Support", "Vitals Monitoring", "Certified EMTs"],
      image: serviceImgg1
    },
    {
      title: "Advanced Life Support (ALS)",
      description: "For critically ill or injured patients requiring invasive life support procedures during transport. Staffed by paramedics and equipped with cardiac monitors.",
      features: ["Cardiac Monitoring", "IV Therapy", "Advanced Airway Management"],
      image: serviceImgg2
    },
    {
      title: "Neonatal Transport",
      description: "Specialized incubators and equipment for safe transportation of newborns and premature infants requiring intensive care.",
      features: ["Transport Incubator", "Neonatal Ventilator", "Specialized Team"],
      image: serviceImgg3
    },
    {
      title: "Event Medical Standby",
      description: "On-site ambulance and medical team for corporate events, sports meets, concerts, and public gatherings to ensure immediate response.",
      features: ["On-site Paramedics", "First Aid Stations", "Rapid Extraction"],
      image: serviceImgg4
    }
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="bg-primary-700 py-16 mb-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-primary-100 max-w-2xl mx-auto">
            We offer a comprehensive range of medical transportation services tailored to patient needs.
          </p>
        </div>
      </div>

      <div className="container-custom space-y-24">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 w-full">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button>Book This Service</Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
