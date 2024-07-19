import Image from "next/image";
import React from "react";
import apsc from "./ubc_apsc.jpg";
import sbme from "./ubc_sbme.png";
import msl from "./ubc_msl.png";
import neBiolabs from "./new_england_biolabs.svg";
import tilibit from "./tilibit_nanosystems.jpg";

const sponsorsList = [
  {
    href: "#",
    src: apsc,
    alt: "UBC APSC Logo",
  },
  {
    href: "#",
    src: sbme,
    alt: "UBC SBME Logo",
  },
  {
    href: "#",
    src: msl,
    alt: "UBC Michael Smith Laboratories Logo",
  },
  {
    href: "#",
    src: neBiolabs,
    alt: "New England Biolabs Logo",
  },
  {
    href: "#",
    src: tilibit,
    alt: "Tilibit Nanosystems Logo",
  },
];

const Sponsors = () => {
  const steps = [0.2, 0.6, 1, 0.6, 0.2];

  return (
    <div className="flex flex-col items-center gap-8 overflow-hidden">
      {steps.map((opacity, i) => {
        return (
          <div
            className="flex gap-4 items-center justify-between"
            key={opacity + i + ""}
            style={{ opacity: opacity }}
          >
            {sponsorsList.map((sponsor, k) => (
              <a href={sponsor.href} target="_blank" key={sponsor.href + k}>
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-32 w-auto"
                />
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Sponsors;
