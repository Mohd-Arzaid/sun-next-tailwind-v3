import ServicePageLayout from "@/components/services/shared/service-page-layout";
import {
  SectionHeadingTwo,
  SectionHeadingThree,
  Paragraph,
  PointsList,
} from "@/components/services/shared/service-content";

const hero = {
  titleHighlight: "ROHS Registration",
  titleSuffix: "Certification",
  description:
    "Comprehensive RoHS Certification services for electronic products to ensure global market access and environmental compliance.",
};

const OverviewContent = () => (
  <>
    <SectionHeadingTwo>RoHS Certification in India</SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Essential compliance for electronic products in the global market
    </SectionHeadingThree>

    <Paragraph>
      Rapid growth in the electronics and electrical equipment industry, coupled
      with an increasing concern for the environment and the impact on human
      health, can be seen on a global scale. Hazardous materials in electronic
      products can adversely affect ecosystems and human life at all stages of a
      product’s lifecycle from the manufacturing of the product, to its
      disposal, and everything in between. This and other similar global
      concerns have prompted the introduction of regulatory frameworks across
      the world, with one of the most noteworthy being the introduction of the
      RoHS Certification.
    </Paragraph>

    <Paragraph>
      In India, the surge in electronic consumption, the resultant increase in
      e-waste, and the regulation of the environment in India for the purpose of
      protecting it has made RoHS compliance essential. As a manufacturer,
      importer, distributor, or exporter of electrical and electronic equipment,
      gaining an understanding of RoHS certification is essential in order to be
      legally compliant and gain access to the European Union (EU) and other
      markets.
    </Paragraph>

    <Paragraph>
      This guide examines RoHS Certification in India in an all inclusive
      manner, explaining its meaning and scope, benefits, process, methods,
      costs, duration, and outlining steps that can be taken to obtain RoHS
      certification in India in the most streamlined manner.
    </Paragraph>
  </>
);

const RoHSMeaningContent = () => (
  <>
    <SectionHeadingTwo>
      RoHS Certification Meaning and Full Form
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Understanding the Restriction of Hazardous Substances Directive
    </SectionHeadingThree>

    <Paragraph>
      RoHS stands for 'Restriction of Hazardous Substances'. In order to obtain
      the certification, it is necessary to comply with the RoHS Enforcement
      Regulation that requires the restriction of certain hazardous substances
      in electrical and electronic equipment (EEE).
    </Paragraph>

    <Paragraph>
      As part of the European Union's effort to address issues of health and
      environmental dangers of pollution stemming from the disposal of
      electronic equipment, the Restriction of Hazardous Substances (RoHS)
      Directive 2002/95/EC, was introduced. This directive came into effect on
      July 1, 2006, and all products that fall under its regulations and are
      sold in the EU must comply with its guidelines.
    </Paragraph>

    <Paragraph>
      Additionally, the directive has evolved through the years expanding its
      scope and imposition of additional restricted materials, including the
      RoHS 2 (2011/65/EU) and RoHS 3 (EU 2015/863) directives.
    </Paragraph>
  </>
);

const NecessityContent = () => (
  <>
    <SectionHeadingTwo>
      Why RoHS Certification in India is Necessary
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Environmental protection and legal compliance requirements
    </SectionHeadingThree>

    <Paragraph>
      Rapid technological advancements, coupled with shorter life cycles of
      electronic products, are significantly increasing the volume of electronic
      waste in India. The Ministry of Environment, Forest and Climate Change
      (MoEFCC) enacted the E-Waste (Management) Rules which now also require
      RoHS compliance for electrical and electronic equipment to be sold,
      manufactured, or imported into India.
    </Paragraph>

    <SectionHeadingThree as="h3">
      RoHS and E-Waste Rules in India
    </SectionHeadingThree>

    <Paragraph>
      Enforcement of RoHS compliance in India is done through the:
    </Paragraph>

    <PointsList
      points={[
        "E-Waste (Management) Rules, 2016",
        "Amended E-Waste Rules (2018 & 2022)",
      ]}
    />

    <Paragraph>
      These regulations require producers to guarantee that the restricted
      materials are in compliance with the prescribed limits and to keep
      technical documentation for compliance verification.
    </Paragraph>
  </>
);

