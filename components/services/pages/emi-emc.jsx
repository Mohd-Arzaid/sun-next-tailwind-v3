import ServicePageLayout from "@/components/services/shared/service-page-layout";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  Paragraph,
} from "@/components/services/shared/service-content";

const hero = {
  titleHighlight: "EMI/EMC",
  titleSuffix: "Certification Guide",
  description:
    "EMI Metrology ensures accurate and standardized weighing and measuring practices as per government regulations, safeguarding public trust and measurement accuracy.",
};

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>What is EMI Metrology?</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      EMI Metrology ensures accurate weighing and measuring as per EMI standards.
    </SectionHeadingThree>

    <Paragraph>
      Means that part Metrology which treats units of weighment and measurement,
      methods of weighing & measuring and weighing and measuring instruments in
      relation to the mandatory technical and EMI requirement which have the
      object of ensuring public guarantee from the point of view of security and
      accuracy of the details mentioned on or measured by the product.
    </Paragraph>
  </>
);

const StandardizationContent = () => (
  <>
    <SectionHeadingTwo>
      Ensuring Standard Weight and Measurement
    </SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Weighing instruments must meet standards and be sealed for accuracy.
    </SectionHeadingThree>

    <Paragraph>
      Every instrument that weighs & measures must be manufactured as per the
      specification and model laid down by the Government of India. Weight &
      measures used by the traders are verified & stamped by the Inspector of
      the EMI Metrology Department, after due verification, with a seal for
      ensuring the integrity of the stamp of Inspector and quarter in which it
      is verified.
    </Paragraph>
  </>
);

const AuthorityContent = () => (
  <>
    <SectionHeadingTwo>
      Authority Responsible for Granting License
    </SectionHeadingTwo>

    <SectionHeadingThree as="p">
      The Controller of EMI Metrology grants licenses after inspection by the
      Inspector.
    </SectionHeadingThree>

    <Paragraph>
      Controller of EMI Metrology Department is the competent authority to grant
      the license. Application for license should be submitted to the Inspector
      of EMI metrology who will inspect the firm and forward the same to
      Controller of EMI Metrology with recommendation for consideration for
      grant of license.
    </Paragraph>
  </>
);

const RegistrationContent = () => (
  <>
    <SectionHeadingTwo>
      Authority for Weights & Measures Registration
    </SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Register with EMI Metrology for import/export.
    </SectionHeadingThree>

    <Paragraph>
      Any person who intends to import/export any weight & measure needs to
      register himself with Department of EMI Metrology, Government of India as
      importer, packer or manufacturer. If You are Looking for top EMI Metrology
      certifications in India then Sun Certifications India is your ultimate
      destination to resolve all your queries pertaining to EMI metrology
      compliances. We are a team of dedicated professionals offering premium EMI
      Metrology consultancy services in India. As a team we are well-versed with
      the procedures laid down by the Government and help your business through
      the entire registration process and knowledge support wherever required.
      We assure you of complete satisfaction for EMI Metrology Consultancy in
      India because of the reason that we have extensive experience of working
      with EMI Metrology Department of Consumer Affairs and EMI Metrology Food &
      Supplies Department.
    </Paragraph>
  </>
);

const VerificationContent = () => (
  <>
    <SectionHeadingTwo>Certificate Display Requirement</SectionHeadingTwo>

    <SectionHeadingThree as="p">
      Display the verification certificate at the usage site.
    </SectionHeadingThree>

    <Paragraph>
      It is necessary to display every certificate of verification granted under
      the Act at a conspicuous place in the premises where such weights or
      measures are being, or intended or likely to be used in any transaction or
      for protection.
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  {
    id: "standardization",
    label: "Standardization",
    content: <StandardizationContent />,
  },
  { id: "authority", label: "Authority", content: <AuthorityContent /> },
  {
    id: "registration",
    label: "Registration",
    content: <RegistrationContent />,
  },
  {
    id: "verification",
    label: "Verification",
    content: <VerificationContent />,
  },
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

function EMIEMC() {
  return (
    <ServicePageLayout
      breadcrumbLabel="EMI/EMC Certification Guide"
      hero={hero}
      sections={sections}
      faqs={faqs}
    />
  );
}

export default EMIEMC;
