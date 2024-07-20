import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import wetlab from "./wetlab_subteam.jpg";
import cadnano from "./cadnano_subteam.png";
import finance from "./finance_subteam.jpeg";
import video from "./video_subteam.png";
import website from "./website_subteam.jpg";

const fakeTeams = [
  {
    name: "Wetlab",
    description:
      "Lorem ipsum dolor amet blah blah blah blah sadfjsldfjls adkdflkj safjsadf",
    aside: "Last updated 5 mins ago",
    src: wetlab,
  },
  {
    name: "CaDNAno",
    description:
      "Lorem ipsum dolor amet blah blah blah blah sadfjsldfjls adkdflkj safjsadf",
    aside: "Last updated 5 mins ago",
    src: cadnano,
  },
  {
    name: "Finance",
    description:
      "Molecular biology isn't cheap - that's where the finance team comes in! We manage the club's funds and ensure we have the money we need by reaching out to and maintaining contact with sponsors.",
    aside: "Last updated 5 mins ago",
    src: finance,
  },
  {
    name: "Video",
    description:
      "Let your creative side shine with the video team! We create cool videos using tools like Blender to showcase the project that UBC BIOMOD has been working on for the year.",
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

function TeamsGallery() {
  const [index, setIndex] = useState({ curr: 0, prev: -1 });

  function onNavLeft() {
    setIndex((prev) => ({
      curr: prev.curr - 1,
      prev: prev.curr,
    }));
  }

  function onNavRight() {
    setIndex((prev) => ({
      curr: prev.curr + 1,
      prev: prev.curr,
    }));
  }

  const modIndex =
    ((index.curr % fakeTeams.length) + fakeTeams.length) % fakeTeams.length;
  const team = fakeTeams[modIndex];

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
      <h1 className="text-primary text-headingRegMob font-semibold lg:text-headingReg text-center">
        See our amazing subteams
      </h1>
      <div className="bg-white border rounded-xl shadow-sm flex flex-col md:flex-row-reverse gap-4 w-full">
        <div className="relative w-full">
          <motion.div
            className="relative w-full h-full"
            initial={index.prev < index.curr ? "right" : "left"}
            animate="visible"
            exit={index.prev < index.curr ? "left" : "right"}
            key={index.curr}
            variants={animatedDiv}
          >
            <Image
              src={team.src}
              alt="Image"
              width={1051}
              height={591}
              className="w-full rounded-t-xl md:rounded-tl-none md:rounded-r-xl"
            />
          </motion.div>
          <button
            className="absolute top-1/2 left-2 -mt-3 p-2 rounded-full bg-black/30 hover:opacity-80 active:opacity-60 transition-opacity duration-150"
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
          <button
            className="absolute top-1/2 right-2 -mt-3 p-2 rounded-full bg-black/30 hover:opacity-80 active:opacity-60 transition-opacity duration-150"
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
        <motion.div
          className="flex flex-col justify-between gap-4 p-4 md:basis-1/3 shrink-0"
          initial={index.prev < index.curr ? "right" : "left"}
          animate="visible"
          exit={index.prev < index.curr ? "left" : "right"}
          key={index.curr}
          variants={animatedDiv}
        >
          <div className="flex flex-col gap-4">
            <span className="text-headingRegMob text-primary lg:text-headingReg font-semibold">
              {team.name}
            </span>
            <p>{team.description}</p>
          </div>
          {/* <span className="font-bold text-sm">{team.aside}</span> */}
        </motion.div>
      </div>
    </div>
  );
}

export default TeamsGallery;
