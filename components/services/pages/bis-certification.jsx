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
  titleHighlight: "BIS Certification India",
  titleSuffix: "for Importers and Manufacturers",
  description:
    "BIS certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
};

const InfoCallout = ({ children }) => (
  <div className="mt-5 mb-6 rounded-md bg-[#EAF3FF] px-4 py-3 border-l-4 border-[#1A8781]">
    <p className="font-geist text-sm md:text-base text-[#1f2937]">{children}</p>
  </div>
);

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>
      BIS Certification in India | Complete Guide
    </SectionHeadingTwo>

    <div className="flex justify-center mt-[20px] md:mt-[26px]">
      <ServiceImage
        src="/images/bis-certification/indian-bis-certification.webp"
        alt="Indian BIS Certification"
        title="BIS Certificate for Indian manufactures"
        className="max-w-full h-auto rounded-lg shadow-md"
      />
    </div>

    <SectionHeadingThree>What is BIS Certification?</SectionHeadingThree>

    <Paragraph>
      BIS certification refers to the process of obtaining a quality standard
      certificate from the Bureau of Indian Standards (BIS) for manufacturing and
      selling various products in India. BIS offers various certification schemes
      through which the manufacturers can secure a BIS license to use the
      standard quality mark on their products. This standard mark showcases that
      their products comply with the required quality, safety and reliability
      standards as set by BIS.
    </Paragraph>

    <Paragraph>
      BIS certification is voluntary in nature but Bureau of Indian Standards
      made it mandatory for various products critical for consumers health and
      safety. BIS issues Quality Control Orders (QCO) to list the products that
      require a mandatory BIS license for manufacturing or importing in India.
    </Paragraph>

    <Paragraph>
      For many Indian manufacturers and importers securing BIS certification is
      a must. It covers a wide range of products including electrical appliances,
      cement and steel products, package drinking water, electronics like mobile
      phones, LED lights, power banks, precious metal jewelry (through
      hallmarking) and many more. The manufacturers and importers of these
      mandatory products cannot legally sell or distribute goods in India without
      BIS recognition.
    </Paragraph>

    <SectionHeadingThree>Why BIS Certification Matters</SectionHeadingThree>

    <Paragraph>
      Take for instance, a manufacturer from Germany who has invented a unique
      electronic device and is planning to sell it in the fast paced Indian
      Market. The device is unique, and safe and has also gained approvals in
      Europe. However, when the device is brought to the port in India, the
      customs officers hold the device. The question is, &quot;Why?&quot; The
      answer is, the device is supposed to have a BIS certification, which is a
      crucial part to sell electronic products in India.
    </Paragraph>

    <Paragraph>
      Many global and Indian manufacturers deal with the same instances every
      year. For Indian consumers, the BIS mark on a product is not just a logo,
      it is a mark of trust that the product has been tested for quality, safety,
      and reliability. For a business, it is the gateway to one of the largest
      markets in the entire world.
    </Paragraph>

    <Paragraph>
      This article will answer all the queries on BIS certification, its
      necessity, processes, benefits, schemes, costs, and the system and its
      navigation available to both foreign and domestic manufacturers.
    </Paragraph>

    <SectionHeadingThree>A Brief History of BIS in India</SectionHeadingThree>

    <Paragraph>
      The Bureau of Indian Standards (BIS) was formed in 1986 taking over the
      Indian Standards Institution (ISI) which was formed in 1947. BIS is now
      considered to be a quality guardian for standards in India and has aligned
      their practices to international levels and made the necessary amendments
      for the Indian conditions.
    </Paragraph>

    <SectionHeadingThree as="div">Remarkable Milestones</SectionHeadingThree>

    <PointsList
      points={[
        "In 1947 the ISI was founded to support quality control systems after the country gained independence.",
        "In 1955 the ISI mark was awarded, becoming one of the most famous quality symbols in India.",
        "In 1986, the BIS Act was passed, replacing ISI with the Bureau of Indian Standards.",
        "In 2016 and 2018, further amendments enriched the BIS's responsibilities, making hallmarking and product certification more thorough.",
      ]}
    />

    <Paragraph>
      Currently, BIS guarantees the safety, reliability, and standardization of
      thousands of tools and machinery for Indian users across multiple
      industries.
    </Paragraph>

    <SectionHeadingThree>
      Why is BIS Certification mandatory in India?
    </SectionHeadingThree>

    <Paragraph>
      The Indian market is enormous, ever-changing, and sensitive to price
      shifts. However, this openness also leaves the market exposed to cheap and
      unsafe goods. In this context, BIS certification acts as a protective
      barrier.
    </Paragraph>

    <PointsList
      points={[
        "Consumer Safety - protects people from potential accidents, health issues, and deceit.",
        "Market Regulation - ensures that non-conforming products do not enter the Indian market.",
        "Trust and Confidence - bolsters consumer belief in local and international products.",
        "Global Alignment - assists foreign companies in aligning with India's regulatory structure.",
        "Fair Competition - every market participant, irrespective of size, is assured of competing purely on quality.",
      ]}
    />

    <Paragraph>
      BIS certification for packaged drinking water is an example of where lacking
      certification could pose health issues. Other equally lacking standards of
      product certification for heaters, toasters, and other electric appliances
      can lead to fires. Therefore, by having a BIS certification, the government
      makes sure these challenges are addressed.
    </Paragraph>
  </>
);

