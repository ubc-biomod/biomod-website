import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
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
  const [selectedMember, setSelectedMember] = useState<MemberInfo | null>(null);

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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

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
          <MemberCard
            key={m.name + i}
            {...m}
            onClick={() => setSelectedMember(m)}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <MemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MemberCard(member: MemberInfo & { onClick: () => void }) {
  return (
    <div
      className="relative flex flex-col bg-gray-600 w-80 h-96 justify-end rounded-3xl
            px-4 py-5 hover:opacity-60 cursor-pointer shrink-0 transition-opacity duration-150"
      onClick={member.onClick}
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

function MemberModal({
  member,
  onClose,
}: {
  member: MemberInfo;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="relative w-full md:w-1/3 h-64 md:h-[600px]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none object-cover"
                  quality={100}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col p-6 md:p-8 w-full md:w-2/3">
                <h2 className="text-primary font-bold text-3xl md:text-4xl mb-2">
                  {member.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {member.teams.map((t, i) => (
                    <span
                      key={member.name + t + i}
                      className="text-primary font-light px-4 py-2 border-2 border-primary rounded-2xl text-sm md:text-base"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="text-gray-700 text-base md:text-lg leading-relaxed">
                  <p className="whitespace-pre-wrap">{member.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
