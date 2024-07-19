import React, { useState } from "react";
import amazonIcon from "@/assets/sponsors/amazon-logo.png";
import googleIcon from "@/assets/sponsors/google-logo.png";
import drracketIcon from "@/assets/sponsors/drracket-logo.png";
import microsoftIcon from "@/assets/sponsors/microsoft-logo.png";
import teslaIcon from "@/assets/sponsors/tesla-logo.png";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

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

const goldContentData: ContentItem[] = [
  {
    image: googleIcon,
    header: "Gold Sponsor 1",
    subheader: "Gold Subheader 1",
    text: "Gold sponsor description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam tortor, condimentum et mauris vitae, dapibus pretium justo. Suspendisse velit ex, luctus ac quam at, feugiat laoreet quam. Aenean a tortor tristique, commodo quam a, volutpat nisi. Morbi fermentum eu magna ut luctus. Duis ac sollicitudin lectus. Ut sodales convallis tempus. Aliquam et purus lacinia, pulvinar eros a, bibendum justo.",
    link: "https://google.com",
  },
  {
    image: drracketIcon,
    header: "Gold Sponsor 2",
    subheader: "Gold Subheader 2",
    text: "Gold sponsor description 2",
    link: "https://google.com",
  },
  {
    image: amazonIcon,
    header: "Gold Sponsor 3",
    subheader: "Gold Subheader 3",
    text: "Gold sponsor description 3",
    link: "https://google.com",
  },
];

const silverContentData: ContentItem[] = [
  {
    image: microsoftIcon,
    header: "Silver Sponsor 1",
    subheader: "Silver Subheader 1",
    text: "Silver sponsor description 1",
    link: "https://facebook.com",
  },
  {
    image: teslaIcon,
    header: "Silver Sponsor 2",
    subheader: "Silver Subheader 2",
    text: "Silver sponsor description 2",
    link: "https://facebook.com",
  },
  {
    image: amazonIcon,
    header: "Silver Sponsor 3",
    subheader: "Silver Subheader 3",
    text: "Silver sponsor description 3",
    link: "https://facebook.com",
  },
];

const bronzeContentData: ContentItem[] = [
  {
    image: drracketIcon,
    header: "Bronze Sponsor 1",
    subheader: "Bronze Subheader 1",
    text: "Bronze sponsor description 1",
    link: "https://yahoo.com",
  },
  {
    image: googleIcon,
    header: "Bronze Sponsor 2",
    subheader: "Bronze Subheader 2",
    text: "Bronze sponsor description 2",
    link: "https://yahoo.com",
  },
  {
    image: teslaIcon,
    header: "Bronze Sponsor 3",
    subheader: "Bronze Subheader 3",
    text: "Bronze sponsor description 3",
    link: "https://yahoo.com",
  },
  {
    image: amazonIcon,
    header: "Bronze Sponsor 4",
    subheader: "Bronze Subheader 4",
    text: "Bronze sponsor description 4",
    link: "https://yahoo.com",
  },
];

const contentData: Record<Tier, ContentItem[]> = {
  [Tier.PLAT]: [],
  [Tier.GOLD]: goldContentData,
  [Tier.SILVER]: silverContentData,
  [Tier.BRONZE]: bronzeContentData,
};

function SponsorsTier() {
  const [sponsorIndex, setSponsorIndex] = useState({ curr: 0, prev: 0 });
  const [tierIndex, setTierIndex] = useState({ curr: Tier.GOLD, prev: -1 });

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
    <div className="flex flex-col sm:flex-row rounded-xl bg-white border shadow-sm w-full md:p-8">
      {/* DNA Pic */}
      <div className="flex items-center">
        <div className="flex md:flex-col flex-row m-auto md:w-28 md:h-80 w-56 h-16 my-3 bg-red-500 content-center justify-around">
          {/* Navigation buttons for different sponsor types */}
          <button
            className="text-white"
            onClick={() => handleContentChange(Tier.GOLD)}
          >
            Gold Sponsors
          </button>
          <button
            className="text-white"
            onClick={() => handleContentChange(Tier.SILVER)}
          >
            Silver Sponsors
          </button>
          <button
            className="text-white"
            onClick={() => handleContentChange(Tier.BRONZE)}
          >
            Bronze Sponsors
          </button>
        </div>
      </div>

      {/* Right Content */}
      <motion.div
        className="grow p-4 flex flex-col gap-4"
        initial={tierIndex.prev < tierIndex.curr ? "down" : "up"}
        animate="visible"
        exit={tierIndex.prev < tierIndex.curr ? "up" : "down"}
        key={tierIndex.curr}
        variants={animatedDiv}
      >
        <div className="flex flex-row items-center justify-between h-[600px] sm:h-[500px] md:h-[350px]">
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </span>
            <span className="sr-only">Previous</span>
          </button>
          <motion.div
            className="grow flex flex-col gap-4"
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
                className="w-16 h-16 mr-4"
                width={16}
                height={16}
              />
              <h2 className="text-2xl font-bold black">{header}</h2>
            </header>
            <p>{text}</p>
            <a
              className="link text-blue-500 hover:text-blue-700"
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                className="w-8 h-8"
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