const SchemesContent = () => (
  <>
    <SectionHeadingTwo>BIS Certification Schemes</SectionHeadingTwo>

    <Paragraph>
      BIS has numerous certification schemes designed for varied industries and
      product types. Each is designed to address the particular needs of the
      industry and the product.
    </Paragraph>

    <PointsList
      points={[
        "FMCS – Foreign Manufacturers Certification Scheme",
        "ISI Mark Scheme (Domestic Manufacturers)",
        "Scheme X under Indian BIS",
        "CRS – Compulsory Registration Scheme",
        "Hallmarking Scheme (Jewellery & Precious Metals)",
        "Eco Mark Certification",
        "Management Systems Certification Scheme (MSCS)",
        "LRS (Lab Recognition Scheme)",
      ]}
    />

    <SectionHeadingThree>ISI Mark Scheme (Domestic Manufacturers)</SectionHeadingThree>

    <Paragraph>
      For Indian manufacturers, getting a BIS licence is a prerequisite for
      ensuring legal sales of their products within the country. This
      certification is issued by the Bureau of Indian Standards (BIS) to certify
      satisfaction of Indian Standards pertaining to quality, safety and
      performance benchmarks for the products. This includes factory audits,
      product testing and compliance checks with the BIS parameters. Once the
      product is passed, the manufacturers are allowed to put the ISI mark on
      the product. This mark is a trade mark for the manufacturer and helps the
      customer identify a genuine, ISI certified product.
    </Paragraph>

    <Paragraph>
      Regardless of whether it is for electronics, steel, cement, plastic, or
      construction materials, obtaining a BIS certificate is essential for
      gaining market access. Unlike gaining consumer confidence, a BIS certificate
      enhances the reputation of Indian manufacturers, enables them to participate
      in government contracts, and opens up a host of other business
      opportunities. Most importantly, the absence of BIS certification can have
      damaging repercussions, ranging from legal fines and product recall to a
      complete ban of sale in India. Therefore, BIS compliance is more than a
      legal requirement, it is a targeted strategy for expanding and maintaining
      consumer confidence.
    </Paragraph>

    <Paragraph>
      For Indian manufacturers, the ISI mark scheme is the most prestigious
      mark. Under the scheme, Indian manufacturers are required to have their
      products tested at BIS recognized testing facilities. Manufacturing sites
      are subject to inspection and testing. Compliant products are granted
      approval to use the ISI mark. It is an offence to supply products like
      cement, LPG cylinders, electrical cables, packaged drinking water and
      more, without the ISI mark.
    </Paragraph>

    <InfoCallout>
      Get complete details about BIS certification for Indian manufacturers,
      <br />
      Click:{" "}
      <Link
        href="/a-guide-to-bis-certification-indian-bis"
        className="font-geist font-semibold underline text-[#125E5A] hover:text-[#1A8781] transition-colors"
      >
        ISI Mark Certification Scheme
      </Link>
      <br />
    </InfoCallout>

    <SectionHeadingThree>
      FMCS – Foreign Manufacturers Certification Scheme
    </SectionHeadingThree>

    <Paragraph>
      The Foreign Manufacturers Certification Scheme (FMCS) is a scheme
      developed by the Bureau of Indian Standards for foreign companies wishing
      to enter the Indian Market. This scheme guarantees the safety, quality,
      and performance assurance of the products manufactured abroad complying
      with the required Indian standards. As per FMCS, foreign companies wishing
      to sell products in India must first acquire a Bureau of Indian Standards
      certificate or a license. Like Indian manufacturers, foreign manufacturers
      are also required to secure a BIS license to use ISI mark on their product.
      The desirable ISI mark is given after extensive evaluation that includes
      factory and rigorous product sample testing against the Indian Standards.
    </Paragraph>

    <Paragraph>
      A foreign manufacturer is required to appoint an Authorized Indian
      Representative (AIR), who is responsible for communication and
      coordination, as the first point of contact with the Bureau of Indian
      Standards (BIS) for the scheme. It includes the filing of an application,
      in depth compliance evaluation, and the assumption of all necessary
      obligations to achieve compliance within the deadlines. As a result of
      following the FMCS guidelines, foreign companies are able to enter the
      Indian market, as well as acquire goodwill with the customers. Any product
      with an ISI mark shows a high level of quality, safety, and reliability
      assurance in India.
    </Paragraph>

    <Paragraph>
      No foreign products which fall under the regulated categories are allowed
      to enter India without the FMCS certification.
    </Paragraph>

    <InfoCallout>
      Get complete details about BIS certification for foreign manufacturers,
      <br />
      Click:{" "}
      <Link
        href="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
        className="font-geist font-semibold underline text-[#125E5A] hover:text-[#1A8781] transition-colors"
      >
        FMCS – Foreign Manufacturers Certification Scheme
      </Link>
      <br />
    </InfoCallout>

    <SectionHeadingThree>Scheme X (Omnibus Technical Regulation)</SectionHeadingThree>

    <Paragraph>
      Schome X, or the Omnibus Technical Regulation, is another BIS
      certification Scheme designed by the Bureau of Indian Standards to help
      simplify the compliance procedures of industries in mechanical and
      electrical domains. Unlike the other certification schemes, Scheme X
      focuses on reducing documentation, assessments, and approvals while
      ensuring that products adhere to the Indian Standards. The products with
      the standard mark are of exceptional quality and safety and can be sold
      after undergoing type testing, factory inspections, and simple
      certification of mandatory requirements.
    </Paragraph>

    <Paragraph>
      The scheme X covers heavy machinery and electrical equipment safety
      guidelines for products such as pumps, cranes, transformers, machine tools
      and other heavy engineering products. These are the most pertinent
      industries and all where reliability and safety is a necessity. Scheme X
      is convenient as it shortens the time and costs of the complex BIS
      certification. It aims to streamline the compliance process in order to
      facilitate quicker clearance for marketing and enhanced reputation without
      compromising the quality and safety standards. The enduring and traditional
      reputation of the Bureau of Indian Standards enables easier international
      trade, indispensable for companies to meet compliance requirements and
      boost competitiveness.
    </Paragraph>

    <Paragraph>
      BIS Scheme X is mandatory to access the Indian heavy machine industry.
      This new scheme is important for improved market competition, innovation
      and compliance to regulations which are streamlined through this
      simplified yet robust structure.
    </Paragraph>

    <InfoCallout>
      Get complete details about BIS Scheme X Certification,
      <br />
      Click:{" "}
      <Link
        href="/indian-bis-certification-under-scheme-x"
        className="font-geist font-semibold underline text-[#125E5A] hover:text-[#1A8781] transition-colors"
      >
        Scheme X (Omnibus Technical Regulation)
      </Link>
      <br />
    </InfoCallout>

    <SectionHeadingThree>Compulsory Registration Scheme (CRS)</SectionHeadingThree>

    <Paragraph>
      The Bureau of Indian Standards (BIS) has developed a BIS certification
      program called the Compulsory Registration Scheme (CRS) aimed at regulating
      IT and electronic products in India. It focuses on assessing the safety and
      quality of high-risk products like LED lights, mobile phones, laptops,
      power banks, and other consumer electronics against Indian Standards. CRS,
      in contrast to the ISI scheme, does not issue an ISI mark, but certified
      products, in compliance with the scheme, bear a CRS mark with a unique
      registration number. All electronics and IT products need to be tested in
      the BIS-recognized laboratories and formally registered with BIS CRS, used
      to ensure compliance before they can be sold or imported into India.
    </Paragraph>

    <Paragraph>
      This scheme is essential for protecting Indian consumers from unsafe,
      substandard, or counterfeit electronics, particularly in the case of the
      rapidly growing digital market. Both Indian and foreign manufacturers need
      to acquire CRS certification. The foreign companies must appoint an
      Authorized Indian Representative AIR to ensure compliance. The BIS
      continually updates the list of products covered under the CRS to include
      new products and technologies and emerging safety issues. For
      manufacturers, obtaining BIS registration under CRS is an added advantage
      since it helps in regulatory compliance and it also increases
      customer&apos;s trust, company&apos;s reputation, and market access in the
      electronics industry in India.
    </Paragraph>

    <InfoCallout>
      Get complete details about BIS CRS Certification,
      <br />
      Click:{" "}
      <Link
        href="/what-is-crs-bis-or-crs-registration"
        className="font-geist font-semibold underline text-[#125E5A] hover:text-[#1A8781] transition-colors"
      >
        Compulsory Registration Scheme (CRS)
      </Link>
      <br />
    </InfoCallout>

    <SectionHeadingThree>Hallmarking Scheme</SectionHeadingThree>

    <Paragraph>
      In India, hallmarking of gold and silver jewellery is compulsory under the
      Hallmarking Scheme and regulated by the Bureau of Indian Standards (BIS)
      which guarantees the purity and genuineness of the jewellery. Precious
      Metal articles are tested at BIS approved Assaying and Hallmarking Centres
      (AHC) and are then stamped with hallmark signs. This process is only
      completed if the articles fulfill the Indian Standards laid out at the
      start. Jewelers must first acquire a BIS license which allows them to sell
      hallmarked jewellery. This is the only way to do so legally. The jeweler
      is obliged to undergo and complete product testing, BIS audits, and
      continuous compliance monitoring to sell hallmarked jewellery. The
      process, in the end, protects the consumer and ensures the purity, weight
      and quality and limits malpractice as well as fraud in the jewellery
      market.
    </Paragraph>

    <Paragraph>
      For Indian consumers, gold and silver are not just ornaments but also
      major investments, which makes trust and transparency essential. The
      hallmarking jewelry is a mark of assurance for the common citizen in the
      country that every piece of jewelry for sale has gone through extensive
      testing against various national benchmarks and fair trading practices.
      Jewelers can showcase their credibility and market reputation by
      hallmarking jewelry. The inability to comply with the rules set brings
      punishment which can include suspension of license. For hallmarking under
      BIS, it serves as a fulfillment of principle-based and legal obligations.
      This not only increases consumer satisfaction but also enhances the Indian
      jewellery market as a whole. This is also the case for smaller retailers as
      well as larger scale manufacturers.
    </Paragraph>

    <SectionHeadingThree>Eco Mark Certification</SectionHeadingThree>

    <Paragraph>
      The Eco Mark is an innovation-centered recognition scheme created by the
      Bureau of Indian Standards (BIS) aimed at the promotion of eco-friendly
      goods. Unlike the traditional certification which concerns itself
      prominently with safety and quality parameters, the Eco Mark is awarded
      to goods which conform to Indian Standards and which show at least some
      reduced level of the adverse environmental impact during any one or more
      of the various stages of the life cycle of the goods. Eco Mark certification
      is awarded only after considerable testing and the proving of criteria -
      compliance which includes emission levels, non-toxicity, the rate of
      biodegrade, capacity to recycle and overall interactions with the system.
      Eco Mark, just like the ISI mark, is an emblem of assurance from the
      government which has been granted the status of a certification mark,
      albeit with more pronounced goals of environmental sustainability.
    </Paragraph>

    <Paragraph>
      The BIS licence with Eco Mark certifies that a company engages in
      responsible manufacturing and cares about the environment. It ensures
      compliance with the law and creates a competitive advantage with
      protective consumers and sustainability-oriented businesses. Eco Mark
      helps for the industry to trust and adopt green practices and for the
      consumers to trust that the products they buy are safe and environmentally
      responsible. Eco Mark supports India&apos;s vision for enhanced quality
      protection with environmental protection under BIS.
    </Paragraph>

    <SectionHeadingThree>
      Management Systems Certification Scheme (MSCS)
    </SectionHeadingThree>

    <Paragraph>
      The Management Systems Certification Scheme (MSCS) initiated by the Bureau
      of Indian Standards (BIS) is a stepwise procedure which evaluates and
      recognizes concerned firms for the implementation of internationally
      accepted and recognized management systems. MSCS framework consists of ISO
      Standards like ISO 9001 Quality Management, ISO 14001 Environment
      Management, ISO 45001 Occupational Health and Safety Management System and
      others. MSCS certifies the firm for the legal operations, consistency,
      and continuous improvement of the operations. Certified firms go through
      numerous assessments and audits which helps them build trust among the
      customers, regulators, and stakeholders which strengthens the guarantee of
      safety, quality, and sustainability.
    </Paragraph>

    <Paragraph>
      BIS is the national standards body of India and is the certifying body for
      the enhancement of the organization&apos;s reputation and credibility
      domestically and outside India. MSCS besides fostering accountability
      through periodic supervision and recertification also frees up a business
      to actively support public led programs like Make in India and Atmanirbhar
      Bharat. Besides legal obligation, the scheme also helps in cultivating a
      culture of integrity, efficiency and fair trading. MSCS encourages the
      trade and investment by the certified companies and BIS plays a crucial
      part in the development of the quality ecosystem of the country.
    </Paragraph>

    <SectionHeadingThree>LRS – Lab Recognition Scheme</SectionHeadingThree>

    <Paragraph>
      Under the Bureau of Indian Standards (BIS), the Lab Recognition Scheme
      (LRS) is an integral part of a system that guarantees the dependability
      and overall competency of laboratories that test and certify products for
      BIS approval. Such labs are critically appraised on diverse attributes
      which include technical knowledge, quality of the workforce, infrastructure,
      and the overall competency and satisfaction of the lab with the ISO/ IEC
      17025 standard. These labs, once approved, are permitted to perform testing
      on the product for which conformity assessment is done as part of various
      BIS certification programs such as the ISI Mark Scheme and the Compulsory
      Registration Scheme (CRS). It is clear that for manufacturers, in
      particular for importers and exporters, the reports obtained from an LRS
      approved lab are a critical requirement to achieve a BIS certificate that
      is a legal requirement for certain products.
    </Paragraph>

    <Paragraph>
      The LRS is empowering India&apos;s assurance systems by maintaining equity
      in testing outcomes and ensuring that all outcomes are consistent and
      globally benchmarked, while accrediting only reliable and sound
      laboratories. To uphold integrity and transparency, BIS performs regular
      audits, proficiency tests, and surveillance of recognized schematic labs.
      Recognition of this certification enables BIS to improve trust from
      consumers while making the certification process more efficient for
      industries, as only safe, compliant, and high-quality products will be
      offered in the Indian market. For organizations that aim to receive BIS
      certification, collaboration with LRS-approved labs is the most
      essential to achieve compliance and market access.
    </Paragraph>

    <SectionHeadingThree>Products That Require BIS Certification</SectionHeadingThree>

    <Paragraph>
      BIS certification applies to a wide variety of products. Examples include:
    </Paragraph>

    <PointsList
      points={[
        "Electrical & Electronics – LED lights, mobile phones, adapters, laptops.",
        "Construction Materials – Cement, steel bars, structural products.",
        "Consumer Goods – Packaged drinking water, cooking gas cylinders.",
        "Jewelry & Precious Metals – Gold and silver articles under hallmarking.",
        "Industrial Equipment – Pumps, transformers, machine tools.",
      ]}
    />

    <Paragraph>
      The list continues to grow as new risks and technologies emerge.
    </Paragraph>

    <SectionHeadingThree>Benefits of BIS Certification</SectionHeadingThree>

    <Paragraph>
      For companies, the BIS certificate offers much more than mere compliance
      with the law.
    </Paragraph>

    <PointsList
      points={[
        "Legal compliance: no fines, no bans, no seizure.",
        "Market access: needed for selling regulated products in India.",
        "Consumer trust: builds with the well-recognized ISI mark as a sign of proof.",
        "Competitive advantage: as certified companies easily differentiate from uncertified competitors.",
        "Export facilitation: many international buyers understand and appreciate BIS certification.",
        "Participation in Tenders: many government projects award contracts for goods which are BIS certified.",
      ]}
    />
  </>
);

