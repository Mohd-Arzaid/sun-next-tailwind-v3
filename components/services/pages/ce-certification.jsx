import ServicePageLayout from "@/components/services/shared/service-page-layout";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  Paragraph,
  PointsList,
} from "@/components/services/shared/service-content";

const hero = {
  titleHighlight: "CE Mark",
  titleSuffix: "Certification",
  description:
    "CE Marking certifies product safety, quality, and compliance for goods sold in the European Economic Area (EEA).",
};

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>CE Marking Certification Overview</SectionHeadingTwo>

    <SectionHeadingThree>
      CE marking shows a product meets basic EU safety and quality standards.
    </SectionHeadingThree>

    <Paragraph>
      Getting a certified product or safe product is a right and wish of every
      customer around the world. CE is kind of certification mark on the
      products that are related to health, safety, and environment. It is
      originated in Europe. In Europe, there is a regulating authority called
      the EEA that means the European Economic Area. The EEA authenticates the
      quality of their listed products. Products located within the European
      Economic Area have to mandatorily obtain CE marking certification.
      Importers, as well as the manufacturer of the goods, need to ascertain
      that EC marked goods are up to the standards. Today, in this article we
      will tell you about the basic of CE Marking Certification, How to get CE
      marking Certification, and the kinds of the CE Marking Certification. The
      EEA is bundled with European Countries like Iceland, Liechtenstein, and
      Norway. It is also considered as the EEA single market. CE stands for the
      &quot;Conformite Europeenne.&quot; The literal meaning of the CE is the
      European Conformity but later it changed it to CE mark in 1993. The
      products which are exported to EEA by the other countries can also have
      the CE marking as the EEA standards is a sign of guarantee.
    </Paragraph>
  </>
);

const ServicesContent = () => (
  <>
    <SectionHeadingTwo>
      Services Provided Under CE Mark Certification
    </SectionHeadingTwo>

    <SectionHeadingThree>
      CE marking ensures trusted, globally accepted product standards.
    </SectionHeadingThree>

    <Paragraph>
      The Logo has a substantial value of a standard on which people trusts and
      to make that trust more strong the CE technical experts is matching step
      by step with the changing trends of different products and making it more
      competitive to pass the level. They also act as an advisory to the
      manufacturers. CE is a standard of the international standard because many
      products are sold outside the EEA.
    </Paragraph>
  </>
);

const ClassificationContent = () => (
  <>
    <SectionHeadingTwo>
      CE Marking and ISO Certification Service
    </SectionHeadingTwo>

    <SectionHeadingThree>
      CE and ISO marks boost product trust and quality.
    </SectionHeadingThree>

    <Paragraph>
      The CE Marking is one of the finest and most acknowledged standards that
      is brought forth by EEA and permits the manufacturer to use the mark to
      lighten the standard. Now, ISO Certification is an International non-
      government organization that independently controls or manages the quality
      management system with some standard. The ISO mark silently changes the
      mind of the customer from not trusting a product to trust the product
      after the ISO mark. It also increases the value and trust in the product.
      There is no mandatory or necessary rope attached to the product to get
      this certification but it just makes a product of minimum standard to a
      high standard after theISO mark
    </Paragraph>
  </>
);

const RegistrationContent = () => (
  <>
    <SectionHeadingTwo>CDSCO Device Classification</SectionHeadingTwo>

    <Paragraph>
      The CE Marking is one of the finest and most acknowledged standards that
      is brought forth by EEA and permits the manufacturer to use the mark to
      lighten the standard. Now, ISO Certification is an International non-
      government organization that independently controls or manages the quality
      management system with some standard. The ISO mark silently changes the
      mind of the customer from not trusting a product to trust the product
      after the ISO mark. It also increases the value and trust in the product.
      There is no mandatory or necessary rope attached to the product to get
      this certification but it just makes a product of minimum standard to a
      high standard after theISO mark
    </Paragraph>
  </>
);

const NecessityContent = () => (
  <>
    <SectionHeadingTwo>Why CE Rating is Required?</SectionHeadingTwo>

    <SectionHeadingThree>
      CE certificate proves product energy efficiency and boosts trust.
    </SectionHeadingThree>

    <Paragraph>
      The European Commission lifts the curtain from the harmonized conformity
      with the EU EMC that puts all their attention in checking the quality,
      safety and non- health hazardous substance in the products. The EC made CE
      marking mandatory stamp for the production of electronic and electrical
      equipment that is sold in EEA. This made a particular standard of the
      above equipment safe and ready to use and make the product less harmful to
      the mankind of the users.
    </Paragraph>
  </>
);

const ComplianceContent = () => (
  <>
    <SectionHeadingTwo>Why CE Rating is Required?</SectionHeadingTwo>

    <SectionHeadingThree>
      CE certificate proves product energy efficiency and boosts trust.
    </SectionHeadingThree>

    <SectionHeadingThree as="div">
      Mandatory CE-Labeled Products
    </SectionHeadingThree>

    <PointsList
      points={[
        "Energy Compliance",
        "Efficiency Rating",
        "Power Certification",
        "Star Labeling",
        "Energy Approval",
        "Eco Compliance",
        "Performance Rating",
        "Sustainability Mark",
        "Green Certification",
        "Energy Validation",
      ]}
    />

    <Paragraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
        Validity
      </span>
      Validity of CDSCO online registration is perpetual i.e. no end date and
      requires no renewal.
    </Paragraph>

    <Paragraph>
      <span className="font-semibold text-gray-950 underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3">
        Note
      </span>
      After the registration is completed, a unique file number is generated,
      which has to be mentioned on the product / packaging, in case of
      registration there is no certificate
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  { id: "ce-services", label: "Services", content: <ServicesContent /> },
  {
    id: "classification",
    label: "Classification",
    content: <ClassificationContent />,
  },
  {
    id: "registration",
    label: "Registration",
    content: <RegistrationContent />,
  },
  { id: "necessity", label: "Necessity", content: <NecessityContent /> },
  { id: "compliance", label: "Compliance", content: <ComplianceContent /> },
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

const languages = [
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

function CECertification() {
  return (
    <ServicePageLayout
      breadcrumbLabel="CE Mark Certification"
      hero={hero}
      sections={sections}
      faqs={faqs}
      languages={languages}
    />
  );
}

export default CECertification;
