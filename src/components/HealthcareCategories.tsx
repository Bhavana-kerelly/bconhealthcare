import React from 'react';
import { motion } from 'framer-motion';
import { CategoryCard, type CategoryData } from './CategoryCard';

const categories: CategoryData[] = [
  {
    title: "Medical Devices",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#medical-devices"
  },
  {
    title: "Personal Healthcare",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#personal-healthcare"
  },
  {
    title: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#wellness"
  },
  {
    title: "Diagnostics",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80",
    href: "#diagnostics"
  },
  {
    title: "Hospital Essentials",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#hospital-essentials"
  },
  {
    title: "Professional Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#professional-care"
  }
];

export const HealthcareCategories: React.FC = () => {
  return (
    <section className="w-full bg-brand-ivory pt-[80px] pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-[600px]"
        >
          <span className="block text-[13px] md:text-[14px] font-bold text-brand-navy mb-2">
            Explore Healthcare
          </span>
          <h2 className="text-[36px] md:text-[44px] leading-tight font-heading font-semibold text-brand-navy tracking-tight">
            Everything you need for better care.
          </h2>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <CategoryCard 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};
