import React from 'react';

export const UtilityBar: React.FC = () => {
  return (
    <div className="w-full bg-brand-navy text-white/90 h-[36px] flex items-center text-[11px] font-medium tracking-wide">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center">
        <div className="flex-1 truncate">
          Trusted Healthcare Products & Solutions
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Track Order</a>
          <span className="w-px h-3 bg-white/20"></span>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          <span className="w-px h-3 bg-white/20"></span>
          <a href="#" className="hover:text-white transition-colors">Help</a>
        </div>
      </div>
    </div>
  );
};
