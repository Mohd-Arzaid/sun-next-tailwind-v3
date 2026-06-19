import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// FAQ accordion. Shell text is constant across services; only `faqs`
// (`[{ question, answer }]`) varies per page/language.
const ServiceFaq = ({ faqs }) => (
  <section
    id="faqs"
    className="my-2  scroll-mt-28"
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

export default ServiceFaq;