const ProcessContent = () => (
  <>
    <SectionHeadingTwo>Procedure for Obtaining BIS Certification</SectionHeadingTwo>

    <Paragraph>
      The process for securing a BIS certificate for both Indian and foreign
      manufacturers generally follows these key steps:
    </Paragraph>

    <PointsList
      points={[
        "Identify the Applicable Standard: Determine the relevant Indian Standard (IS) that applies to the product.",
        "Establish Testing Facilities: Set up an in-house laboratory that meets the requirements of the applicable standard.",
        "Create a BIS Portal Account: Indian manufacturers must register on the BIS online portal to initiate the application.",
        "Product Testing: Get the product tested according to the applicable Indian Standard Specifications (ISS).",
        "Application Submission: File the BIS application along with the test report and required documents.",
        "Query Resolution: Respond to any clarification or queries raised by BIS officials.",
        "Factory Inspection: A BIS officer visits the manufacturing facility to verify compliance and inspect the production process.",
        "Sample Verification: During the inspection, samples are tested in the in-house lab and sealed for re-verification by the BIS officer.",
        "Audit Completion: Once the inspection and verification activities are completed, the audit is finalized.",
        "Grant of Licence: If all requirements are met, BIS grants the certification licence to the manufacturer.",
      ]}
    />
  </>
);

