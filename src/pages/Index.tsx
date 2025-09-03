import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import ContactsSection from '@/components/ContactsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ReviewsSection />
      <GuaranteesSection />
      <ContactsSection />
      
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 ЭлектроМастер. Профессиональные электромонтажные работы в Москве и области.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;