import React from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

export const MainNavigation: React.FC = () => {
  return (
    <nav className="w-full h-[76px] lg:h-[86px] bg-brand-ivory flex items-center border-b border-brand-border/40">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="BCON Healthcare Logo" 
            className="h-[70px] lg:h-[80px] w-auto object-contain scale-[1.1] lg:scale-[1.2] origin-left" 
          />
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center h-full gap-7 lg:gap-8 text-[14px] font-medium text-brand-secondary-navy">
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Shop
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Categories
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            About BCON
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Healthcare Solutions
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Blogs
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
          <a href="#" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-brand-secondary-navy">
          <button className="hover:text-brand-blue transition-colors hover:scale-105 transform duration-200" aria-label="Search">
            <Search className="w-[20px] h-[20px] stroke-[2]" />
          </button>
          <button className="hover:text-brand-blue transition-colors hover:scale-105 transform duration-200" aria-label="Account">
            <User className="w-[20px] h-[20px] stroke-[2]" />
          </button>
          <button className="hover:text-brand-blue transition-colors hover:scale-105 transform duration-200" aria-label="Wishlist">
            <Heart className="w-[20px] h-[20px] stroke-[2]" />
          </button>
          <button className="relative hover:text-brand-blue transition-colors hover:scale-105 transform duration-200" aria-label="Cart">
            <ShoppingCart className="w-[20px] h-[20px] stroke-[2]" />
            <span className="absolute -top-1.5 -right-2 bg-brand-blue text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
