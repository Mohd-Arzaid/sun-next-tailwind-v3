"use client";

// Gallery page — awards-and-recognition jaisa pattern
import { useState } from "react";
import Link from "next/link";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import OurServices from "@/components/common/our-services";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Grant letter images — sunconsultants se migrate
const GALLERY_IMAGES = [
  {
    id: 1,
    image: "/images/grant-letter/BISCertificationGrantLetter01.webp",
    alt: "BIS Certificate Grant Letter successfully obtained for Cast aluminium and its alloys - Ingots and castings for general engineering purposes under IS 617:1994 with expert assistance from Sun Certifications India.",
    description:
      "BIS Certification Grant Letter for Cast Aluminium and Its Alloys under IS 617:1994",
  },
  {
    id: 2,
    image: "/images/grant-letter/BISCertificationGrantLetter02.webp",
    alt: "BIS Certificate Grant Letter successfully obtained for Primary aluminium ingots for remelting for general engineering purpose under IS 2590:1987 with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for primary aluminium ingots under IS 2590:1987",
  },
  {
    id: 3,
    image: "/images/grant-letter/BISCertificationGrantLetter03.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Cabinet hinges under IS 18297:2023 with expert assistance from Sun Certifications India.",
    description:
      "BIS license grant letter for cabinet hinges under IS 18297:2023",
  },
  {
    id: 4,
    image: "/images/grant-letter/BISCertificationGrantLetter04.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Cabinet hinges under IS 18297:2023 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for cabinet hinges under IS 18297:2023",
  },
  {
    id: 5,
    image: "/images/grant-letter/BISCertificationGrantLetter05.jpg",
    alt: "BIS License Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for toys under IS 9873 Part 1:2019",
  },
  {
    id: 6,
    image: "/images/grant-letter/BISCertificationGrantLetter06.jpg",
    alt: "BIS Certificate Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for toys under IS 9873 Part 1:2019",
  },
  {
    id: 7,
    image: "/images/grant-letter/BISCertificationGrantLetter07.webp",
    alt: "BIS Certificate Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS license grant letter for toys under IS 9873 Part 1:2019",
  },
  {
    id: 8,
    image: "/images/grant-letter/BISCertificationGrantLetter08.webp",
    alt: "BIS Standard Mark Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for toys under IS 9873 Part 1:2019",
  },
  {
    id: 9,
    image: "/images/grant-letter/BISCertificationGrantLetter09.webp",
    alt: "BIS Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS license grant letter for toys under IS 9873 Part 1:2019",
  },
  {
    id: 10,
    image: "/images/grant-letter/BISCertificationGrantLetter10.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Cast aluminium and its alloys - Ingots and castings for general engineering purposes under IS 617:1994 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for cast aluminium & its alloys under IS 617:1994",
  },
  {
    id: 11,
    image: "/images/grant-letter/BISCertificationGrantLetter11.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Wrought aluminium and aluminium alloy bars, rods and sections under IS 733:1983 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for Wrought Aluminium and Aluminium Alloy Bars, Rods under IS 733:1983",
  },
  {
    id: 12,
    image: "/images/grant-letter/BISCertificationGrantLetter12.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Wrought aluminium and aluminium alloys- Extruded round tube and hollow sections under IS 1285:2002 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for Wrought Aluminium and Aluminium Alloys Extruded Round Tube and Hollow Sections under IS 1285:2023",
  },
  {
    id: 13,
    image: "/images/grant-letter/BISCertificationGrantLetter13.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Diesel Engines - NOx Reduction Agent AUS 32 under IS 17042 (Part 1):2018 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for Diesel Engine NOx Reducing Agent under IS 17042 Part 1:2020",
  },
  {
    id: 14,
    image: "/images/grant-letter/BISCertificationGrantLetter14.webp",
    alt: "BIS Certification Grant Letter successfully obtained for PVC sandal under IS 6721:1972 with expert assistance from Sun Certifications India.",
    description:
      "BIS license grant letter for slippers and sandals under IS 6721:2023",
  },
  {
    id: 15,
    image: "/images/grant-letter/BISCertificationGrantLetter15.webp",
    alt: "BIS License Grant Letter successfully obtained for Sandal and Slippers Specification under IS 6721:2023 with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for slippers and sandals under IS 6721:2023",
  },
  {
    id: 16,
    image: "/images/grant-letter/BISCertificationGrantLetter16.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for electric toys under IS 15644:2006",
  },
  {
    id: 17,
    image: "/images/grant-letter/BISCertificationGrantLetter17.webp",
    alt: "BIS Licence Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for toys under IS 9873 Part 1:2023",
  },
  {
    id: 18,
    image: "/images/grant-letter/BISCertificationGrantLetter18.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Phosphorous Trichloride, pure and Analytical Reagent under IS 4581:1978 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for phosphorus trichloride under IS 4581:2021",
  },
  {
    id: 19,
    image: "/images/grant-letter/BISCertificationGrantLetter19.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Phosphorous Pentachloride, Technical under IS 11744:1986 with expert assistance from Sun Certifications India.",
    description:
      "BIS certificate grant letter for phosphorus pentachloride under IS 4581:2021",
  },
  {
    id: 20,
    image: "/images/grant-letter/BISCertificationGrantLetter20.webp",
    alt: "BIS Certification Grant Letter successfully obtained for Hexagon Head Bolts, Screws and Nuts of Product Grades A and B - Hexagon Head Screws under IS 1364 Part 2:2023 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for hexagon head bolts, screws and nuts under IS 1364 Part 2:2023",
  },
  {
    id: 21,
    image: "/images/grant-letter/BISCertificationGrantLetter21.webp",
    alt: "BIS License Grant Letter successfully obtained for PVC sandal under IS 6721:1972 with expert assistance from Sun Certifications India.",
    description:
      "BIS certification grant letter for sandal slippers under IS 6721:2023",
  },
];

