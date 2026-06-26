"use client";

// =============================================
// REACT HOOKS
// =============================================
import { useState } from "react";

// =============================================
// EXTERNAL LIBRARIES
// =============================================
import { ClockLoader } from "react-spinners";

// =============================================
// UI COMPONENTS
// =============================================
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// =============================================
// ICONS
// =============================================
import { Send } from "lucide-react";

// =============================================
// CUSTOM COMPONENTS
// =============================================
// Footer import removed

// =============================================
// UTILITY/HELPER COMPONENTS (Simple UI Components)
// =============================================

/**
 * Decorative Elements Component - Floating animations for visual appeal
 */
const DecorativeElements = () => (
  <div
    className="hidden md:block absolute top-[20%] z-10 right-[15%] w-[20px] h-[20px] rounded-full bg-blue-800/30 animate-float"
    style={{ animationDelay: "1s" }}
  />
);

/**
 * Page Header Component - Title and subtitle with separators
 */
const PageHeader = () => (
  <div className="w-full md:w-[520px] flex flex-col items-center justify-center">
    <h1 className="text-[28px] md:text-[40px] font-geist font-bold text-[#1E1E1E] text-center">
      Contact US
    </h1>
    <div className="flex w-full items-center justify-center gap-2 md:gap-2.5 mt-2 md:mt-0">
      <Separator className="hidden md:block w-[80px] h-[2px] bg-[#008080]" />
      <span className="uppercase font-poppins font-semibold text-[13px] md:text-[16px] text-[#008080] text-center">
        Get In Touch , We&apos;re Here to Assist You
      </span>
      <Separator className="hidden md:block w-[80px] h-[2px] bg-[#008080]" />
    </div>
  </div>
);

/**
 * Hero Image Component - Right side contact image
 */
const HeroImage = () => (
  <div className="z-20 w-full md:w-[500px] flex flex-col order-1 md:order-2">
    <img
      src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
      alt="Software Solutions"
      className="w-full h-auto"
    />
  </div>
);

/**
 * Submit Button Component - Handles loading state and submission
 */
// eslint-disable-next-line react/prop-types
const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    disabled={loading}
    className="flex justify-center font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn h-[46px] md:h-[52px] disabled:opacity-100"
  >
    {loading ? (
      <div className="flex gap-3 items-center justify-center">
        <ClockLoader size={22} color="#fff" />
        <span>Sending</span>
      </div>
    ) : (
      <div className="flex gap-3 items-center justify-center">
        <Send />
        <span>SUBMIT</span>
      </div>
    )}
  </button>
);

/**
 * Contact Info Section Component - Email and phone information
 */
