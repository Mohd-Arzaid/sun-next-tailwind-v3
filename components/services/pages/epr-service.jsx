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

function EPRService() {
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

export default EPRService;

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
                    EPR Registration for Plastic Packaging Waste
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
            <span className="text-[#1A8781] font-poppins text-sm md:text-base font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              EPR Registration for
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            E-Waste Management in India
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Get EPR registration for e-waste management. Ensure CPCB compliance under E-Waste Management Rules, 2022
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

  // Update section slugs and text content per reference
  const SECTIONS = useMemo(
    () => [
      "overview",
      "eligibility",
      "documents",
      "consultancy",
      "faqs",
    ],
    []
  );

  // Human-friendly menu items (textual part only!)
  const MENU_ITEMS = {
    overview: "Overview",
    eligibility: "Eligibility",
    documents: "Documents",
    consultancy: "Consultancy",
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
    // Section observer style scrollspy for better UX
    const sectionObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (entry.target.id === "faqs") {
              setActiveSection("faqs");
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(
        section.toLowerCase().replace(/\s+/g, "-")
      );
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
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
          {/* Only show text, not index, from MENU_ITEMS */}
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
        <EligibilitySection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <ConsultingSection />
        <div className="service-left-content-divider" />
        <ReviewSection />
    
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Overview
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        EPR Registration for E-Waste Management in India
      </h1>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        EPR Registration for E-Waste Management in India
      </p>

      {/* Overview Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Mobile phones, laptops, medical instruments, and a variety of electronic
        household products comprise the electronic waste (e-waste) stream in
        India which includes the fastest growing waste categories from a global
        perspective, as a result of India's rapid digital expansion and growing
        dependence on consumer electronics.
        <br />
        <br />
        Electronic waste (e-waste) comprises mobile phones, laptops, medical
        devices, and electronics from various household products. The rapid
        digital expansion and growing dependence on consumer electronics in
        India resulted in the largest growing waste stream in the country.
        <br />
        <br />
        Electronic waste contains product components that are highly toxic and
        dangerous to human life such as lead, mercury, cadmium, and flame
        retardant. These components can poison and toxic waters, and the poison
        can spread, and children and other susceptible people can receive
        poisoning as a result. The Government of India realized the risks of
        electronic waste and implemented several regulations to mitigate it. The
        most important of them is the Extended Producer Responsibility (EPR) for
        E-Waste Management in India.
        <br />
        <br />
        In this article, we will analyze the details of EPR registration for
        e-waste management in the country, covering the relevant laws, the
        importance of the EPR, EPR obligations and compliances, and the EPR
        registration process.
      </div>

      {/* What is E-Waste Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What is E-Waste?
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        E-waste refers to the discarded end user electronic equipment, samples
        rejected from manufacturing, refurbishment, and repair activities. It
        includes:
        <br />
        <br />
        ● computers, laptops, and tablets
        <br />
        ● mobile devices and accessories
        <br />
        ● TVs and other home appliances
        <br />
        ● IT and telecommunications devices
        <br />
        ● medical and laboratory equipment
        <br />
        <br />
        The large quantity of such waste and the dangerous substances it
        contains necessitate the need for appropriate management. That's why EPR
        e-waste management is so important.
      </div>

      {/* Understanding EPR Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Understanding Extended Producer Responsibility (EPR) for E-Waste
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Extended Producer Responsibility EPR e-waste is an eco-political
        approach assigning the responsibility of e-waste management to the
        manufacturers of electronic and electrical equipment. Therefore, these
        manufacturers take care of the collection, storage, transport,
        recycling, and safe disposal of the e-waste from their products.
        <br />
        <br />
        In India, the EPR for e-waste concept was first introduced in 2011 and
        has since undergone multiple changes in succession. The most recent of
        these is the E-Waste Management Rules, 2022 in the context of the
        Environment (Protection) Act, 1986.
        <br />
        <br />
        The EPR management system is within the purview of the Central Pollution
        Control Board (CPCB) for EPR implementation, monitoring, and approvals.
      </div>

      {/* EPR Registration Meaning Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What does it mean to have EPR Registration for E-Waste Management?
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR registration for e-waste means that an entity gets permission from
        the Central Pollution Control Board (CPCB) to work with the electrical
        and electronic devices and obtain an e-waste registration and is legally
        operating in India only if they have a valid registration.
        <br />
        <br />
        The following entities must have EPR authorization for e-waste:
        <br />
        <br />
        ● Producers of electrical and electronic equipment
        <br />
        ● Suppliers of electronic goods to the country
        <br />
        ● Brand owners that offer products in their own name
        <br />
        ● Companies that create e-waste
        <br />
        ● Companies that reprocess
        <br />
        ● Companies that recycle
        <br />
        <br />
        When the entity registration is approved, it is issued an EPR e-waste
        certificate, confirming that the entity has fulfilled their regulatory
        obligations.
      </div>

      {/* E-Waste EPR Portal Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        What is the use of the E-Waste EPR Portal?
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Central Pollution Control Board (CPCB) has created the e-waste EPR
        Portal to enhance compliance and transparency. For streamlined
        oversight, the e-waste EPR Portal serves the following purposes:
        <br />
        <br />
        ● The Application for EPR Registration and issuance of EPR Certificates
        <br />
        ● Annual and quarterly return filings
        <br />
        ● Collection, recycling, and disposal data submissions
        <br />
        ● EPR target and achievement tracking
        <br />
        <br />
        In order to provide the CPCB with regulatory oversight and real-time
        tracking, all users of the portal must validate their registrations to
        track their EPR obligations.
      </div>

      {/* Why EPR Essential Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Why EPR is Essential for Managing E-Waste
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR encourages responsible product design to counteract waste before it
        becomes harmful. Rather than dealing with the negative outcomes of
        pollution, EPR focuses on stopping the problem before it starts.
        <br />
        <br />
        With EPR e-waste management, companies are encouraged to:
        <br />
        <br />
        ● Design easy to recycle products
        <br />
        ● Eliminate the use of toxic materials
        <br />
        ● Encourage longer lasting products
        <br />
        ● Create structured collection and recycling systems
        <br />
        <br />
        All of these contribute to making environmental impact lower while
        helping achieve India's sustainable development goals and circular
        economy.
      </div>

      {/* Benefits Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Benefits of EPR Registration for E-Waste
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          1. Legal Compliance and Business Continuity
        </h3>
        An EPR certificate for e-waste protects businesses from the consequences
        of non-compliance with India's environmental laws. Businesses can be
        fined, their operations can be suspended, and criminal and civil actions
        can be taken against them under the Environment (Protection) Act of 1986
        if adequate EPR authorization is not present.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          2. Waste Management Costs
        </h3>
        EPR registration for e-waste, while it may appear to be a traditional
        compliance cost, is a counter to waste practices that result in over
        expenditure. Keeping costs down over the long run is achieved with
        guided collection, transport, and recycling.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          3. Protection of Ecosystem
        </h3>
        EPR is a great help in controlling the circulation of dangerous
        materials that may produce pollution and threaten the ecosystem. This
        also allows the systemic diversion of waste from informal waste
        management to formal recycling.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          4. Improved Brand Image
        </h3>
        Branding also has its positive aspects. The presence of an EPR e-waste
        certificate endorses a brand as environmentally responsible and thus
        attracts and retains the trade of customers.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          5. Support to Circular Economy
        </h3>
        EPR focuses on recycling and recovery of materials that can be reused
        and is useful in conserving and lessening the need to extract more from
        the earth.
      </div>
    </section>
  );
};

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Eligibility
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        The E-Waste Management Rules, 2022, Obligations
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        E-Waste Management Rules, 2022, clearly state what is expected from the
        various actors involved.
      </p>

      {/* Responsibilities Content */}
      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Responsibilities of Manufacturers
        </h3>
        ● Ensuring proper collection and recycling or disposal of e-waste
        created while manufacturing.
        <br />
        ● Registering on the e-waste EPR portal.
        <br />
        ● Filing annual and quarterly returns within the set deadlines.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Responsibilities of Producers
        </h3>
        Producers listed in Schedule I should:
        <br />
        ● Get EPR authorization for e-waste.
        <br />
        ● Meet EPR obligations as provided in the regulation.
        <br />
        ● Generate awareness through ads, publications, and other media.
        <br />
        ● Submit return statements periodically on the portal.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Responsibilities of Refurbishers
        </h3>
        ● Collect e-waste that occurs during the refurbishment process.
        <br />
        ● Only give the waste to registered recyclers.
        <br />
        ● Provide information on the epr e waste cpcb portal.
        <br />
        ● Ensure that the refurbished items are safe and of good quality.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Responsibilities of Bulk Consumers
        </h3>
        Bulk consumers like government entities, public sector undertakings,
        healthcare systems, and big companies are required to:
        <br />
        ● Only give e-waste to authorized producers, refurbishers, or recyclers.
        <br />
        ● Keep e-waste disposal records.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Responsibilities of Recyclers
        </h3>
        ● Keep and maintain recycling centers based on the CPCB guidance.
        <br />
        ● Dispose of leftover waste in authorized TSDFs.
        <br />
        ● Keep detailed records of collection, dismantling, and recycling.
        <br />
        ● Upload information on the EPR portal frequently.
        <br />● Teach people about proper e-waste disposal.
      </div>

      {/* Storage Section */}
      <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Storage of E-Waste Under EPR Regulations
      </h3>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The E-Waste Management Rules, 2022 have brought up specific regulations
        that impose a maximum on the length of time that waste may be kept.
        <br />
        <br />
        ● E-waste can only be kept for 180 days
        <br />
        ● Keep records of sales, transfers, and storage
        <br />
        ● CPCB can grant recycling or reuse development extensions for 365 days
        <br />
        <br />
        When transporting e-waste, the 2016 Hazardous and Other Waste
        (Management and Transboundary Movement) Rules must be followed.
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Documents
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        E-Waste EPR Registration Documents
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        When applying for an EPR e-waste certificate, you will need the
        following documents:
      </p>

      {/* Important Points */}
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        {/* Points */}
        <div className="w-full md:w-auto">
          <PointsListWithoutHeading
            points={[
              "If applicable, Importer Exporter Code (IEC)",
              "GST Registration",
              "KYC documents for the authorized signatory or proprietor",
              "Lease, rental agreement, or ownership proof for the business location",
              "An Excel sheet with imported products information",
              "A record of sales related to electrical and electronic equipment",
            ]}
            heading="Documents Required for EPR Registration"
          />
        </div>
      </div>

      {/* Registration Steps */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Steps to Register E-Waste EPR
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        EPR e-waste registration steps are entirely online through CPCB.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 1: Go to the CPCB Website
        </h3>
        Go to the Central Pollution Control Board's e-waste EPR portal.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 2: Complete Form-1
        </h3>
        Enter your business information, the types of products you offer, and
        how much e-waste you produce.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 3: Set EPR Objectives
        </h3>
        Provide the expected collection targets for the upcoming year, broken
        down by item, and for each collection.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 4: Upload Documents
        </h3>
        Please attach necessary documents and declarations.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 5: CPCB Verification
        </h3>
        CPCB is responsible for reviewing the application and confirming the
        details.
        <br />
        <br />
        <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mt-6 mb-2">
          Step 6: Grant of EPR Certificate
        </h3>
        Once the verification has been completed successfully, the CPCB will
        issue the EPR e-waste certificate.
      </div>

      {/* Cancellation Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Cancellation or Suspension of EPR Authorization
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In the case that an entity violates environmental law or misses an
        obligation under EPR, CPCB has the power to suspend or cancel an EPR
        certificate for e-waste.
        <br />
        <br />
        ● Action notice is sent within 25 days
        <br />
        ● The entity can deliver an explanation
        <br />● Penalties and restrictions on operations may follow
        non-compliance
      </div>

      {/* Future Section */}
      <h2 className="text-[24px] md:text-[32px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mt-8 mb-3">
        Future of EPR E-Waste Management in India
      </h2>

      <div className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Projected growth in the generation of e-waste in India will give cause
        to strengthen EPR e-waste management. The introduction of digital
        tracking via the EPR portal, along with tighter policies and increased
        involvement of the industry will improve the sustainable management of
        e-waste in India.
      </div>
    </section>
  );
};

const ConsultingSection = () => {
  return (
    <section id="consultancy" className="flex flex-col scroll-mt-20">
      {/* Consultancy */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          Conclusion
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal my-3 md:my-0">
        Conclusion
      </h2>

      {/* Description */}
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Getting EPR authorization for e-waste is one of the first steps a
        business should take to formally protect the environment while
        practicing responsible business.
      </p>

      <div className="mt-[16px] md:mt-[24px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Keeping a business legally compliant means that they can reduce health
        risks for the community and assist the country in moving towards a
        circular economy.
        <br />
        <br />
        The EPR portal is simple to use and is the main reason the e-waste EPR
        system is so effective. Companies that take the time to register with
        the EPR portal will be able to save themselves the hassle of regulatory
        issues and will be able to enjoy flexible and unrestrained operational
        capabilities for as long as they want to stay within the limit of the
        regulations.
        <br />
        <br />
        The rapid growth of electronics in the world means that effective EPR
        e-waste management is a shared responsibility. More importantly, it is a
        positive step towards a sustainable future.
      </div>
    </section>
  );
};

const ReviewSection = () => {
  return (
    <section aria-labelledby="review-title">
      <h2
        id="review-title"
        className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal"
      >
        What did you think of this content?
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group"
            aria-label="Mark content as helpful"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
              />
            </svg>
            <span>It was helpful</span>
          </button>

          <button
            className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group"
            aria-label="Mark content as not helpful"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
              />
            </svg>
            <span>It was not helpful</span>
          </button>
        </div>

        <time
          className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal"
          dateTime="2025-03-19"
        >
          Last updated on Mar 19, 2025
        </time>
      </div>
    </section>
  );
};


const ServiceFaq = () => {
  const faqs = [
    {
      question: "What is BIS certification in India?",
      answer:
        "BIS certification is a quality assurance certification issued by the Bureau of Indian Standards (BIS) to ensure that products comply with Indian standards for safety, performance, and quality. It is mandatory for various product categories and helps in consumer protection and regulatory compliance.",
    },
    {
      question: "Why do I need a BIS certificate?",
      answer:
        "A BIS certificate is essential to legally manufacture, import, distribute, or sell certain products in India. It assures consumers that the product meets the safety and quality guidelines of Indian standards.",
    },
    {
      question: "What is the ISI mark under BIS certification?",
      answer:
        "The ISI mark is a certification symbol provided under the BIS certification scheme. It indicates that a product complies with Indian standards and has been certified by the Indian BIS through proper testing and registration.",
    },
    {
      question: "Who issues BIS licenses in India?",
      answer:
        "BIS licenses are issued by the Bureau of Indian Standards (Indian BIS), the national standards body under the Ministry of Consumer Affairs, Food and Public Distribution.",
    },
    {
      question: "What are the different types of BIS certification schemes?",
      answer:
        "The major BIS certification schemes include the ISI mark scheme, Compulsory Registration Scheme (CRS), Foreign Manufacturers Certification Scheme (FMCS), Hallmarking for jewelry, Eco Mark certification, and what is Scheme X for industrial machinery.",
    },
    {
      question: "What is Scheme X under BIS certification?",
      answer:
        "Scheme X is a simplified BIS certification process applicable to industrial products like pumps, transformers, machine tools, and cranes. It ensures quicker approval without compromising compliance to Indian standards.",
    },
    {
      question: "Which products require BIS certification in India?",
      answer:
        "Products like electrical appliances, electronics, kitchenware, cement, steel, gold jewelry, mobile phones, and transformers require BIS certification as per the Indian BIS mandate.",
    },
    {
      question: "Is BIS registration mandatory for all products?",
      answer:
        "No, BIS registration is mandatory only for products listed in the compulsory certification scheme. However, voluntary BIS certification is also available to enhance product credibility.",
    },
    {
      question: "How long is a BIS licence valid?",
      answer:
        "A BIS licence is typically valid for one to two years and must be renewed before its expiry to continue using the ISI mark or maintain BIS registration status.",
    },
    {
      question: "What are the steps to get BIS certification in India?",
      answer:
        "The BIS certification process includes identifying applicable Indian standards, submitting an application, product testing, factory inspection, and issuance of a BIS certificate upon approval.",
    },
    {
      question: "Can foreign manufacturers apply for a BIS license?",
      answer:
        "Yes, under the Foreign Manufacturers Certification Scheme (FMCS), foreign companies can apply for a BIS license to sell products in India. They must appoint an Authorized Indian Representative (AIR).",
    },
    {
      question: "What is the role of the AIR in BIS certification?",
      answer:
        "An AIR (Authorized Indian Representative) acts as a liaison between the foreign manufacturer and the Indian BIS. They are responsible for documentation, communication, and compliance with BIS certification requirements.",
    },
    {
      question: "How can I apply for BIS registration online?",
      answer:
        "You can apply for BIS registration online through the official BIS portal. The process involves form submission, uploading documents, test reports, and payment of fees.",
    },
    {
      question: "What documents are required for a BIS certificate?",
      answer:
        "Documents needed include business license, product specifications, manufacturing process, lab test reports, factory layout, quality manual, and authorization forms (for foreign manufacturers).",
    },
    {
      question: "How much does BIS certification cost in India?",
      answer:
        "The cost of BIS certification depends on product type, testing requirements, scheme type (ISI, CRS, FMCS), and whether the applicant is domestic or foreign. Costs include application fees, testing charges, and inspection expenses.",
    },
    {
      question: "Is the ISI mark mandatory for all BIS-certified products?",
      answer:
        "No, only products under the ISI scheme are required to carry the ISI mark. Products under CRS or Hallmarking schemes follow different labeling protocols as per BIS registration norms.",
    },
    {
      question: "Can I get BIS certification for eco-friendly products?",
      answer:
        "Yes, products that meet environmental standards can get BIS certification under the Eco Mark scheme, which ensures compliance with Indian standards for environmental safety.",
    },
    {
      question:
        "What is the difference between BIS certification and BIS registration?",
      answer:
        "BIS certification generally refers to the approval under ISI, FMCS, or Hallmarking schemes, while BIS registration is commonly associated with the CRS scheme for electronic products.",
    },
    {
      question: "What is the Compulsory Registration Scheme (CRS)?",
      answer:
        "CRS is a BIS registration program for IT and electronic goods like LED lights, mobile phones, and power banks. It ensures product compliance with safety-related Indian standards.",
    },
    {
      question: "Do ISI mark and BIS certificate mean the same thing?",
      answer:
        "Not exactly. The ISI mark is the symbol granted to certified products under the BIS certification scheme. A BIS certificate is the legal document issued to the manufacturer.",
    },
    {
      question: "Can one BIS license cover multiple products?",
      answer:
        "No, a separate BIS licence is required for each product type and each manufacturing location, even if the products are similar.",
    },
    {
      question: "What happens if I sell products without BIS certification?",
      answer:
        "Selling products that require BIS certification without a valid BIS licence is illegal in India and can lead to penalties, product recalls, or bans.",
    },
    {
      question: "How long does it take to get BIS certification?",
      answer:
        "The BIS certification process generally takes 30 to 90 days, depending on the product type, testing requirements, and whether the applicant is domestic or foreign.",
    },
    {
      question: "Is BIS certification accepted globally?",
      answer:
        "While BIS certification is specific to India, it enhances global credibility by showcasing compliance with stringent Indian standards. Some BIS-certified products are also accepted under mutual recognition agreements.",
    },
    {
      question: "How often do I need to renew my BIS license?",
      answer:
        "BIS licenses must be renewed annually or biennially. Manufacturers must maintain compliance with Indian standards and pass surveillance audits to renew their BIS certificate.",
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
