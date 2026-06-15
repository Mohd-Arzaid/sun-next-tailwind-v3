"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback, useMemo, memo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "BIS Mark (ISI License) for Foreign Manufacturers",
    description:
      "Comprehensive ISI licensing solution for foreign manufacturers looking to enter the Indian market with quality-certified products.",
    image: "/images/services/bis.jpg",
    path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
  },
  {
    id: 2,
    title: "Scheme X",
    description:
      "Specialized certification program for specific product categories requiring compliance with advanced quality and safety standards.",
    image: "/images/services/biscrs.jpg",
    path: "/indian-bis-certification-under-scheme-x",
  },
  {
    id: 3,
    title: "ISI Mark BIS for Indian Manufacturers",
    description:
      "Domestic certification for Indian manufacturers ensuring products meet Bureau of Indian Standards quality and safety requirements.",
    image: "/images/services/isi-mark.jpg",
    path: "/a-guide-to-bis-certification-indian-bis",
  },
  {
    id: 4,
    title: "BIS CRS Registration",
    description:
      "Compulsory Registration Scheme certification for electronic and IT products ensuring safety and quality compliance.",
    image: "/images/services/biscrs.jpg",
    path: "/what-is-crs-bis-or-crs-registration",
  },
  {
    id: 5,
    title: "CDSCO Registration Certification",
    description:
      "Central Drugs Standard Control Organization approval for medical devices and pharmaceuticals in India.",
    image: "/images/services/cdsco.jpg",
    path: "/cdsco-registration-certification",
  },
  {
    id: 6,
    title: "Plastic Waste Management",
    description:
      "Comprehensive solutions for plastic waste management compliance, helping businesses meet environmental regulations.",
    image: "/images/services/plastic-waste-management.jpg",
    path: "/epr-certificate-for-plastic-waste-management-pwm",
  },
  {
    id: 7,
    title: "EPR Certificate",
    description:
      "Extended Producer Responsibility certification for sustainable waste management and environmental compliance.",
    image: "/images/services/epr-certificate.jpg",
    path: "/a-guide-on-how-to-obtain-epr-certificate",
  },
  {
    id: 8,
    title: "LMPC Certificate",
    description:
      "Legal Metrology Packaged Commodities certification ensuring accurate measurement and proper labeling of packaged goods.",
    image: "/images/services/lmpc.jpg",
    path: "/a-guide-on-how-to-obtain-lmpc-certificate",
  },
];

const ServiceCard = memo(({ service, onNavigate }) => {
  return (
    <div className="min-w-full h-full flex items-center  p-12">
      <div className="grid grid-cols-2 gap-12 items-center h-full">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm w-24 h-24 rounded-2xl shadow-lg">
            <img
              src={service.image}
              alt={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Icon representing ${service.title}`
              }
              title={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Icon representing ${service.title}`
              }
              className="w-20 h-20 rounded-full object-contain"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>

          <h3 className="font-playfair text-4xl font-bold text-neutral-800">
            {service.title}
          </h3>

          <p className="font-geist text-xl text-neutral-600 max-w-lg">
            {service.description}
          </p>

          <button
            onClick={() => onNavigate(service.path)}
            className="flex items-center gap-3 bg-[#1A8781] text-white py-3 px-6 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 w-fit mt-2 group"
          >
            <span className="font-medium text-base">Learn More</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
              <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
            </div>
          </button>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-[#1A8781]/10 rounded-full"></div>
          <div className="hidden md:block absolute -bottom-10 -right-10 w-60 h-60 bg-[#1A8781]/15 rounded-full"></div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#1A8781]/20 relative z-10 h-[350px] flex items-center justify-center">
            <img
              src={service.image}
              alt={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Service icon for ${service.title}`
              }
              title={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Service icon for ${service.title}`
              }
              className="w-48 h-48 rounded-full object-contain"
              width="192"
              height="192"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

const ServiceThumbnail = memo(
  ({ service, index, isActive, onThumbnailClick }) => {
    return (
      <div
        onClick={() => onThumbnailClick(index)}
        role="button"
        tabIndex={0}
        aria-label={`Navigate to ${service.title} page`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onThumbnailClick(index);
          }
        }}
        className={`rounded-xl p-3 md:p-4 transition-all duration-300 border cursor-pointer ${
          isActive
            ? "bg-[#1A8781]/20 border-[#1A8781]/60 shadow-md"
            : "bg-white border-gray-200 hover:border-[#1A8781]/40 hover:bg-[#1A8781]/10"
        }`}
      >
        <div className="flex flex-col items-center text-center gap-1 md:gap-2">
          <div className="mb-0.5 md:mb-1">
            <img
              src={service.image}
              alt={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Small icon for ${service.title}`
              }
              title={
                service.title === "CDSCO Registration Certification"
                  ? "CDSCO Logo"
                  : `Small icon for ${service.title}`
              }
              className="w-8 h-8 md:w-12 md:h-12 rounded-full object-contain mx-auto"
              width="48"
              height="48"
              loading="lazy"
            />
          </div>
          <h3 className="font-geist font-medium text-xs md:text-base leading-tight">
            {service.title}
          </h3>
        </div>
      </div>
    );
  }
);

ServiceThumbnail.displayName = "ServiceThumbnail";

const OurServices = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  const slideTransform = useMemo(
    () => ({
      transform: `translateX(-${activeIndex * 100}%)`,
    }),
    [activeIndex]
  );

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const handleServiceNavigation = useCallback(
    (path) => {
      router.push(path);
    },
    [router]
  );

  const handleThumbnailClick = useCallback(
    (index) => {
      setActiveThumbnail(index);
      const service = services[index];
      if (service && service.path) {
        handleServiceNavigation(service.path);
      }
    },
    [handleServiceNavigation]
  );

  return (
    <div className="bg-gradient-to-b from-[#F9F7F2] to-white pt-8 pb-8  sm:pt-12 md:pt-16 ">
      <div className="max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg mb-2 sm:mb-3">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-geist text-neutral-600 max-w-xl mx-auto">
            We offer end-to-end solutions for all your certification needs to
            enter and thrive in the Indian market.
          </p>
        </div>

        <div className="relative hidden md:block">
          <button
            onClick={prevSlide}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 rounded-full w-[48px] h-[48px] flex items-center justify-center border border-[#1A8781] bg-white hover:bg-[#1A8781]/5 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="w-7 h-7 text-[#1A8781]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next service"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 rounded-full w-[48px] h-[48px] flex items-center justify-center border border-[#1A8781] bg-white hover:bg-[#1A8781]/5 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="w-7 h-7 text-[#1A8781]" />
          </button>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px] bg-gradient-to-br from-[#1A8781]/5 to-[#1A8781]/20 border border-[#1A8781]/30 will-change-transform">
            <div
              className="flex transition-transform duration-500 h-full"
              style={slideTransform}
            >
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onNavigate={handleServiceNavigation}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-8 gap-3">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to service ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-[#1A8781] w-10"
                  : "bg-[#1A8781]/30 hover:bg-[#1A8781]/50"
              }`}
            ></button>
          ))}
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 min-h-[120px] md:min-h-[140px]">
          {services.map((service, index) => (
            <ServiceThumbnail
              key={service.id}
              service={service}
              index={index}
              isActive={activeThumbnail === index}
              onThumbnailClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
