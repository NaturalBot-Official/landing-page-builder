import Header from "@/components/Header";
import HeroForm from "@/components/HeroForm";
import VideoSection from "@/components/VideoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroForm />
      <VideoSection />
      <FeaturesSection />
      <CookieBanner />
    </div>
  );
};

export default Index;
