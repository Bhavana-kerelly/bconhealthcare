import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const mockProducts = [
  {
    id: 1,
    category: 'Medical Devices',
    name: 'Omron Blood Pressure Monitor',
    badge: 'Bestseller',
    badgeColor: 'bg-[#123E62]', // dark blue
    rating: 4.7,
    reviews: 892,
    currentPrice: '2,999',
    originalPrice: '3,499',
    discount: '14% OFF',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    category: 'Personal Healthcare',
    name: 'Infrared Thermometer',
    badge: 'Popular',
    badgeColor: 'bg-[#55B3D5]', // cyan
    rating: 4.6,
    reviews: 634,
    currentPrice: '1,499',
    originalPrice: '1,999',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    category: 'Medical Devices',
    name: 'Pulse Oximeter',
    badge: null,
    rating: 4.5,
    reviews: 521,
    currentPrice: '1,199',
    originalPrice: '1,499',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1631815587646-b85a1bb02246?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    category: 'Personal Healthcare',
    name: 'Gentle Skin Cleanser',
    badge: null,
    rating: 4.6,
    reviews: 398,
    currentPrice: '749',
    originalPrice: '999',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    category: 'Wellness',
    name: 'Fitness Band 3',
    badge: 'Bestseller',
    badgeColor: 'bg-[#123E62]',
    rating: 4.4,
    reviews: 276,
    currentPrice: '1,999',
    originalPrice: '2,499',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    category: 'Diagnostics',
    name: 'Accu-Chek Glucose Monitor',
    badge: null,
    rating: 4.6,
    reviews: 410,
    currentPrice: '1,899',
    originalPrice: '2,499',
    discount: '24% OFF',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80', // reuse clean isolated image
  },
  {
    id: 7,
    category: 'Hospital Essentials',
    name: 'Nebulizer Machine',
    badge: null,
    rating: 4.5,
    reviews: 332,
    currentPrice: '3,499',
    originalPrice: '4,499',
    discount: '22% OFF',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    category: 'Wellness',
    name: 'Digital Weighing Scale',
    badge: 'Popular',
    badgeColor: 'bg-[#55B3D5]',
    rating: 4.3,
    reviews: 287,
    currentPrice: '1,299',
    originalPrice: '1,799',
    discount: '28% OFF',
    image: 'https://images.unsplash.com/photo-1616464916356-3a40021c1070?auto=format&fit=crop&w=400&q=80',
  }
];

