import React from 'react';

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#EDF6FB] relative overflow-hidden h-[auto] min-h-[440px] lg:h-[540px] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%] h-full flex flex-col lg:flex-row relative z-10">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center py-16 lg:py-0 z-20">
          <div className="flex items-center text-[14px] lg:text-[15px] font-medium text-[#507796] mb-[28px] lg:mb-[32px]">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </div>
          
          <h1 className="font-heading text-[#0D3859] text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-[1.1] mb-[16px] tracking-tight">
            About BCON Healthcare
          </h1>
          
          <h2 className="text-[#1397D5] text-[22px] md:text-[26px] lg:text-[28px] font-semibold mb-[24px] lg:mb-[28px] tracking-wide">
            Better Products. Better Care. A Healthier You.
          </h2>
          
          <p className="text-[#325A77] text-[16px] lg:text-[17px] leading-[1.6] max-w-[600px]">
            At BCON Healthcare, we are committed to making quality<br className="hidden md:block"/>
            healthcare products and solutions accessible to everyone.<br className="hidden md:block"/>
            Because your health matters — today and always.
          </p>
        </div>



      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-[50%] h-[400px] lg:h-full lg:absolute lg:right-0 lg:top-0 relative flex justify-end z-0">
        <div className="absolute inset-y-0 left-0 w-full lg:w-[40%] bg-gradient-to-t lg:bg-gradient-to-r from-[#EDF6FB] via-[#EDF6FB]/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Healthcare professional with a patient" 
          className="w-full h-full object-cover object-center lg:object-right mix-blend-normal opacity-95"
        />
      </div>
    </section>
  );
};
