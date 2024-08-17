import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const members: MemberInfo[] = [
  {
    name: "John Cena 1",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 2",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 3",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 4",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 5",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 6",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 7",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 8",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
  {
    name: "John Cena 9",
    description: "The invisible man",
    photo: "",
    teams: ["wetlab", "web"],
  },
];

export default function Team() {
  const FAST = 20;
  const SLOW = 45;
  const xDiff = useMotionValue(0);
  const [speed, setSpeed] = useState(FAST);
  // if the animation is in progress
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    const finalPos = (-320 - 24) * members.length; // must change values if card sizes change
    let controls;

    controls = !isInProgress
      ? animate(xDiff, [0, finalPos], {
          ease: "linear",
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        })
      : animate(xDiff, [xDiff.get(), finalPos], {
          ease: "linear",
          duration: speed * (1 - xDiff.get() / finalPos),
          onComplete: () => {
            setIsInProgress(false);
          },
        });

    return controls.stop;
  }, [xDiff, speed, isInProgress]);

  return (
    <div className="flex flex-col gap-y-6 w-full overflow-hidden">
      <h1 className="text-primary font-bold text-center text-4xl md:text-6xl">
        Some Cool Tagline about BIOMOD
      </h1>
      <h2 className="text-primary text-xl md:text-2xl text-center">
        Meet some of the faces behind BIOMOD
      </h2>

      <motion.div
        className="flex flex-row gap-x-6"
        style={{ x: xDiff }}
        onHoverStart={() => {
          setSpeed(SLOW), setIsInProgress(true);
        }}
        onHoverEnd={() => {
          setSpeed(FAST), setIsInProgress(true);
        }}
      >
        {[...members, ...members].map((m, i) => (
          <MemberCard key={m.name + i} {...m} />
        ))}
      </motion.div>
    </div>
  );
}

type MemberInfo = {
  name: string;
  description: string;
  photo: string;
  teams: string[];
};

function MemberCard(member: MemberInfo) {
  return (
    <div
      className="flex flex-col bg-gray-600 w-80 h-96 justify-end rounded-3xl
            px-4 py-5 hover:opacity-60 cursor-pointer shrink-0"
    >
      <div className="flex flex-col gap-y-6">
        <div>
          <h4 className="text-white font-bold">{member.name}</h4>
          <p className="text-white">{member.description}</p>
        </div>
        <div className="flex flex-row gap-x-7 justify-end">
          {member.teams.map((t, i) => (
            <span
              key={member.name + t + i}
              className="text-white font-light px-3 h-6 border-2 rounded-2xl flex justify-center items-center"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
