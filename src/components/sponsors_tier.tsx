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

export const SponsorsTier: React.FC = () => {
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
      className={`flex sm: flex-col sm:flex-row bg-white border rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]`}
    >
      {/* DNA Pic */}
      <div className="flex flex-row flex-shrink-0 w-full rounded-t-xl overflow-hidden sm:rounded-s-xl sm:w-1/4 md:rounded-se-none md:max-w-2/5 h-20 md:h-auto bg-emerald-500 content-center">
        <div className="flex md:flex-col flex-row m-auto md:w-2/5 md:h-4/5 w-4/5 h-4/5 bg-red-500 content-center justify-around">
          {/* Navigation buttons for different sponsor types */}
          <button
            className="content-button"
            onClick={() => handleContentChange("gold")}
          >
            Gold Sponsors
          </button>
          <button
            className="content-button"
            onClick={() => handleContentChange("silver")}
          >
            Silver Sponsors
          </button>
          <button
            className="content-button"
            onClick={() => handleContentChange("bronze")}
          >
            Bronze Sponsors
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className={`flex flex-wrap w-full sm:px-5`}>
        <div
          className={`p-4 flex flex-col h-full w-full sm:p-7  ${
            transitionDirection === "left" ? "cardTransitionLeft" : ""
          }
    ${transitionDirection === "right" ? "cardTransitionRight" : ""}
    ${transitionDirection === "newCard" ? "newCardTransition" : ""}`}
          onAnimationEnd={handleTransitionEnd}
        >
          <div className="flex flex-row items-center justify-between">
            <button
              className="nav-button sm:mx-10 mr-3"
              onClick={() => handleNavigation("prev")}
            >
              &lt;
            </button>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <div className="logo-temp"></div>
                <h2 className="text-2xl font-bold black">{header}</h2>
              </div>
              <h3 className="text-lg subheader">{subheader}</h3>
              <p className="black">{text}</p>
              <a
                className="link explore-more"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore More
              </a>
            </div>
            <button
              className="nav-button sm:mx-10 ml-3"
              onClick={() => handleNavigation("next")}
            >
              &gt;
            </button>
          </div>

          {/* Navigation Bar */}
          <div className="my-5 flex justify-center">
            {/* Map through contentData to create image icons */}
            {currentContentData.map((content, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full contentDataPlaceholder`}
                onClick={() => setCurrentContent(index)}
                style={{
                  transform: `scale(${currentContent === index ? 1.5 : 1})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsTier;
