const Contact = () => {
  return (
    <div className="pt-8 md:pt-8 pb-8 md:pb-8 overflow-x-hidden">
      <div className="max-w-[88rem] px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between mx-auto">
        <div className="w-full md:w-1/2">
          <div className="hidden md:flex w-full items-center gap-3">
            <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
              India&apos;s most trusted partner for certifications
            </span>
            <div className="w-[94.46px] h-[2px] bg-[#008080]"></div>
          </div>

          <h2 className="text-[25px] uppercase md:text-[36px] font-bold font-inter md:font-roboto text-[#1E1E1E]">
            Contact Us
          </h2>

          <p className="font-medium font-poppins text-[17px] md:text-[20px] text-[#664747]">
            Want to contact our team and book a call?
            <span className="text-black"> Try it now</span>
          </p>

          <form className="mt-6 flex flex-col gap-4">
            <input
              required
              type="text"
              name="fullName"
              className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px] border-2 border-blue-500/90
                focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0
                text-[#595959] text-[17px] md:text-[20px] font-poppins font-semibold
                placeholder:text-[#7E7E7E] placeholder:text-[17px] md:placeholder:text-[20px]
                placeholder:font-poppins placeholder:font-semibold px-6 md:px-8"
              placeholder="Full Name *"
            />

            <input
              required
              type="email"
              name="email"
              className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px] border-2 border-blue-500/90
                focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0
                text-[#595959] text-[17px] md:text-[20px] font-poppins font-semibold
                placeholder:text-[#7E7E7E] placeholder:text-[17px] md:placeholder:text-[20px]
                placeholder:font-poppins placeholder:font-semibold px-6 md:px-8"
              placeholder="Email Address *"
            />

            <input
              required
              type="text"
              name="phoneNumber"
              className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px] border-2 border-blue-500/90
                focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0
                text-[#595959] text-[17px] md:text-[20px] font-poppins font-semibold
                placeholder:text-[#7E7E7E] placeholder:text-[17px] md:placeholder:text-[20px]
                placeholder:font-poppins placeholder:font-semibold px-6 md:px-8"
              placeholder="Phone Number *"
            />

            <input
              required
              type="text"
              name="message"
              className="w-full md:w-[600px] h-14 md:h-[72px] rounded-xl md:rounded-[15px] border-2 border-blue-500/90
                focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0
                text-[#595959] text-[17px] md:text-[20px] font-poppins font-semibold
                placeholder:text-[#7E7E7E] placeholder:text-[17px] md:placeholder:text-[20px]
                placeholder:font-poppins placeholder:font-semibold px-6 md:px-8"
              placeholder="Which Certification is required ? *"
            />

            <button
              type="submit"
              className="w-full md:w-[600px] mt-2 h-14 md:h-[72px] rounded-xl md:rounded-[15px] bg-[#218681] hover:bg-[#17b1a9] text-white text-[17px] md:text-2xl font-poppins font-semibold"
            >
              <span>Submit</span>
            </button>
          </form>
        </div>

        <div className="hidden md:block relative w-[600px] h-[539px] mr-5 mt-16">
          <img
            src="/images/home/contact/contact-us.webp"
            alt="Home Page Contact Us Image"
            title="Home Page Contact Us Image"
            className="absolute right-0 w-[475.99px] h-[539px] object-cover"
            width={476}
            height={539}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          <img
            src="/images/home/contact/contact-child.webp"
            alt="Home Page Contact Child Image"
            title="Home Page Contact Child Image"
            className="absolute inset-0 w-[350px] h-[350px] -translate-x-[70px] translate-y-[180px] object-cover"
            width={350}
            height={350}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
