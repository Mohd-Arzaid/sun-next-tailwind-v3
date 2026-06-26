"use client";

import { useState } from "react";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import OurServices from "@/components/common/our-services";
import Link from "next/link";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const AwardPage = () => {
  return (
    <>
      <CommonBreadcrumb label="Awards" />
      <div className="bg-[#F9F7F2] relative">
        <AuditHero />
        <AuditGallery />
        <div id="services-section">
          <OurServices />
        </div>
      </div>
    </>
  );
};

export default AwardPage;

const AuditHero = () => {
  const handleScroll = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Awards & Recognition
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Explore our collection of awards and recognition certificates received
          by Sun Certifications India, showcasing our commitment to excellence
          in BIS certification and compliance services.
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

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Awards & Recognition Gallery
        </span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        A collection of awards and recognition certificates received by Sun
        Certifications India
      </p>
    </div>
  );
};

const AuditGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      image:
        "/images/awards-and-recognition/Sun-Certification-Footwear-India-Expo.png",
      title: "Sun Certification - Footwear India Expo",
      alt: "Recognition trophy for Sun Certification India for their valuable contribution on BIS certifications at the 17th edition Footwear India Expo Delhi",
      description: "Footwear India Expo",
    },
    {
      id: 2,
      image:
        "/images/awards-and-recognition/Sun-Certification-Agra-Footwear-Conclave.png",
      title: "Sun Certification Recognition – Agra Footwear Conclave",
      alt: "Recognition award presented to Sun Certification India for valuable support in understanding BIS certification at the Agra Footwear Conclave.",
      description: "Strategic Partner to the Footwear Industry",
    },
  ];

  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center relative p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-xl">
                      <svg
                        className="w-8 h-8 text-[#1A8781]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>

                  <img
                    alt={
                      item.alt ||
                      item.description ||
                      item.title ||
                      `Award ${item.id}`
                    }
                    title={
                      item.title ||
                      item.alt ||
                      item.description ||
                      `Award ${item.id}`
                    }
                    loading="lazy"
                    width="600"
                    height="450"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    decoding="async"
                    className={`w-full h-full object-contain object-center transform transition-all duration-700 ${
                      item.id === 2
                        ? "scale-90 group-hover:scale-95"
                        : "group-hover:scale-110"
                    }`}
                    src={item.image}
                    style={{ color: "transparent" }}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1A8781] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {item.description && (
                <div className="mt-4 px-3">
                  <p className="text-lg font-geist font-medium drop-shadow-lg text-neutral-800 text-left">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border-2 border-dashed border-gray-300 hover:border-[#1A8781]/50">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #1A8781 10px, #1A8781 20px)`,
                    }}
                  ></div>
                </div>

                <div className="text-center p-6 relative z-10">
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-500">
                    <svg
                      className="w-12 h-12 mx-auto text-[#1A8781] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-800 font-geist text-lg md:text-xl font-bold mb-2 group-hover:text-[#1A8781] transition-colors duration-300 leading-tight">
                    Many More Awards
                  </h3>
                  <p className="text-gray-500 font-geist text-xs font-semibold uppercase tracking-widest mb-2">
                    Recognition Received
                  </p>
                  <p className="text-gray-400 font-geist text-xs italic">
                    Showcasing our commitment to excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={
                  selectedImage.alt ||
                  selectedImage.title ||
                  selectedImage.description ||
                  `Award ${selectedImage.id}`
                }
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
