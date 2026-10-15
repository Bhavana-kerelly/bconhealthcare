import React from 'react';
import { Link } from 'react-router-dom';

const footerColumns = [
  {
    title: "Healthcare",
    links: [
      { label: "Healthcare Solutions", to: "/solutions" },
      { label: "Home Healthcare", to: "/solutions" },
      { label: "Wellness", to: "/solutions" },
      { label: "Resources", to: "/#journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About BCON", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socialLinks = [
  { 
    icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, 
    label: "Facebook", 
    href: "#" 
  },
  { 
    icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, 
    label: "Instagram", 
    href: "#" 
  },
  { 
    icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, 
    label: "YouTube", 
    href: "#" 
  },
  { 
    icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, 
    label: "LinkedIn", 
    href: "#" 
  },
  { 
    icon: <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, 
    label: "Twitter", 
    href: "#" 
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-brand-navy flex flex-col">
      {/* SECTION 11: Main Footer */}
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] pt-[60px] pb-[40px] lg:pt-[80px] lg:pb-[60px]">
        
        <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-between gap-10 lg:gap-8">
          
          {/* Column 01 - BCON Brand */}
          <div className="flex flex-col w-full md:w-[40%] lg:w-[25%] lg:max-w-[280px]">
            {/* Logo */}
            <div className="flex items-center mb-6">
              <Link to="/" aria-label="BCON Healthcare Home">
                <img 
                  src="/logo-footer.png" 
                  alt="BCON Healthcare Logo" 
                  className="h-[65px] lg:h-[75px] w-auto object-contain origin-left hover:opacity-90 transition-opacity" 
                />
              </Link>
            </div>
            
            <p className="text-[14px] text-[#D7E0E8] leading-[1.6] mb-8 max-w-[260px]">
              Better Products. Better Care. A Healthier You.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-[36px] h-[36px] rounded-full border border-white/20 flex items-center justify-center text-[#D7E0E8] hover:text-white hover:border-white/50 transition-colors duration-250"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-row flex-wrap gap-12 sm:gap-20 lg:gap-32">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col min-w-[140px]">
                <h4 className="text-[16px] font-semibold text-white mb-5 tracking-wide">
                  {column.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.to} 
                        className="text-[14px] text-[#D7E0E8] hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 12: Bottom Copyright / Legal Bar */}
      <div className="w-full border-t border-white/10 bg-[#092238]">
        <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px] h-[60px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 py-4 sm:py-0">
          
          <p className="text-[13px] text-[#D7E0E8]">
            © {currentYear} BCON Healthcare. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#privacy" className="text-[13px] text-[#D7E0E8] hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-white/20 text-[13px] hidden sm:inline">|</span>
            <a href="#terms" className="text-[13px] text-[#D7E0E8] hover:text-white transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-white/20 text-[13px] hidden sm:inline">|</span>
            <a href="#refund" className="text-[13px] text-[#D7E0E8] hover:text-white transition-colors duration-200">
              Refund Policy
            </a>
            <span className="text-white/20 text-[13px] hidden sm:inline">|</span>
            <a href="#shipping" className="text-[13px] text-[#D7E0E8] hover:text-white transition-colors duration-200">
              Shipping Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
