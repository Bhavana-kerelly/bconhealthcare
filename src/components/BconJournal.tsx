import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type JournalArticle = {
  category: string;
  title: string;
  image: string;
  href: string;
  imageAlt: string;
};

const journalArticles: JournalArticle[] = [
  {
    category: "Health Guide",
    title: "Understanding Your Blood Pressure: What the Numbers Mean",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#blood-pressure-guide",
    imageAlt: "Close-up of blood pressure monitor on arm"
  },
  {
    category: "Healthcare Guide",
    title: "How to Choose the Right Healthcare Device for Home Use",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#choose-healthcare-device",
    imageAlt: "Home healthcare device in bright setting"
  },
  {
    category: "Wellness",
    title: "Everyday Habits That Support Better Wellness",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    href: "#everyday-habits",
    imageAlt: "Person walking outdoors in natural environment"
  }
];

export const BconJournal: React.FC = () => {
  return (
    <section className="w-full bg-white pb-[80px] lg:pb-[100px]">
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[28px] lg:text-[36px] font-heading font-semibold text-brand-navy leading-tight mb-2">
              From the BCON Journal
            </h2>
            <p className="text-[14px] lg:text-[16px] text-brand-muted">
              Health insights for a better tomorrow.
            </p>
          </motion.div>
          
          <motion.a 
            href="#all-articles"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group inline-flex items-center text-[13px] lg:text-[15px] font-medium text-brand-navy hover:text-brand-blue transition-colors duration-250 pb-1"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-250 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {journalArticles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.href}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-row bg-white border border-[#E5E7EB] rounded-[10px] overflow-hidden min-h-[160px] lg:min-h-[180px] hover:border-gray-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Left */}
              <div className="w-[40%] h-full relative overflow-hidden bg-[#F9FAFB] flex-shrink-0">
                <img 
                  src={article.image} 
                  alt={article.imageAlt} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content Right */}
              <div className="w-[60%] p-5 lg:p-6 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-block bg-[#F1F7FA] text-[#5A6B82] text-[10px] lg:text-[11px] font-medium px-2 py-1 rounded-[4px] uppercase tracking-wider mb-3">
                    {article.category}
                  </span>
                  
                  <h4 className="text-[15px] lg:text-[17px] font-semibold text-brand-navy leading-[1.35] line-clamp-3 group-hover:text-brand-blue transition-colors duration-250">
                    {article.title}
                  </h4>
                </div>
                
                <span className="inline-flex items-center text-[12px] lg:text-[13px] font-medium text-brand-navy/80 group-hover:text-brand-navy mt-4">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
