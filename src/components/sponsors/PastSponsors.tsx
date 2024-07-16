import { motion } from "framer-motion";
import amazonIcon from "@/assets/sponsors/amazon-text.png";
import googleIcon from "@/assets/sponsors/google-text.png";
import drracketIcon from "@/assets/sponsors/drracket-text.png";
import microsoftIcon from "@/assets/sponsors/microsoft-text.png";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export const PastSponsors: React.FC = () => {
  const slides = [
    {
      href: "https://www.amazon.com",
      src: amazonIcon,
      alt: "Amazon Logo Wide",
    },
    {
      href: "https://www.google.com",
      src: googleIcon,
      alt: "Google Logo Wide",
    },
    {
      href: "https://racket-lang.org/",
      src: drracketIcon,
      alt: "DrRacket Logo Wide",
    },
    {
      href: "https://www.microsoft.com",
      src: microsoftIcon,
      alt: "Microsoft Logo Wide",
    },
  ];
  const duplicatedSlides = [...slides, ...slides];

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-5xl md:text-7xl mx-auto text-center text-primary z-10 mb-6 md:mb-8">
        Past Sponsors
      </div>
      <div
        className="relative h-full overflow-hidden pb-6 bg-white mx-auto z-0"
        style={{ width: "80%" }}
      >
        <div className="absolute inset-0 z-10 pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:pointer-events-none after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none"></div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", isDesktop ? "-100%" : "-200%"], // if logos need to be different size, must be proportional to this I think
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
          style={{ zIndex: 20 }} // make sure button is clickable above gradient
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${
                  isDesktop ? 100 / slides.length : (100 / slides.length) * 2
                }%`,
              }}
            >
              <div
                className={`flex items-center justify-center h-full ml-8 ${
                  index % 2 !== 0 ? "mt-6 md:mt-12" : ""
                }`}
              >
                <a
                  href={slide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grayscale hover:grayscale-0 transition duration-300"
                >
                  <Image src={slide.src} alt={slide.alt} />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PastSponsors;
