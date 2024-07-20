import Image from "next/image";
import React from "react";
import apsc from "./ubc_apsc.jpg";
import sbme from "./ubc_sbme.png";
import msl from "./ubc_msl.png";
import neBiolabs from "./new_england_biolabs.svg";
import tilibit from "./tilibit_nanosystems.jpg";
import Link from "next/link";

const sponsorsList = [
  {
    href: "https://apsc.ubc.ca/",
    src: apsc,
    alt: "UBC APSC Logo",
  },
  {
    href: "https://bme.ubc.ca/",
    src: sbme,
    alt: "UBC SBME Logo",
  },
  {
    href: "https://www.msl.ubc.ca/",
    src: msl,
    alt: "UBC Michael Smith Laboratories Logo",
  },
  {
    href: "https://www.neb.ca/",
    src: neBiolabs,
    alt: "New England Biolabs Logo",
  },
  {
    href: "https://www.tilibit.com/",
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
                  className="h-8 sm:h-12 md:h-28 lg:h-32 w-auto"
                />
              </a>
            ))}
          </div>
        );
      })}
      <Link
        href="/sponsors"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none"
      >
        Learn More
      </Link>
    </div>
  );
};

export default Sponsors;
