import React, { useState, useEffect } from 'react';
import { UtilityBar } from './UtilityBar';
import { MainNavigation } from './MainNavigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full z-50 flex flex-col relative">
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 shadow-sm border-b border-brand-border/40' : 'relative'}`}>
        {!isScrolled && <UtilityBar />}
        <MainNavigation />
      </div>
      {isScrolled && <div className="h-[112px] lg:h-[122px] invisible" aria-hidden="true" />}
    </header>
  );
};
