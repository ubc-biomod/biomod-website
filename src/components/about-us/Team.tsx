import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { MemberInfo, members } from "./members";
import Image from "next/image";

export default function Team() {
  const FAST = 50;
  const SLOW = 75;
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
        Meet some of the faces behind UBC BIOMOD
      </h1>
      {/* <h2 className="text-primary text-xl md:text-2xl text-center">
        Meet some of the faces behind BIOMOD
      </h2> */}

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

function MemberCard(member: MemberInfo) {
  return (
    <div
      className="relative flex flex-col bg-gray-600 w-80 h-96 justify-end rounded-3xl
            px-4 py-5 hover:opacity-60 cursor-pointer shrink-0 transition-opacity duration-150"
    >
      <div className="absolute inset-0">
        <Image
          className="rounded-3xl brightness-50"
          src={member.photo}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="flex flex-col max-h-[50%] z-10">
        <h4 className="text-white font-bold">{member.name}</h4>
        <div className="shrink overflow-y-scroll">
          <p className="text-white">{member.description}</p>
        </div>
        <div className="pt-6 shrink-0 flex flex-row gap-x-4 justify-end overflow-x-scroll">
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
