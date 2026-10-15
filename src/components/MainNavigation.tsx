import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MainNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About BCON', path: '/about' },
    { name: 'Healthcare Solutions', path: '/solutions' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

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
        <div className="hidden lg:flex items-center h-full gap-7 lg:gap-8 text-[14px] font-medium">
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? currentPath === '/' 
              : currentPath.startsWith(link.path);

            return (
              <Link 
                key={link.path}
                to={link.path} 
                className={`relative h-full flex items-center transition-colors group ${
                  isActive ? 'text-brand-navy font-semibold' : 'text-brand-secondary-navy hover:text-brand-navy'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue transition-transform origin-left ${
                    isActive 
                      ? 'scale-x-100' 
                      : 'scale-x-0 group-hover:scale-x-100 duration-250'
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
