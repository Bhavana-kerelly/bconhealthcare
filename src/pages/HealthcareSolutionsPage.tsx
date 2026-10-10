import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExploreHealthcareSolutions } from '../components/ExploreHealthcareSolutions';
import { HealthcareSolutionsHero } from '../components/HealthcareSolutionsHero';
import { PersonalizedHealthcareBanner } from '../components/PersonalizedHealthcareBanner';
import { WhyChooseHealthcareSolutions } from '../components/WhyChooseHealthcareSolutions';

export const HealthcareSolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fbfe] font-sans text-[#103F60] selection:bg-[#10496B] selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HealthcareSolutionsHero />
        {/* We place the exact requested ExploreHealthcareSolutions component here */}
        <ExploreHealthcareSolutions />
        <PersonalizedHealthcareBanner />
        <WhyChooseHealthcareSolutions />
      </main>

      <Footer />
    </div>
  );
};
