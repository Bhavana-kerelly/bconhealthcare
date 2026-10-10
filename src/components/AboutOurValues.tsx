import React from 'react';
import { ShieldCheck, Users, Handshake, Lightbulb, Leaf } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck,
    heading: 'Quality First',
    description: 'We ensure only genuine\nand trusted products\nreach you.',
  },
  {
    icon: Users,
    heading: 'Customer Centric',
    description: 'Your health, safety and\nsatisfaction are\nour priority.',
  },
  {
    icon: Handshake,
    heading: 'Integrity',
    description: 'We build trust through\ntransparency and\nhonesty.',
  },
  {
    icon: Lightbulb,
    heading: 'Innovation',
    description: 'We embrace better solutions\nfor a healthier\nfuture.',
  },
  {
    icon: Leaf,
    heading: 'Sustainability',
    description: 'We care for people,\ncommunities and\nthe planet.',
  }
];

export const AboutOurValues: React.FC = () => {
  return (
    <section className="w-full bg-[#EEF8FD] py-[35px] lg:py-[45px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%]">
        
        <div className="mb-[24px] lg:mb-[30px]">
          <h2 className="font-heading text-[#0D3859] text-[24px] lg:text-[28px] font-bold leading-tight mb-2">
            Our Values
          </h2>
          <p className="text-[#315A7A] text-[14px] lg:text-[15px] leading-normal">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-8 lg:gap-0 relative">
          {values.map((val, idx) => (
            <div key={val.heading} className="flex flex-col items-center text-center relative group">
              <div className="w-[49px] h-[49px] bg-[#E0F2FC] rounded-[14px] flex items-center justify-center mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                <val.icon className="w-[26px] h-[26px] text-[#086AA5]" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-bold text-[#0D3859] text-[15px] lg:text-[16px] mb-2">
                {val.heading}
              </h3>
              <p className="text-[#315A7A] text-[12px] lg:text-[13px] leading-[1.6] whitespace-pre-line">
                {val.description}
              </p>

              {/* Desktop vertical divider */}
              {idx < values.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-[20px] bottom-[15px] w-[1px] bg-[#D7EAF5]"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
