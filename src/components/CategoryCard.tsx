import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface CategoryData {
  title: string;
  image: string;
  href: string;
}

interface CategoryCardProps {
  category: CategoryData;
  index: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <motion.a
      href={category.href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex flex-col relative w-full bg-white rounded-[10px] shadow-sm border border-brand-border/50 hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Image Container */}
      <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      
      {/* Content Container */}
      <div className="w-full bg-white p-4 lg:p-5 flex flex-col justify-center min-h-[90px] flex-grow">
        <h3 className="font-heading font-semibold text-[15px] lg:text-[17px] text-brand-navy mb-1.5 leading-tight">
          {category.title}
        </h3>
        <div className="flex items-center text-[12px] lg:text-[13px] text-brand-muted font-medium mt-auto">
          Explore
          <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.a>
  );
};