export const ShopProductListing: React.FC = () => {
  const [openFilterMobile, setOpenFilterMobile] = useState(false);

  return (
    <section className="w-full bg-white pb-[40px] lg:pb-[60px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[70px] flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between py-3 border-b border-gray-200">
          <span className="font-semibold text-[#123B5D]">Filters</span>
          <button 
            onClick={() => setOpenFilterMobile(!openFilterMobile)}
            className="text-sm text-[#123B5D] border border-gray-300 px-3 py-1 rounded-sm"
          >
            {openFilterMobile ? 'Close' : 'Filter Products'}
          </button>
        </div>

        {/* LEFT COLUMN - Sidebar */}
        <aside className={`${openFilterMobile ? 'block' : 'hidden'} lg:block w-full lg:w-[220px] xl:w-[240px] flex-shrink-0 bg-[#F2F7FB] rounded-[7px] p-[20px] lg:p-[24px] self-start lg:sticky lg:top-[100px] lg:max-h-[calc(100vh-120px)] overflow-y-auto hide-scrollbar`}>
          <h3 className="text-[14px] font-bold text-[#123B5D] mb-4 pb-3 border-b border-[#DCEAF3]">
            Filter Products
          </h3>

          {/* Filter Group A - Category */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h4 className="text-[12px] font-semibold text-[#123B5D]">Category</h4>
              <ChevronUp className="w-4 h-4 text-[#6E8AA3]" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Medical Devices', count: 8, checked: true },
                { label: 'Personal Healthcare', count: 6, checked: false },
                { label: 'Wellness', count: 4, checked: false },
                { label: 'Diagnostics', count: 3, checked: false },
                { label: 'Hospital Essentials', count: 3, checked: false },
              ].map(opt => (
                <li key={opt.label} className="flex items-center justify-between text-[11.5px] lg:text-[12px]">
                  <label className="flex items-center gap-2.5 cursor-pointer text-[#6E8AA3]">
                    <input type="checkbox" defaultChecked={opt.checked} className="w-4 h-4 rounded-[3px] border-gray-300 text-[#123B5D] focus:ring-transparent" />
                    {opt.label}
                  </label>
                  <span className="text-[#6E8AA3]">({opt.count})</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full h-[1px] bg-[#DCEAF3] mb-5"></div>

          {/* Filter Group B - Price Range */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h4 className="text-[12px] font-semibold text-[#123B5D]">Price Range</h4>
              <ChevronUp className="w-4 h-4 text-[#6E8AA3]" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Under ₹1,000', count: 5 },
                { label: '₹1,000 – ₹2,000', count: 8 },
                { label: '₹2,000 – ₹5,000', count: 7 },
                { label: 'Above ₹5,000', count: 4 },
              ].map(opt => (
                <li key={opt.label} className="flex items-center justify-between text-[11.5px] lg:text-[12px]">
                  <label className="flex items-center gap-2.5 cursor-pointer text-[#6E8AA3]">
                    <input type="checkbox" className="w-4 h-4 rounded-[3px] border-gray-300 text-[#123B5D] focus:ring-transparent" />
                    {opt.label}
                  </label>
                  <span className="text-[#6E8AA3]">({opt.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[1px] bg-[#DCEAF3] mb-5"></div>

          {/* Filter Group C - Brand */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h4 className="text-[12px] font-semibold text-[#123B5D]">Brand</h4>
              <ChevronUp className="w-4 h-4 text-[#6E8AA3]" />
            </div>
            <ul className="flex flex-col gap-3 mb-3">
              {[
                { label: 'Omron', count: 5 },
                { label: 'Accu-Chek', count: 4 },
                { label: 'Beurer', count: 3 },
                { label: 'Dr. Morepen', count: 4 },
                { label: 'Cipla', count: 3 },
              ].map(opt => (
                <li key={opt.label} className="flex items-center justify-between text-[11.5px] lg:text-[12px]">
                  <label className="flex items-center gap-2.5 cursor-pointer text-[#6E8AA3]">
                    <input type="checkbox" className="w-4 h-4 rounded-[3px] border-gray-300 text-[#123B5D] focus:ring-transparent" />
                    {opt.label}
                  </label>
                  <span className="text-[#6E8AA3]">({opt.count})</span>
                </li>
              ))}
            </ul>
            <button className="text-[11.5px] lg:text-[12px] text-[#123B5D] font-medium flex items-center mt-2 hover:underline">
              View More <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#DCEAF3] mb-5"></div>

          {/* Filter Group D - Availability */}
          <div>
            <div className="flex items-center justify-between mb-4 cursor-pointer">
              <h4 className="text-[12px] font-semibold text-[#123B5D]">Availability</h4>
              <ChevronUp className="w-4 h-4 text-[#6E8AA3]" />
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'In Stock', count: 22, checked: true },
                { label: 'Out of Stock', count: 2 },
              ].map(opt => (
                <li key={opt.label} className="flex items-center justify-between text-[11.5px] lg:text-[12px]">
                  <label className="flex items-center gap-2.5 cursor-pointer text-[#6E8AA3]">
                    <input type="checkbox" defaultChecked={opt?.checked} className="w-4 h-4 rounded-[3px] border-gray-300 text-[#123B5D] focus:ring-transparent" />
                    {opt.label}
                  </label>
                  <span className="text-[#6E8AA3]">({opt.count})</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT COLUMN - Products */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5">
            <span className="text-[12px] lg:text-[13px] font-medium text-[#6E8AA3] mb-3 sm:mb-0">
              Showing 24 products
            </span>
            <div className="relative inline-flex items-center h-[34px] bg-white border border-[#DCEAF3] rounded-[6px] px-3.5 cursor-pointer hover:border-gray-300 w-auto min-w-[170px] justify-between">
              <span className="text-[12.5px] lg:text-[13px] font-medium text-[#123B5D]">Sort By: Recommended</span>
              <ChevronDown className="w-4 h-4 text-[#123B5D] ml-3" />
            </div>
          </div>

          {/* Active Filter Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mb-7">
            <div className="h-[30px] bg-[#F2F7FB] border border-[#DCEAF3] rounded-full flex items-center px-3.5 gap-2">
              <span className="text-[11px] lg:text-[12px] font-medium text-[#123B5D]">Medical Devices</span>
              <X className="w-[12px] h-[12px] text-[#123B5D] cursor-pointer" />
            </div>
            <div className="h-[30px] bg-[#F2F7FB] border border-[#DCEAF3] rounded-full flex items-center px-3.5 gap-2">
              <span className="text-[11px] lg:text-[12px] font-medium text-[#123B5D]">In Stock</span>
              <X className="w-[12px] h-[12px] text-[#123B5D] cursor-pointer" />
            </div>
            <div className="h-[30px] bg-[#F2F7FB] border border-[#DCEAF3] rounded-full flex items-center px-3.5 gap-2">
              <span className="text-[11px] lg:text-[12px] font-medium text-[#123B5D]">Best Sellers</span>
              <X className="w-[12px] h-[12px] text-[#123B5D] cursor-pointer" />
            </div>
            <button className="text-[11px] lg:text-[12px] font-medium text-[#123B5D] ml-2 hover:underline">
              Clear All
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[18px]">
            {mockProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="w-full border border-[#DCEAF3] rounded-[6px] bg-white flex flex-col hover:shadow-sm transition-shadow duration-300"
              >
                {/* Image Area */}
                <div className="w-full h-[180px] lg:h-[200px] bg-[#EAF4FA] rounded-t-[5px] relative flex items-center justify-center overflow-hidden p-5">
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-[4px] z-10 tracking-wide uppercase`}>
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Info Area */}
                <div className="p-4 lg:p-5 flex flex-col flex-grow">
                  <span className="text-[10px] text-[#6E8AA3] font-semibold uppercase tracking-wider mb-2">
                    {product.category}
                  </span>
                  
                  <h4 className="text-[13px] lg:text-[15px] font-bold text-[#123B5D] leading-snug mb-2 line-clamp-2 min-h-[36px] lg:min-h-[44px]">
                    {product.name}
                  </h4>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <svg viewBox="0 0 24 24" fill="#F5A623" className="w-[12px] h-[12px]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-[11px] font-bold text-[#F5A623] ml-1.5">{product.rating}</span>
                    <span className="text-[11px] font-medium text-[#6E8AA3] ml-1.5">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center flex-wrap gap-2.5 mb-5">
                    <span className="text-[16px] lg:text-[18px] font-bold text-[#123B5D]">
                      ₹ {product.currentPrice}
                    </span>
                    <span className="text-[11.5px] lg:text-[12px] text-[#6E8AA3] line-through mt-0.5">
                      ₹ {product.originalPrice}
                    </span>
                    <span className="bg-[#F16F61] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[3px] ml-auto sm:ml-0 whitespace-nowrap mt-0.5">
                      {product.discount}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 mt-auto">
                    <button className="flex-1 h-[34px] lg:h-[38px] bg-[#123E62] text-white text-[12px] font-bold rounded-[5px] hover:bg-[#1C4E78] transition-colors">
                      Add to Cart
                    </button>
                    <button className="w-[34px] h-[34px] lg:w-[38px] lg:h-[38px] rounded-full border border-[#DCEAF3] flex items-center justify-center hover:bg-[#F2F7FB] transition-colors flex-shrink-0 text-[#6E8AA3]">
                      <Heart className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px]" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
