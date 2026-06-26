import React from "react";
import Link from "next/link";

const imageCircleClass =
  "flex items-center justify-center rounded-full bg-white border border-[#B5DDEB] w-[68px] h-[68px] md:w-[115px] md:h-[115px] overflow-hidden";
const imageClass = "w-[72px] h-[72px] md:w-[100px] md:h-[100px] object-contain";

const boxShadowClass =
  "relative col-span-1 h-[135px] md:h-[225px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] flex items-center justify-center md:block hover:scale-105 transition-all duration-300 border border-[#B5DDEB]";

const interFont = "font-inter";

const OurServices = () => {
  return (
    <div className={`pt-6 md:pt-8 pb-10 overflow-x-hidden ${interFont}`}>
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-xl md:text-3xl text-center font-inter font-semibold text-neutral-900">
          Our Services
        </div>
        <p className="text-neutral-600 text-center text-base md:text-lg font-inter">
          India's Best Certificate Consultant
        </p>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            href="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className={boxShadowClass}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div className={imageCircleClass}>
                <img
                  src="/images/services/common/bis.jpg"
                  alt="BIS Logo"
                  title="BIS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/cdsco.jpg"
                  alt="CDSCO Logo"
                  title="CDSCO Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/biscrs.jpg"
                  alt="BISCRS Logo"
                  title="BISCRS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/plastic-waste-management.jpg"
                  alt="Plastic Waste Management Logo"
                  title="Plastic Waste Management Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/epr-certificate.jpg"
                  alt="EPR Certificate Logo"
                  title="EPR Certificate Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/lmpc.jpg"
                  alt="LMPC Logo"
                  title="LMPC Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/bis.jpg"
                  alt="BIS Logo"
                  title="BIS Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
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
                  src="/images/services/common/isi-mark.jpg"
                  alt="ISI Mark Logo"
                  title="ISI Mark Logo"
                  className={imageClass}
                />
              </div>
            </div>
            <p className="font-inter text-xs md:text-base w-full mt-8 md:mt-28 px-3 md:px-2 text-center font-medium text-neutral-800">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
