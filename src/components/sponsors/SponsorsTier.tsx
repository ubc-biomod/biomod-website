import React, { useState } from "react";

import sbme from "./sbme.png";
import apsc from "./apsc.png";
import msl from "./msl.png";
import neBiolabs from "./ne_biolabs.jpg";
import tilibit from "./tilibit.jpg";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import DNAButton from "./DNAButton";

enum Tier {
  PLAT = 0,
  GOLD = 1,
  SILVER = 2,
  BRONZE = 3,
}

type ContentItem = {
  image: StaticImageData;
  header: string;
  subheader: string;
  text: string;
  link: string;
};

const platContentData: ContentItem[] = [
  {
    image: apsc,
    header: "UBC Faculty of Applied Science",
    subheader: "Gold Subheader 1",
    text: "UBC Applied Science comprises a unique constellation of disciplines. Our core purpose is to discover, design, innovate, provide unwavering top-tier education and champion a community of responsible professionals.",
    link: "https://apsc.ubc.ca/",
  },
  {
    image: sbme,
    header: "UBC School of Biomedical Engineering",
    subheader: "Gold Subheader 2",
    text: "Created in 2017 through a partnership between the Faculties of Applied Science and Medicine, and enabled by the leadership of British Columbia's provincial government, the School of Biomedical Engineering (SBME) is Canada's living laboratory for new models of convergent research and education.",
    link: "https://bme.ubc.ca/",
  },
];

const bronzeContentData: ContentItem[] = [
  {
    image: msl,
    header: "UBC Michael Smith Laboratories",
    subheader: "Bronze Subheader 2",
    text: "Envisioned by Dr. Michael Smith, a Nobel Laureate and a pioneer at the interface of biology and technology, UBC’s Biotechnology Laboratory (later renamed in 2004 when the new building opened as the Michael Smith Laboratories) was the first of its kind: a dynamic hub that includes clusters of interdisciplinary researchers working together, under one roof. Fast-forward two decades, the Michael Smith Laboratories (MSL) is now home to a team of researchers from a number of faculties including Science, Medicine, Applied Science, Forestry, and Land and Food Systems.",
    link: "https://www.msl.ubc.ca/",
  },
  {
    image: neBiolabs,
    header: "New England Biolabs",
    subheader: "Bronze Subheader 3",
    text: 'Created "by scientists for scientists", NEB is renowned for consistently providing exceptional product quality and unsurpassed technical support. For over four decades, NEB has been shaping the landscape of bioscience research by discovering, developing and supporting superior research reagents. From our founding principles – placing the advancement of science and the stewardship of the environment as our highest priorities – to our unique corporate culture, NEB’s philosophy can be distilled down to three core values: passion, humility and being genuine.',
    link: "https://www.neb.ca/about.php",
  },
  {
    image: tilibit,
    header: "Tilibit Nanosystems",
    subheader: "Bronze Subheader 4",
    text: "We believe that we can revolutionize nanoscale engineering through molecular information technology. We do this by programming DNA - the highest information density material in the world - to self-assemble into defined structures of arbitrary shape. This allows us to create devices of unprecedented complexity with nanometer accuracy. By engineering information rather than methods, we can deliver products of exceptional quality.",
    link: "https://www.tilibit.com/",
  },
];

const contentData: Record<Tier, ContentItem[]> = {
  [Tier.PLAT]: platContentData,
  [Tier.GOLD]: [],
  [Tier.SILVER]: [],
  [Tier.BRONZE]: bronzeContentData,
};

