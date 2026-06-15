import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

const PAGE_URL = "https://bis-certifications.com/message-from-management-desk";

export const metadata = {
  title: "Message from Management Desk | Sun Certifications India",
  description:
    "Read the Message from the Management Desk at Sun Certifications India. Learn about our mission, values, and commitment to trust, quality, innovation, and customer satisfaction in product certification services.",
  keywords: [
    "Message from Management Desk",
    "Sun Certification India",
    "ISI certification services",
    "BIS certification consultants",
    "product certification vision",
  ],
  openGraph: {
    title:
      "Message from Management Desk – Trusted Product Certification Consultants",
    description:
      "Explore the Message from the Management Desk of Sun Certifications India, highlighting our vision, values, customer commitment, and long-term approach to product certification and compliance services.",
    type: "article",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Message from Management Desk | Sun Certifications India",
    description:
      "Explore the Message from the Management Desk of Sun Certifications India, highlighting our vision, values, customer commitment, and long-term approach to product certification and compliance services.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function MessageFromManagementDesk() {
  return (
    <div className="relative">
      <BreadcrumbContent />

      <div className="bg-white">
        <div className="bg-white pt-12 md:pt-20">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
              Message from the Management Desk
            </h1>
          </div>
        </div>

        <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-6 md:pt-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 md:mb-12">
              <p className="text-lg md:text-xl text-neutral-600 font-geist leading-relaxed">
                Welcome to our official website, and thank you for taking the
                time to learn more about who we are and what we stand for.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Who We Are
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                At Sun Certifications India, we are proud to be a trusted
                product certification consulting partner for Indian
                manufacturers, foreign manufacturers, importers, exporters, and
                traders across diverse industries. From the very beginning, our
                organization has been built on strong values of trust, quality,
                innovation, and customer satisfaction. These principles guide
                every decision we make and every service we deliver.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                In today&apos;s rapidly evolving regulatory environment, product
                compliance is not just a legal requirement—it is a commitment to
                safety, quality, and credibility. Our mission is to simplify
                complex certification processes and help businesses achieve
                regulatory approvals with confidence and clarity.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Whether it is BIS certification, ISI marking, CRS registration,
                or other product compliance requirements, our team works closely
                with clients to ensure accuracy, transparency, and timely
                execution at every stage.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Building Strong Relationships
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                We strongly believe that long-term success is built on strong
                relationships. That is why we focus not only on delivering
                results, but also on building trust through honest guidance,
                technical expertise, and consistent support.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Our clients rely on us not just as consultants, but as
                compliance partners who understand their business goals and
                regulatory challenges. This trust motivates us to continuously
                improve our processes and stay updated with changing standards
                and government regulations.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Quality at Our Core
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                Quality is at the core of our work culture. Every project,
                regardless of its size, is handled with the same level of
                dedication and attention to detail. We invest in knowledge,
                training, and innovation so that our clients benefit from
                accurate advice and efficient solutions.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                Our experienced professionals are committed to reducing
                compliance risks and helping businesses enter and grow in
                domestic and international markets smoothly.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Vision for the Future
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                As we look to the future, our vision remains clear: to become a
                globally recognized product certification consulting firm known
                for reliability, professionalism, and value-driven services.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed">
                We aim to support businesses not only in meeting today&apos;s
                compliance requirements but also in preparing for tomorrow&apos;s
                regulatory expectations.
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800 mb-6 md:mb-8">
                Our Commitment to You
              </h2>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-4">
                We thank you for your trust and confidence in us. We look
                forward to building a long-term association with you and
                supporting your journey toward compliance, quality, and
                sustainable growth.
              </p>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed italic">
                Together, let us move forward with confidence, compliance, and
                success.
              </p>
            </div>

            <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
              <h3 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 mb-4">
                Ready to Start Your Certification Journey?
              </h3>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-6">
                Let our experienced team guide you through the certification
                process with clarity and confidence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbContent() {
  return (
    <div className="absolute top-3 md:top-5 left-0 w-full z-30">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 md:px-12">
        <div className="w-full overflow-x-auto scrollbar-hide">
          <Breadcrumb>
            <BreadcrumbList className="flex-nowrap font-geist">
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
                  Message from Management Desk
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
