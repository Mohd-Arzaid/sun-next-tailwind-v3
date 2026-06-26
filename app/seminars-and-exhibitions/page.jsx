import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import OurServices from "@/components/common/our-services";
import { Calendar } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-14 md:pb-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Global Exhibition Excellence
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Discover our world-class exhibition services, bringing together
          industry leaders, innovators, and experts to showcase the latest
          advancements and opportunities.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <Link
          href="/webinar"
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group"
        >
          <span className="font-medium font-geist">Upcoming Events</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <Calendar className="w-4 h-4" />
          </div>
        </Link>

        <Link
          href="/contact"
          className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300"
        >
          <span className="font-medium font-geist">Contact Us</span>
        </Link>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Featured Exhibitions
        </span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        Explore our curated selection of premium exhibitions and industry events
      </p>
    </div>
  );
};

const Gallery = () => {
    const exhibitionImages = [
    {
      id: 1,
      image: "/images/seminars-and-exhibitions/Exhibition-1.webp",
      description:
        "Medicall ( Kolkata ) exibition for BIS & CDSCO approval for  Medical Products.",
      // title: "Exhibition 1",
    },
    {
      id: 2,
      image: "/images/seminars-and-exhibitions/Seminar-4.webp",
      description:
        "Training for BIS Certification on Footwear for members of footwear association New Delhi",
      // title: "Seminar 4",
    },
    {
      id: 3,
      image: "/images/seminars-and-exhibitions/Exhibition-2.webp",
      description:
        "Medicall ( Delhi ) exibition for BIS & CDSCO approval for  Medical Products.",
      // title: "Exhibition 2",
    },
    {
      id: 4,
      image: "/images/seminars-and-exhibitions/Seminar-5.webp",
      description:
        "Medicall ( Chennai ) exibition for BIS & CDSCO approval for  Medical Products.",
      // title: "Seminar 5",
    },
    {
      id: 5,
      image: "/images/seminars-and-exhibitions/Exhibition-3.webp",
      description: "Seminar / Training Session on BIS Regulations in Thailand ",
      // title: "Exhibition 3",
    },
    {
      id: 6,
      image: "/images/seminars-and-exhibitions/Seminar-6.webp",
      description:
        "Training for BIS Certification to Footwear Import Association in New Delhi , India",
      // title: "Seminar 6",
    },
    // {
    //   id: 7,
    //   image: "/images/seminars-and-exhibitions/Seimar-8-2.webp",
    //   description:
    //     "Specialized training for footwear manufacturers and suppliers.",
    //   // title: "Seimar 8-2",
    // },
    {
      id: 7,
      image: "/images/seminars-and-exhibitions/Seminar-7.webp",
      description: "Participation in Footwear India Expo ( New Delhi )",
      // title: "Seminar 7",
    },
    {
      id: 8,
      image: "/images/seminars-and-exhibitions/Seminar-8.webp",
      description: "Seminar on BIS Certification for Toys in Mumbai , India",
      // title: "Seminar 8",
    },
    {
      id: 9,
      image: "/images/seminars-and-exhibitions/Seminar-9.webp",
      description:
        "Participation in Footwear Conclave on BIS Certification at Agra",
      // title: "Seminar 9",
    },
    {
      id: 10,
      image: "/images/seminars-and-exhibitions/Seminar-10.webp",
      description:
        "Invited by Malaysian Government to educate Malaysian Exporters about Indian BIS Regulations",
      // title: "Seminar 10",
    },
    {
      id: 11,
      image: "/images/seminars-and-exhibitions/Seminar-11.webp",
      description:
        "Training sessions for members of Retailers Association of India (RAI)",
      // title: "Seminar 11",
    },
    {
      id: 12,
      image: "/images/seminars-and-exhibitions/Seminar-6-2.webp",
      description: "Training sessions on BIS in Metal Industry",
      // title: "Seminar 6-2",
    },
    {
      id: 13,
      image: "/images/seminars-and-exhibitions/Seminar-7-2.webp",
      description:
        "Seminar on BIS Certification for Steel and Aluminium QCOs in Kolkata",
      // title: "Seminar 7-2",
    },
    {
      id: 14,
      image: "/images/seminars-and-exhibitions/Seminar-10-2.webp",
      description:
        "Seminar on Indian BIS Certificate in Vietnam for Furniture Products",
      // title: "Seminar 10-2",
    },
    {
      id: 15,
      image: "/images/seminars-and-exhibitions/Seminar-10-3.webp",
      description: "Certificate of appreciation from Malaysian Government.",
      // title: "Seminar 10-3",
    },
  ];
  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {exhibitionImages.map((item) => (
          // <div
          //   key={item.id}
          //   className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl "
          // >
          //   <div className="aspect-[4/3] overflow-hidden">
          //     <img
          //       src={item.image}
          //       alt={item.title}
          //       className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
          //     />
          //   </div>

          // </div>
          // <div className="">
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
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                alt={item.description || `Exhibition ${item.id}`}
                title={item.description || `Exhibition ${item.id}`}
                loading="lazy"
                width="300"
                height="300"
                decoding="async"
                className="w-full h-full object-cover transform transition-transform duration-700 md:group-hover:scale-110"
                src={item.image}
                style={{ color: "transparent" }}
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-2 transition-all duration-300 group-hover:px-4">
              <p className="mt-2 max-w-full text-lg font-geist text-neutral-600">
                {item.description ||
                  "A showcase of our exhibition and seminar events"}
              </p>
            </div>
          </div>
        ))}

        {/* Many More Exhibitions Images Coming Soon Card */}
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
                Many More Exhibitions
              </h3>
              <p className="text-gray-500 font-geist text-xs font-medium uppercase tracking-widest mb-1">
                Conducted Worldwide
              </p>
              <p className="text-gray-400 font-geist text-xs italic">
                Showcasing our extensive exhibition portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SeminarsAndExhibitions = () => {
  return (
    <>
      <CommonBreadcrumb label="Seminars and Exhibitions" />
      <Hero />
      <Gallery />
      <OurServices />
    </>
  );
};

export default SeminarsAndExhibitions;
