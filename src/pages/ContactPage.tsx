import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/ContactHero';
import { ContactFormSection } from '../components/ContactFormSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-navy selection:bg-brand-blue selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};
