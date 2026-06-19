import Link from "next/link";

import ServicePageLayout from "@/components/services/shared/service-page-layout";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  Paragraph,
  PointsList,
  ServiceImage,
  ServiceTable,
} from "@/components/services/shared/service-content";

const hero = {
  titleHighlight: "BIS CRS",
  titleSuffix: "Registration",
  description:
    "Mandatory for electronic products to ensure safety & quality. Get BIS approval with expert assistance!",
};

const InfoCallout = ({ children }) => (
  <div className="mt-5 mb-6 rounded-md bg-[#EAF3FF] px-4 py-3 border-l-4 border-[#1A8781]">
    <p className="font-geist text-sm md:text-base text-[#1f2937]">{children}</p>
  </div>
);

const intro = (
  <div className="flex flex-col gap-2">
    <div className="flex justify-center mt-[20px] md:mt-[26px]">
      <ServiceImage
        src="/images/crs-registration/crs-registration.webp"
        alt="CRS Registration"
        title="CRS Registration"
        className="max-w-full h-auto rounded-lg shadow-md"
      />
    </div>

    <SectionHeadingTwo>What is BIS Registration?</SectionHeadingTwo>

    <Paragraph>
      BIS Registration is a quality certification granted by the Bureau of
      Indian Standards (BIS), the national standards body of India. It serves
      as an assurance that a product complies with the applicable Indian
      Standards relating to quality, safety, and performance before it is
      introduced into the Indian market.
    </Paragraph>

    <Paragraph>
      The Bureau of Indian Standards (BIS) is the national standardization
      body in India and works under the Ministry of Consumer Affairs, Food and
      Public Distribution Government of India. BIS is responsible for maintaining
      the quality, safety, and performance benchmarks for various products and
      services in India as per the relevant Indian Standards (IS).
    </Paragraph>

    <Paragraph>
      BIS is responsible for supervising and implementing various schemes in
      India. The Compulsory Registration Scheme (CRS) is a very prominent and
      mandatory certification scheme of BIS covering various categories of
      electronic and IT products.
    </Paragraph>

    <Paragraph>
      The performance and safety of Indian products is an important issue for
      India. BIS CRS Certification guarantees that electronics and IT products
      are compliant with Indian standards, and helps safeguard consumers against
      non-compliant and substandard products.
    </Paragraph>
  </div>
);

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>
      What is a Compulsory Registration Scheme (CRS)?
    </SectionHeadingTwo>

    <Paragraph>
      The Compulsory Registration Scheme (CRS) is a BIS product registration
      scheme that was launched in 2012 and was primarily focused on electronic
      products. Over the years, as more products have been released CRS has been
      expanded to include a wider range of product categories, which include
      electrical products such as appliances, solar equipment, batteries and more.
      CRS registration is mandatory for products specified under Quality Control
      Orders (QCOs) issued by different ministries.
    </Paragraph>

    <Paragraph>
      Any product that falls under the mandatory CRS scheme has to be sold,
      imported, or distributed in India only after obtaining registration with
      BIS.
    </Paragraph>

    <SectionHeadingThree>History of CRS Certification in India</SectionHeadingThree>

    <Paragraph>
      In 2012, the first QCO under the CRS scheme was released and focused on
      electronic and IT equipment. Since then, additional QCOs have been issued
      in the following sectors:
    </Paragraph>

    <PointsList
      points={[
        "Consumer Electronics",
        "Lightings & LEDs",
        "Batteries & Cells",
        "Wireless Communication Devices",
        "Solar Panels and Components",
        "Electrical Appliances for Households",
      ]}
    />

    <Paragraph>
      The list for CRS Certification is rapidly expanding, so it is very
      important for manufacturers to be proactive and aware of recent updates.
    </Paragraph>

    <SectionHeadingThree>
      CRS Registration vs ISI Mark: What&apos;s the Difference?
    </SectionHeadingThree>

    <ServiceTable
      emphasizeAllColumns
      headers={["Feature", "CRS Registration", "ISI Mark"]}
      rows={[
        [
          "Nature",
          "Compulsory (only for QCO-listed products)",
          "Voluntary or Compulsory (based on product)",
        ],
        [
          "Product Scope",
          "Electronics, IT, Electrical, Batteries, etc.",
          "Food, cement, steel, electricals, etc.",
        ],
        [
          "Application",
          "Online, BIS CRS portal",
          "Manual + Online, BIS ISI system",
        ],
        [
          "Flexibility",
          "Only for QCO-covered goods",
          "Can be voluntary for non-QCO goods",
        ],
        [
          "Labelling",
          "Requires BIS CRS logo and registration number",
          "Requires ISI logo with standard code",
        ],
      ]}
    />

    <SectionHeadingThree>
      Why You Need to Know the BIS CRS Framework
    </SectionHeadingThree>

    <Paragraph>
      If you are a producer in India, or a foreign company trying to enter the
      Indian market, knowing the BIS CRS steps is a must. It helps you to:
    </Paragraph>

    <PointsList
      points={[
        "Avoid penalties for non-compliance.",
        "Prepare production schedules (considering lab testing time).",
        "Facilitate easier customs processing.",
        "Earn the Indian customer's long-term brand trust.",
      ]}
    />

    <InfoCallout>
      Get complete details about -{" "}
      <Link
        href="/what-is-bis-certificate-indian-bis"
        className="font-geist font-medium text-blue-900 decoration-blue-900 transition-colors"
      >
        BIS Certification Schemes in India
      </Link>
    </InfoCallout>
  </>
);

