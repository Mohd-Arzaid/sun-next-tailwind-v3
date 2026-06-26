import { Calendar, ChevronRight, Clock, Users } from "lucide-react";
import CommonBreadcrumb from "@/components/common/common-breadcrumb";
import OurServices from "@/components/common/our-services";

const Webinar = () => {
  return (
    <>
      <CommonBreadcrumb label="Expert Certification Webinars" />
      <div className="overflow-hidden relative bg-[#F9F7F2]">
        <WebinarHero />
        <PastWebinars />
        <WebinarBenefits />
        <OurServices />
      </div>
    </>
  );
};

export default Webinar;

const WebinarHero = () => {
  return (
    <div className=" max-w-[84rem] mx-auto px-4 md:px-12 pt-10 md:pt-14 pb-10 md:pb-20">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-9">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Expert Certification Webinars
        </h1>
        <p className="text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-3xl mx-auto ">
          Join our expert-led webinars to gain valuable insights into BIS
          certification, LMPC compliance, EPR regulations, and other
          certification processes for the Indian market. Interactive sessions
          with industry specialists.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
        <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group">
          <span className="font-medium font-geist">Register Now</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <button className="w-full md:w-auto items-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
          <span className="font-medium font-geist">View Schedule</span>
        </button>
      </div>

      <div className="relative rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden group h-[400px] md:h-[500px]">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Expert certification webinar session with industry professionals"
          title="Expert certification webinar session with industry professionals"
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4 md:p-8">
          <div className="bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 md:py-4 rounded-xl md:rounded-2xl border border-white/20 mb-6 md:mb-8">
            <div className="text-white font-semibold text-base md:text-lg">
              Join Our Upcoming Webinar
            </div>
          </div>

          <h2 className="text-white text-2xl md:text-4xl font-bold font-playfair mb-5 md:mb-6 text-center max-w-xs  md:max-w-3xl">
            Complete BIS Certification Process and Documentation Guide
          </h2>

          <button className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm py-2 px-4 md:py-3 md:px-6 rounded-full shadow-xl hover:bg-white transition-all duration-300 group/btn">
            <span className="font-medium text-base md:text-lg text-gray-800 group-hover/btn:text-[#1A8781] transition-colors duration-300">
              Register Now
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1A8781] rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white ml-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const PastWebinars = () => {
  const upcomingWebinars = [
    {
      id: 1,
      title: "BIS Certification: Complete Process and Documentation Guide",
      date: "February 15, 2025",
      time: "11:00 AM IST",
      duration: "90 min",
      host: "Rahul Sharma",
      attendees: 540,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Comprehensive guide to BIS certification process, documentation requirements, and compliance strategies for Indian and foreign manufacturers.",
    },
    {
      id: 2,
      title: "LMPC Certification: Navigating Legal Metrology Requirements",
      date: "February 22, 2025",
      time: "2:00 PM IST",
      duration: "60 min",
      host: "Priya Patel",
      attendees: 320,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Master the legal metrology requirements and LMPC certification process for measuring instruments and weighing machines.",
    },
    {
      id: 3,
      title: "EPR Compliance: Environmental Regulations for Manufacturers",
      date: "March 5, 2025",
      time: "10:00 AM IST",
      duration: "75 min",
      host: "Dr. Arjun Singh",
      attendees: 410,
      image:
        "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description:
        "Comprehensive overview of EPR compliance requirements for plastic waste, battery waste, and environmental regulations.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#F9F7F2] to-white pb-12 md:pb-20">
      <div className="max-w-[84rem] mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className=" flex flex-col gap-2 mb-8 md:mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e1e1e]">
            Upcoming Certification Webinars
          </h2>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-2xl">
            Register for our upcoming expert-led webinars covering various
            certification topics and compliance requirements.
          </p>
        </div>

        {/* Webinar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {upcomingWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="group bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/10 hover:border-[#1A8781]/30 "
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={webinar.image}
                  alt={`${webinar.title} - Certification webinar`}
                  title={`${webinar.title} - Certification webinar`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#1A8781]">
                  {webinar.date}
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="font-geist font-semibold text-[#131316] text-lg md:text-xl mb-3 line-clamp-2">
                  {webinar.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {webinar.description}
                </p>

                <div className="flex flex-col gap-2 md:gap-3 mb-5 md:mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-[#1A8781]" />
                    <span className="text-sm">
                      {webinar.time} • {webinar.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-[#1A8781]" />
                    <span className="text-sm">
                      {webinar.attendees} registered attendees
                    </span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#1A8781]/10 text-[#1A8781] py-2 px-4 rounded-full hover:bg-[#1A8781]/20 transition-all duration-300">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Register</span>
                  </button>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt={`${webinar.host} - Webinar host`}
                        title={`${webinar.host} - Webinar host`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">
                      Host: {webinar.host}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WebinarBenefits = () => {
  const benefits = [
    {
      title: "Expert-Led Sessions",
      description:
        "Learn directly from our certification specialists with over 10 years of industry experience in BIS, LMPC, and EPR compliance.",
      icon: "👨‍🏫",
    },
    {
      title: "Interactive Q&A",
      description:
        "Get your specific certification questions answered in real-time during our sessions with detailed explanations and practical examples.",
      icon: "💬",
    },
    {
      title: "Latest Regulatory Updates",
      description:
        "Stay informed about the newest changes in BIS notifications, LMPC requirements, EPR regulations, and other certification standards.",
      icon: "📋",
    },
    {
      title: "Real Case Studies",
      description:
        "Learn from actual success stories and challenges faced by companies during their certification journey in the Indian market.",
      icon: "📊",
    },
  ];

  return (
    <div className="max-w-[84rem] mx-auto px-4 md:px-12 pb-12 md:pb-20 pt-16">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
          Why Attend Our Certification Webinars?
        </h2>
        <p className="text-base md:text-lg font-geist text-gray-600 max-w-xl md:max-w-2xl mx-auto">
          Our certification webinars are designed to provide valuable insights,
          practical knowledge, and expert guidance for your compliance journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1A8781]/30 hover:border-[#1A8781]/60 relative overflow-hidden transform hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A8781]/10 rounded-bl-full -mr-10 -mt-10 group-hover:bg-[#1A8781]/20 transition-all duration-300"></div>

            <div className="text-4xl md:text-5xl mb-4 md:mb-6">
              {benefit.icon}
            </div>

            <h3 className="font-geist font-semibold text-[#131316] text-lg md:text-xl mb-3">
              {benefit.title}
            </h3>

            <p className="text-gray-600 font-geist text-sm md:text-base">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
