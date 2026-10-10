import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Medical Devices',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Personal Healthcare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Wellness',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Diagnostics',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hospital Essentials',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  }
];

export const ShopCategoriesStrip: React.FC = () => {
  return (
    <section className="w-full bg-white pt-[40px] lg:pt-[60px] pb-[60px] lg:pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[70px]">
        <div className="flex flex-row overflow-x-auto lg:overflow-visible gap-[14px] hide-scrollbar pb-4 lg:pb-0">
          {categories.map((category, index) => (
            <motion.a
              href="#"
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col flex-shrink-0 w-[160px] lg:w-[calc(20%-11.2px)] rounded-t-[6px] rounded-b-[6px] overflow-hidden border border-transparent hover:border-[#DCEAF3] transition-all duration-300"
            >
              {/* Image Area */}
              <div className="w-full h-[120px] lg:h-[140px] bg-[#EAF4FA] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Label Area */}
              <div className="w-full h-[45px] bg-[#F0F6FB] flex items-center justify-between px-4 transition-colors duration-300 group-hover:bg-[#E5F0F8]">
                <span className="text-[13px] lg:text-[14px] font-semibold text-[#123B5D]">
                  {category.name}
                </span>
                <ArrowRight className="w-[14px] h-[14px] text-[#123B5D] opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
