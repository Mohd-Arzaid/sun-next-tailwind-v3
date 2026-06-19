"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import { Check, SlashIcon } from "lucide-react";
import ServicesRightSideContentEng from "@/components/services/shared/services-right-side-content-eng";
import ServiceAuthorEng from "@/components/services/shared/service-author-eng";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ServicesEng from "@/components/services/shared/services-eng";

function ISIMark() {
  return (
    <div className="relative">
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <LanguageSelector />
      <ServicesEng />
    </div>
  );
}

export default ISIMark;

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    {/* Note: In Next.js, use 'href' instead of 'to' for Link */}
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS ISI Mark Certification Process, Documents, Fee
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Certification for
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Indian Manufacturers
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            As part of the 'Make in India' vision, BIS certification helps
            manufacturers ensure product safety, quality, and compliance. Get
            certified and grow your brand with confidence.
          </p>

          <div className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ContactUsForm />
      </div>
    </section>
  );
};

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact Us
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Book an Appointment
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Want to contact our team and schedule a call?
        <span className="text-black"> Try Now</span>
      </p>

      <form className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Full Name *"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Contact Number *"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Product Name *"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
            required
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <Button
          type="button"
          className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          <div className="flex gap-3 items-center justify-center">
            <span>Book Appointment</span>
          </div>
        </Button>
      </form>
    </div>
  );
};

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "requirement", "documents", "conclusion", "faqs"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    requirement: "Requirement",
    documents: "Documents",
    conclusion: "Conclusion",
    faqs: "FAQs",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {MENU_ITEMS[item]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <RequirementSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        ISI Mark Certification Scheme
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/images/isi-mark/bis-certification-for-indian-manufacturers.webp"
          alt="ISI Mark Certification"
          title="ISI Mark Certification "
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        In the current market dynamics, the reputation of a brand in today's
        market, consumers trust has a significant importance. Every consumer
        wants assurance regarding the safety and reliability of a product, along
        with the quality control steps taken during its manufacturing. The
        Bureau of Indian Standards addresses these issues and concerns ensuring
        quality benchmarks to the products sold in India. The ISI Mark
        Certification is one of the most reputable certificates awarded under
        BIS.
      </p>
      <p className="service-left-content-paragraph">
        For domestic manufacturers, obtaining a BIS ISI Mark Certification is
        not only about obtaining the certificate of compliance, it is also about
        gaining market acceptance, brand confidence and legal protection. The
        ISI mark is recognized universally and strengthens credibility in India
        when it comes to the production of electrical appliances, construction
        materials, chemicals or household goods.
      </p>
      <p className="service-left-content-paragraph">
        This article aims to explore the BIS ISI Mark Certification for domestic
        manufacturers, specifically focusing on the importance, requirements,
        advantages, and the entire process of certificate acquisition.
      </p>
      <h2 className="service-left-content-heading-three">
        Understanding BIS and Its Role
      </h2>
      <p className="service-left-content-paragraph">
        The Bureau of Indian Standards (BIS) is a National Standardization and
        Certification body in India under the Ministry of Consumer Affairs, and
        Public. Being a regulatory body, it sets and maintains standards of
        quality and its enforcement in various industries as directed under the
        BIS Act of 1986.
      </p>
      <p className="service-left-content-paragraph">
        The BIS acts as a third-party verification authority that audits whether
        a product meets the particular Indian standards. BIS certification
        provides the manufacturer not only with a legal requirement, but also
        with a mark of approval of trust and credibility from the customers.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        What is an ISI Mark?
      </h2>
      <p className="service-left-content-paragraph">
        The ISI mark (Indian Standards Institute mark) certification is the
        oldest and most recognized mark of certification from the Bureau of
        Indian Standards (BIS) in India. The ISI certification focuses on
        confirmation that a product meets basic requirements of the quality
        standards set by BIS in relation to safety, quality, performance and
        reliability.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Products that bear the ISI mark have completed thorough lab testing and
        factory inspections. It guarantees that proper quality control
        procedures are being implemented and followed during the production
        stages. Consumers are able to obtain and use safe and reliable products
        labelled with the ISI mark. The ISI mark is a tool for trust between the
        consumer and the manufacturer and this mark goes beyond the standard.
      </p>
      <p className="service-left-content-paragraph">
        A few examples of products for which mandatory ISI certification is
        required are as follows:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Appliances of all types (Electric irons, electric heaters, electric wires, refrigerators, air conditioning units)",
          "Cement and steel, UPVC pipes, plastic footwear, and other plastic products",
          "Fertilizers, chemicals, and acids",
          "Safety helmets and glasses, as well as some types of children's toys",
        ]}
      />
      <p className="service-left-content-paragraph">
        There are more than 650 products that require mandatory BIS
        certification to use the standard mark (ISI Mark) under Scheme I
        Schedule I of Bureau of Indian Standard. Products kept under the
        mandatory certification scheme can not be manufactured, imported or sold
        in the Indian market without ISI mark. The list of mandatory products
        can be accessed on this{" "}
        <a
          href="#product-table"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("product-table")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-blue-900 font-semibold hover:text-[#1A8781] uppercase transition-colors cursor-pointer"
        >
          Product List link
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        What's the Difference Between BIS Certification and ISI Mark?
      </h2>
      <p className="service-left-content-paragraph">
        Although often confused and used as synonyms, BIS Certification and ISI
        Mark have specific definitions and purposes:
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS Certification :</strong> The process of granting approval to
        a product after ensuring that it meets the required Indian Standards. It
        is the framework under which conformity assessments are administered.
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISI Mark :</strong> The quality symbol or the standard mark that
        is awarded to a product after BIS certification is obtained. It
        indicates the product has been fully certified and meets the requisite
        Indian Standards.
      </p>
      <p className="service-left-content-paragraph">
        In this manner, ISI constitutes the physical certifiable commitment,
        while BIS certification offers the needed administrative framework.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Why is BIS ISI Mark Certification important for Manufacturers?
      </h2>

      <p className="service-left-content-paragraph">
        BIS ISI Mark Certification holds a significant value for domestic
        manufacturers, such as:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Quality Assurance:</strong> The ISI mark signifies it has
        passed rigorous tests and inspections, thus maintaining the established
        highest standards of quality. This, in turn, increases the dependability
        and reliability of the product while minimizing the chances of defects.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Trust of the Consumer:</strong> Products labeled with ISI
        mark are generally considered as being safe and effective. This
        contributes towards brand loyalty, and thus a more robust and reputable
        brand.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Access to the Market:</strong> The Indian market has an
        abundance of items that are strictly prohibited if one does not possess
        a valid ISI certificate. In such instances, the ISI mark serves as the
        gateway to facilitating sales.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Gaining Market Admission:</strong> Within a highly
        competitive environment, ISI certified products are seen as having a
        positive reputation, thus having a higher competitive advantage over
        others who are not certified.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Regulatory Compliances:</strong> BIS standards are such that
        a manufacturer whose products align with such standards has a smooth,
        uninhibited operation, free from legal complexity.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Export Promotion:</strong> Products that are ISI certified
        and thus possess a strong brand reputation are more likely to be favored
        by foreign markets due to the perception of it being high quality and
        meeting global standards.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Safety of the Consumer:</strong> Any product with ISI
        certification guarantees the safety of the consumer from any potential
        danger, accidents, or poor product performance.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Quality Control:</strong> The need of carrying out constant
        examinations and checks guarantees that the manufacturers are able to
        achieve constant quality for all the batches produced.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Requirements</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Basic Requirements for BIS ISI Mark Certification
      </h2>
      <p className="service-left-content-paragraph">
        To obtain BIS certification, domestic manufacturers have to fulfil the
        following key obligations.
      </p>
      <PointsListWithoutHeading
        points={[
          "There must be compliance to the Indian Standard Specification (ISS).",
          "A license is issued and granted only to the manufacturers, not to the distributors or retailers.",
          "There is a need to submit separate applications for each factory location for the certification.",
          "Factories must possess qualified personnel and in-house testing laboratories.",
          "All modes of production shall be conducted in the same production unit from the raw material to the final packaging (Outsourcing must be authorized beforehand by BIS).",
          "Technical guidance is provided in Product Manuals which detail the standards for inspection, testing, and necessary documentation.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Process of BIS ISI Certification for Domestic Manufacturers
      </h2>
      <p className="service-left-content-paragraph">
        Securing the BIS certification is a multi-step process. There are two
        main procedures to approach the BIS certification process: Normal
        Procedure and Simplified Procedure.{" "}
      </p>
      <div className="service-left-content-heading-three">
        1. Normal Procedure (60-65 Days)
      </div>
      <PointsListWithoutHeading
        points={[
          "The manufacturer sets up in-house labs and brings the products into compliance with the Indian Standards.",
          "Application along with the required documentation is submitted.",
          "Factory Inspection by BIS officials.",
          "Testing of products in BIS-approved laboratories.",
          "License is granted if all conditions are met.",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Simplified Procedure (35-40 Days)
      </div>
      <PointsListWithoutHeading
        points={[
          "Manufacturer submits documents of pre-tested products from labs recognized by BIS.",
          "Application along with the fee is submitted.",
          "Documents scrutiny and factory inspection.",
          "Final testing and Grant of license in a period of 35-40 days.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Required Documents
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Document Required for ISI Mark Certification
      </h2>
      <p className="service-left-content-paragraph">
        The following documents needs to be presented by the Manufacturers:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Completed Application Form (Form V or VI depending on the scheme)",
          "2. Business Registration Certificate (e.g., Udyam Registration, MSME, GST Certificate)",
          "3. Factory License or Municipal Trade License",
          "4. List of Manufacturing Machinery",
          "5. Manufacturing Process Flowchart",
          "6. Layout Plan of the Manufacturing Premises",
          "7. Details of In-House Quality Control Staff",
          "8. Details of Testing Equipment",
          "9. Agreement of Technical Collaboration (if applicable)",
          "10. Power of Attorney/Authorization Letter",
          "11. Brand Name Authorization Letter (if applying under a different brand)",
          "12. Test Report from BIS-approved lab",
          "13. Invoice of Raw Material Procurement",
          "14. Photographs of Product and Packaging",
          "15. Declaration of Conformity to Standards",
          "16. Undertaking Regarding Non-Standard Products",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Benefits of BIS ISI Mark Certification
      </h3>
      <p className="service-left-content-paragraph">
        For Indian manufacturers, obtaining the BIS ISI Mark Certification
        provides specific advantages:
      </p>
      <PointsListWithoutHeading
        points={[
          "Nationwide Authorization: Manufacturers have permission to sell the certified products throughout the country.",
          "Evading Penalties: Adhering to BIS standards avoids hefty fines and legal issues.",
          "Boosted Revenue: Demand is higher for products that are certified.",
          "Export Potential: Certain foreign markets identify ISI as a standard of excellence.",
          "Focus on Quality: A Certified company shows commitment to the principles of quality production.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Revocation of BIS License{" "}
      </h3>
      <p className="service-left-content-paragraph">
        The license to certify is the sole propriety of the BIS authority and it
        can cancel such license if:
      </p>
      <PointsListWithoutHeading
        points={[
          "There is a decline in the quality of products that have been certified.",
          "There is an improper use of the ISI mark by the producers.",
          "The producer does not follow a certain aspect of the license.",
        ]}
      />

      <p className="service-left-content-paragraph">
        According to Regulation 11 of BIS (Conformity Assessment) Regulations,
        2018, there's no doubt that the license can be suspended or canceled for
        failure to comply with the noted regulations.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusion</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusion</h2>

      <p className="service-left-content-paragraph">
        For the BIS ISI Mark Certification, again, there's no doubt that it has
        more to it than just bureaucratic steps for manufacturers in India. It
        helps in establishing a positive reputation and achieving sustainable
        growth in business. If the BIS standards are adhered to, then there is
        utmost certified assurance that the products are reliable and ready for
        sale.
      </p>

      <p className="service-left-content-paragraph">
        In conclusion, the ISI mark has become more than just a legal
        compliance, it has become a mark of assurance in a business environment
        where trust is hard to come by. It is a sign of competitiveness in the
        market along with compliance to regulations.
      </p>

      <p className="service-left-content-paragraph">
        No matter if you manufacture electronic products, building elements, or
        any other products for sale, BIS ISI Certification ensures your products
        are aligned with India's top grade standards while safeguarding your
        reputation as well as your consumers.
      </p>
    </div>
  );
};

const ServiceFaq = () => {
  const faqs = [
    {
      question: "What is BIS certification and why is it important?",
      answer:
        "BIS certification is issued by the Bureau of Indian Standards to ensure products comply with Indian safety and quality standards. It's vital for legal compliance, consumer trust, and market acceptance.",
    },
    {
      question: "What is the difference between BIS license and ISI mark?",
      answer:
        "The BIS license is a legal document that authorizes a manufacturer to use the ISI mark. The ISI mark is the visible label on products indicating BIS certification.",
    },
    {
      question: "How long does it take to get BIS certification?",
      answer:
        "Typically, 6–10 weeks depending on product type, testing requirements, and audit outcomes",
    },
    {
      question: "What is the validity period of a BIS license?",
      answer:
        "Usually 1 to 2 years, after which it must be renewed. Renewal should be initiated at least 30 days before expiry.",
    },
    {
      question: "What is the cost of BIS certification?",
      answer:
        "Costs vary but can range from ₹25,000 to ₹100,000+, including testing, audit, and license fees.",
    },
    {
      question: "Is BIS certification mandatory for all products?",
      answer:
        "No. It is mandatory only for products listed under the scheme 1 of BIS certification.",
    },
    {
      question: "How can I find the right IS standard for my product?",
      answer:
        "Visit the BIS website or consult with BIS-recognized testing labs and consultants to identify the applicable standard.",
    },
    {
      question: "Can foreign manufacturers apply for BIS certification?",
      answer:
        "Yes. Through the Foreign Manufacturers Certification Scheme (FMCS), overseas entities can obtain BIS licenses for ISI mark usage.",
    },
    {
      question: "What happens if my product fails BIS testing?",
      answer:
        "You'll need to correct the issues and re-submit for testing. Applications may be paused until successful compliance is demonstrated.",
    },
    {
      question: "Is BIS certification needed for export?",
      answer:
        "While not always mandatory for exports, BIS certification boosts credibility and can satisfy international buyers or regulatory bodies.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const LanguageSelector = () => {
  const currentPath = usePathname();

  // Helper function to get country name from flag URL
  const getCountryName = (flagUrl) => {
    const countryMap = {
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
    // Extract country code from URL (e.g., "cn" from "https://flagcdn.com/w320/cn.png")
    const match = flagUrl.match(/\/([a-z]{2})\.png$/);
    const countryCode = match ? match[1] : null;
    return countryMap[countryCode] || "Flag";
  };

  const languages = [
    // {
    //   code: "en",
    //   name: "English",
    //   flag: "https://flagcdn.com/w320/gb.png",
    //   path: "/a-guide-to-bis-certification-indian-bis",
    // },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-isi-mark-renzheng",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/bis-isi-mark-zertifizierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/bis-isi-mark-certificering",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-isi-mark-shounin",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-isi-mark-injeung",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-marque-isi",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/certificacion-bis-marca-isi",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-isi-mark-raprong",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/sertifikasi-bis-isi-mark",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-isi-mark",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-isi-mark",
    },
  ];
  const currentLanguage = languages.find((lang) => lang.path === currentPath);

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

const PointsListWithoutHeading = ({ points }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
