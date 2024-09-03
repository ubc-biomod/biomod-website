import React, { useState, useEffect } from "react";
import ideationImg from "./ideation.jpg";
import prototypeImg from "./prototype.png";
import validImg from "./validation.png";
import experimentImg from "./experiment.jpg";
import presentationImg from "./presentation.jpg";
import Image, { StaticImageData } from "next/image";
import dots from "@/assets/dots.png";
type Phase = {
  image: StaticImageData;
  header: string;
  text: string;
};

const phaseData: Phase[] = [
  {
    image: ideationImg,
    header: "Phase 1: Ideation",
    text: "Our wetlab subteam alongside the computational and modelling subteam, conduct literature reviews and work together to generate a project idea. Our team then reaches out to UBC professors researching topics similar to our project idea to assist us in scoping out the project. During this stage of the project, we spend a small portion of our budget (~$300) to register for the BIOMOD Jamboree competition.",
  },
  {
    image: prototypeImg,
    header: "Phase 2: Prototype",
    text: "Our computational and modelling subteam will begin to prototype digital designs of our biomolecule to perform stability tests on the design. Simultaneously, the wetlab subteam will perform research to fabricate protocol documents for the team to refer to during the experiment phase of the project. The main costs (~$250) associated with this stage of the project are related to licenses and subscriptions for softwares and online tools to assist our team in testing the model.",
  },
  {
    image: experimentImg,
    header: "Phase 3: Experiment",
    text: "During the experiment phase, our wetlab team performs the protocols written during the prototype phase. The primary objective of the experiment phase is to create our project design through a series of labs. In order to execute the protocols, our wetlab subteam requires various lab related materials such as consumables and reagents. Majority of our budget (~$8,000-10,000) is typically spent on lab-related items to provide the necessary materials for the wetlab subteam.",
  },
  {
    image: validImg,
    header: "Phase 4: Validation",
    text: "The validation stage is closely related to the experiment phase as we need to validate the expected outcomes of our design. To do this, we test specific aspects of the design to prove their intended functionality. The materials required for the validation test are typically bought during the experiment phase alongside the lab paraphernalia we purchase. Therefore, our team does not spend more of our budget during this stage.",
  },
  {
    image: presentationImg,
    header: "Phase 5: Presentation",
    text: "For the final stage, our team prepares to present our findings at the annual BIOMOD Jamboree. Every year, our team sends 8 of our highest contributing members to present the project alongside its results on an international stage at the Jamboree. Another big chunk (~$8,000) of our budget is spent covering the travel costs for our team members and this marks the final expenditures our team is subjected to in a project timeline.",
  },
];

function PhaseBudget() {
  const [currentContent, setCurrentContent] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentContent((prevContent) => (prevContent + 1) % phaseData.length);
      setFadeIn(true);
    }, 150);
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentContent((prevContent) =>
        prevContent === 0 ? phaseData.length - 1 : prevContent - 1
      );
      setFadeIn(true);
    }, 150);
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

  const handleNavClick = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentContent(index);
      setFadeIn(true);
    }, 150);
  };

  useEffect(() => {
    setFadeIn(true);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const { image, header, text } = phaseData[currentContent];

  return (
    <div className="relative flex flex-col gap-y-[1rem]">
      <h2
        className="text-primary text-headingRegMob font-semibold
        lg:text-headingReg font-title"
      >
        The budget of each phase
      </h2>
      <Image
        src={dots}
        alt="Background"
        className="absolute right-0 top-36 -z-10 hidden md:block"
      />
      {/* Need to make it so transition doesnt happen for nav buttons*/}
      <div className="transition-opacity duration-300 md:flex md:flex-row md:justify-between h-full">
        <div className=" hidden w-1/4 md:flex">
          <div className="flex-col md:flex mx-auto md:my-auto md:space-y-8 lg:space-y-10">
            {phaseData.map((phase, index) => (
              <button
                key={index}
                className={`bg-none text-primary px-[16px] underline text-left ${
                  currentContent === index
                    ? "border-l-4 border-primary pl-[12px]"
                    : ""
                }`}
                onClick={() => handleNavClick(index)}
              >
                {phase.header}
              </button>
            ))}
          </div>
        </div>
        <div
          className={`transition-opacity fade-300 h-[25rem] md:w-2/5 md:h-[40rem] bg-contain bg-no-repeat bg-center 
          ${fadeIn ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
        <div
          className={`transition-opacity fade-300 flex flex-col my-auto md:mx-12 md:w-1/4 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl md:text-3xl text-primary font-bold my-6">
            {header}
          </h3>
          <p className="mb-4 text-primary md:text-sm">{text}</p>
        </div>
      </div>
      <hr className="my-4 border-0 h-[1px] bg-primary md:hidden" />
      <div className="flex items-center justify-between md:hidden">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
}

export default PhaseBudget;