const EligibilityContent = () => (
  <>
    <SectionHeadingTwo>
      Eligibility Criteria for BIS CRS Registration
    </SectionHeadingTwo>

    <SectionHeadingThree>
      Who Can Apply for BIS Registration Under CRS?
    </SectionHeadingThree>

    <Paragraph>
      In India, a BIS Licence under the Compulsory Registration Scheme (CRS) can
      only be granted to manufacturers who meet the requirements set out by the
      Bureau of Indian Standards. This is to ensure only authentic manufacturers
      gain the privilege of being able to Register as well as affix the BIS CRS
      logo on their products.
    </Paragraph>

    <SectionHeadingThree as="div">
      Eligibility Criteria Checklist
    </SectionHeadingThree>

    <ServiceTable
      headers={["Requirement", "Description"]}
      rows={[
        [
          "Applicant must be a Manufacturer",
          "Only the original manufacturer (not trader or reseller) of the product is eligible to apply.",
        ],
        [
          "Location Can Be Indian or Foreign",
          "Both Indian manufacturers and international brands can apply.",
        ],
        [
          "AIR (Authorized Indian Representative)",
          "Foreign manufacturers must appoint an AIR — either their Indian branch or a formally authorized third party.",
        ],
        [
          "Test Reports from BIS-Approved Labs",
          "The product must be tested at a BIS-recognized lab and meet the Indian Standard (IS) applicable.",
        ],
        [
          "Proper Documentation",
          "All required documents must be submitted in prescribed formats (details in next section).",
        ],
        [
          "One Registration Per Brand & Location",
          "A separate application must be filed for each product type, manufacturing location, and brand name.",
        ],
      ]}
    />

    <SectionHeadingThree>
      Who is an Authorized Indian Representative (AIR)?
    </SectionHeadingThree>

    <Paragraph>
      For foreign manufacturers, one of the obligations is to appoint an
      Authorized Indian Representative (AIR) for communication and
      representation in India.
    </Paragraph>

    <SectionHeadingThree as="div">
      Responsibilities of the AIR:
    </SectionHeadingThree>

    <PointsList
      points={[
        "Acts as the legal representative for the foreign applicant",
        "Communicates and manages all obligations with BIS on behalf of the manufacturer",
        "Legally liable for all compliance and documentation",
        "Cannot be an agent or distributor unless clearly authorized by the manufacturer",
      ]}
    />

    <Paragraph>
      As part of the agreement, the AIR must submit a signed agreement from both
      sides along with a proof of Indian address.
    </Paragraph>

    <SectionHeadingThree as="div">Real life Scenario:</SectionHeadingThree>

    <Paragraph>
      Company ABC is planning to introduce a new model of a power bank in India.
    </Paragraph>

    <PointsList
      points={[
        "Company ABC is the manufacturer.",
        "They have the product tested in one of the BIS accredited labs in India.",
        "Their branch office in Delhi serves as the registered AIR.",
        "They upload the application to the BIS portal along with the required documentation.",
      ]}
    />

    <Paragraph>
      The outcome is a BIS certificate is issued under CRS.
    </Paragraph>
  </>
);

