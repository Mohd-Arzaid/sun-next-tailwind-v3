import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SlashIcon,
  Users,
  FileCheck,
  Package,
  Globe,
  Briefcase,
  Star,
  MapPin,
  MailPlus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AdvisoryNetworkPage() {
  return (
    <div className="relative">
      <BreadcrumbContent />
      <HeroSection />
      <AdvisoryCardsSection />
      <FaqsSection />
    </div>
  );
}
const Container = ({ children, className }) => {
  return (
    <div
      className={cn("max-w-[84rem] mx-auto px-4 sm:px-6 md:px-12", className)}
    >
      {children}
    </div>
  );
};

function BreadcrumbContent() {
  return (
    <div className="absolute top-3 md:top-5 left-0 w-full z-30">
      <Container>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap font-geist">
              <BreadcrumbItem className="flex-shrink-0">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="flex-shrink-0">
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="flex-shrink-0">
                <BreadcrumbPage className="whitespace-nowrap">
                  Advisory Network Page
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Container>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="pb-16 border-b border-neutral-200">
      <Container>
        <div className="py-14">
          <h1 className="font-playfair mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg">
            Advisory Network Page
          </h1>
          <p className="font-geist text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-4xl text-center mx-auto text-neutral-600">
            We collaborate with a vetted network of independent former BIS
            professionals who provide technical guidance on audits,
            documentation, inspections, and corrective actions. These advisors
            are not employees of Sun Certifications India and do not represent
            BIS.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border bg-neutral-50 border-neutral-200">
          <div className="px-4 sm:px-6 py-8 border-b sm:border-r border-neutral-200 md:border-b-0">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg shadow-input bg-neutral-50">
                  <Users className="text-black" size={24} />
                </div>
              </div>
              <p className="text-3xl font-geist font-bold text-neutral-800">
                25+
              </p>
            </div>

            <p className="font-geist mt-4 text-base text-neutral-600">
              Independent former BIS advisors
            </p>
          </div>
          <div className="px-4 sm:px-6 py-8 border-b md:border-b-0 md:border-r border-neutral-200">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg shadow-input bg-neutral-50">
                  <FileCheck className="text-black" size={24} />
                </div>
              </div>
              <p className="text-3xl font-geist font-bold text-neutral-800">
                1000+
              </p>
            </div>

            <p className="font-geist mt-4 text-base text-neutral-600">
              Audits supported across Industries
            </p>
          </div>
          <div className="px-4 sm:px-6 py-8 border-b sm:border-r sm:border-b-0 md:border-b-0 md:border-r border-neutral-200">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg shadow-input bg-neutral-50">
                  <Package className="text-black" size={24} />
                </div>
              </div>
              <p className="text-3xl font-geist font-bold text-neutral-800">
                100+
              </p>
            </div>

            <p className="font-geist mt-4 text-base text-neutral-600">
              Product Categories Covered
            </p>
          </div>
          <div className="px-4 sm:px-6 py-8 border-neutral-200">
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-lg shadow-input bg-neutral-50">
                  <Globe className="text-black" size={24} />
                </div>
              </div>
              <p className="text-3xl font-geist font-bold text-neutral-800">
                20+
              </p>
            </div>

            <p className="font-geist mt-4 text-base text-neutral-600">
              Countries Served (Global Support)
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

const AdvisoryCardsSection = () => {
  const advisorsData = [
    {
      id: 1,
      formerRole: "Former BIS Scientist B (2011–2020)",
      specialties: "FMCS, Electrical Products, Toys",
      region: "North Zone / PAN-India",
      clientSupport:
        "Pre-audit gap analysis, sampling plan, lab coordination, corrective action advice",
    },
    {
      id: 2,
      formerRole: "Former BIS Lab Officer (2010–2018)",
      specialties: "Cables & Wires, Transformers, Safety Standards",
      region: "Western & Southern India",
      clientSupport:
        "Lab test alignment, specification interpretation, document review",
    },
    {
      id: 3,
      formerRole: "Former BIS Audit Lead (2012–2019)",
      specialties: "Quality system audits, non-conformity prioritization",
      region: "PAN-India + Export markets",
      clientSupport: "Audit readiness roadmaps, NC closure guidance",
    },
    {
      id: 4,
      formerRole: "Former BIS Scientist B (2011–2020)",
      specialties: "FMCS, Electrical Products, Household Appliances",
      region: "North Zone / PAN-India",
      clientSupport:
        "Pre-audit gap analysis, audit readiness checklist, corrective action planning",
    },
    {
      id: 5,
      formerRole: "Former BIS Laboratory Officer (2010–2018)",
      specialties: "Cables & Wires, Transformers, Safety Testing",
      region: "West & South India",
      clientSupport:
        "Lab coordination, test sample planning, test report interpretation",
    },
    {
      id: 6,
      formerRole: "Former BIS Certification Officer (2012–2019)",
      specialties: "ISI Mark Scheme, Factory Inspection Readiness",
      region: "PAN-India",
      clientSupport:
        "Factory audit preparation, documentation verification, NC closure guidance",
    },
    {
      id: 7,
      formerRole: "Former BIS Scientist C (2009–2017)",
      specialties: "Toys, Furniture, Consumer Products",
      region: "North & Central India",
      clientSupport:
        "Product standard interpretation, compliance gap identification, audit preparation",
    },
    {
      id: 8,
      formerRole: "Former BIS FMCS Auditor (2013–2021)",
      specialties: "Foreign Manufacturers Certification Scheme (FMCS)",
      region: "Global / Export Markets",
      clientSupport:
        "FMCS documentation support, audit simulation, inspection preparedness",
    },
    {
      id: 9,
      formerRole: "Former BIS Lab & Inspection Officer (2011–2019)",
      specialties: "Steel Products, Pipes & Tubes, Industrial Materials",
      region: "East & North India",
      clientSupport:
        "Sampling methodology, test coordination, specification clarification",
    },
    {
      id: 10,
      formerRole: "Former BIS Surveillance & Enforcement Officer (2012–2020)",
      specialties:
        "Post-certification surveillance, licence compliance, marking requirements",
      region: "PAN-India",
      clientSupport:
        "Surveillance audit readiness, licence maintenance guidance, compliance gap correction.",
    },
    {
      id: 11,
      formerRole: "Former BIS Scientist B (2010–2018)",
      specialties: "Electrical Accessories, Switchgear, Low Voltage Equipment",
      region: "North & West India",
      clientSupport:
        "Clause-wise standard mapping, audit checklist preparation, NC prevention planning.",
    },
    {
      id: 12,
      formerRole: "Former BIS Product Certification Specialist (2011–2019)",
      specialties: "Consumer Products, Household Goods, Safety Standards",
      region: "PAN-India",
      clientSupport:
        "Product scope finalisation, standard applicability review, documentation alignment.",
    },
    {
      id: 13,
      formerRole: "Former BIS Lab Testing & Evaluation Officer (2009–2017)",
      specialties:
        "Mechanical Testing, Chemical Testing, Product Performance Evaluation",
      region: "Central & North India",
      clientSupport:
        "Test parameter alignment, lab coordination, result interpretation support.",
    },
    {
      id: 14,
      formerRole: "Former BIS Factory Inspection Lead (2013–2021)",
      specialties:
        "Factory audits, production control assessment, process compliance",
      region: "PAN-India + Export Units",
      clientSupport:
        "Factory inspection readiness, internal process review, audit-day coordination.",
    },
    {
      id: 15,
      formerRole: "Former BIS Scientist C (2008–2016)",
      specialties: "Furniture Products, Wooden Articles, Material Standards",
      region: "North & East India",
      clientSupport:
        "Standard interpretation, material compliance checks, audit preparation guidance.",
    },
  ];

  return (
    <div className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
      <Container>
        <h2 className="font-playfair mb-4 md:mb-6 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg">
          Our Advisor Micro-Profiles
        </h2>
        <p className="font-geist text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl md:max-w-3xl text-center mx-auto text-neutral-600">
          Below are representative examples of the types of specialists in our
          network. Actual advisors are engaged per assignment and verified prior
          to engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {advisorsData.map((advisor) => (
            <div
              key={advisor.id}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-2"
            >
              <div className="rounded-2xl py-6 px-6 md:py-8 md:px-8 shadow-input bg-white h-full">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Former Role
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.formerRole}
                </p>

                <Separator className="my-5 border border-neutral-200 " />

                <div className="flex items-center gap-2">
                  <Star className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Specialties
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.specialties}
                </p>

                <Separator className="my-5 border border-neutral-200 " />

                <div className="flex items-center gap-2">
                  <MapPin className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Region
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.region}
                </p>

                <Separator className="my-5 border border-neutral-200 " />

                <div className="flex items-center gap-2">
                  <MailPlus className="text-neutral-800" size={18} />
                  <h3 className="font-geist text-lg font-semibold text-neutral-800">
                    Client Support
                  </h3>
                </div>
                <p className="font-geist text-base text-neutral-600">
                  {advisor.clientSupport}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const FaqsSection = () => {
  const faqs = [
    // {
    //   question: "Are these BIS officers employees of Sun Consultants?",
    //   answer:
    //     "No. They are independent consultants engaged on an assignment basis. They are not our employees and do not represent BIS.",
    // },
    {
      question: "How are advisors verified?",
      answer:
        "Advisors undergo credential checks, conflict checks, NDA signing, and quality reviews before engagement.",
    },
    {
      question: "Will they speak on behalf of BIS?",
      answer:
        "No. Advisors provide guidance only; they cannot represent or speak for BIS or any government body.",
    },
    {
      question: "Are your advisors currently associated with BIS?",
      answer:
        "No. All advisors are former BIS professionals and have no current affiliation with BIS or any government authority.",
    },
    {
      question:
        "Do advisors directly interact with BIS officials on behalf of clients?",
      answer:
        "No. Advisors provide technical guidance only. All formal communication, applications, and submissions are handled by the applicant or through official BIS portals, as per regulations.",
    },
  ];
  return (
    <div className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 border border-neutral-200">
      <Container>
        <h3 className="font-playfair mb-4 md:mb-3 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-800 drop-shadow-lg">
          Frequently Asked Questions
        </h3>
        <p className="font-geist text-sm sm:text-base md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl text-center mx-auto text-neutral-600">
          Can&apos;t find the answer you are looking for?{" "}
          <Link
            href="/contact"
            className="text-neutral-800 underline underline-offset-4 font-medium hover:text-neutral-900 transition-colors"
          >
            Reach out to us!
          </Link>
        </p>

        <div className="max-w-5xl mt-6 md:mt-8 mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-base md:text-lg text-neutral-800">
                  <div className="flex-1 text-left">
                    <span className="mr-2">{index + 1}.</span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-base md:text-lg text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
