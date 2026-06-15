import AuditsMarquee from "@/home-page-sections/AuditsMarquee";
import Contact from "@/home-page-sections/Contact";
import Hero from "@/home-page-sections/Hero";
import LogoTicker from "@/home-page-sections/LogoTicker";
import OurServices from "@/home-page-sections/OurServices";
import WebinarSeminarMarquee from "@/home-page-sections/WebinarSeminarMarquee";
import LatestNews from "@/home-page-sections/LatestNews";
import Countries from "@/home-page-sections/Countries";
import CertificationAndAchievements from "@/home-page-sections/CertificationAndAchievements";
import WhatsOurCustomersSaySection from "@/home-page-sections/WhatsOurCustomersSaySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <OurServices />
      <AuditsMarquee />
      <Contact />
      <WebinarSeminarMarquee />
      <LatestNews />
      <Countries />
      <CertificationAndAchievements />
      <WhatsOurCustomersSaySection />
      <LogoTicker />
      {/*   <VideoSection /> */}
    </div>
  );
}
