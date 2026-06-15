const PAGE_URL = "https://bis-certifications.com/organization-chart";

export const metadata = {
  title:
    "Organization Chart of Sun Certifications India | BIS Certification Experts",
  description:
    "Sun Certifications India has a very structure and professional approach with specialized department for various services like BIS, CDSCO, LMPC, EPR etc.",
  keywords: [
    "organizational structure",
    "BIS compliance experts",
    "BIS certification organization",
    "Sun Certifications India",
  ],
  openGraph: {
    title: "Our Organization Structure | Sun Certifications India",
    description:
      "Discover how Sun Certifications India is structured to deliver expert BIS certification and regulatory compliance services. Our dedicated leadership, operations, technical, and compliance teams work together to ensure quality, trust, and timely approvals.",
    type: "article",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Organizational Structure | Sun Certifications India",
    description:
      "View the organizational chart of Sun Certifications India and understand how our expert teams support BIS certification, FMCS, EPR, LMPC, PESO, and product compliance services across India.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function OrganizationChartLayout({ children }) {
  return children;
}
