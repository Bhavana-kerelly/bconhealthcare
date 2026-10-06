import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Home, Activity, User, Crosshair } from 'lucide-react';

const needCategories = [
  {
    title: "Everyday Care",
    icon: <Heart className="w-[18px] h-[18px]" />
  },
  {
    title: "Mobility & Support",
    icon: <Home className="w-[18px] h-[18px]" />
  },
  {
    title: "Monitoring",
    icon: <Activity className="w-[18px] h-[18px]" />
  },
  {
    title: "Personal Care",
    icon: <User className="w-[18px] h-[18px]" />
  },
  {
    title: "Professional Care",
    icon: <Crosshair className="w-[18px] h-[18px]" />
  }
];

export const ShopByNeed: React.FC = () => {
  return (
    <section className="w-full bg-white pb-[60px] lg:pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 lg:mb-10"
        >
          <h2 className="text-[28px] lg:text-[36px] font-heading font-semibold text-brand-navy leading-tight mb-2">
            Shop by Need
          </h2>
          <p className="text-[14px] lg:text-[16px] text-brand-muted">
            Find the right products for your unique needs.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[40%] h-[240px] lg:h-[320px] rounded-[10px] lg:rounded-[12px] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Shop by Need Healthcare Products" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right Categories */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-0 sm:gap-x-4 lg:gap-x-0 border-t border-b border-transparent lg:border-gray-100 lg:divide-x lg:divide-gray-100">
              {needCategories.map((category, index) => (
                <motion.a 
                  key={category.title}
                  href={`#${category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.08) }}
                  className="group flex flex-row lg:flex-col items-center lg:items-center py-4 lg:py-6 px-4 hover:bg-brand-light-blue/20 transition-colors duration-300 border-b border-gray-100 sm:border-b-0 h-full"
                >
                  <div className="text-brand-blue group-hover:text-brand-navy transition-colors duration-300 mr-5 lg:mr-0 lg:mb-4 scale-150 lg:scale-125">
                    {category.icon}
                  </div>
                  
                  <div className="flex flex-col items-start lg:items-center text-left lg:text-center flex-grow lg:flex-grow-0">
                    <h4 className="text-[14px] lg:text-[15px] font-semibold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                      {category.title}
                    </h4>
                    <span className="flex items-center text-[12px] lg:text-[13px] text-brand-muted">
                      Explore 
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                  
                  {/* Mobile-only arrow at the end */}
                  <div className="lg:hidden text-gray-300 group-hover:text-brand-blue transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
