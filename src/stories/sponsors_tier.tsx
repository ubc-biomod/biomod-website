import React, { useState, useEffect } from "react";
import Image from "next/image";

import "./sponsors_tier.css";
import { on } from "events";

type ContentItem = {
  image: string;
  header: string;
  subheader: string;
  text: string;
  link: string;
};

export const Sponsors_Tier: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const goldContentData: ContentItem[] = [
    {
      image: "/vercel.svg",
      header: "Gold Sponsor 1",
      subheader: "Gold Subheader 1",
      text: "Gold sponsor description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi diam tortor, condimentum et mauris vitae, dapibus pretium justo. Suspendisse velit ex, luctus ac quam at, feugiat laoreet quam. Aenean a tortor tristique, commodo quam a, volutpat nisi. Morbi fermentum eu magna ut luctus. Duis ac sollicitudin lectus. Ut sodales convallis tempus. Aliquam et purus lacinia, pulvinar eros a, bibendum justo.",
      link: "https://google.com",
    },
    {
      image: "./gold_img1.jpg",
      header: "Gold Sponsor 2",
      subheader: "Gold Subheader 2",
      text: "Gold sponsor description 2",
      link: "https://google.com",
    },
    {
      image: "./gold_img1.jpg",
      header: "Gold Sponsor 3",
      subheader: "Gold Subheader 3",
      text: "Gold sponsor description 3",
      link: "https://google.com",
    },
  ];

  const silverContentData: ContentItem[] = [
    {
      image: "./silver_img1.jpg",
      header: "Silver Sponsor 1",
      subheader: "Silver Subheader 1",
      text: "Silver sponsor description 1",
      link: "https://facebook.com",
    },
    {
      image: "./silver_img1.jpg",
      header: "Silver Sponsor 2",
      subheader: "Silver Subheader 2",
      text: "Silver sponsor description 2",
      link: "https://facebook.com",
    },
    {
      image: "./silver_img1.jpg",
      header: "Silver Sponsor 3",
      subheader: "Silver Subheader 3",
      text: "Silver sponsor description 3",
      link: "https://facebook.com",
    },
  ];

  const bronzeContentData: ContentItem[] = [
    {
      image: "./bronze_img1.jpg",
      header: "Bronze Sponsor 1",
      subheader: "Bronze Subheader 1",
      text: "Bronze sponsor description 1",
      link: "https://yahoo.com",
    },
    {
      image: "./bronze_img1.jpg",
      header: "Bronze Sponsor 2",
      subheader: "Bronze Subheader 2",
      text: "Bronze sponsor description 2",
      link: "https://yahoo.com",
    },
    {
      image: "./bronze_img1.jpg",
      header: "Bronze Sponsor 3",
      subheader: "Bronze Subheader 3",
      text: "Bronze sponsor description 3",
      link: "https://yahoo.com",
    },
  ];

  const [currentContentData, setCurrentContentData] =
    useState<ContentItem[]>(goldContentData);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right" | "newCard" | ""
  >("");

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setTransitionDirection("");
  };

  const handleNavigation = (direction: "prev" | "next") => {
    setIsTransitioning(true);

    if (direction === "prev") {
      setCurrentContent((prev) =>
        prev > 0 ? prev - 1 : currentContentData.length - 1
      );
      setTransitionDirection("left");
    } else {
      setCurrentContent((prev) =>
        prev < currentContentData.length - 1 ? prev + 1 : 0
      );
      setTransitionDirection("right");
    }
  };

  const handleContentChange = (contentType: "gold" | "silver" | "bronze") => {
    setIsTransitioning(true);

    switch (contentType) {
      case "gold":
        setCurrentContentData(goldContentData);
        break;
      case "silver":
        setCurrentContentData(silverContentData);
        break;
      case "bronze":
        setCurrentContentData(bronzeContentData);
        break;
      default:
        setCurrentContentData(goldContentData);
    }

    // Reset currentContent to the first item in the new content data
    setCurrentContent(0);
    setTransitionDirection("newCard");
  };

  const { image, header, subheader, text, link } =
    currentContentData[currentContent];

  return (
    <div
      className={`flex mobile-response flex-col bg-white border rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      {/* DNA Pic */}
      <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
        <div className="dna-pic">
          {/* Navigation buttons for different sponsor types */}
          <button
            className="content-button text-white"
            onClick={() => handleContentChange("gold")}
          >
            Gold Sponsors
          </button>
          <button
            className="content-button text-white"
            onClick={() => handleContentChange("silver")}
          >
            Silver Sponsors
          </button>
          <button
            className="content-button text-white"
            onClick={() => handleContentChange("bronze")}
          >
            Bronze Sponsors
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className={`flex flex-wrap w-full px-10`}>
        <div
          className={`p-4 flex flex-col h-full w-full sm:p-7  ${
            transitionDirection === "left" ? "cardTransitionLeft" : ""
          }
    ${transitionDirection === "right" ? "cardTransitionRight" : ""}
    ${transitionDirection === "newCard" ? "newCardTransition" : ""}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <div className="flex flex-row items-center">
            <div className="logo-temp"></div>
            <h2 className="text-2xl font-bold">{header}</h2>
          </div>
          <h3 className="text-lg subheader">{subheader}</h3>
          <p>{text}</p>
          <a
            className="link explore-more"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More
          </a>

          {/* Navigation Bar */}
          <div className="mt-5 sm:mt-auto flex justify-center">
            <button
              className="p-2 nav-button"
              onClick={() => handleNavigation("prev")}
            >
              &lt;
            </button>
            {/* Map through contentData to create image icons */}
            {currentContentData.map((content, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full contentDataPlaceholder ${
                  currentContent === index
                    ? "border-2 border-blue-500 green"
                    : ""
                }`}
                onClick={() => setCurrentContent(index)}
                style={{
                  transform: `scale(${currentContent === index ? 1.2 : 1})`,
                }}
              />
            ))}
            <button
              className="p-2 nav-button"
              onClick={() => handleNavigation("next")}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors_Tier;
