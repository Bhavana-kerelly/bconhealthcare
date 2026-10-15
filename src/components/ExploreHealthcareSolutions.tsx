import React from 'react';
import { ArrowRight, Activity, Stethoscope, Pill, Apple, Flower2, Building2, FlaskConical, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 1,
    title: "Preventive Care",
    description: "Stay ahead of health issues with regular check-ups and screenings.",
    image: "/preventive-care.jpg",
    icon: <Activity className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/preventive-care"
  },
  {
    id: 2,
    title: "Chronic Disease Management",
    description: "Better control. Better living. Expert care for long-term conditions.",
    image: "/chronic-disease.jpg",
    icon: <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/chronic-disease"
  },
  {
    id: 3,
    title: "Medication Management",
    description: "Safe, effective and timely medication support.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <Pill className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/medication"
  },
  {
    id: 4,
    title: "Nutrition & Lifestyle",
    description: "Personalized diet and wellness plans for a healthier you.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <Apple className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/nutrition"
  },
  {
    id: 5,
    title: "Wellness Programs",
    description: "Build healthier habits for a balanced life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <Flower2 className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/wellness"
  },
  {
    id: 6,
    title: "Hospital Solutions",
    description: "Quality care and support for better outcomes.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <Building2 className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/hospital"
  },
  {
    id: 7,
    title: "Diagnostics & Lab Services",
    description: "Accurate results for timely decisions.",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <FlaskConical className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/diagnostics"
  },
  {
    id: 8,
    title: "Telehealth Services",
    description: "Expert care, from the comfort of your home.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <Monitor className="w-6 h-6 md:w-8 md:h-8 text-[#103F60]" strokeWidth={1.5} />,
    link: "/solutions/telehealth"
  }
];

export const ExploreHealthcareSolutions: React.FC = () => {
  return (
    <section className="w-full bg-[#f8fbfe] pt-[60px] md:pt-[80px] pb-[20px] md:pb-[40px] font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[40px] md:mb-[60px] gap-4">
          <div className="flex flex-col">
            <h2 className="font-serif text-[#10496B] text-[32px] md:text-[40px] font-bold leading-tight mb-2">
              Explore Our Healthcare Solutions
            </h2>
            <p className="text-[#56768D] text-[16px] md:text-[18px] leading-normal">
              We offer a wide range of solutions to help you and your family live a healthier, happier life.
            </p>
          </div>
          
          <Link 
            to="/solutions" 
            className="flex-shrink-0 flex items-center justify-center border border-[#d2e2ec] bg-white rounded-full w-[160px] md:w-[180px] h-[40px] md:h-[48px] text-[#103F60] text-[14px] md:text-[16px] font-medium hover:bg-[#f0f6fa] transition-colors group"
          >
            View All Solutions
            <ArrowRight className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] ml-1.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] md:gap-[32px]">
          {solutions.map((solution) => (
            <div 
              key={solution.id} 
              className="flex flex-col bg-white border border-[#e4eff5] rounded-[12px] overflow-hidden h-[340px] md:h-[420px] hover:shadow-[0_4px_12px_rgba(16,73,107,0.06)] transition-shadow duration-300"
            >
              <div className="w-full h-[160px] md:h-[200px] flex-shrink-0 bg-gray-100">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-col flex-1 p-[24px] md:p-[32px] bg-[#fcfdfe]">
                <div className="mb-4">
                  {solution.icon}
                </div>
                
                <h3 className="text-[#103F60] text-[16px] md:text-[18px] font-semibold leading-tight mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-[#658097] text-[12px] md:text-[14px] leading-[1.5] flex-1">
                  {solution.description}
                </p>
                
                <Link 
                  to={solution.link}
                  className="flex items-center text-[#103F60] text-[14px] md:text-[16px] font-medium hover:underline mt-4 group w-fit"
                >
                  Explore
                  <ArrowRight className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
