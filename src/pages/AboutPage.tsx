import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AboutHeroSection } from '../components/AboutHeroSection';
import { AboutBrandStory } from '../components/AboutBrandStory';
import { AboutOurValues } from '../components/AboutOurValues';
import { AboutWhyChooseUs } from '../components/AboutWhyChooseUs';
import { AboutOurTrust } from '../components/AboutOurTrust';
import { AboutCtaBanner } from '../components/AboutCtaBanner';
import { NewsletterSignup } from '../components/NewsletterSignup';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-navy selection:bg-brand-blue selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutHeroSection />
        <AboutBrandStory />
        <AboutOurValues />
        <AboutWhyChooseUs />
        <AboutOurTrust />
        <AboutCtaBanner />
      </main>
      <NewsletterSignup />
      <Footer />
    </div>
  );
};
