import Image from "next/image";
import React from "react";
import ecoscope from "../../assets/sponsors/ecoscope.png";
import google from "../../assets/sponsors/google.png";
import chbe from "../../assets/sponsors/chbe.png";

const sponsorsList = [
  {
    href: "#",
    component: <Image src={ecoscope} alt="Ecoscope Logo" key="Ecoscope" />,
  },
  {
    href: "#",
    component: <Image src={google} alt="Google Logo" key="Google" />,
  },
  {
    href: "#",
    component: <Image src={chbe} alt="CHBE Logo" key="CHBE" />,
  },
  {
    href: "#",
    component: <Image src={ecoscope} alt="Ecoscope Logo" key="Ecoscope" />,
  },
  {
    href: "#",
    component: <Image src={google} alt="Google Logo" key="Google" />,
  },
  {
    href: "#",
    component: <Image src={chbe} alt="CHBE Logo" key="CHBE" />,
  },
];

const Sponsors = () => {
  const steps = [0.25, 0.5, 1, 0.5, 0.25];

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
                {sponsor.component}
              </a>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Sponsors;
