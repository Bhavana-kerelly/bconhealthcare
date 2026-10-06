import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  return (
    <section className="w-full bg-[#EEF6FA] border-t border-[#E5E7EB]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between min-h-[100px] lg:min-h-[120px] py-6 md:py-0 gap-6">
          
          {/* Left Content */}
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="text-brand-blue flex-shrink-0">
              <Mail className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[18px] lg:text-[22px] font-heading font-medium text-brand-navy leading-tight mb-1">
                Stay informed about better healthcare.
              </h3>
              <p className="text-[13px] lg:text-[15px] text-brand-muted leading-tight">
                Get healthcare insights, new products, offers and wellness information.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <form 
            className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address"
              required
              className="w-full sm:w-[260px] lg:w-[300px] h-[44px] lg:h-[48px] bg-white text-[13px] lg:text-[14px] text-brand-navy placeholder:text-gray-400 rounded-[24px] px-5 outline-none focus:ring-1 focus:ring-brand-blue/50 transition-shadow duration-200 border border-transparent focus:border-brand-blue/20"
            />
            <button 
              type="submit"
              className="group flex-shrink-0 inline-flex items-center justify-center h-[44px] lg:h-[48px] w-full sm:w-[130px] lg:w-[140px] bg-brand-navy text-white text-[13px] lg:text-[14px] font-medium rounded-[24px] hover:bg-brand-secondary-navy transition-colors duration-250"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-250 group-hover:translate-x-1" />
            </button>
          </form>
          
        </div>
        
      </div>
    </section>
  );
};
