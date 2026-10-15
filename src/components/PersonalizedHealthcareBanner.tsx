import React from 'react';
import { ArrowRight, Users, ShieldCheck, Shield, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PersonalizedHealthcareBanner: React.FC = () => {
  return (
    <section className="bcon-personalized-banner w-full px-5 md:px-8 lg:px-12 py-[40px] md:py-[60px] font-sans">
      <div className="bcon-personalized-banner__container max-w-[1440px] w-full mx-auto h-auto md:min-h-[400px] bg-[#EAF7FC] rounded-[16px] border border-[#D2EAF5] overflow-hidden flex flex-col md:flex-row md:items-center relative">
        
        {/* Optional subtle botanical overlay if needed, omitted for cleanliness unless required */}
        <div className="bcon-personalized-banner__bg-pattern absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

        {/* Left Zone: Text & Button */}
        <div className="bcon-personalized-banner__left w-full md:w-[39%] pl-[40px] md:pl-[60px] pr-[32px] py-[50px] md:py-[60px] flex flex-col justify-center relative z-10">
          <h2 className="bcon-personalized-banner__heading font-serif text-[#10496B] text-[32px] md:text-[40px] font-bold leading-[1.1] mb-[16px]">
            Personalized Healthcare<br/>
            for Every Stage of Life
          </h2>
          <p className="bcon-personalized-banner__desc text-[#55768C] text-[16px] md:text-[18px] leading-[1.6] mb-[24px]">
            From preventive care to specialized treatment,<br/>
            BCON Healthcare is with you at every step.
          </p>
          <Link 
            to="/solutions" 
            className="bcon-personalized-banner__button inline-flex items-center justify-center bg-[#0B496D] text-white text-[16px] font-medium rounded-full w-[200px] h-[48px] hover:bg-[#083552] transition-colors group"
          >
            Explore All Solutions
            <ArrowRight className="w-[16px] h-[16px] ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Center Zone: Family Photo */}
        <div className="bcon-personalized-banner__center w-full md:w-[36%] relative z-0 flex-shrink-0 flex items-center justify-center py-6 md:py-8 my-auto">
          {/* Subtle fade edges to blend image if it doesn't span full height perfectly */}
          <div className="absolute inset-y-0 left-0 w-[40px] bg-gradient-to-r from-[#EAF7FC] to-transparent z-10 hidden md:block pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-[40px] bg-gradient-to-l from-[#EAF7FC] to-transparent z-10 hidden md:block pointer-events-none"></div>
          <img 
            src="/personalized-healthcare.jpg" 
            alt="Personalized Healthcare for Every Stage of Life" 
            className="w-full h-auto max-h-[350px] object-cover object-center rounded-[8px]"
          />
        </div>

        {/* Right Zone: Benefits */}
        <div className="bcon-personalized-banner__right w-full md:w-[25%] flex flex-col justify-center gap-[12px] pl-[20px] pr-[40px] md:pr-[60px] py-[40px] md:py-[60px] relative z-10 bg-[#EAF7FC]">
          
          <div className="bcon-personalized-banner__benefit flex items-center bg-[#F4FBFE] rounded-[12px] h-[48px] md:h-[56px] px-[20px] border border-white/50 shadow-sm">
            <Users className="w-[20px] h-[20px] text-[#10496B] mr-[16px]" strokeWidth={1.5} />
            <span className="text-[#315D78] text-[14px] md:text-[16px] font-medium">All Age Groups</span>
          </div>
          
          <div className="bcon-personalized-banner__benefit flex items-center bg-[#F4FBFE] rounded-[12px] h-[48px] md:h-[56px] px-[20px] border border-white/50 shadow-sm">
            <ShieldCheck className="w-[20px] h-[20px] text-[#10496B] mr-[16px]" strokeWidth={1.5} />
            <span className="text-[#315D78] text-[14px] md:text-[16px] font-medium">Trusted Experts</span>
          </div>
          
          <div className="bcon-personalized-banner__benefit flex items-center bg-[#F4FBFE] rounded-[12px] h-[48px] md:h-[56px] px-[20px] border border-white/50 shadow-sm">
            <Shield className="w-[20px] h-[20px] text-[#10496B] mr-[16px]" strokeWidth={1.5} />
            <span className="text-[#315D78] text-[14px] md:text-[16px] font-medium">Better Outcomes</span>
          </div>
          
          <div className="bcon-personalized-banner__benefit flex items-center bg-[#F4FBFE] rounded-[12px] h-[48px] md:h-[56px] px-[20px] border border-white/50 shadow-sm">
            <UserCircle2 className="w-[20px] h-[20px] text-[#10496B] mr-[16px]" strokeWidth={1.5} />
            <span className="text-[#315D78] text-[14px] md:text-[16px] font-medium">Your Health, Our Priority</span>
          </div>

        </div>

      </div>
    </section>
  );
};