const DocumentsContent = () => (
  <>
    <SectionHeadingTwo>
      Documents Required for BIS CRS Registration
    </SectionHeadingTwo>

    <SectionHeadingThree as="div">
      List of documents required to obtain BIS registration under CRS scheme.
    </SectionHeadingThree>

    <Paragraph>
      Filling out the BIS CRS application for registration is entirely digital,
      however, it still requires fully completed documents to obtain approval.
      Every minute mistake and a failure to adhere to any aspect, such as the
      document type, improper formats, or wrong file types can cause the
      application to get rejected or delayed.
    </Paragraph>

    <Paragraph>
      For proper and faster processing of the BIS documents, it is necessary to
      have the proper documents with you each step of the way. Having the proper
      documents ready ensures that your bis certificate gets processed on time
      and stays legally clear from any compliance audits, customs inspections, or
      marketplace approvals.
    </Paragraph>

    <SectionHeadingThree as="div">
      Documents Checklist for BIS CRS Registration
    </SectionHeadingThree>

    <ServiceTable
      headers={["Document", "Who Submits?", "Notes"]}
      rows={[
        [
          "Manufacturer's Address Proof",
          "Manufacturer",
          "Factory lease, utility bill, or license",
        ],
        [
          "Test Report from BIS-Approved Lab",
          "Manufacturer/Lab",
          "Must be recent (within 90 days) and reference IS code",
        ],
        [
          "Undertakings (as per BIS Format)",
          "Applicant",
          "Includes liability, compliance, and product responsibility",
        ],
        [
          "Trademark Certificate",
          "Manufacturer",
          "Required if brand is registered",
        ],
        [
          "AIR Agreement (For foreign applicants)",
          "Foreign Manufacturer & AIR",
          "Signed and notarized",
        ],
        [
          "Affidavit",
          "Manufacturer or AIR",
          "Format downloadable from BIS portal",
        ],
        [
          "Fee Receipt",
          "Applicant",
          "Payment proof of government fee",
        ],
        [
          "Authorization Letter",
          "Manufacturer",
          "Authorizes AIR to act on their behalf",
        ],
        [
          "Company Registration Certificate",
          "Manufacturer",
          "Proof of business registration (GST, ROC, etc.)",
        ],
        [
          "Product Labels/Markings",
          "Manufacturer",
          "Must show BIS logo, IS standard, and registration space",
        ],
      ]}
    />
  </>
);

