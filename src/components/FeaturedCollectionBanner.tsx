import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FeaturedCollectionBanner: React.FC = () => {
  return (
    <section className="w-full mt-4 lg:mt-6 mb-8 lg:mb-12">
      <div className="w-full max-w-[1440px] mx-auto px-0 md:px-[32px] lg:px-[48px]">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full min-h-[240px] md:min-h-[260px] lg:min-h-[300px] overflow-hidden md:rounded-[8px] lg:rounded-[12px]"
        >
          {/* Background Image */}
          <motion.img 
            initial={{ scale: 1.03 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src="/featured-collection-bg.jpg" 
            alt="Healthcare Featured Collection" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-[70%] lg:w-[60%]"></div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-y-0 left-0 flex flex-col justify-center px-[24px] md:px-[40px] lg:pl-[12%] z-10 py-10"
          >
            <span className="block text-[10px] lg:text-[13px] font-semibold text-white tracking-[0.08em] uppercase mb-2 lg:mb-3">
              Featured Collection
            </span>
            
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-heading font-semibold text-white leading-[1.05] tracking-tight mb-6 max-w-[400px]">
              Care Starts With<br />
              The Right Choice.
            </h2>
            
            <button className="group inline-flex items-center justify-center h-[40px] lg:h-[48px] px-6 bg-black/20 border border-white/30 hover:bg-black/40 hover:border-white/50 text-white text-[13px] lg:text-[15px] font-medium rounded-[8px] transition-all duration-300 w-fit backdrop-blur-sm">
              Explore Collection
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
