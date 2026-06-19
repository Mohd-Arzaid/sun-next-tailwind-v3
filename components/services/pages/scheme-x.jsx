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
import ServicesRightSideContentEng from "@/components/services/services-right-side-content-eng";
import ServiceAuthorEng from "@/components/services/service-author-eng";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ServicesEng from "@/components/services/services-eng";

function SchemeX() {
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

export default SchemeX;

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
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Indian Bis Certification Under Scheme-X
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
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Scheme X Certification
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Scheme X Certification covers Machinery, Electrical Equipment,
            and Components Assemblies, and Sub-assemblies under the Omnibus
            Technical Regulation (OTR).
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
    </div>
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

  // UPDATED: Section keys and menu labels
  const SECTIONS = useMemo(
    () => ["overview", "process", "documents", "conclusion"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    process: "Process",
    documents: "Documents",
    conclusion: "Conclusion",
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
        {/* Overview Section */}
        <SchemeXMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Process Section */}
        <SchemeXMainContentLeftProcessSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <SchemeXMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Conclusion Section */}
        <SchemeXMainContentLeftConclusionSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        <ServiceAuthorEng />
      </div>
    </div>
  );
};


const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusion</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">Conclusion</div>

      <p className="service-left-content-paragraph">
        The BIS Scheme-X Certification remains vital in upholding the safety,
        reliability, and quality of Low-voltage switchgear and control gear,
        Machinery and electrical equipment. For the manufacturers of machine
        tools applicable to processing stone, ceramics, concrete, asphantic
        cement and mineral glass, BIS Scheme-X certification is compulsory.
      </p>

      <p className="service-left-content-paragraph">
        By fulfilling these obligations, manufacturers guarantee product
        conformity, enhance consumer confidence, as well as improve their
        credibility on the market. Scheme-X makes sure the production is as
        smooth as possible, safety standards around the world are met, and the
        recognized brands gain a positive reputation.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documents</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Key Documents Required for BIS Scheme X Certification
      </h2>

      <p className="service-left-content-paragraph">
        To streamline the BIS certification process, manufacturers are required
        to gather and submit the following documents during the registration
        phase:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Sl. No.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Document Required
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Name and Address (Factory & Office)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Full legal name and physical addresses of the manufacturing site
                and office
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PAN and GST Information
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Permanent Account Number (PAN) and GST registration details
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Contact Details
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Email address, mobile number, and landline for official
                communications
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Management Details
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Names, roles, and IDs of key executives and authorized signatory
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Product Description
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Details of machinery and equipment covered under the First
                Schedule of the Omnibus Technical Regulation
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Product Classification
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Specific type, model, and variety for which BIS license is being
                requested
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Technical file
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                All the technical details related to the product and details
                about the manufacturing unit.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Validity and Renewal Process of Scheme-X Certificate:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Licence Validity and Renewal: BIS Licences under Scheme-X are issued for a period of 3 to 6 years for continuous production. Once the period has expired, the licence can be renewed for the same duration by the submission of a renewal application, the required fee, and compliance documents.",
          "Certificate of Conformity (CoC): A CoC is issued for One time production, and is applicable for domestic as well as overseas manufacturers. Since it applies only to a single batch, a CoC has no renewal option.",
          "Report of Product Tests: When test reports are prepared in the laboratory of the manufacturer, the BIS officials verify them during the factory inspection by conducting witness testing. If testing is done at subcontracted facilities, those facilities are also inspected and approved by BIS.",
          "Review of Application for Renewal: For uninterrupted validity, a manufacturer is required to continue to comply with the Scheme-X provisions. As per Regulation 8 of the BIS Conformity Assessment Regulations, the Bureau of Indian Standards processes the application for renewal in form VIII. Renewal is done only after satisfactory compliance is verified.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Process</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Steps to Get Certified Under BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Issuing BIS Certificate under Scheme-X is a systematic activity meant to
        ensure the manufacturer has the applicable safety, quality, and
        compliance standards fulfilled. The process is as follows:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verify Scope: Determine whether your product is in the scope of Scheme-X and if it is with BIS safety requirements. Check the relevant Indian Standards and technical schedule to determine if you will be able to comply.",
          "Prepare The Required Documents: Manufacturers need to collect and arrange the following documents: Registered Business certificates, Basis of design documents, Factory and Process flow documents, Service Test Reports (if applicable), Quality assurance and Control Documents.",
          "Construct the Technical File: A technical file is an indispensable part for the claim for extension of a certificate. It should contain: Technical Specifications of the Product, Methods and Techniques Information, Compliance and Test Documents, Limitation and the Intended purpose of the product, Quality assurance documentation, Raw materials traceability, subcontract traceability, and the rest of the evidence, Conformance to the standards within the scope framed.",
          "The Application Form: The application form can be submitted electronically on the BIS Website for the designated place. Settlement of the application fee is a must. The rest of the documents verifying application should be included for proper assessment.",
          "Factory Inspection: For domestic manufacturers: Inspection is conducted over a period of a maximum of 2 days. For foreign manufacturers: Inspection is conducted over a period of a maximum of 3 days (additional days may accrue due to additional requests).",
          "Testing of Product Samples: Sample testing is either carried out at the manufacturers site or at outsourced BIS approved labs (outsource testing is allowed). The testing demonstrates the fulfillment of the relevant Indian standards.",
          "Issuance of Certification: If a product meets all the conditions, BIS grants every product a License or a Certificate of Conformity (CoC). The BIS Standard Mark may be used freely by the manufacturer on all certified products.",
        ]}
      />

      <p className="service-left-content-paragraph">
        This file serves as the technical and statistical evidence of the
        product claim substantiating to safety trace standards.
      </p>

      <p className="service-left-content-paragraph">
        During the period of inspection, the BIS officials are expected to:
        Analyze the technical file, Evaluate the ways of manufacturing along
        with supporting quality assurance systems, Observe the testing of the
        product, Determine non-compliance (if any) and give remedial steps. A
        detailed report of the audit is provided to the applicant after the
        visit.
      </p>

      <p className="service-left-content-paragraph">
        This strategy maintains compliance with BIS Standard and is a
        recognition of Indian and international compliance, cornering the
        industry on consumer trust towards safety and quality.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedure for Domestic Manufacturers
      </h2>

      <p className="service-left-content-paragraph">
        Domestic manufacturers follow a direct approach by obtaining the BIS
        License under Scheme-X. The direct steps to follow include:
      </p>

      <PointsListWithoutHeading
        points={[
          "Documentation: All documents pertaining to the scheme must be gathered and prepared.",
          "Execution of the Application: The application is to be presented alongside the relevant fees.",
          "Inquiry on the Application: any application submitted is subject to scrutiny and a subsequent set of questions is generated by BIS.",
          "Appointing Auditors: Auditors are appointed by BIS but the nominated individual is subject to the payment of the audit fees.",
          "Factory Audit: An examination and survey works audit is conducted onsite and relevant samples are collected.",
          "Sample Evaluation: The samples are evaluated in a BIS-recognized laboratory. The applicant pays all BIS-recognized laboratory testing fees.",
          "Payment of Licencing & Marking Fees: The requisite payments are accomplished to BIS.",
          "Grant of Licencing: The certificate granting permission to use the BIS Mark is awarded by BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Typical Timeline:</strong> Close to 90 working days (as per BIS
        practice) are needed. This is provided there are no key
        non-conformities.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedure for Foreign Manufacturers
      </h2>

      <p className="service-left-content-paragraph">
        Unlike domestic manufacturers, foreign manufacturers applying for a BIS
        certificate under Scheme-X are required to comply with a more stringent
        process and additional steps. The procedure is elaborated as follows.
      </p>

      <PointsListWithoutHeading
        points={[
          "Preparation of Documentation: Business registered, the product and factory layout, test reports, and the associated quality management documents all must be in the configured folder to comply.",
          "Submission of The Application: The application, the requisite fee and all application materials be submitted through BIS online portal.",
          "Recording of Application and Scrutiny: The application is recorded by BIS and a check of the documents is conducted. Any issues that BIS may have must be resolved by the applicant in a timely manner.",
          "Auditor Assignment and Payment: BIS's auditors responsible for factory inspections are assigned to the applicant for the audit. The applicant must pay the set fees for the conducted audit, as determined by the applicable legislation.",
          "Audit Preparation: Foreign manufacturers are responsible for logistical arrangements for the audit such as Visa issuance, air tickets, and hotel reservations for BIS officials are arranged and paid.",
          "Factory Audit & Sample Selection: BIS officials conduct a factory audit spanning 3 days (more days can be added if more applications are needed).",
          "Product Testing: Selected samples are forwarded to a BIS accredited laboratory for testing. In some instances, testing is contracted to other testing laboratories and so the payment is settled through the principal testing laboratory.",
          "Payment of Marking & Licence Fees: After successful audit and test results, the manufacturer must pay the required marking fee and licence fee to BIS.",
          "Grant of Licence: BIS issues the Licensed/Certificate of Conformity (CoC) once all conditions have been followed in total. BIS then allows the manufacturer with a used BIS Standard Mark on other certified products, once compliance is confirmed.",
        ]}
      />

      <p className="service-left-content-paragraph">
        The audit comprises: Evaluation of the quality assurance systems and the
        workflows in the manufacturing processes, Assessment of the compliance
        and the technical documentation, Independent testing sample selection.
      </p>

      <p className="service-left-content-paragraph">
        The entire process takes, based on the practices from BIS, roughly 6-7
        months.
      </p>

      <h3 className="service-left-content-heading-three">
        Key Additional Pointers for Foreign Manufacturers:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Classification FMCS: All foreign manufacturers are classified as 'Large Scale' under the Foreign Manufacturers Certification Scheme. This classification is irrespective of the scale of operations being carried out.",
          "Authorized Indian Representative (AIR): Every foreign manufacturer is required to designate an Authorized Indian Representative (AIR). The AIR is the primary contact point for the foreign applicant and BIS, responsible for compliance, collaboration and the maintenance of the BIS licence.",
          "Factory Audits: Factory audits for foreign manufacturers are comprehensive and tend to last 3 days. Also, more days are required in the case of multiple product applications being filed.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftOverviewSection = () => {
  // Download function for table data
  const downloadTableData = () => {
    const link = document.createElement("a");
    link.href = "/pdf/schemeXproduct.pdf";
    link.download = "SchemeXproduct.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Introduction to BIS Scheme X Certification
      </h2>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/scheme-x-certification.webp"
          alt="Scheme X Certification"
          title="Scheme X Certification"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <p className="service-left-content-paragraph">
        The Bureau of Indian Standards, or BIS for short, rolled out
        &ldquo;Scheme X&rdquo; on March 16, 2022, aimed at improving compliance
        on product safety and quality in India. Indian and foreign manufacturers
        can apply for BIS certification for Machine and Electrical equipment,
        components Like assemblies, sub-assemblies and, and Tools specified in
        Schedule-II of Scheme-X and take certification prior to exporting,
        selling, or distributing in India.
      </p>

      <p className="service-left-content-paragraph">
        Under Scheme X, the manufacturers can apply for a BIS License or a
        Certificate of Conformity (CoC) for low voltage switch gear and control
        gear, machinery, and electric equipment. Once the manufacturers are
        certified, they are allowed to use the BIS Standard mark, indicating
        that their products are in accordance with the standards laid down in
        India.
      </p>

      <p className="service-left-content-paragraph">
        The certification, while promoting the product and compliance with the
        Indian Standards and Government Regulations, helps develop trust and
        confidence of the consumers in the certified products.
      </p>

      <h2 className="service-left-content-heading-three">
        What is Scheme X Certification?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X is a product certification scheme developed under the BIS
        Conformity Assessment Regulations, 2018 and later on, simplified under
        the BIS Conformity Assessment (Amendment) Regulations, 2022.
      </p>

      <p className="service-left-content-paragraph">
        The main goal is to bring the Indian safety and quality standards to
        global standards, especially with regard to the industrial machinery and
        electrical equipment. The products manufactured in or imported to India
        under this scheme are subjected to rigorous scrutiny and assessment to
        prove technical, safety, as well as performance standards.
      </p>

      <p className="service-left-content-paragraph">
        Provisions under the original scope of Scheme X Certification have been
        revised for and expanded with the newly issued Machinery and Electrical
        Equipment Safety (Omnibus Technical Regulation) Order, 2024, which is
        under the jurisdiction of the Ministry of Heavy Industries and has been
        brought into force by the BIS. The order comes into effect on 1st
        September 2026, and covers a broad spectrum of machinery and electrical
        equipment such as pumps for handling liquids, compressors, cranes,
        rotary electrical machines, transformers, and switchgear and control
        gear.
      </p>

      <p className="service-left-content-paragraph">
        Assemblies, sub-assemblies and components of such machinery or equipment
        are also part of the certification scope as per Section 16 of the Bureau
        of Indian Standards Act, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Moreover, under the 1989 CMVR Rules (Construction and Manufacture of
        Valve Regulation), Bowser and other types of construction equipment
        under the jurisdiction of Scheme X, are ensured that the market does not
        get exposed to the equipment which lacks the requisite of safety and
        technical standards.
      </p>

      <h2 className="service-left-content-heading-three">
        Omnibus Technical Regulation (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        The Ministry of Heavy Industries released the &ldquo;Omnibus Technical
        Regulation on Safety Orders (Machinery and Electric equipment
        Safety)&rdquo; via E-Gazette notification of August 28, 2024. This
        innovative regulation intends to improve - safety, quality and
        compliance of machinery, electrical equipment and their assemblies, sub
        assemblies and components, under Scheme X of the BIS Regulation, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Under the OTR, all categories of machinery and electrical equipment, and
        all their parts and components are included. However, a few categories
        are specifically excluded:
      </p>

      <PointsListWithoutHeading
        points={[
          "Any machinery and components that are a part of any other order under Section 16 which is issued under the Bureau of Indian Standards Act, 2016.",
          "Manufactured domestic goods and articles that are only intended for export.",
          "Construction machinery and equipment which are under the CMVR Rules, 1989, prescribed by the Ministry of Road Transport and Highways (MoRTH).",
        ]}
      />

      <p className="service-left-content-paragraph">
        These exceptions are made to facilitate compliance and avoid unnecessary
        duplication of regulation in order to promote ease of doing business.
      </p>

      <p className="service-left-content-paragraph">
        The Omnibus Technical Regulation, 2024 covers all machinery and
        electrical equipment, including low voltage switchgear and control gear
        notified by the Ministry of Heavy Industries, will be treated under the
        Scheme X framework of BIS Certification. The Order will come into effect
        on the 1st of September 2026 so that the manufacturers and importer have
        enough to modify their operations as per the Orders issued.
      </p>

      <h2 className="service-left-content-heading-three">
        BIS Certification under the Omnibus Technical Regulation
      </h2>

      <p className="service-left-content-paragraph">
        As per the OTR 2024, manufacturers, as well as importers, of machinery
        and electrical equipment which include pumps, pumps, compressors,
        centrifuges, cranes, transformers, and switchgears must apply for BIS
        Certification under Scheme X.
      </p>

      <p className="service-left-content-paragraph">
        Under Scheme X, manufacturers can opt to apply for:
      </p>

      <PointsListWithoutHeading
        points={["A BIS Licence, or", "A Certificate of Conformity (CoC)"]}
      />

      <p className="service-left-content-paragraph">
        Products bearing the BIS Standard Mark which is a Mark of Conformity
        which certifies and assures the users that the product is safe,
        reliable, and of good quality. It is also a mark of trust and really
        good performance.
      </p>

      <div className="service-left-content-heading-three">
        Special Note for MSMEs
      </div>

      <p className="service-left-content-paragraph">
        As with many other sectors, Micro, Small, and Medium Enterprises (MSMEs)
        must also comply with Scheme X and obtain BIS Certification for their
        machinery and electrical equipment. While it may appear that compliance
        with the regulatory requirements may be challenging, the Scheme X
        certificate is a value addition and advantage to MSMEs for the following
        reasons:
      </p>

      <PointsListWithoutHeading
        points={[
          "Proves adherence to legal and other requisite obligations set by the government.",
          "Increase the product's reputation and consumer trust.",
          "Facilitates access to a larger domestic and overseas market.",
          "Improves the MSME's standing globally with respect to competitiveness, safety, and quality.",
        ]}
      />

      <h2 className="service-left-content-heading-three">BIS Scheme X Logo</h2>

      <p className="service-left-content-paragraph">
        The BIS standard mark of Scheme X forms a quality mark and a principle
        of trust. The Logo contains:
      </p>

      <PointsListWithoutHeading
        points={[
          "the standard number is displayed in the top portion of the logo; and",
          "the license number displayed in the bottom portion of the Logo in the format: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        This mark signifies that a BIS Licence has been successfully issued to
        the manufacturer. It entitles the manufacturer to place the BIS Mark and
        assures the consumers that the product is authentic and safe.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Scheme X logo"
          title="BIS Scheme X logo"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="service-left-content-heading-three">
        Legal Implications
      </div>

      <p className="service-left-content-paragraph">
        BIS Standard Mark is a mark of trust and quality. The mark is only
        available after a valid contract is in place. Only a valid contract
        allows the owner to use the mark. Using the mark without a valid
        contract is an offense under the Indian constitution and is equal to
        having a legal mark. The owner of the mark is placed under heavy
        restrictions for the use of the license CM/L-XXXXXXXXXX for products
        that have no BIS certification.
      </p>

      <p className="service-left-content-paragraph">
        It follows that every producer is obliged to:
      </p>

      <PointsListWithoutHeading
        points={[
          "Acquire a valid BIS License under Scheme X.",
          "Satisfy the relevant requirements of Indian Standards; and",
          "Properly affix the products with the approved BIS Logo.",
        ]}
      />

      <p className="service-left-content-paragraph">
        This regulatory framework is extended to protect the interests of
        consumers and business people, fostering a market that emphasizes
        safety, openness, and confidence.
      </p>

      <h2 className="service-left-content-heading-three">
        Key Differences Between Scheme-I and Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "Includes a wider category of consumer products such as electronics, home appliances, and even industrial products.",
          "Products issued a certificate under this scheme must have the Standard ISI Mark.",
          "Relates to both domestic and foreign manufacturers.",
          "Involves factory audits and sample testing to determine quality and compliance with Indian Standards.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "Addresses high-risk industrial and safety critical engineering products, which include electrical equipment, machinery, and industrial systems of considerable duty.",
          "The certification is of greater rigor than Scheme-I. It involves advanced technical reporting, compliance checking, and extensive certification audits.",
          "Scheme-X tends to be more expensive than Scheme-I because of the extra compliance documentation.",
          "Any business that deals with electrical equipment or industrial machinery is mandated to obtain certification under Scheme-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Feature
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI Mark
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Managed by
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indian BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indian BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Certification Type
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS licence
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS certificate / BIS licence
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Target Products
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Consumer goods
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Machinery & electrical equipment
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Mark Used
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISI mark
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS standard mark (under Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Compliance Level
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indian standard compliance
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                High-end technical and safety compliance
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2 className="service-left-content-heading-three">
        Products Covered by Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Scheme-X covers products with the highest risk to safety and
        performance, including:
      </p>

      <PointsListWithoutHeading
        points={[
          "Electrical Equipment: Industrial transformers, power supply units, and the like, low-voltage switchgear and control gear, plus other high-voltage devices.",
          "Heavy Machinery: Hydraulic presses, industrial cranes, automated machine tools, and specialized equipment for large-scale industries.",
          "Life-Critical Equipment: Fire extinguishers, pressure vessels, emergency electrical systems, and other devices and systems for life safety.",
          "Specialized Consumer & Industrial Electronics: Medical grade electronic appliances and equipment incorporating advanced protective measures.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Serial No.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Description of Machinery and Electrical Equipment
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HS Code
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Pumps for handling liquids, liquid elevators and
                  (or)their assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 and
                841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-compressors"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of compressors and(or)their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                and 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-heat-treatment-equipment"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machinery for treatment of material by a process
                  involving a change of temperature and(or)their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 and
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of centrifuges, filtering or purifying machinery for
                  liquid and gas and(or)their assemblies /sub-assemblies
                  /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 and 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-packing-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machinery for filling, closing, sealing,
                  labelling bottles, packing or wrapping and(or)their
                  assemblies/sub-assemblies/components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 and 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-cranes"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of cranes and (or) their assemblies
                  /sub-assemblies/components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                and 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-construction-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machinery for construction, earthmoving, Mining
                  and (or)their assemblies /sub-assemblies/components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 and 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-weaving-machines-looms"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of weaving machines (looms) and (or)their
                  assemblies/sub-assemblies / components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 and 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-embroidery-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machinery for making embroidery and(or)their
                  assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 and 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of metal cutting machines tools covered under the
                  heading 8456 to 8461 and(or)their assemblies
                  /sub-assemblies/components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 and 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machine tools for working stone, ceramics,
                  concrete, asbestos cement or like mineral glass and (or)their
                  assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 and 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of machinery for working rubber and plastics and(or)
                  their assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8477
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                13
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Machines including the machines for public works
                  & building and the machinery & mechanical appliances having
                  individual functions, not specified Or included elsewhere in
                  Chapter 84 and(or)their assemblies/sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 and 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of gears and gearing, toothed wheels, chain
                  sprocket, transmission elements ball or roller screws, gear
                  boxes and speed changers, including torque converters And
                  (or)their assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 and 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-rotary-electrical-machines"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Rotary electrical machines such as Generator,
                  etc. and (or) their assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-diesel-generators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Diesel Generator and (or)their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 and 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-transformers"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Transformers and (or)their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 and
                850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-power-semiconductor-converters"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of Power Semiconductor Converter and (or)their
                  assemblies /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850440
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                19
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of switch gear and control gear equipment operating
                  at voltages not exceeding 1000 volts and (or)their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 and 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  href="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  All types of switch gear and control gear equipment operating
                  at voltages exceeding 1000 volts and (or) their assemblies
                  /sub-assemblies /components
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 and 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <div className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Product wise Safety Standard
          </div>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Description of Machinery and Electrical Equipment
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={downloadTableData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Safety Standards Under BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        More than simply a legal necessity, the BIS Scheme - X Certification
        offers a promise of safety, quality, and reliability. This
        Certification, which entails strict adherence to national and
        international norms, ensures that the machinery and electrical apparatus
        offered to users are safe, environmentally friendly, and technically
        sound.
      </p>

      <p className="service-left-content-paragraph">
        To certify under Scheme - X, manufacturers need to comply with the
        following major safety components:
      </p>

      <PointsListWithoutHeading
        points={[
          "Electrical Safety: Compliance with the applicable IEC and Indian Standards. Certification protects against short circuits, electric shocks, insulation breakdown, loss in protective earth, ignition of surrounding combustible material, and fire.",
          "Mechanical Safety: Assessment of the machinery's structural integrity and the integrity of moving parts and of new materials. Ensures that equipment is safely subjected to mechanical stress, wear, and operational hazards.",
          "Fire Safety: The use of materials that are designed and constructed with fire resistant material. Compliance with standards for flame propagation performance to control the risks associated with fire.",
          "Environmental Compliance: The use of controlled power and eco - friendly materials in the production of equipment. Encourages manufacturers to lessen the environmental impact of their equipment.",
          "Quality Management: Dominant and autonomous control on the production processes to maintain the pre-set standards and norms. Focus on regulation of factory conditions, including process audits, and continual adherence.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Regulatory Standards Under Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Manufacturers are required to comply with the Relevant Indian Standards
        which are aligned with the International Standards, including:
      </p>

      <h3 className="service-left-content-heading-three">Type A Standards:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Safety of Machinery: General Principles for the Design, Risk Assessment, and Risk Reduction.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Type B Standards:</h3>

      <PointsListWithoutHeading
        points={[
          "Described in the Second Schedule of the Omnibus Technical Regulation (OTR) Order, 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Type C Standards:</h3>

      <PointsListWithoutHeading
        points={["Described in the Third Schedule of the OTR Order, 2024."]}
      />

      <h3 className="service-left-content-heading-three">
        IS/IEC 60947 Series:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Cover low voltage switchgear and control gear in multiple parts and sections.",
        ]}
      />
    </div>
  );
};


const ServiceFaq = () => {
  const faqs = [
    {
      question: "What is Scheme X under BIS certification?",
      answer:
        "Scheme X is a conformity assessment scheme introduced by the Indian BIS for machinery and electrical equipment. It ensures compliance with stringent safety and technical standards as specified in the Omnibus Technical Regulation.",
    },
    {
      question: "Is Scheme X different from the ISI mark certification?",
      answer:
        "Yes. The ISI mark is generally for consumer goods and basic product compliance, while Scheme X applies to complex and industrial-grade products that require advanced testing and certification through a BIS certificate or BIS license.",
    },
    {
      question: "Who needs to apply for Scheme X certification?",
      answer:
        "Manufacturers and importers of machinery and electrical equipment listed under the Omnibus Technical Regulation must apply for Scheme X and obtain a valid BIS certification to legally sell or distribute their products in India. Global manufacturers or foreign manufacturers intending to sell product in India must also comply with these regulations.",
    },
    {
      question: "What is the cost of BIS Scheme X certification?",
      answer:
        "The cost of Scheme X includes application fees, certification fees, technical file review charges, factory inspection costs, and product testing charges. On average, it starts at ₹2,000 for application and can go up depending on product complexity. For more details contact us at info@sunconsultants.co.in.",
    },
    {
      question: "How long does it take to get a BIS licence under Scheme X?",
      answer:
        "The timeline varies depending on documentation, testing requirements, and factory inspections. Typically, it takes 4–6 weeks from the date of successful BIS registration and application submission for Indian manufacturers and 60-90 days for foreign manufacturers.",
    },
    {
      question: "Can MSMEs also apply for BIS certification under Scheme X?",
      answer:
        "Absolutely. In fact, the Indian BIS encourages MSMEs to apply for a BIS licence or certificate of conformity under Scheme X to boost quality, compliance, and competitiveness in the industrial sector.",
    },
    {
      question: "Is BIS certification under Scheme X mandatory for exports?",
      answer:
        "No. Products manufactured exclusively for export are exempt under the Omnibus Technical Regulation. However, products meant for Indian markets must be certified under Scheme X.",
    },
    {
      question: "What is the validity of the BIS license under Scheme X?",
      answer:
        "A BIS licence under Scheme X is generally valid for 3-6 years and must be renewed accordingly. Renewal involves payment of the annual BIS certification fee and may require re-evaluation depending on changes in product scope or standards.",
    },
    {
      question: "Can foreign manufacturers apply for Scheme X certification?",
      answer:
        "Yes, foreign manufacturers can apply for Scheme X certification through an authorized Indian representative. The Indian BIS requires a factory inspection, which may take 3 days for foreign applicants, along with standard BIS registration and testing processes.",
    },
    {
      question: "What is a Technical File and why is it required?",
      answer:
        "A Technical File is a detailed compliance dossier required under Scheme X. It includes manufacturing processes, product details, test reports, and quality control documents. It supports the product's conformity to relevant Indian Standards during the BIS certification process.",
    },
    {
      question: "How is Scheme X related to the Omnibus Technical Regulation?",
      answer:
        "The Omnibus Technical Regulation mandates the use of Scheme X for specific categories of machinery and electrical equipment in India. Products listed under the regulation must be certified under Scheme X to obtain a valid BIS certificate or BIS licence.",
    },
    {
      question: "Can a BIS certificate under Scheme X be revoked?",
      answer:
        "Yes. The Indian BIS can suspend or cancel a BIS licence or certificate under Scheme X if non-compliance is found during surveillance or if the product fails to meet required Indian Standards.",
    },
    {
      question: "What is the difference between BIS license and BIS certificate under Scheme X?",
      answer:
        "A BIS license is typically issued to Indian manufacturers, while a BIS certificate of conformity (CoC) is often issued to foreign manufacturers or for specific cases. Both serve the same purpose—ensuring product compliance under Scheme X.",
    },
    {
      question: "Is the ISI mark allowed for products certified under Scheme X?",
      answer:
        "No. Products under Scheme X do not carry the ISI mark. Instead, they display the BIS standard mark relevant to the certification scheme, as governed by the Indian BIS.",
    },
    {
      question: "How do I know if my machinery requires Scheme X certification?",
      answer:
        "Check the official list in the Omnibus Technical Regulation or consult with a BIS consultant to verify if your machinery falls under mandatory Scheme X certification requirements.",
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
    //   path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    // },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
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
