import { Fragment } from "react";
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

export const CommonBreadcrumb = ({ label, items }) => {
  const crumbs = items ?? [{ label }];

  return (
    <div className="relative">
      <div className="absolute left-0 top-3 z-30 w-full md:top-5">
        <div className="mx-auto max-w-[75rem] px-4">
          <div className="scrollbar-hide w-full overflow-x-auto font-inter">
            <div className="min-w-full w-fit">
              <Breadcrumb>
                <BreadcrumbList className="flex-nowrap">
                  <BreadcrumbItem className="flex-shrink-0">
                    <BreadcrumbLink asChild>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  {crumbs.map((crumb, index) => (
                    <Fragment key={index}>
                      <BreadcrumbSeparator className="flex-shrink-0">
                        <SlashIcon />
                      </BreadcrumbSeparator>

                      <BreadcrumbItem className="flex-shrink-0">
                        {crumb.href ? (
                          <BreadcrumbLink asChild>
                            <Link href={crumb.href}>{crumb.label}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="whitespace-nowrap">
                            {crumb.label}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBreadcrumb;
