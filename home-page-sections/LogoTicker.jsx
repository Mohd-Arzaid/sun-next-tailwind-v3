const COMPANY_LOGOS = [
  {
    name: "Honeywell",
    src: "/client-logos/honeywell.svg",
    height: 37,
    width: 160,
    alt: "Honeywell Company Logo - Trusted Partner",
    title: "Honeywell Company Logo - Trusted Partner",
  },
  {
    name: "IKEA",
    src: "/client-logos/ikea.svg",
    height: 30,
    width: 160,
    alt: "IKEA Company Logo - Trusted Partner",
    title: "IKEA Company Logo - Trusted Partner",
  },
  {
    name: "Panasonic",
    src: "/client-logos/panasonic.svg",
    height: 26,
    width: 160,
    alt: "Panasonic Company Logo - Trusted Partner",
    title: "Panasonic Company Logo - Trusted Partner",
  },
  {
    name: "Ansell",
    src: "/client-logos/ansell.svg",
    height: 26,
    width: 160,
    alt: "Ansell Company Logo - Trusted Partner",
    title: "Ansell Company Logo - Trusted Partner",
  },
  {
    name: "Ametek",
    src: "/client-logos/ametek.svg",
    height: 23.5,
    width: 160,
    alt: "Ametek Company Logo - Trusted Partner",
    title: "Ametek Company Logo - Trusted Partner",
  },
  {
    name: "Bosch",
    src: "/client-logos/bosch.svg",
    height: 32,
    width: 160,
    alt: "Bosch Company Logo - Trusted Partner",
    title: "Bosch Company Logo - Trusted Partner",
  },
];


const LogoTicker = () => {
  const duplicated = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <div className="bg-white w-full py-3 md:py-5">
      <div className="max-w-[84rem] mx-auto px-2 md:px-4">
        <div className="marquee-container overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <ul className="marquee-track logo-ticker-track flex w-max min-w-full shrink-0 flex-nowrap gap-1 md:gap-6">
            {duplicated.map((logo, i) => (
              <li
                key={`${logo.name}-${i}`}
                className="flex items-center justify-center px-3 md:px-6 py-2 md:py-4 shrink-0"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: `${logo.height}px ${
                    logo.width || 160
                  }px`,
                }}
              >
                <img
                  className="mx-auto w-fit scale-[0.8] md:scale-100"
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title || logo.alt}
                  height={logo.height}
                  width={logo.width || 160}
                  style={{
                    height: `${logo.height}px`,
                  }}
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