const DocumentsContent = () => (
  <>
    <SectionHeadingTwo>Documents Required for BIS Certification</SectionHeadingTwo>

    <Paragraph>
      A strong documentation package ensures smooth processing. Key requirements
      include:
    </Paragraph>

    <PointsList
      points={[
        "Business license or company registration documents.",
        "Manufacturing process flow chart.",
        "List of machinery and equipment.",
        "Product details and technical specifications.",
        "Test reports from BIS-recognized labs.",
        "Quality control manual.",
        "Trademark certificate.",
      ]}
    />

    <SectionHeadingThree>For foreign manufacturers:</SectionHeadingThree>

    <PointsList
      points={[
        "Appointment of an Authorized Indian Representative (AIR).",
        "Proof of representation and identity documents.",
      ]}
    />
  </>
);

const CostContent = () => (
  <>
    <SectionHeadingTwo>BIS Certification Cost</SectionHeadingTwo>

    <ServiceTable
      headers={["Cost Component", "Details"]}
      rows={[
        [
          "Application Fee",
          "One-time, non-refundable fee depending on product type",
        ],
        [
          "Testing Charges",
          "Based on complexity; paid to BIS-recognized labs",
        ],
        [
          "Annual License Fee",
          "Paid annually to maintain BIS license",
        ],
        [
          "Inspection/Factory Audit Charges",
          "Charged if BIS officials visit factory (domestic or international travel extra)",
        ],
        [
          "Consultancy Charges (if applicable)",
          "Optional, for end-to-end compliance help from consultants",
        ],
      ]}
    />

    <SectionHeadingThree>BIS Certification Cost and Licence Fees</SectionHeadingThree>

    <Paragraph>
      The cost of obtaining BIS certification varies depending on several
      factors, including the product category, the applicable Indian Standard
      (IS), and whether the manufacturer is based in India or overseas.
    </Paragraph>

    <SectionHeadingThree>Fee Structure for BIS Registration (CRS)</SectionHeadingThree>

    <PointsList
      points={[
        "Government Fee: ₹53,000 + 18% GST per test report. An additional ₹20,000 is charged for each extra test report submitted within the same application.",
        "Testing Charges: Applicable as per laboratory rates, which vary depending on the product and testing facility.",
      ]}
    />

    <Paragraph>
      Note: Companies registered under the MSME Act may be eligible for certain
      concessions on government fees.
    </Paragraph>

    <SectionHeadingThree>Fee Structure for BIS Licence (ISI Certification)</SectionHeadingThree>

    <PointsList
      points={[
        "Application Fee: ₹1,000",
        "Licence Fee: ₹1,000",
        "Audit Charges: ₹7,000 per man-day for factory inspection",
        "Testing Charges: Based on the product and testing laboratory",
        "Minimum Marking Fee: Varies according to the product category.",
      ]}
    />

    <Paragraph>
      For foreign manufacturers, additional charges apply under the Foreign
      Manufacturers Certification Scheme (FMCS). The exact cost structure depends
      on the specific case and applicable requirements.
    </Paragraph>
  </>
);

