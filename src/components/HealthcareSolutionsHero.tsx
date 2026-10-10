import React from 'react';

export const HealthcareSolutionsHero: React.FC = () => {
  return (
    <section className="bcon-healthcare-hero relative w-full min-h-[300px] md:h-[400px] bg-[#ebf4f9] overflow-hidden flex items-center font-sans">
      
      {/* Background Image Area (Center-Right to Far-Right) */}
      <div className="bcon-healthcare-hero__image absolute top-0 right-0 w-[55%] h-full z-0">
        {/* Soft gradient to blend the image into the pale blue background on the left */}
        <div className="absolute inset-y-0 left-0 w-[150px] bg-gradient-to-r from-[#ebf4f9] to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Healthcare Solutions" 
          className="w-full h-full object-cover object-center opacity-95"
        />
      </div>

      <div className="bcon-healthcare-hero__content relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 h-full flex items-center justify-between">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col">
          <div className="bcon-healthcare-hero__breadcrumb text-[12px] md:text-[14px] text-[#315D78] font-medium mb-[16px]">
            Home / Healthcare Solutions
          </div>
          
          <h1 className="bcon-healthcare-hero__title font-serif text-[#10496B] text-[48px] md:text-[56px] font-bold leading-[1.1] mb-[20px]">
            Healthcare<br />
            Solutions
          </h1>
          
          <p className="bcon-healthcare-hero__description text-[#315D78] text-[16px] md:text-[18px] leading-[1.6] max-w-[560px]">
            Comprehensive healthcare solutions designed to<br className="hidden md:block"/>
            support your wellness journey — from prevention<br className="hidden md:block"/>
            to better living.
          </p>
        </div>



      </div>
    </section>
  );
};
