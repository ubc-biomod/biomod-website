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
      question: "What is BIOMOD?",
      answer:
        "BIOMOD is an international design competition for undergraduate students in biomolecular nanotechnology. It was founded by the Wyss Institute for biologically inspired engineering at Harvard University. Now it is hosted by a variety of different institutes, we have previously been to Japan to compete.",
    },
    {
      question: "How much time to I have to commit?",
      answer:
        "Some roles require heavier time commitments than others (i.e, exec team, wet lab in the summer), while others will only ramp up in September (i.e, finalizing website). Overall, the time commitment, and how much you want to contribute is up to you. Typical member will be 2-10h.",
    },
    {
      question: "When does UBC BIOMOD recruit?",
      answer:
        "We usually send out our application form last August and early September (around the time of imagine day) for the main hiring. However, we may do some impromptu hiring throughout the year for certain positions.",
    },
    {
      question: "Do I have to be an engineering student to join?",
      answer:
        "No, we are an interdisciplinary team with members from Engineering, Science, Land Food Systems, Sauder and Arts. You can be in any major and join us.",
    },
    {
      question: "Can I apply if I am a 1st year?",
      answer:
        "Yes, we believe that as long as you are willing to learn and motivated, you will succeed in UBC BIOMOD. We do not look at your technical skills when you apply.",
    },
    {
      question: "Do I get paid if I join UBC BIOMOD?",
      answer:
        "Unfortunately no. But you will get to meet some great people and develop your skills when you join.",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-y-2 lg:gap-y-4">
      <h2 className="text-primary text-headingRegMob lg:text-headingReg font-semibold text-center font-title">
        Frequently Asked Questions
      </h2>

      <div
        className="grid grid-cols-1 w-full gap-y-[1rem]
                md:grid-cols-2 md:gap-x-[20rem] md:gap-y-[1.25rem]
                lg:w-11/12"
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
          <h3 className="text-primary w-full font-light text-xl lg:text-3xl">
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
