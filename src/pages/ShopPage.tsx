import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ShopHeroSection } from '../components/ShopHeroSection';
import { ShopCategoriesStrip } from '../components/ShopCategoriesStrip';
import { ShopProductListing } from '../components/ShopProductListing';
import { ShoppingBenefitsStrip } from '../components/ShoppingBenefitsStrip';
import { HealthcareExpertBanner } from '../components/HealthcareExpertBanner';
import { NewsletterSignup } from '../components/NewsletterSignup';

export const ShopPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-navy selection:bg-brand-blue selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <ShopHeroSection />
        <ShopCategoriesStrip />
        <ShopProductListing />
        <ShoppingBenefitsStrip />
        <HealthcareExpertBanner />
      </main>
      <NewsletterSignup />
      <Footer />
    </div>
  );
};
