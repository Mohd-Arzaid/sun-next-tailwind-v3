import AuditsMarquee from "@/components/home/audits-marquee";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import LogoTicker from "@/components/home/logo-ticker";
import OurServices from "@/components/home/our-services";
import WebinarSeminarMarquee from "@/components/home/webinar-seminar-marquee";
import LatestNews from "@/components/home/latest-news";
import Countries from "@/components/home/countries";
import CertificationAndAchievements from "@/components/home/certification-and-achievements";
import WhatsOurCustomersSaySection from "@/components/home/whats-our-customers-say-section";
import VideoSection from "@/components/home/video-section";

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
      <VideoSection />
    </div>
  );
}