const GrantLetterPage = () => (
  <>
    <CommonBreadcrumb label="Grant Letter" />
    <div className="bg-[#F9F7F2] relative">
      <GrantLetterHero />
      <GrantLetterGallery images={GALLERY_IMAGES} />
      <div id="services-section">
        <OurServices />
      </div>
    </div>
  </>
);

export default GrantLetterPage;

const GrantLetterHero = () => {
  const handleScroll = () => {
    document
      .getElementById("services-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          BIS Grant Letters & Certifications
        </h1>
        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Explore our collection of successful BIS grant letters and license
          documents across various industries, showcasing our expertise in BIS
          certification and compliance services.
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
          Grant Letter Gallery
        </span>
      </h2>
      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl mx-auto leading-relaxed">
        A collection of BIS grant letters and license documents issued across
        various industries and standards.
      </p>
    </div>
  );
};

// Card click pe Dialog me full image dikhao
const GrantLetterGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onSelect={() => setSelectedImage(item)}
            />
          ))}
          <ManyMoreCard />
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
                  selectedImage.description ||
                  `BIS Grant Letter ${selectedImage.id}`
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

const GalleryCard = ({ item, onSelect }) => (
  <div className="group relative cursor-pointer" onClick={onSelect}>
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center relative">
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
          alt={item.alt || item.description || `BIS Grant Letter ${item.id}`}
          title={item.alt || item.description || `BIS Grant Letter ${item.id}`}
          loading="lazy"
          width="600"
          height="450"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          decoding="async"
          className="w-full h-full object-contain transform transition-all duration-700 group-hover:scale-110 shadow-input border border-neutral-200 rounded-2xl"
          src={item.image}
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
);

const ManyMoreCard = () => (
  <div className="group relative">
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border-2 border-dashed border-gray-300 hover:border-[#1A8781]/50">
      <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, #1A8781 10px, #1A8781 20px)",
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
            Many More Grant Letters
          </h3>
          <p className="text-gray-500 font-geist text-xs font-semibold uppercase tracking-widest mb-2">
            Issued Successfully
          </p>
          <p className="text-gray-400 font-geist text-xs italic">
            Showcasing our extensive BIS certification portfolio
          </p>
        </div>
      </div>
    </div>
  </div>
);