function SponsorsTier() {
  const [sponsorIndex, setSponsorIndex] = useState({ curr: 0, prev: 0 });
  const [tierIndex, setTierIndex] = useState({ curr: Tier.PLAT, prev: -1 });

  function onNavLeft() {
    setSponsorIndex((prev) => ({
      curr: prev.curr - 1,
      prev: prev.curr,
    }));
  }

  function onNavRight() {
    setSponsorIndex((prev) => ({
      curr: prev.curr + 1,
      prev: prev.curr,
    }));
  }

  function onNav(newIndex: number) {
    setSponsorIndex((prev) => ({
      curr: newIndex,
      prev: prev.curr,
    }));
  }

  const handleContentChange = (contentType: Tier) => {
    setTierIndex((prev) => ({
      curr: contentType,
      prev: prev.curr,
    }));

    // Reset currentContent to the first item in the new content data
    setSponsorIndex({ curr: 0, prev: 0 });
  };

  const currentContentData = contentData[tierIndex.curr];

  const modIndex =
    ((sponsorIndex.curr % currentContentData.length) +
      currentContentData.length) %
    currentContentData.length;

  const { image, header, subheader, text, link } = currentContentData[modIndex];

  const animatedDiv = {
    left: {
      x: -100,
      opacity: 0,
    },
    right: {
      x: 100,
      opacity: 0,
    },
    up: {
      y: -100,
      opacity: 0,
    },
    down: {
      y: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col sm:flex-row items-center rounded-xl bg-white border shadow-sm w-full lg:w-11/12 py-4 lg:p-8 gap-4">
      {/* DNA Pic */}
      <div className="hidden lg:flex items-center">
        <DNAButton
          onPlatHandler={() => handleContentChange(Tier.PLAT)}
          onBronzeHandler={() => handleContentChange(Tier.BRONZE)}
        />
      </div>
      <nav
        className="flex lg:hidden space-x-1"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          className={`btn ${
            tierIndex.curr === Tier.PLAT ? "btn--primary" : ""
          }`}
          role="tab"
          onClick={() => handleContentChange(Tier.PLAT)}
        >
          Platinum
        </button>
        <button
          type="button"
          className={`btn ${
            tierIndex.curr === Tier.BRONZE ? "btn--primary" : ""
          }`}
          role="tab"
          onClick={() => handleContentChange(Tier.BRONZE)}
        >
          Bronze
        </button>
      </nav>

      {/* Right Content */}
      <motion.div
        className="grow p-4 flex flex-col gap-4"
        initial={tierIndex.prev < tierIndex.curr ? "down" : "up"}
        animate="visible"
        exit={tierIndex.prev < tierIndex.curr ? "up" : "down"}
        key={tierIndex.curr}
        variants={animatedDiv}
      >
        <div className="flex flex-row items-center justify-between sm:h-[500px] lg:h-[350px]">
          <button
            type="button"
            className="sm:mx-10 mr-3 p-2 disabled:pointer-events-none rounded-lg text-slate-700 hover:bg-black/10"
            onClick={onNavLeft}
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <motion.div
            className="h-full grow flex flex-col justify-center gap-4"
            initial={
              sponsorIndex.prev < sponsorIndex.curr
                ? "right"
                : sponsorIndex.prev > sponsorIndex.curr
                ? "left"
                : "visible"
            }
            animate="visible"
            exit={
              sponsorIndex.prev < sponsorIndex.curr
                ? "left"
                : sponsorIndex.prev > sponsorIndex.curr
                ? "right"
                : "visible"
            }
            key={sponsorIndex.curr}
            variants={animatedDiv}
          >
            <header className="flex items-center">
              <Image
                src={image.src}
                alt={header}
                className="w-12 h-12 lg:w-16 lg:h-16 mr-4 shadow-md"
                width={48}
                height={48}
              />
              <h2 className="text-xl lg:text-2xl font-bold black">{header}</h2>
            </header>
            <p className="overflow-y-scroll">{text}</p>
            <a
              className="link text-primary hover:opacity-80"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore More
            </a>
          </motion.div>
          <button
            type="button"
            className="sm:mx-10 p-2 disabled:pointer-events-none rounded-lg text-slate-700 hover:bg-black/10"
            onClick={onNavRight}
          >
            <span className="text-2xl" aria-hidden="true">
              <svg
                className="flex-shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Next</span>
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="my-5 flex justify-center">
          {currentContentData.map((content, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full mx-2 transition-all duration-150"
              onClick={() => onNav(i)}
              style={{
                transform: `scale(${modIndex === i ? 1.5 : 1})`,
              }}
            >
              <Image
                src={content.image.src}
                alt={content.header}
                className="w-8 h-8 shadow-sm"
                layout="fill"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SponsorsTier;
