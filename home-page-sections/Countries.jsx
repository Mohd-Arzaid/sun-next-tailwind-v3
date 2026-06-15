"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const COUNTRIES_DATA = [
  { name: "Thailand", img: "/countries-images/Thailand.webp" },
  { name: "Vietnam", img: "/countries-images/Vietnam.webp" },
  { name: "Canada", img: "/countries-images/Canada.webp" },
  { name: "China", img: "/countries-images/China.webp" },
  { name: "Italy", img: "/countries-images/Italy.webp" },
  { name: "Colombia", img: "/countries-images/Colombia.webp" },
  { name: "Qatar", img: "/countries-images/Qatar.webp" },
  { name: "India", img: "/countries-images/India.webp" },
  { name: "Indonesia", img: "/countries-images/Indonesia.webp" },
  { name: "Malaysia", img: "/countries-images/Malaysia.webp" },
  { name: "Russia", img: "/countries-images/Russia.webp" },
  { name: "Bahrain", img: "/countries-images/Bahrain.webp" },
  { name: "UAE", img: "/countries-images/UAE.webp" },
  { name: "Nepal", img: "/countries-images/Nepal.webp" },
  { name: "Sri Lanka", img: "/countries-images/SriLanka.webp" },
  { name: "France", img: "/countries-images/France.webp" },
  { name: "Germany", img: "/countries-images/Germany.webp" },
  { name: "Sweden", img: "/countries-images/Sweden.webp" },
  { name: "Slovenia", img: "/countries-images/Slovenia.webp" },
  { name: "Austria", img: "/countries-images/Austria.webp" },
  { name: "USA", img: "/countries-images/USA.webp" },
  { name: "Denmark", img: "/countries-images/Denmark.webp" },
];

function CountryCardMobile({ country }) {
  return (
    <div className=" md:hidden w-[280px] h-[280px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  rounded-[12px] p-4 flex flex-col items-center justify-center flex-shrink-0">
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={country.img}
          alt={`BIS Certification Services in ${country.name} - Sun Certifications India`}
          title={`BIS Certification Services in ${country.name} - Sun Certifications India`}
          className="w-auto h-full object-contain"
          loading="lazy"
          width="248"
          height="248"
        />
      </div>

      <div className="mt-3 px-1 flex items-center justify-between w-full">
        <span className="flex text-base items-center font-bold justify-center gap-1">
          <Star className="fill-current text-[#160E34]" size={16} />
          <div className="tracking-wider  text-[#160E34] uppercase">
            {country.name}
          </div>
        </span>
      </div>
    </div>
  );
}

function CountryCardDesktop({ country }) {
  return (
    <div className="hidden w-[380px] h-[380px] bg-[#B5DDEB] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-[12px] p-6 md:flex flex-col items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={country.img}
          alt={`BIS Certification Services in ${country.name} - Sun Certifications India`}
          title={`BIS Certification Services in ${country.name} - Sun Certifications India`}
          className={
            country.name === "Thailand"
              ? "w-full h-full object-cover"
              : "w-auto h-full object-contain"
          }
          loading="lazy"
          width="332"
          height="332"
        />
      </div>
      <div className="mt-4 px-2 flex items-center justify-between w-full">
        <span className="flex text-xl items-center font-bold justify-center gap-2">
          <Star className="fill-current text-[#160E34]" size={20} />
          <div className="tracking-widest text-[#160E34] uppercase">
            {country.name}
          </div>
        </span>
      </div>
    </div>
  );
}

const Countries = () => {
  const [countriesData, setCountriesData] = useState(COUNTRIES_DATA);

  const handlePreviousClick = useCallback(() => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const lastItem = newArray.pop();
      newArray.unshift(lastItem);
      return newArray;
    });
  }, []);

  const handleNextClick = useCallback(() => {
    setCountriesData((prev) => {
      const newArray = [...prev];
      const firstItem = newArray.shift();
      newArray.push(firstItem);
      return newArray;
    });
  }, []);

  return (
    <div className="relative bg-white py-12 md:py-0">
      <div className=" max-w-[88rem] mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[18px] ">
          <div className="w-full md:max-w-[383px] flex flex-col gap-[30px] items-center text-center md:items-start md:text-left ">
            <div className="flex flex-col gap-2 md:gap-[20px]">
              <h2 className="font-roboto leading-tight font-bold text-[30px] md:text-[40px]">
                Glimpse of the Countries we have Served In
              </h2>

              <p className="font-poppins font-medium text-base md:text-[19px] text-[#008080]">
                Delivering excellence everywhere.
              </p>
            </div>

            <div className="flex gap-4 items-center ">
              <button
                onClick={handlePreviousClick}
                aria-label="Previous countries"
                className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center border-2 border-[#160E34]"
              >
                <ChevronLeft className="hidden md:block" />
                <ChevronLeft className="block md:hidden" size={20} />
              </button>

              <button
                onClick={handleNextClick}
                aria-label="Next countries"
                className="rounded-full w-[40px] h-[40px] md:w-[48px] md:h-[48px] flex items-center justify-center bg-[#160E34] border-2 border-[#160E34]"
              >
                <ChevronRight className="hidden md:block text-white" />
                <ChevronRight className="block md:hidden text-white" size={16} />
              </button>
            </div>
          </div>

          <div className="w-full px-0 md:px-[22px] py-3 md:pt-14 md:pb-10  overflow-hidden scrollbar-hide  [mask-image:linear-gradient(to_right,black_90%,transparent)]">
            <div className=" flex gap-4 md:gap-[22px] w-max ">
              {countriesData.map((country) => (
                <CountryCardMobile key={country.name} country={country} />
              ))}

              {countriesData.map((country) => (
                <CountryCardDesktop key={country.name} country={country} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
