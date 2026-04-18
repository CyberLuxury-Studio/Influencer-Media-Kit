import { Hero } from "@/components/sections/hero";
import { SocialStats } from "@/components/sections/social-stats";
import { ContentShowcase } from "@/components/sections/content-showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialStats />
      <ContentShowcase />
    </>
  );
}
