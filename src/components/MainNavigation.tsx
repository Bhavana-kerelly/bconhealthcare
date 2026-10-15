import React from 'react';
import { Link } from 'react-router-dom';

export const MainNavigation: React.FC = () => {
  return (
    <nav className="w-full h-[76px] lg:h-[86px] bg-white flex items-center border-b border-brand-border/40">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="BCON Healthcare Logo" 
              className="h-[74px] lg:h-[84px] w-auto object-contain scale-[1.3] lg:scale-[1.45] origin-left transition-transform" 
            />
          </Link>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex items-center h-full gap-7 lg:gap-8 text-[14px] font-medium text-brand-secondary-navy">
          <Link to="/" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-100 transition-transform origin-left"></span>
          </Link>

          <Link to="/about" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            About BCON
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </Link>
          <Link to="/solutions" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Healthcare Solutions
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </Link>
          <Link to="/blogs" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Blogs
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </Link>
          <Link to="/contact" className="relative h-full flex items-center hover:text-brand-navy transition-colors group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-250"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
