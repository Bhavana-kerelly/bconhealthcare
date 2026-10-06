
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HealthcareCategories } from './components/HealthcareCategories';

import { FeaturedProducts } from './components/FeaturedProducts';
import { HealthcareSolutionsSection } from './components/HealthcareSolutionsSection';
import { FeaturedCollectionBanner } from './components/FeaturedCollectionBanner';
import { ShopByNeed } from './components/ShopByNeed';
import { WhyCustomersChoose } from './components/WhyCustomersChoose';
import { BconJournal } from './components/BconJournal';
import { BrandStorySection } from './components/BrandStorySection';
import { NewsletterSignup } from './components/NewsletterSignup';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans text-brand-navy selection:bg-brand-blue selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HealthcareCategories />
        <FeaturedProducts />
        <HealthcareSolutionsSection />
        <FeaturedCollectionBanner />
        <ShopByNeed />
        <WhyCustomersChoose />
        <BconJournal />
        <BrandStorySection />
      </main>
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
