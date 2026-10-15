import React from 'react';
import { Package, Award, Headset, Lock, Truck, Heart, Users, MapPin } from 'lucide-react';

const benefits = [
  {
    icon: Package,
    heading: 'Wide Range',
    description: 'From daily essentials to\nadvanced medical devices.',
  },
  {
    icon: Award,
    heading: 'Trusted Brands',
    description: 'We partner with globally\nrecognized brands.',
  },
  {
    icon: Headset,
    heading: 'Expert Support',
    description: 'Our team is always\nhere to help.',
  },
  {
    icon: Lock,
    heading: 'Secure Shopping',
    description: '100% safe and\nreliable transactions.',
  },
  {
    icon: Truck,
    heading: 'Fast & Reliable Delivery',
    description: 'Get your products\non time, every time.',
  },
  {
    icon: Heart,
    heading: 'Dedicated to Better Health',
    description: 'Because your well-being\nis our mission.',
  }
];

const stats = [
  {
    icon: Award,
    value: '100+',
    label: 'Quality Brands',
  },
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Customers',
  },
  {
    icon: MapPin,
    value: 'Pan India',
    label: 'Delivery Network',
  },
  {
    icon: Headset,
    value: '24/7',
    label: 'Customer Support',
  }
];

export const AboutWhyChooseUs: React.FC = () => {
  return (
    <section className="w-full bg-white pt-[50px] lg:pt-[70px] pb-[55px] lg:pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%]">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-[24px] lg:gap-[40px] xl:gap-[50px]">
          
          {/* Left Area: Benefits (approx 55%) */}
          <div className="w-full lg:w-[55%] flex flex-col">
            
            <div className="mb-[20px] lg:mb-[24px]">
              <h2 className="font-heading text-[#0D3859] text-[24px] lg:text-[28px] font-bold leading-tight mb-1">
                Why Choose BCON Healthcare
              </h2>
              <p className="text-[#315A7A] text-[13px] lg:text-[14px] leading-normal">
                More than just a store — we are your healthcare partner.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#EEF4F8] mb-[20px] lg:mb-[24px]"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[24px] gap-x-[16px]">
              {benefits.map((ben, idx) => (
                <div key={ben.heading} className="flex flex-col relative pr-[10px]">
                  <div className="w-[40px] h-[40px] bg-[#E0F2FC] rounded-full flex items-center justify-center mb-2.5">
                    <ben.icon className="w-[20px] h-[20px] text-[#086AA5]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-[#0D3859] text-[12px] lg:text-[13px] mb-1">
                    {ben.heading}
                  </h3>
                  <p className="text-[#315A7A] text-[11px] lg:text-[12px] leading-[1.45] whitespace-pre-line">
                    {ben.description}
                  </p>
                  
                  {/* Vertical separator for columns 1 and 2 */}
                  {(idx + 1) % 3 !== 0 && (
                    <div className="hidden md:block absolute right-0 top-0 bottom-[10px] w-[1px] bg-[#EEF4F8]"></div>
                  )}
                  {/* Mobile separator */}
                  {(idx + 1) % 2 !== 0 && (
                    <div className="md:hidden absolute right-0 top-0 bottom-0 w-[1px] bg-[#EEF4F8]"></div>
                  )}
                </div>
              ))}
            </div>
            
          </div>

          {/* Central Area: Image (approx 20%) */}
          <div className="w-full md:w-[60%] md:mx-auto lg:w-[22%] lg:mx-0 flex-shrink-0 flex items-center justify-center">
            <div className="w-full h-[280px] lg:h-[350px] overflow-hidden rounded-[5px]">
              {/* Using a close visual match to a doctor's hand holding a blue object/heart or general positive medical symbol */}
              <img 
                src="/why-choose-us.jpg" 
                alt="Why Choose BCON Healthcare" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Area: Stats (approx 23%) */}
          <div className="w-full lg:w-[23%] flex flex-col justify-center">
            
            <div className="mb-[20px] lg:mb-[24px]">
              <span className="text-[#086AA5] text-[10px] font-semibold uppercase tracking-[1px] mb-2 block">
                Our Impact
              </span>
              <h2 className="font-heading text-[#0D3859] text-[24px] lg:text-[26px] font-bold leading-[1.15]">
                Trusted by<br />Thousands,<br />Across India
              </h2>
            </div>

            <div className="flex flex-col gap-[14px]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-[42px] h-[42px] bg-[#E0F2FC] rounded-[10px] flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-[22px] h-[22px] text-[#086AA5]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#0D3859] font-bold text-[16px] lg:text-[18px] leading-[1.1] mb-0.5">
                      {stat.value}
                    </span>
                    <span className="text-[#315A7A] text-[11px] lg:text-[12px] leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
