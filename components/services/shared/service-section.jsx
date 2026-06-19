import { Separator } from "@/components/ui/separator";

// Wraps a MainContentLeft section: renders the index-anchored heading row
// (label + separator) that the scroll-spy nav targets, followed by the body.
const ServiceSection = ({ id, label, children }) => (
  <div id={id} className="flex flex-col scroll-mt-36">
    <div className="flex w-full items-center gap-3">
      <span className="service-left-content-index-heading">{label}</span>
      <Separator className="service-left-content-separator" />
    </div>
    {children}
  </div>
);

export default ServiceSection;
