import Header from "@/components/Header";
import HeroForm from "@/components/HeroForm";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CookieBanner from "@/components/CookieBanner";

const FoodyDelivery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroForm
        heroTitle="Você Cliente Foody Delivery tem 20% de desconto nas duas primeiras mensalidades e isenção da Taxa de implementação."
        heroSubtitle="Descubra porque somos a nova geração de chatbot"
      />
      <VideoSection />
      <FeaturesSection />
      <CookieBanner />
    </div>
  );
};

export default FoodyDelivery;
