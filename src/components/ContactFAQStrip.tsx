import React from 'react';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactFAQStrip: React.FC = () => {
  return (
    <section className="w-full bg-white pb-[30px] lg:pb-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%]">
        
        <div className="w-full h-[60px] bg-[#EAF7FD] rounded-[8px] flex items-center justify-between px-[20px] lg:px-[30px]">
          
          <div className="flex items-center gap-[12px] lg:gap-[15px]">
            <div className="flex-shrink-0">
              {/* Note: In standard lucide-react, MessageSquareQuote or similar can work. 
                  Adjusting icon styling to match standard chat bubbles. */}
              <MessageSquareQuote className="w-[24px] h-[24px] lg:w-[28px] lg:h-[28px] text-[#086AA5]" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-[#073B60] text-[11px] lg:text-[12px]">
              Frequently Asked Questions
            </h3>
          </div>

          <Link 
            to="/faq" 
            className="flex items-center text-[9px] lg:text-[9.5px] font-semibold text-[#086AA5] hover:text-[#073B60] transition-colors group"
          >
            View All FAQs
            <ArrowRight className="w-[10px] h-[10px] ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

        </div>

      </div>
    </section>
  );
};
