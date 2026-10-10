import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutCtaBanner: React.FC = () => {
  return (
    <section className="w-full bg-white py-[60px] lg:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%]">
        
        <div className="w-full bg-[#EEF8FD] rounded-[9px] relative flex flex-col md:flex-row overflow-hidden min-h-[150px]">
          
          {/* Left Content */}
          <div className="w-full md:w-[45%] flex flex-col justify-center py-[30px] px-[20px] lg:px-[40px] z-20">
            <h2 className="font-heading text-[#0D3859] text-[22px] lg:text-[24px] font-bold leading-tight mb-2">
              Let's Build a Healthier Tomorrow
            </h2>
            <p className="text-[#315A7A] text-[12px] lg:text-[14px] leading-[1.5] mb-[16px] max-w-[340px]">
              Explore our range of healthcare products and experience<br className="hidden lg:block"/>
              the BCON difference.
            </p>
            <Link 
              to="/shop" 
              className="flex items-center justify-center bg-[#075987] hover:bg-[#054062] transition-colors text-white text-[12px] lg:text-[14px] font-medium rounded-full w-[130px] h-[34px] group"
            >
              Shop Now
              <ArrowRight className="w-[14px] h-[14px] ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Center Image */}
          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none z-10">
            {/* Soft gradient masks to blend the stethoscope image naturally into the banner background */}
            <div className="w-full h-full max-w-[500px] relative flex justify-center items-center opacity-90 mix-blend-multiply">
              <div className="absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-[#EEF8FD] to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#EEF8FD] to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Stethoscope" 
                className="w-full h-[150px] object-cover object-center"
              />
            </div>
          </div>
          
          {/* Mobile Image (shown only on small screens) */}
          <div className="md:hidden w-full h-[100px] relative bg-[#EEF8FD] z-10 mix-blend-multiply">
             <div className="absolute inset-x-0 top-0 h-[30px] bg-gradient-to-b from-[#EEF8FD] to-transparent z-10"></div>
             <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Medical Stethoscope" 
                className="w-full h-full object-cover object-center"
              />
          </div>

          {/* Right Handwritten Text */}
          <div className="w-full md:w-[25%] absolute right-0 top-0 bottom-0 hidden lg:flex flex-col items-end justify-center pr-[40px] z-20">
            <div className="transform -rotate-[6deg] flex flex-col items-center">
              <span className="font-['Caveat',cursive,serif] italic text-[#164468] text-[20px] lg:text-[22px] leading-[1.1] text-center">
                Better Health<br/>for Every You
              </span>
              <div className="w-[70px] h-[1.5px] bg-[#3AB4E8] mt-1 rounded-full opacity-80"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
