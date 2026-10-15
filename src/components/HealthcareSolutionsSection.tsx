import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, HeartHandshake, Stethoscope, Users, Home, Activity, Heart, Leaf, ShieldAlert } from 'lucide-react';

const careValues = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Quality First",
    description: "Carefully selected products meeting quality standards."
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Trusted Solutions",
    description: "Designed around real healthcare needs."
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Accessible Healthcare",
    description: "Making essential solutions easier to discover and access."
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "People at the Centre",
    description: "Built around people's everyday needs."
  }
];

const solutionCategories = [
  {
    icon: <Home className="w-4 h-4" />,
    label: "Home Healthcare"
  },
  {
    icon: <Activity className="w-4 h-4" />,
    label: "Clinical Wellness"
  },
  {
    icon: <Heart className="w-4 h-4" />,
    label: "Preventive Care"
  },
  {
    icon: <Leaf className="w-4 h-4" />,
    label: "Wellness"
  },
  {
    icon: <ShieldAlert className="w-4 h-4" />,
    label: "Healthcare Professionals"
  }
];

export const HealthcareSolutionsSection: React.FC = () => {
  return (
    <section className="w-full bg-brand-ivory pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        
        {/* Main Split Content */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-[8px] bg-white shadow-sm border border-gray-100 mb-4">
          
          {/* Left Panel - Dark Navy */}
          <div className="w-full lg:w-1/2 bg-brand-navy p-[32px] md:p-[40px] lg:p-[48px] flex flex-col justify-between min-h-[420px]">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-[24px] lg:text-[30px] font-heading font-semibold leading-[1.15] mb-10 max-w-[440px]"
            >
              More Than Products.<br />
              A Commitment to Better Care.
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6 mt-auto">
              {careValues.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="text-white mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-white text-[14px] lg:text-[15px] font-semibold mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-[12px] lg:text-[13px] leading-[1.5]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel - Healthcare Solutions */}
          <div className="w-full lg:w-1/2 bg-white flex flex-col sm:flex-row">
            {/* Image Half */}
            <div className="w-full sm:w-[45%] h-[260px] sm:h-auto min-h-[260px] relative">
              <img 
                src="/healthcare-solutions.jpg" 
                alt="Healthcare Professional" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Content Half */}
            <div className="w-full sm:w-[55%] p-[32px] lg:p-[44px] flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block text-[12px] lg:text-[13px] font-bold text-brand-blue tracking-[0.08em] uppercase mb-3">
                  Bcon Healthcare Solutions
                </span>
                
                <h3 className="text-[26px] lg:text-[32px] font-heading font-semibold text-brand-navy leading-[1.15] mb-4">
                  Healthcare solutions<br />
                  beyond the shelf.
                </h3>
                
                <p className="text-[14px] lg:text-[15px] text-brand-muted leading-[1.6] mb-8 max-w-[360px]">
                  From home care to clinical support, BCON offers
                  a complete ecosystem of healthcare solutions
                  designed for better outcomes.
                </p>
                
                <button className="group inline-flex items-center justify-center h-[42px] px-6 bg-brand-navy text-white text-[13px] lg:text-[14px] font-medium rounded-[6px] hover:bg-brand-secondary-navy transition-colors duration-250 w-fit">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-250 group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            </div>
          </div>
          
        </div>

        {/* Bottom Category Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full bg-white rounded-[6px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] px-5 py-3.5 lg:py-4 flex flex-row items-center justify-between overflow-x-auto gap-6 hide-scrollbar"
        >
          {solutionCategories.map((category, index) => (
            <div 
              key={category.label}
              className={`flex items-center gap-2.5 flex-shrink-0 cursor-pointer group ${
                index !== solutionCategories.length - 1 ? "pr-6 border-r border-gray-100" : ""
              }`}
            >
              <div className="text-brand-blue/80 group-hover:text-brand-blue transition-colors">
                {category.icon}
              </div>
              <span className="text-[13px] lg:text-[14px] font-medium text-brand-navy group-hover:text-brand-blue transition-colors whitespace-nowrap">
                {category.label}
              </span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
