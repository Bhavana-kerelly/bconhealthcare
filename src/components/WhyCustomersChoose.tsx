import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Truck, RefreshCcw } from 'lucide-react';

const trustBenefits = [
  {
    title: "Quality-Assured Products",
    icon: <ShieldCheck className="w-[18px] h-[18px]" />
  },
  {
    title: "Secure Payments",
    icon: <CreditCard className="w-[18px] h-[18px]" />
  },
  {
    title: "Reliable Delivery",
    icon: <Truck className="w-[18px] h-[18px]" />
  },
  {
    title: "Easy Returns",
    icon: <RefreshCcw className="w-[18px] h-[18px]" />
  }
];

export const WhyCustomersChoose: React.FC = () => {
  return (
    <section className="w-full mb-12">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#F1F7FA] rounded-[8px] px-[24px] lg:px-[40px] py-[20px] lg:py-[24px] min-h-[80px] flex flex-col md:flex-row items-center justify-between"
        >
          {/* Left Heading */}
          <h3 className="text-[14px] lg:text-[16px] font-semibold text-brand-navy whitespace-nowrap mb-6 md:mb-0 md:mr-8 border-b border-[#E5E7EB] md:border-none pb-4 md:pb-0 w-full md:w-auto text-center md:text-left">
            Why Customers Choose BCON
          </h3>

          {/* Benefits Row */}
          <div className="grid grid-cols-2 md:flex flex-row flex-wrap md:flex-nowrap items-center justify-between w-full md:flex-1 gap-y-6 md:gap-y-0 md:gap-x-4 lg:gap-x-8">
            {trustBenefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-start md:justify-center group"
              >
                <div className="text-brand-blue group-hover:text-brand-navy transition-colors duration-250 mr-3 lg:mr-4 flex-shrink-0 scale-125">
                  {benefit.icon}
                </div>
                <span className="text-[12px] lg:text-[14px] font-medium text-brand-navy leading-tight w-[80px] md:w-auto group-hover:text-brand-blue transition-colors duration-250">
                  {benefit.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}{i !== benefit.title.split(' ').length - 1 && ' '}
                    </React.Fragment>
                  ))}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
