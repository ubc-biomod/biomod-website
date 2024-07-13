"use client";
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
    <div className="flex flex-col items-center">
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
    <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
      <span className="flex flex-row items-center gap-x-3">
        {isExpanded ? (
          <FiMinus className="w-[1rem] h-[1rem]" />
        ) : (
          <FiPlus className="w-[1rem] h-[1rem]" />
        )}
        <h3 className="text-black font-bold text-[1rem] md:text-[1.5rem]">
          {" "}
          {props.question}{" "}
        </h3>
      </span>
      {isExpanded && (
        <p className="px-[1.75rem] text-[0.8rem] md:text-[1rem]">
          {" "}
          {props.answer}{" "}
        </p>
      )}
    </div>
  );
}
