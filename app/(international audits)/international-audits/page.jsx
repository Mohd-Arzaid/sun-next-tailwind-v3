"use client";

import React, { useState } from "react";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Add missing imports
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import OurServices from "@/components/common/our-services";

const Hero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          International Audit Excellence
        </h1>
        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          We provide comprehensive audit and certification services across
          industries worldwide, ensuring the highest standards of quality and
          compliance for our clients.
        </p>
      </div>
      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Our Services</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>
        <a href="/contact" className="w-full md:w-auto">
          <button className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
            <span className="font-medium font-geist">Contact Us</span>
          </button>
        </a>
      </div>
      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1 ">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Audit Glimpse
        </span>
      </h2>
      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        A glimpse into our international audit and certification processes
        across various industries
      </p>
    </div>
  );
};

const Gallery = () => {
  const [selectedAudit, setSelectedAudit] = useState(null);

  const galleryImages = [
    {
      id: 1,
      image: "/images/international-audits/bahrain-bis-audit-aluminium-is617-is2590.webp",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 617 and 2590 for one of the world's leading manufacturer in Bahrain",
    },
    {
      id: 2,
      image: "/images/international-audits/vietnam-bis-audit-toys-is9873.webp",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 3,
      image: "/images/international-audits/indonesia-bis-audit-toys-is9873.webp",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Indonesia",
    },
    {
      id: 4,
      image: "/images/international-audits/vietnam-bis-audit-toys-is9873-2.webp",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 5,
      image: "/images/international-audits/italy-bis-audit-footwear-is6721.webp",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 for one of the world's leading manufacturer in Italy",
    },
    {
      id: 6,
      image: "/images/international-audits/vietnam-bis-audit-sewing-machines-is15449.webp",
      description:
        "Successful Audit and Grant of BIS License on Sewing Machines under IS 15449 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 7,
      image: "/images/international-audits/malaysia-bis-audit-toys-is9873.webp",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Malaysia",
    },
    {
      id: 8,
      image: "/images/international-audits/slovenia-bis-audit-hinges-is18297.webp",
      description:
        "Successful Audit and Grant of BIS License on Hinges under IS 18297 for one of the world's leading manufacturer in Slovenia",
    },
    {
      id: 9,
      image: "/images/international-audits/vietnam-bis-audit-steel-products-is6911.webp",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in Vietnam",
    },
    {
      id: 10,
      image: "/images/international-audits/thailand-bis-audit-toys-is9873.webp",
      description:
        "Successful Audit and Grant of BIS License on Toys under IS 9873 for one of the world's leading manufacturer in Thailand",
    },
    {
      id: 11,
      image: "/images/international-audits/usa-bis-audit-steel-products-is6911.webp",
      description:
        "Successful Audit and Grant of BIS License on Steel Products under IS 6911 for one of the world's leading manufacturer in USA",
    },
    {
      id: 12,
      image: "/images/international-audits/spain-bis-audit-aluminium-is1285-is733.webp",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 1285 and IS 733 for one of the world's leading manufacturer in Spain",
    },
    {
      id: 13,
      image: "/images/international-audits/turkey-bis-audit-footwear-is6721-is17043.webp",
      description:
        "Successful Audit and Grant of BIS License on Footwear under IS 6721 and IS 17043 Part 2 for one of the world's leading manufacturer in Turkey",
    },
    {
      id: 14,
      image:
        "/images/international-audits/malaysia-bis-audit-measuring-tape-is1269.webp",
      description:
        "Successful Audit and Grant of BIS License on Measuring Tape under IS 1269 Part 2 for one of the world's leading manufacturer in Malaysia",
    },
    {
      id: 15,
      image: "/images/international-audits/italy-bis-audit-aluminium-is1285.webp",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 1285 for one of the world's leading manufacturer in Italy",
    },
    {
      id: 16,
      image: "/images/international-audits/bahrain-bis-audit-aluminium-is617-bemco.webp",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 617 for one of the world's leading manufacturer in Bahrain",
    },
    {
      id: 17,
      image: "/images/international-audits/bahrain-bis-audit-aluminium-is733-is5082-is5484.webp",
      description:
        "Successful Audit and Grant of BIS License on Aluminium Products under IS 733 , IS 5082 , IS 5484 and IS 398 Part 6 for one of the world's leading manufacturer in Bahrain.",
    },
    {
      id: 18,
      image: "/images/international-audits/malaysia-bis-audit-sewing-machines-is15449.webp",
      description:
        "Successful Audit and Grant of BIS License on Sewing Machines under IS 15449 for one of the world's leading manufacturer in Vietnam.",
    },
    {
      id: 19,
      image:
        "/images/international-audits/germany-bis-factory-audit-furniture-is17634-nobilia.webp",
      alt: "BIS factory audit conducted at M/s Nobilia-Werke J. Stickling GmbH & Co. KG in Germany for furniture products under IS 17634, resulting in successful BIS License grant under FMCS.",
      title:
        "Germany BIS Factory Audit for Furniture (IS 17634) – Nobilia-Werke J. Stickling GmbH & Co. KG",
      description:
        "BIS factory audit conducted at M/s Nobilia-Werke J. Stickling GmbH & Co. KG in Germany for furniture products under IS 17634, resulting in successful BIS License grant under FMCS.",
      detailText:
        "Sun Certifications India successfully facilitated the BIS certification process for M/s Nobilia-Werke J. Stickling GmbH & Co. KG, Germany, a leading furniture manufacturer. As part of the certification journey under the Foreign Manufacturer Certification Scheme (FMCS), a comprehensive BIS Factory Audit was successfully conducted to assess compliance with the requirements of IS 17634 for furniture products. Our team provided complete support throughout the project, including application filing, technical documentation review, audit preparation, coordination with BIS officials, and compliance management. The audit covered manufacturing processes, quality control systems, testing facilities, and product conformity requirements as prescribed by BIS. Following the successful completion of the factory inspection and verification process, the BIS License was granted to the manufacturer.",
    },
    {
      id: 20,
      image:
        "/images/international-audits/germany-bis-factory-audit-haecker-kitchens-is17634.webp",
      alt: "BIS factory audit conducted at M/s Häcker Kitchens GmbH & Co. KG, Germany for furniture products under IS 17634, resulting in successful BIS License grant under FMCS.",
      title:
        "Germany BIS Factory Audit and License Grant for Häcker Kitchens – IS 17634 Furniture Certification",
      description:
        "BIS factory audit conducted at M/s Häcker Kitchens GmbH & Co. KG, Germany for furniture products under IS 17634, resulting in successful BIS License grant under FMCS.",
      detailText:
        "Sun Certifications India successfully assisted M/s Häcker Kitchens GmbH & Co. KG, Germany in obtaining BIS Certification for furniture products under IS 17634 through the Foreign Manufacturer Certification Scheme (FMCS). As part of the certification process, a comprehensive BIS Factory Audit was successfully conducted at the manufacturing facility to evaluate product quality, manufacturing controls, testing capabilities, and compliance with applicable BIS requirements. Our team provided complete support throughout the certification journey, including technical documentation review, application management, audit coordination, compliance guidance, and liaison with BIS authorities. Following the successful completion of the factory audit and verification process, the BIS License was granted, enabling the manufacturer to supply BIS-certified furniture products in the Indian market in compliance with regulatory requirements.",
    },
  ];
  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative mb-4 rounded-2xl"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "none",
              boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 0px",
            }}
          >
            <div
              className={`aspect-[4/3] overflow-hidden rounded-xl relative ${
                item.detailText ? "cursor-pointer" : ""
              }`}
              onClick={() => item.detailText && setSelectedAudit(item)}
              onKeyDown={(e) => {
                if (item.detailText && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setSelectedAudit(item);
                }
              }}
              role={item.detailText ? "button" : undefined}
              tabIndex={item.detailText ? 0 : undefined}
            >
              <img
                alt={item.alt || item.description || `Audit ${item.id}`}
                title={item.title || item.description || `Audit ${item.id}`}
                loading="lazy"
                width="600"
                height="450"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                decoding="async"
                className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
                src={item.image}
                style={{ color: "transparent" }}
              />
              {item.detailText && (
                <div className="absolute inset-0 bg-[#1A8781]/10 md:bg-[#1A8781]/0 md:group-hover:bg-[#1A8781]/20 transition-colors duration-300 flex items-end justify-center pb-4 pointer-events-none">
                  <span className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#1A8781] text-xs font-geist font-medium px-3 py-1.5 rounded-full shadow-sm">
                    Click to read more
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col justify-between py-2 transition-all duration-300 group-hover:px-4">
              <p className="mt-2 max-w-full text-lg font-geist text-neutral-600">
                {item.description ||
                  "A showcase of our international audit and certification services"}
              </p>
            </div>
          </div>
        ))}

        {/* Many More Audits Images Coming Soon Card */}
        <div
          className="group relative mb-4 rounded-2xl"
          style={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "none",
            boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 0px",
          }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="text-gray-800 font-geist text-base md:text-lg font-bold mb-1 group-hover:text-[#1A8781] transition-colors duration-300 leading-tight tracking-wide">
                Many More Audits
              </h3>
              <p className="text-gray-500 font-geist text-xs font-medium uppercase tracking-widest mb-1">
                Conducted Worldwide
              </p>
              <p className="text-gray-400 font-geist text-xs italic">
                Showcasing our extensive audit portfolio
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex items-center justify-center mb-4 px-2">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-[#1A8781]/20 bg-gradient-to-br from-[#1A8781]/5 to-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center px-5 py-5 md:py-6">
            <div className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 bg-[#1A8781]/8 rounded-full" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#1A8781] font-inter text-[11px] md:text-xs font-medium tracking-[0.15em] uppercase">
                  Trusted Certification Partner
                </span>
                <div className="h-[1.5px] w-6 bg-[#1A8781]/40" />
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-[#1A8781] text-white text-sm font-geist font-medium shadow-md shadow-[#1A8781]/15 hover:bg-[#125E5A] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                About Us
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={selectedAudit !== null}
        onOpenChange={(open) => !open && setSelectedAudit(null)}
      >
        <DialogContent className="flex flex-col max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] p-0 gap-0 overflow-hidden rounded-2xl border-[#1A8781]/20 shadow-2xl bg-white [&>button]:bg-white/90 [&>button]:hover:bg-white [&>button]:rounded-full [&>button]:p-2 [&>button]:shadow-md [&>button]:z-20 [&>button]:opacity-100 [&>button>svg]:h-5 [&>button>svg]:w-5">
          {selectedAudit && (
            <>
              <div className="shrink-0 bg-[#F9F7F2] border-b border-[#1A8781]/10 px-4 py-4 md:px-6 md:py-5">
                <div className="h-[190px] sm:h-[210px] md:h-[240px] overflow-hidden rounded-xl border border-[#1A8781]/15 bg-white shadow-sm flex items-center justify-center">
                  <img
                    src={selectedAudit.image}
                    alt={
                      selectedAudit.alt ||
                      selectedAudit.description ||
                      `Audit ${selectedAudit.id}`
                    }
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-[#F9F7F2] px-5 py-5 md:px-7 md:py-6">
                <DialogHeader className="text-left space-y-3">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-[#1A8781] font-inter text-xs font-medium tracking-[0.15em] uppercase">
                      FMCS Factory Audit
                    </span>
                    <div className="h-[2px] w-10 bg-[#1A8781]/60" />
                  </div>

                  <DialogTitle className="font-playfair text-xl md:text-2xl font-bold text-[#1e1e1e] leading-snug">
                    {selectedAudit.title || selectedAudit.description}
                  </DialogTitle>

                  <DialogDescription className="sr-only">
                    {selectedAudit.detailText}
                  </DialogDescription>

                  <div className="flex flex-wrap gap-2">
                    {["Germany", "IS 17634", "FMCS"].map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center rounded-full border border-[#1A8781]/25 bg-[#1A8781]/10 px-3 py-1 text-xs font-geist font-medium text-[#1A8781]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </DialogHeader>

                <p className="mt-4 font-geist text-sm md:text-[15px] text-gray-600 leading-relaxed">
                  {selectedAudit.detailText}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

const InternationalAudits = () => {
  return (
    <>
      <CommonBreadcrumb label="International Audits" />
      <Hero />
      <Gallery />
      <OurServices />
    </>
  );
};

export default InternationalAudits;
