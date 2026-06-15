import AuditsMarquee from "@/home-page-sections/AuditsMarquee";
import Hero from "@/home-page-sections/Hero";
import LogoTicker from "@/home-page-sections/LogoTicker";
import OurServices from "@/home-page-sections/OurServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <OurServices />
      <AuditsMarquee />
      {/*   <Contact />
      <WebinarSeminarMarquee />
      <LatestNews />
      <Countries />
      <CertificationAndAchievements />
      <WhatsOurCustomersSaySection />
      <LogoTicker />
      <VideoSection /> */}
    </div>
  );
}