const RegistrationContent = () => (
  <>
    <SectionHeadingTwo>
      BIS Registration Process Under Compulsory Registration Scheme (CRS)
    </SectionHeadingTwo>

    <Paragraph>
      BIS CRS Registration is a totally online process through the BIS
      Registration Portal. It does not solely procedures that include the
      uploading of documents. It also requires special attention of a technical
      nature, the understanding of the regulations, as well as total compliance
      with the Indian Standard (IS).
    </Paragraph>

    <Paragraph>
      Here is the step-by-step BIS registration process under Compulsory
      Registration Scheme (CRS) given below:
    </Paragraph>

    <SectionHeadingThree as="div">
      Step 1: Product Testing at BIS Authorized Lab
    </SectionHeadingThree>

    <PointsList
      points={[
        "Select a lab from the BIS approved list",
        "Submit a sample of the product for which the testing is to be performed for relevant IS",
        "Obtain the test report for the sample as per BIS test report format",
      ]}
    />

    <SectionHeadingThree as="div">Step 2: Document Preparation</SectionHeadingThree>

    <PointsList
      points={[
        "Collect the requisite documents, as already outlined",
        "Make sure the documents are properly named, formatted, signed and dated",
        "Develop a product label which is a mock sticker that contains a space for a BIS logo and space for IS standard",
      ]}
    />

    <SectionHeadingThree as="div">
      Step 3: Filling the Online Application
    </SectionHeadingThree>

    <PointsList
      points={[
        "Go to the BIS CRS Portal (https://www.bis.org.in/) and login or register",
        "Complete the product, model number, brand, and manufacturing unit of the AIR, if necessary",
        "Follow the steps for the payment of the Government fee",
      ]}
    />

    <SectionHeadingThree as="div">
      Step 4: BIS&apos;s Review of the Application
    </SectionHeadingThree>

    <PointsList
      points={[
        "BIS checks the supporting documents and lab reports",
        "If needed, a clarification is raised through the portal",
        "Respond with the right documents or logical explanations",
      ]}
    />

    <Paragraph>
      If it is a clarification query, it must be answered within 30 days, or the
      application goes to archive files, which means rejected.
    </Paragraph>

    <SectionHeadingThree as="div">Step 5: Grant of BIS Registration</SectionHeadingThree>

    <PointsList
      points={[
        "BIS Certificate will be issued if BIS officials are satisfied with the results of the assessments they conducted",
      ]}
    />

    <Paragraph>Your certificate will include:</Paragraph>

    <PointsList
      points={[
        "BIS registration number",
        "Brand name",
        "Model of the product",
        "IS Standard Code",
      ]}
    />

    <PointsList
      points={[
        "Your product label must contain or have e-labelling of the certificate's details.",
      ]}
    />

    <SectionHeadingThree as="div">Step 6: Labeling and Distribution</SectionHeadingThree>

    <PointsList
      points={[
        "BIS certified products must carry:",
        "BIS CRS logo",
        "IS code that relates to the product",
        "BIS registration number",
        "The registration number and BIS logo must be printed or digitally embedded according to the BIS regulations.",
      ]}
    />

    <SectionHeadingThree>
      Approximate Timeline for CRS Registration
    </SectionHeadingThree>

    <ServiceTable
      headers={["Activity", "Estimated Time"]}
      rows={[
        ["Product Testing", "7-10 working days"],
        ["Document Collection", "2-3 days"],
        ["Application Submission", "1 day"],
        ["BIS Review + Query Resolution", "10-15 working days"],
        ["Final Certificate Issue", "2-4 working days"],
        ["TOTAL", "~4 weeks"],
      ]}
    />
  </>
);

const FeesContent = () => (
  <>
    <SectionHeadingTwo>
      BIS CRS Registration Fees, Validity & Renewal Guidelines
    </SectionHeadingTwo>

    <Paragraph>
      Getting a BIS certificate under the CRS, the applicant is required to pay
      the government charges as well as the payment for the product to be tested.
      Even though the process is online and the interface is streamlined, many
      applicants face delays on their requests and rejections due to underpayment
      and applications misfiled.
    </Paragraph>

    <SectionHeadingThree>
      Fee Structure for BIS Registration (Compulsory Registration Scheme)
    </SectionHeadingThree>

    <ServiceTable
      headers={["Fee Type", "Amount"]}
      rows={[
        ["Government Fee", "₹53,000 + 18% GST per test report"],
        [
          "Testing Charges",
          "₹10,000 – ₹20,000 + 18% GST (varies by product/lab)",
        ],
        ["Additional Report in Same App", "₹20,000 + 18% GST per report"],
        ["Renewal Fee", "₹53,000 + 18% GST"],
      ]}
    />

    <Paragraph className="italic text-center">
      <em>
        Prices subject to update — confirm on the BIS portal or with your
        consultant.
      </em>
    </Paragraph>

    <SectionHeadingThree>CRS Certificate Validity & Renewal</SectionHeadingThree>

    <ServiceTable
      headers={["Parameter", "Details"]}
      rows={[
        ["Initial Validity", "2 Years"],
        ["Renewal Duration", "Upto 5 Years (if no product changes)"],
        ["Renewal Process", "Online, based on new affidavit + renewal fee"],
        [
          "Re-testing Required?",
          "Not unless product specs/IS standard changes",
        ],
      ]}
    />
  </>
);

