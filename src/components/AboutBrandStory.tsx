import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutBrandStory: React.FC = () => {
  return (
    <section className="w-full bg-white pt-[30px] lg:pt-[45px] pb-[40px] lg:pb-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%]">
        
        <div className="flex flex-col lg:flex-row items-start gap-[24px] lg:gap-[28px]">
          
          {/* Left Column: Building Image (approx 46%) */}
          <div className="w-full lg:w-[46%] flex-shrink-0">
            <div className="w-full h-[250px] lg:h-[350px] overflow-hidden rounded-[6px]">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="BCON Healthcare Building" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Content (approx 50%) */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            
            <span className="text-[#0D3859] text-[11px] lg:text-[13px] font-bold uppercase tracking-[1px] mb-2">
              Our Brand Story
            </span>
            
            <h2 className="font-heading text-[#0D3859] text-[28px] lg:text-[36px] font-bold leading-tight mb-4">
              Trusted Healthcare Partner
            </h2>
            
            <p className="text-[#325A77] text-[14px] lg:text-[16px] leading-[1.6] mb-4">
              BCON Healthcare was founded with a simple belief — everyone <br className="hidden xl:block" />
              deserves access to safe, reliable and high-quality healthcare products. <br className="hidden xl:block" />
              What started as a vision has grown into a trusted platform, offering a <br className="hidden xl:block" />
              wide range of medical devices, personal care products, wellness essentials <br className="hidden xl:block" />
              and hospital supplies, all in one place.
            </p>
            
            <p className="text-[#325A77] text-[14px] lg:text-[16px] leading-[1.6] mb-6">
              We work with leading brands and healthcare professionals to bring you <br className="hidden xl:block" />
              genuine products, expert support and a seamless shopping experience.
            </p>
            
            <button className="flex items-center justify-center bg-[#0C3E68] hover:bg-[#082B4A] transition-colors text-white text-[12px] lg:text-[14px] font-medium rounded-full w-[145px] h-[40px] group">
              Our Journey
              <ArrowRight className="w-[14px] h-[14px] ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