const AIRContent = () => (
  <>
    <SectionHeadingTwo>Role of Authorized Indian Representative (AIR)</SectionHeadingTwo>

    <Paragraph>
      For foreign manufacturers, the Authorized Indian Representative (AIR) is
      critical.
    </Paragraph>

    <PointsList
      points={[
        "Handles all communication with BIS.",
        "Gathers and submits documents, then facilitates the inspection process.",
        "Ensures compliance regarding certification, before, and after.",
        "Must be an Indian citizen or an organization with a registered local address.",
      ]}
    />

    <Paragraph>
      In the absence of an AIR, obtaining BIS certification for foreign
      companies is impossible.
    </Paragraph>
  </>
);

const ConclusionContent = () => (
  <>
    <SectionHeadingTwo>Conclusion</SectionHeadingTwo>

    <Paragraph>
      Having a BIS certification is a necessity for doing business in India. It is
      no longer an optional certification in business. It is crucial for business
      success and building trust. BIS is essential for safety and success in
      India. For manufacturers and importers, it offers an easy and safe business
      setup environment. Legal issues and fines are no longer a concern. With a
      BIS mark, consumer trust is guaranteed.
    </Paragraph>

    <Paragraph>
      India is one of the biggest growing economies in the world and gaining
      access to sell there can help an exporter grow. No matter if you are a
      manufacturer in India or abroad, the BIS license is needed to manufacture
      or sell products in the Indian market. It&apos;s required, and it unlocks
      business prospects with India&apos;s growing population. It&apos;s an
      investment in safety, consumer trust, brand reputation, credibility, and
      long-term growth.
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  { id: "schemes", label: "Schemes", content: <SchemesContent /> },
  { id: "process", label: "Process", content: <ProcessContent /> },
  { id: "documents", label: "Documents", content: <DocumentsContent /> },
  { id: "cost", label: "Cost", content: <CostContent /> },
  { id: "air", label: "AIR", content: <AIRContent /> },
  { id: "conclusion", label: "Conclusion", content: <ConclusionContent /> },
];

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

function BISCertification() {
  return (
    <ServicePageLayout
      breadcrumbLabel="BIS Certification India for Importers and Manufacturers"
      hero={hero}
      sections={sections}
      faqs={faqs}
      languages={languages}
    />
  );
}

export default BISCertification;