const ElabellingContent = () => (
  <>
    <SectionHeadingTwo>
      E-Labelling Guidelines for CRS Certified Products
    </SectionHeadingTwo>

    <SectionHeadingThree>What is E-Labelling?</SectionHeadingThree>

    <Paragraph>
      E-labelling is the practice of showing regulatory information within a
      device electronically instead of printing and affixing it to the device.
      Under the Compulsory Registration Scheme (CRS) of BIS, specified products,
      especially compact or digital devices, are able to display the BIS
      certificate details, standard mark and IS code through the software
      interface or digital packaging.
    </Paragraph>

    <SectionHeadingThree>Requirements for E-Labelling:</SectionHeadingThree>

    <ServiceTable
      headers={["Rule", "Description"]}
      rows={[
        [
          "Physical Label on Packaging",
          "Product box or external packaging must display the BIS CRS logo and registration details.",
        ],
        [
          "Removable Labels for Bulk Packaging",
          "If products are shipped in bulk, a removable adhesive label on the outer package is acceptable.",
        ],
        [
          "No Tools Needed for Access",
          "Users must be able to access the e-label info without needing tools or accessories (e.g., SIM card removal not allowed).",
        ],
        [
          "Secure Programming",
          "E-label info must be embedded in firmware/software, locked from modification by any third party.",
        ],
        [
          "Menu-Based Access",
          "Users must access the info in no more than 4 steps through the device's menu interface.",
        ],
        [
          "Instructions Required",
          "Instructions on how to access e-label details must be provided.",
        ],
      ]}
    />

    <Paragraph>
      How Sun Certifications India Can Help You with BIS Registration under CRS
      Scheme
    </Paragraph>

    <SectionHeadingThree>Why Choose Sun Certifications India?</SectionHeadingThree>

    <Paragraph>
      The entire BIS CRS registration is very technical and exhaustive with
      regard to rules and the volume of documentation. In the absence of a
      thorough understanding of the Indian Standards, recent QCOs, the
      structure of the test report, and the workflows in the portal interface,
      applicants stand to lose substantially in terms of the subsequent actions
      of delays, rejection, or long-standing active non-compliance. This is
      where Sun Certifications India comes in with a reputable and reliable
      associate to assist the applicant in every detail of the compulsory
      certification scheme.
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  { id: "eligibility", label: "Eligibility", content: <EligibilityContent /> },
  { id: "documents", label: "Documents", content: <DocumentsContent /> },
  {
    id: "registration",
    label: "Registration",
    content: <RegistrationContent />,
  },
  { id: "fees", label: "Registration Fees", content: <FeesContent /> },
  { id: "elabelling", label: "E-Labelling", content: <ElabellingContent /> },
];

