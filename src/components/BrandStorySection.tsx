import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UsersRound, PackageCheck, MapPin } from 'lucide-react';

const trustStats = [
  {
    value: "50,000+",
    label: "Happy Customers",
    icon: <UsersRound className="w-[15px] lg:w-[17px] h-[15px] lg:h-[17px]" />
  },
  {
    value: "1,00,000+",
    label: "Products Delivered",
    icon: <PackageCheck className="w-[15px] lg:w-[17px] h-[15px] lg:h-[17px]" />
  },
  {
    value: "25+",
    label: "Service Locations",
    icon: <MapPin className="w-[15px] lg:w-[17px] h-[15px] lg:h-[17px]" />
  }
];

export const BrandStorySection: React.FC = () => {
  return (
    <section className="w-full bg-white pb-[60px] lg:pb-[70px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 min-h-[300px] lg:min-h-[380px]">
          
          {/* Left Panel: Story */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[48%] relative rounded-[12px] lg:rounded-[16px] overflow-hidden group flex-shrink-0"
          >
            {/* Background Image */}
            <motion.img 
              initial={{ scale: 1.03 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Person looking at natural landscape" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent w-[90%] md:w-[80%]"></div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8 lg:px-12 py-10 z-10">
              <span className="block text-[12px] lg:text-[14px] font-medium text-white/90 uppercase tracking-widest mb-3">
                Our Story
              </span>
              
              <h2 className="text-[32px] lg:text-[40px] font-heading font-medium text-white leading-tight mb-4">
                Healthcare is personal.
              </h2>
              
              <p className="text-[14px] lg:text-[16px] text-white/90 leading-[1.6] max-w-[380px] mb-8">
                At BCON Healthcare, we believe better healthcare begins
                with better access, better information and better solutions.
              </p>
              
              <button className="group/btn inline-flex items-center justify-center h-[44px] lg:h-[48px] px-6 bg-white text-brand-navy text-[14px] lg:text-[15px] font-medium rounded-[8px] hover:bg-gray-50 transition-colors duration-250 w-fit">
                Discover BCON
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-250 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Center Panel: Testimonial */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[32%] flex flex-col justify-center py-6 lg:py-8 lg:border-r border-[#E5E7EB] lg:pr-8"
          >
            <h3 className="text-[18px] lg:text-[22px] font-heading font-semibold text-brand-navy mb-4">
              What Our Customers Say
            </h3>
            
            <p className="text-[15px] lg:text-[16px] text-brand-navy leading-[1.6] mb-6 italic">
              "Excellent products, genuine quality and super fast delivery. BCON has made my healthcare shopping so much easier."
            </p>
            
            <div className="flex text-[#F59E0B] text-[16px] mb-3 tracking-[0.1em]">
              ★★★★★
            </div>
            
            <div className="flex flex-col">
              <span className="text-[14px] lg:text-[16px] font-semibold text-brand-navy leading-tight mb-1">
                Rahul Sharma
              </span>
              <span className="text-[12px] lg:text-[13px] text-brand-muted">
                Verified Customer
              </span>
            </div>
          </motion.div>

          {/* Right Panel: Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[20%] flex flex-col justify-center gap-6 lg:gap-10 py-6 lg:py-8 lg:pl-4"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="text-brand-blue opacity-90 flex-shrink-0 scale-150">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[18px] lg:text-[22px] font-bold text-brand-navy leading-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[12px] lg:text-[13px] font-medium text-brand-muted leading-none uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};
