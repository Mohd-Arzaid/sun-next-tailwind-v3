import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { SlashIcon } from "lucide-react";

const ServiceBreadcrumb = ({ label }) => (
  <div className="absolute md:top-5 top-3 left-0 w-full z-30">
    <div className="max-w-[80rem] mx-auto px-4">
      <div className="w-full overflow-x-auto scrollbar-hide font-inter">
        <div className="w-fit min-w-full">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap">
              <BreadcrumbItem className="flex-shrink-0">
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="flex-shrink-0">
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="flex-shrink-0">
                <BreadcrumbPage className="whitespace-nowrap">
                  {label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceBreadcrumb;
