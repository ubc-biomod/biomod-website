"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type qaPairProps = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const pairs: qaPairProps[] = [
    {
      question: "What does “free updates” include?",
      answer:
        '"Free updates" typically include enhancements, bug fixes, security patches, performance improvements, and feature enhancements that users can obtain without additional cost after the initial purchase.',
    },
    {
      question: "What does “free updates” include?",
      answer:
        '"Free updates" typically include enhancements, bug fixes, security patches, performance improvements, and feature enhancements that users can obtain without additional cost after the initial purchase.',
    },
    {
      question: "What does “free updates” include?",
      answer:
        '"Free updates" typically include enhancements, bug fixes, security patches, performance improvements, and feature enhancements that users can obtain without additional cost after the initial purchase.',
    },
    {
      question: "What does “free updates” include?",
      answer:
        '"Free updates" typically include enhancements, bug fixes, security patches, performance improvements, and feature enhancements that users can obtain without additional cost after the initial purchase.',
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-[3.5rem]">
      <h2 className="text-primary text-headingReg text-center">
        Frequently Asked Questions
      </h2>

      <div
        className="grid grid-cols-1 w-full gap-y-[1rem]
                md:grid-cols-2 md:gap-x-[3.94rem] md:gap-y-[1.25rem]
                lg:w-9/12"
      >
        {pairs.map((pair: qaPairProps, idx: number) => {
          return <QAPair {...pair} key={idx + pair.question} />;
        })}
      </div>
    </div>
  );
}

function QAPair(props: qaPairProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="cursor-pointer text-center md:text-left"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-row items-start gap-x-3">
        {isExpanded ? (
          <FiMinus className="w-[1rem] h-[1rem] my-[0.75rem] hidden md:inline shrink-0" />
        ) : (
          <FiPlus className="w-[1rem] h-[1rem] my-[0.75rem] hidden md:inline shrink-0" />
        )}

        <div className="flex flex-col w-full">
          <h3 className="text-black w-full font-bold text-[1.5rem]">
            {props.question}
          </h3>

          <AnimatePresence>
            {isExpanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "max-content" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                className="text-[0.8rem] md:text-[1rem]"
              >
                {props.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