const ApplicabilityContent = () => (
  <>
    <SectionHeadingTwo>
      Who Needs to Obtain RoHS Certification?
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Companies requiring RoHS compliance certification
    </SectionHeadingThree>

    <Paragraph>
      Any company that engages with the production, import, sale, or
      distribution of electrical and electronic equipment must ensure RoHS
      compliance, including:
    </Paragraph>

    <PointsList
      points={[
        "Manufacturers of electronic products",
        "Importers of electrical and electronic products",
        "Exporters to the European Union",
        "Component and OEM manufacturers",
        "Distributors, traders, and resellers",
        "Assemblers and contract manufacturers",
      ]}
    />

    <Paragraph>
      Even if you don&apos;t sell directly to the European Union, you may need
      RoHS compliant certification if your customers or integrators sell to RoHS
      regulated countries.
    </Paragraph>

    <SectionHeadingThree as="h3">
      Products Covered Under RoHS
    </SectionHeadingThree>

    <Paragraph>
      RoHS covers a variety of electrical and electronic products such as:
    </Paragraph>

    <PointsList
      points={[
        "Consumer electronics",
        "Telecommunications and IT equipment",
        "Electrical equipment used in industry",
        "Medical equipment",
        "Control and monitoring instruments",
        "Equipment used in lighting",
        "Electrical and electronic appliances",
        "Electrical tools and machines",
        "Power adapters and supplies",
        "PCBs",
        "Connectors, cables, and other components",
      ]}
    />
  </>
);

const RestrictedSubstancesContent = () => (
  <>
    <SectionHeadingTwo>
      Substances Restricted Under RoHS Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Hazardous materials limited by RoHS compliance
    </SectionHeadingThree>

    <Paragraph>
      RoHS has set certain limits that regulate the use of hazardous substances.
      The substances that are presently restricted under the RoHS directive
      include:
    </Paragraph>

    <PointsList
      points={[
        "Lead (Pb)",
        "Mercury (Hg)",
        "Cadmium (Cd)",
        "Hexavalent Chromium (Cr⁶⁺)",
        "Polybrominated Biphenyls (PBB)",
        "Polybrominated Diphenyl Ethers (PBDE)",
      ]}
    />

    <SectionHeadingThree as="h3">
      Environmental and Health Impact
    </SectionHeadingThree>

    <Paragraph>These substances are known to:</Paragraph>

    <PointsList
      points={[
        "Leach contaminants into landfill sites",
        "Pollute the groundwater with toxic contaminants",
        "Cause neurological disorders, respiratory disorders, and reproductive disorders",
        "Create an occupational hazard during the manufacturing and recycling process",
      ]}
    />

    <SectionHeadingThree as="h3">
      Products Exempted from RoHS Certification
    </SectionHeadingThree>

    <Paragraph>
      The following product categories are exempt from RoHS compliance:
    </Paragraph>

    <PointsList
      points={[
        "Military and national defense products",
        "Products that do not use electricity",
        "Equipment that does not use electricity to accomplish its primary purpose",
        "Sub-assemblies or components of exempt products",
        "Products that assist Micro, Small, and Medium Enterprises (MSMEs) under the MSME Development Act, 2006",
        "Batteries",
        "Equipment that contains radioactive waste",
      ]}
    />
  </>
);

