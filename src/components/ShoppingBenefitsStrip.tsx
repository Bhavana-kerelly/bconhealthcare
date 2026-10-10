import React from 'react';
import { ShieldCheck, CreditCard, Truck, Headset } from 'lucide-react';

export const ShoppingBenefitsStrip: React.FC = () => {
  return (
    <div className="w-full bg-white pb-[40px] lg:pb-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[70px]">
        {/* We want it to align with the product grid. The product grid was adjacent to a 170px sidebar with 32px gap.
            However, looking at the screenshot, the benefits strip seems to span only the width of the product grid, 
            or maybe slightly more, but it definitely leaves empty space on the left where the sidebar is.
            Actually, the screenshot shows the benefits strip and banner spanning the entire width of the right column (product grid) PLUS the sidebar width? 
            Let me re-examine. 
            "Approximate left position: 254px" - This means it aligns with the LEFT edge of the product grid (since sidebar is ~170px + padding).
            So I will place it inside a container that offsets it by the sidebar width, OR just make it part of the main right column.
            Since it's a separate section component, I can give it a left margin on desktop to match the grid.
        */}
        <div className="flex justify-center">
          <div className="w-full bg-[#EFF7FC] rounded-[7px] py-[32px] px-[24px] lg:px-[40px] flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
            
            {/* Item 1 */}
            <div className="flex flex-1 items-center gap-4 px-2 group">
              <ShieldCheck className="w-[32px] h-[32px] text-[#104C7B] stroke-[1.5] transition-colors duration-200 group-hover:text-[#2A75AD]" />
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[14px] font-semibold text-[#123F63] leading-[1.2] mb-1">
                  Quality-assured<br/>products
                </span>
                <span className="text-[10.5px] lg:text-[12px] text-[#7C96AD] leading-tight">
                  Only genuine brands & products
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-[45px] bg-[#D8E8F3]"></div>

            {/* Item 2 */}
            <div className="flex flex-1 items-center gap-4 px-4 lg:px-6 group">
              <CreditCard className="w-[32px] h-[32px] text-[#104C7B] stroke-[1.5] transition-colors duration-200 group-hover:text-[#2A75AD]" />
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[14px] font-semibold text-[#123F63] leading-[1.2] mb-1">
                  Secure payments
                </span>
                <span className="text-[10.5px] lg:text-[12px] text-[#7C96AD] leading-tight">
                  Multiple payment options
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-[45px] bg-[#D8E8F3]"></div>

            {/* Item 3 */}
            <div className="flex flex-1 items-center gap-4 px-4 lg:px-6 group">
              <Truck className="w-[32px] h-[32px] text-[#104C7B] stroke-[1.5] transition-colors duration-200 group-hover:text-[#2A75AD]" />
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[14px] font-semibold text-[#123F63] leading-[1.2] mb-1">
                  Reliable delivery
                </span>
                <span className="text-[10.5px] lg:text-[12px] text-[#7C96AD] leading-tight">
                  Across India
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] h-[45px] bg-[#D8E8F3]"></div>

            {/* Item 4 */}
            <div className="flex flex-1 items-center gap-4 px-4 lg:px-6 group">
              <Headset className="w-[32px] h-[32px] text-[#104C7B] stroke-[1.5] transition-colors duration-200 group-hover:text-[#2A75AD]" />
              <div className="flex flex-col">
                <span className="text-[12px] lg:text-[14px] font-semibold text-[#123F63] leading-[1.2] mb-1">
                  Easy product support
                </span>
                <span className="text-[10.5px] lg:text-[12px] text-[#7C96AD] leading-tight">
                  We're here to help
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
