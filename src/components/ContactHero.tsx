import React from 'react';

export const ContactHero: React.FC = () => {
  return (
    <section className="w-full bg-[#EDF6FB] relative overflow-hidden h-[auto] min-h-[350px] lg:h-[450px] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%] h-full flex flex-col justify-center relative z-10 py-16 lg:py-0">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center z-20">
          <div className="flex items-center text-[14px] lg:text-[16px] text-[#315A7A] mb-[12px] lg:mb-[16px]">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </div>
          
          <h1 className="font-heading text-[#073B60] text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-[1.1] mb-[16px] tracking-tight">
            Contact Us
          </h1>
          
          <p className="text-[#315A7A] text-[18px] lg:text-[22px] leading-[1.6] max-w-[600px]">
            We're here to help. Get in touch with our team,<br className="hidden md:block"/>
            for any questions, support or feedback.
          </p>
        </div>

      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-[45%] h-[350px] lg:h-full lg:absolute lg:right-0 lg:top-0 relative flex justify-end z-0">
        <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-gradient-to-t lg:bg-gradient-to-r from-[#EDF6FB] via-[#EDF6FB]/80 to-transparent z-10"></div>
        {/* Using a friendly female support/receptionist image */}
        <img 
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Customer Support Professional" 
          className="w-full h-full object-cover object-top lg:object-center mix-blend-normal opacity-95"
        />
      </div>
    </section>
  );
};