const ProcedureContent = () => (
  <>
    <SectionHeadingTwo>
      Procedure to Obtain RoHS Certification in India
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Step-by-step certification process for RoHS compliance
    </SectionHeadingThree>

    <Paragraph>
      Knowing this procedure is essential for businesses wishing to achieve
      compliance and expand their market in India.
    </Paragraph>

    <SectionHeadingThree as="div">1. Product Finalization</SectionHeadingThree>

    <Paragraph>
      Specify and finalize the product(s) to be certified. This can include:
    </Paragraph>

    <PointsList
      points={[
        "Single products",
        "Product lines",
        "Multiple variants sharing the same design and materials",
      ]}
    />

    <SectionHeadingThree as="div">
      2. Submission of Application
    </SectionHeadingThree>

    <Paragraph>
      Fill out an application form and send it to a certifying body (such as Sun
      Certifications) along with basic product and company details.
    </Paragraph>

    <SectionHeadingThree as="div">3. Review of Documents</SectionHeadingThree>

    <Paragraph>
      Initial documents are scanned to evaluate compliance readiness. Required
      documents include:
    </Paragraph>

    <PointsList
      points={[
        "Bills of materials",
        "Supplier declarations",
        "Material safety data sheets",
        "Prior test reports (if any)",
      ]}
    />

    <SectionHeadingThree as="div">
      4. Testing and Verification for ROHS
    </SectionHeadingThree>

    <Paragraph>
      Testing is conducted according to guidelines to check the levels of
      restricted substances.
    </Paragraph>

    <SectionHeadingThree as="div">
      5. Product Audit and Evaluation
    </SectionHeadingThree>

    <Paragraph>
      An audit of the manufacturing company and its processes is performed to
      ensure evidence of continuing compliance.
    </Paragraph>

    <SectionHeadingThree as="div">
      6. Final Submission of Documentation
    </SectionHeadingThree>

    <Paragraph>
      Any additional explanations and corrective action documents are submitted.
    </Paragraph>

    <SectionHeadingThree as="div">7. Review and Evaluation</SectionHeadingThree>

    <Paragraph>
      The certifying body reviews all documentation, including test and audit
      results.
    </Paragraph>

    <SectionHeadingThree as="div">
      8. Distribution of ROHS Certificate
    </SectionHeadingThree>

    <Paragraph>
      After successful evaluations, the applicant is provided with the Document
      of Compliance and the covering certificate.
    </Paragraph>
  </>
);

const CostingContent = () => (
  <>
    <SectionHeadingTwo>
      Cost, Timeline and Benefits of RoHS Certification
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Understanding investment requirements and returns for RoHS compliance
    </SectionHeadingThree>

    <SectionHeadingThree as="h3">
      Cost of RoHS Certification in India
    </SectionHeadingThree>

    <Paragraph>
      Several factors influence the cost of RoHS certification in India.
      Businesses should consider:
    </Paragraph>

    <PointsList
      points={[
        "Product types or their variants",
        "Product intricacy",
        "Amount of parts",
        "Required testing methodologies",
        "Fees for laboratory services",
        "Inspections and audits",
        "Costs for documentation",
      ]}
    />

    <Paragraph>
      The cost varies across India, typically ranging from Rs. 25,000 to Rs.
      1,50,000 or more, depending on the scope and required testing.
    </Paragraph>

    <Paragraph>
      Working with an experienced certification body can help reduce costs by
      avoiding documentation errors that could lead to expensive re-testing.
    </Paragraph>

    <SectionHeadingThree as="h3">
      Timeline and Duration of RoHS Certifications
    </SectionHeadingThree>

    <Paragraph>
      The certification process typically takes approximately 2 weeks, though
      this is highly dependent on the complexity of the product.
    </Paragraph>

    <Paragraph>
      Once obtained, the certification is valid for 5 years.
    </Paragraph>

    <SectionHeadingThree as="h3">
      What Are the RoHS Certification Benefits?
    </SectionHeadingThree>

    <SectionHeadingThree as="h4">
      Legal &amp; Market Benefits
    </SectionHeadingThree>

    <PointsList
      points={[
        "Compulsory for EU exports",
        "Stops product recalls and penalties",
        "Prevents €1 million fines and 2% of annual company revenue fines",
      ]}
    />

    <SectionHeadingThree as="h4">
      Business &amp; Competition
    </SectionHeadingThree>

    <PointsList
      points={[
        "Heightens the reputation of the brand",
        "Increases the trust of customers",
        "Opens the door to more global sales",
      ]}
    />

    <SectionHeadingThree as="h4">Social Responsibility</SectionHeadingThree>

    <PointsList
      points={[
        "Decreases manufacturing waste",
        "Encourages responsible and sustainable manufacturing processes",
      ]}
    />

    <SectionHeadingThree as="h3">Conclusion</SectionHeadingThree>

    <Paragraph>
      Obtaining RoHS certificates is a requirement that businesses operating in
      the spheres of electrical and electronic equipment must meet. The
      advantages that RoHS compliance has, including market growth and
      environmental sustainability, far exceed the effort and expense for
      compliance.
    </Paragraph>

    <Paragraph>
      To obtain RoHS certification, proper documentation must be completed, and
      working with a certification body with experience is a good strategy for
      businesses to optimize compliance, minimize risk, and achieve
      sustainability.
    </Paragraph>

    <Paragraph>
      As the global market continues to experience tighter regulations,
      obtaining RoHS compliant certification is an investment in the future of
      your business.
    </Paragraph>
  </>
);

