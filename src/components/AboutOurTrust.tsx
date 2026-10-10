import React from 'react';
import { ShieldCheck, Award, UserCheck, Map } from 'lucide-react';

const trustIndicators = [
  {
    icon: ShieldCheck,
    primary: 'Genuine Products',
    secondary: 'Direct from Brands',
  },
  {
    icon: Award,
    primary: 'Certified Quality',
    secondary: '& Safety Standards',
  },
  {
    icon: UserCheck,
    primary: 'Trusted by\nHealthcare Professionals',
    secondary: '', // Empty if layout requires it, or just leave it
  },
  {
    icon: Map,
    primary: 'PAN India',
    secondary: 'Service Network',
  }
];

export const AboutOurTrust: React.FC = () => {
  return (
    <section className="w-full bg-[#EEF8FD] py-[40px] lg:py-[10px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%] lg:h-[140px] flex flex-col lg:flex-row items-center">
        
        {/* Left Heading Block */}
        <div className="w-full lg:w-[28%] flex flex-col mb-[20px] lg:mb-0 lg:pr-[20px] flex-shrink-0">
          <span className="text-[#086AA5] text-[10px] lg:text-[11px] font-semibold uppercase tracking-[1px] mb-1.5">
            Our Trust
          </span>
          <h2 className="font-heading text-[#073B60] text-[22px] lg:text-[26px] font-bold leading-[1.15]">
            Because Your Health<br />is in Good Hands
          </h2>
        </div>

        {/* Right Trust Indicators */}
        <div className="w-full lg:flex-1 flex flex-row flex-wrap lg:flex-nowrap justify-between items-center relative gap-y-[20px]">
          
          {trustIndicators.map((indicator, index) => (
            <React.Fragment key={index}>
              
              <div className="flex flex-col items-center justify-center text-center w-[50%] lg:w-auto lg:flex-1 px-[10px]">
                <div className="w-[44px] h-[44px] flex items-center justify-center mb-1.5">
                  <indicator.icon className="w-[32px] h-[32px] text-[#086AA5]" strokeWidth={1.2} />
                </div>
                <span className="text-[#0D3859] font-medium text-[12px] lg:text-[13px] leading-[1.2] whitespace-pre-line mb-[2px]">
                  {indicator.primary}
                </span>
                {indicator.secondary && (
                  <span className="text-[#6486A1] text-[10px] lg:text-[11px] leading-[1.2]">
                    {indicator.secondary}
                  </span>
                )}
              </div>

              {/* Vertical Separator */}
              {index < trustIndicators.length - 1 && (
                <div className="hidden lg:block w-[1px] h-[85px] bg-[#D7EAF5]"></div>
              )}
              
            </React.Fragment>
          ))}
          
        </div>

      </div>
    </section>
  );
};
