import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SignalIntro from "@/components/landing/SignalIntro";
import CredibilityStrip from "@/components/landing/CredibilityStrip";
import WorkflowSection from "@/components/landing/WorkflowSection";
import ProductPreview from "@/components/landing/ProductPreview";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import SecuritySection from "@/components/landing/SecuritySection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SignalIntro />
      <CredibilityStrip />
      <WorkflowSection />
      <ProductPreview />
      <FeaturesSection />
      <PhilosophySection />
      <SecuritySection />
      <UseCasesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
