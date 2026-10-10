import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headset } from 'lucide-react';

export const ShopHeroSection: React.FC = () => {
  return (
    <section className="w-full relative bg-[#EEF5F9]">
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 w-full h-full flex justify-end overflow-hidden">
        <div className="relative w-full lg:w-[65%] h-full">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Medical Devices" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient to blend image into the solid left background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EEF5F9] via-[#EEF5F9]/90 to-transparent w-full"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] h-full flex flex-col justify-center min-h-[380px] lg:min-h-[460px] py-[40px] lg:py-[55px]">
        
        <div className="w-full lg:w-[55%] xl:w-[50%] z-10 flex flex-col">
          
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-[13px] lg:text-[14px] font-medium mb-4 lg:mb-5"
          >
            <span className="text-brand-muted">Home</span>
            <span className="mx-2 text-brand-muted">/</span>
            <span className="text-brand-navy">Shop</span>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[36px] md:text-[42px] lg:text-[48px] leading-[1.15] font-heading font-medium text-brand-navy tracking-tight mb-5"
          >
            Medical Devices
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[14px] lg:text-[15.5px] leading-[1.6] text-brand-secondary-navy max-w-[460px] mb-10"
          >
            High-quality medical devices for better diagnosis, treatment and patient care. Trusted by healthcare professionals across the country.
          </motion.p>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
          >
            {/* Indicator 1 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-brand-blue/30 flex items-center justify-center flex-shrink-0 bg-transparent">
                <ShieldCheck className="w-[20px] h-[20px] text-brand-blue" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[13px] font-semibold text-brand-navy leading-tight mb-1">Trusted Brands</span>
                <span className="text-[11px] text-brand-muted leading-tight">Only genuine products</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-[40px] bg-brand-blue/15"></div>

            {/* Indicator 2 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-brand-blue/30 flex items-center justify-center flex-shrink-0 bg-transparent">
                <ShieldCheck className="w-[20px] h-[20px] text-brand-blue" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[13px] font-semibold text-brand-navy leading-tight mb-1">Quality Assured</span>
                <span className="text-[11px] text-brand-muted leading-tight">Certified & safe</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-[40px] bg-brand-blue/15"></div>

            {/* Indicator 3 */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-brand-blue/30 flex items-center justify-center flex-shrink-0 bg-transparent">
                <Headset className="w-[20px] h-[20px] text-brand-blue" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[13px] font-semibold text-brand-navy leading-tight mb-1">Expert Support</span>
                <span className="text-[11px] text-brand-muted leading-tight">Always here to help</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
