import { Hero } from "@/components/sections/hero";
import { SocialStats } from "@/components/sections/social-stats";
import { BrandCollabs } from "@/components/sections/brand-collabs";
import { ContentShowcase } from "@/components/sections/content-showcase";
import { BrandCollaborations } from "@/components/sections/BrandCollaborations";
import { LiveActivity } from "@/components/sections/LiveActivity";
import { Footer } from "@/components/sections/footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialStats />
      <BrandCollabs />
      <BrandCollaborations />
      <ContentShowcase />
      <FAQSection />
      <CTASection />
      <Footer />
      <LiveActivity />
    </>
  );
}
