import Image from "next/image";
import { useRef, useState } from "react";
import { DragHandlers, motion } from "framer-motion";
import wetlab from "./wetlab_subteam.jpg";
import comp_modeling from "./comp_modeling_subteam.png";
import finance from "./finance_subteam.jpeg";
import video from "./video_subteam.png";
import website from "./website_subteam.jpg";

const teamsList = [
  {
    name: "Wetlab",
    description:
      "The wetlab team is responsible for all of our experiments. They are involved throughout the entire process, from conducting literature reviews and writing protocols to performing experiments, analyzing data, and producing final reports. They also collaborate closely with the computational and modeling team to develop new projects through literature searches and client reviews. In the past, we have conducted experiments involving cell culture, bacterial work, drug delivery, DNA origami, among others. If you are interested in participating in the entire scientific process, consider joining our wetlab team!",
    aside: "Last updated 5 mins ago",
    src: wetlab,
  },
  {
    name: "Computational and Modeling",
    description:
      "Previously known as the Cadnano team, we have expanded this team’s responsibilities to include running simulations and modeling different scenarios to supplement our wetlab experiments. The results from our dry lab are crucial as they support our wetlab experiments and help determine whether we should proceed with certain experiments. The team uses a variety of software and programming languages, such as Biopython, COMSOL, Marvin, and Swiss, to achieve their results. If you are interested in computational biology, AI, modeling, and learning different software, the computational and modeling team is the right fit for you!",
    aside: "Last updated 5 mins ago",
    src: comp_modeling,
  },
  {
    name: "Finance",
    description:
      "Our finance subteam helps secure funding to purchase reagents for the wetlab, send team members to competitions, and cover expenses for social events. They represent our team in securing partnerships with sponsors and maintaining good relationships with them. Additionally, they identify various opportunities to secure funding through grants, competitions, and fundraising. If you are interested in finance or business development, joining our finance subteam would be a great fit for you!",
    aside: "Last updated 5 mins ago",
    src: finance,
  },
  {
    name: "Video",
    description:
      "Our video subteam focuses on the skills needed for effective science communication. Each year, we are required to submit a 3-minute video about that year's project. The video subteam uses skills in 2D animation and 3D modeling to convey the complexity of our project using a variety of techniques. They manage the entire video production process, from creating the storyboard and writing scripts to drawing/modeling, voiceover work, and editing. If you have an interest in visual art, science, or science communication, you should consider applying to our video subteam!",
    aside: "Last updated 5 mins ago",
    src: video,
  },
  {
    name: "Social Media",
    description:
      "If you're passionate about outreach, the social media team might be for you! We work on initiatives to help grow the club and reach a wider audience. We also plan fun internal events!",
    aside: "Last updated 5 mins ago",
    src: website,
  },
  {
    name: "Website",
    description:
      "Hate this website? Join the website team to improve it! We're responsible for developing the main club website, as well as developing yearly websites to showcase UBC BIOMOD's project submissions to the BIOMOD competition!",
    aside: "Your 2023 website team!",
    src: website,
  },
];

function getModIndex(index: number) {
  return ((index % teamsList.length) + teamsList.length) % teamsList.length;
}

function TeamsGallery() {
  const [index, setIndex] = useState({ curr: 0, prev: -1 });
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onNav(newIndex: number) {
    setIndex((prev) => ({
      curr: newIndex,
      prev: prev.curr,
    }));
  }

  function onNavLeft() {
    setIndex((prev) => {
      buttons.current[getModIndex(prev.curr - 1)]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      return {
        curr: prev.curr - 1,
        prev: prev.curr,
      };
    });
  }

  function onNavRight() {
    setIndex((prev) => {
      buttons.current[getModIndex(prev.curr + 1)]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
      return {
        curr: prev.curr + 1,
        prev: prev.curr,
      };
    });
  }

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const onDragEnd: DragHandlers["onDragEnd"] = (
    event,
    { offset, velocity }
  ) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      onNavRight();
    } else if (swipe > swipeConfidenceThreshold) {
      onNavLeft();
    }
  };

  const modIndex = getModIndex(index.curr);
  const team = teamsList[modIndex];

  const animatedDiv = {
    left: {
      x: -100,
      opacity: 0,
    },
    right: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <h1 className="text-primary text-headingRegMob font-semibold lg:text-headingReg text-center font-title">
        See our amazing subteams
      </h1>
      <div className="flex gap-2 bg-white border rounded-3xl p-1 overflow-x-scroll w-full lg:w-auto">
        {teamsList.map((team, i) => (
          <button
            className={`px-3 py-2 rounded-full shrink-0 ${
              modIndex === i
                ? "bg-primary text-white"
                : "bg-white hover:bg-primary hover:text-white"
            } transition-colors duration-150`}
            key={team.name}
            onClick={() => onNav(i)}
            ref={(el) => {
              buttons.current[i] = el;
            }}
          >
            {team.name}
          </button>
        ))}
      </div>
      <div className="flex gap-4 lg:gap-8 items-center w-full">
        <button
          className="p-2 lg:p-3 rounded-full bg-black/30 hover:opacity-80 active:opacity-60 transition-opacity duration-150"
          onClick={onNavLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <motion.div
          className="bg-white border rounded-xl shadow-sm flex flex-col md:flex-row-reverse gap-4 w-full"
          initial={index.prev < index.curr ? "right" : "left"}
          animate="visible"
          exit={index.prev < index.curr ? "left" : "right"}
          key={index.curr}
          variants={animatedDiv}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDragEnd}
        >
          <Image
            src={team.src}
            alt="Image"
            width={1051}
            height={591}
            className="w-full object-cover rounded-t-xl md:rounded-tl-none md:rounded-r-xl pointer-events-none"
          />
          <div className="flex flex-col justify-between gap-4 p-4 md:basis-1/3 shrink-0">
            <div className="flex flex-col gap-4">
              <span className="text-headingRegMob text-primary lg:text-headingReg font-semibold">
                {team.name}
              </span>
              <p>{team.description}</p>
            </div>
            {/* <span className="font-bold text-sm">{team.aside}</span> */}
          </div>
        </motion.div>
        <button
          className="p-2 lg:p-3 rounded-full bg-black/30 hover:opacity-80 active:opacity-60 transition-opacity duration-150"
          onClick={onNavRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TeamsGallery;
