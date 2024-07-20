import { motion } from "framer-motion";
import abcellera from "./abcellera.jpg";
import chbe from "./cbe.jpg";
import fom from "./fom.png";
import sbme from "./sbme.jpg";
import walterGage from "./walter_gage.png";
import ecoscope from "./ecoscope.png";
import juno from "./junotherapeutics.png";
import starfish from "./starfish.jpg";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function PastSponsors() {
  const slides = [
    {
      href: "https://abcellera.com/",
      src: abcellera,
      alt: "AbCellera Logo",
    },
    {
      href: "https://chbe.ubc.ca/",
      src: chbe,
      alt: "UBC CHBE Logo",
    },
    {
      href: "https://biochem.ubc.ca/",
      src: fom,
      alt: "UBC Department of Biochemistry and Molecular Biology Logo",
    },
    {
      href: "https://bme.ubc.ca/",
      src: sbme,
      alt: "UBC School of Biomedical Engineering Logo",
    },
    {
      href: "https://vpstudents.ubc.ca/walter-gage/",
      src: walterGage,
      alt: "UBC Walter H. Gage Memorial Fund Logo",
    },
    {
      href: "https://lsi.ubc.ca/news-events/events/ecoscope/",
      src: ecoscope,
      alt: "Ecoscope Logo",
    },
    {
      href: "https://www.bms.com/",
      src: juno,
      alt: "Juno Therapeutics Logo",
    },
    {
      href: "https://starfishmedical.com/",
      src: starfish,
      alt: "Starfish Medical Logo",
    },
  ];
  const duplicatedSlides = [...slides, ...slides];

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-5xl md:text-7xl mx-auto text-center text-primary font-bold z-10 mb-6 md:mb-8">
        Past Sponsors
      </div>
      <div className="relative w-full lg:w-[90%] h-full overflow-hidden pb-10 bg-white mx-auto z-0">
        <div className="absolute inset-0 z-10 pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:pointer-events-none after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:pointer-events-none"></div>
        <motion.div
          className="flex"
          animate={{
            x: ["0%", isDesktop ? "-200%" : "-200%"], // if logos need to be different size, must be proportional to this I think
            transition: {
              ease: "linear",
              duration: 30,
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
                  index % 2 !== 0 ? "mt-6 md:mt-12 lg:mt-20" : ""
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
}

export default PastSponsors;
