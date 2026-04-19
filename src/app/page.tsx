import { Hero } from "@/components/sections/hero";
import { SocialStats } from "@/components/sections/social-stats";
import { BrandCollabs } from "@/components/sections/brand-collabs";
import { ContentShowcase } from "@/components/sections/content-showcase";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialStats />
      <BrandCollabs />
      <ContentShowcase />
      <Footer />
    </>
  );
}
