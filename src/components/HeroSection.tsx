import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative bg-brand-ivory">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/hero-bg.jpg" 
          alt="Healthcare professional checking a patient in a comfortable setting" 
          className="w-full h-full object-cover object-[center_30%]"
        />
        {/* Subtle Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent w-[90%] md:w-[70%] lg:w-[60%]"></div>
        
        {/* Right-Side Image Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-[30px] lg:bottom-[40px] right-[20px] md:right-[32px] lg:right-[48px] text-white text-[14px] lg:text-[16px] leading-[1.3] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Better care.<br/>Everyday.
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] h-full flex flex-col justify-center min-h-[400px] lg:min-h-[540px] py-[60px] lg:py-[80px]">
        
        <div className="w-full lg:w-[55%] xl:w-[50%]">
          <motion.span 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-[12px] lg:text-[14px] font-semibold tracking-[0.05em] text-brand-navy mb-[12px] lg:mb-[16px]"
          >
            BCON HEALTHCARE
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[42px] lg:text-[56px] leading-[1.05] font-heading font-medium text-brand-navy tracking-tight mb-[16px] lg:mb-[24px]"
          >
            Healthcare,<br />
            Made More Accessible.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[15px] lg:text-[18px] leading-[1.5] text-[#0B1B33] max-w-[450px] lg:max-w-[500px] mb-[24px] lg:mb-[32px]"
          >
            Discover thoughtfully selected healthcare products and solutions designed to support better care, everyday wellness and healthier living.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-[16px] lg:gap-[20px]"
          >
            <button className="group inline-flex items-center justify-center h-[48px] lg:h-[52px] w-full sm:w-[240px] bg-brand-navy text-white text-[14px] lg:text-[15px] font-medium rounded-[26px] hover:bg-[#162B48] transition-colors duration-250 px-6">
              Shop Healthcare Products
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-250 group-hover:translate-x-[4px]" />
            </button>
            
            <button className="group inline-flex items-center justify-center h-[48px] lg:h-[52px] w-full sm:w-[180px] bg-transparent border border-[#8EA2B5] text-brand-navy text-[14px] lg:text-[15px] font-medium rounded-[26px] hover:bg-white/50 transition-colors duration-250 px-6">
              Explore BCON
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-250 group-hover:translate-x-[4px]" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
