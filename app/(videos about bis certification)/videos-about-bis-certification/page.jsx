"use client";

// sunconsultants Videos.jsx se migrate — Next.js gallery pattern
import Link from "next/link";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import OurServices from "@/components/common/our-services";
import YouTubeFacade from "@/components/ui/youtube-facade";
import { videosData } from "@/data/videosData";

const VideosPage = () => (
  <>
    <CommonBreadcrumb label="Videos About BIS Certification" />
    <div className="bg-[#F9F7F2] relative">
      <VideosHero />
      <VideosGrid />
      <VideosCTA />
      <div id="services-section">
        <OurServices />
      </div>
    </div>
  </>
);

export default VideosPage;

// Hero section — title + description + CTA buttons
const VideosHero = () => {
  const handleScroll = () => {
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Videos About BIS Certification
        </h1>
        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Discover our comprehensive video library covering BIS certification,
          CDSCO registration, EPR compliance, and more. Expert insights to
          guide you through India&apos;s regulatory landscape.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button
          onClick={handleScroll}
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group"
        >
          <span className="font-medium font-geist">Our Services</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <Link
          href="/contact"
          className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300"
        >
          <span className="font-medium font-geist">Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

// Saari videos ka grid — YouTubeFacade se lazy load
const VideosGrid = () => (
  <div className="max-w-[88rem] mx-auto px-4 md:px-12 pb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videosData.map((video) => (
        <div
          key={video.id}
          className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl bg-white"
        >
          <YouTubeFacade videoId={video.embedId} title={video.title} />
          <div className="px-4 py-3">
            <p className="text-sm md:text-base font-semibold font-geist text-gray-800 line-clamp-2">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Personalized guidance CTA — contact aur about links
const VideosCTA = () => (
  <div className="mx-auto mb-8 max-w-[88rem] rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center md:my-4 md:p-12">
    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1e1e1e] mb-6">
      Need Personalized Guidance?
    </h2>
    <p className="text-base md:text-lg text-gray-600 font-geist leading-relaxed mb-8 max-w-3xl mx-auto">
      While our videos provide comprehensive information, every business has
      unique requirements. Contact our certification experts for personalized
      guidance tailored to your specific needs.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-3 bg-[#1A8781] text-white font-geist font-medium rounded-full hover:bg-[#125E5A] transition-colors duration-200"
      >
        Contact Our Experts
      </Link>
      <Link
        href="/about"
        className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1A8781]/30 text-[#1A8781] font-geist font-medium rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-colors duration-200"
      >
        Learn More About Us
      </Link>
    </div>
  </div>
);
