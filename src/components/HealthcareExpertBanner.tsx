import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HealthcareExpertBanner: React.FC = () => {
  return (
    <div className="w-full bg-white pb-[60px] lg:pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[70px]">
        
        {/* Container aligned with the product grid */}
        <div className="flex justify-center">
          <div className="w-full bg-[#EEF7FC] rounded-[7px] overflow-hidden flex flex-col md:flex-row relative min-h-[220px] lg:min-h-[260px]">
            
            {/* Left Content Area (approx 45%) */}
            <div className="w-full md:w-[48%] xl:w-[45%] py-[32px] px-[32px] lg:py-[46px] lg:px-[48px] flex flex-col justify-center z-10">
              
              <span className="text-[#10446B] text-[10.5px] lg:text-[11.5px] font-bold uppercase tracking-wider mb-2.5">
                Need help choosing?
              </span>
              
              <h2 className="font-heading text-[#123D60] text-[26px] lg:text-[30px] leading-[1.15] font-semibold mb-3 max-w-[360px]">
                Our healthcare experts<br />are here to help.
              </h2>
              
              <p className="text-[#516E85] text-[12px] lg:text-[13px] leading-[1.6] mb-6 max-w-[340px]">
                Get personalized recommendations based on your<br className="hidden sm:block" />needs and health goals.
              </p>
              
              <button className="flex items-center justify-center bg-[#10446B] hover:bg-[#0C3250] transition-colors text-white text-[11.5px] lg:text-[12.5px] font-bold rounded-full w-[150px] h-[36px] group">
                Talk to our team
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              
            </div>

            {/* Right Image Area (approx 55%) */}
            <div className="w-full md:w-[55%] xl:w-[60%] h-[180px] md:h-auto absolute right-0 top-0 bottom-0 flex justify-end">
              {/* Gradient mask to blend image into the solid background */}
              <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-[#EEF7FC] to-transparent z-10 hidden md:block"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Female doctor consulting with a patient" 
                className="w-full md:w-auto h-full object-cover object-right md:min-w-[600px]"
              />
            </div>
            
            {/* Mobile Image Container (relative so it flows under text on small screens) */}
            <div className="md:hidden w-full h-[180px] relative">
              <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#EEF7FC] to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Female doctor consulting with a patient" 
                className="w-full h-full object-cover object-top"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
