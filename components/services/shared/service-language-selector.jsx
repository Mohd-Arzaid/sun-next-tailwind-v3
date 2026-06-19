"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const COUNTRY_NAMES = {
  cn: "China",
  de: "Germany",
  nl: "Netherlands",
  jp: "Japan",
  kr: "South Korea",
  fr: "France",
  es: "Spain",
  th: "Thailand",
  id: "Indonesia",
  it: "Italy",
  sa: "Saudi Arabia",
  vn: "Vietnam",
  gb: "United Kingdom",
};

// Extract the country name from a flag URL (e.g. "cn" from ".../cn.png").
const getCountryName = (flagUrl) => {
  const match = flagUrl.match(/\/([a-z]{2})\.png$/);
  const countryCode = match ? match[1] : null;
  return COUNTRY_NAMES[countryCode] || "Flag";
};

// Renders the per-service language flag grid. `languages` is service-specific
// (`[{ code, name, flag, path }]`) and identical across that service's variants.
const ServiceLanguageSelector = ({ languages }) => {
  const currentPath = usePathname();

  return (
    <div className=" bg-white">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
              View This Page in Your Language
            </p>
          </div>

          {/* Language Flags Grid */}
          <div className="w-full max-w-[1400px]">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {languages.map((language) => {
                const isActive = currentPath === language.path;
                return (
                  <Link
                    key={language.code}
                    href={language.path}
                    className="group relative flex flex-col items-center justify-center transition-all duration-300"
                  >
                    {/* Flag */}
                    <div
                      className={`w-[42px] h-[28px] md:w-[64px] md:h-[42px] transition-transform duration-300 flex items-center justify-center ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={`${getCountryName(language.flag)} Flag`}
                        title={`${getCountryName(language.flag)} Flag`}
                        className="w-full h-full object-cover rounded-sm border border-neutral-500"
                      />
                    </div>
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1A8781] rounded-full border-2 border-white"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLanguageSelector;
