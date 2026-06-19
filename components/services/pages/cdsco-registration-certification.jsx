import ServicePageLayout from "@/components/services/shared/service-page-layout";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  Paragraph,
  PointsList,
  ServiceImage,
} from "@/components/services/shared/service-content";

const hero = {
  titleHighlight: "CDSCO",
  titleSuffix: "Registration Certificate",
  description:
    "CDSCO license is mandatory for the manufacturing, import, sale, and distribution of all medical devices in India.",
};

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>CDSCO Overview</SectionHeadingTwo>

    <Paragraph>
      CDSCO stands for{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        Central Drugs Standard Control Organisation
      </span>{" "}
      (which comes under the Ministry of Health and Family Welfare),
      headquartered in Delhi and has 6 zonal offices in India namely at Mumbai,
      Kolkata, Chennai, Ghaziabad, Hyderabad and Ahmedabad and various other
      sub-zonal offices. It is the national regulatory body for products like
      cosmetics, drugs, medical devices, etc.
    </Paragraph>

    <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
      <div className="w-full md:w-auto flex-1">
        <SectionHeadingThree as="p">
          Different divisions of the CDSCO are as below
        </SectionHeadingThree>
        <PointsList
          points={[
            "Medical device division (Drugs)",
            "Drugs",
            "Cosmetics",
            "Clinical Trial on medical devices division",
            "Vaccines",
            "BA/BE",
          ]}
        />
      </div>

      <figure className="w-full md:w-auto">
        <ServiceImage
          src="/images/services/cdsco.jpg"
          alt="CDSCO organizational structure showing different divisions including medical devices, drugs, cosmetics, clinical trials, vaccines, and BA/BE"
          title="CDSCO organizational structure showing different divisions including medical devices, drugs, cosmetics, clinical trials, vaccines, and BA/BE"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/7.5 w-full md:w-[400px] h-auto md:h-[250px] mt-2.5"
        />
        <figcaption className="sr-only">
          CDSCO organizational structure and divisions
        </figcaption>
      </figure>
    </div>
  </>
);

