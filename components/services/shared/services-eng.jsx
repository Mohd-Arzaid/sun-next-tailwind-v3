import React from "react";
import Link from "next/link";

const imageCircleClass =
  "flex items-center justify-center rounded-full bg-white border border-[#B5DDEB] w-[72px] h-[72px] md:w-[125px] md:h-[125px] overflow-hidden";
const imageClass = "w-[72px] h-[72px] md:w-[108px] md:h-[108px] object-contain";

const boxShadowClass =
  "relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] flex items-center justify-center md:block hover:scale-105 transition-all duration-300 border border-[#B5DDEB]";

const interFont = "font-inter";

const ServicesEng = () => {
  return (
    <div className={`pt-6 md:pt-8 pb-10 overflow-x-hidden ${interFont}`}>
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2
            id="services"
            className={`text-[32px] md:text-[48px] text-center font-medium text-neutral-800 scroll-mt-[92px] md:scroll-mt-[136px] ${interFont}`}
          >
            Our Services
          </h2>

          <div className="flex items-center w-full gap-4 md:gap-8 my-2">
            <div className="hidden md:block flex-1 h-px bg-neutral-300" />
            <p className={`text-neutral-600 font-medium text-center uppercase text-[16px] md:text-[20px] whitespace-nowrap ${interFont}`}>
              India&apos;s Best Certificate Consultant
            </p>
            <div className="hidden md:block flex-1 h-px bg-neutral-300" />
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            href="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/bis.jpg"
                  alt="BIS Logo"
                  title="BIS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            href="/cdsco-registration-certification"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/cdsco.jpg"
                  alt="CDSCO Logo"
                  title="CDSCO Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            href="/what-is-crs-bis-or-crs-registration"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/biscrs.jpg"
                  alt="BISCRS Logo"
                  title="BISCRS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            href="/epr-certificate-for-plastic-waste-management-pwm"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/plastic-waste-management.jpg"
                  alt="Plastic Waste Management Logo"
                  title="Plastic Waste Management Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              Plastic Waste Management
            </p>
          </Link>

          <Link
            href="/a-guide-on-how-to-obtain-epr-certificate"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/epr-certificate.jpg"
                  alt="EPR Certificate Logo"
                  title="EPR Certificate Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            href="/a-guide-on-how-to-obtain-lmpc-certificate"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/lmpc.jpg"
                  alt="LMPC Logo"
                  title="LMPC Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            href="/what-is-bis-certificate-indian-bis"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/bis.jpg"
                  alt="BIS Logo"
                  title="BIS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            href="/a-guide-to-bis-certification-indian-bis"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/isi-mark.jpg"
                  alt="ISI Mark Logo"
                  title="ISI Mark Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className={`text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-medium text-black ${interFont}`}>
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesEng;
