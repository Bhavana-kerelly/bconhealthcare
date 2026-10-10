import React, { useState } from 'react';
import { Phone, Mail, MapPin, Share2, ArrowRight } from 'lucide-react';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full bg-white pt-[40px] pb-[50px] lg:pt-[60px] lg:pb-[70px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[6%] flex flex-col md:flex-row gap-[30px] lg:gap-[60px] relative">
        
        {/* Left Column: Get in Touch (approx 34%) */}
        <div className="w-full md:w-[34%] flex flex-col">
          <h2 className="font-heading text-[#073B60] text-[16px] lg:text-[18px] font-bold mb-[28px]">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-[20px]">
            {/* Call Us */}
            <div className="flex items-start gap-4 pb-[20px] border-b border-[#D7EAF5]">
              <div className="w-[36px] h-[36px] rounded-full bg-[#EEF8FD] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-[18px] h-[18px] text-[#086AA5]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#073B60] text-[13px] mb-1">Call Us</span>
                <a href="tel:+9118001234567" className="text-[#315A7A] text-[12px] font-medium hover:text-[#086AA5] transition-colors mb-0.5">
                  +91 1800 123 4567
                </a>
                <span className="text-[#6486A1] text-[11px]">(Mon - Sat, 9 AM - 6 PM)</span>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start gap-4 pb-[20px] border-b border-[#D7EAF5]">
              <div className="w-[36px] h-[36px] rounded-full bg-[#EEF8FD] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-[18px] h-[18px] text-[#086AA5]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#073B60] text-[13px] mb-1">Email Us</span>
                <a href="mailto:support@bconhealthcare.com" className="text-[#315A7A] text-[12px] font-medium hover:text-[#086AA5] transition-colors">
                  support@bconhealthcare.com
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex items-start gap-4 pb-[20px] border-b border-[#D7EAF5]">
              <div className="w-[36px] h-[36px] rounded-full bg-[#EEF8FD] flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-[18px] h-[18px] text-[#086AA5]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#073B60] text-[13px] mb-1">Visit Us</span>
                <span className="text-[#315A7A] text-[12px] leading-[1.4]">
                  BCON Healthcare Pvt. Ltd.<br/>
                  Hyderabad, Telangana - 500001
                </span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full bg-[#EEF8FD] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Share2 className="w-[18px] h-[18px] text-[#086AA5]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#073B60] text-[13px] mb-2">Follow Us</span>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-[18px] h-[18px] rounded-full bg-[#073B60] flex items-center justify-center text-white hover:bg-[#086AA5] transition-colors">
                    <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="w-[18px] h-[18px] rounded-full bg-[#073B60] flex items-center justify-center text-white hover:bg-[#086AA5] transition-colors">
                    <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.078 0 12 0 12s0 3.922.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.922 24 12 24 12s0-3.922-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" className="w-[18px] h-[18px] rounded-full bg-[#073B60] flex items-center justify-center text-white hover:bg-[#086AA5] transition-colors">
                    <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="w-[18px] h-[18px] rounded-full bg-[#073B60] flex items-center justify-center text-white hover:bg-[#086AA5] transition-colors">
                    <svg className="w-[9px] h-[9px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider (Desktop only) */}
        <div className="hidden md:block absolute left-[38%] xl:left-[36%] top-0 bottom-0 w-[1px] bg-[#D7EAF5]"></div>

        {/* Right Column: Send Us a Message (approx 64%) */}
        <div className="w-full md:flex-1 flex flex-col md:pl-[20px] lg:pl-[40px]">
          <h2 className="font-heading text-[#073B60] text-[16px] lg:text-[18px] font-bold mb-[28px]">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[12px] text-[#315A7A] font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                className="w-full h-[44px] bg-white border border-[#D9EAF5] rounded-[5px] px-[16px] text-[13px] text-[#073B60] placeholder-[#8BB2CC] focus:outline-none focus:border-[#086AA5] focus:ring-1 focus:ring-[#086AA5] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[12px] text-[#315A7A] font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address" 
                className="w-full h-[44px] bg-white border border-[#D9EAF5] rounded-[5px] px-[16px] text-[13px] text-[#073B60] placeholder-[#8BB2CC] focus:outline-none focus:border-[#086AA5] focus:ring-1 focus:ring-[#086AA5] transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-[12px] text-[#315A7A] font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select 
                  id="subject" 
                  name="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-[44px] bg-white border border-[#D9EAF5] rounded-[5px] px-[16px] text-[13px] text-[#073B60] focus:outline-none focus:border-[#086AA5] focus:ring-1 focus:ring-[#086AA5] transition-all appearance-none cursor-pointer"
                  style={{ color: formData.subject === '' ? '#8BB2CC' : '#073B60' }}
                >
                  <option value="" disabled hidden>Select Subject</option>
                  <option value="Product Enquiry" className="text-[#073B60]">Product Enquiry</option>
                  <option value="Order Support" className="text-[#073B60]">Order Support</option>
                  <option value="Delivery Information" className="text-[#073B60]">Delivery Information</option>
                  <option value="Returns and Refunds" className="text-[#073B60]">Returns and Refunds</option>
                  <option value="General Enquiry" className="text-[#073B60]">General Enquiry</option>
                  <option value="Other" className="text-[#073B60]">Other</option>
                </select>
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="#086AA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[12px] text-[#315A7A] font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?" 
                className="w-full h-[100px] bg-white border border-[#D9EAF5] rounded-[5px] px-[16px] py-[12px] text-[13px] text-[#073B60] placeholder-[#8BB2CC] focus:outline-none focus:border-[#086AA5] focus:ring-1 focus:ring-[#086AA5] transition-all resize-none"
              ></textarea>
            </div>

            <div className="mt-1">
              <button 
                type="submit"
                className="flex items-center justify-center bg-[#075987] hover:bg-[#054062] transition-colors text-white text-[12px] font-medium rounded-full w-[150px] h-[36px] group mt-2"
              >
                Send Message
                <ArrowRight className="w-[14px] h-[14px] ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
