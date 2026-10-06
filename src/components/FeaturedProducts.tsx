import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const featuredProducts = [
  {
    badge: "Bestseller",
    category: "Medical Devices",
    name: "Omron Blood Pressure Monitor",
    description: "Accurate. Reliable. Easy to use.",
    rating: 4.8,
    reviews: 304,
    price: "₹ 2,999",
    originalPrice: "₹ 3,999",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    badge: "New",
    category: "Personal Care",
    name: "Cetaphil Gentle Skin Cleanser",
    description: "For sensitive skin.",
    rating: 4.7,
    reviews: 89,
    price: "₹ 749",
    originalPrice: "₹ 999",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    badge: "",
    category: "Wellness",
    name: "Fitbit Inspire 3",
    description: "Track your health. Live better.",
    rating: 4.6,
    reviews: 210,
    price: "₹ 11,999",
    originalPrice: "₹ 14,999",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=400&q=80",
  },
  {
    badge: "Top Rated",
    category: "Diagnostics",
    name: "Accu-Chek Glucose Monitor",
    description: "Simple. Accurate. Trusted.",
    rating: 4.9,
    reviews: 156,
    price: "₹ 1,899",
    originalPrice: "₹ 2,499",
    discount: "24% OFF",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80",
  }
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="w-full bg-brand-ivory pt-[40px] pb-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Left Content (20-24%) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[22%] flex flex-col justify-center lg:justify-start"
          >
            <span className="block text-[9px] lg:text-[11px] font-semibold tracking-wide text-brand-navy uppercase mb-4">
              Curated for better care
            </span>
            
            <h2 className="text-[27px] lg:text-[32px] leading-[1.05] font-heading font-semibold text-brand-navy tracking-tight mb-6">
              Healthcare essentials,<br />
              thoughtfully selected.
            </h2>
            
            <a href="#all-products" className="group inline-flex items-center text-[10px] lg:text-[12px] font-medium text-brand-navy hover:text-brand-blue transition-colors duration-250 w-fit">
              View All Products
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-250 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right Content (Product Cards) */}
          <div className="w-full lg:w-[78%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group bg-white rounded-[8px] p-4 lg:p-5 border border-[#F0F0F0] hover:border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-300 flex flex-col h-full min-h-[340px]"
                >
                  {/* Product Image Area */}
                  <div className="relative w-full aspect-[4/3] bg-[#F9FAFB] rounded-[4px] mb-4 overflow-hidden flex items-center justify-center">
                    {product.badge && (
                      <span className="absolute top-2 left-2 z-10 bg-brand-navy text-white text-[9px] font-medium px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                        {product.badge}
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow flex flex-col">
                    <span className="text-[9px] text-brand-muted uppercase tracking-wider mb-1.5 block">
                      {product.category}
                    </span>
                    <h3 className="text-[13px] lg:text-[14px] font-semibold text-brand-navy leading-snug mb-1.5">
                      {product.name}
                    </h3>
                    <p className="text-[10px] lg:text-[11px] text-brand-muted mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-[#F59E0B] text-[11px]">★</span>
                      <span className="text-[10px] font-medium text-brand-navy">{product.rating}</span>
                      <span className="text-[9px] text-brand-muted">({product.reviews})</span>
                    </div>

                    <div className="mt-auto flex flex-col gap-1 mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[15px] font-bold text-brand-navy">{product.price}</span>
                        <span className="text-[10px] text-brand-muted line-through">{product.originalPrice}</span>
                      </div>
                      <span className="text-[9px] font-medium text-brand-blue">{product.discount}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-auto">
                      <button className="flex-grow h-[36px] bg-brand-navy text-white text-[11px] font-medium rounded-[6px] hover:bg-brand-secondary-navy transition-colors duration-250">
                        Add to Cart
                      </button>
                      <button className="w-[36px] h-[36px] flex items-center justify-center border border-gray-200 rounded-[6px] text-brand-navy hover:bg-gray-50 hover:border-gray-300 transition-colors duration-250">
                        <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-250" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
