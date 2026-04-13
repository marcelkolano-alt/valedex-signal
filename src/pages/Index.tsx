import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CredibilityStrip from "@/components/landing/CredibilityStrip";
import WhyItMatters from "@/components/landing/WhyItMatters";
import SignalIntro from "@/components/landing/SignalIntro";
import ProductPreview from "@/components/landing/ProductPreview";
import DealComparison from "@/components/landing/DealComparison";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import SecuritySection from "@/components/landing/SecuritySection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CredibilityStrip />
      <WhyItMatters />
      <SignalIntro />
      <ProductPreview />
      <DealComparison />
      <FeaturesSection />
      <PhilosophySection />
      <SecuritySection />
      <WorkflowSection />
      <UseCasesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
