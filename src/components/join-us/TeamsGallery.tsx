import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const fakeTeams = [
  {
    name: "Website",
    description:
      "Impressed by our website? Join the website team and help create the next one!",
    aside: "Last updated 5 mins ago",
  },
  {
    name: "Wetlab",
    description:
      "Lorem ipsum dolor amet blah blah blah blah sadfjsldfjls adkdflkj safjsadf",
    aside: "Last updated 5 mins ago",
  },
  {
    name: "CaDNAno",
    description:
      "Lorem ipsum dolor amet blah blah blah blah sadfjsldf jlsadkdflkj safjsadf",
    aside: "Last updated 5 mins ago",
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
            src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
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
          <span className="text-2xl font-semibold">{team.name}</span>
          <p>{team.description}</p>
        </div>
        <span className="font-bold text-sm">{team.aside}</span>
      </motion.div>
    </div>
  );
}

export default TeamsGallery;