import { Fragment } from "react";

import ServicesRightSideContentEng from "@/components/services/shared/services-right-side-content-eng";
import ServiceAuthorEng from "@/components/services/shared/service-author-eng";
import ServicesEng from "@/components/services/shared/services-eng";

import ServiceBreadcrumb from "@/components/services/shared/service-breadcrumb";
import ServiceHero from "@/components/services/shared/service-hero";
import ServiceIndexNav from "@/components/services/shared/service-index-nav";
import ServiceSection from "@/components/services/shared/service-section";
import ServiceFaq from "@/components/services/shared/service-faq";
import ServiceLanguageSelector from "@/components/services/shared/service-language-selector";

// Orchestrates the full service-page skeleton. A page only supplies config +
// content; everything structural/visual lives here and in the shared components.
//
// Props:
// - breadcrumbLabel: string shown as the current breadcrumb page
// - hero: { tagline, titleHighlight, titleSuffix, description }
// - intro: optional JSX rendered above the first section (no divider before it)
// - sections: [{ id, label, content }] - drives both the index nav and body
// - faqs: optional [{ question, answer }]
// - languages: optional [{ code, name, flag, path }]
const ServicePageLayout = ({
  breadcrumbLabel,
  hero,
  intro,
  sections = [],
  faqs,
  languages,
}) => {
  return (
    <div className="relative">
      <ServiceBreadcrumb label={breadcrumbLabel} />
      <ServiceHero {...hero} />
      <ServiceIndexNav sections={sections} />

      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
              {intro}
              {sections.map((section, index) => (
                <Fragment key={section.id}>
                  {index > 0 && (
                    <div className="service-left-content-divider" />
                  )}
                  <ServiceSection id={section.id} label={section.label}>
                    {section.content}
                  </ServiceSection>
                </Fragment>
              ))}
              <ServiceAuthorEng />
            </div>
          </div>

          {/* Right Side */}
          <ServicesRightSideContentEng />
        </div>
      </div>

      {faqs && <ServiceFaq faqs={faqs} />}
      {languages && <ServiceLanguageSelector languages={languages} />}
      <ServicesEng />
    </div>
  );
};

export default ServicePageLayout;
