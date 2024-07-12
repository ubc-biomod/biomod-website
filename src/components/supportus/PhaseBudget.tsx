import React, { useState, useEffect } from "react";
import ideaImg from "@/assets/supportus/ideablue.jpg";
import Image, { StaticImageData } from "next/image";

type Phase = {
  image: StaticImageData;
  header: string;
  text: string;
};

const phaseData: Phase[] = [
  {
    image: ideaImg,
    header: "Phase 1: Ideation",
    text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book. ",
  },
  {
    image: ideaImg,
    header: "Phase 2: Prototype",
    text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.",
  },
  {
    image: ideaImg,
    header: "Phase 3: Experiment",
    text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.",
  },
  {
    image: ideaImg,
    header: "Phase 4: Validation",
    text: "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard  dummy text ever since the 1500s, when an unknown printer took a galley  of type and scrambled it to make a type specimen book.",
  },
];

const PhaseBudget: React.FC = () => {
  const [currentContent, setCurrentContent] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % phaseData.length);
      setFadeIn(true);
    }, 300);
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentContent((prevContent) =>
        prevContent === 0 ? phaseData.length - 1 : prevContent - 1
      );
      setFadeIn(true);
    }, 300);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      if (intervalId) clearInterval(intervalId);
      setIsPlaying(false);
    } else {
      const id = setInterval(handleNext, 5000);
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    setFadeIn(true);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const { image, header, text } = phaseData[currentContent];

  return (
    <div className="flex flex-col p-2">
      <h2 className="text-3xl text-primary font-bold mb-6 mx-auto">
        The budget of each phase
      </h2>
      <div
        className={`transition-opacity duration-300 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src={image} alt={header} className="rounded-2xl" />
        <h3 className="text-xl text-primary font-bold my-6">{header}</h3>
        <p className="mb-4 text-primary">{text}</p>
      </div>
      <hr className="my-4 border-0 h-[1px] bg-primary" />
      <div className="flex items-center justify-between">
        <div className="flex">
          <button
            className="bg-primary text-gray-200 font-bold py-2 px-2 rounded-md"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
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
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
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
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </button>
          <button
            className="bg-primary text-gray-200 font-bold py-2 px-2 rounded-md ml-6"
            onClick={handlePrev}
          >
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
          </button>
          <button
            className="bg-primary text-gray-200 font-bold py-2 px-2 rounded-md ml-1"
            onClick={handleNext}
          >
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
          </button>
        </div>
        <div className="ml-4 text-primary">
          {currentContent + 1}/{phaseData.length}
        </div>
      </div>
    </div>
  );
};

export default PhaseBudget;