const EligibilityContent = () => (
  <>
    <SectionHeadingTwo>CDSCO Certificate Eligibility</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Eligibility for a CDSCO Certificate requires meeting regulatory
      guidelines.
    </SectionHeadingThree>

    <Paragraph>
      All manufacturers, either of Indian or foreign origin, can apply for the{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        CDSCO license
      </span>
      . In the case of a{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        foreign manufacturer
      </span>
      , the license will be granted to the manufacturer, and the Indian
      counterpart of the manufacturer will act as its authorized Indian
      Representative. The Indian representative of the manufacturer must have a
      valid state drugs license under Form 20-B/21-B or Form 42 (applied under
      Form 41) as per the latest guidelines released by CDSCO.
    </Paragraph>
  </>
);

const ClassificationContent = () => (
  <>
    <SectionHeadingTwo>CDSCO Device Classification</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Medical devices are categorized into four classes by the Medical Device
      Rules 2017
    </SectionHeadingThree>

    <PointsList
      points={[
        "Class A ( least risk )",
        "Class B ( Moderate risk )",
        "Class C ( Moderate to high risk )",
        "Class D ( High risk )",
      ]}
    />

    <SectionHeadingThree as="p">
      CDSCO Registration can be obtained through online portal registration
    </SectionHeadingThree>

    <PointsList
      points={[
        "Class A ( non sterile and non measuring ) products come under registration scheme.",
        "Class A ( Sterile or measuring ) products require license.",
      ]}
    />

    <Paragraph>
      This brings us to the conclusion that products which are under{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        Class A ( sterile or measuring )
      </span>
      ,{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        Class B
      </span>
      ,{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        Class C
      </span>{" "}
      and{" "}
      <span className="font-medium text-gray-950 underline decoration-gray-200 decoration-2 underline-offset-[0.27em]">
        Class D
      </span>{" "}
      require a license from CDSCO.
    </Paragraph>
  </>
);

const DocumentsContent = () => (
  <>
    <SectionHeadingTwo>Required Documents for CDSCO LICENSE</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      CDSCO registration for Class A products ( non-sterile and non-measuring )
    </SectionHeadingThree>

    <PointsList
      points={[
        "Drugs license of importer (Required only for foreign manufacturer)",
        "Free sales certificate (Required only for foreign manufacturer)",
        "ISO certificate (Required only for foreign manufacturer)",
        "List of products to be registered",
        "Basic details about the product (example: storage temperature, shelf life, model number, etc.)",
      ]}
    />

    <SectionHeadingThree as="p">
      Class A ( sterile or measuring ), Class B, Class C and Class D
    </SectionHeadingThree>

    <PointsList
      points={[
        "Plant Master File (PMF)",
        "Device Master File (DMF)",
        "Manufacturing process flowchart",
        "Labels and user manual",
        "Design verification and validation",
        "Stability validation data",
        "Challan of the government fee paid",
      ]}
    />
  </>
);

const RegistrationContent = () => (
  <>
    <SectionHeadingTwo>Class A Product Registration Process</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Process for CDSCO registration for Class A products ( non-sterile and
      non-measuring )
    </SectionHeadingThree>

    <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-7">
      <div className="w-full md:w-auto flex-1">
        <PointsList
          points={[
            "Generation of login Credentials",
            "Registration of Indian / foreign manufacturer",
            "Registration of importer ( in case of import only )",
            "Addition of product details",
            "Submission of details to CDSCO",
            "Grant of registration",
          ]}
        />
      </div>

      <figure className="w-full md:w-auto">
        <ServiceImage
          src="/images/services/cdsco.jpg"
          alt="CDSCO registration process flow diagram showing steps from login credentials to grant of registration"
          title="CDSCO registration process flow diagram showing steps from login credentials to grant of registration"
          className="rounded-lg shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/7.5 w-full md:w-[400px] h-auto md:h-[240px] mt-2.5 md:mt-5"
        />
        <figcaption className="sr-only">
          CDSCO registration process flow diagram
        </figcaption>
      </figure>
    </div>

    <Paragraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        TIMELINE
      </span>
      CDSCO registration process will take 1 day after the documents are
      submitted to us.
    </Paragraph>
  </>
);

const LicensingContent = () => (
  <>
    <SectionHeadingTwo>Process For CDSCO License</SectionHeadingTwo>

    <PointsList
      points={[
        "Identifying the class of the medical device",
        "Making groups as per the guidelines mentioned as per CDSCO guidelines",
        "Creation of login credentials for the manufacturer",
        "Collection of documents from the overseas manufacturer",
        "Collection of documents from Indian importer",
        "Checking and vetting of documents as per the rules",
        "Payment of government fees",
        "Submission of Application online",
        "Clearing of queries ( if any )",
        "Audit of the firm",
        "Clearing of queries ( if any ) after the audit",
        "Grant of license",
        "Generation of CDSCO certificate",
      ]}
    />

    <Paragraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        TIMELINE
      </span>
      Approx 6-8 weeks after submission of application.
    </Paragraph>

    <Paragraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        VALIDITY
      </span>
      It is granted for 5 years initially and renewed thereafter by paying the
      government fees.
    </Paragraph>

    <PointsList
      points={[
        "In case of CDSCO import license, AUDIT OF THE FOREIGN MANUFACTURER IS NOT CONDUCTED, and rest of the procedure remains the same.",
        "License number mentioned on the CDSCO registration certificate has to be mentioned on the products / packaging.",
        "Test license is also required in case of Indian manufacturers.",
      ]}
    />

    <Paragraph>
      <span className="font-semibold uppercase text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] mr-3">
        Specialized Licenses
      </span>
      If you are applying for a license for a new drug, biological product, or
      innovative medical device, additional approvals such as clinical trials
      or safety testing may be required.
    </Paragraph>

    <Paragraph>
      For further assistance or to ensure proper filing, you can consult a
      regulatory consultant experienced in CDSCO processes.
    </Paragraph>
  </>
);

const ConsultingContent = () => (
  <>
    <SectionHeadingTwo>CDSCO License Consulting Services</SectionHeadingTwo>

    <Paragraph>
      As CDSCO registration certifications, our job is to ensure that the tiring
      procedures listed above become a cakewalk for you. Right from the
      beginning, i.e., from the stage of collection of documents from foreign
      manufacturers or preparation of documents for Indian manufacturers,
      conducting thorough compliance checks, coordinating submissions,
      addressing department queries, and following up with the department for
      the grant of a license, everything is under our scope of work.
    </Paragraph>

    <Paragraph>
      We are one of the most experienced CDSCO certifications in the field of
      medical products, we provide apex quality of services possible to all our
      national and international clients.
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  { id: "eligibility", label: "Eligibility", content: <EligibilityContent /> },
  {
    id: "classification",
    label: "Classification",
    content: <ClassificationContent />,
  },
  { id: "documents", label: "Documents", content: <DocumentsContent /> },
  {
    id: "registration",
    label: "Registration",
    content: <RegistrationContent />,
  },
  { id: "licensing", label: "Licensing", content: <LicensingContent /> },
  { id: "consulting", label: "Consulting", content: <ConsultingContent /> },
];

const faqs = [
  {
    question: "What services do you offer for CDSCO compliance?",
    answer:
      "We offer comprehensive CDSCO regulatory compliance services including product registration, license applications, regulatory strategy, documentation preparation, and post-approval compliance monitoring for pharmaceuticals, medical devices, and cosmetics in India.",
  },
  {
    question: "How long does the CDSCO approval process typically take?",
    answer:
      "CDSCO approval timelines vary based on product category and application type. Typically, drug approvals take 6-12 months, medical device registrations 3-6 months, and cosmetic registrations 2-4 months. Our certifications work to expedite these timelines through proper documentation and regulatory strategy.",
  },
  {
    question: "What documents are required for CDSCO registration?",
    answer:
      "Required documents include product dossiers, manufacturing information, stability data, clinical trial results (if applicable), Good Manufacturing Practice (GMP) certificates, Certificate of Pharmaceutical Product (CoPP), and various application forms specific to your product category. Our team assists in preparing all necessary documentation.",
  },
  {
    question: "Do you assist with clinical trial approvals in India?",
    answer:
      "Yes, we provide end-to-end support for clinical trial applications in India, including protocol development, ethics committee submissions, CDSCO applications, site selection assistance, and regulatory compliance throughout the trial process. We also help navigate the New Drugs and Clinical Trials Rules, 2019.",
  },
  {
    question: "What are the costs associated with CDSCO registrations?",
    answer:
      "CDSCO registration costs include official government fees (which vary by product type), testing fees, consultant fees, and potential inspection costs. We provide transparent quotations based on your specific product and requirements, with options for different service levels to fit various budgets.",
  },
  {
    question: "How do you handle post-approval regulatory requirements?",
    answer:
      "Our post-approval services include pharmacovigilance support, periodic safety update reports, variation applications, renewal submissions, compliance with labeling requirements, adverse event reporting, and ongoing regulatory intelligence to keep you informed of regulatory changes affecting your products.",
  },
  {
    question:
      "Can you help with import licenses for pharmaceuticals and medical devices?",
    answer:
      "Yes, we specialize in obtaining Import Licenses (Form 10) for drugs and Registration Certificates for medical devices. Our services include preparing all necessary documentation, coordinating with Indian authorized agents, liaising with CDSCO, and handling post-approval compliance requirements for imported products.",
  },
  {
    question:
      "What experience does your consulting team have with CDSCO regulations?",
    answer:
      "Our consulting team consists of regulatory experts with 10+ years of experience in Indian pharmaceutical regulations. Team members include former regulatory professionals, pharmacists, and industry specialists who maintain close relationships with regulatory authorities and stay updated on the latest regulatory developments.",
  },
  {
    question:
      "How do recent regulatory changes affect pharmaceutical registrations in India?",
    answer:
      "Recent regulatory changes include the New Drugs and Clinical Trials Rules (2019), Medical Device Rules (2017), and ongoing updates to the Drugs and Cosmetics Act. These changes have streamlined some processes while adding new requirements for safety monitoring and quality control. Our certifications keep abreast of all changes and adjust strategies accordingly.",
  },
  {
    question: "Do you offer support for manufacturing facility inspections?",
    answer:
      "Yes, we provide comprehensive support for CDSCO manufacturing facility inspections, including pre-inspection readiness assessments, gap analysis, preparation of required documentation, mock inspections, training of personnel, and assistance during actual inspections to ensure a successful outcome.",
  },
];

function CDSCORegistrationCertification() {
  return (
    <ServicePageLayout
      breadcrumbLabel="CDSCO Registration Certificate"
      hero={hero}
      sections={sections}
      faqs={faqs}
    />
  );
}

export default CDSCORegistrationCertification;