const ContactInfoSection = () => (
  <div className="w-full h-auto md:h-[170px] bg-[#B9DEEB] py-6 md:py-0">
    <div className="max-w-[80rem] h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-6 md:gap-0">
      {/* Get In Touch Section */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[22px] md:text-[26px] leading-tight text-[#1E1E1E] font-bold text-center">
          Get In Touch With Us
        </h4>
        <p className="font-geist text-[15px] md:text-[18px] font-medium text-center">
          <span className="text-[#1E40AF]">We&apos;re always happy</span> to
          Assist You
        </p>
      </div>

      {/* Vertical Separator */}
      <Separator
        orientation="vertical"
        className="bg-[#005065] h-[3px] md:h-[90px] w-full md:w-[3px] rounded-xl hidden md:block"
      />
      <Separator
        orientation="horizontal"
        className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
      />

      {/* Email Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[22px] md:text-[26px] leading-tight text-[#1E1E1E] font-bold text-center">
          Email
        </h4>
        <p className="font-geist text-[#3C3C48] text-[15px] md:text-[18px] font-medium text-center">
          info@sunconsultants.co.in
        </p>
      </div>

      {/* Vertical Separator */}
      <Separator
        orientation="vertical"
        className="bg-[#005065] h-[3px] md:h-[90px] w-full md:w-[3px] rounded-xl hidden md:block"
      />
      <Separator
        orientation="horizontal"
        className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
      />

      {/* Phone Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[22px] md:text-[26px] leading-tight text-[#1E1E1E] font-bold text-center">
          Phone Number
        </h4>
        <p className="font-geist text-[#3C3C48] text-[15px] md:text-[18px] font-medium text-center">
          +91-8010505057
        </p>
      </div>
    </div>
  </div>
);

// =============================================
// COMPLEX COMPONENTS (Components with State/Logic)
// =============================================

/**
 * Contact Form Component - Handles form state and local validation only
 */
const ContactForm = () => {
  // =============================================
  // STATE MANAGEMENT
  // =============================================
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const { fullName, email, phoneNumber, message } = form;

  // =============================================
  // VALIDATION PATTERNS
  // =============================================
  const validationPatterns = {
    name: /^[a-zA-Z\s.'-]{2,50}$/,
    phone: /^\+?[0-9\s-]{8,15}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  // =============================================
  // FORM HANDLERS
  // =============================================
  const handleInputChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!validationPatterns.name.test(fullName)) {
      alert("Please Enter a valid Full Name. Name Should only Contain Letters and Spaces.");
      return false;
    }

    if (!validationPatterns.phone.test(phoneNumber)) {
      alert("Please Enter a Valid Phone Number. Phone Number Should be (8-15 digits)");
      return false;
    }

    if (!validationPatterns.email.test(email)) {
      alert("Please Enter a valid Email Address. Check if Your Email Format is Correct");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    // Backend functionality removed.
    // Show success and reset.
    alert("Form submitted successfully! (No backend functionality)");
    resetForm();
    setLoading(false);
  };

  // =============================================
  // FORM FIELD STYLES (Reusable styles object)
  // =============================================
  const inputStyles = `
    font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] 
    focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] 
    rounded-[12px] h-[46px] md:h-[52px] placeholder:text-[#7E7E7E]/90 
    text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold 
    font-semibold placeholder:text-[13px] text-[13px] md:placeholder:text-[15px] 
    md:text-[15px] placeholder:leading-[22px] leading-[22px] 
    placeholder:tracking-wide tracking-wide px-4 disabled:opacity-100
  `;

  const textareaStyles = `
    font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] 
    focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] 
    rounded-[12px] h-40 md:h-52 placeholder:text-[#7E7E7E]/90 
    text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold 
    font-semibold placeholder:text-[13px] text-[13px] md:placeholder:text-[15px] 
    md:text-[15px] placeholder:leading-[22px] leading-[22px] 
    placeholder:tracking-wide tracking-wide p-4 resize-none disabled:opacity-100
  `;

  // =============================================
  // COMPONENT RENDER
  // =============================================
  return (
    <div className="w-full md:w-[520px] flex flex-col items-center justify-center order-2 md:order-1">
      <PageHeader />

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col mt-3 gap-4 w-full"
      >
        <Input
          name="fullName"
          value={fullName}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Full Name *"
          className={inputStyles}
        />

        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Phone Number *"
          className={inputStyles}
        />

        <Input
          name="email"
          value={email}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Email Address *"
          className={inputStyles}
        />

        <Textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Which Certification is required ? *"
          className={textareaStyles}
        />

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
};

// =============================================
// MAIN COMPONENT (Entry Point)
// =============================================

/**
 * ContactUs Main Component - Entry point that orchestrates the entire contact page
 * Combines SEO, navigation, form, and footer components
 */
const Contact = () => {
  return (
    <>
      {/* SEO and Structured Data */}
      {/* SEOBreadcrumbData component removed as per instructions */}

      {/* Main Content Section */}
      <main className="w-full pt-[24px] md:pt-[40px] pb-[40px] md:pb-[70px] relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF]">
        {/* Decorative Background Elements */}
        <DecorativeElements />

        {/* Main Content Container */}
        <div className="max-w-[78rem] z-[100] gap-[32px] md:gap-[64px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Contact Form Section */}
          <ContactForm />

          {/* Hero Image Section */}
          <HeroImage />
        </div>
      </main>

      {/* Contact Information Section */}
      <ContactInfoSection />

      {/* Footer removed */}
    </>
  );
};

export default Contact;