const faqs = [
  {
    question: "What is BIS registration?",
    answer:
      "BIS certification is a compliance process governed by the Bureau of Indian Standards, which verifies that a product meets the applicable Indian Standards (IS) for quality, safety, and reliability.",
  },
  {
    question: "What is CRS registration under BIS?",
    answer:
      "CRS stands for Compulsory Registration Scheme. It is a mandatory registration process for specific product categories such as electronics, electricals, batteries, and solar items. Products under CRS must be tested and registered with BIS before they can be sold in India.",
  },
  {
    question: "Is BIS certification mandatory in India?",
    answer:
      "Yes. For all products listed under the CRS product list (currently 80+ items), BIS registration is mandatory for manufacturing, importing, or selling in India.",
  },
  {
    question: "What is the difference between BIS CRS and ISI mark?",
    answer: (
      <>
        BIS CRS: For electronics and IT goods, only for mandatory products
        notified under QCO.
        <br />
        ISI mark: Used for a broader range of products, may be voluntary or
        mandatory depending on the product category.
      </>
    ),
  },
  {
    question: "Who can apply for BIS CRS registration?",
    answer:
      "Only manufacturers can apply. This includes both Indian and foreign manufacturers. Foreign brands must appoint an Authorized Indian Representative (AIR).",
  },
  {
    question: "What is the role of an AIR?",
    answer:
      "An Authorized Indian Representative (AIR) is legally responsible for filing the BIS application on behalf of a foreign manufacturer. They act as the official liaison between BIS and the overseas applicant.",
  },
  {
    question: "How long does BIS CRS registration take?",
    answer:
      "The process typically takes 3–4 weeks, assuming all documents and test reports are submitted correctly and no objections are raised by BIS.",
  },
  {
    question: "How much does BIS CRS certificate cost?",
    answer: (
      <>
        Costs include:
        <br />
        Testing Charges: ₹10,000–₹20,000 + GST
        <br />
        Government Fee: ₹53,000 + GST per test report
        <br />
        Additional Charges: Affidavit, courier, AIR documentation, etc.
        <br />
        Discount applicable for Indian MSME registered manufacturers
      </>
    ),
  },
  {
    question: "What is the validity of BIS CRS certificates?",
    answer:
      "The initial BIS license is valid for 2 years. It can be renewed for up to 5 years if the product and manufacturing details remain unchanged.",
  },
  {
    question: "Can BIS certification be obtained voluntarily?",
    answer:
      "No. Under CRS, you cannot apply voluntarily for products that are not listed under QCOs. Voluntary certification is only applicable for non-CRS products via the ISI scheme.",
  },
  {
    question: "Where can I find the BIS CRS product list?",
    answer: (
      <>
        You can visit the official BIS website{" "}
        <a
          href="https://www.crsbis.in/BIS/publicdashAction.do"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1A8781] underline"
        >
          https://www.crsbis.in/BIS/publicdashAction.do
        </a>{" "}
        and navigate to the &quot;Products under CRS&quot; section to view the
        complete list of covered products.
      </>
    ),
  },
  {
    question: "Can the BIS mark be displayed electronically?",
    answer: (
      <>
        Yes, through e-labelling, but it must meet strict BIS rules: Label info
        must be embedded in firmware
        <br />
        Easy access within 4 steps in device menu
        <br />
        Physical packaging must still carry regulatory info
      </>
    ),
  },
  {
    question:
      "What happens if I don't get BIS registration for a mandatory product?",
    answer: (
      <>
        Severe penalties, including:
        <br />
        Product seizure
        <br />
        Customs rejections
        <br />
        Legal fines
        <br />
        Delisting from e-commerce portals
        <br />
        Permanent ban from Indian market
      </>
    ),
  },
  {
    question: "Can one BIS certificate cover multiple models or brands?",
    answer:
      "No. Each brand, and factory location must be certified separately. Multiple models may be added using additional reports, but only under the same application and brand.",
  },
  {
    question: "How can Sun Certifications India help me?",
    answer: (
      <>
        We offer:
        <br />
        Full documentation support
        <br />
        Lab coordination
        <br />
        BIS portal application handling
        <br />
        Query resolution and BIS follow-ups
        <br />
        Renewal and labeling guidance
        <br />
        Compliance assurance for foreign brands via AIR services
      </>
    ),
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

function CRSRegistration() {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS CRS Registration"
      hero={hero}
      intro={intro}
      sections={sections}
      faqs={faqs}
      languages={languages}
    />
  );
}

export default CRSRegistration;
