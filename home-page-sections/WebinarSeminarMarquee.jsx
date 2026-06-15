const WebinarSeminarMarquee = () => {
  // Gallery images
  const galleryImages = [
    {
      id: 1,
      image: "/seminarImages/Exhibition-1.webp",
      title: "Exhibition 1",
      description:
        "Medicall ( Kolkata ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 2,
      image: "/seminarImages/Exhibition-2.webp",
      title: "Exhibition 2",
      description:
        "Medicall ( Delhi ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 3,
      image: "/seminarImages/Exhibition-3.webp",
      title: "Exhibition 3",
      description: "Seminar / Training Session on BIS Regulations in Thailand ",
    },
    {
      id: 4,
      image: "/seminarImages/Seminar-4.webp",
      title: "Seminar 4",
      description:
        "Training for BIS Certification on Footwear for members of footwear association New Delhi",
    },
    {
      id: 5,
      image: "/seminarImages/Seminar-5.webp",
      title: "Seminar 5",
      description:
        "Medicall ( Chennai ) exibition for BIS & CDSCO approval for  Medical Products.",
    },
    {
      id: 6,
      image: "/seminarImages/Seminar-6.webp",
      title: "Seminar 6",
      description:
        "Training for BIS Certification to Footwear Import Association in New Delhi , India",
    },
    {
      id: 7,
      image: "/seminarImages/Seminar-6-2.webp",
      title: "Seminar 6-2",
      description: "Training sessions on BIS in Metal Industry",
    },
    {
      id: 8,
      image: "/seminarImages/Seminar-7.webp",
      title: "Seminar 7",
      description: "Participation in Footwear India Expo ( New Delhi )",
    },
    {
      id: 9,
      image: "/seminarImages/Seminar-7-2.webp",
      title: "Seminar 7-2",
      description:
        "Seminar on BIS Certification for Steel and Aluminium QCOs in Kolkata",
    },
    {
      id: 10,
      image: "/seminarImages/Seminar-8.webp",
      title: "Seminar 8",
      description: "Seminar on BIS Certification for Toys in Mumbai , India",
    },
    {
      id: 11,
      image: "/seminarImages/Seimar-8-2.webp",
      title: "Seminar 8-2",
      description:
        "Specialized training for footwear manufacturers and suppliers.",
    },
    {
      id: 12,
      image: "/seminarImages/Seminar-9.webp",
      title: "Seminar 9",
      description:
        "Participation in Footwear Conclave on BIS Certification at Agra",
    },
    {
      id: 13,
      image: "/seminarImages/Seminar-10.webp",
      title: "Seminar 10",
      description:
        "Invited by Malaysian Government to educate Malaysian Exporters about Indian BIS Regulations",
    },
    {
      id: 14,
      image: "/seminarImages/Seminar-10-2.webp",
      title: "Seminar 10-2",
      description:
        "Seminar on Indian BIS Certificate in Vietnam for Furniture Products",
    },
    {
      id: 15,
      image: "/seminarImages/Seminar-10-3.webp",
      title: "Seminar 10-3",
      description: "Certificate of appreciation from Malaysian Government.",
    },
    {
      id: 16,
      image: "/seminarImages/Seminar-11.webp",
      title: "Seminar 11",
      description:
        "Training sessions for members of Retailers Association of India (RAI)",
    },
  ];

  const duplicated = [...galleryImages, ...galleryImages];

  return (
    <div className="bg-white pt-8">
      <div className="max-w-[88rem] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg font-playfair text-center mb-10 text-[#1e1e1e] tracking-tight">
          Seminars/Exhibitions
        </h2>
        {/* Infinite scroll for seminar images */}
        <div className="marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative py-4 pb-8">
          <div className="marquee-track flex flex-nowrap items-center gap-6">
            {duplicated.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl bg-white shrink-0"
                style={{ minWidth: "300px", maxWidth: "400px" }}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.description}
                    title={item.description}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSeminarMarquee;