const TestingContent = () => (
  <>
    <SectionHeadingTwo>
      Technologies and Methods for Testing Compliance with ROHS
    </SectionHeadingTwo>

    <SectionHeadingThree as="h4">
      Testing methods and technologies for RoHS compliance verification
    </SectionHeadingThree>

    <Paragraph>
      Testing is the foundation of compliance verification ROHS certification
      check.
    </Paragraph>

    <SectionHeadingThree as="h3">Common Testing Methods</SectionHeadingThree>

    <SectionHeadingThree as="div">
      1. X-Ray Fluorescence (XRF)
    </SectionHeadingThree>
    <PointsList
      points={[
        "Can be done without damaging product",
        "Quick screening technique",
        "Best suited for metals, connectors, pins, and terminals",
      ]}
    />

    <SectionHeadingThree as="div">2. Destructive Testing</SectionHeadingThree>
    <PointsList
      points={[
        "Used for PCBs, relays, and switches.",
        "Components get destroyed during analysis.",
        "Results are very accurate.",
      ]}
    />

    <SectionHeadingThree as="div">3. Eddy Current Testing</SectionHeadingThree>
    <PointsList
      points={[
        "Used for coils, transformers, and inductors.",
        "Can be done with or without damaging the parts.",
      ]}
    />

    <SectionHeadingThree as="div">4. Mechanical Sorting</SectionHeadingThree>
    <PointsList
      points={["Used for differentiating plastic and metal components."]}
    />

    <SectionHeadingThree as="div">5. Metal Detection</SectionHeadingThree>
    <PointsList
      points={[
        "Used for ensuring critical metals don't get into production lines.",
        "On-site screening makes use of Portable RoHS analyzers and XRF metal analyzers.",
      ]}
    />

    <SectionHeadingThree as="h3">
      Technical File Requirements for RoHS Certification
    </SectionHeadingThree>

    <Paragraph>
      To be compliant with RoHS, a complete technical file is necessary.
      Important technical documents are the following:
    </Paragraph>

    <PointsList
      points={[
        "Description and specs of product",
        "Drawings of design and structure",
        "Risk assessment of materials, parts, and subassemblies",
        "Conformity declarations of the suppliers",
        "Records of manufacturing processes",
        "Reports of tests and evidence of compliance",
        "Standards and specifications that are applicable",
      ]}
    />

    <Paragraph>
      These documents should be kept and made available to the authorities when
      they ask for them.
    </Paragraph>

    <SectionHeadingThree as="h3">
      RoHS Certification logo and the CE Mark
    </SectionHeadingThree>

    <Paragraph>
      The logo for RoHS certifies that the product has complied with the
      restriction of hazardous substances, and it can be used once the product
      has been certified.
    </Paragraph>

    <Paragraph>
      In addition to meeting the RoHS requirements, for products that are to be
      sold in the EU, the products must also be CE marked, which shows
      compliance with the safety, health, and environmental protection
      requirements of the EU.
    </Paragraph>
  </>
);

