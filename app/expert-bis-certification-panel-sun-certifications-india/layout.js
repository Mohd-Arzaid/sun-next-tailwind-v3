const PAGE_URL =
  "https://bis-certifications.com/expert-bis-certification-panel-sun-certifications-india";

export const metadata = {
  title:
    "Advisory Network | Independent Former BIS Experts | Sun Certifications India",
  description:
    "Meet our vetted network of independent former BIS specialists who guide BIS audits, documentation, inspections, and corrective action support.",
  keywords: [
    "Advisory Network BIS",
    "Independent Former BIS Experts",
    "BIS Documentation Guidance",
    "BIS Certification Expert Support",
  ],
  openGraph: {
    title:
      "Advisory Network of Independent Former BIS Experts | Sun Certifications India",
    description:
      "Discover Sun Certifications India' vetted advisory network of independent former BIS specialists supporting audits, documentation, inspections, and compliance guidance—no employees, no government affiliation.",
    type: "website",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Independent Former BIS Experts Advisory Network | Sun Certifications India",
    description:
      "A vetted network of independent former BIS professionals supporting BIS audits, documentation, and compliance.",
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

export default function AdvisoryNetworkLayout({ children }) {
  return children;
}
