const HeroImage = "/hero-image/hero-image.webp";
const HeroImageMobile = "/hero-image/hero-mobile.svg";

import Link from "next/link";

// Simple Desktop Hero Component
const DesktopHero = () => (
  <div
    style={{
      background: "radial-gradient(circle, #EBF3F5 7%, #C5E2F0 100%)",
    }}
    className="relative pb-24 pt-12 overflow-x-hidden"
  >
    {/* Background gradient */}
    <div
      style={{
        background: "radial-gradient(circle, #D8E6EF 8%, #C5E2F0 100%)",
      }}
      className="absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 "
    ></div>

    {/* Hero Content */}
    <div className="max-w-[79rem] w-full mx-auto">
      <div className="flex flex-col items-start">
        <div className="relative px-8 z-20">
          <div className="m-0">
            <img
              src={HeroImage}
              alt="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              title="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              className="shadow-[0_5px_40px_-12px_rgba(0,0,0,0.3)] w-full max-w-[740px] h-auto object-cover"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center transform translate-x-[500px]">
            <div className="py-6 px-8 bg-white/80 backdrop-blur-md w-[650px] h-[380px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
              <div className="relative max-w-[600px]">
                <h1 className="text-5xl font-bold font-playfair text-left text-neutral-900 leading-[52px]">
                  Sun Certifications India
                </h1>
              </div>

              <div className="mt-5 text-xl text-zinc-500 tracking-wide mb-7 text-left max-w-2xl">
                Sun Certifications was founded in 2016, and for more than a
                decade, we have been assisting companies to comply with various
                kinds of Indian certifications like BIS certificate for Indian
                manufacturers, BIS certification for foreign/global
                manufacturers, BIS Scheme X certification, LMPC certificate, EPR
                certificate, WPC certificate, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Simple Mobile Hero Component
const MobileHero = () => {
  const buttonLinks = [
    { href: "/about", text: "About Us", primary: true },
    { href: "/contact", text: "Contact Us", primary: false },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <div
        style={{
          background: "radial-gradient(circle, #EBF3F5 7%, #C5E2F0 100%)",
        }}
        className=" w-full flex flex-col justify-center p-4"
      >
        <div className="flex justify-between flex-col items-center w-full m-auto pb-12">
          <div className="flex flex-col gap-8 mt-10 mb-16">
            <div>
              <div>
                <div className="text-4xl text-black font-geist font-bold text-left max-w-3xl break-words">
                  Sun Certifications India
                </div>
              </div>
            </div>
            <div className="max-w-2xl">
              <div className="font-geist text-gray-600">
                Sun Certifications was founded in 2016, and for more than a
                decade, we have been assisting companies to comply with various
                kinds of Indian certifications like BIS certificate for Indian
                manufacturers, BIS certification for foreign/global
                manufacturers, BIS Scheme X certification, LMPC certificate, EPR
                certificate, WPC certificate, etc.
              </div>
            </div>

            <div
              className="flex gap-3 flex-wrap items-center"
              aria-label="Hero navigation"
            >
              {buttonLinks.map(({ href, text, primary }) => (
                <Link key={href} href={href}>
                  <div
                    className={
                      primary
                        ? "bg-black text-white text-sm font-geist py-3 rounded-md flex gap-2 justify-center items-center px-8"
                        : "border font-geist text-sm bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
                    }
                  >
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="m-0">
            <img
              src={HeroImageMobile}
              alt="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              title="Sun Certifications India - Professional Certification Services for BIS, LMPC, EPR, and WPC"
              className="w-80 h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      {/* Desktop Hero - lg+ only */}
      <div className="hidden lg:block">
        <DesktopHero />
      </div>

      {/* Mobile Hero - below lg */}
      <div className="block lg:hidden">
        <MobileHero />
      </div>
    </>
  );
};

export default Hero;