const sections = [
  { id: "overview", label: "Overview", content: <OverviewContent /> },
  {
    id: "standardization",
    label: "RoHS Meaning",
    content: <RoHSMeaningContent />,
  },
  {
    id: "authority",
    label: "Necessity",
    content: <NecessityContent />,
  },
  {
    id: "registration",
    label: "Applicability",
    content: <ApplicabilityContent />,
  },
  {
    id: "verification",
    label: "Restricted Substances",
    content: <RestrictedSubstancesContent />,
  },
  {
    id: "procedure",
    label: "Procedure",
    content: <ProcedureContent />,
  },
  {
    id: "testing",
    label: "Testing",
    content: <TestingContent />,
  },
  {
    id: "costs",
    label: "Costs & Benefits",
    content: <CostingContent />,
  },
];

const faqs = [
  {
    question: "What is RoHS?",
    answer:
      "RoHS stands for Restriction of Hazardous Substances. RoHS, also known as Directive 2002/95/EC, originated in the European Union and restricts the use of specific hazardous materials found in electrical and electronic products (known as EEE). All applicable products in the EU market after July 1, 2006 must pass RoHS compliance.",
  },
  {
    question: "Is RoHS mandatory in India?",
    answer:
      "Yes, RoHS compliance (Restriction of Hazardous Substances) is mandatory in India for many electronic and electrical equipment (EEE) manufacturers and importers primarily through the E-Waste (Management) Rules, which mirror the EU directive and require reducing hazardous substances like lead, mercury, and cadmium in products sold in India.",
  },
  {
    question: "What are the restricted materials mandated under RoHS?",
    answer:
      "The substances banned under RoHS are lead (Pb), mercury (Hg), cadmium (Cd), hexavalent chromium (CrVI), polybrominated biphenyls (PBB), polybrominated diphenyl ethers (PBDE), and four different phthalates (DEHP, BBP, BBP, DIBP).",
  },
  {
    question: "Why is RoHS compliance important?",
    answer:
      "The restricted materials are hazardous to the environment and pollute landfills, and are dangerous in terms of occupational exposure during manufacturing and recycling.",
  },
  {
    question: "Who issues the RoHS certificate?",
    answer:
      "Central Pollution Control Board (CPCB) shall conduct random sampling of electrical and electronic equipment placed on the market to monitor and verify the compliance of Reduction of Hazardous Substances provisions and the cost for sample and testing shall be borne by the Producer.",
  },
  {
    question: "How are products tested for RoHS compliance?",
    answer:
      "Portable RoHS analyzers, also known as X-ray fluorescence or XRF metal analyzers, are used for screening and verification of the restricted metals. With the advent of RoHS 3 and the four added phthalates, different testing is needed to ascertain levels of these compounds, which are extracted with a solvent. For more information, see RoHS Testing.",
  },
  {
    question: "Which companies are affected by the RoHS Directive?",
    answer:
      "Any business that sells or distributes applicable EEE products, sub-assemblies, components, or cables directly to EU countries, or sells to resellers, distributors or integrators that in turn sell products to EU countries, is impacted if they utilize any of the restricted materials. Since RoHS-like regulations have spread to a number of other countries, this just doen't apply to EU countries anymore.\n\nRoHS also applies to the metal industry for any application of metal plating, anodizing, chromating or other finishes on EEE components, heatsinks, or connectors.",
  },
  {
    question: "What happens if a product is not RoHS compliant?",
    answer:
      "Suppose a product is not compliant with RoHS and placed on the European Union (EU) market. In that case, there can be legal and financial consequences for the manufacturer, importer, distributor, or any party responsible for the non-compliant product.",
  },
  {
    question: "What is the cost of RoHS certification in India?",
    answer:
      "The cost of RoHS certification varies across India, and the price range is between Rs. 25,000 and Rs. 1,50,000 or more, and this varies because of the scope and testing required. Considerations include product types, complexity, number of parts, testing methodologies, laboratory fees, inspections, and documentation costs.",
  },
  {
    question: "How long does RoHS certification take?",
    answer:
      "The duration for RoHS certification is approximately 2 weeks, however, this highly depends on the complexity of the product. The certification is valid for 5 years from the date of issue.",
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


function ROHS() {
  return (
    <ServicePageLayout
      breadcrumbLabel="ROHS Registration Certification"
      hero={hero}
      intro={<></>}
      sections={sections}
      faqs={faqs}
      languages={languages}
    />
  );
}

export default ROHS;
