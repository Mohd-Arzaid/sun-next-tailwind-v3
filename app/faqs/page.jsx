"use client";
import { useState, useMemo } from "react";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailPlus, Search } from "lucide-react";
import Link from "next/link";
import OurServices from "@/components/common/our-services";

const faqQuestions = [
  // Question 1
  {
    question: "How to check BIS certification?",
    path: "/check-bis-certification",
  },
  // Question 2
  {
    question: "How to get BIS certification?",
    path: "/get-bis-certification",
  },
  // Question 3
  {
    question: "How to check BIS certification online?",
    path: "/check-bis-certification-online",
  },
  // Question 4
  {
    question: "How much does BIS certification cost?",
    path: "/bis-certification-cost",
  },
  // Question 5
  {
    question: "How to get BIS certification in India?",
    path: "/get-bis-certification-in-india",
  },
  // Question 6
  {
    question: "How to apply BIS certification?",
    path: "/apply-bis-certification",
  },
  // Question 7
  {
    question: "How to verify BIS certification?",
    path: "/verify-bis-certification",
  },
  // Question 8
  {
    question: "Download BIS Certificate Online",
    path: "/download-bis-certificate-online",
  },
  // Question 9
  {
    question: "How to Import without bis certificate?",
    path: "/import-without-bis-certificate",
  },
  // Question 10
  {
    question: "Can importer apply for BIS Certificate in India?",
    path: "/importer-apply-for-bis-certificate-in-india",
  },
  // Question 11
  {
    question: "Who can issue BIS Certificate in India?",
    path: "/issue-bis-certificate",
  },
  // Question 12
  {
    question: "Who can get BIS Certificate in India?",
    path: "/get-bis-certificate",
  },
  // Question 13
  {
    question: "Can a Trader get BIS Certificate in India?",
    path: "/trader-get-bis-certificate",
  },
  // Question 14
  {
    question: "Who can apply for BIS Certificate in India?",
    path: "/apply-bis-certificate",
  },
  // Question 15
  {
    question: "How to Get BIS Certificate in India?",
    path: "/how-to-get-bis-certificate",
  },
  // Question 16
  {
    question: "How to check BIS certificate online?",
    path: "/how-to-check-bis-certificate-online",
  },
  // Question 17
  {
    question: "How to download BIS certificate from manakonline?",
    path: "/download-bis-certificate-manakonline",
  },
  // Question 18
  {
    question: "How to download BIS Certificate?",
    path: "/how-to-download-bis-certificate",
  },
  // Question 19
  {
    question: "how to get BIS Certificate for import?",
    path: "/bis-certificate-import",
  },
  // Question 20
  {
    question: "How to get BIS certificate for import in india?",
    path: "/bis-certificate-for-import-in-india",
  },
  // Question 21
  {
    question: "BIS Certificate who can apply?",
    path: "/bis-certificate-who-can-apply",
  },
  // Question 22
  {
    question: "BIS certificate for import cost?",
    path: "/bis-certificate-for-import-cost",
  },
  // Question 23
  {
    question: "BIS certificate vs ISO certificate?",
    path: "/bis-certificate-vs-iso-certificate",
  },
  // Question 24
  {
    question: "Can BIS Hallmark Be Fake?",
    path: "/can-bis-hallmark-be-fake",
  },
  // Question 25
  {
    question: "Difference between BIS and ISI?",
    path: "/bis-isi-difference",
  },
  // Question 26
  {
    question: "Difference between BIS and ISO?",
    path: "/bis-and-iso-difference",
  },
  // Question 27
  {
    question: "BIS vs ISI?",
    path: "/bis-vs-isi",
  },
  // Question 28
  {
    question: "BIS vs ISO?",
    path: "/bis-vs-iso",
  },
  // Question 29
  {
    question: "Can Foreign Companies Get BIS Certification?",
    path: "/can-foreign-companies-get-bis-certification",
  },
];

const Faqs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredFaqQuestions = useMemo(() => {
    if (!searchTerm.trim()) return faqQuestions;

    return faqQuestions.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <CommonBreadcrumb label="FAQs" />

      {/* Hero Section */}
      <div className="bg-white pt-10">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
            {/* Find answers to the most common questions about BIS certification,
              application processes, verification, and more. Click on any
              question to learn more. */}
            We&apos;ve compiled answers to the most frequently asked questions
            about BIS certification. Whether you&apos;re looking to understand
            the application process, verify a certificate, or learn about costs
            and requirements, you&apos;ll find detailed information below.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent font-geist text-neutral-700 placeholder-neutral-400"
              />
            </div>
            {searchTerm && (
              <p className="mt-2 text-neutral-500 font-geist text-center">
                {filteredFaqQuestions.length} results found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* FAQs Content */}
      <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-8 md:pt-10 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          {/* <div className="mb-10 md:mb-12">
              <p className="text-lg md:text-xl text-center text-neutral-600 font-geist leading-relaxed">
                We&apos;ve compiled answers to the most frequently asked
                questions about BIS certification. Whether you&apos;re looking
                to understand the application process, verify a certificate, or
                learn about costs and requirements, you&apos;ll find detailed
                information below.
              </p>
            </div> */}

          {/* FAQs List */}
          <div className="mb-10 md:mb-12">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800">
                Common Questions About BIS Certification
              </h2>
            </div>
            <div className="space-y-4">
              {filteredFaqQuestions.map((faq, index) => (
                <Link
                  key={index}
                  href={faq.path}
                  className="block bg-white border border-neutral-200 rounded-lg p-5 md:p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-neutral-700 mr-4 mt-3 shrink-0 group-hover:bg-neutral-900 transition-colors duration-200"></span>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-geist font-medium text-neutral-800 group-hover:text-neutral-900 transition-colors duration-200 leading-relaxed">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
            <h3 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our
              certification experts are here to help you with any questions
              about BIS certification.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <OurServices />
    </>
  );
};

export default Faqs;
