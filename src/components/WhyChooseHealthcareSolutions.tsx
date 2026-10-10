import React from 'react';
import { UserRound, ShieldCheck, HeartPulse, Stethoscope, Sparkles } from 'lucide-react';

export const WhyChooseHealthcareSolutions: React.FC = () => {
  return (
    <section className="bcon-why-choose w-full bg-[#F1FAFD] font-sans pb-[60px] md:pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 pt-[40px] md:pt-[60px]">
        
        {/* Heading */}
        <h2 className="font-serif text-[#10496B] text-[24px] md:text-[28px] font-bold leading-[1.15]">
          Why Choose BCON Healthcare Solutions?
        </h2>
        
        {/* Subtitle */}
        <p className="text-[#55768C] text-[12px] md:text-[14px] leading-[1.6] mt-[12px]">
          We go beyond products — we provide complete care solutions.
        </p>

        {/* Feature Columns */}
        <div className="flex flex-row items-start justify-between w-full mt-[60px] md:mt-[80px] relative">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#E0F3FC] border border-[#10496B]/20 flex items-center justify-center">
              <UserRound className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] text-[#10496B]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#123F60] text-[14px] md:text-[16px] font-semibold mt-[24px] text-center">
              Expert Guidance
            </h3>
            <p className="text-[#607E93] text-[10px] md:text-[12px] leading-[1.6] text-center mt-[12px]">
              From healthcare professionals<br/>
              and specialists.
            </p>
            {/* Divider */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[140px] md:h-[180px] bg-[#D8EAF2] hidden md:block"></div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#E0F3FC] border border-[#10496B]/20 flex items-center justify-center">
              <ShieldCheck className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] text-[#10496B]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#123F60] text-[14px] md:text-[16px] font-semibold mt-[24px] text-center">
              Quality Assurance
            </h3>
            <p className="text-[#607E93] text-[10px] md:text-[12px] leading-[1.6] text-center mt-[12px]">
              Safe, verified and<br/>
              trusted solutions.
            </p>
            {/* Divider */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[140px] md:h-[180px] bg-[#D8EAF2] hidden md:block"></div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#E0F3FC] border border-[#10496B]/20 flex items-center justify-center">
              <HeartPulse className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] text-[#10496B]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#123F60] text-[14px] md:text-[16px] font-semibold mt-[24px] text-center">
              Convenient Access
            </h3>
            <p className="text-[#607E93] text-[10px] md:text-[12px] leading-[1.6] text-center mt-[12px]">
              Healthcare support<br/>
              whenever you need it.
            </p>
            {/* Divider */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[140px] md:h-[180px] bg-[#D8EAF2] hidden md:block"></div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#E0F3FC] border border-[#10496B]/20 flex items-center justify-center">
              <Stethoscope className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] text-[#10496B]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#123F60] text-[14px] md:text-[16px] font-semibold mt-[24px] text-center">
              Personalized Care
            </h3>
            <p className="text-[#607E93] text-[10px] md:text-[12px] leading-[1.6] text-center mt-[12px]">
              Tailored to your unique<br/>
              health needs.
            </p>
            {/* Divider */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[140px] md:h-[180px] bg-[#D8EAF2] hidden md:block"></div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center w-1/5 relative">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-[#E0F3FC] border border-[#10496B]/20 flex items-center justify-center">
              <Sparkles className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] text-[#10496B]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#123F60] text-[14px] md:text-[16px] font-semibold mt-[24px] text-center">
              Better Tomorrow
            </h3>
            <p className="text-[#607E93] text-[10px] md:text-[12px] leading-[1.6] text-center mt-[12px]">
              Healthier you,<br/>
              happier family.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
